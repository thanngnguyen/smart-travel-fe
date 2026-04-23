"use client";

import React, { useState } from "react";
import Icon from "@/components/ui/Icon";
import StatusBadge from "@/components/ui/StatusBadge";
import GuidePassengerPanel from "./GuidePassengerPanel";
import GuideTimelinePanel from "./GuideTimelinePanel";
import GuideChatPanel from "./GuideChatPanel";
import GuideIncidentPanel from "./GuideIncidentPanel";
import {
  GuideCheckInStatus,
  GuideCheckpointState,
  GuideDepartureTask,
  GuideIncidentDraft,
  GuideTaskLifecycle,
} from "@/types/guide-portal";

interface GuideTaskDetailProps {
  task: GuideDepartureTask;
  onUpdateTaskStatus: (
    taskId: string,
    action: "confirm-task" | "start-task" | "complete-task",
  ) => void;
  onPassengerCheckIn: (
    taskId: string,
    passengerId: string,
    status: GuideCheckInStatus,
  ) => void;
  onCheckpointUpdate: (
    taskId: string,
    checkpointId: string,
    state: GuideCheckpointState,
  ) => void;
  onSendMessage: (taskId: string, content: string) => void;
  onMarkRead: (taskId: string) => void;
  onCreateIncident: (taskId: string, draft: GuideIncidentDraft) => void;
  onCloseIncident: (
    taskId: string,
    incidentId: string,
    resolutionNote: string,
  ) => void;
}

type DetailTab = "passengers" | "timeline" | "chat" | "incidents";

const TABS: { id: DetailTab; label: string; icon: string }[] = [
  { id: "passengers", label: "Hành khách", icon: "group" },
  { id: "timeline", label: "Lịch trình", icon: "timeline" },
  { id: "chat", label: "Chat", icon: "forum" },
  { id: "incidents", label: "Sự cố", icon: "report" },
];

const STATUS_CONFIG: Record<
  GuideTaskLifecycle,
  { label: string; tone: "warning" | "info" | "primary" | "success" }
> = {
  "pending-confirmation": { label: "Chờ tiếp nhận", tone: "warning" },
  confirmed: { label: "Đã tiếp nhận", tone: "info" },
  "in-progress": { label: "Đang vận hành", tone: "primary" },
  completed: { label: "Hoàn tất", tone: "success" },
};

const ACTION_CONFIG: Record<
  string,
  { label: string; icon: string; className: string } | null
> = {
  "pending-confirmation": {
    label: "Xác nhận tiếp nhận",
    icon: "check",
    className:
      "bg-gradient-to-r from-primary to-primary-container text-white shadow-lg shadow-primary/20",
  },
  confirmed: {
    label: "Bắt đầu tour",
    icon: "play_arrow",
    className:
      "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/20",
  },
  "in-progress": {
    label: "Hoàn tất tour",
    icon: "flag",
    className:
      "bg-gradient-to-r from-primary to-primary-container text-white shadow-lg shadow-primary/20",
  },
  completed: null,
};

function formatDateRange(start: string, end: string) {
  const s = new Date(start);
  const e = new Date(end);
  const fmtDate = (d: Date) =>
    d.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  return `${fmtDate(s)} — ${fmtDate(e)}`;
}

