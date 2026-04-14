"use client";

import {
  KeyboardEvent,
  SelectHTMLAttributes,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import Icon from "@/components/ui/Icon";
import { cn } from "@/utils/cn";

export interface UiSelectOption {
  value: string;
  label: string;
  iconName?: string;
  disabled?: boolean;
  hidden?: boolean;
}

type UiSelectVariant = "surface" | "ghost";
type UiSelectSize = "sm" | "md" | "lg";
type UiSelectDropdownPlacement = "auto" | "bottom" | "top";

interface UiSelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "size"
> {
  options: UiSelectOption[];
  containerClassName?: string;
  variant?: UiSelectVariant;
  size?: UiSelectSize;
  iconName?: string;
  dropdownPlacement?: UiSelectDropdownPlacement;
}

const variantClasses: Record<UiSelectVariant, string> = {
  surface:
    "bg-surface-container-lowest border border-outline-variant/30 shadow-sm focus:border-primary/40 focus:ring-2 focus:ring-primary/20",
  ghost: "bg-transparent border-none focus:ring-0 focus:border-transparent",
};

const sizeClasses: Record<UiSelectSize, string> = {
  sm: "py-2.5 pl-4 pr-10 text-sm",
  md: "py-3 pl-4 pr-10 text-sm",
  lg: "py-3 pl-6 pr-15 text-base",
};

function normalizeSelectValue(value: unknown) {
  if (Array.isArray(value)) {
    return String(value[0] ?? "");
  }

  if (value === undefined || value === null) {
    return "";
  }

  return String(value);
}

export default function UiSelect({
  options,
  containerClassName,
  variant = "surface",
  size = "md",
  iconName = "expand_more",
  dropdownPlacement = "auto",
  className,
  id,
  name,
  value,
  defaultValue,
  onChange,
  disabled,
  required,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
}: UiSelectProps) {
  const generatedId = useId();
  const controlId = id ?? `ui-select-${generatedId}`;
  const listboxId = `${controlId}-listbox`;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activePlacement, setActivePlacement] = useState<"bottom" | "top">(
    "bottom",
  );
  const [internalValue, setInternalValue] = useState(() =>
    normalizeSelectValue(defaultValue),
  );

  const isControlled = value !== undefined;
  const selectedValue = isControlled
    ? normalizeSelectValue(value)
    : internalValue;

  const visibleOptions = useMemo(
    () => options.filter((option) => !option.hidden),
    [options],
  );

  const selectedOption =
    options.find((option) => option.value === selectedValue) ??
    visibleOptions[0] ??
    options[0] ??
    null;

  const calculatePlacement = () => {
    if (dropdownPlacement === "top" || dropdownPlacement === "bottom") {
      setActivePlacement(dropdownPlacement);
      return;
    }

    const triggerRect = containerRef.current?.getBoundingClientRect();

    if (!triggerRect) {
      setActivePlacement("bottom");
      return;
    }

    const estimatedMenuHeight = Math.min(visibleOptions.length, 6) * 52 + 24;
    const spaceBelow = window.innerHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;

    if (spaceBelow < estimatedMenuHeight && spaceAbove > spaceBelow) {
      setActivePlacement("top");
      return;
    }

    setActivePlacement("bottom");
  };

  const handleSelect = (nextValue: string) => {
    if (!isControlled) {
      setInternalValue(nextValue);
    }

    setIsOpen(false);

    if (onChange) {
      const syntheticEvent = {
        target: {
          value: nextValue,
          name,
        },
        currentTarget: {
          value: nextValue,
          name,
        },
      } as unknown as React.ChangeEvent<HTMLSelectElement>;

      onChange(syntheticEvent);
    }
  };

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) {
      return;
    }

    if (["ArrowDown", "Enter", " "].includes(event.key)) {
      event.preventDefault();
      setIsOpen(true);
    }

    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current) {
        return;
      }

      if (!containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    calculatePlacement();
  }, [isOpen, dropdownPlacement, visibleOptions.length]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleWindowResize = () => {
      calculatePlacement();
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [isOpen, dropdownPlacement, visibleOptions.length]);

  return (
    <div ref={containerRef} className={cn("relative", containerClassName)}>
      <button
        id={controlId}
        type="button"
        role="combobox"
        aria-controls={listboxId}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        disabled={disabled}
        onClick={() => {
          if (!isOpen) {
            calculatePlacement();
          }

          setIsOpen((previous) => !previous);
        }}
        onKeyDown={handleTriggerKeyDown}
        className={cn(
          "w-full text-left rounded-2xl text-on-surface font-semibold outline-none transition-all disabled:cursor-not-allowed disabled:opacity-60",
          variantClasses[variant],
          sizeClasses[size],
          "disabled:pointer-events-none",
          className,
        )}
      >
        <span className="inline-flex items-center gap-2">
          {selectedOption?.iconName ? (
            <Icon name={selectedOption.iconName} className="text-[18px]" />
          ) : null}
          <span>{selectedOption?.label ?? "Chọn"}</span>
        </span>
      </button>

      {name ? <input type="hidden" name={name} value={selectedValue} /> : null}

      <Icon
        name={iconName}
        className={cn(
          "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2",
          variant === "surface" ? "text-outline" : "text-on-surface-variant",
        )}
      />

      {isOpen ? (
        <div
          id={listboxId}
          role="listbox"
          aria-labelledby={controlId}
          className={cn(
            "absolute left-0 right-0 z-50 rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-2 shadow-[0_20px_40px_rgba(25,28,30,0.12)]",
            activePlacement === "top" ? "bottom-full mb-2" : "top-full mt-2",
          )}
        >
          <div className="max-h-64 overflow-y-auto space-y-1">
            {visibleOptions.map((option) => {
              const isSelected = option.value === selectedValue;

              return (
                <button
                  key={`${option.value}-${option.label}`}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  disabled={option.disabled}
                  onClick={() => handleSelect(option.value)}
                  className={cn(
                    "w-full flex items-center justify-between rounded-xl px-3 py-3 border text-left transition-colors",
                    isSelected
                      ? "bg-primary/10 border-primary/35 text-primary"
                      : "bg-transparent border-transparent text-on-surface hover:bg-surface-container-low",
                    option.disabled && "opacity-50 cursor-not-allowed",
                  )}
                >
                  <span className="inline-flex items-center gap-3">
                    {option.iconName ? (
                      <Icon name={option.iconName} className="text-[20px]" />
                    ) : null}
                    <span className="font-semibold">{option.label}</span>
                  </span>

                  <span
                    className={cn(
                      "w-4.5 h-4.5 rounded-full border inline-flex items-center justify-center",
                      isSelected ? "border-primary" : "border-outline",
                    )}
                  >
                    {isSelected ? (
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    ) : null}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
