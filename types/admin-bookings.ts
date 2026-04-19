import { BackendBookingStatus } from "@/types/backend-contract";

export type AdminBadgeTone =
  | "success"
  | "warning"
  | "error"
  | "info"
  | "neutral"
  | "primary";

export interface BookingMetric {
  id: string;
  label: string;
  value: string;
  deltaText?: string;
  deltaToneClassName?: string;
  noteText?: string;
  cardTone?: "default" | "alert";
}

export interface BookingFilterTab {
  id: string;
  label: string;
  isActive?: boolean;
}

export interface BookingRow {
  id: string;
  initials: string;
  avatarToneClassName: string;
  customerName: string;
  customerEmail: string;
  tourName: string;
  departureDate: string;
  departureMeta: string;
  amount: string;
  status: BackendBookingStatus;
  statusLabel: string;
  statusTone: AdminBadgeTone;
}

export interface BookingsPagination {
  summaryLabel: string;
  currentPage: number;
  pages: number[];
}
