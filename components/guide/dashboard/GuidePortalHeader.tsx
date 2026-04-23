"use client";

import React from "react";
import Icon from "@/components/ui/Icon";
import SearchField from "@/components/ui/SearchField";

interface GuidePortalHeaderProps {
  guideName: string;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  unreadMessages: number;
}

export default function GuidePortalHeader({
  guideName,
  searchQuery,
  onSearchChange,
  unreadMessages,
}: GuidePortalHeaderProps) {
  const now = new Date();
  const greeting =
    now.getHours() < 12
      ? "Chào buổi sáng"
      : now.getHours() < 18
        ? "Chào buổi chiều"
        : "Chào buổi tối";

  return (
    <header className="h-20 px-8 flex items-center justify-between sticky top-0 z-10 bg-surface-container-low/80 backdrop-blur-xl">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-on-surface">
          {greeting}, {guideName}
        </h1>
        <p className="text-sm text-on-surface-variant font-medium">
          Quản lý nhịêm vụ dẫn tour của bạn tại đây.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <SearchField
          placeholder="Tìm nhịêm vụ, khách hàng..."
          value={searchQuery}
          onChange={onSearchChange}
          className="w-72"
          inputClassName="py-2 rounded-full bg-surface-container-lowest"
          iconClassName="text-xl"
        />
        <button
          type="button"
          className="relative p-2.5 text-on-surface-variant hover:bg-surface-container rounded-full cursor-pointer transition-colors"
        >
          <Icon name="notifications" />
          {unreadMessages > 0 && (
            <span className="absolute top-1.5 right-1.5 min-w-4 h-4 px-1 flex items-center justify-center bg-error text-white text-[9px] font-black rounded-full">
              {unreadMessages > 9 ? "9+" : unreadMessages}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
