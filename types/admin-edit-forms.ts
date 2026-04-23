import { CustomerSegment, CustomerStatus } from "@/types/admin-customers";
import { PersonnelRole, PersonnelStatus } from "@/types/admin-personnel";
import { BackendBookingStatus } from "@/types/backend-contract";

export interface AdminBookingEditFormState {
  customerName: string;
  customerEmail: string;
  tourName: string;
  departureDate: string;
  amount: string;
  status: BackendBookingStatus;
  adminNote: string;
}

export interface AdminCustomerEditFormState {
  name: string;
  email: string;
  phone: string;
  segment: CustomerSegment;
  status: CustomerStatus;
  assignedConcierge: string;
  avatarUrl: string;
}

export interface AdminPersonnelEditFormState {
  fullName: string;
  staffCode: string;
  department: string;
  email: string;
  phone: string;
  joinedDate: string;
  role: PersonnelRole;
  status: PersonnelStatus;
  assignedTours: number;
  monthlyWorkloadDays: number;
  monthlyWorkloadLimit: number;
  performanceScore: number;
  avatarUrl: string;
  certificationsText: string;
  languagesText: string;
}

export interface AdminTourEditFormState {
  title: string;
  duration: string;
  basePrice: string;
  activeDepartures: string;
  imageUrl: string;
  imageAlt: string;
  assignedGuide: string;
  selectedDays: string[];
}
