"use client";

import AdminCard from "@/components/ui/AdminCard";
import type { CustomerFlashMessage } from "@/types/admin-customers";

interface CustomerFlashMessageBannerProps {
  message: CustomerFlashMessage;
  onClose: () => void;
}

function resolveFlashMessageClassName(tone: CustomerFlashMessage["tone"]) {
  switch (tone) {
    case "success":
      return "bg-green-100 text-green-800";
    case "error":
      return "bg-red-100 text-red-800";
    default:
      return "bg-primary/10 text-primary";
  }
}

export default function CustomerFlashMessageBanner({
  message,
  onClose,
}: CustomerFlashMessageBannerProps) {
  return (
    <AdminCard
      padding="sm"
      className={resolveFlashMessageClassName(message.tone)}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-bold">{message.text}</p>
        <button
          type="button"
          onClick={onClose}
          className="text-xs font-bold uppercase tracking-wider opacity-80 hover:opacity-100"
        >
          Đóng
        </button>
      </div>
    </AdminCard>
  );
}
