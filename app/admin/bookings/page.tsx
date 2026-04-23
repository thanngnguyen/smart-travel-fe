"use client";

import BookingsFilterBar from "@/components/admin/bookings/BookingsFilterBar";
import BookingsHeader from "@/components/admin/bookings/BookingsHeader";
import BookingsMetricsGrid from "@/components/admin/bookings/BookingsMetricsGrid";
import BookingsTableSection from "@/components/admin/bookings/BookingsTableSection";
import { useAdminBookingsData } from "@/hooks/useAdminBookingsData";

export default function BookingsManagementPage() {
  const {
    metrics,
    filterTabs,
    rows,
    pagination,
    notice,
    activeFilterId,
    searchQuery,
    selectedCount,
    allVisibleSelected,
    pendingRecordsReadyToConfirm,
    pendingRecordsCanMarkPaid,
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
  } = useAdminBookingsData();

  return (
    <div className="flex flex-col min-h-screen">
      <BookingsHeader
        onExportCsv={exportCsv}
        pendingRecordsReadyToConfirm={pendingRecordsReadyToConfirm}
        pendingRecordsCanMarkPaid={pendingRecordsCanMarkPaid}
      />

      {notice ? (
        <div className="mb-4 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm font-bold text-on-surface">
          {notice}
        </div>
      ) : null}

      <BookingsMetricsGrid metrics={metrics} />

      <BookingsFilterBar
        tabs={filterTabs}
        searchQuery={searchQuery}
        activeFilterId={activeFilterId}
        selectedCount={selectedCount}
        onSearchQueryChange={onSearchChange}
        onFilterChange={setFilter}
        onMarkSelectedPaid={() => applyBulkAction("mark-payment-success")}
        onConfirmSelected={() => applyBulkAction("confirm-booking")}
        onCancelSelected={() => applyBulkAction("cancel-booking")}
        onClearFilters={clearFilters}
      />

      <BookingsTableSection
        rows={rows}
        pagination={pagination}
        allVisibleSelected={allVisibleSelected}
        isBookingSelected={isBookingSelected}
        onToggleSelectBooking={toggleSelectBooking}
        onToggleSelectVisibleRows={toggleSelectVisibleRows}
        onMarkPaymentSuccess={(bookingId) =>
          mutateSingleBooking(bookingId, "mark-payment-success")
        }
        onConfirmBooking={(bookingId) =>
          mutateSingleBooking(bookingId, "confirm-booking")
        }
        onCancelBooking={(bookingId) =>
          mutateSingleBooking(bookingId, "cancel-booking")
        }
        onRefundBooking={(bookingId) =>
          mutateSingleBooking(bookingId, "refund-booking")
        }
        onPageChange={goToPage}
      />
    </div>
  );
}
