export type CheckoutStep = 1 | 2 | 3;

export interface CheckoutProgressStep {
  id: CheckoutStep;
  label: string;
}

export interface CheckoutOrderSummary {
  title: string;
  location: string;
  dateRange: string;
  passengers: string;
  basePrice: string;
  fees: string;
  total: string;
  rating: number;
  imageUrl: string;
}
