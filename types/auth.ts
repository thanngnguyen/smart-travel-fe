export type AuthRole = "customer" | "admin";

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
