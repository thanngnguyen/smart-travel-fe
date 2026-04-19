"use client";

import TourGroupChatWorkspace from "@/components/customer/tour-chat/TourGroupChatWorkspace";
import { useCustomerTourChat } from "@/hooks/useCustomerTourChat";
import { useParams } from "next/navigation";

export default function TourChatGroupPage() {
  const params = useParams<{ groupId: string | string[] }>();
  const groupId = Array.isArray(params?.groupId)
    ? params.groupId[0]
    : params?.groupId;

  const {
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
  } = useCustomerTourChat(groupId);

  return (
    <TourGroupChatWorkspace
      groups={groups}
      activeGroup={activeGroup}
      draftMessage={draftMessage}
      setDraftMessage={setDraftMessage}
      sendMessage={sendMessage}
      messagesEndRef={messagesEndRef}
      activeActor={activeActor}
      authSession={authSession}
      activeActorParticipant={activeActorParticipant}
      canSendMessage={canSendMessage}
      actionMessage={actionMessage}
    />
  );
}
