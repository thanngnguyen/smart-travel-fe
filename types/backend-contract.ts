export type BackendAuthRole = "USER" | "GUIDE" | "ADMIN";

export type BackendBookingStatus = "PENDING" | "CONFIRMED" | "CANCELLED";

export type BackendPaymentMethod = "CASH" | "BANK_TRANSFER" | "VNPAY" | "MOMO";

export type BackendPaymentStatus =
  | "PENDING"
  | "SUCCESS"
  | "FAILED"
  | "REFUNDED";

export type BackendDepartureStatus =
  | "PLANNING"
  | "OPEN"
  | "LOCKED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED";

export type BackendPassengerType = "ADULT" | "CHILD";

export interface BackendAuthResponse {
  token: string;
  role: BackendAuthRole;
}

export interface BackendErrorResponse {
  timestamp: string;
  status: number;
  error: string;
  message: string | Record<string, string>;
  path: string;
}

// ============================================================================
// RESPONSE TYPES — 1:1 mapping với BE DTOs (com.quang.velaris.dto.response.*)
// ============================================================================

/** Khớp UserResponse.java */
export interface BackendUserResponse {
  id: number;
  email: string;
  role: BackendAuthRole;
  isActive: boolean;
}

/** Khớp CustomerResponse.java */
export interface BackendCustomerResponse {
  id: number;
  fullName: string;
  phone: string | null;
  avatarUrl: string | null;
  address: string | null;
  dietaryNotes: string | null;
  user: BackendUserResponse;
}

/** Khớp DestinationResponse.java */
export interface BackendDestinationResponse {
  id: number;
  name: string;
  description: string | null;
  provinceCity: string | null;
  imageUrl: string | null;
}

/** Khớp TourImageResponse.java */
export interface BackendTourImageResponse {
  id: number;
  imageUrl: string;
  isPrimary: boolean;
}

/** Khớp TourItineraryResponse.java */
export interface BackendTourItineraryResponse {
  id: number;
  dayNumber: number;
  title: string;
  activities: string;
  mealsIncluded: string | null;
  accommodation: string | null;
}

/** Khớp TourResponse.java */
export interface BackendTourResponse {
  id: number;
  title: string;
  slug: string;
  adultPrice: number; // BigDecimal → number
  childPrice: number;
  durationDays: number;
  durationNights: number;
  destinations: BackendDestinationResponse[];
  images: BackendTourImageResponse[];
  itineraries: BackendTourItineraryResponse[];
}

/** Khớp DepartureResponse.java */
export interface BackendDepartureResponse {
  id: number;
  tourId: number;
  tourTitle: string;
  guideName: string | null;
  startDate: string; // LocalDateTime → ISO string
  endDate: string;
  maxParticipants: number;
  currentParticipants: number;
  status: BackendDepartureStatus;
}

/** Khớp BookingResponse.java */
export interface BackendBookingResponse {
  id: number;
  tourTitle: string;
  bookingDate: string; // LocalDateTime → ISO string
  adultCount: number;
  childCount: number;
  originalPrice: number;
  discountAmount: number;
  finalPrice: number;
  status: BackendBookingStatus;
  note: string | null;
}

/** Khớp PaymentResponse.java */
export interface BackendPaymentResponse {
  id: number;
  bookingId: number;
  amount: number;
  paymentMethod: BackendPaymentMethod;
  paymentDate: string | null;
  status: BackendPaymentStatus;
  transactionId: string | null;
}

/** Khớp ReviewResponse.java */
export interface BackendReviewResponse {
  id: number;
  customerName: string;
  tourTitle: string;
  rating: number;
  comment: string | null;
  createdAt: string;
}

/** Khớp ChatMessageResponse.java */
export interface BackendChatSenderDto {
  id: number;
  email: string;
}

export interface BackendChatMessageResponse {
  id: number;
  content: string;
  sentAt: string;
  sender: BackendChatSenderDto;
}

/** Khớp Promotion entity — BE chưa có PromotionResponse DTO */
export interface BackendPromotionResponse {
  id: number;
  code: string;
  discountPercentage: number;
  maxDiscountAmount: number;
  validFrom: string;
  validUntil: string;
  usageLimit: number | null;
  usedCount: number;
  isActive: boolean;
}

