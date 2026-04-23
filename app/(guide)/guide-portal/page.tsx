"use client";

import React from "react";
import { useGuidePortalData } from "@/hooks/useGuidePortalData";
import GuidePortalHeader from "@/components/guide/dashboard/GuidePortalHeader";
import GuideMetricsGrid from "@/components/guide/dashboard/GuideMetricsGrid";
import GuideTaskList from "@/components/guide/dashboard/GuideTaskList";
import GuideTaskDetail from "@/components/guide/dashboard/GuideTaskDetail";
import GuideSyncLogPanel from "@/components/guide/dashboard/GuideSyncLogPanel";
import Icon from "@/components/ui/Icon";

export default function GuidePortalPage() {
  const {
    profile,
    tasks,
    selectedTask,
    selectedTaskId,
    searchQuery,
    taskFilter,
    filterTabs,
    metrics,
    latestLogs,
    setSearchQuery,
    setTaskFilter,
    selectTask,
    updateTaskStatus,
    updatePassengerCheckIn,
    updateCheckpoint,
    sendGuideMessage,
    markMessagesRead,
    createIncident,
    closeIncident,
  } = useGuidePortalData();

  return (
    <>
      <GuidePortalHeader
        guideName={profile.fullName}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        unreadMessages={metrics.unreadMessages}
      />

      <div className="px-8 pb-8 space-y-6">
        {/* Metrics */}
        <GuideMetricsGrid metrics={metrics} />

        {/* Main content: task list + task detail */}
        <div className="flex gap-6 items-start">
          {/* Left panel: task list */}
          <div className="w-[380px] shrink-0">
            <GuideTaskList
              tasks={tasks}
              filterTabs={filterTabs}
              activeFilter={taskFilter}
              selectedTaskId={selectedTaskId}
              onFilterChange={setTaskFilter}
              onSelectTask={selectTask}
            />
          </div>

          {/* Right panel: task detail */}
          <div className="flex-1 min-w-0">
            {selectedTask ? (
              <GuideTaskDetail
                task={selectedTask}
                onUpdateTaskStatus={updateTaskStatus}
                onPassengerCheckIn={updatePassengerCheckIn}
                onCheckpointUpdate={updateCheckpoint}
                onSendMessage={sendGuideMessage}
                onMarkRead={markMessagesRead}
                onCreateIncident={createIncident}
                onCloseIncident={closeIncident}
              />
            ) : (
              <div className="bg-surface-container-lowest rounded-3xl shadow-[0_20px_40px_rgba(25,28,30,0.04)] flex flex-col items-center justify-center py-24 text-center">
                <div className="p-5 rounded-3xl bg-surface-container-low mb-5">
                  <Icon name="assignment" className="text-4xl text-outline" />
                </div>
                <h3 className="text-lg font-bold text-on-surface-variant mb-1">
                  Chọn một nhiệm vụ
                </h3>
                <p className="text-sm text-outline max-w-xs">
                  Chọn nhiệm vụ từ danh sách bên trái để xem chi tiết và quản lý
                  hành trình.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Activity log */}
        <GuideSyncLogPanel logs={latestLogs} />
      </div>
    </>
  );
}
