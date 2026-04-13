"use client";
import RegisterGatewayForm from "@/components/auth/register/RegisterGatewayForm";
import { useAuthRegister } from "@/hooks/useAuthRegister";

export default function RegisterPage() {
  const { formData, roleOptions, updateField, handleRegister } =
    useAuthRegister();

  return (
    <RegisterGatewayForm
      formData={formData}
      roleOptions={roleOptions}
      onFieldChange={updateField}
      onSubmit={handleRegister}
    />
  );
}
