import AdminButton from "@/components/ui/AdminButton";
import AdminCard from "@/components/ui/AdminCard";
import Icon from "@/components/ui/Icon";
import PillBadge from "@/components/ui/PillBadge";
import StatusBadge from "@/components/ui/StatusBadge";
import {
  AdminCustomerRow,
  CustomerSegmentBar,
  CustomersSummaryMetrics,
} from "@/types/admin-customers";

interface CustomersInsightsSectionProps {
  metrics: CustomersSummaryMetrics;
  segmentBars: CustomerSegmentBar[];
  selectedCustomer: AdminCustomerRow | null;
  onToggleVipTier: (customerId: string) => void;
  onToggleCustomerBlock: (customerId: string) => void;
  onMarkRetentionFollowUp: (customerId: string) => void;
}

function resolveStatusTone(status: AdminCustomerRow["status"]) {
  switch (status) {
    case "active":
      return "success" as const;
    case "dormant":
      return "info" as const;
    case "at-risk":
      return "warning" as const;
    default:
      return "error" as const;
  }
}

function resolveSegmentTone(segment: AdminCustomerRow["segment"]) {
  switch (segment) {
    case "vip":
      return "primary-soft" as const;
    case "corporate":
      return "tertiary-fixed" as const;
    case "family":
      return "surface-glass" as const;
    default:
      return "surface" as const;
  }
}

