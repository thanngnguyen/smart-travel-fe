export interface DashboardMetric {
  id: string;
  label: string;
  value: string;
  iconName: string;
  iconWrapperClassName: string;
  deltaText?: string;
  deltaToneClassName?: string;
  noteText?: string;
  noteToneClassName?: string;
}

export interface ModeratorAlertItem {
  id: string;
  reviewerName: string;
  tripCode: string;
  excerpt: string;
  severityLabel: string;
  severityClassName: string;
  avatarUrl: string;
  avatarBorderClassName: string;
  actionLabel: string;
}

export interface InventoryDepartureItem {
  id: string;
  title: string;
  seatStatus: string;
  ratioWidthPercent: number;
  ratioClassName: string;
  noteText: string;
  noteClassName: string;
}

export interface ActivityRow {
  id: string;
  initials: string;
  initialsClassName: string;
  customerName: string;
  destination: string;
  timeLabel: string;
  statusLabel: string;
  statusClassName: string;
  amount: string;
}

export interface GuideStatusItem {
  id: string;
  name: string;
  statusText: string;
  statusDotClassName: string;
  avatarUrl: string;
}
