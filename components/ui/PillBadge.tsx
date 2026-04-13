import React, { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type PillBadgeTone =
  | "primary"
  | "primary-soft"
  | "primary-fixed"
  | "primary-container"
  | "tertiary"
  | "tertiary-fixed"
  | "surface"
  | "surface-glass"
  | "success";
type PillBadgeSize = "xs" | "sm" | "md";
type PillBadgeRadius = "full" | "lg" | "md";

interface PillBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: PillBadgeTone;
  size?: PillBadgeSize;
  radius?: PillBadgeRadius;
  uppercase?: boolean;
}

const toneClasses: Record<PillBadgeTone, string> = {
  primary: "bg-primary text-white",
  "primary-soft": "bg-primary/10 text-primary",
  "primary-fixed": "bg-primary-fixed text-on-primary-fixed-variant",
  "primary-container": "bg-primary-container/20 text-on-secondary-container",
  tertiary: "bg-tertiary text-white",
  "tertiary-fixed": "bg-tertiary-fixed text-on-tertiary-fixed-variant",
  surface: "bg-surface-container text-on-surface",
  "surface-glass": "bg-white/90 backdrop-blur text-on-surface",
  success: "bg-green-100 text-green-700",
};

const sizeClasses: Record<PillBadgeSize, string> = {
  xs: "px-2 py-0.5 text-[10px] font-bold",
  sm: "px-3 py-1 text-xs font-bold",
  md: "px-4 py-1 text-sm font-bold",
};

const radiusClasses: Record<PillBadgeRadius, string> = {
  full: "rounded-full",
  lg: "rounded-lg",
  md: "rounded",
};

export default function PillBadge({
  tone = "surface",
  size = "sm",
  radius = "full",
  uppercase = false,
  className,
  children,
  ...props
}: PillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1",
        toneClasses[tone],
        sizeClasses[size],
        radiusClasses[radius],
        uppercase && "uppercase tracking-wider",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
