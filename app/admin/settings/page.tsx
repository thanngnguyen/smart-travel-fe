import AISensitivityCard from "@/components/admin/settings/AISensitivityCard";
import BusinessInfoSection from "@/components/admin/settings/BusinessInfoSection";
import PaymentApiSection from "@/components/admin/settings/PaymentApiSection";
import RbacRolesSection from "@/components/admin/settings/RbacRolesSection";
import RecentActivityCard from "@/components/admin/settings/RecentActivityCard";
import SaveSettingsButton from "@/components/admin/settings/SaveSettingsButton";
import SettingsHeader from "@/components/admin/settings/SettingsHeader";
import { useAdminSettingsData } from "@/hooks/useAdminSettingsData";

export default function AdminSettingsPage() {
  const {
    businessInfo,
    apiCredentials,
    rbacRoles,
    recentActivities,
    aiThresholdLabel,
    aiThresholdPercent,
  } = useAdminSettingsData();

  return (
    <div className="bg-surface min-h-screen">
      <main className="min-h-screen p-8 lg:p-12">
        <SettingsHeader />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          <section className="xl:col-span-8 flex flex-col gap-8">
            <BusinessInfoSection info={businessInfo} />
            <PaymentApiSection credentials={apiCredentials} />
            <RbacRolesSection roles={rbacRoles} />
          </section>

          <aside className="xl:col-span-4 flex flex-col gap-8">
            <AISensitivityCard
              thresholdLabel={aiThresholdLabel}
              thresholdPercent={aiThresholdPercent}
            />
            <RecentActivityCard activities={recentActivities} />
            <SaveSettingsButton />
          </aside>
        </div>
      </main>
    </div>
  );
}
