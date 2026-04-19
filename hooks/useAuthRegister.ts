"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthRoleOption, RegisterFormData } from "@/types/auth";
import { resolveAuthHomePath, saveAuthSession } from "@/lib/auth-session";

const DEFAULT_REGISTER_FORM: RegisterFormData = {
  name: "",
  email: "",
  password: "",
  role: "customer",
};

const ROLE_OPTIONS: AuthRoleOption[] = [
  { value: "customer", label: "Khách hàng" },
  { value: "guide", label: "Hướng dẫn viên" },
  { value: "admin", label: "Quản trị viên" },
];

export function useAuthRegister() {
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterFormData>(
    DEFAULT_REGISTER_FORM,
  );

  const updateField = <K extends keyof RegisterFormData>(
    field: K,
    value: RegisterFormData[K],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    saveAuthSession({
      email: formData.email,
      role: formData.role,
      displayName: formData.name,
    });
    router.push(resolveAuthHomePath(formData.role));
  };

  return {
    formData,
    roleOptions: ROLE_OPTIONS,
    updateField,
    handleRegister,
  };
}
