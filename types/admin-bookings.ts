import {
  BackendBookingStatus,
  BackendPaymentMethod,
  BackendPaymentStatus,
} from "@/types/backend-contract";

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
  id: "all" | BackendBookingStatus;
  label: string;
  count?: number;
  isActive?: boolean;
}

/**
 * View-model cho dòng booking trong bảng admin.
 * Mapping từ BackendBookingResponse:
 *   id ← id (number → string), status ← status,
 *   amount ← finalPrice (formatted), tourName ← tourTitle
 * FE-computed: bookingCode, initials, customerName/Email (join Customer),
 *   departureDate/Meta (join Departure), paymentStatus (join Payment),
 *   isHighRisk, canConfirm, canCancel, canMarkPaymentSuccess, canRefund
 */
export interface BookingRow {
  id: string;
  bookingCode: string;
  initials: string;
  avatarToneClassName: string;
  customerName: string;
  customerEmail: string;
  tourName: string;
  departureDate: string;
  departureMeta: string;
  amount: string;
  amountValue: number;
  status: BackendBookingStatus;
  statusLabel: string;
  statusTone: AdminBadgeTone;
  paymentStatus: BackendPaymentStatus;
  paymentStatusLabel: string;
  paymentTone: AdminBadgeTone;
  paymentMethod: BackendPaymentMethod;
  updatedAtLabel: string;
  canConfirm: boolean;
  canCancel: boolean;
  canMarkPaymentSuccess: boolean;
  canRefund: boolean;
  isHighRisk: boolean;
}

export interface BookingsPagination {
  summaryLabel: string;
  currentPage: number;
  pages: number[];
  totalItems: number;
  pageSize: number;
}
