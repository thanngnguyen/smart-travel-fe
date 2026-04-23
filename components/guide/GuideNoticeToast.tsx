"use client";

import React, { useEffect } from "react";
import Icon from "@/components/ui/Icon";

interface GuideNoticeToastProps {
  message: string | null;
  onDismiss: () => void;
}

export default function GuideNoticeToast({
  message,
  onDismiss,
}: GuideNoticeToastProps) {
  useEffect(() => {
    if (!message) return;

    const timer = window.setTimeout(() => {
      onDismiss();
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [message, onDismiss]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-[fadeIn_0.3s_ease-out]">
      <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-inverse-surface text-inverse-on-surface shadow-[0_20px_40px_rgba(25,28,30,0.2)] max-w-md">
        <Icon name="check_circle" className="text-lg text-inverse-primary shrink-0" filled />
        <p className="text-sm font-medium flex-1">{message}</p>
        <button
          type="button"
          onClick={onDismiss}
          className="p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer shrink-0"
        >
          <Icon name="close" className="text-sm" />
        </button>
      </div>
    </div>
  );
}
