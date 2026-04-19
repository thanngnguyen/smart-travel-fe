"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  resolveAuthHomePath,
  resolveFrontendRoleFromBackendRole,
  saveAuthSession,
} from "@/lib/auth-session";
import { BackendAuthResponse, BackendAuthRole } from "@/types/backend-contract";

function resolveMockBackendRole(email: string): BackendAuthRole {
  const normalized = email.trim().toLowerCase();

  if (normalized.includes("admin")) {
    return "ADMIN";
  }

  if (normalized.includes("guide") || normalized.includes("hdv")) {
    return "GUIDE";
  }

  return "USER";
}

function createMockJwtToken(email: string, role: BackendAuthRole) {
  const payload = {
    sub: email.trim().toLowerCase(),
    roles: [`ROLE_${role}`],
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
  };

  return `mock.${btoa(JSON.stringify(payload))}.signature`;
}

function mockBackendLogin(email: string): BackendAuthResponse {
  const role = resolveMockBackendRole(email);

  return {
    role,
    token: createMockJwtToken(email, role),
  };
}

export function useAuthLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setErrorMessage("Email không hợp lệ theo chuẩn backend.");
      return;
    }

    if (password.trim().length < 6) {
      setErrorMessage(
        "Mật khẩu cần ít nhất 6 ký tự để mô phỏng backend login.",
      );
      return;
    }

    setErrorMessage(null);
    setIsSubmitting(true);

    const authResponse = mockBackendLogin(normalizedEmail);
    const frontendRole = resolveFrontendRoleFromBackendRole(authResponse.role);

    saveAuthSession({
      email: normalizedEmail,
      backendRole: authResponse.role,
      token: authResponse.token,
    });

    setIsSubmitting(false);
    router.push(resolveAuthHomePath(frontendRole));
  };

  return {
    email,
    password,
    isSubmitting,
    errorMessage,
    setEmail,
    setPassword,
    handleLogin,
  };
}
