import { AuthRole, AuthSession } from "@/types/auth";

export const AUTH_SESSION_STORAGE_KEY = "stms-auth-session-v1";

const ROLE_HOME_PATH: Record<AuthRole, string> = {
  customer: "/",
  guide: "/guide-portal",
  admin: "/admin",
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

export function resolveAuthHomePath(role: AuthRole) {
  return ROLE_HOME_PATH[role];
}

export function saveAuthSession(payload: {
  email: string;
  role: AuthRole;
  displayName?: string;
}) {
  const normalizedEmail = normalizeEmail(payload.email);

  const session: AuthSession = {
    email: normalizedEmail,
    role: payload.role,
    displayName:
      payload.displayName?.trim() ||
      (normalizedEmail
        ? createDisplayNameFromEmail(normalizedEmail)
        : DEFAULT_ROLE_DISPLAY_NAME[payload.role]),
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
    const parsed = JSON.parse(raw) as AuthSession;
    if (!parsed || typeof parsed !== "object") {
      return null;
    }

    if (!parsed.role || !ROLE_HOME_PATH[parsed.role]) {
      return null;
    }

    return {
      ...parsed,
      email: normalizeEmail(parsed.email || ""),
      displayName: parsed.displayName || DEFAULT_ROLE_DISPLAY_NAME[parsed.role],
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
