import {
  ActivityRow,
  DashboardMetric,
  GuideStatusItem,
  InventoryDepartureItem,
  ModeratorAlertItem,
} from "@/types/admin-dashboard";

export function useAdminDashboardData() {
  const metrics: DashboardMetric[] = [
    {
      id: "total-bookings",
      label: "Tổng đặt chỗ",
      value: "1,284",
      iconName: "confirmation_number",
      iconWrapperClassName: "bg-primary/10 text-primary",
      deltaText: "+12%",
      deltaToneClassName: "text-green-600",
    },
    {
      id: "revenue",
      label: "Doanh thu",
      value: "$412.5k",
      iconName: "payments",
      iconWrapperClassName: "bg-secondary/10 text-secondary",
      deltaText: "+5.4%",
      deltaToneClassName: "text-green-600",
    },
    {
      id: "active-guides",
      label: "Hướng dẫn viên hoạt động",
      value: "86%",
      iconName: "person_pin_circle",
      iconWrapperClassName: "bg-tertiary-container/10 text-tertiary",
      noteText: "42 đang hoạt động",
      noteToneClassName: "text-on-surface-variant",
    },
    {
      id: "system-health",
      label: "Tình trạng hệ thống",
      value: "99.9%",
      iconName: "check_circle",
      iconWrapperClassName: "bg-green-50 text-green-700",
      noteText: "Ổn định",
      noteToneClassName:
        "text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-full uppercase",
    },
  ];

  const moderatorAlerts: ModeratorAlertItem[] = [
    {
      id: "alert-1",
      reviewerName: "Sarah Jenkins",
      tripCode: "Chuyến #492",
      excerpt: '"Hướng dẫn viên không xuất hiện tại điểm hẹn và..."',
      severityLabel: "NGHIÊM TRỌNG: CẢM XÚC 0.12",
      severityClassName:
        "bg-error/20 text-error-container border border-error/30",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCNOPOnyfnXvlYNDVTDJ42m-sy0M4oGkM8pZzUkFBg7aR7gBFhpR_b0yOGU4i1DA9n7OnQtsOI49hQiTs6oYycqvvbxwVB75Wdxv1mPfptrjtaCvEqZjeGZ5rNDyzk5ndLKUbv72fLYbaG6oT9gPrhpNaalJq5sRnPVCFHgDHJQ1gnU-CIgGFTNs_Nd-GnqSYKex3Exu74E-zLogn2lGAiuWG_kzPhPgVEkYjDPm7LJZ09oULmym2EiFyRHJvuejJznC8bkU004sww",
      avatarBorderClassName: "border-error",
      actionLabel: "Xử lý ngay",
    },
    {
      id: "alert-2",
      reviewerName: "David Chen",
      tripCode: "Chuyến #311",
      excerpt: '"Phương tiện quá chật và điều hòa bị hỏng giữa chặng..."',
      severityLabel: "CẢNH BÁO: CẢM XÚC 0.38",
      severityClassName:
        "bg-orange-400/20 text-orange-200 border border-orange-400/30",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBLqj6DTJjT51ff_h96kOaLuEtFDSSY2czuFIVPrixT2uzMVEs6ObMIYXMLtZ1WH1aGIJr7NE9tV6vtHPtQy-0U73T-NIeym01c_gq9mNoUL1HwnxLxnwZ2or52XG8OPEpviCYBfZeLf25vb7LU8GdJ4T2z4r5qCS22Kp7pOyDhRo-EVnaQwrq3QWfPHuzWm9qFrmpd4HP4eutoHvCARQkSTVKDYBBrTjg3q_yA0qRUHd4WHUDJmvgQ0Kzg6RhXqCqq2CMdW8SarU8",
      avatarBorderClassName: "border-orange-400",
      actionLabel: "Xem chi tiết",
    },
  ];

  const departures: InventoryDepartureItem[] = [
    {
      id: "departure-1",
      title: "Thám hiểm sông băng Iceland",
      seatStatus: "2/14 chỗ",
      ratioWidthPercent: 85.7,
      ratioClassName: "bg-primary",
      noteText: "Bán nhanh • Còn 48h trước khởi hành",
      noteClassName: "text-error",
    },
    {
      id: "departure-2",
      title: "Nghỉ dưỡng cao cấp bờ biển Amalfi",
      seatStatus: "8/12 chỗ",
      ratioWidthPercent: 66.6,
      ratioClassName: "bg-secondary-container",
      noteText: "Ổn định • Còn 5 ngày trước khởi hành",
      noteClassName: "text-on-surface-variant",
    },
    {
      id: "departure-3",
      title: "Tour hoa anh đào Kyoto",
      seatStatus: "20/20 chỗ",
      ratioWidthPercent: 100,
      ratioClassName: "bg-green-500",
      noteText: "Kín chỗ • Còn 12 ngày trước khởi hành",
      noteClassName: "text-green-600",
    },
  ];

  const activities: ActivityRow[] = [
    {
      id: "act-1",
      initials: "EJ",
      initialsClassName: "bg-primary-fixed text-primary",
      customerName: "Elena Jacobs",
      destination: "Paris nghệ thuật & ẩm thực",
      timeLabel: "24 Th10, 09:42",
      statusLabel: "ĐÃ THANH TOÁN",
      statusClassName: "bg-green-100 text-green-700",
      amount: "$2,450",
    },
    {
      id: "act-2",
      initials: "MK",
      initialsClassName: "bg-secondary-fixed text-secondary",
      customerName: "Marcus King",
      destination: "Safari hoang dã Kenya",
      timeLabel: "24 Th10, 08:15",
      statusLabel: "CHỜ XỬ LÝ",
      statusClassName: "bg-blue-100 text-blue-700",
      amount: "$4,890",
    },
    {
      id: "act-3",
      initials: "SR",
      initialsClassName: "bg-tertiary-fixed text-tertiary",
      customerName: "Sofia Rodriguez",
      destination: "Trekking Machu Picchu",
      timeLabel: "24 Th10, 07:30",
      statusLabel: "ĐÃ THANH TOÁN",
      statusClassName: "bg-green-100 text-green-700",
      amount: "$3,120",
    },
  ];

  const guides: GuideStatusItem[] = [
    {
      id: "guide-1",
      name: "Emma Wilson",
      statusText: "Đang di chuyển: Tour thành phố Rome",
      statusDotClassName: "bg-green-500",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBLtgTYarxVuhLOYR8WCvQylcjEaUvybYzVNSoRQ5DwL29TANhIo2nKx85KubvG-aC9ATJTH5NHoLjty_rpboLc0vo1mpgVbSNQpxe0ZCCXIBLvVxt0BL9MhR8ri_nC1-I6Y47VmxC8_JPnTLomcBUKyEpfgNcTygPZmHibXWFq93RoEQxirn3iYvy-IPLG1kvyytTJmc2sXTO2UhQz3tiwl_n_ZObaOblrezc8-PAMGP3Uw2fMkWXrEOJz4hd2BNyBOFHUlAUXzUc",
    },
    {
      id: "guide-2",
      name: "Julian Pearce",
      statusText: "Nghỉ ngơi (Trực)",
      statusDotClassName: "bg-orange-500",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC1J8Hmf7zJ8cezdpohyUMY1iczZWRuyKcAC624mnHFvIzm2fE3M-JmwwLuQSU5QMQQOAsTlhgquC5fcbl1CurnPrEL_jyHUMPfhEk0PShIln9Og9jR8V-XPWwzoXKkiA1yOgfyjroIXTlQvdzurgrTSqFfGYXIsZFsYLpk26dVw93aKbIa9hMZvz3lxZQb-v4-WOAhdhBoxuh8We08cwiJIsCW4pR_M1M8Dxd4qHqeQeAxGT_j-ilsYsGu5L6npYorbUR2Tks9ZG4",
    },
    {
      id: "guide-3",
      name: "Liam Foster",
      statusText: "Họp nhanh: Chuẩn bị Safari",
      statusDotClassName: "bg-green-500",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDnk7YEuUrMvK6Wy3gpZFGF8TY38jsKYsQJy_k-0WdxwWUj2UCqBIS0Jvz1Nso7vf6Wa8xTMR2x6umIW1vXJ_PwX_40W8DXoLo9QvkNaKgGn7OBFkHtbcMM2ZXqtwKMD68zVvOcis67GwatCcTcLl8LGhzE8bcet_tQStu99AS8femQnw5St-dW4L6w1dF8TyBUa8t6Wljs3zuFm6nUrlxmkz34JeanR2FVrg0rmQ2cM-1JVyuM3TQYe4jdRnLCk2V0ZmWEWD5G8gM",
    },
  ];

  return {
    metrics,
    moderatorAlerts,
    departures,
    activities,
    guides,
  };
}