export default function GuideTaskDetail({
  task,
  onUpdateTaskStatus,
  onPassengerCheckIn,
  onCheckpointUpdate,
  onSendMessage,
  onMarkRead,
  onCreateIncident,
  onCloseIncident,
}: GuideTaskDetailProps) {
  const [activeTab, setActiveTab] = useState<DetailTab>("passengers");

  const statusCfg = STATUS_CONFIG[task.taskStatus];
  const actionCfg = ACTION_CONFIG[task.taskStatus];

  const unreadChat = task.chatThread.filter((m) => m.isUnreadByGuide).length;
  const openIncidents = task.incidents.filter(
    (i) => i.status !== "resolved",
  ).length;

  const handleAction = () => {
    const actionMap: Record<string, "confirm-task" | "start-task" | "complete-task"> = {
      "pending-confirmation": "confirm-task",
      confirmed: "start-task",
      "in-progress": "complete-task",
    };
    const action = actionMap[task.taskStatus];
    if (action) {
      onUpdateTaskStatus(task.id, action);
    }
  };

  return (
    <div className="bg-surface-container-lowest rounded-3xl shadow-[0_20px_40px_rgba(25,28,30,0.04)] overflow-hidden h-full flex flex-col">
      {/* Task header */}
      <div className="px-6 pt-6 pb-5 shrink-0">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-[11px] font-black text-primary uppercase tracking-wider bg-primary/8 px-2.5 py-0.5 rounded-lg">
                {task.departureCode}
              </span>
              <StatusBadge label={statusCfg.label} tone={statusCfg.tone} />
              <span className="text-[10px] font-bold text-outline bg-surface-container px-2 py-0.5 rounded-md uppercase tracking-wider">
                {task.groupLanguage}
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-on-surface leading-tight">
              {task.tourTitle}
            </h2>
          </div>

          {/* Main action button */}
          {actionCfg && (
            <button
              type="button"
              onClick={handleAction}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold transition-all hover:scale-[0.98] cursor-pointer shrink-0 ${actionCfg.className}`}
            >
              <Icon name={actionCfg.icon} className="text-lg" />
              {actionCfg.label}
            </button>
          )}
        </div>

        {/* Meta cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <MetaChip icon="location_on" label="Điểm đến" value={task.destinationLabel} />
          <MetaChip
            icon="calendar_today"
            label="Thời gian"
            value={formatDateRange(task.startDate, task.endDate)}
          />
          <MetaChip icon="pin_drop" label="Điểm tập trung" value={task.meetingPoint} />
          <MetaChip
            icon="group"
            label="Sức chứa"
            value={`${task.currentParticipants}/${task.maxParticipants} khách`}
          />
        </div>

        {/* Itinerary summary */}
        {task.itinerarySummary.length > 0 && (
          <div className="mt-4 p-3 rounded-2xl bg-surface-container-low/60">
            <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1.5">
              Tóm tắt hành trình
            </p>
            <div className="space-y-1">
              {task.itinerarySummary.map((item, idx) => (
                <p
                  key={idx}
                  className="text-xs font-medium text-on-surface-variant flex items-start gap-2"
                >
                  <span className="w-5 h-5 rounded-md bg-primary/8 text-primary text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Tab navigation */}
      <div className="px-6 shrink-0">
        <div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-2xl">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            const badge =
              tab.id === "chat" && unreadChat > 0
                ? unreadChat
                : tab.id === "incidents" && openIncidents > 0
                  ? openIncidents
                  : null;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer relative ${
                  isActive
                    ? "bg-white shadow-sm text-primary"
                    : "text-outline hover:text-on-surface"
                }`}
              >
                <Icon name={tab.icon} className="text-base" filled={isActive} />
                {tab.label}
                {badge != null && badge > 0 && (
                  <span className="min-w-4 h-4 px-1 flex items-center justify-center rounded-full bg-error text-white text-[9px] font-black">
                    {badge > 9 ? "9+" : badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab content */}
      <div className="flex-1 overflow-y-auto px-6 py-5 min-h-0">
        {activeTab === "passengers" && (
          <GuidePassengerPanel
            passengers={task.passengers}
            taskStatus={task.taskStatus}
            onCheckIn={(passengerId, status) =>
              onPassengerCheckIn(task.id, passengerId, status)
            }
          />
        )}
        {activeTab === "timeline" && (
          <GuideTimelinePanel
            checkpoints={task.checkpoints}
            taskStatus={task.taskStatus}
            onUpdateCheckpoint={(checkpointId, state) =>
              onCheckpointUpdate(task.id, checkpointId, state)
            }
          />
        )}
        {activeTab === "chat" && (
          <GuideChatPanel
            chatThread={task.chatThread}
            taskId={task.id}
            onSendMessage={onSendMessage}
            onMarkRead={onMarkRead}
          />
        )}
        {activeTab === "incidents" && (
          <GuideIncidentPanel
            incidents={task.incidents}
            taskId={task.id}
            taskStatus={task.taskStatus}
            onCreateIncident={onCreateIncident}
            onCloseIncident={onCloseIncident}
          />
        )}
      </div>
    </div>
  );
}

function MetaChip({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2 p-3 rounded-xl bg-surface-container-low/60">
      <Icon name={icon} className="text-sm text-primary shrink-0 mt-0.5" />
      <div className="min-w-0">
        <p className="text-[10px] font-bold text-outline uppercase tracking-wider">
          {label}
        </p>
        <p className="text-xs font-bold text-on-surface mt-0.5 truncate">
          {value}
        </p>
      </div>
    </div>
  );
}
