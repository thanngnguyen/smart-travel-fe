import React from "react";
import Icon from "./Icon";

interface StatTileProps {
  label: string;
  value: string;
  iconName?: string;
  note?: string;
  rightContent?: React.ReactNode;
  className?: string;
  labelClassName?: string;
  valueClassName?: string;
  iconWrapperClassName?: string;
}

export default function StatTile({
  label,
  value,
  iconName,
  note,
  rightContent,
  className = "",
  labelClassName = "",
  valueClassName = "",
  iconWrapperClassName = "",
}: StatTileProps) {
  return (
    <div
      className={`bg-surface-container-lowest p-6 rounded-3xl shadow-[0_20px_40px_rgba(25,28,30,0.04)] ${className}`}
    >
      <div className="flex items-start justify-between">
        {iconName ? (
          <div
            className={`p-3 rounded-xl bg-primary/10 text-primary ${iconWrapperClassName}`}
          >
            <Icon name={iconName} />
          </div>
        ) : (
          <span />
        )}
        {rightContent}
      </div>
      <div className="mt-4">
        <p
          className={`text-xs font-bold uppercase tracking-widest text-outline ${labelClassName}`}
        >
          {label}
        </p>
        <p
          className={`text-3xl font-black text-on-surface mt-1 ${valueClassName}`}
        >
          {value}
        </p>
        {note ? (
          <p className="text-sm font-medium text-on-surface-variant mt-1">
            {note}
          </p>
        ) : null}
      </div>
    </div>
  );
}
