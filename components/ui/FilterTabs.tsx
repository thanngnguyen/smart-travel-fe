interface FilterTabItem {
  id: string;
  label: string;
  count?: number;
  isActive?: boolean;
}

interface FilterTabsProps {
  tabs: FilterTabItem[];
  activeId?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
}

export default function FilterTabs({
  tabs,
  activeId,
  onTabChange,
  className = "",
}: FilterTabsProps) {
  return (
    <div
      className={`flex items-center gap-2 bg-surface-container-low p-1 rounded-2xl ${className}`}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onTabChange?.(tab.id)}
          className={
            (activeId ? tab.id === activeId : tab.isActive)
              ? "px-4 py-2 rounded-xl text-sm font-bold bg-white shadow-sm text-primary"
              : "px-4 py-2 rounded-xl text-sm font-bold text-outline hover:text-on-surface transition-colors"
          }
        >
          {tab.label}
          {typeof tab.count === "number" ? ` (${tab.count})` : ""}
        </button>
      ))}
    </div>
  );
}

export type { FilterTabItem };
