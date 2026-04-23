"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ADMIN_BOOKINGS_STORAGE_KEY,
  ADMIN_BOOKINGS_UPDATED_EVENT,
  applyBookingMutation,
  loadAdminBookingRecords,
  saveAdminBookingRecords,
  toBookingRow,
} from "@/lib/admin-bookings-store";
import {
  BookingActivityLogItem,
  BookingAiInsight,
  BookingHeaderData,
  BookingItineraryMap,
  BookingPaymentBreakdown,
  BookingQuickAction,
  BookingQuickActionId,
  PassengerInfo,
  SpecialRequestItem,
  TourHighlightData,
} from "@/types/admin-booking-details";
import { formatCurrency } from "@/utils/formatters";

const DEFAULT_MAP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDWCQixtElx0_lIKUH0oy5ExCEY22P0EsBQwIw102dPbiFgEC1HVEiUNwdQ8A32OyCHhyH2aCjlYy5uu9a1MLuircOLEmk0EI8h-wFK0JZ6cEuDjq54jKgBlpbh-4HXtEvu-pqzXZAf_gOZVbd4IaX2XOLiKXOmH8XacF8MJjsy--ZJCBNkiMSO4pLU3uiKngP0KNUkQ4kKcfLKCFwv8Y7ze5D8A3TvQGHVSSdBLJpQxRuSjNev84PdJFygzb4WCaw99vsEr1P675U";
const DEFAULT_TOUR_IMAGE =
  "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80";

