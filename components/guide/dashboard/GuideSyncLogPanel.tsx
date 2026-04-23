import React from "react";
import Icon from "@/components/ui/Icon";
import { GuideSyncLogEntry, GuideSyncTone } from "@/types/guide-portal";

interface GuideSyncLogPanelProps {
  logs: GuideSyncLogEntry[];
}

const TONE_CONFIG: Record<
  GuideSyncTone,
  { icon: string; iconClass: string; dotClass: string }
> = {
  info: {
    icon: "info",
    iconClass: "text-blue-500",
    dotClass: "bg-blue-500",
  },
  success: {
    icon: "check_circle",
    iconClass: "text-green-500",
    dotClass: "bg-green-500",
  },
  warning: {
    icon: "warning",
    iconClass: "text-amber-500",
    dotClass: "bg-amber-500",
  },
};

function formatRelativeTime(iso: string) {
  const now = Date.now();
  const then = new Date(iso).getTime();
  const diff = now - then;

  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "Vừa xong";
  if (minutes < 60) return `${minutes} phút trước`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} giờ trước`;

  const days = Math.floor(hours / 24);
  return `${days} ngày trước`;
}

export default function GuideSyncLogPanel({ logs }: GuideSyncLogPanelProps) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-[0_10px_30px_rgba(25,28,30,0.03)]">
      <div className="flex items-center gap-2 mb-4">
        <Icon name="history" className="text-primary" />
        <h3 className="text-sm font-bold text-on-surface">
          Nhật ký hoạt động
        </h3>
      </div>

      {logs.length === 0 ? (
        <p className="text-xs text-outline text-center py-6">
          Chưa có hoạt động nào được ghi nhận.
        </p>
      ) : (
        <div className="space-y-0.5">
          {logs.map((log) => {
            const cfg = TONE_CONFIG[log.tone];

            return (
              <div
                key={log.id}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-container-low/50 transition-colors"
              >
                <div className={`mt-0.5 shrink-0 ${cfg.iconClass}`}>
                  <Icon name={cfg.icon} className="text-base" filled />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-on-surface">
                    {log.title}
                  </p>
                  <p className="text-[11px] text-on-surface-variant mt-0.5 truncate">
                    {log.detail}
                  </p>
                </div>
                <span className="text-[10px] font-medium text-outline whitespace-nowrap shrink-0">
                  {formatRelativeTime(log.createdAtIso)}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
