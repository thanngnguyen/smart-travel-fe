"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { RegisterFlowStep, RegisterFormData } from "@/types/auth";
import {
  resolveAuthHomePath,
  resolveFrontendRoleFromBackendRole,
  saveAuthSession,
} from "@/lib/auth-session";
import { BackendAuthRole } from "@/types/backend-contract";

const DEFAULT_REGISTER_FORM: RegisterFormData = {
  name: "",
  email: "",
  password: "",
  otpCode: "",
};

function generateOtpCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function createMockUserToken(email: string, role: BackendAuthRole) {
  const payload = {
    sub: email.trim().toLowerCase(),
    roles: [`ROLE_${role}`],
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
  };

  return `mock.${btoa(JSON.stringify(payload))}.signature`;
}

type RegisterNotice = {
  tone: "success" | "error" | "info";
  text: string;
} | null;

export function useAuthRegister() {
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterFormData>(
    DEFAULT_REGISTER_FORM,
  );
  const [step, setStep] = useState<RegisterFlowStep>("register");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notice, setNotice] = useState<RegisterNotice>(null);
  const [generatedOtp, setGeneratedOtp] = useState<string | null>(null);

  const updateField = <K extends keyof RegisterFormData>(
    field: K,
    value: RegisterFormData[K],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (notice) {
      setNotice(null);
    }
  };

  const submitRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const normalizedEmail = formData.email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setNotice({
        tone: "error",
        text: "Email không hợp lệ. Vui lòng kiểm tra đúng chuẩn backend.",
      });
      return;
    }

    if (formData.password.trim().length < 6) {
      setNotice({
        tone: "error",
        text: "Mật khẩu cần tối thiểu 6 ký tự.",
      });
      return;
    }

    if (formData.name.trim().length < 3) {
      setNotice({
        tone: "error",
        text: "Vui lòng nhập họ tên đầy đủ trước khi đăng ký.",
      });
      return;
    }

    setIsSubmitting(true);

    const otp = generateOtpCode();
    setGeneratedOtp(otp);
    setStep("verify-otp");
    setFormData((previous) => ({
      ...previous,
      email: normalizedEmail,
      otpCode: "",
    }));
    setNotice({
      tone: "info",
      text: `Đăng ký thành công. OTP demo: ${otp} (mô phỏng email backend, hết hạn sau 5 phút).`,
    });

    setIsSubmitting(false);
  };

  const verifyOtp = (e: React.FormEvent) => {
    e.preventDefault();

    if (step !== "verify-otp") {
      return;
    }

    if (!generatedOtp) {
      setNotice({
        tone: "error",
        text: "Phiên OTP không hợp lệ. Vui lòng đăng ký lại.",
      });
      return;
    }

    if (formData.otpCode.trim() !== generatedOtp) {
      setNotice({
        tone: "error",
        text: "Mã OTP không chính xác.",
      });
      return;
    }

    setIsSubmitting(true);
    const backendRole: BackendAuthRole = "USER";

    saveAuthSession({
      email: formData.email,
      backendRole,
      token: createMockUserToken(formData.email, backendRole),
      displayName: formData.name,
    });

    setIsSubmitting(false);
    router.push(
      resolveAuthHomePath(resolveFrontendRoleFromBackendRole(backendRole)),
    );
  };

  const resendOtp = () => {
    if (step !== "verify-otp") {
      return;
    }

    const nextOtp = generateOtpCode();
    setGeneratedOtp(nextOtp);
    setFormData((previous) => ({
      ...previous,
      otpCode: "",
    }));
    setNotice({
      tone: "info",
      text: `OTP mới (demo): ${nextOtp}.`,
    });
  };

  const goBackToRegister = () => {
    setStep("register");
    setGeneratedOtp(null);
    setFormData((previous) => ({
      ...previous,
      otpCode: "",
    }));
    setNotice(null);
  };

  return {
    step,
    formData,
    isSubmitting,
    notice,
    updateField,
    submitRegister,
    verifyOtp,
    resendOtp,
    goBackToRegister,
  };
}
