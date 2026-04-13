interface FilterTabItem {
  id: string;
  label: string;
  isActive?: boolean;
}

interface FilterTabsProps {
  tabs: FilterTabItem[];
  className?: string;
}

export default function FilterTabs({ tabs, className = "" }: FilterTabsProps) {
  return (
    <div
      className={`flex items-center gap-2 bg-surface-container-low p-1 rounded-2xl ${className}`}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={
            tab.isActive
              ? "px-4 py-2 rounded-xl text-sm font-bold bg-white shadow-sm text-primary"
              : "px-4 py-2 rounded-xl text-sm font-bold text-outline hover:text-on-surface transition-colors"
          }
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export type { FilterTabItem };
