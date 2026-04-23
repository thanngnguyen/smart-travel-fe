import {
  BackendBookingStatus,
  BackendPaymentMethod,
  BackendPaymentStatus,
} from "@/types/backend-contract";

export interface BookingHeaderData {
  bookingCode: string;
  confirmationText: string;
}

export interface TourHighlightData {
  imageUrl: string;
  statusLabel: string;
  title: string;
  tierLabel: string;
  departureDate: string;
  returnDate: string;
  groupSize: string;
  location: string;
}

export interface PassengerInfo {
  id: string;
  name: string;
  passengerId: string;
  email: string;
  phone: string;
  nationality: string;
  passportMasked: string;
}

export interface SpecialRequestItem {
  id: string;
  title: string;
  description: string;
  styleClassName: string;
  titleClassName: string;
}

export interface BookingActivityLogItem {
  id: string;
  icon: string;
  iconClassName: string;
  title: string;
  description: string;
  timestamp: string;
}

export interface BookingPaymentBreakdown {
  bookingId: string;
  bookingStatus: BackendBookingStatus;
  paymentStatus: BackendPaymentStatus;
  paymentMethod: BackendPaymentMethod;
  paidAmount: string;
  statusLabel: string;
  subtotal: string;
  feesAndTaxes: string;
  total: string;
}

export type BookingQuickActionId =
  | "mark-payment-success"
  | "confirm-booking"
  | "cancel-booking"
  | "refund-booking"
  | "flag-risk"
  | "clear-risk";

export interface BookingAiInsight {
  recommendationTitle: string;
  recommendationDescription: string;
  urgentActionTitle: string;
  urgentActionDescription: string;
}

export interface BookingQuickAction {
  id: BookingQuickActionId;
  label: string;
  icon: string;
  textClassName: string;
}

export interface BookingItineraryMap {
  imageUrl: string;
}
