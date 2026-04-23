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
