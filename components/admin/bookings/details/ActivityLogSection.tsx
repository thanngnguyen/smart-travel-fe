import Icon from "@/components/ui/Icon";
import { BookingActivityLogItem } from "@/types/admin-booking-details";

interface ActivityLogSectionProps {
  logs: BookingActivityLogItem[];
}

export default function ActivityLogSection({ logs }: ActivityLogSectionProps) {
  return (
    <section className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-outline-variant/10 flex justify-between items-center">
        <h4 className="font-bold">Nhật ký hoạt động</h4>
        <span className="text-[10px] font-bold text-outline-variant bg-surface-container-low px-2 py-1 rounded">
          LỊCH SỬ KIỂM TOÁN
        </span>
      </div>
      <div className="p-6 space-y-6">
        {logs.map((log, index) => {
          const hasConnector = index < logs.length - 1;

          return (
            <div key={log.id} className="flex gap-4 relative">
              {hasConnector ? (
                <div className="absolute left-2.75 top-6 -bottom-6 w-0.5 bg-outline-variant/20"></div>
              ) : null}
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center z-10 ${log.iconClassName}`}
              >
                <Icon name={log.icon} className="text-[14px] text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">{log.title}</p>
                <p className="text-xs text-outline mt-1">{log.description}</p>
                <p className="text-[10px] text-outline-variant mt-2 font-mono">
                  {log.timestamp}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
