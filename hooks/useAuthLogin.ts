"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthRole } from "@/types/auth";
import { resolveAuthHomePath, saveAuthSession } from "@/lib/auth-session";

export function useAuthLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent, role: AuthRole) => {
    e.preventDefault();
    saveAuthSession({
      email,
      role,
    });
    router.push(resolveAuthHomePath(role));
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    handleLogin,
  };
}
