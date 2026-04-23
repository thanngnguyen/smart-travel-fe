"use client";

import React, { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import { GuideMessageRole, GuideTaskMessage } from "@/types/guide-portal";

interface GuideChatPanelProps {
  chatThread: GuideTaskMessage[];
  taskId: string;
  onSendMessage: (taskId: string, content: string) => void;
  onMarkRead: (taskId: string) => void;
}

const ROLE_CONFIG: Record<
  GuideMessageRole,
  { label: string; bgClass: string; textClass: string; align: "left" | "right" }
> = {
  system: {
    label: "Hệ thống",
    bgClass: "bg-surface-container-high/60",
    textClass: "text-on-surface-variant",
    align: "left",
  },
  admin: {
    label: "Điều phối",
    bgClass: "bg-secondary-fixed/40",
    textClass: "text-on-secondary-fixed-variant",
    align: "left",
  },
  customer: {
    label: "Khách hàng",
    bgClass: "bg-tertiary-fixed/30",
    textClass: "text-on-tertiary-fixed-variant",
    align: "left",
  },
  guide: {
    label: "Bạn",
    bgClass: "bg-gradient-to-br from-primary to-primary-container",
    textClass: "text-white",
    align: "right",
  },
};

function formatTime(iso: string) {
  const d = new Date(iso);
  return d.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function groupMessagesByDate(messages: GuideTaskMessage[]) {
  const groups: { date: string; messages: GuideTaskMessage[] }[] = [];

  for (const msg of messages) {
    const date = formatDate(msg.sentAtIso);
    const lastGroup = groups[groups.length - 1];

    if (lastGroup && lastGroup.date === date) {
      lastGroup.messages.push(msg);
    } else {
      groups.push({ date, messages: [msg] });
    }
  }

  return groups;
}

export default function GuideChatPanel({
  chatThread,
  taskId,
  onSendMessage,
  onMarkRead,
}: GuideChatPanelProps) {
  const [draft, setDraft] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const unread = chatThread.filter((m) => m.isUnreadByGuide).length;

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatThread.length]);

  const handleSend = () => {
    const content = draft.trim();
    if (!content) return;
    onSendMessage(taskId, content);
    setDraft("");
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const dateGroups = groupMessagesByDate(chatThread);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 shrink-0">
        <div className="flex items-center gap-2">
          <Icon name="forum" className="text-primary" />
          <h3 className="text-sm font-bold text-on-surface">
            Phòng chat tour
          </h3>
          {unread > 0 && (
            <span className="min-w-5 h-5 px-1.5 flex items-center justify-center rounded-full bg-error text-white text-[10px] font-black">
              {unread}
            </span>
          )}
        </div>
        {unread > 0 && (
          <button
            type="button"
            onClick={() => onMarkRead(taskId)}
            className="text-[11px] font-bold text-primary hover:text-primary-container transition-colors cursor-pointer flex items-center gap-1"
          >
            <Icon name="done_all" className="text-sm" />
            Đánh dấu đã đọc
          </button>
        )}
      </div>

      {/* Messages area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto space-y-1 pr-1 -mr-1 min-h-0 max-h-[360px]"
      >
        {chatThread.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="p-3 rounded-2xl bg-surface-container-low mb-3">
              <Icon name="chat" className="text-2xl text-outline" />
            </div>
            <p className="text-sm font-bold text-on-surface-variant">
              Chưa có tin nhắn
            </p>
            <p className="text-xs text-outline mt-1">
              Gửi tin nhắn đầu tiên để bắt đầu trao đổi.
            </p>
          </div>
        ) : (
          dateGroups.map((group) => (
            <div key={group.date}>
              {/* Date separator */}
              <div className="flex items-center gap-3 my-3">
                <div className="flex-1 h-px bg-outline-variant/15" />
                <span className="text-[10px] font-bold text-outline uppercase tracking-wider">
                  {group.date}
                </span>
                <div className="flex-1 h-px bg-outline-variant/15" />
              </div>

              {/* Messages */}
              <div className="space-y-2">
                {group.messages.map((msg) => {
                  const cfg = ROLE_CONFIG[msg.senderRole];
                  const isGuide = msg.senderRole === "guide";

                  return (
                    <div
                      key={msg.id}
                      className={`flex ${isGuide ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${cfg.bgClass} ${
                          msg.isUnreadByGuide
                            ? "ring-2 ring-primary/20"
                            : ""
                        }`}
                      >
                        {!isGuide && (
                          <p className="text-[10px] font-bold uppercase tracking-wider opacity-70 mb-0.5">
                            {msg.senderName} · {cfg.label}
                          </p>
                        )}
                        <p className={`text-sm font-medium ${cfg.textClass} leading-relaxed`}>
                          {msg.content}
                        </p>
                        <p
                          className={`text-[10px] mt-1 ${
                            isGuide ? "text-white/60" : "text-outline"
                          } text-right`}
                        >
                          {formatTime(msg.sentAtIso)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input area */}
      <div className="mt-4 shrink-0 flex items-center gap-2 bg-surface-container-lowest rounded-2xl p-1.5 shadow-[0_4px_16px_rgba(25,28,30,0.04)]">
        <input
          ref={inputRef}
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Nhập tin nhắn..."
          className="flex-1 bg-transparent border-none outline-none px-3 py-2 text-sm font-medium text-on-surface placeholder:text-outline"
        />
        <button
          type="button"
          onClick={handleSend}
          disabled={!draft.trim()}
          className="p-2.5 rounded-xl bg-gradient-to-r from-primary to-primary-container text-white transition-all hover:shadow-lg hover:shadow-primary/20 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
        >
          <Icon name="send" className="text-lg" />
        </button>
      </div>
    </div>
  );
}
