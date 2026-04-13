import React from "react";

interface AdminPageHeaderProps {
  title: string;
  description: string;
  actions?: React.ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
}

export default function AdminPageHeader({
  title,
  description,
  actions,
  titleClassName = "",
  descriptionClassName = "",
  className = "",
}: AdminPageHeaderProps) {
  return (
    <header className={`flex justify-between items-end ${className}`}>
      <div>
        <h2
          className={`text-3xl font-black tracking-tight text-on-surface ${titleClassName}`}
        >
          {title}
        </h2>
        <p
          className={`text-on-surface-variant font-medium mt-1 ${descriptionClassName}`}
        >
          {description}
        </p>
      </div>
      {actions ? <div className="flex gap-3">{actions}</div> : null}
    </header>
  );
}
