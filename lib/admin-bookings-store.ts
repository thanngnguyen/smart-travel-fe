import { AdminBadgeTone, BookingRow } from "@/types/admin-bookings";
import {
  BackendBookingStatus,
  BackendPaymentMethod,
  BackendPaymentStatus,
} from "@/types/backend-contract";
import { formatCurrency } from "@/utils/formatters";

export const ADMIN_BOOKINGS_STORAGE_KEY = "stms-admin-bookings-v2";
export const ADMIN_BOOKINGS_UPDATED_EVENT = "stms-admin-bookings-updated";

export type BookingMutationAction =
  | "mark-payment-success"
  | "confirm-booking"
  | "cancel-booking"
  | "refund-booking"
  | "flag-risk"
  | "clear-risk";

export interface AdminBookingRecord {
  id: string;
  customerName: string;
  customerEmail: string;
  tourName: string;
  departureDate: string;
  departureMeta: string;
  amountValue: number;
  status: BackendBookingStatus;
  paymentStatus: BackendPaymentStatus;
  paymentMethod: BackendPaymentMethod;
  updatedAtIso: string;
  isHighRisk: boolean;
}

export interface AdminBookingUpdatePayload {
  customerName: string;
  customerEmail: string;
  tourName: string;
  departureDate: string;
  departureMeta: string;
  amountValue: number;
  status: BackendBookingStatus;
  paymentStatus: BackendPaymentStatus;
  paymentMethod: BackendPaymentMethod;
  adminNote?: string;
}

const AVATAR_TONE_POOL = [
  "bg-blue-100 text-primary",
  "bg-amber-100 text-amber-700",
  "bg-slate-200 text-slate-700",
  "bg-indigo-100 text-indigo-700",
  "bg-emerald-100 text-emerald-700",
  "bg-rose-100 text-rose-700",
];

const DEFAULT_BOOKING_RECORDS: AdminBookingRecord[] = [
  {
    id: "stms-1001",
    customerName: "Julianne Moore",
    customerEmail: "j.moore@travel.com",
    tourName: "Santorini Sunset Escape",
    departureDate: "12 Oct, 2026",
    departureMeta: "Gate 4B • Economy",
    amountValue: 2450,
    status: "CONFIRMED",
    paymentStatus: "SUCCESS",
    paymentMethod: "VNPAY",
    updatedAtIso: "2026-04-12T08:32:00.000Z",
    isHighRisk: false,
  },
  {
    id: "stms-1002",
    customerName: "Robert Wagner",
    customerEmail: "robert.w@web.de",
    tourName: "Swiss Alps Premium Rail",
    departureDate: "05 Nov, 2026",
    departureMeta: "Zurich HB • First Class",
    amountValue: 5120,
    status: "PENDING",
    paymentStatus: "PENDING",
    paymentMethod: "BANK_TRANSFER",
    updatedAtIso: "2026-04-19T04:10:00.000Z",
    isHighRisk: false,
  },
  {
    id: "stms-1003",
    customerName: "Elena Lopez",
    customerEmail: "e.lopez@studio.io",
    tourName: "Kyoto Sakura Explorer",
    departureDate: "29 Oct, 2026",
    departureMeta: "Osaka Intl • Boutique",
    amountValue: 1890,
    status: "CANCELLED",
    paymentStatus: "REFUNDED",
    paymentMethod: "MOMO",
    updatedAtIso: "2026-04-10T10:05:00.000Z",
    isHighRisk: false,
  },
  {
    id: "stms-1004",
    customerName: "Thomas Klein",
    customerEmail: "tk@corp.net",
    tourName: "Classic Serengeti Safari",
    departureDate: "14 Dec, 2026",
    departureMeta: "JRO • Luxury Camp",
    amountValue: 3900,
    status: "CONFIRMED",
    paymentStatus: "SUCCESS",
    paymentMethod: "VNPAY",
    updatedAtIso: "2026-04-22T13:41:00.000Z",
    isHighRisk: false,
  },
  {
    id: "stms-1005",
    customerName: "Mina Park",
    customerEmail: "mina.park@kmail.kr",
    tourName: "Iceland Aurora Circle",
    departureDate: "03 Jan, 2027",
    departureMeta: "Reykjavik • Winter Group",
    amountValue: 4480,
    status: "PENDING",
    paymentStatus: "FAILED",
    paymentMethod: "CASH",
    updatedAtIso: "2026-04-20T07:26:00.000Z",
    isHighRisk: true,
  },
  {
    id: "stms-1006",
    customerName: "An Nguyen",
    customerEmail: "an.nguyen@stms.vn",
    tourName: "Maldivian Solitude",
    departureDate: "19 Oct, 2026",
    departureMeta: "Baa Atoll • Ocean Villa",
    amountValue: 5400,
    status: "PENDING",
    paymentStatus: "PENDING",
    paymentMethod: "MOMO",
    updatedAtIso: "2026-04-23T06:11:00.000Z",
    isHighRisk: false,
  },
];

