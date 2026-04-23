"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AuthSession } from "@/types/auth";
import {
  GuideIncidentDraft,
  GuidePortalMetrics,
  GuidePortalState,
  GuideTaskLifecycle,
} from "@/types/guide-portal";
import {
  appendGuideTaskMessage,
  appendIncidentReport,
  applyCheckpointStateUpdate,
  applyGuideTaskStatusAction,
  applyPassengerCheckInStatus,
  GUIDE_PORTAL_STORAGE_KEY,
  GUIDE_PORTAL_UPDATED_EVENT,
  loadGuidePortalState,
  markTaskMessagesAsRead,
  resolveIncidentReport,
  saveGuidePortalState,
} from "@/lib/guide-portal-store";
import { AUTH_SESSION_STORAGE_KEY, loadAuthSession } from "@/lib/auth-session";

export type GuideTaskFilter = "all" | GuideTaskLifecycle;

function clampReadinessScore(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function calculateReadinessScore(state: GuidePortalState) {
  const operationalTasks = state.tasks.filter(
    (task) =>
      task.taskStatus === "confirmed" || task.taskStatus === "in-progress",
  );

  if (operationalTasks.length === 0) {
    return 100;
  }

  const passengerStats = operationalTasks.reduce(
    (acc, task) => {
      const checkedIn = task.passengers.filter(
        (passenger) =>
          passenger.checkInStatus === "checked-in" ||
          passenger.checkInStatus === "late",
      ).length;

      return {
        checkedIn: acc.checkedIn + checkedIn,
        total: acc.total + task.passengers.length,
      };
    },
    { checkedIn: 0, total: 0 },
  );

  const checkpointStats = operationalTasks.reduce(
    (acc, task) => {
      const doneCount = task.checkpoints.filter(
        (checkpoint) => checkpoint.state === "done",
      ).length;

      return {
        done: acc.done + doneCount,
        total: acc.total + task.checkpoints.length,
      };
    },
    { done: 0, total: 0 },
  );

  const checkInRatio =
    passengerStats.total === 0
      ? 1
      : passengerStats.checkedIn / passengerStats.total;
  const checkpointRatio =
    checkpointStats.total === 0
      ? 1
      : checkpointStats.done / checkpointStats.total;

  const openIncidentCount = operationalTasks
    .flatMap((task) => task.incidents)
    .filter((incident) => incident.status !== "resolved").length;

  return clampReadinessScore(
    checkInRatio * 55 + checkpointRatio * 45 - openIncidentCount * 8,
  );
}

function calculateMetrics(state: GuidePortalState): GuidePortalMetrics {
  const pendingConfirmations = state.tasks.filter(
    (task) => task.taskStatus === "pending-confirmation",
  ).length;

  const activeDepartures = state.tasks.filter(
    (task) => task.taskStatus === "in-progress",
  ).length;

  const checkedInPassengers = state.tasks
    .flatMap((task) => task.passengers)
    .filter(
      (passenger) =>
        passenger.checkInStatus === "checked-in" ||
        passenger.checkInStatus === "late",
    ).length;

  const openIncidents = state.tasks
    .flatMap((task) => task.incidents)
    .filter((incident) => incident.status !== "resolved").length;

  const unreadMessages = state.tasks
    .flatMap((task) => task.chatThread)
    .filter((message) => message.isUnreadByGuide).length;

  return {
    pendingConfirmations,
    activeDepartures,
    checkedInPassengers,
    openIncidents,
    unreadMessages,
    readinessScore: calculateReadinessScore(state),
  };
}

const INITIAL_STATE = loadGuidePortalState();

export function useGuidePortalData() {
  const [authSession, setAuthSession] = useState<AuthSession | null>(null);
  const [state, setState] = useState<GuidePortalState>(INITIAL_STATE);
  const [notice, setNotice] = useState<string | null>(null);
  const [taskFilter, setTaskFilter] = useState<GuideTaskFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTaskId, setSelectedTaskId] = useState("");

  const stateRef = useRef(state);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    const bootstrapTimer = window.setTimeout(() => {
      const nextState = loadGuidePortalState();
      stateRef.current = nextState;
      setState(nextState);
      setAuthSession(loadAuthSession());
    }, 0);

    const syncFromStorage = () => {
      const nextState = loadGuidePortalState();
      const nextSession = loadAuthSession();

      const syncTimer = window.setTimeout(() => {
        stateRef.current = nextState;
        setState(nextState);
        setAuthSession(nextSession);
      }, 0);

      return syncTimer;
    };

    const timers: number[] = [];

    const handleStorage = (event: StorageEvent) => {
      if (
        !event.key ||
        event.key === AUTH_SESSION_STORAGE_KEY ||
        event.key === GUIDE_PORTAL_STORAGE_KEY
      ) {
        const timerId = syncFromStorage();
        timers.push(timerId);
      }
    };

    const handleGuidePortalUpdate = () => {
      const timerId = syncFromStorage();
      timers.push(timerId);
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener(
      GUIDE_PORTAL_UPDATED_EVENT,
      handleGuidePortalUpdate as EventListener,
    );

    return () => {
      window.clearTimeout(bootstrapTimer);
      timers.forEach((timerId) => window.clearTimeout(timerId));
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(
        GUIDE_PORTAL_UPDATED_EVENT,
        handleGuidePortalUpdate as EventListener,
      );
    };
  }, []);

  const isGuideAuthorized = authSession?.role === "guide";

  const filteredTasks = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return state.tasks.filter((task) => {
      if (taskFilter !== "all" && task.taskStatus !== taskFilter) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const passengerMatch = task.passengers.some((passenger) =>
        passenger.fullName.toLowerCase().includes(normalizedQuery),
      );

      return (
        task.departureCode.toLowerCase().includes(normalizedQuery) ||
        task.tourTitle.toLowerCase().includes(normalizedQuery) ||
        task.destinationLabel.toLowerCase().includes(normalizedQuery) ||
        passengerMatch
      );
    });
  }, [searchQuery, state.tasks, taskFilter]);

  useEffect(() => {
    if (filteredTasks.length === 0) {
      if (!selectedTaskId) {
        return;
      }

      const resetSelectionTimer = window.setTimeout(() => {
        setSelectedTaskId("");
      }, 0);

      return () => window.clearTimeout(resetSelectionTimer);
    }

    const selectedStillExists = filteredTasks.some(
      (task) => task.id === selectedTaskId,
    );

    if (selectedStillExists) {
      return;
    }

    const nextTaskId = filteredTasks[0]?.id ?? "";
    if (!nextTaskId) {
      return;
    }

    const syncSelectionTimer = window.setTimeout(() => {
      setSelectedTaskId(nextTaskId);
    }, 0);

    return () => window.clearTimeout(syncSelectionTimer);
  }, [filteredTasks, selectedTaskId]);

  const selectedTask = useMemo(() => {
    if (!selectedTaskId) {
      return filteredTasks[0] ?? null;
    }

    return filteredTasks.find((task) => task.id === selectedTaskId) ?? null;
  }, [filteredTasks, selectedTaskId]);

  const metrics = useMemo(() => calculateMetrics(state), [state]);

  const filterTabs = useMemo(() => {
    const pending = state.tasks.filter(
      (task) => task.taskStatus === "pending-confirmation",
    ).length;
    const confirmed = state.tasks.filter(
      (task) => task.taskStatus === "confirmed",
    ).length;
    const inProgress = state.tasks.filter(
      (task) => task.taskStatus === "in-progress",
    ).length;
    const completed = state.tasks.filter(
      (task) => task.taskStatus === "completed",
    ).length;

    return [
      { id: "all" as const, label: "Tat ca", count: state.tasks.length },
      {
        id: "pending-confirmation" as const,
        label: "Cho tiep nhan",
        count: pending,
      },
      { id: "confirmed" as const, label: "Da tiep nhan", count: confirmed },
      { id: "in-progress" as const, label: "Dang tour", count: inProgress },
      { id: "completed" as const, label: "Hoan tat", count: completed },
    ];
  }, [state.tasks]);

  const applyMutation = useCallback(
    (
      mutation: (
        current: GuidePortalState,
      ) => ReturnType<typeof appendIncidentReport>,
    ) => {
      const result = mutation(stateRef.current);
      if (result.changed) {
        stateRef.current = result.nextState;
        setState(result.nextState);
        saveGuidePortalState(result.nextState);
      }

      setNotice(result.message);
      return result;
    },
    [],
  );

  const clearNotice = useCallback(() => {
    setNotice(null);
  }, []);

  const selectTask = useCallback((taskId: string) => {
    setSelectedTaskId(taskId);
  }, []);

  const updateTaskStatus = useCallback(
    (
      taskId: string,
      action: "confirm-task" | "start-task" | "complete-task",
    ) => {
      return applyMutation((current) =>
        applyGuideTaskStatusAction(current, taskId, action),
      );
    },
    [applyMutation],
  );

  const updatePassengerCheckIn = useCallback(
    (
      taskId: string,
      passengerId: string,
      status: "pending" | "checked-in" | "late" | "no-show",
    ) => {
      return applyMutation((current) =>
        applyPassengerCheckInStatus(current, taskId, passengerId, status),
      );
    },
    [applyMutation],
  );

  const updateCheckpoint = useCallback(
    (
      taskId: string,
      checkpointId: string,
      nextState: "upcoming" | "in-progress" | "done" | "blocked",
    ) => {
      return applyMutation((current) =>
        applyCheckpointStateUpdate(current, taskId, checkpointId, nextState),
      );
    },
    [applyMutation],
  );

  const sendGuideMessage = useCallback(
    (taskId: string, content: string) => {
      const guideName =
        authSession?.displayName?.trim() || stateRef.current.profile.fullName;

      return applyMutation((current) =>
        appendGuideTaskMessage(current, taskId, {
          senderRole: "guide",
          senderName: guideName,
          content,
        }),
      );
    },
    [applyMutation, authSession?.displayName],
  );

  const simulateCustomerMessage = useCallback(
    (taskId: string, customerName: string, content: string) => {
      return applyMutation((current) =>
        appendGuideTaskMessage(current, taskId, {
          senderRole: "customer",
          senderName: customerName,
          content,
          markUnreadForGuide: true,
        }),
      );
    },
    [applyMutation],
  );

  const markMessagesRead = useCallback(
    (taskId: string) => {
      return applyMutation((current) =>
        markTaskMessagesAsRead(current, taskId),
      );
    },
    [applyMutation],
  );

  const createIncident = useCallback(
    (taskId: string, draft: GuideIncidentDraft) => {
      return applyMutation((current) =>
        appendIncidentReport(current, taskId, draft),
      );
    },
    [applyMutation],
  );

  const closeIncident = useCallback(
    (taskId: string, incidentId: string, resolutionNote: string) => {
      return applyMutation((current) =>
        resolveIncidentReport(current, taskId, incidentId, resolutionNote),
      );
    },
    [applyMutation],
  );

  const latestLogs = useMemo(
    () => state.syncLogs.slice(0, 8),
    [state.syncLogs],
  );

  return {
    authSession,
    isGuideAuthorized,
    profile: state.profile,
    tasks: filteredTasks,
    selectedTask,
    selectedTaskId,
    searchQuery,
    taskFilter,
    filterTabs,
    metrics,
    notice,
    latestLogs,
    setSearchQuery,
    setTaskFilter,
    clearNotice,
    selectTask,
    updateTaskStatus,
    updatePassengerCheckIn,
    updateCheckpoint,
    sendGuideMessage,
    simulateCustomerMessage,
    markMessagesRead,
    createIncident,
    closeIncident,
  };
}
