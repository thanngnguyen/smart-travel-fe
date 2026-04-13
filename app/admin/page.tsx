import ActivityGuidesSection from "@/components/admin/dashboard/ActivityGuidesSection";
import DashboardHeader from "@/components/admin/dashboard/DashboardHeader";
import DashboardStatsGrid from "@/components/admin/dashboard/DashboardStatsGrid";
import ModeratorInventorySection from "@/components/admin/dashboard/ModeratorInventorySection";
import { useAdminDashboardData } from "@/hooks/useAdminDashboardData";

export default function AdminDashboard() {
  const { metrics, moderatorAlerts, departures, activities, guides } =
    useAdminDashboardData();

  return (
    <>
      <DashboardHeader />

      <div className="p-8 space-y-8 max-w-screen-2xl mx-auto w-full">
        <DashboardStatsGrid metrics={metrics} />

        <ModeratorInventorySection
          alerts={moderatorAlerts}
          departures={departures}
        />

        <ActivityGuidesSection activities={activities} guides={guides} />
      </div>
    </>
  );
}
