export const APP_NAME = "Smart Travel Management System";
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081/api";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  PROFILE: "/profile",
  TOURS: "/tours",
  TOUR_CHAT: "/tour-chat",
  GUIDE: "/guide-portal",
  CONCIERGE: "/concierge",
  ADMIN_DASHBOARD: "/admin",
  ADMIN_TOURS: "/admin/tours",
  ADMIN_BOOKINGS: "/admin/bookings",
  ADMIN_CUSTOMERS: "/admin/customers",
  ADMIN_PERSONNEL: "/admin/personnel",
  ADMIN_INSIGHTS: "/admin/insights",
  ADMIN_OPERATIONS: "/admin/operations",
  ADMIN_REPORTS: "/admin/reports",
  ADMIN_SETTINGS: "/admin/settings",
};

export const BOOKING_STATUS = {
  PENDING: "PENDING",
  CONFIRMED: "CONFIRMED",
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
};

export const DEPARTURE_STATUS = {
  PLANNING: "PLANNING",
  OPEN: "OPEN",
  LOCKED: "LOCKED",
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
};

export const PAYMENT_METHOD = {
  CASH: "CASH",
  BANK_TRANSFER: "BANK_TRANSFER",
  VNPAY: "VNPAY",
  MOMO: "MOMO",
};

export const BACKEND_ROLE = {
  USER: "USER",
  GUIDE: "GUIDE",
  ADMIN: "ADMIN",
};
