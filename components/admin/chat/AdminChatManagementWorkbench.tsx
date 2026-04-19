"use client";

import Link from "next/link";
import Icon from "@/components/ui/Icon";
import AdminCard from "@/components/ui/AdminCard";
import AdminPageHeader from "@/components/ui/AdminPageHeader";
import StatusBadge from "@/components/ui/StatusBadge";
import { useAdminChatManagement } from "@/hooks/useAdminChatManagement";
import { TourChatChannelState } from "@/types/customer-tour-chat";

function resolveStateBadgeTone(state: TourChatChannelState) {
  if (state === "locked") {
    return "error" as const;
  }

  if (state === "admin-review") {
    return "warning" as const;
  }

  return "success" as const;
}

interface AdminChatManagementWorkbenchProps {
  initialTourId?: string;
}

export default function AdminChatManagementWorkbench({
  initialTourId,
}: AdminChatManagementWorkbenchProps) {
  const {
    authSession,
    isAdminAuthorized,
    selectedTourId,
    setSelectedTourId,
    selectedChannelState,
    setSelectedChannelState,
    searchQuery,
    setSearchQuery,
    selectedGroupId,
    setSelectedGroupId,
    filteredGroups,
    selectedGroup,
    moderationLogs,
    filteredAuditLogs,
    tourOptions,
    actionBanner,
    updateChannelState,
    sendBroadcast,
  } = useAdminChatManagement(initialTourId);

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Điều phối chat tour"
        description="Quản trị kênh chat theo tour, theo dõi moderation log và audit actions theo thời gian thực."
        actions={
          <Link
            href="/tour-chat"
            className="inline-flex items-center gap-2 rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-4 py-2 text-sm font-bold text-on-surface transition-colors hover:bg-surface-container"
          >
            <Icon name="forum" className="text-base" />
            Mở module chat
          </Link>
        }
      />

      {!isAdminAuthorized ? (
        <AdminCard className="border border-error/20 bg-error-container/35">
          <div className="flex items-start gap-3">
            <Icon name="lock" className="mt-0.5 text-error" />
            <div>
              <h3 className="text-lg font-bold text-on-error-container">
                Bạn không có quyền truy cập
              </h3>
              <p className="mt-1 text-sm text-on-error-container/90">
                Trang này chỉ dành cho tài khoản admin. Tài khoản hiện tại:{" "}
                <span className="font-bold">
                  {authSession?.displayName || "Chưa đăng nhập"}
                </span>
                .
              </p>
              <Link
                href="/login"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-error px-3 py-2 text-xs font-bold uppercase tracking-wide text-white"
              >
                <Icon name="login" className="text-sm" />
                Đăng nhập lại
              </Link>
            </div>
          </div>
        </AdminCard>
      ) : null}

      {isAdminAuthorized ? (
        <>
          {actionBanner ? (
            <AdminCard padding="sm" className="bg-primary/10 text-on-surface">
              <p className="text-sm font-bold">{actionBanner}</p>
            </AdminCard>
          ) : null}

          <AdminCard padding="sm">
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
              <label className="flex flex-col gap-1.5 text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                Tour
                <select
                  value={selectedTourId}
                  onChange={(event) => setSelectedTourId(event.target.value)}
                  className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                >
                  {tourOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-1.5 text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                Trạng thái kênh
                <select
                  value={selectedChannelState}
                  onChange={(event) =>
                    setSelectedChannelState(
                      event.target.value as "all" | TourChatChannelState,
                    )
                  }
                  className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                >
                  <option value="all">Tất cả trạng thái</option>
                  <option value="open">Đang mở</option>
                  <option value="admin-review">Đang kiểm duyệt</option>
                  <option value="locked">Đã khóa</option>
                </select>
              </label>

              <label className="flex flex-col gap-1.5 text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                Tìm kênh
                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Tên tour, booking, địa điểm"
                  className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none placeholder:text-outline focus:border-primary"
                />
              </label>
            </div>
          </AdminCard>

          <div className="grid grid-cols-12 gap-6">
            <AdminCard className="col-span-12 xl:col-span-4" padding="sm">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-bold text-on-surface">
                  Kênh chat theo tour
                </h3>
                <StatusBadge
                  label={`${filteredGroups.length} kênh`}
                  tone="primary"
                />
              </div>

              <div className="space-y-2">
                {filteredGroups.length === 0 ? (
                  <p className="rounded-xl bg-surface-container-low p-3 text-sm text-on-surface-variant">
                    Không tìm thấy kênh phù hợp với bộ lọc.
                  </p>
                ) : (
                  filteredGroups.map((group) => {
                    const isActive = group.id === selectedGroupId;
                    const passengers = group.participants.filter(
                      (participant) => participant.role === "customer",
                    ).length;

                    return (
                      <button
                        key={group.id}
                        type="button"
                        onClick={() => setSelectedGroupId(group.id)}
                        className={`w-full rounded-2xl border p-3 text-left transition-colors ${
                          isActive
                            ? "border-primary bg-primary/10"
                            : "border-outline-variant/20 bg-surface-container-lowest hover:border-primary/30"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-bold text-on-surface">
                            {group.title}
                          </p>
                          <StatusBadge
                            label={group.channelStateLabel}
                            tone={resolveStateBadgeTone(group.channelState)}
                            className="whitespace-nowrap"
                          />
                        </div>
                        <p className="mt-1 text-xs font-medium text-on-surface-variant">
                          Booking #{group.bookingCode}
                        </p>
                        <p className="mt-1 text-xs text-outline">
                          {passengers} khách • {group.locationLabel}
                        </p>
                      </button>
                    );
                  })
                )}
              </div>
            </AdminCard>

            <AdminCard className="col-span-12 xl:col-span-4" padding="sm">
              {selectedGroup ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-on-surface">
                      {selectedGroup.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant">
                      Booking #{selectedGroup.bookingCode} •{" "}
                      {selectedGroup.locationLabel}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    <button
                      type="button"
                      onClick={() => updateChannelState("open")}
                      className="rounded-xl bg-secondary-fixed px-3 py-2 text-xs font-bold text-on-secondary-fixed transition-colors hover:bg-secondary-fixed-dim"
                    >
                      Mở kênh
                    </button>
                    <button
                      type="button"
                      onClick={() => updateChannelState("admin-review")}
                      className="rounded-xl bg-tertiary-fixed px-3 py-2 text-xs font-bold text-on-tertiary-fixed-variant transition-colors hover:bg-tertiary-fixed-dim"
                    >
                      Kiểm duyệt
                    </button>
                    <button
                      type="button"
                      onClick={() => updateChannelState("locked")}
                      className="rounded-xl bg-error-container px-3 py-2 text-xs font-bold text-on-error-container transition-colors hover:bg-error-container/90"
                    >
                      Khóa kênh
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    <button
                      type="button"
                      onClick={() => sendBroadcast("notice")}
                      className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-xs font-bold text-on-surface transition-colors hover:bg-surface-container"
                    >
                      Broadcast chung
                    </button>
                    <button
                      type="button"
                      onClick={() => sendBroadcast("safety")}
                      className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-xs font-bold text-on-surface transition-colors hover:bg-surface-container"
                    >
                      Broadcast an toàn
                    </button>
                    <button
                      type="button"
                      onClick={() => sendBroadcast("coordination")}
                      className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-xs font-bold text-on-surface transition-colors hover:bg-surface-container"
                    >
                      Broadcast điều phối
                    </button>
                  </div>

                  <div>
                    <h4 className="mb-2 text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                      Moderation log
                    </h4>
                    <div className="max-h-80 space-y-2 overflow-y-auto pr-1">
                      {moderationLogs.length === 0 ? (
                        <p className="rounded-xl bg-surface-container-low p-3 text-sm text-on-surface-variant">
                          Chưa có moderation logs.
                        </p>
                      ) : (
                        moderationLogs.map((message) => (
                          <div
                            key={message.id}
                            className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-3"
                          >
                            <p className="text-[11px] font-bold uppercase tracking-wide text-outline">
                              {message.sentAtLabel} • {message.senderName}
                            </p>
                            <p className="mt-1 text-sm text-on-surface">
                              {message.body}
                            </p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <p className="rounded-xl bg-surface-container-low p-3 text-sm text-on-surface-variant">
                  Hãy chọn một kênh chat để thực hiện moderation.
                </p>
              )}
            </AdminCard>

            <AdminCard className="col-span-12 xl:col-span-4" padding="sm">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-bold text-on-surface">
                  Audit actions
                </h3>
                <StatusBadge
                  label={`${filteredAuditLogs.length} bản ghi`}
                  tone="info"
                />
              </div>

              <div className="max-h-[620px] space-y-2 overflow-y-auto pr-1">
                {filteredAuditLogs.length === 0 ? (
                  <p className="rounded-xl bg-surface-container-low p-3 text-sm text-on-surface-variant">
                    Chưa có audit actions.
                  </p>
                ) : (
                  filteredAuditLogs.map((entry) => (
                    <div
                      key={entry.id}
                      className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-3"
                    >
                      <p className="text-[11px] font-bold uppercase tracking-wide text-outline">
                        {entry.createdAtLabel}
                      </p>
                      <p className="mt-1 text-sm font-bold text-on-surface">
                        {entry.actionLabel}
                      </p>
                      <p className="mt-1 text-xs text-on-surface-variant">
                        {entry.groupTitle}
                      </p>
                      <p className="mt-1 text-xs text-on-surface-variant">
                        {entry.detail}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </AdminCard>
          </div>
        </>
      ) : null}
    </div>
  );
}
