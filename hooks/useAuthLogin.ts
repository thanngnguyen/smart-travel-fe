"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  resolveAuthHomePath,
  resolveFrontendRoleFromBackendRole,
  saveAuthSession,
} from "@/lib/auth-session";
// Giữ nguyên các import type của bạn
import { BackendAuthRole } from "@/types/backend-contract";

export function useAuthLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Đổi thành async để gọi API
  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();
    
    // Giữ nguyên logic Validate rất xịn của bạn
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setErrorMessage("Email không hợp lệ.");
      return;
    }

    if (password.trim().length < 6) {
      setErrorMessage("Mật khẩu cần ít nhất 6 ký tự.");
      return;
    }

    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      // 1. GỌI API THẬT SANG SPRING BOOT (Cổng 8081)
      const response = await fetch("http://localhost:8081/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: normalizedEmail, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // ĐĂNG NHẬP THÀNH CÔNG

        // LƯU Ý: Chỗ này phụ thuộc vào cái DTO trả về của Spring Boot.
        // Giả sử Spring Boot trả về object có dạng { token: "abc...", role: "ADMIN" }
        // Bạn hãy đổi "data.role" và "data.token" cho khớp với tên biến của Java nhé.
        const backendRole: BackendAuthRole = data.role || "USER"; 
        const token = data.token;

        const frontendRole = resolveFrontendRoleFromBackendRole(backendRole);

        // 2. Tận dụng hàm saveAuthSession có sẵn của bạn để lưu Token
        saveAuthSession({
          email: normalizedEmail,
          backendRole: backendRole,
          token: token, 
        });

        // 3. Tận dụng hàm chuyển trang có sẵn
        router.push(resolveAuthHomePath(frontendRole));

      } else {
        // Lỗi từ Spring Boot (Sai pass, user không tồn tại...)
        setErrorMessage(data.message || "Tài khoản hoặc mật khẩu không chính xác.");
      }
    } catch (error) {
      setErrorMessage("Không thể kết nối đến máy chủ Spring Boot. Vui lòng thử lại sau!");
    } finally {
      setIsSubmitting(false);
    }
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