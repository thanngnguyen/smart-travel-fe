"use client";
import LoginGatewayForm from "@/components/auth/login/LoginGatewayForm";
import LoginIdentityPanel from "@/components/auth/login/LoginIdentityPanel";
import { useAuthLogin } from "@/hooks/useAuthLogin";

export default function LoginPage() {
  const {
    email,
    password,
    isSubmitting,
    errorMessage,
    setEmail,
    setPassword,
    handleLogin,
  } = useAuthLogin();

  return (
    <div className="w-full bg-surface-container-lowest shadow-[0_20px_40px_rgba(25,28,30,0.06)] rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
      <LoginIdentityPanel />
      <LoginGatewayForm
        email={email}
        password={password}
        isSubmitting={isSubmitting}
        errorMessage={errorMessage}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onLogin={handleLogin}
      />
    </div>
  );
}
