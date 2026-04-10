export const APP_NAME = "Smart Travel Management System";
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  PROFILE: "/profile",
  TOURS: "/tours",
  ADMIN_DASHBOARD: "/admin",
  ADMIN_TOURS: "/admin/tours",
  ADMIN_BOOKINGS: "/admin/bookings",
  ADMIN_REPORTS: "/admin/reports",
  ADMIN_SETTINGS: "/admin/settings",
};

export const BOOKING_STATUS = {
  PENDING: "PENDING",
  CONFIRMED: "CONFIRMED",
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
};

export const TOUR_STATUS = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  DRAFT: "DRAFT",
};
