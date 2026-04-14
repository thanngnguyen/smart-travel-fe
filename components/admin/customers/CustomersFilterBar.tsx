import Icon from "@/components/ui/Icon";
import UiSelect from "@/components/ui/UiSelect";
import { CustomerFilterOption } from "@/types/admin-customers";

interface CustomersFilterBarProps {
  searchQuery: string;
  segmentFilters: CustomerFilterOption[];
  statusFilters: CustomerFilterOption[];
  onSearchQueryChange: (value: string) => void;
  onSegmentFilterChange: (value: string) => void;
  onStatusFilterChange: (value: string) => void;
}

export default function CustomersFilterBar({
  searchQuery,
  segmentFilters,
  statusFilters,
  onSearchQueryChange,
  onSegmentFilterChange,
  onStatusFilterChange,
}: CustomersFilterBarProps) {
  const activeSegmentFilter =
    segmentFilters.find((filter) => filter.isActive)?.id ??
    segmentFilters[0]?.id ??
    "all";
  const activeStatusFilter =
    statusFilters.find((filter) => filter.isActive)?.id ??
    statusFilters[0]?.id ??
    "all";
  const segmentOptions = segmentFilters.map((filter) => ({
    value: filter.id,
    label: filter.label,
  }));
  const statusOptions = statusFilters.map((filter) => ({
    value: filter.id,
    label: filter.label,
  }));

  return (
    <section className="rounded-3xl bg-surface-container-high p-5 shadow-[0_18px_35px_rgba(25,28,30,0.03)]">
      <div className="flex flex-col xl:flex-row gap-3">
        <div className="relative flex-1">
          <Icon
            name="search"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-outline"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => onSearchQueryChange(event.target.value)}
            placeholder="Tìm theo tên khách hàng, mã khách hàng, email, concierge..."
            className="w-full rounded-full bg-surface-container-lowest py-3 pl-12 pr-4 text-sm font-medium text-on-surface outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:flex gap-3 xl:w-auto">
          <UiSelect
            aria-label="Lọc theo phân khúc"
            value={activeSegmentFilter}
            onChange={(event) => onSegmentFilterChange(event.target.value)}
            options={segmentOptions}
            iconName="filter_list"
            containerClassName="min-w-47.5"
            className="rounded-full"
          />

          <UiSelect
            aria-label="Lọc theo trạng thái"
            value={activeStatusFilter}
            onChange={(event) => onStatusFilterChange(event.target.value)}
            options={statusOptions}
            iconName="filter_list"
            containerClassName="min-w-47.5"
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
