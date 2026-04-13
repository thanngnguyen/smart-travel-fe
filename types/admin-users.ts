export type UserBadgeTone =
  | "success"
  | "warning"
  | "error"
  | "info"
  | "neutral"
  | "primary";

export interface UserFilterTab {
  id: string;
  label: string;
  isActive?: boolean;
}

export interface AdminUserRow {
  id: string;
  name: string;
  userCode: string;
  email: string;
  avatarType: "initials" | "image";
  avatarInitials?: string;
  avatarUrl?: string;
  avatarToneClassName?: string;
  roleLabel: string;
  roleTone: UserBadgeTone;
  statusLabel: string;
  statusDotClassName: string;
  joinedDate: string;
}

export interface UserGrowthData {
  id: string;
  barHeightPercent: number;
}

export interface UsersPagination {
  summaryLabel: string;
  currentPage: number;
  pages: number[];
}