export function useAdminBookingDetailsData(bookingId?: string) {
  const [records, setRecords] = useState(() => loadAdminBookingRecords());
  const [notice, setNotice] = useState<string | null>(null);

  const refreshFromStorage = useCallback(() => {
    setRecords(loadAdminBookingRecords());
  }, []);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (!event.key || event.key === ADMIN_BOOKINGS_STORAGE_KEY) {
        refreshFromStorage();
      }
    };

    const handleLocalEvent = () => {
      refreshFromStorage();
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener(ADMIN_BOOKINGS_UPDATED_EVENT, handleLocalEvent);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(
        ADMIN_BOOKINGS_UPDATED_EVENT,
        handleLocalEvent,
      );
    };
  }, [refreshFromStorage]);

  const activeRecord = useMemo(() => {
    if (!records.length) {
      return null;
    }

    if (!bookingId) {
      return records[0];
    }

    return records.find((record) => record.id === bookingId) ?? null;
  }, [bookingId, records]);

  const bookingRow = useMemo(() => {
    if (!activeRecord) {
      return null;
    }

    return toBookingRow(activeRecord, 0);
  }, [activeRecord]);

  const runQuickAction = useCallback(
    (actionId: BookingQuickActionId) => {
      if (!activeRecord) {
        setNotice("Khong tim thay booking de xu ly.");
        return;
      }

      setRecords((previous) => {
        const result = applyBookingMutation(
          previous,
          activeRecord.id,
          actionId,
        );

        if (result.changed) {
          saveAdminBookingRecords(result.nextRecords);
        }

        setNotice(result.message || "No changes applied.");
        return result.nextRecords;
      });
    },
    [activeRecord],
  );

  if (!bookingRow) {
    const emptyHeader: BookingHeaderData = {
      bookingCode: "Booking not found",
      confirmationText: "No record available",
    };

    return {
      bookingRow,
      header: emptyHeader,
      tourHighlight: null,
      primaryPassenger: null,
      specialRequests: [] as SpecialRequestItem[],
      activityLogs: [] as BookingActivityLogItem[],
      payment: null,
      aiInsight: null,
      quickActions: [] as BookingQuickAction[],
      itineraryMap: null,
      notice,
      runQuickAction,
    };
  }

  const subtotalAmount = bookingRow.amountValue * 0.92;
  const feeAmount = bookingRow.amountValue - subtotalAmount;

  const header: BookingHeaderData = {
    bookingCode: `Booking #${bookingRow.bookingCode}`,
    confirmationText: `${bookingRow.status} • Payment ${bookingRow.paymentStatus}`,
  };

  const tourHighlight: TourHighlightData = {
    imageUrl: DEFAULT_TOUR_IMAGE,
    statusLabel: `Booking status: ${bookingRow.status}`,
    title: bookingRow.tourName,
    tierLabel: bookingRow.paymentMethod,
    departureDate: bookingRow.departureDate,
    returnDate: "TBD",
    groupSize: "2-4 pax",
    location: bookingRow.departureMeta,
  };

  const primaryPassenger: PassengerInfo = {
    id: `passenger-${bookingRow.id}`,
    name: bookingRow.customerName,
    passengerId: bookingRow.bookingCode,
    email: bookingRow.customerEmail,
    phone: "+84 900 000 000",
    nationality: "Unknown",
    passportMasked: "N/A",
  };

  const specialRequests: SpecialRequestItem[] = [
    {
      id: "ops-note",
      title: "Ops note",
      description: bookingRow.isHighRisk
        ? "Booking dang duoc gan co can manual review do payment risk."
        : "Chua co yeu cau dac biet tu khach.",
      styleClassName: bookingRow.isHighRisk
        ? "bg-tertiary-fixed/30"
        : "bg-surface-container-low",
      titleClassName: bookingRow.isHighRisk ? "text-tertiary" : "text-outline",
    },
  ];

  const activityLogs: BookingActivityLogItem[] = [
    {
      id: `${bookingRow.id}-latest`,
      icon: "history",
      iconClassName: "bg-primary",
      title: "Cap nhat gan nhat",
      description: `Booking ${bookingRow.bookingCode} dang o trang thai ${bookingRow.status}.`,
      timestamp: `${bookingRow.updatedAtLabel} • Frontend mock store`,
    },
    {
      id: `${bookingRow.id}-payment`,
      icon: "payments",
      iconClassName: "bg-secondary-container",
      title: "Trang thai payment",
      description: `Payment ${bookingRow.paymentStatus} qua ${bookingRow.paymentMethod}.`,
      timestamp: `${bookingRow.updatedAtLabel} • Payment sync`,
    },
  ];

  const payment: BookingPaymentBreakdown = {
    bookingId: bookingRow.id,
    bookingStatus: bookingRow.status,
    paymentStatus: bookingRow.paymentStatus,
    paymentMethod: bookingRow.paymentMethod,
    paidAmount: bookingRow.amount,
    statusLabel: `${bookingRow.paymentStatus} • ${bookingRow.status}`,
    subtotal: formatCurrency(subtotalAmount),
    feesAndTaxes: formatCurrency(feeAmount),
    total: bookingRow.amount,
  };

  const aiInsight: BookingAiInsight = {
    recommendationTitle: "Ops Recommendation",
    recommendationDescription:
      bookingRow.paymentStatus === "FAILED"
        ? "Uu tien lien he khach de cap nhat phuong thuc thanh toan truoc khi giu cho het han."
        : "Theo doi thay doi departure va thong bao concierge neu co chenh lech lich trinh.",
    urgentActionTitle: "Next Action",
    urgentActionDescription:
      bookingRow.status === "PENDING"
        ? "Can payment SUCCESS de chuyen booking sang CONFIRMED."
        : "Theo doi nhu cau bo sung va cap nhat docs truoc ngay khoi hanh.",
  };

  const quickActions: BookingQuickAction[] = [
    {
      id: "mark-payment-success",
      label: "Mark Paid",
      icon: "credit_score",
      textClassName: "text-primary",
    },
    {
      id: "confirm-booking",
      label: "Confirm",
      icon: "task_alt",
      textClassName: "text-primary",
    },
    {
      id: "refund-booking",
      label: "Refund",
      icon: "sync",
      textClassName: "text-primary",
    },
    {
      id: "cancel-booking",
      label: "Cancel",
      icon: "cancel",
      textClassName: "text-error",
    },
    {
      id: bookingRow.isHighRisk ? "clear-risk" : "flag-risk",
      label: bookingRow.isHighRisk ? "Clear Risk" : "Flag Risk",
      icon: bookingRow.isHighRisk ? "shield" : "warning",
      textClassName: bookingRow.isHighRisk ? "text-primary" : "text-tertiary",
    },
  ];

  const itineraryMap: BookingItineraryMap = {
    imageUrl: DEFAULT_MAP_IMAGE,
  };

  return {
    bookingRow,
    header,
    tourHighlight,
    primaryPassenger,
    specialRequests,
    activityLogs,
    payment,
    aiInsight,
    quickActions,
    itineraryMap,
    notice,
    runQuickAction,
  };
}