function cloneDefaults() {
  return DEFAULT_BOOKING_RECORDS.map((record) => ({ ...record }));
}

function isBookingStatus(value: unknown): value is BackendBookingStatus {
  return value === "PENDING" || value === "CONFIRMED" || value === "CANCELLED";
}

function isPaymentStatus(value: unknown): value is BackendPaymentStatus {
  return (
    value === "PENDING" ||
    value === "SUCCESS" ||
    value === "FAILED" ||
    value === "REFUNDED"
  );
}

function isPaymentMethod(value: unknown): value is BackendPaymentMethod {
  return (
    value === "CASH" ||
    value === "BANK_TRANSFER" ||
    value === "VNPAY" ||
    value === "MOMO"
  );
}

function emitBookingsUpdatedEvent() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new CustomEvent(ADMIN_BOOKINGS_UPDATED_EVENT));
}

function normalizeRecords(data: unknown) {
  if (!Array.isArray(data)) {
    return cloneDefaults();
  }

  const normalized = data
    .filter(
      (item): item is Partial<AdminBookingRecord> =>
        typeof item === "object" && item !== null,
    )
    .map((item) => {
      const id = String(item.id || "").trim();
      if (!id) {
        return null;
      }

      const status = isBookingStatus(item.status) ? item.status : "PENDING";
      const paymentStatus = isPaymentStatus(item.paymentStatus)
        ? item.paymentStatus
        : "PENDING";
      const paymentMethod = isPaymentMethod(item.paymentMethod)
        ? item.paymentMethod
        : "VNPAY";
      const amountValue = Number(item.amountValue);

      return {
        id,
        customerName: String(item.customerName || "Unknown Customer"),
        customerEmail: String(item.customerEmail || "unknown@example.com"),
        tourName: String(item.tourName || "Unknown Tour"),
        departureDate: String(item.departureDate || "TBD"),
        departureMeta: String(item.departureMeta || ""),
        amountValue: Number.isFinite(amountValue) ? amountValue : 0,
        status,
        paymentStatus,
        paymentMethod,
        updatedAtIso:
          typeof item.updatedAtIso === "string" && item.updatedAtIso
            ? item.updatedAtIso
            : new Date().toISOString(),
        isHighRisk: Boolean(item.isHighRisk),
      } satisfies AdminBookingRecord;
    })
    .filter((item): item is AdminBookingRecord => item !== null);

  if (normalized.length === 0) {
    return cloneDefaults();
  }

  return normalized;
}

function resolveStatusTone(
  status: BackendBookingStatus,
  paymentStatus: BackendPaymentStatus,
): AdminBadgeTone {
  if (status === "CANCELLED") {
    return "error";
  }

  if (status === "CONFIRMED") {
    return "success";
  }

  if (paymentStatus === "FAILED") {
    return "warning";
  }

  return "info";
}

function resolveStatusLabel(
  status: BackendBookingStatus,
  paymentStatus: BackendPaymentStatus,
) {
  if (status === "CANCELLED" && paymentStatus === "REFUNDED") {
    return "CANCELLED · REFUNDED";
  }

  if (status === "CONFIRMED") {
    return "CONFIRMED · PAYMENT SUCCESS";
  }

  if (paymentStatus === "FAILED") {
    return "PENDING · PAYMENT FAILED";
  }

  return "PENDING · WAITING PAYMENT";
}

