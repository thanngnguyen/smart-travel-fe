export type AuthRole = "customer" | "guide" | "admin";

export interface AuthSession {
  email: string;
  displayName: string;
  role: AuthRole;
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
  role: AuthRole;
}

export interface AuthRoleOption {
  value: AuthRole;
  label: string;
}
