export interface ContactOfficePoint {
  id: string;
  city: string;
  address: string;
  imageUrl: string;
  imageAlt: string;
}

export interface CustomerContactFormState {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

export interface CustomerProfileEditFormState {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  passportId: string;
  emergencyContact: string;
  preferredDepartureCity: string;
  dietaryNotes: string;
  travelNotes: string;
  selectedInterests: string[];
}
