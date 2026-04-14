import AdminButton from "@/components/ui/AdminButton";
import AdminCard from "@/components/ui/AdminCard";
import Icon from "@/components/ui/Icon";
import PaginationBar from "@/components/ui/PaginationBar";
import PillBadge from "@/components/ui/PillBadge";
import StatusBadge from "@/components/ui/StatusBadge";
import { AdminCustomerRow, CustomersPagination } from "@/types/admin-customers";
import Image from "next/image";

interface CustomersTableSectionProps {
  rows: AdminCustomerRow[];
  selectedCustomerId: string;
  pagination: CustomersPagination;
  onSelectCustomer: (customerId: string) => void;
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

export default function CustomersTableSection({
  rows,
  selectedCustomerId,
  pagination,
  onSelectCustomer,
  onToggleVipTier,
  onToggleCustomerBlock,
  onMarkRetentionFollowUp,
}: CustomersTableSectionProps) {
  return (
    <AdminCard padding="none" radius="3xl" className="overflow-hidden">
      <div className="px-6 py-5 border-b border-outline-variant/10 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-black text-on-surface">
            Danh sách khách hàng
          </h3>
          <p className="text-sm text-on-surface-variant mt-1">
            Chọn một khách hàng để xem hồ sơ và thực hiện thao tác chăm sóc.
          </p>
        </div>
      </div>

      {rows.length === 0 ? (
        <div className="p-8 text-center text-on-surface-variant">
          Không tìm thấy khách hàng phù hợp với bộ lọc hiện tại.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-275 text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                  Khách hàng
                </th>
                <th className="px-4 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                  Phân khúc
                </th>
                <th className="px-4 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                  Trạng thái
                </th>
                <th className="px-4 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                  Booking gần nhất
                </th>
                <th className="px-4 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                  Số chuyến
                </th>
                <th className="px-4 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                  Lifetime value
                </th>
                <th className="px-4 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                  Concierge
                </th>
                <th className="px-4 py-4 text-[11px] font-black uppercase tracking-widest text-outline text-right">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low">
              {rows.map((row) => {
                const isSelected = selectedCustomerId === row.id;

                return (
                  <tr
                    key={row.id}
                    className={`cursor-pointer transition-colors ${
                      isSelected ? "bg-primary/5" : "hover:bg-surface"
                    }`}
                    onClick={() => onSelectCustomer(row.id)}
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        {row.avatarType === "initials" ? (
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${row.avatarToneClassName}`}
                          >
                            {row.avatarInitials}
                          </div>
                        ) : (
                          <Image
                            alt={row.name}
                            className="w-10 h-10 rounded-full object-cover"
                            src={
                              row.avatarUrl ??
                              "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=160&q=80"
                            }
                            width={40}
                            height={40}
                          />
                        )}
                        <div className="flex flex-col">
                          <span className="font-bold text-on-surface">
                            {row.name}
                          </span>
                          <span className="text-xs text-outline">
                            {row.customerCode}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-5">
                      <PillBadge
                        tone={resolveSegmentTone(row.segment)}
                        size="xs"
                        uppercase
                      >
                        {row.segmentLabel}
                      </PillBadge>
                    </td>
                    <td className="px-4 py-5">
                      <StatusBadge
                        label={row.statusLabel}
                        tone={resolveStatusTone(row.status)}
                      />
                    </td>
                    <td className="px-4 py-5 text-sm font-medium text-on-surface">
                      {row.lastBookingDate}
                    </td>
                    <td className="px-4 py-5 text-sm font-semibold text-on-surface">
                      {row.totalTrips}
                    </td>
                    <td className="px-4 py-5 text-sm font-semibold text-on-surface">
                      {row.lifetimeValue}
                    </td>
                    <td className="px-4 py-5 text-sm text-on-surface-variant">
                      {row.assignedConcierge}
                    </td>
                    <td className="px-4 py-5">
                      <div className="flex justify-end gap-2">
                        <AdminButton
                          variant="surfaceMuted"
                          size="sm"
                          onClick={(event) => {
                            event.stopPropagation();
                            onToggleVipTier(row.id);
                          }}
                        >
                          <Icon name="stars" className="text-base" />
                          {row.segment === "vip" ? "Hạ hạng" : "Nâng VIP"}
                        </AdminButton>

                        <AdminButton
                          variant="surfaceMuted"
                          size="sm"
                          onClick={(event) => {
                            event.stopPropagation();
                            onToggleCustomerBlock(row.id);
                          }}
                        >
                          <Icon
                            name={
                              row.status === "blocked" ? "lock_open" : "lock"
                            }
                            className="text-base"
                          />
                          {row.status === "blocked" ? "Mở" : "Khóa"}
                        </AdminButton>

                        {row.status === "at-risk" ? (
                          <AdminButton
                            variant="gradient"
                            size="sm"
                            onClick={(event) => {
                              event.stopPropagation();
                              onMarkRetentionFollowUp(row.id);
                            }}
                          >
                            <Icon name="support_agent" className="text-base" />
                            Chăm sóc lại
                          </AdminButton>
                        ) : null}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <PaginationBar
        summaryLabel={pagination.summaryLabel}
        currentPage={pagination.currentPage}
        pages={pagination.pages}
        className="border-surface-container-high"
      />
    </AdminCard>
  );
}
