import React, { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";
import Icon from "./Icon";

type IconButtonVariant = "outline" | "subtle" | "elevated" | "ghost";
type IconButtonSize = "sm" | "md" | "lg";
type IconButtonRadius = "full" | "xl";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  iconFilled?: boolean;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  radius?: IconButtonRadius;
  iconClassName?: string;
}

const variantClasses: Record<IconButtonVariant, string> = {
  outline:
    "border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container transition-colors",
  subtle:
    "bg-surface-container text-on-surface-variant hover:bg-surface-container-highest transition-colors",
  elevated:
    "bg-white text-on-surface hover:bg-slate-50 shadow-[0_20px_40px_rgba(25,28,30,0.06)] transition-colors",
  ghost: "text-on-surface-variant hover:text-primary transition-colors",
};

const sizeClasses: Record<IconButtonSize, string> = {
  sm: "p-2",
  md: "p-3",
  lg: "p-3.5",
};

const iconSizeClasses: Record<IconButtonSize, string> = {
  sm: "text-base",
  md: "text-lg",
  lg: "text-xl",
};

const radiusClasses: Record<IconButtonRadius, string> = {
  full: "rounded-full",
  xl: "rounded-xl",
};

export default function IconButton({
  icon,
  iconFilled = false,
  variant = "outline",
  size = "md",
  radius = "full",
  iconClassName,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        radiusClasses[radius],
        className,
      )}
      {...props}
    >
      <Icon
        name={icon}
        filled={iconFilled}
        className={cn(iconSizeClasses[size], iconClassName)}
      />
    </button>
  );
}
