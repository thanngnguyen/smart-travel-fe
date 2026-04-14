import AdminButton from "@/components/ui/AdminButton";
import AdminCard from "@/components/ui/AdminCard";
import PillBadge from "@/components/ui/PillBadge";
import StatusBadge from "@/components/ui/StatusBadge";
import Icon from "@/components/ui/Icon";
import {
  ActiveGuideTaskItem,
  PendingConfirmationItem,
} from "@/types/admin-operations";

interface AssignmentConfirmationPanelProps {
  pendingConfirmations: PendingConfirmationItem[];
  activeGuideTasks: ActiveGuideTaskItem[];
  onConfirmGuideTask: (departureId: string, guideId: string) => void;
}

export default function AssignmentConfirmationPanel({
  pendingConfirmations,
  activeGuideTasks,
  onConfirmGuideTask,
}: AssignmentConfirmationPanelProps) {
  return (
    <AdminCard padding="sm" radius="3xl" className="space-y-4">
      <div>
        <h3 className="text-2xl font-black text-on-surface">
          5. Xác nhận và tiếp nhận nhiệm vụ
        </h3>
        <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
          HDV xem danh sách đoàn, lịch trình, yêu cầu đặc biệt và xác nhận nhiệm
          vụ. Sau xác nhận, trạng thái HDV chuyển sang "Đang đi tour".
        </p>
      </div>

      {pendingConfirmations.length === 0 ? (
        <div className="rounded-2xl p-6 bg-surface-container-low text-sm text-on-surface-variant">
          Không có phân công nào đang chờ xác nhận.
        </div>
      ) : (
        <div className="space-y-3">
          {pendingConfirmations.map((item) => (
            <div
              key={`${item.departure.id}-${item.guide.id}`}
              className="rounded-2xl bg-surface-container-low p-4 space-y-3"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-outline font-bold">
                    {item.departure.code}
                  </p>
                  <p className="text-lg font-black text-on-surface">
                    {item.departure.tourName}
                  </p>
                  <p className="text-sm text-on-surface-variant">
                    HDV: {item.guide.fullName}
                  </p>
                </div>

                <StatusBadge label="Chờ HDV xác nhận" tone="warning" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl bg-white/80 p-3">
                  <p className="text-xs uppercase tracking-wide font-bold text-outline">
                    Passenger List
                  </p>
                  <ul className="mt-2 space-y-1 text-on-surface-variant">
                    {item.departure.passengers.slice(0, 5).map((passenger) => (
                      <li key={passenger.id}>
                        {passenger.fullName} ({passenger.language})
                      </li>
                    ))}
                    {item.departure.passengers.length > 5 ? (
                      <li className="font-bold text-primary">
                        +{item.departure.passengers.length - 5} hành khách khác
                      </li>
                    ) : null}
                  </ul>
                </div>

                <div className="rounded-xl bg-white/80 p-3">
                  <p className="text-xs uppercase tracking-wide font-bold text-outline">
                    Itinerary
                  </p>
                  <ul className="mt-2 space-y-1 text-on-surface-variant">
                    {item.departure.itinerarySummary.map((line, index) => (
                      <li key={`${item.departure.id}-itinerary-${index}`}>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl bg-white/80 p-3">
                  <p className="text-xs uppercase tracking-wide font-bold text-outline">
                    Special Requests
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.departure.specialRequests.map((request, index) => (
                      <PillBadge
                        key={`${item.departure.id}-request-${index}`}
                        tone="tertiary-fixed"
                        size="xs"
                      >
                        {request}
                      </PillBadge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <AdminButton
                  variant="gradient"
                  size="sm"
                  onClick={() =>
                    onConfirmGuideTask(item.departure.id, item.guide.id)
                  }
                >
                  <Icon name="task_alt" className="text-base" />
                  Xác nhận nhiệm vụ
                </AdminButton>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="pt-2">
        <p className="text-xs uppercase tracking-wide font-bold text-outline mb-2">
          HDV đang đi tour
        </p>
        <div className="flex flex-wrap gap-2">
          {activeGuideTasks.map((task) => (
            <PillBadge
              key={`${task.departure.id}-${task.guide.id}`}
              tone="success"
            >
              {task.guide.fullName} · {task.departure.code}
            </PillBadge>
          ))}
          {activeGuideTasks.length === 0 ? (
            <PillBadge tone="surface">
              Chưa có HDV ở trạng thái đang đi tour
            </PillBadge>
          ) : null}
        </div>
      </div>
    </AdminCard>
  );
}
