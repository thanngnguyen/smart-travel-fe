"use client";

import Icon from "@/components/ui/Icon";
import Link from "next/link";
import Image from "next/image";
import { FormEvent, KeyboardEvent, RefObject } from "react";
import {
  TourChatChannelState,
  TourChatGroup,
  TourChatMessage,
  TourChatParticipant,
  TourChatParticipantRole,
} from "@/types/customer-tour-chat";
import { AuthSession } from "@/types/auth";
import { cn } from "@/utils/cn";

interface TourGroupChatWorkspaceProps {
  groups: TourChatGroup[];
  activeGroup: TourChatGroup | null;
  draftMessage: string;
  setDraftMessage: (value: string) => void;
  sendMessage: () => void;
  messagesEndRef: RefObject<HTMLDivElement | null>;
  activeActor: TourChatParticipantRole | null;
  authSession: AuthSession | null;
  activeActorParticipant: TourChatParticipant | null;
  canSendMessage: boolean;
  actionMessage: string | null;
}

function getRoleBadge(role: TourChatParticipantRole) {
  if (role === "guide") {
    return {
      label: "Hướng dẫn viên",
      className: "bg-primary-container text-on-primary-container",
    };
  }

  if (role === "admin") {
    return {
      label: "Admin",
      className: "bg-tertiary-container text-on-tertiary-container",
    };
  }

  return {
    label: "Khách hàng",
    className: "bg-secondary-fixed text-on-secondary-fixed",
  };
}

function getChannelStateClass(channelState: TourChatChannelState) {
  if (channelState === "locked") {
    return "bg-error-container text-on-error-container";
  }

  if (channelState === "admin-review") {
    return "bg-tertiary-fixed text-on-tertiary-fixed-variant";
  }

  return "bg-secondary-fixed text-on-secondary-fixed";
}

function buildConversationPreview(message: TourChatMessage | undefined) {
  if (!message) {
    return "Chưa có tin nhắn";
  }

  if (message.role === "system") {
    return message.body;
  }

  return `${message.senderName}: ${message.body}`;
}

function ConversationListItem({
  group,
  isActive,
}: {
  group: TourChatGroup;
  isActive: boolean;
}) {
  const guide = group.participants.find(
    (participant) => participant.role === "guide",
  );
  const lastMessage = group.messages[group.messages.length - 1];
  const passengerCount = group.participants.filter(
    (participant) => participant.role === "customer",
  ).length;

  return (
    <Link
      href={`/tour-chat/${group.id}`}
      className={cn(
        "group flex items-start gap-3 rounded-2xl p-3 transition-all",
        isActive
          ? "border border-primary/25 bg-surface-container-lowest shadow-sm"
          : "border border-transparent hover:bg-surface-container-highest/50",
      )}
    >
      <div className="relative shrink-0">
        <Image
          src={group.coverImageUrl}
          alt={group.coverImageAlt}
          width={48}
          height={48}
          className="h-12 w-12 rounded-xl object-cover"
        />
        {guide?.isOnline ? (
          <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-surface-container-lowest bg-green-500" />
        ) : null}
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-0.5 flex items-center justify-between gap-2">
          <h3 className="truncate text-sm font-bold text-on-surface">
            {group.title}
          </h3>
          <span className="text-[11px] font-medium text-outline">
            {lastMessage?.sentAtLabel ?? "--:--"}
          </span>
        </div>

        <p className="truncate text-xs text-on-surface-variant">
          {buildConversationPreview(lastMessage)}
        </p>

        <div className="mt-1 flex items-center gap-1.5">
          <p className="text-[11px] font-semibold text-outline">
            {passengerCount} khách • {guide ? guide.name : "Đang gán guide"}
          </p>
          <span
            className={cn(
              "rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide",
              getChannelStateClass(group.channelState),
            )}
          >
            {group.channelState === "open"
              ? "Mở"
              : group.channelState === "locked"
                ? "Khóa"
                : "Kiểm duyệt"}
          </span>
        </div>
      </div>
    </Link>
  );
}

