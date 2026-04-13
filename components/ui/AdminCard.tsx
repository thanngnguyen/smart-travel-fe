import React, { HTMLAttributes } from "react";

type AdminCardPadding = "none" | "sm" | "md";
type AdminCardShadow = "none" | "sm" | "elevated";
type AdminCardRadius = "2xl" | "3xl";

interface AdminCardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: AdminCardPadding;
  shadow?: AdminCardShadow;
  radius?: AdminCardRadius;
  className?: string;
  children: React.ReactNode;
}

const paddingClasses: Record<AdminCardPadding, string> = {
  none: "p-0",
  sm: "p-6",
  md: "p-8",
};

const shadowClasses: Record<AdminCardShadow, string> = {
  none: "",
  sm: "shadow-sm",
  elevated: "shadow-[0_20px_40px_rgba(25,28,30,0.06)]",
};

const radiusClasses: Record<AdminCardRadius, string> = {
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
};

export default function AdminCard({
  padding = "md",
  shadow = "elevated",
  radius = "2xl",
  className = "",
  children,
  ...props
}: AdminCardProps) {
  return (
    <div
      className={`bg-surface-container-lowest ${paddingClasses[padding]} ${shadowClasses[shadow]} ${radiusClasses[radius]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
