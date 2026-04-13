export type ConciergeMessageRole = "ai" | "user";

export interface ConciergeMessage {
  id: string;
  role: ConciergeMessageRole;
  text: string;
  entities?: string[];
}

export interface ConciergeNavItem {
  id: string;
  label: string;
  href: string;
  icon: string;
  isActive?: boolean;
}

export interface ConciergeTopNavItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export interface ConciergeRecommendation {
  id: string;
  title: string;
  price: string;
  description: string;
  imageUrl: string;
}
