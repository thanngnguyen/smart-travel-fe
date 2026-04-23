"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import AdminButton from "@/components/ui/AdminButton";
import AdminCard from "@/components/ui/AdminCard";
import Icon from "@/components/ui/Icon";
import PillBadge from "@/components/ui/PillBadge";
import StatusBadge from "@/components/ui/StatusBadge";
import { useAdminPersonnelData } from "@/hooks/useAdminPersonnelData";
import {
  resolveAdminPersonnelRoleTone,
  resolveAdminPersonnelStatusTone,
} from "@/lib/admin-view-resolvers";
import { resolveRouteParam } from "@/lib/route-param";

export default function AdminPersonnelDetailsWorkspace() {
  const params = useParams<{ id: string | string[] }>();
  const routeId = resolveRouteParam(params?.id);

  const {
    members,
    pendingRequests,
    actionLogs,
    flashMessage,
    clearFlashMessage,
    toggleLeaveStatus,
    toggleSuspendStatus,
    assignEmergencyTour,
    promoteToAdmin,
  } = useAdminPersonnelData();

  const member = members.find((item) => item.id === routeId);

  if (!member) {
    return (
      <AdminCard className="space-y-4" radius="3xl">
        <h1 className="text-2xl font-black text-on-surface">
          Không tìm thấy nhân sự
        </h1>
        <Link
          href="/admin/personnel"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white"
        >
          <Icon name="arrow_back" className="text-base" />
          Quay lại danh sách nhân sự
        </Link>
      </AdminCard>
    );
  }

  const workloadPercent = Math.round(
    (member.monthlyWorkloadDays / member.monthlyWorkloadLimit) * 100,
  );

  const memberRequests = pendingRequests.filter(
    (request) => request.memberId === member.id,
  );

  const highlightedImage =
    member.avatarType === "image" && member.avatarUrl
      ? member.avatarUrl
      : "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-2">
          <Link
            href="/admin/personnel"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Icon name="arrow_back" className="text-base" />
            Quay lại danh sách nhân sự
          </Link>

          <h1 className="text-4xl font-black tracking-tight text-on-surface">
            {member.fullName}
          </h1>

          <div className="flex flex-wrap items-center gap-2">
            <PillBadge tone="primary-soft" size="xs" uppercase>
              {member.staffCode}
            </PillBadge>
            <PillBadge
              tone={resolveAdminPersonnelRoleTone(member.role)}
              size="xs"
              uppercase
            >
              {member.roleLabel}
            </PillBadge>
            <StatusBadge
              label={member.statusLabel}
              tone={resolveAdminPersonnelStatusTone(member.status)}
            />
          </div>
        </div>

        <Link href={`/admin/personnel/${member.id}/edit`}>
          <AdminButton variant="gradient" size="md">
            <Icon name="edit" className="text-base" />
            Chỉnh sửa hồ sơ
          </AdminButton>
        </Link>
      </header>

      {flashMessage ? (
        <AdminCard
          padding="sm"
          className={
            flashMessage.tone === "success"
              ? "bg-green-100 text-green-800"
              : flashMessage.tone === "error"
                ? "bg-red-100 text-red-800"
                : "bg-primary/10 text-primary"
          }
        >
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-bold">{flashMessage.text}</p>
            <button
              type="button"
              onClick={clearFlashMessage}
              className="text-xs font-bold uppercase tracking-wider opacity-80 hover:opacity-100"
            >
              Đóng
            </button>
          </div>
        </AdminCard>
      ) : null}

      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 xl:col-span-8 space-y-6">
          <AdminCard padding="none" radius="3xl" className="overflow-hidden">
            <div className="relative h-64">
              <Image
                src={highlightedImage}
                alt={member.fullName}
                fill
                sizes="(max-width: 1280px) 100vw, 66vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-white/80">
                    {member.department}
                  </p>
                  <p className="mt-1 text-lg font-black text-white">
                    Hiệu suất {member.performanceScore}/100
                  </p>
                </div>
                <PillBadge tone="surface-glass" size="xs" uppercase>
                  Cập nhật {member.lastActiveAt}
                </PillBadge>
              </div>
            </div>
          </AdminCard>

          <AdminCard radius="3xl" className="space-y-4">
            <h2 className="text-xl font-black text-on-surface">
              Tổng quan vận hành
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-surface-container-low p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-outline">
                  Tour phụ trách
                </p>
                <p className="mt-1 text-2xl font-black text-on-surface">
                  {member.assignedTours}
                </p>
              </div>

              <div className="rounded-2xl bg-surface-container-low p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-outline">
                  Khối lượng tháng
                </p>
                <p className="mt-1 text-2xl font-black text-primary">
                  {member.monthlyWorkloadDays}/{member.monthlyWorkloadLimit}
                </p>
              </div>

              <div className="rounded-2xl bg-surface-container-low p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-outline">
                  Tỷ lệ định mức
                </p>
                <p className="mt-1 text-2xl font-black text-on-surface">
                  {workloadPercent}%
                </p>
              </div>
            </div>

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

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2 rounded-2xl bg-surface-container-low p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-outline">
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

              <div className="space-y-2 rounded-2xl bg-surface-container-low p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-outline">
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
            </div>
          </AdminCard>
        </section>

        <aside className="col-span-12 xl:col-span-4 space-y-6">
          <AdminCard radius="3xl" className="space-y-3">
            <h2 className="text-lg font-black text-on-surface">Liên hệ</h2>
            <p className="flex items-center gap-2 text-sm text-on-surface-variant">
              <Icon name="mail" className="text-base" />
              {member.email}
            </p>
            <p className="flex items-center gap-2 text-sm text-on-surface-variant">
              <Icon name="call" className="text-base" />
              {member.phone}
            </p>
            <p className="flex items-center gap-2 text-sm text-on-surface-variant">
              <Icon name="event" className="text-base" />
              Gia nhập: {member.joinedDate}
            </p>
          </AdminCard>

          <AdminCard radius="3xl" className="space-y-3">
            <h2 className="text-lg font-black text-on-surface">Tác vụ nhanh</h2>
            <div className="grid grid-cols-1 gap-2">
              <AdminButton
                variant="surface"
                size="sm"
                onClick={() => toggleLeaveStatus(member.id)}
              >
                <Icon name="event_busy" className="text-base" />
                {member.status === "on-leave"
                  ? "Kết thúc nghỉ phép"
                  : "Chuyển nghỉ phép"}
              </AdminButton>

              <AdminButton
                variant="surface"
                size="sm"
                onClick={() => assignEmergencyTour(member.id)}
              >
                <Icon name="tour" className="text-base" />
                Gán tour khẩn
              </AdminButton>

              <AdminButton
                variant="surface"
                size="sm"
                onClick={() => promoteToAdmin(member.id)}
                disabled={member.role === "admin"}
              >
                <Icon name="admin_panel_settings" className="text-base" />
                Nâng quyền admin
              </AdminButton>

              <AdminButton
                variant="surfaceMuted"
                size="sm"
                onClick={() => toggleSuspendStatus(member.id)}
              >
                <Icon
                  name={member.status === "suspended" ? "lock_open" : "lock"}
                  className="text-base"
                />
                {member.status === "suspended" ? "Mở khóa" : "Tạm khóa"}
              </AdminButton>
            </div>
          </AdminCard>

          <AdminCard radius="3xl" className="space-y-3">
            <h2 className="text-lg font-black text-on-surface">
              Yêu cầu chờ duyệt
            </h2>

            {memberRequests.length === 0 ? (
              <p className="text-sm text-on-surface-variant">
                Nhân sự này hiện không có yêu cầu chờ duyệt.
              </p>
            ) : (
              <div className="space-y-2">
                {memberRequests.map((request) => (
                  <div
                    key={request.id}
                    className="rounded-xl bg-surface-container-low p-3"
                  >
                    <p className="text-xs font-bold uppercase tracking-wide text-primary">
                      {request.typeLabel}
                    </p>
                    <p className="mt-1 text-sm text-on-surface-variant">
                      {request.note}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </AdminCard>

          {actionLogs.length > 0 ? (
            <AdminCard radius="3xl" className="space-y-3">
              <h2 className="text-lg font-black text-on-surface">
                Nhật ký gần đây
              </h2>
              <div className="space-y-2">
                {actionLogs.slice(0, 4).map((log) => (
                  <div
                    key={log.id}
                    className="rounded-xl bg-surface-container-low p-3"
                  >
                    <p className="text-sm font-bold text-on-surface">
                      {log.title}
                    </p>
                    <p className="mt-1 text-xs text-on-surface-variant">
                      {log.message}
                    </p>
                  </div>
                ))}
              </div>
            </AdminCard>
          ) : null}
        </aside>
      </div>
    </div>
  );
}
