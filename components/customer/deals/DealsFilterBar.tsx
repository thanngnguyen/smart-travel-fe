import Icon from "@/components/ui/Icon";
import { CustomerDealCategoryOption } from "@/types/customer-deals";

interface DealsFilterBarProps {
  categories: CustomerDealCategoryOption[];
  activeCategoryId: string;
  searchQuery: string;
  onCategoryChange: (categoryId: string) => void;
  onSearchQueryChange: (nextQuery: string) => void;
}

export default function DealsFilterBar({
  categories,
  activeCategoryId,
  searchQuery,
  onCategoryChange,
  onSearchQueryChange,
}: DealsFilterBarProps) {
  return (
    <section className="mb-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = category.id === activeCategoryId;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onCategoryChange(category.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-colors ${
                isActive
                  ? "bg-primary text-white shadow-[0_10px_25px_rgba(12,86,208,0.28)]"
                  : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-highest"
              }`}
            >
              {category.icon ? (
                <Icon
                  name={category.icon}
                  className={`text-[18px] ${
                    isActive ? "text-white" : "text-on-surface-variant"
                  }`}
                />
              ) : null}
              {category.label}
            </button>
          );
        })}
      </div>

      <label className="relative w-full xl:w-[320px]">
        <Icon
          name="search"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant"
        />
        <input
          value={searchQuery}
          onChange={(event) => onSearchQueryChange(event.target.value)}
          type="text"
          placeholder="Tìm điểm đến..."
          className="w-full pl-12 pr-4 py-3 rounded-2xl bg-surface-container-low text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20"
        />
      </label>
    </section>
  );
}
