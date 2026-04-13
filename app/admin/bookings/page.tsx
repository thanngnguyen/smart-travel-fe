import BookingsFilterBar from "@/components/admin/bookings/BookingsFilterBar";
import BookingsHeader from "@/components/admin/bookings/BookingsHeader";
import BookingsMetricsGrid from "@/components/admin/bookings/BookingsMetricsGrid";
import BookingsTableSection from "@/components/admin/bookings/BookingsTableSection";
import { useAdminBookingsData } from "@/hooks/useAdminBookingsData";

export default function BookingsManagementPage() {
  const { metrics, filterTabs, rows, pagination } = useAdminBookingsData();

  return (
    <div className="flex flex-col min-h-screen">
      <BookingsHeader />

      <BookingsMetricsGrid metrics={metrics} />

      <BookingsFilterBar tabs={filterTabs} />

      <BookingsTableSection rows={rows} pagination={pagination} />
    </div>
  );
}