function resolvePaymentTone(status: BackendPaymentStatus): AdminBadgeTone {
  if (status === "SUCCESS") {
    return "success";
  }

  if (status === "FAILED") {
    return "error";
  }

  if (status === "REFUNDED") {
    return "warning";
  }

  return "info";
}

function toInitials(value: string) {
  const parts = value.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return "NA";
  }

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function formatUpdatedAt(iso: string) {
  return new Date(iso).toLocaleString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
  });
}

export function canMarkPaymentSuccess(record: AdminBookingRecord) {
  return record.paymentStatus !== "SUCCESS" && record.status !== "CANCELLED";
}

export function canConfirmRecord(record: AdminBookingRecord) {
  return record.status === "PENDING" && record.paymentStatus === "SUCCESS";
}

export function canCancelRecord(record: AdminBookingRecord) {
  return record.status !== "CANCELLED";
}

export function canRefundRecord(record: AdminBookingRecord) {
  return record.status === "CONFIRMED" && record.paymentStatus === "SUCCESS";
}

export function toBookingRow(
  record: AdminBookingRecord,
  index: number,
): BookingRow {
  return {
    id: record.id,
    bookingCode: record.id.toUpperCase(),
    initials: toInitials(record.customerName),
    avatarToneClassName: AVATAR_TONE_POOL[index % AVATAR_TONE_POOL.length],
    customerName: record.customerName,
    customerEmail: record.customerEmail,
    tourName: record.tourName,
    departureDate: record.departureDate,
    departureMeta: record.departureMeta,
    amount: formatCurrency(record.amountValue),
    amountValue: record.amountValue,
    status: record.status,
    statusLabel: resolveStatusLabel(record.status, record.paymentStatus),
    statusTone: resolveStatusTone(record.status, record.paymentStatus),
    paymentStatus: record.paymentStatus,
    paymentStatusLabel: record.paymentStatus,
    paymentTone: resolvePaymentTone(record.paymentStatus),
    paymentMethod: record.paymentMethod,
    updatedAtLabel: formatUpdatedAt(record.updatedAtIso),
    canConfirm: canConfirmRecord(record),
    canCancel: canCancelRecord(record),
    canMarkPaymentSuccess: canMarkPaymentSuccess(record),
    canRefund: canRefundRecord(record),
    isHighRisk: record.isHighRisk,
  };
}

export function loadAdminBookingRecords() {
  if (typeof window === "undefined") {
    return cloneDefaults();
  }

  try {
    const storedData = window.localStorage.getItem(ADMIN_BOOKINGS_STORAGE_KEY);
    if (!storedData) {
      const defaults = cloneDefaults();
      window.localStorage.setItem(
        ADMIN_BOOKINGS_STORAGE_KEY,
        JSON.stringify(defaults),
      );
      return defaults;
    }

    const parsed = JSON.parse(storedData);
    return normalizeRecords(parsed);
  } catch {
    const defaults = cloneDefaults();
    window.localStorage.setItem(
      ADMIN_BOOKINGS_STORAGE_KEY,
      JSON.stringify(defaults),
    );
    return defaults;
  }
}

export function saveAdminBookingRecords(records: AdminBookingRecord[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    ADMIN_BOOKINGS_STORAGE_KEY,
    JSON.stringify(records),
  );
  emitBookingsUpdatedEvent();
}

