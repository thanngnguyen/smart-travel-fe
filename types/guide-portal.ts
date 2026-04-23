import {
  BackendBookingStatus,
  BackendDepartureStatus,
  BackendPaymentStatus,
} from "@/types/backend-contract";

export type GuideTaskLifecycle =
  | "pending-confirmation"
  | "confirmed"
  | "in-progress"
  | "completed";

export type GuideCheckInStatus = "pending" | "checked-in" | "late" | "no-show";

export type GuideCheckpointState =
  | "upcoming"
  | "in-progress"
  | "done"
  | "blocked";

export type GuideIncidentSeverity = "low" | "medium" | "high" | "critical";

export type GuideIncidentStatus = "open" | "mitigating" | "resolved";

export type GuideMessageRole = "system" | "guide" | "customer" | "admin";

export type GuideSyncTone = "info" | "success" | "warning";

/**
 * View-model cho profile hướng dẫn viên.
 *
 * Mapping từ BE:
 * - `id`          ← BackendTourGuideResponse.id (number → string)
 * - `fullName`    ← BackendTourGuideResponse.fullName
 * - `languages`   ← BackendTourGuideResponse.languages.split(", ")
 * - Các trường còn lại (avatarInitials, roleLabel, baseLocation, expertise,
 *   rating, monthlyWorkloadDays, monthlyWorkloadLimit) là FE-computed hoặc
 *   cần BE bổ sung endpoint.
 */
export interface GuideProfile {
  id: string;
  fullName: string;
  avatarInitials: string;
  roleLabel: string;
  baseLocation: string;
  languages: string[];
  expertise: string[];
  rating: number;
  monthlyWorkloadDays: number;
  monthlyWorkloadLimit: number;
}

/**
 * View-model hành khách.
 * Mapping: BookingPassenger entity → fullName, phone
 *          Booking entity → bookingStatus, bookingCode
 *          Payment entity → paymentStatus
 * FE-only: emergencyContact, specialRequest, checkInStatus, checkInAtIso
 */
export interface GuideTaskPassenger {
  id: string;
  bookingCode: string;
  fullName: string;
  phone: string;
  emergencyContact: string;
  bookingStatus: BackendBookingStatus;
  paymentStatus: BackendPaymentStatus;
  specialRequest?: string;
  checkInStatus: GuideCheckInStatus;
  checkInAtIso?: string;
}

export interface GuideTaskCheckpoint {
  id: string;
  timeLabel: string;
  title: string;
  locationLabel: string;
  description: string;
  state: GuideCheckpointState;
  updatedAtIso?: string;
}

/**
 * View-model tin nhắn tour.
 * Mapping từ BackendChatMessageResponse:
 *   id ← id, content ← content, sentAtIso ← sentAt
 *   senderRole cần resolve từ User.role (BE ChatMessageResponse
 *   chỉ trả sender.id + sender.email, chưa trả role)
 * FE-only: senderName (cần join User/Customer/TourGuide), isUnreadByGuide
 */
export interface GuideTaskMessage {
  id: string;
  roomId: string;
  senderRole: GuideMessageRole;
  senderName: string;
  content: string;
  sentAtIso: string;
  isUnreadByGuide?: boolean;
}

export interface GuideIncidentReport {
  id: string;
  departureId: string;
  title: string;
  description: string;
  severity: GuideIncidentSeverity;
  status: GuideIncidentStatus;
  createdAtIso: string;
  updatedAtIso: string;
  resolutionNote?: string;
}

export interface GuideDepartureTask {
  id: string;
  departureCode: string;
  tourId: string;
  tourTitle: string;
  destinationLabel: string;
  startDate: string;
  endDate: string;
  departureStatus: BackendDepartureStatus;
  taskStatus: GuideTaskLifecycle;
  groupLanguage: string;
  meetingPoint: string;
  maxParticipants: number;
  currentParticipants: number;
  itinerarySummary: string[];
  passengers: GuideTaskPassenger[];
  checkpoints: GuideTaskCheckpoint[];
  chatRoomId: string;
  chatThread: GuideTaskMessage[];
  incidents: GuideIncidentReport[];
  updatedAtIso: string;
}

export interface GuideSyncLogEntry {
  id: string;
  tone: GuideSyncTone;
  title: string;
  detail: string;
  createdAtIso: string;
}

export interface GuidePortalState {
  profile: GuideProfile;
  tasks: GuideDepartureTask[];
  syncLogs: GuideSyncLogEntry[];
}

export interface GuidePortalMetrics {
  pendingConfirmations: number;
  activeDepartures: number;
  checkedInPassengers: number;
  openIncidents: number;
  unreadMessages: number;
  readinessScore: number;
}

export type GuideTaskStatusAction =
  | "confirm-task"
  | "start-task"
  | "complete-task";

export interface GuideIncidentDraft {
  title: string;
  description: string;
  severity: GuideIncidentSeverity;
}

export interface GuideStateMutationResult {
  changed: boolean;
  nextState: GuidePortalState;
  message: string;
}
