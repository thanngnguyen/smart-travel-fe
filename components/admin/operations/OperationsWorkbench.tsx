"use client";

import AdminCard from "@/components/ui/AdminCard";
import { useAdminOperationsData } from "@/hooks/useAdminOperationsData";
import AssignmentConfirmationPanel from "@/components/admin/operations/AssignmentConfirmationPanel";
import DepartureStatusBoard from "@/components/admin/operations/DepartureStatusBoard";
import GuideScreeningPanel from "@/components/admin/operations/GuideScreeningPanel";
import OperationsHeader from "@/components/admin/operations/OperationsHeader";
import OperationsSyncLog from "@/components/admin/operations/OperationsSyncLog";

export default function OperationsWorkbench() {
  const {
    departureQueue,
    selectedDeparture,
    selectedDepartureId,
    setSelectedDepartureId,
    guideCandidates,
    pendingConfirmations,
    activeGuideTasks,
    notifications,
    metrics,
    flashMessage,
    focusNextUrgentDeparture,
    assignGuide,
    confirmGuideTask,
  } = useAdminOperationsData();

  return (
    <div className="space-y-6">
      <OperationsHeader
        metrics={metrics}
        onFocusUrgentDeparture={focusNextUrgentDeparture}
      />

      {flashMessage ? (
        <AdminCard
          padding="sm"
          className={
            flashMessage.tone === "success"
              ? "bg-primary/10 text-on-surface"
              : "bg-tertiary-fixed text-on-tertiary-fixed-variant"
          }
        >
          <p className="text-sm font-bold">{flashMessage.text}</p>
        </AdminCard>
      ) : null}

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-5">
          <DepartureStatusBoard
            departures={departureQueue}
            selectedDepartureId={selectedDepartureId}
            onSelectDeparture={setSelectedDepartureId}
          />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <GuideScreeningPanel
            selectedDeparture={selectedDeparture}
            candidates={guideCandidates}
            onAssignGuide={assignGuide}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-8">
          <AssignmentConfirmationPanel
            pendingConfirmations={pendingConfirmations}
            activeGuideTasks={activeGuideTasks}
            onConfirmGuideTask={confirmGuideTask}
          />
        </div>

        <div className="col-span-12 xl:col-span-4">
          <OperationsSyncLog notifications={notifications} />
        </div>
      </div>
    </div>
  );
}
