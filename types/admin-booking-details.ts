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
  paidAmount: string;
  statusLabel: string;
  subtotal: string;
  feesAndTaxes: string;
  total: string;
}

export interface BookingAiInsight {
  recommendationTitle: string;
  recommendationDescription: string;
  urgentActionTitle: string;
  urgentActionDescription: string;
}

export interface BookingQuickAction {
  id: string;
  label: string;
  icon: string;
  textClassName: string;
}

export interface BookingItineraryMap {
  imageUrl: string;
}
