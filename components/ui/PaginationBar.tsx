import Icon from "./Icon";

interface PaginationBarProps {
  summaryLabel: string;
  currentPage: number;
  pages: number[];
  className?: string;
}

export default function PaginationBar({
  summaryLabel,
  currentPage,
  pages,
  className = "",
}: PaginationBarProps) {
  return (
    <div
      className={`px-6 py-4 flex items-center justify-between bg-surface-container-low/50 border-t border-surface-container-low ${className}`}
    >
      <span className="text-xs font-bold text-outline uppercase tracking-wider">
        {summaryLabel}
      </span>
      <div className="flex gap-2">
        <button className="p-2 rounded-xl bg-white shadow-sm border border-outline-variant/10 text-outline hover:text-on-surface">
          <Icon name="chevron_left" className="text-[20px]" />
        </button>
        {pages.map((page) => (
          <button
            key={page}
            className={
              page === currentPage
                ? "w-10 h-10 rounded-xl bg-primary text-on-primary font-bold shadow-sm"
                : "w-10 h-10 rounded-xl bg-white shadow-sm border border-outline-variant/10 text-outline font-bold hover:bg-surface-container-low transition-colors"
            }
          >
            {page}
          </button>
        ))}
        <button className="p-2 rounded-xl bg-white shadow-sm border border-outline-variant/10 text-outline hover:text-on-surface">
          <Icon name="chevron_right" className="text-[20px]" />
        </button>
      </div>
    </div>
  );
}
