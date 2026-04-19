export type BackendAuthRole = "USER" | "GUIDE" | "ADMIN";

export type BackendBookingStatus = "PENDING" | "CONFIRMED" | "CANCELLED";

export type BackendPaymentMethod = "CASH" | "BANK_TRANSFER" | "VNPAY" | "MOMO";

export type BackendPaymentStatus =
  | "PENDING"
  | "SUCCESS"
  | "FAILED"
  | "REFUNDED";

export type BackendDepartureStatus =
  | "PLANNING"
  | "OPEN"
  | "LOCKED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED";

export type BackendPassengerType = "ADULT" | "CHILD";

export interface BackendAuthResponse {
  token: string;
  role: BackendAuthRole;
}

export interface BackendErrorResponse {
  timestamp: string;
  status: number;
  error: string;
  message: string | Record<string, string>;
  path: string;
}
