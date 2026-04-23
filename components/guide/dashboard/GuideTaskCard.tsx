import React from "react";
import Icon from "@/components/ui/Icon";
import StatusBadge from "@/components/ui/StatusBadge";
import {
  GuideDepartureTask,
  GuideTaskLifecycle,
} from "@/types/guide-portal";

interface GuideTaskCardProps {
  task: GuideDepartureTask;
  isSelected: boolean;
  onSelect: (taskId: string) => void;
}

const STATUS_CONFIG: Record<
  GuideTaskLifecycle,
  { label: string; tone: "warning" | "info" | "primary" | "success" | "neutral" }
> = {
  "pending-confirmation": { label: "Chờ tiếp nhận", tone: "warning" },
  confirmed: { label: "Đã tiếp nhận", tone: "info" },
  "in-progress": { label: "Đang vận hành", tone: "primary" },
  completed: { label: "Hoàn tất", tone: "success" },
};

function formatDateRange(start: string, end: string) {
  const s = new Date(start);
  const e = new Date(end);
  const fmtDay = (d: Date) =>
    `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1).toString().padStart(2, "0")}`;
  return `${fmtDay(s)} — ${fmtDay(e)}`;
}

export default function GuideTaskCard({
  task,
  isSelected,
  onSelect,
}: GuideTaskCardProps) {
  const statusCfg = STATUS_CONFIG[task.taskStatus];

  const unread = task.chatThread.filter((m) => m.isUnreadByGuide).length;
  const openIncidents = task.incidents.filter(
    (i) => i.status !== "resolved",
  ).length;

  return (
    <button
      type="button"
      onClick={() => onSelect(task.id)}
      className={`w-full text-left p-5 rounded-2xl transition-all duration-200 group cursor-pointer ${
        isSelected
          ? "bg-surface-container-lowest shadow-[0_20px_40px_rgba(25,28,30,0.06)] ring-2 ring-primary/20"
          : "bg-surface-container-lowest/60 hover:bg-surface-container-lowest hover:shadow-[0_10px_30px_rgba(25,28,30,0.03)]"
      }`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-black text-primary uppercase tracking-wider bg-primary/8 px-2 py-0.5 rounded-md">
              {task.departureCode}
            </span>
            <StatusBadge label={statusCfg.label} tone={statusCfg.tone} />
          </div>
          <h3 className="text-sm font-bold text-on-surface truncate leading-snug">
            {task.tourTitle}
          </h3>
        </div>
      </div>

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-medium text-on-surface-variant">
        <span className="flex items-center gap-1">
          <Icon name="location_on" className="text-xs text-outline" />
          {task.destinationLabel}
        </span>
        <span className="flex items-center gap-1">
          <Icon name="calendar_today" className="text-xs text-outline" />
          {formatDateRange(task.startDate, task.endDate)}
        </span>
        <span className="flex items-center gap-1">
          <Icon name="group" className="text-xs text-outline" />
          {task.currentParticipants}/{task.maxParticipants}
        </span>
      </div>

      {/* Alert badges */}
      {(unread > 0 || openIncidents > 0) && (
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-outline-variant/10">
          {unread > 0 && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold">
              <Icon name="chat_bubble" className="text-[10px]" />
              {unread} chưa đọc
            </span>
          )}
          {openIncidents > 0 && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold">
              <Icon name="warning" className="text-[10px]" />
              {openIncidents} sự cố
            </span>
          )}
        </div>
      )}
    </button>
  );
}
