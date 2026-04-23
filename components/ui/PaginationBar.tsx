import Icon from "./Icon";

interface PaginationBarProps {
  summaryLabel: string;
  currentPage: number;
  pages: number[];
  onPageChange?: (page: number) => void;
  className?: string;
}

export default function PaginationBar({
  summaryLabel,
  currentPage,
  pages,
  onPageChange,
  className = "",
}: PaginationBarProps) {
  const firstPage = pages[0] ?? 1;
  const lastPage = pages[pages.length - 1] ?? 1;

  return (
    <div
      className={`px-6 py-4 flex items-center justify-between bg-surface-container-low/50 border-t border-surface-container-low ${className}`}
    >
      <span className="text-xs font-bold text-outline uppercase tracking-wider">
        {summaryLabel}
      </span>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => onPageChange?.(Math.max(firstPage, currentPage - 1))}
          disabled={currentPage <= firstPage}
          className="p-2 rounded-xl bg-white shadow-sm border border-outline-variant/10 text-outline hover:text-on-surface disabled:opacity-50"
        >
          <Icon name="chevron_left" className="text-[20px]" />
        </button>
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange?.(page)}
            className={
              page === currentPage
                ? "w-10 h-10 rounded-xl bg-primary text-on-primary font-bold shadow-sm"
                : "w-10 h-10 rounded-xl bg-white shadow-sm border border-outline-variant/10 text-outline font-bold hover:bg-surface-container-low transition-colors"
            }
          >
            {page}
          </button>
        ))}
        <button
          type="button"
          onClick={() => onPageChange?.(Math.min(lastPage, currentPage + 1))}
          disabled={currentPage >= lastPage}
          className="p-2 rounded-xl bg-white shadow-sm border border-outline-variant/10 text-outline hover:text-on-surface disabled:opacity-50"
        >
          <Icon name="chevron_right" className="text-[20px]" />
        </button>
      </div>
    </div>
  );
}
