export type CustomerSegment = "vip" | "standard" | "family" | "corporate";

export type CustomerStatus = "active" | "dormant" | "at-risk" | "blocked";

export interface CustomerFilterOption {
  id: string;
  label: string;
  isActive?: boolean;
}

/**
 * View-model cho dòng khách hàng trong bảng admin.
 * Mapping từ BackendCustomerResponse:
 *   id ← id (number → string), name ← fullName, email ← user.email,
 *   phone ← phone, avatarUrl ← avatarUrl
 * FE-computed/enriched: segment, lifetimeValue, totalTrips,
 *   assignedConcierge, lastBookingDate, customerCode
 */
export interface AdminCustomerRow {
  id: string;
  name: string;
  customerCode: string;
  email: string;
  phone: string;
  avatarType: "initials" | "image";
  avatarInitials?: string;
  avatarUrl?: string;
  avatarToneClassName?: string;
  segment: CustomerSegment;
  segmentLabel: string;
  status: CustomerStatus;
  statusLabel: string;
  joinedDate: string;
  lastBookingDate: string;
  totalTrips: number;
  lifetimeValue: string;
  assignedConcierge: string;
}

export interface CustomerSegmentBar {
  id: string;
  label: string;
  barHeightPercent: number;
}

export interface CustomersSummaryMetrics {
  totalCustomers: number;
  activeCustomers: number;
  vipCustomers: number;
  blockedCustomers: number;
  atRiskCustomers: number;
}

export interface CustomersPagination {
  summaryLabel: string;
  currentPage: number;
  pages: number[];
}

export interface CustomerFlashMessage {
  tone: "success" | "error" | "info";
  text: string;
}
