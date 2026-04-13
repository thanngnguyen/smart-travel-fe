import React from "react";

type StatusTone =
  | "success"
  | "warning"
  | "error"
  | "info"
  | "neutral"
  | "primary";

interface StatusBadgeProps {
  label: string;
  tone?: StatusTone;
  className?: string;
}

const toneClasses: Record<StatusTone, string> = {
  success: "bg-green-100 text-green-700",
  warning: "bg-amber-100 text-amber-700",
  error: "bg-red-100 text-red-700",
  info: "bg-blue-100 text-blue-700",
  neutral: "bg-surface-container-high text-on-surface-variant",
  primary: "bg-primary/10 text-primary",
};

export default function StatusBadge({
  label,
  tone = "neutral",
  className = "",
}: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${toneClasses[tone]} ${className}`}
    >
      {label}
    </span>
  );
}
