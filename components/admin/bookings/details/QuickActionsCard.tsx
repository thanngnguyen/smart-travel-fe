import Icon from "@/components/ui/Icon";
import { BookingQuickAction } from "@/types/admin-booking-details";

interface QuickActionsCardProps {
  actions: BookingQuickAction[];
}

export default function QuickActionsCard({ actions }: QuickActionsCardProps) {
  return (
    <div className="bg-surface-container-low rounded-2xl p-6">
      <h4 className="font-bold mb-4">Thao tác nhanh quản trị</h4>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action.id}
            className={`flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 ${action.textClassName}`}
          >
            <Icon name={action.icon} className="mb-2" />
            <span className="text-[10px] font-bold uppercase tracking-tight">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
