"use client";

import { useEffect, useMemo, useState } from "react";
import { loadAuthSession } from "@/lib/auth-session";
import {
  createTourChatAuditLogEntry,
  getAdminBroadcastTemplate,
  getChannelStateLabel,
  loadTourChatAuditLogs,
  loadTourChatGroups,
  resolveBroadcastAuditActionType,
  resolveStateAuditActionType,
  saveTourChatAuditLogs,
  saveTourChatGroups,
} from "@/lib/customer-tour-chat";
import {
  TourChatAdminBroadcastType,
  TourChatAuditLogEntry,
  TourChatChannelState,
  TourChatGroup,
  TourChatMessage,
  TourChatParticipant,
} from "@/types/customer-tour-chat";

type ChannelStateFilter = "all" | TourChatChannelState;

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function appendMessageToGroup(
  groups: TourChatGroup[],
  groupId: string,
  message: TourChatMessage,
) {
  return groups.map((group) => {
    if (group.id !== groupId) {
      return group;
    }

    return {
      ...group,
      messages: [...group.messages, message],
    };
  });
}

function updateGroupChannelState(
  groups: TourChatGroup[],
  groupId: string,
  state: TourChatChannelState,
) {
  return groups.map((group) => {
    if (group.id !== groupId) {
      return group;
    }

    return {
      ...group,
      channelState: state,
      channelStateLabel: getChannelStateLabel(state),
    };
  });
}

function resolveActingAdmin(
  group: TourChatGroup,
  displayName: string,
): TourChatParticipant {
  const existingAdmin = group.participants.find(
    (participant) => participant.role === "admin",
  );

  if (existingAdmin) {
    return existingAdmin;
  }

  return {
    id: `admin-${group.id}`,
    name: displayName,
    role: "admin",
    avatarUrl: group.coverImageUrl,
    avatarAlt: "Avatar admin moderation",
    isOnline: true,
  };
}

