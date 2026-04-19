import { AuthRole, AuthSession } from "@/types/auth";
import { BackendAuthRole } from "@/types/backend-contract";

export const AUTH_SESSION_STORAGE_KEY = "stms-auth-session-v1";

const ROLE_HOME_PATH: Record<AuthRole, string> = {
  customer: "/",
  guide: "/guide-portal",
  admin: "/admin",
};

const BACKEND_TO_APP_ROLE: Record<BackendAuthRole, AuthRole> = {
  USER: "customer",
  GUIDE: "guide",
  ADMIN: "admin",
};

const APP_TO_BACKEND_ROLE: Record<AuthRole, BackendAuthRole> = {
  customer: "USER",
  guide: "GUIDE",
  admin: "ADMIN",
};

const DEFAULT_ROLE_DISPLAY_NAME: Record<AuthRole, string> = {
  customer: "Khach hang",
  guide: "Huong dan vien",
  admin: "Quan tri vien",
};

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function createDisplayNameFromEmail(email: string) {
  const localPart = normalizeEmail(email).split("@")[0] ?? "";
  const sanitized = localPart.replace(/[^a-z0-9._-]/gi, " ").trim();

  if (!sanitized) {
    return "Nguoi dung";
  }

  return sanitized
    .split(/[._\s-]+/)
    .filter(Boolean)
    .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
    .join(" ");
}

function isBackendAuthRole(value: unknown): value is BackendAuthRole {
  return value === "USER" || value === "GUIDE" || value === "ADMIN";
}

export function resolveFrontendRoleFromBackendRole(
  backendRole: BackendAuthRole,
) {
  return BACKEND_TO_APP_ROLE[backendRole];
}

export function resolveBackendRoleFromFrontendRole(role: AuthRole) {
  return APP_TO_BACKEND_ROLE[role];
}

export function resolveAuthHomePath(role: AuthRole) {
  return ROLE_HOME_PATH[role];
}

export function saveAuthSession(payload: {
  email: string;
  backendRole: BackendAuthRole;
  token: string;
  displayName?: string;
}) {
  const normalizedEmail = normalizeEmail(payload.email);
  const role = resolveFrontendRoleFromBackendRole(payload.backendRole);

  const session: AuthSession = {
    email: normalizedEmail,
    role,
    backendRole: payload.backendRole,
    token: payload.token,
    displayName:
      payload.displayName?.trim() ||
      (normalizedEmail
        ? createDisplayNameFromEmail(normalizedEmail)
        : DEFAULT_ROLE_DISPLAY_NAME[role]),
    loginAtIso: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    window.localStorage.setItem(
      AUTH_SESSION_STORAGE_KEY,
      JSON.stringify(session),
    );
  }

  return session;
}

export function loadAuthSession() {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(AUTH_SESSION_STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as
      | (Partial<AuthSession> & { backendRole?: unknown; role?: unknown })
      | null;
    if (!parsed || typeof parsed !== "object") {
      return null;
    }

    const backendRole = isBackendAuthRole(parsed.backendRole)
      ? parsed.backendRole
      : parsed.role === "admin"
        ? "ADMIN"
        : parsed.role === "guide"
          ? "GUIDE"
          : parsed.role === "customer"
            ? "USER"
            : null;

    if (!backendRole) {
      return null;
    }

    const role = resolveFrontendRoleFromBackendRole(backendRole);

    return {
      ...parsed,
      email: normalizeEmail(parsed.email || ""),
      role,
      backendRole,
      token:
        typeof parsed.token === "string" && parsed.token.trim().length > 0
          ? parsed.token
          : "mock-legacy-token",
      displayName: parsed.displayName || DEFAULT_ROLE_DISPLAY_NAME[role],
      loginAtIso: parsed.loginAtIso || new Date(0).toISOString(),
    };
  } catch {
    return null;
  }
}

export function clearAuthSession() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(AUTH_SESSION_STORAGE_KEY);
}
