import { BackendAuthRole } from "@/types/backend-contract";

export type AuthRole = "customer" | "guide" | "admin";

export interface AuthSession {
  email: string;
  displayName: string;
  role: AuthRole;
  backendRole: BackendAuthRole;
  token: string;
  loginAtIso: string;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  otpCode: string;
}

export interface AuthRoleOption {
  value: AuthRole;
  label: string;
}

export type RegisterFlowStep = "register" | "verify-otp";
