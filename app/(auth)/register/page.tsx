"use client";
import RegisterGatewayForm from "@/components/auth/register/RegisterGatewayForm";
import { useAuthRegister } from "@/hooks/useAuthRegister";

export default function RegisterPage() {
  const {
    step,
    formData,
    isSubmitting,
    notice,
    updateField,
    submitRegister,
    verifyOtp,
    resendOtp,
    goBackToRegister,
  } = useAuthRegister();

  return (
    <RegisterGatewayForm
      step={step}
      formData={formData}
      isSubmitting={isSubmitting}
      notice={notice}
      onFieldChange={updateField}
      onSubmitRegister={submitRegister}
      onVerifyOtp={verifyOtp}
      onResendOtp={resendOtp}
      onBackToRegister={goBackToRegister}
    />
  );
}