export default function CustomersInsightsSection({
  metrics,
  segmentBars,
  selectedCustomer,
  onToggleVipTier,
  onToggleCustomerBlock,
  onMarkRetentionFollowUp,
}: CustomersInsightsSectionProps) {
  const metricCards = [
    {
      id: "total",
      label: "Tổng khách hàng",
      value: metrics.totalCustomers,
      toneClassName: "text-on-surface",
      icon: "groups",
    },
    {
      id: "active",
      label: "Đang hoạt động",
      value: metrics.activeCustomers,
      toneClassName: "text-emerald-600",
      icon: "verified_user",
    },
    {
      id: "vip",
      label: "Khách VIP",
      value: metrics.vipCustomers,
      toneClassName: "text-primary",
      icon: "stars",
    },
    {
      id: "at-risk",
      label: "Có rủi ro rời bỏ",
      value: metrics.atRiskCustomers,
      toneClassName: "text-amber-600",
      icon: "trending_down",
    },
    {
      id: "blocked",
      label: "Đã khóa",
      value: metrics.blockedCustomers,
      toneClassName: "text-red-600",
      icon: "gpp_bad",
    },
  ];

  return (
    <section className="grid grid-cols-12 gap-6">
      <div className="col-span-12 xl:col-span-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">
          {metricCards.map((card) => (
            <AdminCard key={card.id} padding="sm" className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-surface-container-low flex items-center justify-center text-outline">
                <Icon name={card.icon} className="text-[18px]" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-outline">
                {card.label}
              </p>
              <p className={`text-3xl font-black ${card.toneClassName}`}>
                {card.value}
              </p>
            </AdminCard>
          ))}
        </div>

        <AdminCard padding="sm" radius="3xl" className="space-y-4">
          <div>
            <h3 className="text-xl font-black text-on-surface">
              Phân bổ theo phân khúc
            </h3>
            <p className="text-sm text-on-surface-variant mt-1">
              So sánh tỷ trọng khách hàng giữa các phân khúc giá trị.
            </p>
          </div>

          <div className="flex items-end gap-3 h-44 rounded-2xl bg-surface-container-low p-4">
            {segmentBars.map((bar, index) => {
              const opacityClass =
                index === 0
                  ? "bg-primary"
                  : index === 1
                    ? "bg-primary/80"
                    : index === 2
                      ? "bg-primary/60"
                      : "bg-primary/40";

              return (
                <div
                  key={bar.id}
                  className="flex-1 flex flex-col items-center justify-end h-full gap-2"
                >
                  <div
                    className={`w-full max-w-11 rounded-t-xl ${opacityClass}`}
                    style={{ height: `${bar.barHeightPercent}%` }}
                  />
                  <span className="text-[11px] font-bold text-outline">
                    {bar.label}
                  </span>
                </div>
              );
            })}
          </div>
        </AdminCard>
      </div>

      <AdminCard
        padding="sm"
        radius="3xl"
        className="col-span-12 xl:col-span-4 space-y-5"
      >
        <div>
          <h3 className="text-xl font-black text-on-surface">
            Hồ sơ khách hàng
          </h3>
          <p className="text-sm text-on-surface-variant mt-1">
            Thông tin nhanh và thao tác trực tiếp trên khách hàng đã chọn.
          </p>
        </div>

        {!selectedCustomer ? (
          <div className="rounded-2xl bg-surface-container-low p-5 text-sm text-on-surface-variant">
            Chọn một khách hàng từ bảng phía trên để xem chi tiết.
          </div>
        ) : (
          <>
            <div className="space-y-2">
              <p className="text-2xl font-black text-on-surface">
                {selectedCustomer.name}
              </p>
              <p className="text-sm text-outline">
                {selectedCustomer.customerCode}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <PillBadge
                tone={resolveSegmentTone(selectedCustomer.segment)}
                size="xs"
                uppercase
              >
                {selectedCustomer.segmentLabel}
              </PillBadge>
              <StatusBadge
                label={selectedCustomer.statusLabel}
                tone={resolveStatusTone(selectedCustomer.status)}
              />
            </div>

            <div className="space-y-2 text-sm text-on-surface-variant">
              <p className="flex items-center gap-2">
                <Icon name="mail" className="text-base" />
                {selectedCustomer.email}
              </p>
              <p className="flex items-center gap-2">
                <Icon name="call" className="text-base" />
                {selectedCustomer.phone}
              </p>
              <p className="flex items-center gap-2">
                <Icon name="event" className="text-base" />
                Gia nhập: {selectedCustomer.joinedDate}
              </p>
              <p className="flex items-center gap-2">
                <Icon name="flight_takeoff" className="text-base" />
                Chuyến gần nhất: {selectedCustomer.lastBookingDate}
              </p>
              <p className="flex items-center gap-2">
                <Icon name="support_agent" className="text-base" />
                Concierge: {selectedCustomer.assignedConcierge}
              </p>
            </div>

            <div className="rounded-2xl bg-surface-container-low p-4 space-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-outline">
                Giá trị tích lũy
              </p>
              <p className="text-2xl font-black text-primary">
                {selectedCustomer.lifetimeValue}
              </p>
              <p className="text-sm text-on-surface-variant">
                {selectedCustomer.totalTrips} chuyến đã hoàn thành
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <AdminButton
                variant="surface"
                size="sm"
                onClick={() => onToggleVipTier(selectedCustomer.id)}
              >
                <Icon name="stars" className="text-base" />
                {selectedCustomer.segment === "vip" ? "Hạ hạng" : "Nâng VIP"}
              </AdminButton>

              <AdminButton
                variant="surfaceMuted"
                size="sm"
                onClick={() => onToggleCustomerBlock(selectedCustomer.id)}
              >
                <Icon
                  name={
                    selectedCustomer.status === "blocked" ? "lock_open" : "lock"
                  }
                  className="text-base"
                />
                {selectedCustomer.status === "blocked" ? "Mở khóa" : "Tạm khóa"}
              </AdminButton>

              <AdminButton
                variant="gradient"
                size="sm"
                className="sm:col-span-2"
                onClick={() => onMarkRetentionFollowUp(selectedCustomer.id)}
                disabled={selectedCustomer.status === "blocked"}
              >
                <Icon name="campaign" className="text-base" />
                Tạo tác vụ chăm sóc lại
              </AdminButton>
            </div>
          </>
        )}
      </AdminCard>
    </section>
  );
}
