"use client";

import React, { useState } from "react";
import Icon from "@/components/ui/Icon";
import {
  GuideIncidentDraft,
  GuideIncidentReport,
  GuideIncidentSeverity,
  GuideIncidentStatus,
} from "@/types/guide-portal";

interface GuideIncidentPanelProps {
  incidents: GuideIncidentReport[];
  taskId: string;
  taskStatus: string;
  onCreateIncident: (taskId: string, draft: GuideIncidentDraft) => void;
  onCloseIncident: (
    taskId: string,
    incidentId: string,
    resolutionNote: string,
  ) => void;
}

const SEVERITY_CONFIG: Record<
  GuideIncidentSeverity,
  { label: string; badgeClass: string; icon: string }
> = {
  low: { label: "Thấp", badgeClass: "bg-blue-100 text-blue-700", icon: "info" },
  medium: {
    label: "Trung bình",
    badgeClass: "bg-amber-100 text-amber-700",
    icon: "warning",
  },
  high: {
    label: "Cao",
    badgeClass: "bg-orange-100 text-orange-700",
    icon: "error",
  },
  critical: {
    label: "Nghiêm trọng",
    badgeClass: "bg-red-100 text-red-700",
    icon: "crisis_alert",
  },
};

const STATUS_CONFIG: Record<
  GuideIncidentStatus,
  { label: string; badgeClass: string }
> = {
  open: { label: "Đang mở", badgeClass: "bg-red-100 text-red-700" },
  mitigating: {
    label: "Đang xử lý",
    badgeClass: "bg-amber-100 text-amber-700",
  },
  resolved: {
    label: "Đã giải quyết",
    badgeClass: "bg-green-100 text-green-700",
  },
};

