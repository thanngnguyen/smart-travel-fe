
import React, { ReactNode, ButtonHTMLAttributes, HTMLAttributes } from "react";

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, BaseProps {
  variant?: "primary" | "secondary" | "ghost" | "glass" | "danger" | "outline" | "white";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
}

export interface CardProps extends HTMLAttributes<HTMLDivElement>, BaseProps {
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  interactive?: boolean;
  glass?: boolean;
  elevated?: boolean;
}

export interface TypographyProps extends HTMLAttributes<HTMLElement>, BaseProps {
  variant?: "display-lg" | "display-sm" | "display-md" | "headline-lg" | "headline-md" | "headline-sm" | "body-lg" | "body-sm" | "label-sm";
  align?: "left" | "center" | "right" | "justify";
  color?: "default" | "muted" | "primary" | "error" | "white" | "tertiary";
  as?: React.ElementType;
}

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, BaseProps {
  variant?: "solid" | "glass" | "soft" | "outline";
  color?: "primary" | "secondary" | "success" | "error" | "warning" | "default";
}
