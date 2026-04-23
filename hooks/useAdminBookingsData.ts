"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  applyBookingMutation,
  BookingMutationAction,
  canConfirmRecord,
  canMarkPaymentSuccess,
  loadAdminBookingRecords,
  saveAdminBookingRecords,
  toBookingRow,
  ADMIN_BOOKINGS_STORAGE_KEY,
  ADMIN_BOOKINGS_UPDATED_EVENT,
} from "@/lib/admin-bookings-store";
import {
  BookingFilterTab,
  BookingMetric,
  BookingRow,
  BookingsPagination,
} from "@/types/admin-bookings";
import { formatCurrency } from "@/utils/formatters";

const PAGE_SIZE = 8;

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function useAdminBookingsData() {
  const [bookingRecords, setBookingRecords] = useState(() =>
    loadAdminBookingRecords(),
  );
  const [activeFilterId, setActiveFilterId] =
    useState<BookingFilterTab["id"]>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBookingIds, setSelectedBookingIds] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [notice, setNotice] = useState<string | null>(null);

  const refreshFromStorage = useCallback(() => {
    setBookingRecords(loadAdminBookingRecords());
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

  const filteredRecords = useMemo(() => {
    const normalizedQuery = normalizeText(searchQuery);

    return bookingRecords.filter((record) => {
      const matchFilter =
        activeFilterId === "all" || record.status === activeFilterId;

      if (!matchFilter) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const searchable = normalizeText(
        `${record.id} ${record.customerName} ${record.customerEmail} ${record.tourName}`,
      );

      return searchable.includes(normalizedQuery);
    });
  }, [activeFilterId, bookingRecords, searchQuery]);

  const pageCount = Math.max(1, Math.ceil(filteredRecords.length / PAGE_SIZE));
  const safeCurrentPage = Math.min(currentPage, pageCount);
  const startIndex = (safeCurrentPage - 1) * PAGE_SIZE;

  const pagedRecords = filteredRecords.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  );
  const rows = useMemo<BookingRow[]>(() => {
    return pagedRecords.map((record, index) =>
      toBookingRow(record, startIndex + index),
    );
  }, [pagedRecords, startIndex]);

  const visibleRowIds = useMemo(() => rows.map((row) => row.id), [rows]);
  const selectedCount = selectedBookingIds.length;

  const allVisibleSelected =
    visibleRowIds.length > 0 &&
    visibleRowIds.every((id) => selectedBookingIds.includes(id));

  const metrics = useMemo<BookingMetric[]>(() => {
    const confirmedRevenue = bookingRecords
      .filter(
        (record) =>
          record.status === "CONFIRMED" && record.paymentStatus === "SUCCESS",
      )
      .reduce((sum, record) => sum + record.amountValue, 0);

    const pendingCount = bookingRecords.filter(
      (record) => record.status === "PENDING",
    ).length;

    const riskCount = bookingRecords.filter(
      (record) => record.isHighRisk,
    ).length;

    return [
      {
        id: "total-bookings",
        label: "Tong don dat cho",
        value: bookingRecords.length.toLocaleString("en-US"),
        deltaText: `${filteredRecords.length} hien thi`,
        deltaToneClassName: "text-primary",
      },
      {
        id: "revenue",
        label: "Doanh thu da xac nhan",
        value: formatCurrency(confirmedRevenue),
        deltaText: "CONFIRMED + SUCCESS",
        deltaToneClassName: "text-green-600",
      },
      {
        id: "pending",
        label: "Booking dang pending",
        value: pendingCount.toString(),
        deltaText: "Can doi soat payment",
        deltaToneClassName: "text-secondary",
      },
      {
        id: "ai-alert",
        label: "Canh bao van hanh",
        value: `${riskCount} booking can review`,
        cardTone: riskCount > 0 ? "alert" : "default",
        noteText: riskCount > 0 ? "warning" : "info",
      },
    ];
  }, [bookingRecords, filteredRecords.length]);

  const filterTabs = useMemo<BookingFilterTab[]>(() => {
    const confirmedCount = bookingRecords.filter(
      (record) => record.status === "CONFIRMED",
    ).length;
    const pendingCount = bookingRecords.filter(
      (record) => record.status === "PENDING",
    ).length;
    const cancelledCount = bookingRecords.filter(
      (record) => record.status === "CANCELLED",
    ).length;

    return [
      {
        id: "all",
        label: "Tat ca",
        count: bookingRecords.length,
        isActive: activeFilterId === "all",
      },
      {
        id: "PENDING",
        label: "PENDING",
        count: pendingCount,
        isActive: activeFilterId === "PENDING",
      },
      {
        id: "CONFIRMED",
        label: "CONFIRMED",
        count: confirmedCount,
        isActive: activeFilterId === "CONFIRMED",
      },
      {
        id: "CANCELLED",
        label: "CANCELLED",
        count: cancelledCount,
        isActive: activeFilterId === "CANCELLED",
      },
    ];
  }, [activeFilterId, bookingRecords]);

  const pagination = useMemo<BookingsPagination>(() => {
    const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
    const rangeStart = filteredRecords.length === 0 ? 0 : startIndex + 1;
    const rangeEnd = Math.min(startIndex + PAGE_SIZE, filteredRecords.length);

    return {
      summaryLabel: `Hien thi ${rangeStart}-${rangeEnd} / ${filteredRecords.length} booking`,
      currentPage: safeCurrentPage,
      pages,
      totalItems: filteredRecords.length,
      pageSize: PAGE_SIZE,
    };
  }, [filteredRecords.length, pageCount, safeCurrentPage, startIndex]);

  const mutateSingleBooking = useCallback(
    (bookingId: string, action: BookingMutationAction) => {
      let latestMessage = "";

      setBookingRecords((previous) => {
        const result = applyBookingMutation(previous, bookingId, action);
        latestMessage = result.message;

        if (result.changed) {
          saveAdminBookingRecords(result.nextRecords);
        }

        return result.nextRecords;
      });

      setNotice(latestMessage || "No changes applied.");

      if (action === "cancel-booking") {
        setSelectedBookingIds((previous) =>
          previous.filter((selectedId) => selectedId !== bookingId),
        );
      }
    },
    [],
  );

  const applyBulkAction = useCallback(
    (action: BookingMutationAction) => {
      if (selectedBookingIds.length === 0) {
        setNotice("Chon booking truoc khi thuc hien tac vu hang loat.");
        return;
      }

      let changedCount = 0;

      setBookingRecords((previous) => {
        let nextRecords = previous;

        selectedBookingIds.forEach((bookingId) => {
          const result = applyBookingMutation(nextRecords, bookingId, action);
          if (result.changed) {
            changedCount += 1;
          }
          nextRecords = result.nextRecords;
        });

        if (changedCount > 0) {
          saveAdminBookingRecords(nextRecords);
        }

        return nextRecords;
      });

      if (changedCount > 0) {
        setNotice(`Da cap nhat ${changedCount} booking.`);
      } else {
        setNotice("Khong co booking nao du dieu kien de cap nhat.");
      }
    },
    [selectedBookingIds],
  );

  const setFilter = useCallback((filterId: BookingFilterTab["id"]) => {
    setActiveFilterId(filterId);
    setCurrentPage(1);
  }, []);

  const onSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  }, []);

  const clearFilters = useCallback(() => {
    setActiveFilterId("all");
    setSearchQuery("");
    setCurrentPage(1);
  }, []);

  const toggleSelectBooking = useCallback((bookingId: string) => {
    setSelectedBookingIds((previous) => {
      if (previous.includes(bookingId)) {
        return previous.filter((id) => id !== bookingId);
      }

      return [...previous, bookingId];
    });
  }, []);

  const toggleSelectVisibleRows = useCallback(() => {
    setSelectedBookingIds((previous) => {
      if (allVisibleSelected) {
        return previous.filter((id) => !visibleRowIds.includes(id));
      }

      const next = new Set(previous);
      visibleRowIds.forEach((id) => next.add(id));
      return Array.from(next);
    });
  }, [allVisibleSelected, visibleRowIds]);

  const isBookingSelected = useCallback(
    (bookingId: string) => selectedBookingIds.includes(bookingId),
    [selectedBookingIds],
  );

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const exportCsv = useCallback(() => {
    const exportRows = filteredRecords.map((record) => toBookingRow(record, 0));

    const header = [
      "bookingCode",
      "customerName",
      "customerEmail",
      "tourName",
      "departureDate",
      "amount",
      "status",
      "paymentStatus",
      "paymentMethod",
      "updatedAt",
    ];

    const lines = exportRows.map((row) =>
      [
        row.bookingCode,
        row.customerName,
        row.customerEmail,
        row.tourName,
        row.departureDate,
        row.amount,
        row.status,
        row.paymentStatus,
        row.paymentMethod,
        row.updatedAtLabel,
      ]
        .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
        .join(","),
    );

    const csvContent = [header.join(","), ...lines].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "admin-bookings-export.csv";
    link.click();
    URL.revokeObjectURL(url);

    setNotice("Da xuat CSV tu bo loc hien tai.");
  }, [filteredRecords]);

  const pendingRecordsReadyToConfirm = useMemo(() => {
    return bookingRecords.filter((record) => canConfirmRecord(record)).length;
  }, [bookingRecords]);

  const pendingRecordsCanMarkPaid = useMemo(() => {
    return bookingRecords.filter((record) => canMarkPaymentSuccess(record))
      .length;
  }, [bookingRecords]);

  return {
    metrics,
    filterTabs,
    rows,
    pagination,
    notice,
    activeFilterId,
    searchQuery,
    selectedCount,
    allVisibleSelected,
    isBookingSelected,
    setFilter,
    onSearchChange,
    clearFilters,
    toggleSelectBooking,
    toggleSelectVisibleRows,
    mutateSingleBooking,
    applyBulkAction,
    goToPage,
    exportCsv,
    pendingRecordsReadyToConfirm,
    pendingRecordsCanMarkPaid,
  };
}
