import Icon from "@/components/ui/Icon";
import SurfaceCard from "@/components/ui/SurfaceCard";

interface QuickActionsCardProps {
  actions: string[];
}

export default function QuickActionsCard({ actions }: QuickActionsCardProps) {
  return (
    <SurfaceCard
      tone="surface-high"
      radius="3xl"
      className="p-6 flex-1 space-y-6"
    >
      <h4 className="font-headline font-bold text-on-surface">
        Gợi ý tiếp theo
      </h4>
      <div className="space-y-3">
        {actions.map((action) => (
          <button
            key={action}
            className="w-full text-left p-4 bg-surface-container-lowest rounded-2xl flex items-center justify-between group hover:shadow-md transition-all text-on-surface cursor-pointer border-none outline-none"
          >
            <span className="text-sm font-semibold">{action}</span>
            <Icon
              name="chevron_right"
              className="text-primary group-hover:translate-x-1 transition-transform"
            />
          </button>
        ))}
      </div>
      <div className="pt-6 border-t border-outline-variant/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
            Nhịp du lịch toàn cầu: Đang hoạt động
          </span>
        </div>
        <div className="space-y-2">
          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-3/4 rounded-full"></div>
          </div>
          <p className="text-[10px] text-on-surface-variant font-medium italic">
            Trợ lý đang tối ưu theo hồ sơ ưu tiên &quot;Cao cấp&quot; và
            &quot;Riêng tư&quot;.
          </p>
        </div>
      </div>
    </SurfaceCard>
  );
}
