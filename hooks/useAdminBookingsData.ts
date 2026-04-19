import {
  BookingFilterTab,
  BookingMetric,
  BookingRow,
  BookingsPagination,
} from "@/types/admin-bookings";

export function useAdminBookingsData() {
  const metrics: BookingMetric[] = [
    {
      id: "total-bookings",
      label: "Tổng đơn đặt chỗ",
      value: "1,284",
      deltaText: "+12%",
      deltaToneClassName: "text-green-600",
    },
    {
      id: "revenue",
      label: "Doanh thu",
      value: "$42.8k",
      deltaText: "+$3k",
      deltaToneClassName: "text-green-600",
    },
    {
      id: "pending",
      label: "Chờ xử lý",
      value: "43",
      deltaText: "Cần duyệt",
      deltaToneClassName: "text-secondary",
    },
    {
      id: "ai-alert",
      label: "Cảnh báo AI",
      value: "3 giao dịch tranh chấp",
      cardTone: "alert",
      noteText: "warning",
    },
  ];

  const filterTabs: BookingFilterTab[] = [
    { id: "all", label: "Tất cả", isActive: true },
    { id: "CONFIRMED", label: "CONFIRMED" },
    { id: "PENDING", label: "PENDING" },
    { id: "CANCELLED", label: "CANCELLED" },
  ];

  const rows: BookingRow[] = [
    {
      id: "stms-1001",
      initials: "JD",
      avatarToneClassName: "bg-blue-100 text-primary",
      customerName: "Julianne Moore",
      customerEmail: "j.moore@travel.com",
      tourName: "Santorini hoàng hôn",
      departureDate: "12 Th10, 2024",
      departureMeta: "Cổng 4B • Phổ thông",
      amount: "$2,450.00",
      status: "CONFIRMED",
      statusLabel: "CONFIRMED · Payment SUCCESS",
      statusTone: "success",
    },
    {
      id: "stms-1002",
      initials: "RW",
      avatarToneClassName: "bg-amber-100 text-amber-700",
      customerName: "Robert Wagner",
      customerEmail: "robert.w@web.de",
      tourName: "Tàu hỏa cao cấp Alps Thụy Sĩ",
      departureDate: "05 Th11, 2024",
      departureMeta: "Zurich HB • Hạng nhất",
      amount: "$5,120.00",
      status: "PENDING",
      statusLabel: "PENDING · Chờ thanh toán",
      statusTone: "info",
    },
    {
      id: "stms-1003",
      initials: "EL",
      avatarToneClassName: "bg-slate-200 text-slate-700",
      customerName: "Elena Lopez",
      customerEmail: "e.lopez@studio.io",
      tourName: "Tour hoa anh đào Kyoto",
      departureDate: "29 Th10, 2024",
      departureMeta: "Osaka Intl • Boutique",
      amount: "$1,890.00",
      status: "CANCELLED",
      statusLabel: "CANCELLED",
      statusTone: "error",
    },
    {
      id: "stms-1004",
      initials: "TK",
      avatarToneClassName: "bg-indigo-100 text-indigo-700",
      customerName: "Thomas Klein",
      customerEmail: "tk@corp.net",
      tourName: "Safari Serengeti cổ điển",
      departureDate: "14 Th12, 2024",
      departureMeta: "Sân bay JRO • Khu nghỉ dưỡng",
      amount: "$3,900.00",
      status: "CONFIRMED",
      statusLabel: "CONFIRMED · Payment SUCCESS",
      statusTone: "success",
    },
  ];

  const pagination: BookingsPagination = {
    summaryLabel: "Hiển thị 1-10 / 1,284 đơn đặt chỗ",
    currentPage: 1,
    pages: [1, 2, 3],
  };

  return {
    metrics,
    filterTabs,
    rows,
    pagination,
  };
}
