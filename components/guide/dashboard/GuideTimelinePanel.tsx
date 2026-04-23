"use client";

import React from "react";
import Icon from "@/components/ui/Icon";
import {
  GuideCheckpointState,
  GuideTaskCheckpoint,
} from "@/types/guide-portal";

interface GuideTimelinePanelProps {
  checkpoints: GuideTaskCheckpoint[];
  taskStatus: string;
  onUpdateCheckpoint: (
    checkpointId: string,
    state: GuideCheckpointState,
  ) => void;
}

const STATE_CONFIG: Record<
  GuideCheckpointState,
  { label: string; icon: string; nodeClass: string; lineClass: string }
> = {
  upcoming: {
    label: "Sắp tới",
    icon: "radio_button_unchecked",
    nodeClass: "bg-surface-container-high text-outline",
    lineClass: "bg-surface-container-high",
  },
  "in-progress": {
    label: "Đang diễn ra",
    icon: "play_circle",
    nodeClass: "bg-primary text-white shadow-lg shadow-primary/30",
    lineClass: "bg-primary/40",
  },
  done: {
    label: "Hoàn thành",
    icon: "check_circle",
    nodeClass: "bg-green-500 text-white",
    lineClass: "bg-green-400",
  },
  blocked: {
    label: "Bị chặn",
    icon: "block",
    nodeClass: "bg-error text-white",
    lineClass: "bg-error/40",
  },
};

const NEXT_STATES: GuideCheckpointState[] = [
  "upcoming",
  "in-progress",
  "done",
  "blocked",
];

export default function GuideTimelinePanel({
  checkpoints,
  taskStatus,
  onUpdateCheckpoint,
}: GuideTimelinePanelProps) {
  const canEdit = taskStatus === "confirmed" || taskStatus === "in-progress";
  const doneCount = checkpoints.filter((cp) => cp.state === "done").length;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Icon name="timeline" className="text-primary" />
          <h3 className="text-sm font-bold text-on-surface">
            Lịch trình ({checkpoints.length} mốc)
          </h3>
        </div>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-100 text-green-700">
          {doneCount}/{checkpoints.length} hoàn thành
        </span>
      </div>

      {/* Timeline */}
      <div className="relative pl-6">
        {/* Vertical line */}
        <div className="absolute left-[11px] top-3 bottom-3 w-1 rounded-full bg-surface-container-high" />

        <div className="space-y-0">
          {checkpoints.map((cp, idx) => {
            const cfg = STATE_CONFIG[cp.state];
            const isLast = idx === checkpoints.length - 1;

            return (
              <div key={cp.id} className={`relative ${isLast ? "" : "pb-6"}`}>
                {/* Colored overlay on the vertical line */}
                {!isLast && (
                  <div
                    className={`absolute left-[-13px] top-3 w-1 rounded-full transition-all duration-500 ${cfg.lineClass}`}
                    style={{ height: "calc(100%)" }}
                  />
                )}

                {/* Node dot */}
                <div
                  className={`absolute left-[-21px] top-1 w-6 h-6 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${cfg.nodeClass}`}
                >
                  <Icon name={cfg.icon} className="text-sm" filled />
                </div>

                {/* Content card */}
                <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-[0_4px_16px_rgba(25,28,30,0.02)] ml-2 group hover:shadow-[0_10px_30px_rgba(25,28,30,0.04)] transition-all duration-200">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-black text-primary">
                          {cp.timeLabel}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            cp.state === "done"
                              ? "bg-green-100 text-green-700"
                              : cp.state === "in-progress"
                                ? "bg-primary/10 text-primary"
                                : cp.state === "blocked"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-surface-container-high text-on-surface-variant"
                          }`}
                        >
                          {cfg.label}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-on-surface">
                        {cp.title}
                      </h4>
                      <p className="text-[11px] font-medium text-on-surface-variant mt-0.5 flex items-center gap-1">
                        <Icon name="pin_drop" className="text-[11px] text-outline" />
                        {cp.locationLabel}
                      </p>
                      {cp.description && (
                        <p className="text-xs text-outline mt-1.5">
                          {cp.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* State actions */}
                  {canEdit && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-outline-variant/10">
                      {NEXT_STATES.map((ns) => (
                        <button
                          key={ns}
                          type="button"
                          disabled={cp.state === ns}
                          onClick={() => onUpdateCheckpoint(cp.id, ns)}
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
                            cp.state === ns
                              ? "bg-primary/10 text-primary ring-1 ring-primary/30"
                              : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
                          }`}
                        >
                          {STATE_CONFIG[ns].label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
