export type CheckoutStep = 1 | 2 | 3;

export type CheckoutPaymentMethod = "card" | "bank-transfer" | "wallet";

export interface CheckoutProgressStep {
  id: CheckoutStep;
  label: string;
  description: string;
}

export interface CheckoutPassengerInfo {
  primaryTraveler: string;
  companionTraveler: string;
  email: string;
  phone: string;
  specialNote: string;
}

export interface CheckoutAddOnItem {
  id: string;
  label: string;
  description: string;
  price: number;
  selected: boolean;
  tag?: string;
}

export interface CheckoutPaymentForm {
  cardholderName: string;
  cardNumberTokenized: string;
  expiryDate: string;
  cvv: string;
}

export interface CheckoutPaymentMethodOption {
  id: CheckoutPaymentMethod;
  label: string;
  icon: string;
}

export interface CheckoutTripOverview {
  tripType: string;
  cabinClass: string;
  routeFromCode: string;
  routeToCode: string;
  routeFromCity: string;
  routeToCity: string;
  duration: string;
  lockedSeats: string[];
}

export interface CheckoutOrderSummary {
  title: string;
  location: string;
  dateRange: string;
  passengersLabel: string;
  baseFare: number;
  taxesAndFees: number;
  selectedAddOnsTotal: number;
  grandTotal: number;
  localCurrencyEstimate: string;
  pointsEarned: string;
  rating: number;
}

export interface CheckoutFlashMessage {
  tone: "error" | "success" | "info";
  text: string;
}
