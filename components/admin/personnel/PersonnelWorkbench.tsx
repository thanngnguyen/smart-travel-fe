"use client";

import AdminCard from "@/components/ui/AdminCard";
import PersonnelDetailPanel from "@/components/admin/personnel/PersonnelDetailPanel";
import PersonnelDirectoryTable from "@/components/admin/personnel/PersonnelDirectoryTable";
import PersonnelFilterBar from "@/components/admin/personnel/PersonnelFilterBar";
import PersonnelHeader from "@/components/admin/personnel/PersonnelHeader";
import PersonnelMetricsGrid from "@/components/admin/personnel/PersonnelMetricsGrid";
import PersonnelRequestsPanel from "@/components/admin/personnel/PersonnelRequestsPanel";
import { useAdminPersonnelData } from "@/hooks/useAdminPersonnelData";

export default function PersonnelWorkbench() {
  const {
    filteredMembers,
    selectedMember,
    selectedMemberId,
    setSelectedMemberId,
    searchQuery,
    setSearchQuery,
    roleFilters,
    statusFilters,
    setActiveRoleFilter,
    setActiveStatusFilter,
    metrics,
    roleBreakdown,
    workloadAlerts,
    pendingRequests,
    actionLogs,
    flashMessage,
    clearFlashMessage,
    toggleLeaveStatus,
    toggleSuspendStatus,
    assignEmergencyTour,
    promoteToAdmin,
    resolveRequest,
  } = useAdminPersonnelData();

  const focusWorkloadAlerts = () => {
    if (!workloadAlerts.length) {
      return;
    }

    setSelectedMemberId(workloadAlerts[0].memberId);
  };

  const focusPendingRequests = () => {
    if (!pendingRequests.length) {
      return;
    }

    setSelectedMemberId(pendingRequests[0].memberId);
  };

  return (
    <div className="space-y-6">
      <PersonnelHeader
        onFocusWorkloadAlerts={focusWorkloadAlerts}
        onFocusPendingRequests={focusPendingRequests}
      />

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

      <PersonnelFilterBar
        searchQuery={searchQuery}
        roleFilters={roleFilters}
        statusFilters={statusFilters}
        onSearchQueryChange={setSearchQuery}
        onRoleFilterChange={setActiveRoleFilter}
        onStatusFilterChange={setActiveStatusFilter}
      />

      <PersonnelMetricsGrid
        metrics={metrics}
        roleBreakdown={roleBreakdown}
        workloadAlerts={workloadAlerts}
      />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-8">
          <PersonnelDirectoryTable
            members={filteredMembers}
            selectedMemberId={selectedMemberId}
            onSelectMember={setSelectedMemberId}
            onAssignEmergencyTour={assignEmergencyTour}
            onToggleSuspendStatus={toggleSuspendStatus}
          />
        </div>

        <div className="col-span-12 xl:col-span-4">
          <PersonnelDetailPanel
            member={selectedMember}
            onToggleLeaveStatus={toggleLeaveStatus}
            onPromoteToAdmin={promoteToAdmin}
            onAssignEmergencyTour={assignEmergencyTour}
            onToggleSuspendStatus={toggleSuspendStatus}
          />
        </div>
      </div>

      <PersonnelRequestsPanel
        requests={pendingRequests}
        actionLogs={actionLogs}
        onResolveRequest={resolveRequest}
      />
    </div>
  );
}
