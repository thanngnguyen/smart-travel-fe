export type TourChatParticipantRole = "guide" | "customer" | "admin";

export type TourChatMessageRole = "system" | TourChatParticipantRole;

export type TourChatGroupStatus = "active" | "upcoming" | "completed";

export type TourChatTimelineState = "done" | "current" | "upcoming";

export type TourChatChannelState = "open" | "admin-review" | "locked";

export type TourChatAdminBroadcastType = "notice" | "safety" | "coordination";

export type TourChatAuditActionType =
  | "channel-opened"
  | "channel-review-enabled"
  | "channel-locked"
  | "broadcast-notice"
  | "broadcast-safety"
  | "broadcast-coordination";

export interface TourChatParticipant {
  id: string;
  name: string;
  role: TourChatParticipantRole;
  avatarUrl: string;
  avatarAlt: string;
  isOnline?: boolean;
  isCurrentUser?: boolean;
  ratingLabel?: string;
}

export interface TourChatMessageCard {
  title: string;
  description: string;
  iconName: string;
  ctaLabel: string;
}

export interface TourChatMessage {
  id: string;
  role: TourChatMessageRole;
  senderId?: string;
  senderName: string;
  sentAtLabel: string;
  body: string;
  card?: TourChatMessageCard;
  isReadByCurrentUser?: boolean;
}

export interface TourChatTimelineItem {
  id: string;
  timeLabel: string;
  title: string;
  description: string;
  locationLabel: string;
  state: TourChatTimelineState;
}

export interface TourChatDocument {
  id: string;
  fileName: string;
  fileSizeLabel: string;
  iconName: string;
}

export interface TourChatGroup {
  id: string;
  tourId: string;
  bookingCode: string;
  title: string;
  subtitle: string;
  status: TourChatGroupStatus;
  statusLabel: string;
  channelState: TourChatChannelState;
  channelStateLabel: string;
  typeLabel: string;
  locationLabel: string;
  durationLabel: string;
  vehicleLabel: string;
  coverImageUrl: string;
  coverImageAlt: string;
  participants: TourChatParticipant[];
  messages: TourChatMessage[];
  itinerary: TourChatTimelineItem[];
  documents: TourChatDocument[];
}

export interface TourChatEnrollmentPayload {
  tourId?: string;
  bookingCode: string;
  primaryTravelerName: string;
  companionTravelerName?: string;
  email: string;
  phone: string;
}

export interface TourChatEnrollmentResult {
  groupId: string;
  joinedMemberNames: string[];
}

export interface TourChatAuditLogEntry {
  id: string;
  groupId: string;
  tourId: string;
  groupTitle: string;
  actorId?: string;
  actorName: string;
  actorRole: TourChatParticipantRole;
  actionType: TourChatAuditActionType;
  actionLabel: string;
  detail: string;
  fromState?: TourChatChannelState;
  toState?: TourChatChannelState;
  createdAtIso: string;
  createdAtLabel: string;
}
