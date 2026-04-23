import { AdminCustomerRow } from "@/types/admin-customers";
import { PersonnelMember } from "@/types/admin-personnel";
import { ConflictCard } from "@/types/admin-tours";

export function resolveAdminCustomerStatusTone(
  status: AdminCustomerRow["status"],
) {
  if (status === "active") {
    return "success" as const;
  }

  if (status === "dormant") {
    return "info" as const;
  }

  if (status === "at-risk") {
    return "warning" as const;
  }

  return "error" as const;
}

export function resolveAdminCustomerSegmentTone(
  segment: AdminCustomerRow["segment"],
) {
  if (segment === "vip") {
    return "primary-soft" as const;
  }

  if (segment === "corporate") {
    return "tertiary-fixed" as const;
  }

  if (segment === "family") {
    return "surface-glass" as const;
  }

  return "surface" as const;
}

export function resolveAdminPersonnelStatusTone(
  status: PersonnelMember["status"],
) {
  switch (status) {
    case "active":
      return "success" as const;
    case "on-tour":
      return "primary" as const;
    case "off-duty":
      return "info" as const;
    case "on-leave":
      return "warning" as const;
    default:
      return "error" as const;
  }
}

export function resolveAdminPersonnelRoleTone(role: PersonnelMember["role"]) {
  switch (role) {
    case "admin":
      return "primary-soft" as const;
    case "guide":
      return "tertiary-fixed" as const;
    case "operator":
      return "surface-glass" as const;
    default:
      return "surface" as const;
  }
}

export function resolveTourConflictTone(theme: ConflictCard["theme"]) {
  if (theme === "error") {
    return "error" as const;
  }

  return "warning" as const;
}
