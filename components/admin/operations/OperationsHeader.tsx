import AdminButton from "@/components/ui/AdminButton";
import AdminCard from "@/components/ui/AdminCard";
import AdminPageHeader from "@/components/ui/AdminPageHeader";
import Icon from "@/components/ui/Icon";
import { OperationsMetrics } from "@/types/admin-operations";

interface OperationsHeaderProps {
  metrics: OperationsMetrics;
  onFocusUrgentDeparture: () => void;
}

interface MetricItem {
  id: string;
  label: string;
  value: string;
  icon: string;
  helper: string;
}

export default function OperationsHeader({
  metrics,
  onFocusUrgentDeparture,
}: OperationsHeaderProps) {
  const metricItems: MetricItem[] = [
    {
      id: "ready-departures",
      label: "Chuyến đủ điều kiện",
      value: metrics.departuresReadyForAssignment.toString(),
      icon: "flight_takeoff",
      helper: "Đủ khách và đang chờ điều phối HDV",
    },
    {
      id: "missing-guides",
      label: "HDV cần bổ sung",
      value: metrics.missingGuides.toString(),
      icon: "badge",
      helper: "Tính theo định mức 30 khách / 1 HDV",
    },
    {
      id: "pending-confirmations",
      label: "Chờ xác nhận nhiệm vụ",
      value: metrics.pendingConfirmations.toString(),
      icon: "pending_actions",
      helper: "HDV đã nhận thông báo nhưng chưa xác nhận",
    },
    {
      id: "notifications-sent",
      label: "Thông báo đã gửi",
      value: metrics.notificationsSent.toString(),
      icon: "notifications_active",
      helper: "Push notification / Email được đồng bộ",
    },
  ];

  return (
    <section className="space-y-6">
      <AdminPageHeader
        title="Vận hành phân công hướng dẫn viên"
        description="Tự động sàng lọc và phân công HDV theo trạng thái chuyến đi, lịch trống, kỹ năng, ngôn ngữ và định mức công việc."
        className="mb-0"
        titleClassName="text-4xl font-black"
        descriptionClassName="text-on-surface-variant text-base"
        actions={
          <>
            <AdminButton
              variant="surface"
              size="lg"
              className="font-semibold"
              onClick={onFocusUrgentDeparture}
            >
              <Icon name="priority_high" className="text-lg" />
              Ưu tiên chuyến sắp chạy
            </AdminButton>
            <AdminButton variant="gradient" size="lg" className="font-bold">
              <Icon name="auto_awesome" className="text-lg" />
              Gợi ý tự động
            </AdminButton>
          </>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
        {metricItems.map((item) => (
          <AdminCard
            key={item.id}
            padding="sm"
            className="bg-surface-container-lowest/90 backdrop-blur-[12px]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-wide font-bold text-outline">
                  {item.label}
                </p>
                <p className="mt-2 text-3xl font-black text-on-surface">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">
                  {item.helper}
                </p>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Icon name={item.icon} className="text-xl" />
              </div>
            </div>
          </AdminCard>
        ))}
      </div>
    </section>
  );
}
