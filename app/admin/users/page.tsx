import UsersFilterBar from "@/components/admin/users/UsersFilterBar";
import UsersHeader from "@/components/admin/users/UsersHeader";
import UsersInsightsSection from "@/components/admin/users/UsersInsightsSection";
import UsersTableSection from "@/components/admin/users/UsersTableSection";
import { useAdminUsersData } from "@/hooks/useAdminUsersData";

export default function UsersManagementPage() {
  const {
    filterTabs,
    users,
    growthBars,
    pagination,
    totalActiveUsers,
    growthDescription,
    securityDescription,
  } = useAdminUsersData();

  return (
    <div className="flex flex-col min-h-screen">
      <UsersHeader />

      <UsersFilterBar tabs={filterTabs} />

      <UsersTableSection rows={users} pagination={pagination} />

      <UsersInsightsSection
        growthBars={growthBars}
        totalActiveUsers={totalActiveUsers}
        growthDescription={growthDescription}
        securityDescription={securityDescription}
      />
    </div>
  );
}
