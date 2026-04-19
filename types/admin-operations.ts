export type DepartureLifecycleStatus =
  | "PLANNING"
  | "OPEN"
  | "LOCKED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED";

export type GuideAssignmentStatus = "pending-confirmation" | "on-tour";

export type GuideRecommendationStatus = "recommended" | "eligible" | "blocked";

export type OperationsNotificationType =
  | "assignment-sent"
  | "assignment-blocked"
  | "guide-confirmed";

export type TourType = "adventure" | "leisure" | "culture";

export interface PassengerProfile {
  id: string;
  fullName: string;
  language: string;
  specialRequest?: string;
}

export interface GuideAssignmentRecord {
  guideId: string;
  status: GuideAssignmentStatus;
  assignedAt: string;
  confirmedAt?: string;
}

export interface TourDeparture {
  id: string;
  code: string;
  tourName: string;
  tourType: TourType;
  startDate: string;
  endDate: string;
  departureStatus: DepartureLifecycleStatus;
  groupLanguage: string;
  minPassengersRequired: number;
  passengerCount: number;
  workloadDays: number;
  itinerarySummary: string[];
  passengers: PassengerProfile[];
  specialRequests: string[];
  assignments: GuideAssignmentRecord[];
}

export interface GuideScheduleEntry {
  departureId: string;
  tourName: string;
  startDate: string;
  endDate: string;
}

export interface TourGuide {
  id: string;
  fullName: string;
  avatarInitials: string;
  skills: TourType[];
  languages: string[];
  monthlyWorkloadDays: number;
  monthlyWorkloadLimit: number;
  rating: number;
  schedules: GuideScheduleEntry[];
}

export interface ScheduleConflictResult {
  hasConflict: boolean;
  conflictWith?: GuideScheduleEntry;
}

export interface GuideRecommendation {
  guideId: string;
  score: number;
  status: GuideRecommendationStatus;
  reasons: string[];
  conflict?: ScheduleConflictResult;
}

export interface GuideCandidate {
  guide: TourGuide;
  recommendation: GuideRecommendation;
}

export interface OperationsNotification {
  id: string;
  type: OperationsNotificationType;
  title: string;
  message: string;
  createdAt: string;
}

export interface DepartureQueueItem extends TourDeparture {
  requiredGuideCount: number;
  missingGuideCount: number;
  isReadyForAssignment: boolean;
}

export interface OperationsMetrics {
  departuresReadyForAssignment: number;
  missingGuides: number;
  pendingConfirmations: number;
  notificationsSent: number;
}

export interface PendingConfirmationItem {
  departure: TourDeparture;
  guide: TourGuide;
  assignment: GuideAssignmentRecord;
}

export interface ActiveGuideTaskItem {
  departure: TourDeparture;
  guide: TourGuide;
  assignment: GuideAssignmentRecord;
}
