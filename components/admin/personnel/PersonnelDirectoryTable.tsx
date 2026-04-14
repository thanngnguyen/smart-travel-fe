import AdminButton from "@/components/ui/AdminButton";
import AdminCard from "@/components/ui/AdminCard";
import Icon from "@/components/ui/Icon";
import PillBadge from "@/components/ui/PillBadge";
import StatusBadge from "@/components/ui/StatusBadge";
import { PersonnelMember } from "@/types/admin-personnel";
import Image from "next/image";

interface PersonnelDirectoryTableProps {
  members: PersonnelMember[];
  selectedMemberId: string;
  onSelectMember: (memberId: string) => void;
  onAssignEmergencyTour: (memberId: string) => void;
  onToggleSuspendStatus: (memberId: string) => void;
}

function resolveStatusTone(status: PersonnelMember["status"]) {
  switch (status) {
    case "active":
      return "success" as const;
    case "on-tour":
      return "primary" as const;
    case "off-duty":
      return "info" as const;
    case "on-leave":
      return "warning" as const;
    default:
      return "error" as const;
  }
}

function resolveRoleTone(role: PersonnelMember["role"]) {
  switch (role) {
    case "admin":
      return "primary-soft" as const;
    case "guide":
      return "tertiary-fixed" as const;
    case "operator":
      return "surface-glass" as const;
    default:
      return "surface" as const;
  }
}

export default function PersonnelDirectoryTable({
  members,
  selectedMemberId,
  onSelectMember,
  onAssignEmergencyTour,
  onToggleSuspendStatus,
}: PersonnelDirectoryTableProps) {
  return (
    <AdminCard padding="none" radius="3xl" className="overflow-hidden">
      <div className="px-6 py-5 border-b border-outline-variant/10 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-black text-on-surface">
            Danh sách nhân sự
          </h3>
          <p className="text-sm text-on-surface-variant mt-1">
            Chọn một nhân sự để xem chi tiết và thao tác nhanh.
          </p>
        </div>
        <PillBadge tone="primary-soft" size="xs" uppercase>
          {members.length} nhân sự hiển thị
        </PillBadge>
      </div>

      {members.length === 0 ? (
        <div className="p-8 text-center text-on-surface-variant">
          Không có nhân sự phù hợp với bộ lọc hiện tại.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                  Nhân sự
                </th>
                <th className="px-4 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                  Vai trò
                </th>
                <th className="px-4 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                  Trạng thái
                </th>
                <th className="px-4 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                  Định mức tháng
                </th>
                <th className="px-4 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                  Tour phụ trách
                </th>
                <th className="px-4 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                  Hiệu suất
                </th>
                <th className="px-4 py-4 text-[11px] font-black uppercase tracking-widest text-outline text-right">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low">
              {members.map((member) => {
                const workloadPercent = Math.round(
                  (member.monthlyWorkloadDays / member.monthlyWorkloadLimit) *
                    100,
                );
                const isSelected = selectedMemberId === member.id;

                return (
                  <tr
                    key={member.id}
                    className={`cursor-pointer transition-colors ${
                      isSelected ? "bg-primary/5" : "hover:bg-surface"
                    }`}
                    onClick={() => onSelectMember(member.id)}
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        {member.avatarType === "initials" ? (
                          <div
                            className={`w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold ${member.avatarToneClassName}`}
                          >
                            {member.avatarInitials}
                          </div>
                        ) : (
                          <Image
                            alt={member.fullName}
                            src={
                              member.avatarUrl ??
                              "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=160&q=80"
                            }
                            className="w-11 h-11 rounded-full object-cover"
                            width={44}
                            height={44}
                          />
                        )}
                        <div>
                          <p className="font-bold text-on-surface">
                            {member.fullName}
                          </p>
                          <p className="text-xs text-outline">
                            {member.staffCode}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-5">
                      <PillBadge
                        tone={resolveRoleTone(member.role)}
                        size="xs"
                        uppercase
                      >
                        {member.roleLabel}
                      </PillBadge>
                    </td>
                    <td className="px-4 py-5">
                      <StatusBadge
                        label={member.statusLabel}
                        tone={resolveStatusTone(member.status)}
                      />
                    </td>
                    <td className="px-4 py-5">
                      <p className="text-sm font-semibold text-on-surface">
                        {member.monthlyWorkloadDays}/
                        {member.monthlyWorkloadLimit} ngày
                      </p>
                      <div className="h-1.5 rounded-full bg-surface-container-high mt-2 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            workloadPercent >= 95
                              ? "bg-error"
                              : workloadPercent >= 80
                                ? "bg-amber-500"
                                : "bg-primary"
                          }`}
                          style={{
                            width: `${Math.min(workloadPercent, 100)}%`,
                          }}
                        />
                      </div>
                    </td>
                    <td className="px-4 py-5 text-sm font-semibold text-on-surface">
                      {member.assignedTours}
                    </td>
                    <td className="px-4 py-5 text-sm font-semibold text-on-surface">
                      {member.performanceScore}/100
                    </td>
                    <td className="px-4 py-5">
                      <div className="flex justify-end gap-2">
                        <AdminButton
                          variant="surfaceMuted"
                          size="sm"
                          onClick={(event) => {
                            event.stopPropagation();
                            onAssignEmergencyTour(member.id);
                          }}
                        >
                          <Icon name="tour" className="text-base" />
                          Gán tour
                        </AdminButton>
                        <AdminButton
                          variant="surfaceMuted"
                          size="sm"
                          onClick={(event) => {
                            event.stopPropagation();
                            onToggleSuspendStatus(member.id);
                          }}
                        >
                          <Icon
                            name={
                              member.status === "suspended"
                                ? "lock_open"
                                : "lock"
                            }
                            className="text-base"
                          />
                          {member.status === "suspended" ? "Mở" : "Khóa"}
                        </AdminButton>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </AdminCard>
  );
}
