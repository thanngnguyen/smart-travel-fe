"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthRole } from "@/types/auth";

export function useAuthLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent, role: AuthRole) => {
    e.preventDefault();
    router.push(role === "admin" ? "/admin" : "/");
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    handleLogin,
  };
}
