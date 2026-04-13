import React, { ButtonHTMLAttributes } from "react";

type AdminButtonVariant =
  | "gradient"
  | "surface"
  | "surfaceMuted"
  | "solid"
  | "white"
  | "icon";

type AdminButtonSize = "sm" | "md" | "lg" | "icon";

interface AdminButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: AdminButtonVariant;
  size?: AdminButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<AdminButtonVariant, string> = {
  gradient:
    "bg-linear-to-r from-primary to-primary-container text-white shadow-lg",
  surface:
    "bg-surface-container-lowest text-on-surface border border-outline-variant/20 shadow-sm hover:bg-surface-container-low",
  surfaceMuted:
    "bg-surface-container-lowest text-on-surface border border-outline-variant/10 shadow-sm hover:bg-surface-container-low",
  solid: "bg-primary text-white shadow-lg shadow-primary/20",
  white: "bg-white text-primary shadow-md hover:bg-slate-50",
  icon: "bg-surface-container text-slate-600 hover:bg-surface-container-high",
};

const sizeClasses: Record<AdminButtonSize, string> = {
  sm: "px-4 py-2 rounded-xl text-sm",
  md: "px-5 py-2.5 rounded-xl text-sm",
  lg: "px-6 py-3 rounded-xl text-sm",
  icon: "w-10 h-10 rounded-lg",
};

export default function AdminButton({
  variant = "surface",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...props
}: AdminButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-bold transition-all ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
