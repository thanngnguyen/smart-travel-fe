import AdminButton from "@/components/ui/AdminButton";
import FilterTabs from "@/components/ui/FilterTabs";
import Icon from "@/components/ui/Icon";
import SearchField from "@/components/ui/SearchField";
import { UserFilterTab } from "@/types/admin-users";

interface UsersFilterBarProps {
  tabs: UserFilterTab[];
}

export default function UsersFilterBar({ tabs }: UsersFilterBarProps) {
  return (
    <div className="bg-surface-container-high rounded-3xl p-4 mb-6 flex flex-wrap items-center gap-4">
      <SearchField
        placeholder="Tìm người dùng theo tên hoặc email..."
        className="flex-1 min-w-75"
      />

      <FilterTabs tabs={tabs} />

      <AdminButton variant="surfaceMuted" size="sm">
        <Icon name="filter_list" className="text-[18px]" />
        Bộ lọc
      </AdminButton>
    </div>
  );
}
