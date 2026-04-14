import AdminButton from "@/components/ui/AdminButton";
import AdminCard from "@/components/ui/AdminCard";
import Icon from "@/components/ui/Icon";
import PillBadge from "@/components/ui/PillBadge";
import StatusBadge from "@/components/ui/StatusBadge";
import { PersonnelMember } from "@/types/admin-personnel";

interface PersonnelDetailPanelProps {
  member: PersonnelMember | null;
  onToggleLeaveStatus: (memberId: string) => void;
  onPromoteToAdmin: (memberId: string) => void;
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

export default function PersonnelDetailPanel({
  member,
  onToggleLeaveStatus,
  onPromoteToAdmin,
  onAssignEmergencyTour,
  onToggleSuspendStatus,
}: PersonnelDetailPanelProps) {
  if (!member) {
    return (
      <AdminCard padding="md" radius="3xl">
        <p className="text-on-surface-variant">
          Chọn một nhân sự từ bảng bên trái để xem hồ sơ chi tiết.
        </p>
      </AdminCard>
    );
  }

  const workloadPercent = Math.round(
    (member.monthlyWorkloadDays / member.monthlyWorkloadLimit) * 100,
  );

  return (
    <AdminCard padding="md" radius="3xl" className="space-y-6 h-full">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-outline">
          Hồ sơ nhân sự
        </p>
        <h3 className="text-2xl font-black text-on-surface mt-1">
          {member.fullName}
        </h3>
        <p className="text-sm text-on-surface-variant mt-1">
          {member.staffCode} · {member.department}
        </p>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <PillBadge tone="primary-soft" size="xs" uppercase>
          {member.roleLabel}
        </PillBadge>
        <StatusBadge
          label={member.statusLabel}
          tone={resolveStatusTone(member.status)}
        />
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2 text-on-surface-variant">
          <Icon name="mail" className="text-base" />
          {member.email}
        </div>
        <div className="flex items-center gap-2 text-on-surface-variant">
          <Icon name="call" className="text-base" />
          {member.phone}
        </div>
        <div className="flex items-center gap-2 text-on-surface-variant">
          <Icon name="event" className="text-base" />
          Gia nhập: {member.joinedDate}
        </div>
        <div className="flex items-center gap-2 text-on-surface-variant">
          <Icon name="schedule" className="text-base" />
          Hoạt động gần nhất: {member.lastActiveAt}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-widest text-outline">
          Định mức tháng
        </p>
        <p className="text-sm font-semibold text-on-surface">
          {member.monthlyWorkloadDays}/{member.monthlyWorkloadLimit} ngày ·{" "}
          {workloadPercent}%
        </p>
        <div className="h-2 rounded-full bg-surface-container-high overflow-hidden">
          <div
            className={`h-full rounded-full ${
              workloadPercent >= 95
                ? "bg-error"
                : workloadPercent >= 80
                  ? "bg-amber-500"
                  : "bg-primary"
            }`}
            style={{ width: `${Math.min(workloadPercent, 100)}%` }}
          />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-widest text-outline">
          Chứng chỉ
        </p>
        <div className="flex flex-wrap gap-2">
          {member.certifications.map((certificate) => (
            <PillBadge key={certificate} tone="surface-glass" size="xs">
              {certificate}
            </PillBadge>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-widest text-outline">
          Ngôn ngữ
        </p>
        <div className="flex flex-wrap gap-2">
          {member.languages.map((language) => (
            <PillBadge key={language} tone="surface" size="xs">
              {language}
            </PillBadge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <AdminButton
          variant="surface"
          size="sm"
          onClick={() => onToggleLeaveStatus(member.id)}
        >
          <Icon name="event_busy" className="text-base" />
          {member.status === "on-leave"
            ? "Kết thúc nghỉ phép"
            : "Chuyển nghỉ phép"}
        </AdminButton>

        <AdminButton
          variant="surface"
          size="sm"
          onClick={() => onAssignEmergencyTour(member.id)}
        >
          <Icon name="tour" className="text-base" />
          Gán tour khẩn
        </AdminButton>

        <AdminButton
          variant="surface"
          size="sm"
          onClick={() => onPromoteToAdmin(member.id)}
          disabled={member.role === "admin"}
        >
          <Icon name="admin_panel_settings" className="text-base" />
          Nâng quyền admin
        </AdminButton>

        <AdminButton
          variant="surfaceMuted"
          size="sm"
          onClick={() => onToggleSuspendStatus(member.id)}
        >
          <Icon
            name={member.status === "suspended" ? "lock_open" : "lock"}
            className="text-base"
          />
          {member.status === "suspended" ? "Mở khóa" : "Tạm khóa"}
        </AdminButton>
      </div>
    </AdminCard>
  );
}
