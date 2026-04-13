import React from "react";
import Icon from "./Icon";

interface SearchFieldProps {
  placeholder: string;
  className?: string;
  iconClassName?: string;
  inputClassName?: string;
}

export default function SearchField({
  placeholder,
  className = "",
  iconClassName = "",
  inputClassName = "",
}: SearchFieldProps) {
  return (
    <div className={`relative ${className}`}>
      <Icon
        name="search"
        className={`absolute left-4 top-1/2 -translate-y-1/2 text-outline ${iconClassName}`}
      />
      <input
        className={`w-full pl-12 pr-4 py-3 bg-surface-container-lowest border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none ${inputClassName}`}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
}
