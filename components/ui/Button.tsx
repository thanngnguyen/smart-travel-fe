import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export default function Button({ 
  variant = "primary", 
  size = "md", 
  children, 
  className = "", 
  ...props 
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-150";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-container shadow-lg hover:scale-[0.98]",
    secondary: "bg-secondary text-white hover:bg-secondary-container",
    outline: "border-2 border-outline-variant/30 text-on-surface hover:bg-surface-container-low",
    white: "bg-white text-primary hover:bg-surface-bright",
    ghost: "text-primary hover:bg-primary/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-2.5 text-sm rounded-xl",
    lg: "px-8 py-3 text-base rounded-2xl",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
