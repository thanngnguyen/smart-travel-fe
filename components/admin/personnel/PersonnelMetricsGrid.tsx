import AdminCard from "@/components/ui/AdminCard";
import Icon from "@/components/ui/Icon";
import {
  PersonnelMetrics,
  PersonnelRoleBreakdownItem,
  PersonnelWorkloadAlertItem,
} from "@/types/admin-personnel";

interface PersonnelMetricsGridProps {
  metrics: PersonnelMetrics;
  roleBreakdown: PersonnelRoleBreakdownItem[];
  workloadAlerts: PersonnelWorkloadAlertItem[];
}

export default function PersonnelMetricsGrid({
  metrics,
  roleBreakdown,
  workloadAlerts,
}: PersonnelMetricsGridProps) {
  return (
    <section className="grid grid-cols-12 gap-5">
      <div className="col-span-12 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <AdminCard padding="sm" className="bg-surface-container-lowest/95">
          <p className="text-xs font-bold uppercase tracking-wider text-outline">
            Tổng nhân sự
          </p>
          <p className="mt-2 text-3xl font-black text-on-surface">
            {metrics.totalHeadcount}
          </p>
          <p className="text-xs text-on-surface-variant mt-1">Toàn hệ thống</p>
        </AdminCard>

        <AdminCard padding="sm" className="bg-surface-container-lowest/95">
          <p className="text-xs font-bold uppercase tracking-wider text-outline">
            Đang hoạt động
          </p>
          <p className="mt-2 text-3xl font-black text-emerald-600">
            {metrics.activeHeadcount}
          </p>
          <p className="text-xs text-on-surface-variant mt-1">
            Bao gồm trực chờ
          </p>
        </AdminCard>

        <AdminCard padding="sm" className="bg-surface-container-lowest/95">
          <p className="text-xs font-bold uppercase tracking-wider text-outline">
            HDV đang dẫn tour
          </p>
          <p className="mt-2 text-3xl font-black text-primary">
            {metrics.guidesOnTour}
          </p>
          <p className="text-xs text-on-surface-variant mt-1">
            Theo lịch hiện tại
          </p>
        </AdminCard>

        <AdminCard padding="sm" className="bg-surface-container-lowest/95">
          <p className="text-xs font-bold uppercase tracking-wider text-outline">
            Yêu cầu chờ duyệt
          </p>
          <p className="mt-2 text-3xl font-black text-amber-600">
            {metrics.pendingRequests}
          </p>
          <p className="text-xs text-on-surface-variant mt-1">
            Nghỉ phép, quyền, đào tạo
          </p>
        </AdminCard>
      </div>

      <div className="col-span-12 xl:col-span-3 space-y-5">
        <AdminCard padding="sm" className="space-y-3">
          <div className="flex items-center gap-2">
            <Icon name="group" className="text-primary" />
            <h3 className="text-sm font-black text-on-surface">
              Phân bổ theo vai trò
            </h3>
          </div>
          {roleBreakdown.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-on-surface-variant">{item.label}</span>
              <span className="font-black text-on-surface">{item.count}</span>
            </div>
          ))}
        </AdminCard>
      </div>
      <div className="col-span-12 xl:col-span-2">
        <AdminCard padding="sm" className="space-y-3">
          <div className="flex items-center gap-2">
            <Icon name="speed" className="text-tertiary" />
            <h3 className="text-sm font-black text-on-surface">
              Cảnh báo tải cao
            </h3>
          </div>

          {workloadAlerts.length === 0 ? (
            <p className="text-sm text-on-surface-variant">
              Không có cảnh báo tải trong ngày.
            </p>
          ) : (
            workloadAlerts.map((alert) => (
              <div
                key={alert.memberId}
                className="rounded-xl bg-surface-container-low px-3 py-2.5"
              >
                <p className="text-sm font-bold text-on-surface">
                  {alert.memberName}
                </p>
                <p className="text-xs text-on-surface-variant mt-0.5">
                  {alert.ratioPercent}% định mức tháng · {alert.statusLabel}
                </p>
              </div>
            ))
          )}
        </AdminCard>
      </div>
    </section>
  );
}
