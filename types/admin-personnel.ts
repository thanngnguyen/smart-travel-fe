export type PersonnelRole = "admin" | "guide" | "operator" | "support";

export type PersonnelStatus =
  | "active"
  | "on-tour"
  | "off-duty"
  | "on-leave"
  | "suspended";

export type PersonnelRequestType =
  | "leave"
  | "access"
  | "training"
  | "availability";

export interface PersonnelFilterOption {
  id: string;
  label: string;
  isActive?: boolean;
}

export interface PersonnelMember {
  id: string;
  fullName: string;
  staffCode: string;
  role: PersonnelRole;
  roleLabel: string;
  department: string;
  email: string;
  phone: string;
  joinedDate: string;
  status: PersonnelStatus;
  statusLabel: string;
  avatarType: "initials" | "image";
  avatarInitials?: string;
  avatarUrl?: string;
  avatarToneClassName?: string;
  certifications: string[];
  languages: string[];
  assignedTours: number;
  monthlyWorkloadDays: number;
  monthlyWorkloadLimit: number;
  performanceScore: number;
  lastActiveAt: string;
}

export interface PersonnelRequestItem {
  id: string;
  memberId: string;
  memberName: string;
  memberRoleLabel: string;
  type: PersonnelRequestType;
  typeLabel: string;
  requestedAt: string;
  note: string;
  status: "pending" | "approved" | "rejected";
}

export interface PersonnelActionLog {
  id: string;
  title: string;
  message: string;
  createdAt: string;
}

export interface PersonnelMetrics {
  totalHeadcount: number;
  activeHeadcount: number;
  guidesOnTour: number;
  onLeaveCount: number;
  suspendedCount: number;
  pendingRequests: number;
}

export interface PersonnelRoleBreakdownItem {
  id: PersonnelRole;
  label: string;
  count: number;
}

export interface PersonnelWorkloadAlertItem {
  memberId: string;
  memberName: string;
  ratioPercent: number;
  statusLabel: string;
}

export interface PersonnelFlashMessage {
  tone: "success" | "error" | "info";
  text: string;
}
