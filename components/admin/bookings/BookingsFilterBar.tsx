import AdminButton from "@/components/ui/AdminButton";
import FilterTabs from "@/components/ui/FilterTabs";
import Icon from "@/components/ui/Icon";
import SearchField from "@/components/ui/SearchField";
import { BookingFilterTab } from "@/types/admin-bookings";

interface BookingsFilterBarProps {
  tabs: BookingFilterTab[];
  searchQuery: string;
  activeFilterId: BookingFilterTab["id"];
  selectedCount: number;
  onSearchQueryChange: (value: string) => void;
  onFilterChange: (value: BookingFilterTab["id"]) => void;
  onMarkSelectedPaid: () => void;
  onConfirmSelected: () => void;
  onCancelSelected: () => void;
  onClearFilters: () => void;
}

export default function BookingsFilterBar({
  tabs,
  searchQuery,
  activeFilterId,
  selectedCount,
  onSearchQueryChange,
  onFilterChange,
  onMarkSelectedPaid,
  onConfirmSelected,
  onCancelSelected,
  onClearFilters,
}: BookingsFilterBarProps) {
  return (
    <div className="bg-surface-container-high rounded-3xl p-4 mb-6 flex flex-col gap-4">
      <SearchField
        placeholder="Tìm khách hàng, tên tour hoặc ID..."
        className="w-full relative flex-1"
        value={searchQuery}
        onChange={onSearchQueryChange}
      />

      <div className="flex flex-wrap items-center gap-3">
        <FilterTabs
          tabs={tabs}
          activeId={activeFilterId}
          onTabChange={(tabId) =>
            onFilterChange(tabId as BookingFilterTab["id"])
          }
        />

        <AdminButton variant="surfaceMuted" size="sm" onClick={onClearFilters}>
          <Icon name="restart_alt" className="text-[18px]" />
          Xóa lọc
        </AdminButton>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold uppercase tracking-wide text-outline">
          Đã chọn: {selectedCount}
        </span>

        <AdminButton
          variant="surface"
          size="sm"
          onClick={onMarkSelectedPaid}
          disabled={selectedCount === 0}
          className="disabled:opacity-50"
        >
          <Icon name="credit_score" className="text-[18px]" />
          Mark Payment SUCCESS
        </AdminButton>

        <AdminButton
          variant="surface"
          size="sm"
          onClick={onConfirmSelected}
          disabled={selectedCount === 0}
          className="disabled:opacity-50"
        >
          <Icon name="task_alt" className="text-[18px]" />
          Confirm booking
        </AdminButton>

        <AdminButton
          variant="surfaceMuted"
          size="sm"
          onClick={onCancelSelected}
          disabled={selectedCount === 0}
          className="disabled:opacity-50"
        >
          <Icon name="cancel" className="text-[18px]" />
          Cancel booking
        </AdminButton>
      </div>
    </div>
  );
}