function formatDateTime(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function GuideIncidentPanel({
  incidents,
  taskId,
  taskStatus,
  onCreateIncident,
  onCloseIncident,
}: GuideIncidentPanelProps) {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState<GuideIncidentSeverity>("medium");
  const [resolvingId, setResolvingId] = useState<string | null>(null);
  const [resolutionNote, setResolutionNote] = useState("");

  const canCreate =
    taskStatus === "confirmed" || taskStatus === "in-progress";
  const openCount = incidents.filter((i) => i.status !== "resolved").length;

  const handleCreate = () => {
    if (!title.trim() || !description.trim()) return;
    onCreateIncident(taskId, {
      title: title.trim(),
      description: description.trim(),
      severity,
    });
    setTitle("");
    setDescription("");
    setSeverity("medium");
    setShowForm(false);
  };

  const handleResolve = (incidentId: string) => {
    if (!resolutionNote.trim()) return;
    onCloseIncident(taskId, incidentId, resolutionNote.trim());
    setResolvingId(null);
    setResolutionNote("");
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Icon name="report" className="text-tertiary" />
          <h3 className="text-sm font-bold text-on-surface">
            Sự cố ({incidents.length})
          </h3>
          {openCount > 0 && (
            <span className="min-w-5 h-5 px-1.5 flex items-center justify-center rounded-full bg-error text-white text-[10px] font-black">
              {openCount}
            </span>
          )}
        </div>
        {canCreate && !showForm && (
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-[11px] font-bold bg-tertiary-fixed text-on-tertiary-fixed-variant hover:bg-tertiary-fixed-dim transition-colors cursor-pointer"
          >
            <Icon name="add" className="text-sm" />
            Báo cáo sự cố
          </button>
        )}
      </div>

      {/* Create form */}
      {showForm && (
        <div className="bg-surface-container-lowest rounded-2xl p-4 mb-4 shadow-[0_4px_16px_rgba(25,28,30,0.04)] animate-[fadeIn_0.2s_ease-out]">
          <p className="text-xs font-bold text-on-surface mb-3 flex items-center gap-1.5">
            <Icon name="edit_note" className="text-sm text-tertiary" />
            Tạo báo cáo sự cố mới
          </p>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Tiêu đề sự cố..."
            className="w-full bg-surface-container-low rounded-xl px-3 py-2 text-sm font-medium text-on-surface placeholder:text-outline outline-none mb-2 focus:ring-2 focus:ring-primary/20 transition-all"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Mô tả chi tiết sự cố..."
            rows={3}
            className="w-full bg-surface-container-low rounded-xl px-3 py-2 text-sm font-medium text-on-surface placeholder:text-outline outline-none mb-3 resize-none focus:ring-2 focus:ring-primary/20 transition-all"
          />

          {/* Severity selector */}
          <div className="mb-3">
            <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-2">
              Mức độ nghiêm trọng
            </p>
            <div className="flex flex-wrap gap-2">
              {(
                Object.entries(SEVERITY_CONFIG) as [
                  GuideIncidentSeverity,
                  (typeof SEVERITY_CONFIG)[GuideIncidentSeverity],
                ][]
              ).map(([key, cfg]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSeverity(key)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                    severity === key
                      ? `${cfg.badgeClass} ring-2 ring-offset-1 ring-current/30`
                      : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  <Icon name={cfg.icon} className="text-sm" />
                  {cfg.label}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 justify-end">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer"
            >
              Hủy
            </button>
            <button
              type="button"
              onClick={handleCreate}
              disabled={!title.trim() || !description.trim()}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-tertiary to-tertiary-container text-white hover:shadow-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              Gửi báo cáo
            </button>
          </div>
        </div>
      )}

      {/* Incident list */}
      {incidents.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="p-3 rounded-2xl bg-green-100 mb-3">
            <Icon name="verified" className="text-2xl text-green-600" />
          </div>
          <p className="text-sm font-bold text-on-surface-variant">
            Không có sự cố nào
          </p>
          <p className="text-xs text-outline mt-1">
            Mọi thứ đang hoạt động bình thường.
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {incidents.map((incident) => {
            const sevCfg = SEVERITY_CONFIG[incident.severity];
            const stsCfg = STATUS_CONFIG[incident.status];
            const isResolving = resolvingId === incident.id;

            return (
              <div
                key={incident.id}
                className={`rounded-2xl p-4 transition-all duration-200 ${
                  incident.status === "resolved"
                    ? "bg-surface-container-low/60"
                    : "bg-surface-container-lowest shadow-[0_4px_16px_rgba(25,28,30,0.03)]"
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span
                        className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${sevCfg.badgeClass}`}
                      >
                        <Icon name={sevCfg.icon} className="text-[10px]" />
                        {sevCfg.label}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${stsCfg.badgeClass}`}
                      >
                        {stsCfg.label}
                      </span>
                    </div>
                    <h4
                      className={`text-sm font-bold ${
                        incident.status === "resolved"
                          ? "text-on-surface-variant line-through"
                          : "text-on-surface"
                      }`}
                    >
                      {incident.title}
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {incident.description}
                </p>

                <div className="flex items-center gap-3 mt-2 text-[10px] font-medium text-outline">
                  <span className="flex items-center gap-1">
                    <Icon name="schedule" className="text-[10px]" />
                    {formatDateTime(incident.createdAtIso)}
                  </span>
                  {incident.updatedAtIso !== incident.createdAtIso && (
                    <span className="flex items-center gap-1">
                      <Icon name="update" className="text-[10px]" />
                      {formatDateTime(incident.updatedAtIso)}
                    </span>
                  )}
                </div>

                {/* Resolution note */}
                {incident.resolutionNote && (
                  <div className="mt-3 p-3 rounded-xl bg-green-50 text-xs">
                    <p className="text-[10px] font-bold text-green-700 uppercase tracking-wider mb-1">
                      Ghi chú giải quyết
                    </p>
                    <p className="text-green-800 font-medium">
                      {incident.resolutionNote}
                    </p>
                  </div>
                )}

                {/* Resolve action */}
                {incident.status !== "resolved" && canCreate && (
                  <div className="mt-3 pt-3 border-t border-outline-variant/10">
                    {isResolving ? (
                      <div className="space-y-2 animate-[fadeIn_0.2s_ease-out]">
                        <input
                          type="text"
                          value={resolutionNote}
                          onChange={(e) => setResolutionNote(e.target.value)}
                          placeholder="Ghi chú cách xử lý sự cố..."
                          className="w-full bg-surface-container-low rounded-xl px-3 py-2 text-xs font-medium text-on-surface placeholder:text-outline outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                        <div className="flex items-center gap-2 justify-end">
                          <button
                            type="button"
                            onClick={() => {
                              setResolvingId(null);
                              setResolutionNote("");
                            }}
                            className="px-3 py-1.5 rounded-lg text-[11px] font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer"
                          >
                            Hủy
                          </button>
                          <button
                            type="button"
                            onClick={() => handleResolve(incident.id)}
                            disabled={!resolutionNote.trim()}
                            className="px-3 py-1.5 rounded-lg text-[11px] font-bold bg-green-600 text-white hover:bg-green-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                          >
                            Đóng sự cố
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setResolvingId(incident.id)}
                        className="flex items-center gap-1 text-[11px] font-bold text-green-600 hover:text-green-700 transition-colors cursor-pointer"
                      >
                        <Icon name="check_circle" className="text-sm" />
                        Đánh dấu đã giải quyết
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
