export interface RevenueCategoryBar {
  id: string;
  label: string;
  currentHeightPercent: number;
  previousHeightPercent: number;
}

export interface ConversionChannel {
  id: string;
  label: string;
  valuePercent: number;
  barClassName: string;
}

export interface GuideUtilization {
  id: string;
  name: string;
  avatarUrl: string;
  percent: number;
}

export interface FillRateBar {
  id: string;
  label: string;
  valuePercent: number;
  toneClassName: string;
}

export interface ReportLogRow {
  id: string;
  code: string;
  tourName: string;
  tourMeta: string;
  guideName: string;
  capacity: string;
  capacityDotClassName: string;
  statusLabel: string;
  statusClassName: string;
  revenue: string;
}

export interface ReportFooterLink {
  id: string;
  label: string;
  href: string;
}
