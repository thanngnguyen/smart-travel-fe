"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthRoleOption, RegisterFormData } from "@/types/auth";

const DEFAULT_REGISTER_FORM: RegisterFormData = {
  name: "",
  email: "",
  password: "",
  role: "customer",
};

const ROLE_OPTIONS: AuthRoleOption[] = [
  { value: "customer", label: "Khách hàng" },
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
    const target = formData.role === "admin" ? "/admin" : "/";
    router.push(target);
  };

  return {
    formData,
    roleOptions: ROLE_OPTIONS,
    updateField,
    handleRegister,
  };
}
