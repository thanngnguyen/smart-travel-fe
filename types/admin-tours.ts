/**
 * View-model cho dòng tour trong bảng admin.
 * Mapping từ BackendTourResponse:
 *   id ← id (number → string)
 *   title ← title
 *   basePrice ← adultPrice (formatted)
 *   imageUrl ← images[0].imageUrl (primary image)
 *   duration ← `${durationDays}N${durationNights}Đ`
 * FE-computed: code (from slug), activeDepartures (count from departures API)
 */
export interface AdminTourRow {
  id: string;
  title: string;
  code: string;
  duration: string;
  basePrice: string;
  activeDepartures: string;
  imageUrl: string;
  imageAlt: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface RecurringDayOption {
  id: string;
  label: string;
  isSelected: boolean;
}

export interface ConflictLegendItem {
  id: string;
  label: string;
  dotClassName: string;
}

export interface ConflictDescription {
  prefix: string;
  primaryHighlight: string;
  middle?: string;
  secondaryHighlight?: string;
  suffix: string;
}

export interface ConflictCard {
  id: string;
  theme: "warning" | "error";
  badge: string;
  title: string;
  description: ConflictDescription;
  primaryAction: string;
  secondaryAction: string;
}

export interface YieldSuggestion {
  id: string;
  label: string;
  adjustment: string;
  adjustmentClassName: string;
  barWidthClassName: string;
}
