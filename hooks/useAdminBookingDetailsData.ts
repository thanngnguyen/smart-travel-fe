import {
  BookingActivityLogItem,
  BookingAiInsight,
  BookingHeaderData,
  BookingItineraryMap,
  BookingPaymentBreakdown,
  BookingQuickAction,
  PassengerInfo,
  SpecialRequestItem,
  TourHighlightData,
} from "@/types/admin-booking-details";

export function useAdminBookingDetailsData() {
  const header: BookingHeaderData = {
    bookingCode: "Đặt chỗ #STMS-882910",
    confirmationText: "Đã xác nhận ngày 24 Th10, 2024",
  };

  const tourHighlight: TourHighlightData = {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbT3LNTtKsWPmZC93CfclJzFmKb04EWaQGLPBF7CetnNQIsKY39LEL1gXX9U2XZfXOPHb_mnbtVQ7W-kjEgrczHSnnCspb75GJ7BLPQkdscYzdCt5HsIZnIMJwqqnKRwaGNSU3MMY7RRuiCkyyOaMeZeLJrOsqz3r-vvZVcygJpLFJ3vJG5ctuVSCDE4gYOcR3Eghy1cYSw2x4Go4PjFUQh3WU4z-dk_yioOT2TBmLv4VRkiruOnIMhh3n8wyfqxobB6EZt3iF1bI",
    statusLabel: "Tour đang hoạt động",
    title: "Thám hiểm dãy Alps Thụy Sĩ: 7 ngày đỉnh núi & thung lũng",
    tierLabel: "CAO CẤP",
    departureDate: "12 Th12, 2024",
    returnDate: "19 Th12, 2024",
    groupSize: "12 khách",
    location: "St. Moritz, Thụy Sĩ",
  };

  const primaryPassenger: PassengerInfo = {
    id: "primary-passenger",
    name: "Elena Rodriguez",
    passengerId: "P-9912",
    email: "e.rodriguez@example.com",
    phone: "+34 612 990 123",
    nationality: "Tây Ban Nha",
    passportMasked: "P88****12",
  };

  const specialRequests: SpecialRequestItem[] = [
    {
      id: "dietary",
      title: "Dinh dưỡng",
      description:
        "Dị ứng nặng với hạt. Cần lựa chọn bữa ăn thuần chay cho tất cả chuyến bay và bữa tối theo đoàn.",
      styleClassName: "bg-tertiary-fixed/30",
      titleClassName: "text-tertiary",
    },
    {
      id: "accessibility",
      title: "Hỗ trợ tiếp cận",
      description:
        "Yêu cầu phòng tầng thấp khi có thể (ưu tiên không dùng cầu thang).",
      styleClassName: "bg-surface-container-low",
      titleClassName: "text-outline",
    },
  ];

  const activityLogs: BookingActivityLogItem[] = [
    {
      id: "confirmed",
      icon: "check",
      iconClassName: "bg-primary",
      title: "Đặt chỗ đã xác nhận",
      description: "Thanh toán đã xác thực qua Stripe (Ref: ch_91283)",
      timestamp: "24 TH10, 2024 • 14:32 • Hệ thống",
    },
    {
      id: "passenger-update",
      icon: "edit",
      iconClassName: "bg-secondary-container",
      title: "Đã cập nhật thông tin hành khách",
      description: "Ngày hết hạn hộ chiếu đã được chỉnh về 2029-05-15.",
      timestamp: "25 TH10, 2024 • 09:12 • Quản trị: Sarah J.",
    },
    {
      id: "documents-sent",
      icon: "mail",
      iconClassName: "bg-tertiary-container",
      title: "Đã gửi bộ tài liệu trước chuyến đi",
      description:
        "Lịch trình số và hướng dẫn visa đã gửi tới email hành khách chính.",
      timestamp: "01 TH11, 2024 • 10:00 • Tác vụ tự động",
    },
  ];

  const payment: BookingPaymentBreakdown = {
    paidAmount: "$4,850.00",
    statusLabel: "ĐÃ THANH TOÁN ĐỦ",
    subtotal: "$4,500.00",
    feesAndTaxes: "$350.00",
    total: "$4,850.00",
  };

  const aiInsight: BookingAiInsight = {
    recommendationTitle: "Khuyến nghị hành trình",
    recommendationDescription:
      "Chặng nối chuyến tại Zurich có xác suất trễ 12% theo xu hướng thời tiết mùa đông. Hệ thống đang theo dõi thời tiết theo thời gian thực.",
    urgentActionTitle: "Hành động khẩn",
    urgentActionDescription:
      "Cần xác minh visa cho chặng 2. Hạn chót: 15 Th11.",
  };

  const quickActions: BookingQuickAction[] = [
    {
      id: "resend",
      label: "Gửi lại",
      icon: "send",
      textClassName: "text-primary",
    },
    {
      id: "duplicate",
      label: "Nhân bản",
      icon: "content_copy",
      textClassName: "text-primary",
    },
    {
      id: "refund",
      label: "Hoàn tiền",
      icon: "sync",
      textClassName: "text-primary",
    },
    {
      id: "cancel",
      label: "Hủy",
      icon: "cancel",
      textClassName: "text-error",
    },
  ];

  const itineraryMap: BookingItineraryMap = {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWCQixtElx0_lIKUH0oy5ExCEY22P0EsBQwIw102dPbiFgEC1HVEiUNwdQ8A32OyCHhyH2aCjlYy5uu9a1MLuircOLEmk0EI8h-wFK0JZ6cEuDjq54jKgBlpbh-4HXtEvu-pqzXZAf_gOZVbd4IaX2XOLiKXOmH8XacF8MJjsy--ZJCBNkiMSO4pLU3uiKngP0KNUkQ4kKcfLKCFwv8Y7ze5D8A3TvQGHVSSdBLJpQxRuSjNev84PdJFygzb4WCaw99vsEr1P675U",
  };

  return {
    header,
    tourHighlight,
    primaryPassenger,
    specialRequests,
    activityLogs,
    payment,
    aiInsight,
    quickActions,
    itineraryMap,
  };
}