/** Khớp Notification.type values */
export type BackendNotificationType =
  | "BOOKING_SUCCESS"
  | "SYSTEM_ALERT"
  | "PROMOTION"
  | "CHAT";

/** Khớp Notification entity — BE chưa có NotificationResponse DTO */
export interface BackendNotificationResponse {
  id: number;
  title: string;
  message: string;
  type: BackendNotificationType;
  isRead: boolean;
  createdAt: string;
}

/** Khớp AuditLog entity */
export type BackendAuditLogAction = "CREATE" | "UPDATE" | "DELETE";

export interface BackendAuditLogResponse {
  id: number;
  userId: number | null;
  action: BackendAuditLogAction;
  entityName: string;
  entityId: number | null;
  details: string | null;
  createdAt: string;
}

/** Khớp ChatRoom entity */
export type BackendChatRoomType = "GROUP" | "PRIVATE";

export interface BackendChatRoomResponse {
  id: number;
  departureId: number;
  name: string | null;
  roomType: BackendChatRoomType;
  createdAt: string;
}

/** Khớp TourGuide entity — BE chưa có TourGuideResponse DTO */
export interface BackendTourGuideResponse {
  id: number;
  userId: number;
  fullName: string;
  phone: string | null;
  avatarUrl: string | null;
  bio: string | null;
  languages: string; // BE lưu single string "Tiếng Việt, Tiếng Anh"
  experienceYears: number | null;
}

// ============================================================================
// REQUEST TYPES — 1:1 mapping với BE DTOs (com.quang.velaris.dto.request.*)
// ============================================================================

/** Khớp LoginRequest.java */
export interface BackendLoginRequest {
  email: string;
  password: string;
}

/** Khớp RegisterRequest.java */
export interface BackendRegisterRequest {
  email: string;
  password: string;
}

/** Khớp VerifyOtpRequest.java */
export interface BackendVerifyOtpRequest {
  email: string;
  otpCode: string;
}

/** Khớp BookingPassengerRequest.java */
export interface BackendBookingPassengerRequest {
  fullName: string;
  dateOfBirth: string; // LocalDate → "YYYY-MM-DD"
  idCardNumber: string | null;
  passengerType: BackendPassengerType;
}

/** Khớp BookingRequest.java */
export interface BackendBookingRequest {
  customerId: number;
  departureId: number;
  notes: string | null;
  passengers: BackendBookingPassengerRequest[];
}

/** Khớp TourImageRequest.java */
export interface BackendTourImageRequest {
  imageUrl: string;
  isPrimary: boolean;
}

/** Khớp TourItineraryRequest.java */
export interface BackendTourItineraryRequest {
  dayNumber: number;
  title: string;
  activities: string;
  mealsIncluded: string | null;
  accommodation: string | null;
}

/** Khớp TourRequest.java */
export interface BackendTourRequest {
  title: string;
  slug: string;
  description: string | null;
  adultPrice: number;
  childPrice: number;
  durationDays: number;
  durationNights: number;
  destinationIds: number[];
  images: BackendTourImageRequest[];
  itineraries: BackendTourItineraryRequest[];
}

/** Khớp DepartureRequest.java */
export interface BackendDepartureRequest {
  tourId: number;
  guideId: number | null;
  startDate: string;
  endDate: string;
  maxParticipants: number;
  status: BackendDepartureStatus;
}

/** Khớp PaymentRequest.java */
export interface BackendPaymentRequest {
  bookingId: number;
  amount: number;
  paymentMethod: BackendPaymentMethod;
  transactionId: string | null;
}

/** Khớp ReviewRequest.java */
export interface BackendReviewRequest {
  tourId: number;
  rating: number;
  comment: string | null;
}

/** Khớp CustomerRequest.java */
export interface BackendCustomerRequest {
  userId: number;
  fullName: string;
  phone: string | null;
  avatarUrl: string | null;
  address: string | null;
  dietaryNotes: string | null;
}

/** Khớp ChatMessageRequest.java */
export interface BackendChatMessageRequest {
  roomId: number;
  content: string;
}

/** Khớp UserRequest.java */
export interface BackendUserRequest {
  email: string;
  password: string;
  role: BackendAuthRole;
}
