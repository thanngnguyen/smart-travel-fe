"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AUTH_SESSION_STORAGE_KEY, loadAuthSession } from "@/lib/auth-session";
import {
  createTourChatAuditLogEntry,
  getAdminBroadcastTemplate,
  getChannelStateLabel,
  getDefaultTourChatGroups,
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
  TourChatParticipantRole,
} from "@/types/customer-tour-chat";
import { AuthRole, AuthSession } from "@/types/auth";

function resolveChatActorFromRole(role?: AuthRole | null) {
  if (role === "admin") {
    return "admin" as const;
  }

  if (role === "guide") {
    return "guide" as const;
  }

  if (role === "customer") {
    return "customer" as const;
  }

  return null;
}

function normalizeName(name: string) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function buildGuideAutoReply(
  guide: TourChatParticipant,
  incomingMessage: string,
  group: TourChatGroup,
): string {
  const normalizedText = incomingMessage.toLowerCase();

  if (
    normalizedText.includes("lịch") ||
    normalizedText.includes("timeline") ||
    normalizedText.includes("giờ")
  ) {
    const currentItem = group.itinerary.find(
      (item) => item.state === "current",
    );
    if (currentItem) {
      return `Mình đã cập nhật ngay. Hiện tại đoàn đang ở mốc ${currentItem.timeLabel} - ${currentItem.title}. Nếu có thay đổi mình sẽ ghim thông báo trong nhóm.`;
    }

    return "Mình đang xác nhận lại timeline thực tế với điều phối viên và sẽ cập nhật ngay trong nhóm sau vài phút.";
  }

  if (
    normalizedText.includes("ăn") ||
    normalizedText.includes("menu") ||
    normalizedText.includes("đồ uống")
  ) {
    return "Mình đã ghi nhận yêu cầu về đồ ăn/đồ uống. Trên tour luôn có lựa chọn phù hợp. Mình sẽ gửi menu chi tiết trong ít phút nữa.";
  }

  if (
    normalizedText.includes("đón") ||
    normalizedText.includes("pickup") ||
    normalizedText.includes("khách sạn")
  ) {
    return "Xe trung chuyển của đoàn đang on-time. Trước giờ đón 15 phút mình sẽ gửi vị trí realtime trong nhóm để mọi người tiện theo dõi.";
  }

  return `${guide.name} đã nhận thông tin. Mình sẽ kiểm tra với bộ phận điều phối và phản hồi chính xác nhất trong nhóm chat này.`;
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

function resolveActorParticipant(
  group: TourChatGroup,
  actor: TourChatParticipantRole | null,
  authSession: AuthSession | null,
) {
  if (!actor) {
    return null;
  }

  if (actor === "customer") {
    const matchedCurrentUser = group.participants.find(
      (participant) =>
        participant.role === "customer" && participant.isCurrentUser,
    );

    if (matchedCurrentUser) {
      return matchedCurrentUser;
    }

    if (authSession?.displayName) {
      const normalizedDisplayName = normalizeName(authSession.displayName);
      const matchedByName = group.participants.find(
        (participant) =>
          participant.role === "customer" &&
          normalizeName(participant.name) === normalizedDisplayName,
      );

      if (matchedByName) {
        return matchedByName;
      }
    }

    return (
      group.participants.find(
        (participant) => participant.role === "customer",
      ) ?? null
    );
  }

  return (
    group.participants.find((participant) => participant.role === actor) ?? null
  );
}

function canActorSendMessage(
  actor: TourChatParticipantRole | null,
  channelState: TourChatChannelState,
  actorParticipant: TourChatParticipant | null,
) {
  if (!actor || !actorParticipant) {
    return false;
  }

  if (actor === "customer" && !actorParticipant.isCurrentUser) {
    return false;
  }

  if (actor === "admin") {
    return true;
  }

  if (channelState === "locked") {
    return false;
  }

  return true;
}

function buildSendBlockedMessage(
  actor: TourChatParticipantRole | null,
  channelState: TourChatChannelState,
  actorParticipant: TourChatParticipant | null,
  authSession: AuthSession | null,
) {
  if (!authSession || !actor) {
    return "Vui lòng đăng nhập để truy cập và tương tác trong module chat tour.";
  }

  if (!actorParticipant) {
    return `Tài khoản ${authSession.displayName} hiện chưa thuộc nhóm chat của tour này.`;
  }

  if (actor === "customer" && !actorParticipant.isCurrentUser) {
    return "Chỉ khách hàng đã đặt tour mới có quyền gửi tin nhắn trong kênh này.";
  }

  if (channelState === "locked" && actor !== "admin") {
    return "Kênh chat đang bị khóa bởi admin, hiện chỉ admin có thể gửi tin nhắn.";
  }

  return null;
}

export function useCustomerTourChat(groupId?: string) {
  const router = useRouter();
  const timersRef = useRef<number[]>([]);
  const messageSequenceRef = useRef(1);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const [groups, setGroups] = useState<TourChatGroup[]>(() =>
    getDefaultTourChatGroups(),
  );
  const [draftMessage, setDraftMessage] = useState("");
  const [actionMessage, setActionMessage] = useState<string | null>(null);
  const [authSession, setAuthSession] = useState<AuthSession | null>(null);
  const [auditLogs, setAuditLogs] = useState<TourChatAuditLogEntry[]>(() => []);

  useEffect(() => {
    const bootstrapTimer = window.setTimeout(() => {
      const persistedGroups = loadTourChatGroups();
      setGroups(persistedGroups);
      setAuditLogs(loadTourChatAuditLogs());
      setAuthSession(loadAuthSession());
    }, 0);

    const handleStorage = (event: StorageEvent) => {
      if (!event.key || event.key === AUTH_SESSION_STORAGE_KEY) {
        setAuthSession(loadAuthSession());
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => {
      window.clearTimeout(bootstrapTimer);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timerId) => window.clearTimeout(timerId));
      timersRef.current = [];
    };
  }, []);

  const activeGroup = useMemo(() => {
    if (groups.length === 0) {
      return null;
    }

    if (!groupId) {
      return groups[0] ?? null;
    }

    return groups.find((group) => group.id === groupId) ?? groups[0] ?? null;
  }, [groupId, groups]);

  useEffect(() => {
    if (!groupId || groups.length === 0) {
      return;
    }

    const hasGroup = groups.some((group) => group.id === groupId);
    if (!hasGroup) {
      router.replace(`/tour-chat/${groups[0].id}`);
    }
  }, [groupId, groups, router]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeGroup?.id, activeGroup?.messages.length]);

  const activeActor = useMemo(() => {
    return resolveChatActorFromRole(authSession?.role);
  }, [authSession]);

  const activeActorParticipant = useMemo(() => {
    if (!activeGroup) {
      return null;
    }

    return resolveActorParticipant(activeGroup, activeActor, authSession);
  }, [activeActor, activeGroup, authSession]);

  const canSendMessage = useMemo(() => {
    if (!activeGroup) {
      return false;
    }

    if (!activeActorParticipant) {
      return false;
    }

    return canActorSendMessage(
      activeActor,
      activeGroup.channelState,
      activeActorParticipant,
    );
  }, [activeActor, activeActorParticipant, activeGroup]);

  useEffect(() => {
    const blockedReason = !activeGroup
      ? null
      : buildSendBlockedMessage(
          activeActor,
          activeGroup.channelState,
          activeActorParticipant,
          authSession,
        );

    const syncActionMessageTimer = window.setTimeout(() => {
      setActionMessage(blockedReason);
    }, 0);

    return () => {
      window.clearTimeout(syncActionMessageTimer);
    };
  }, [activeActor, activeActorParticipant, activeGroup, authSession]);

  const commitGroupsUpdate = (
    updater: (previous: TourChatGroup[]) => TourChatGroup[],
  ) => {
    setGroups((previous) => {
      const next = updater(previous);
      saveTourChatGroups(next);
      return next;
    });
  };

  const commitAuditEntry = (
    builder: (
      currentLogs: ReturnType<typeof loadTourChatAuditLogs>,
    ) => ReturnType<typeof loadTourChatAuditLogs>,
  ) => {
    setAuditLogs((previous) => {
      const next = builder(previous);
      saveTourChatAuditLogs(next);
      return next;
    });
  };

  const sendMessage = () => {
    const content = draftMessage.trim();
    if (!content || !activeGroup || !activeActorParticipant || !activeActor) {
      return;
    }

    if (
      !canActorSendMessage(
        activeActor,
        activeGroup.channelState,
        activeActorParticipant,
      )
    ) {
      setActionMessage(
        buildSendBlockedMessage(
          activeActor,
          activeGroup.channelState,
          activeActorParticipant,
          authSession,
        ),
      );
      return;
    }

    const nextSequence = messageSequenceRef.current;
    messageSequenceRef.current += 1;

    const outgoingMessage: TourChatMessage = {
      id: `${activeActor}-${Date.now().toString(36)}-${nextSequence}`,
      role: activeActor,
      senderId: activeActorParticipant.id,
      senderName: activeActorParticipant.name,
      sentAtLabel: new Date().toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      body: content,
      isReadByCurrentUser: true,
    };

    const targetGroupId = activeGroup.id;
    const guide =
      activeGroup.participants.find(
        (participant) => participant.role === "guide",
      ) ?? null;

    commitGroupsUpdate((previous) =>
      appendMessageToGroup(previous, targetGroupId, outgoingMessage),
    );

    setDraftMessage("");

    if (activeActor === "customer" && guide) {
      const replyTimer = window.setTimeout(() => {
        const guideReply: TourChatMessage = {
          id: `guide-${Date.now().toString(36)}-${messageSequenceRef.current}`,
          role: "guide",
          senderId: guide.id,
          senderName: guide.name,
          sentAtLabel: new Date().toLocaleTimeString("vi-VN", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          body: buildGuideAutoReply(guide, content, activeGroup),
        };

        messageSequenceRef.current += 1;

        commitGroupsUpdate((previous) =>
          appendMessageToGroup(previous, targetGroupId, guideReply),
        );
      }, 1200);

      timersRef.current.push(replyTimer);
    }
  };

  const updateChannelState = (state: TourChatChannelState) => {
    if (!activeGroup || activeActor !== "admin" || !activeActorParticipant) {
      return;
    }

    const previousState = activeGroup.channelState;

    const statusMessage: TourChatMessage = {
      id: `system-state-${Date.now().toString(36)}`,
      role: "system",
      senderName: "Hệ thống",
      sentAtLabel: new Date().toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      body: `${activeActorParticipant.name} đã cập nhật trạng thái kênh: ${getChannelStateLabel(state)}.`,
    };

    commitGroupsUpdate((previous) => {
      const withState = updateGroupChannelState(
        previous,
        activeGroup.id,
        state,
      );
      return appendMessageToGroup(withState, activeGroup.id, statusMessage);
    });

    const auditEntry = createTourChatAuditLogEntry({
      group: activeGroup,
      actor: activeActorParticipant,
      actionType: resolveStateAuditActionType(state),
      detail: `${activeActorParticipant.name} cap nhat trang thai kenh chat tu ${getChannelStateLabel(previousState)} sang ${getChannelStateLabel(state)}.`,
      fromState: previousState,
      toState: state,
    });

    commitAuditEntry((previous) => [auditEntry, ...previous]);
  };

  const sendAdminBroadcast = (type: TourChatAdminBroadcastType) => {
    if (!activeGroup || activeActor !== "admin" || !activeActorParticipant) {
      return;
    }

    const adminMessage: TourChatMessage = {
      id: `admin-broadcast-${Date.now().toString(36)}`,
      role: "admin",
      senderId: activeActorParticipant.id,
      senderName: activeActorParticipant.name,
      sentAtLabel: new Date().toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      body: getAdminBroadcastTemplate(type),
    };

    commitGroupsUpdate((previous) =>
      appendMessageToGroup(previous, activeGroup.id, adminMessage),
    );

    const auditEntry = createTourChatAuditLogEntry({
      group: activeGroup,
      actor: activeActorParticipant,
      actionType: resolveBroadcastAuditActionType(type),
      detail: `${activeActorParticipant.name} da gui thong bao dieu phoi cho kenh chat tour.`,
    });

    commitAuditEntry((previous) => [auditEntry, ...previous]);
  };

  return {
    groups,
    activeGroup,
    draftMessage,
    setDraftMessage,
    sendMessage,
    messagesEndRef,
    activeActor,
    authSession,
    activeActorParticipant,
    canSendMessage,
    actionMessage,
    updateChannelState,
    sendAdminBroadcast,
    auditLogs,
  };
}