export function applyBookingMutation(
  records: AdminBookingRecord[],
  bookingId: string,
  action: BookingMutationAction,
) {
  const target = records.find((item) => item.id === bookingId);

  if (!target) {
    return {
      nextRecords: records,
      changed: false,
      message: `Booking ${bookingId.toUpperCase()} not found.`,
    };
  }

  let changed = false;
  let message = "";

  const nextRecords = records.map((record) => {
    if (record.id !== bookingId) {
      return record;
    }

    const next = { ...record };

    if (action === "mark-payment-success") {
      if (next.paymentStatus === "SUCCESS") {
        message = `${next.id.toUpperCase()} already has payment SUCCESS.`;
        return record;
      }

      if (next.status === "CANCELLED") {
        message = `${next.id.toUpperCase()} is CANCELLED and cannot accept payment.`;
        return record;
      }

      next.paymentStatus = "SUCCESS";
      if (next.status === "PENDING") {
        next.status = "CONFIRMED";
      }
      changed = true;
      message = `Payment marked SUCCESS for ${next.id.toUpperCase()}.`;
    }

    if (action === "confirm-booking") {
      if (next.status === "CONFIRMED") {
        message = `${next.id.toUpperCase()} already CONFIRMED.`;
        return record;
      }

      if (next.status === "CANCELLED") {
        message = `${next.id.toUpperCase()} is CANCELLED.`;
        return record;
      }

      if (next.paymentStatus !== "SUCCESS") {
        message = `Cannot confirm ${next.id.toUpperCase()} before payment SUCCESS.`;
        return record;
      }

      next.status = "CONFIRMED";
      changed = true;
      message = `Booking ${next.id.toUpperCase()} moved to CONFIRMED.`;
    }

    if (action === "cancel-booking") {
      if (next.status === "CANCELLED") {
        message = `${next.id.toUpperCase()} already CANCELLED.`;
        return record;
      }

      next.status = "CANCELLED";
      changed = true;
      message = `Booking ${next.id.toUpperCase()} moved to CANCELLED.`;
    }

    if (action === "refund-booking") {
      if (next.paymentStatus !== "SUCCESS") {
        message = `${next.id.toUpperCase()} has no SUCCESS payment to refund.`;
        return record;
      }

      next.paymentStatus = "REFUNDED";
      next.status = "CANCELLED";
      changed = true;
      message = `Booking ${next.id.toUpperCase()} refunded and cancelled.`;
    }

    if (action === "flag-risk") {
      if (next.isHighRisk) {
        message = `${next.id.toUpperCase()} already flagged for manual review.`;
        return record;
      }

      next.isHighRisk = true;
      changed = true;
      message = `Manual review flag enabled for ${next.id.toUpperCase()}.`;
    }

    if (action === "clear-risk") {
      if (!next.isHighRisk) {
        message = `${next.id.toUpperCase()} has no active risk flag.`;
        return record;
      }

      next.isHighRisk = false;
      changed = true;
      message = `Manual review flag removed for ${next.id.toUpperCase()}.`;
    }

    if (changed) {
      next.updatedAtIso = new Date().toISOString();
      return next;
    }

    return record;
  });

  return { nextRecords, changed, message };
}

export function applyBookingFieldUpdate(
  records: AdminBookingRecord[],
  bookingId: string,
  payload: AdminBookingUpdatePayload,
) {
  const target = records.find((item) => item.id === bookingId);
  if (!target) {
    return {
      nextRecords: records,
      changed: false,
      message: `Booking ${bookingId.toUpperCase()} not found.`,
    };
  }

  if (payload.status === "CONFIRMED" && payload.paymentStatus !== "SUCCESS") {
    return {
      nextRecords: records,
      changed: false,
      message: "CONFIRMED booking requires payment status SUCCESS.",
    };
  }

  if (!Number.isFinite(payload.amountValue) || payload.amountValue <= 0) {
    return {
      nextRecords: records,
      changed: false,
      message: "Amount must be greater than 0.",
    };
  }

  const nextRecords = records.map((record) => {
    if (record.id !== bookingId) {
      return record;
    }

    const nextStatus =
      payload.paymentStatus === "REFUNDED" ? "CANCELLED" : payload.status;

    return {
      ...record,
      customerName: payload.customerName.trim() || record.customerName,
      customerEmail: payload.customerEmail.trim() || record.customerEmail,
      tourName: payload.tourName.trim() || record.tourName,
      departureDate: payload.departureDate.trim() || record.departureDate,
      departureMeta: payload.departureMeta.trim() || record.departureMeta,
      amountValue: payload.amountValue,
      status: nextStatus,
      paymentStatus: payload.paymentStatus,
      paymentMethod: payload.paymentMethod,
      updatedAtIso: new Date().toISOString(),
    };
  });

  return {
    nextRecords,
    changed: true,
    message: `Booking ${bookingId.toUpperCase()} updated in frontend mock store.`,
  };
}
