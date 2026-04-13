export interface SentimentLegendItem {
  id: string;
  label: string;
  colorClassName: string;
}

export interface SentimentDayBar {
  id: string;
  dayLabel: string;
  containerHeight: string;
  primaryHeight: string;
  secondaryHeight: string;
  secondaryTone: "secondary" | "error";
}

export interface IntentStat {
  id: string;
  label: string;
  percent: string;
  barColorClassName: string;
  textColorClassName: string;
}

export interface RedFlagReview {
  id: string;
  initials: string;
  customerName: string;
  customerType: string;
  excerpt: string;
  sentiment: string;
  primaryIntent: string;
}

export interface InsightSummaryCard {
  id: string;
  iconName: string;
  iconContainerClassName: string;
  iconClassName: string;
  label: string;
  value: string;
  description: string;
}
