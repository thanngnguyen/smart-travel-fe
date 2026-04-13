import React, { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type SurfaceCardTone =
  | "white"
  | "surface"
  | "surface-high"
  | "surface-tint"
  | "tertiary";
type SurfaceCardBorder = "none" | "subtle" | "outline" | "soft";
type SurfaceCardShadow = "none" | "soft" | "elevated";
type SurfaceCardRadius = "xl" | "2xl" | "3xl";

interface SurfaceCardProps extends HTMLAttributes<HTMLDivElement> {
  tone?: SurfaceCardTone;
  border?: SurfaceCardBorder;
  shadow?: SurfaceCardShadow;
  radius?: SurfaceCardRadius;
}

const toneClasses: Record<SurfaceCardTone, string> = {
  white: "bg-white",
  surface: "bg-surface-container-lowest",
  "surface-high": "bg-surface-container-high",
  "surface-tint": "bg-surface-container-highest/20",
  tertiary: "bg-tertiary-container text-on-tertiary-container",
};

const borderClasses: Record<SurfaceCardBorder, string> = {
  none: "",
  subtle: "border border-slate-100",
  outline: "border border-outline-variant/20",
  soft: "border border-outline-variant/10",
};

const shadowClasses: Record<SurfaceCardShadow, string> = {
  none: "",
  soft: "shadow-[0_10px_30px_rgba(25,28,30,0.03)]",
  elevated: "shadow-[0_20px_40px_rgba(25,28,30,0.06)]",
};

const radiusClasses: Record<SurfaceCardRadius, string> = {
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
};

export default function SurfaceCard({
  tone = "white",
  border = "none",
  shadow = "none",
  radius = "3xl",
  className,
  children,
  ...props
}: SurfaceCardProps) {
  return (
    <div
      className={cn(
        toneClasses[tone],
        borderClasses[border],
        shadowClasses[shadow],
        radiusClasses[radius],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