export function useAdminChatManagement(initialTourId?: string) {
  const [groups, setGroups] = useState<TourChatGroup[]>(() => []);
  const [auditLogs, setAuditLogs] = useState<TourChatAuditLogEntry[]>(() => []);
  const [selectedTourId, setSelectedTourId] = useState<string>(
    initialTourId || "all",
  );
  const [selectedChannelState, setSelectedChannelState] =
    useState<ChannelStateFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGroupId, setSelectedGroupId] = useState<string>("");
  const [actionBanner, setActionBanner] = useState<string | null>(null);

  const authSession = useMemo(() => loadAuthSession(), []);

  const isAdminAuthorized = authSession?.role === "admin";
  const adminDisplayName = authSession?.displayName || "Admin van hanh";

  useEffect(() => {
    setGroups(loadTourChatGroups());
    setAuditLogs(loadTourChatAuditLogs());
  }, []);

  useEffect(() => {
    if (!actionBanner) {
      return;
    }

    const timerId = window.setTimeout(() => {
      setActionBanner(null);
    }, 2200);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [actionBanner]);

  const tourOptions = useMemo(() => {
    return [
      { value: "all", label: "Tất cả tour" },
      ...groups.map((group) => ({
        value: group.tourId,
        label: `${group.title} (${group.bookingCode})`,
      })),
    ];
  }, [groups]);

  const filteredGroups = useMemo(() => {
    const normalizedQuery = normalizeText(searchQuery);

    return groups.filter((group) => {
      const matchTour =
        selectedTourId === "all" || group.tourId === selectedTourId;
      const matchState =
        selectedChannelState === "all" ||
        group.channelState === selectedChannelState;

      const searchable = normalizeText(
        `${group.title} ${group.bookingCode} ${group.locationLabel}`,
      );
      const matchQuery =
        normalizedQuery.length === 0 || searchable.includes(normalizedQuery);

      return matchTour && matchState && matchQuery;
    });
  }, [groups, searchQuery, selectedChannelState, selectedTourId]);

  useEffect(() => {
    if (filteredGroups.length === 0) {
      setSelectedGroupId("");
      return;
    }

    const stillExists = filteredGroups.some(
      (group) => group.id === selectedGroupId,
    );
    if (stillExists) {
      return;
    }

    setSelectedGroupId(filteredGroups[0].id);
  }, [filteredGroups, selectedGroupId]);

  const selectedGroup = useMemo(() => {
    if (!selectedGroupId) {
      return filteredGroups[0] ?? null;
    }

    return (
      filteredGroups.find((group) => group.id === selectedGroupId) ??
      filteredGroups[0] ??
      null
    );
  }, [filteredGroups, selectedGroupId]);

  const moderationLogs = useMemo(() => {
    if (!selectedGroup) {
      return [] as TourChatMessage[];
    }

    return selectedGroup.messages
      .filter(
        (message) => message.role === "system" || message.role === "admin",
      )
      .slice()
      .reverse();
  }, [selectedGroup]);

  const filteredAuditLogs = useMemo(() => {
    return auditLogs.filter((entry) => {
      const matchTour =
        selectedTourId === "all" || entry.tourId === selectedTourId;

      if (!selectedGroup) {
        return matchTour;
      }

      return matchTour;
    });
  }, [auditLogs, selectedGroup, selectedTourId]);

  const persistGroups = (
    updater: (previous: TourChatGroup[]) => TourChatGroup[],
  ) => {
    setGroups((previous) => {
      const next = updater(previous);
      saveTourChatGroups(next);
      return next;
    });
  };

  const persistAudit = (
    updater: (previous: TourChatAuditLogEntry[]) => TourChatAuditLogEntry[],
  ) => {
    setAuditLogs((previous) => {
      const next = updater(previous);
      saveTourChatAuditLogs(next);
      return next;
    });
  };

  const updateChannelState = (state: TourChatChannelState) => {
    if (!isAdminAuthorized || !selectedGroup) {
      return;
    }

    const actingAdmin = resolveActingAdmin(selectedGroup, adminDisplayName);
    const previousState = selectedGroup.channelState;

    const stateMessage: TourChatMessage = {
      id: `system-state-${Date.now().toString(36)}`,
      role: "system",
      senderName: "Hệ thống",
      sentAtLabel: new Date().toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      body: `${actingAdmin.name} đã cập nhật trạng thái kênh: ${getChannelStateLabel(state)}.`,
    };

    persistGroups((previous) => {
      const withState = updateGroupChannelState(
        previous,
        selectedGroup.id,
        state,
      );
      return appendMessageToGroup(withState, selectedGroup.id, stateMessage);
    });

    const auditEntry = createTourChatAuditLogEntry({
      group: selectedGroup,
      actor: actingAdmin,
      actionType: resolveStateAuditActionType(state),
      detail: `${actingAdmin.name} cập nhật trạng thái kênh từ ${getChannelStateLabel(previousState)} sang ${getChannelStateLabel(state)}.`,
      fromState: previousState,
      toState: state,
    });

    persistAudit((previous) => [auditEntry, ...previous]);
    setActionBanner(
      `Đã cập nhật trạng thái kênh thành ${getChannelStateLabel(state)}.`,
    );
  };

  const sendBroadcast = (type: TourChatAdminBroadcastType) => {
    if (!isAdminAuthorized || !selectedGroup) {
      return;
    }

    const actingAdmin = resolveActingAdmin(selectedGroup, adminDisplayName);

    const message: TourChatMessage = {
      id: `admin-broadcast-${Date.now().toString(36)}`,
      role: "admin",
      senderId: actingAdmin.id,
      senderName: actingAdmin.name,
      sentAtLabel: new Date().toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      body: getAdminBroadcastTemplate(type),
    };

    persistGroups((previous) =>
      appendMessageToGroup(previous, selectedGroup.id, message),
    );

    const auditEntry = createTourChatAuditLogEntry({
      group: selectedGroup,
      actor: actingAdmin,
      actionType: resolveBroadcastAuditActionType(type),
      detail: `${actingAdmin.name} gửi broadcast loại ${type} cho kênh chat tour ${selectedGroup.bookingCode}.`,
    });

    persistAudit((previous) => [auditEntry, ...previous]);
    setActionBanner("Đã gửi thông báo điều phối vào kênh chat.");
  };

  return {
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
  };
}
