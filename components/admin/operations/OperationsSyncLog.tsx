import AdminCard from "@/components/ui/AdminCard";
import PillBadge from "@/components/ui/PillBadge";
import Icon from "@/components/ui/Icon";
import { OperationsNotification } from "@/types/admin-operations";

interface OperationsSyncLogProps {
  notifications: OperationsNotification[];
}

function formatTimestamp(iso: string) {
  return new Intl.DateTimeFormat("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
  }).format(new Date(iso));
}

function resolveTone(type: OperationsNotification["type"]) {
  switch (type) {
    case "assignment-sent":
      return {
        badgeTone: "primary-soft" as const,
        icon: "notifications_active",
        iconClassName: "text-primary",
      };
    case "guide-confirmed":
      return {
        badgeTone: "success" as const,
        icon: "task_alt",
        iconClassName: "text-green-700",
      };
    default:
      return {
        badgeTone: "tertiary-fixed" as const,
        icon: "warning",
        iconClassName: "text-tertiary",
      };
  }
}

export default function OperationsSyncLog({
  notifications,
}: OperationsSyncLogProps) {
  return (
    <AdminCard padding="sm" radius="3xl" className="space-y-4 h-full">
      <div>
        <h3 className="text-2xl font-black text-on-surface">
          4. Đồng bộ dữ liệu & thông báo
        </h3>
        <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
          Mỗi thao tác phân công sẽ cập nhật Departure entity và ghi log thông
          báo gửi đến ứng dụng HDV.
        </p>
      </div>

      {notifications.length === 0 ? (
        <div className="rounded-2xl p-4 bg-surface-container-low text-sm text-on-surface-variant">
          Chưa có thao tác phân công nào trong phiên làm việc này.
        </div>
      ) : (
        <div className="space-y-3 max-h-[660px] overflow-y-auto pr-1">
          {notifications.map((notification) => {
            const tone = resolveTone(notification.type);

            return (
              <div
                key={notification.id}
                className="rounded-2xl bg-surface-container-low p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2">
                    <Icon
                      name={tone.icon}
                      className={`text-lg mt-0.5 ${tone.iconClassName}`}
                    />
                    <div>
                      <p className="text-sm font-black text-on-surface">
                        {notification.title}
                      </p>
                      <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                        {notification.message}
                      </p>
                    </div>
                  </div>
                  <PillBadge tone={tone.badgeTone} size="xs" uppercase>
                    {formatTimestamp(notification.createdAt)}
                  </PillBadge>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </AdminCard>
  );
}