function MessageBubble({
  message,
  activeGroup,
  activeActorParticipant,
}: {
  message: TourChatMessage;
  activeGroup: TourChatGroup;
  activeActorParticipant: TourChatParticipant | null;
}) {
  if (message.role === "system") {
    return (
      <div className="flex justify-center">
        <div className="inline-flex max-w-2xl items-center gap-2 rounded-2xl border border-tertiary-fixed-dim/30 bg-tertiary-fixed/35 px-4 py-2 text-center">
          <Icon name="info" className="text-sm text-tertiary" />
          <p className="text-xs font-medium text-on-tertiary-fixed-variant md:text-sm">
            {message.body}
          </p>
        </div>
      </div>
    );
  }

  const sender = message.senderId
    ? activeGroup.participants.find(
        (participant) => participant.id === message.senderId,
      )
    : null;

  const senderName = sender?.name ?? message.senderName;
  const senderAvatarUrl = sender?.avatarUrl ?? activeGroup.coverImageUrl;
  const senderAvatarAlt = sender?.avatarAlt ?? senderName;
  const senderRole = sender?.role ?? message.role;
  const senderRoleBadge = getRoleBadge(senderRole);

  const isOutgoing =
    Boolean(activeActorParticipant?.id) &&
    activeActorParticipant?.id === message.senderId;

  if (isOutgoing) {
    return (
      <div className="ml-auto flex max-w-[88%] justify-end gap-4">
        <div className="flex flex-col items-end">
          <div className="mb-1 flex items-baseline gap-2">
            <span className="text-xs text-outline">{message.sentAtLabel}</span>
            <span className="text-sm font-semibold text-on-surface">
              {senderName}
            </span>
          </div>

          <div
            className={cn(
              "inline-block rounded-2xl rounded-tr-sm p-4 text-white shadow-[0_8px_20px_rgba(0,61,155,0.2)]",
              senderRole === "admin"
                ? "bg-gradient-to-br from-tertiary to-tertiary-container"
                : "bg-gradient-to-br from-primary to-primary-container",
            )}
          >
            <p className="text-sm leading-relaxed">{message.body}</p>
          </div>

          {message.isReadByCurrentUser ? (
            <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-medium text-outline">
              Đã xem
              <Icon name="done_all" className="text-[13px] text-secondary" />
            </span>
          ) : null}
        </div>

        <Image
          src={senderAvatarUrl}
          alt={senderAvatarAlt}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="flex max-w-[88%] gap-4">
      <Image
        src={senderAvatarUrl}
        alt={senderAvatarAlt}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover"
      />

      <div>
        <div className="mb-1 flex items-baseline gap-2">
          <span className="text-sm font-semibold text-on-surface">
            {senderName}
          </span>
          <span
            className={cn(
              "rounded px-1.5 py-[2px] text-[10px] font-bold uppercase tracking-wider",
              senderRoleBadge.className,
            )}
          >
            {senderRoleBadge.label}
          </span>
          <span className="text-xs text-outline">{message.sentAtLabel}</span>
        </div>

        <div className="inline-block rounded-2xl rounded-tl-sm border border-outline-variant/10 bg-surface-container-lowest p-4 shadow-[0_2px_8px_rgba(25,28,30,0.05)]">
          <p className="text-sm leading-relaxed text-on-surface">
            {message.body}
          </p>

          {message.card ? (
            <div className="group mt-3 flex cursor-pointer items-center gap-3 rounded-xl border border-outline-variant/20 bg-surface-container-low p-3 transition-colors hover:bg-surface-container-highest">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-lowest shadow-sm">
                <Icon
                  name={message.card.iconName}
                  className="text-primary transition-transform group-hover:scale-110"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-on-surface">
                  {message.card.title}
                </p>
                <p className="text-xs text-on-surface-variant">
                  {message.card.description}
                </p>
              </div>
              <span className="text-xs font-semibold text-primary">
                {message.card.ctaLabel}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function TourGroupChatWorkspace({
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
}: TourGroupChatWorkspaceProps) {
  if (!activeGroup) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface px-6 text-center">
        <div className="max-w-md rounded-3xl border border-outline-variant/20 bg-surface-container-lowest p-10 shadow-sm">
          <h1 className="mb-3 text-2xl font-black text-on-surface">
            Chưa tìm thấy nhóm chat
          </h1>
          <p className="mb-6 text-sm text-on-surface-variant">
            Nhóm chat tour của bạn đang được khởi tạo. Vui lòng quay lại sau vài
            giây.
          </p>
          <Link
            href="/profile"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white"
          >
            <Icon name="arrow_back" className="text-base" />
            Về trang hồ sơ
          </Link>
        </div>
      </div>
    );
  }

  const guide =
    activeGroup.participants.find(
      (participant) => participant.role === "guide",
    ) ?? null;
  const passengerCount = activeGroup.participants.filter(
    (participant) => participant.role === "customer",
  ).length;

  const submitMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage();
  };

  const handleComposerKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const composerPlaceholder =
    activeActor === "admin"
      ? "Gửi thông báo điều phối hoặc hướng dẫn kiểm duyệt..."
      : activeActor === "guide"
        ? "Trả lời thắc mắc của khách hàng trong tour..."
        : !activeActor
          ? "Đăng nhập để gửi tin nhắn trong kênh chat tour..."
          : "Nhập tin nhắn cho nhóm...";

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-surface">
      <header className="sticky top-0 z-50 border-b border-outline-variant/20 bg-surface-container-lowest/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-6 py-3">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-xl font-extrabold tracking-tight text-blue-700"
            >
              STMS Concierge
            </Link>

            <nav className="hidden items-center gap-2 md:flex">
              <Link
                href="/"
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-blue-600"
              >
                Dashboard
              </Link>
              <Link
                href="/tours"
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-blue-600"
              >
                Trips
              </Link>
              <Link
                href="/tour-chat"
                className="rounded-t-lg border-b-2 border-blue-700 px-3 py-2 text-sm font-bold text-blue-700"
              >
                Messages
              </Link>
              <Link
                href="/guide-portal"
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-blue-600"
              >
                Guides
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-outline-variant/20 bg-surface px-3 py-1.5 md:flex">
              <Icon name="search" className="text-outline" />
              <input
                type="text"
                className="w-44 bg-transparent text-sm text-on-surface outline-none placeholder:text-outline/70"
                placeholder="Tìm tin nhắn..."
              />
            </div>

            {activeActorParticipant ? (
              <Image
                src={activeActorParticipant.avatarUrl}
                alt={activeActorParticipant.avatarAlt}
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-cover ring-2 ring-surface-container"
              />
            ) : null}

            <div className="hidden rounded-full border border-outline-variant/30 bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-on-surface-variant md:block">
              {activeActor === "admin"
                ? "Admin"
                : activeActor === "guide"
                  ? "Guide"
                  : activeActor === "customer"
                    ? "Customer"
                    : "Chua dang nhap"}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex h-[calc(100vh-73px)] w-full max-w-[1440px] overflow-hidden">
        <aside className="hidden h-full w-72 shrink-0 flex-col overflow-y-auto border-r border-outline-variant/15 bg-surface-container-low lg:flex">
          <div className="sticky top-0 z-10 flex items-center justify-between bg-surface-container-high px-4 py-4">
            <h2 className="text-lg font-bold text-on-surface">Tin Nhắn</h2>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
            >
              <Icon name="edit_square" className="text-sm" filled />
            </button>
          </div>

          <div className="space-y-2 p-2">
            {groups.map((group) => (
              <ConversationListItem
                key={group.id}
                group={group}
                isActive={group.id === activeGroup.id}
              />
            ))}
          </div>
        </aside>

        <section className="relative flex min-w-0 flex-1 flex-col bg-surface">
          <div className="border-b border-outline-variant/12 bg-surface-container-lowest/75 px-6 py-3 backdrop-blur-md">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-4">
                <Link
                  href="/profile"
                  className="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container-low lg:hidden"
                >
                  <Icon name="arrow_back" />
                </Link>

                <div>
                  <h2 className="flex items-center gap-2 text-lg font-bold text-on-surface">
                    {activeGroup.title}
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide",
                        activeGroup.status === "active"
                          ? "bg-secondary-fixed text-on-secondary-fixed"
                          : "bg-primary-fixed text-on-primary-fixed-variant",
                      )}
                    >
                      {activeGroup.statusLabel}
                    </span>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide",
                        getChannelStateClass(activeGroup.channelState),
                      )}
                    >
                      {activeGroup.channelStateLabel}
                    </span>
                  </h2>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-on-surface-variant">
                    <Icon name="group" className="text-[14px]" />
                    {passengerCount} hành khách, {guide ? "1" : "0"} hướng dẫn
                    viên
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container-highest xl:hidden"
                title="Thông tin tour"
              >
                <Icon name="info" />
              </button>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-outline-variant/40 bg-surface px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                Tai khoan: {authSession?.displayName ?? "Khach"}
              </span>
              <span className="rounded-full border border-outline-variant/40 bg-surface px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                Quyen: {activeActor ?? "Khong xac dinh"}
              </span>
              {activeActor === "admin" ? (
                <Link
                  href={`/admin/chat?tourId=${activeGroup.tourId}`}
                  className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary/15"
                >
                  Mo trang quan tri chat
                </Link>
              ) : null}
            </div>
          </div>

          <div className="chat-scroll flex-1 space-y-6 overflow-y-auto bg-surface px-6 py-6">
            <div className="flex justify-center">
              <span className="rounded-full bg-surface-container-low px-4 py-1 text-xs font-medium text-on-surface-variant">
                Hôm nay
              </span>
            </div>

            {activeGroup.messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
                activeGroup={activeGroup}
                activeActorParticipant={activeActorParticipant}
              />
            ))}

            <div ref={messagesEndRef} />
          </div>

          <div className="z-10 border-t border-outline-variant/15 bg-surface-container-lowest p-4 shadow-[0_-4px_20px_rgba(25,28,30,0.03)]">
            <form
              onSubmit={submitMessage}
              className="mx-auto flex max-w-4xl items-end gap-3 rounded-3xl border border-outline-variant/20 bg-surface p-2 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50"
            >
              <div className="flex gap-1 pb-1">
                <button
                  type="button"
                  className="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container-highest"
                  title="Đính kèm"
                >
                  <Icon name="attach_file" />
                </button>
                <button
                  type="button"
                  className="hidden rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container-highest sm:block"
                  title="Gửi ảnh"
                >
                  <Icon name="image" />
                </button>
              </div>

              <textarea
                rows={1}
                value={draftMessage}
                onChange={(event) => setDraftMessage(event.target.value)}
                onKeyDown={handleComposerKeyDown}
                placeholder={composerPlaceholder}
                disabled={!canSendMessage}
                className="max-h-32 flex-1 resize-none bg-transparent px-2 py-3 text-sm text-on-surface outline-none placeholder:text-outline/60 disabled:cursor-not-allowed disabled:opacity-50"
              />

              <button
                type="submit"
                disabled={!draftMessage.trim() || !canSendMessage}
                className="mb-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-container text-white shadow-[0_4px_12px_rgba(0,61,155,0.2)] transition-all hover:shadow-[0_6px_16px_rgba(0,61,155,0.3)] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Icon name="send" className="text-sm" filled />
              </button>
            </form>

            {actionMessage ? (
              <p className="mx-auto mt-2 max-w-4xl text-xs font-medium text-on-surface-variant">
                {actionMessage}
              </p>
            ) : null}
          </div>
        </section>

        <aside className="hidden w-80 flex-shrink-0 flex-col overflow-y-auto border-l border-outline-variant/15 bg-surface-container-lowest shadow-[-4px_0_24px_rgba(25,28,30,0.02)] xl:flex">
          <div className="relative h-52 overflow-hidden">
            <Image
              src={activeGroup.coverImageUrl}
              alt={activeGroup.coverImageAlt}
              fill
              className="object-cover"
              sizes="320px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/40 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="mb-2 inline-block rounded bg-black/30 px-2 py-1 text-[10px] font-bold uppercase tracking-wider">
                {activeGroup.typeLabel}
              </span>
              <h3 className="text-lg font-bold leading-tight">
                {activeGroup.title}
              </h3>
              <p className="mt-1 text-xs text-surface-dim">
                Mã booking: #{activeGroup.bookingCode}
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-6 p-5">
            {activeActor === "admin" ? (
              <div className="space-y-2 rounded-2xl border border-primary/30 bg-primary/5 p-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
                  Quan tri kenh chat
                </h4>
                <p className="text-xs text-on-surface-variant">
                  Thao tac moderation da duoc tach sang trang van hanh de theo
                  doi audit day du.
                </p>
                <Link
                  href={`/admin/chat?tourId=${activeGroup.tourId}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-bold uppercase tracking-wide text-white"
                >
                  <Icon name="open_in_new" className="text-sm" />
                  Di den admin chat management
                </Link>
              </div>
            ) : null}

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-surface-container-low p-3 text-center">
                <Icon name="schedule" className="mb-1 text-primary" />
                <p className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
                  Thời lượng
                </p>
                <p className="text-sm font-semibold text-on-surface">
                  {activeGroup.durationLabel}
                </p>
              </div>

              <div className="rounded-2xl bg-surface-container-low p-3 text-center">
                <Icon name="directions_boat" className="mb-1 text-primary" />
                <p className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
                  Phương tiện
                </p>
                <p className="text-sm font-semibold text-on-surface">
                  {activeGroup.vehicleLabel}
                </p>
              </div>
            </div>

            {guide ? (
              <div>
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-outline">
                  Hướng dẫn viên của tour
                </h4>
                <div className="flex items-center gap-4 rounded-2xl bg-surface-container-low p-4">
                  <div className="relative">
                    <Image
                      src={guide.avatarUrl}
                      alt={guide.avatarAlt}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    {guide.isOnline ? (
                      <span className="absolute -bottom-1 -right-1 rounded-full bg-surface-container-lowest p-0.5">
                        <Icon
                          name="verified"
                          className="text-sm text-green-600"
                          filled
                        />
                      </span>
                    ) : null}
                  </div>

                  <div className="flex-1">
                    <p className="font-bold text-on-surface">{guide.name}</p>
                    {guide.ratingLabel ? (
                      <p className="text-xs text-on-surface-variant">
                        {guide.ratingLabel}
                      </p>
                    ) : null}
                    <p className="mt-1 text-[11px] font-semibold text-primary">
                      {activeGroup.locationLabel}
                    </p>
                  </div>
                </div>
              </div>
            ) : null}

            <div>
              <div className="mb-4 flex items-end justify-between">
                <h4 className="text-sm font-bold uppercase tracking-wider text-outline">
                  Lịch trình hôm nay
                </h4>
                <span className="text-xs font-semibold text-primary">
                  Xem tất cả
                </span>
              </div>

              <div className="relative space-y-6 pl-4">
                <div className="absolute bottom-2 left-[7px] top-2 w-1 rounded-full bg-surface-variant" />

                {activeGroup.itinerary.map((item) => (
                  <div key={item.id} className="relative">
                    <span
                      className={cn(
                        "absolute -left-[17px] top-1 h-3 w-3 rounded-full ring-4 ring-surface-container-lowest",
                        item.state === "done" && "bg-primary",
                        item.state === "current" &&
                          "-left-[19px] h-4 w-4 animate-pulse bg-primary",
                        item.state === "upcoming" && "bg-surface-variant",
                      )}
                    />
                    <div
                      className={cn(
                        "flex items-start gap-3",
                        item.state === "current" &&
                          "-mx-3 -mt-2 rounded-xl border border-primary/10 bg-primary/5 p-3",
                        item.state === "done" && "opacity-65",
                      )}
                    >
                      <span
                        className={cn(
                          "w-11 shrink-0 text-xs font-bold",
                          item.state === "current"
                            ? "text-primary"
                            : "text-on-surface-variant",
                        )}
                      >
                        {item.timeLabel}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-on-surface">
                          {item.title}
                        </p>
                        <p className="text-[11px] text-on-surface-variant">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-outline">
                Tài liệu chuyến đi
              </h4>
              <div className="space-y-2">
                {activeGroup.documents.map((document) => (
                  <button
                    key={document.id}
                    type="button"
                    className="flex w-full items-center gap-3 rounded-lg p-2 text-left transition-colors hover:bg-surface-container-low"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-error-container text-on-error-container">
                      <Icon name={document.iconName} className="text-sm" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-on-surface">
                        {document.fileName}
                      </span>
                      <span className="text-[10px] text-outline">
                        {document.fileSizeLabel}
                      </span>
                    </span>
                    <Icon name="download" className="text-outline" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
