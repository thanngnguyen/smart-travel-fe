import {
  ConversionChannel,
  FillRateBar,
  GuideUtilization,
  ReportFooterLink,
  ReportLogRow,
  RevenueCategoryBar,
} from "@/types/admin-reports";

export function useAdminReportsData() {
  const categoryBars: RevenueCategoryBar[] = [
    {
      id: "europe",
      label: "Châu Âu",
      currentHeightPercent: 85,
      previousHeightPercent: 40,
    },
    {
      id: "asia",
      label: "Châu Á",
      currentHeightPercent: 65,
      previousHeightPercent: 55,
    },
    {
      id: "america",
      label: "Châu Mỹ",
      currentHeightPercent: 95,
      previousHeightPercent: 70,
    },
    {
      id: "africa",
      label: "Châu Phi",
      currentHeightPercent: 45,
      previousHeightPercent: 35,
    },
    {
      id: "oceania",
      label: "Châu Đại Dương",
      currentHeightPercent: 75,
      previousHeightPercent: 60,
    },
  ];

  const conversionChannels: ConversionChannel[] = [
    {
      id: "direct",
      label: "Tìm kiếm trực tiếp",
      valuePercent: 72,
      barClassName: "bg-primary",
    },
    {
      id: "concierge",
      label: "Giới thiệu từ Concierge",
      valuePercent: 45,
      barClassName: "bg-secondary-container",
    },
  ];

  const guideUtilization: GuideUtilization[] = [
    {
      id: "guide-1",
      name: "Marco Rossi",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAiLgk9ET5zzJv8y37VI6RmCqN93ZZjQI3b1xOS1VvI9anWK4Ia1VcT-h4DnBtpJzZhoKbXLtWNT-_zhYu7m3EouECYPE3dbr3n1AyosD_AVzwbXlyIAy2vKJPGgK0XRFSahCZL6XgS10U9ji3cuJBoYED8GG6j37hYiCBTH7_pqWIgUSaEuZzZ-HFwHSEsOvI7XHXgYU2-JbIwK3fmuuIA-Kj3lDraqXrX6xiRsQz5WPqg9wH9f5QwV7PJ7WTLXhkr6Z9O3GpNIgk",
      percent: 94,
    },
    {
      id: "guide-2",
      name: "Elena Vance",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD94ImF41HUbHtg-RkrNlwzQzXQwak06oHqUP1R8C6ZJxhw-TeQMChi1wFjye_eGgpPPvI0eHpJe89cYMBXpi6wMNSEMAYHdlETkySZjrjB2YeV8XmjX4JF7EV75Zl_PiJSh7ozwEyx7kAeF45liLocEGNIrTwnfSw29zN4wq-oE7UkCZ-8Hjh11KzNOyH3u-ohThZqUhKOdO_EEUB5rjCAGtOzDyhz3KjuMAdelzTFjIFcjyOCCwK6eJ814dnQ8wOuAgIZWs71ryc",
      percent: 88,
    },
    {
      id: "guide-3",
      name: "Kai Chen",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuArqnZFVV6n4E6rgjFjOL0Xzz55ji7n1Y_doyD6Hbzle-xX5IJr95Ij53GBDCLys8WCpkKXBa7ovbedUbcR721haUUr79oMjeN367xOl-ezHi0gXo8I7zBtCz17325WkZJvilvFm7rdXbxD12aDG6wLbVXr7oCY5p8uSxkVBsftHcZa16o8-FfNhjZmdHh3-J4ucYjQmSY6VzFQy1lNIKLcC0q1YmrdIJDaOtxSPfo4kjsrqh-a4Hor-c1FTwkMbbm8xxBkWC-OsHs",
      percent: 76,
    },
  ];

  const fillRateBars: FillRateBar[] = [
    {
      id: "bus",
      label: "Xe buýt",
      valuePercent: 40,
      toneClassName: "bg-primary/20",
    },
    {
      id: "suv",
      label: "SUV",
      valuePercent: 60,
      toneClassName: "bg-primary/40",
    },
    {
      id: "jet",
      label: "Phản lực",
      valuePercent: 85,
      toneClassName: "bg-primary/60",
    },
    {
      id: "cruise",
      label: "Du thuyền",
      valuePercent: 100,
      toneClassName: "bg-primary",
    },
  ];

  const logs: ReportLogRow[] = [
    {
      id: "log-1",
      code: "#TR-8821",
      tourName: "Kỳ nghỉ riêng bờ biển Amalfi",
      tourMeta: "Ý • 3 ngày",
      guideName: "Marco Rossi",
      capacity: "12/12",
      capacityDotClassName: "bg-green-500",
      statusLabel: "Đang diễn ra",
      statusClassName: "bg-primary/10 text-primary",
      revenue: "$24,500",
    },
    {
      id: "log-2",
      code: "#TR-8822",
      tourName: "Hành trình Thiền Kyoto",
      tourMeta: "Nhật Bản • 5 ngày",
      guideName: "Kai Chen",
      capacity: "08/10",
      capacityDotClassName: "bg-yellow-500",
      statusLabel: "Đã lên lịch",
      statusClassName: "bg-surface-container text-slate-500",
      revenue: "$18,200",
    },
    {
      id: "log-3",
      code: "#TR-8823",
      tourName: "Safari cao cấp Serengeti",
      tourMeta: "Tanzania • 7 ngày",
      guideName: "Elena Vance",
      capacity: "06/06",
      capacityDotClassName: "bg-green-500",
      statusLabel: "Cần xem xét",
      statusClassName: "bg-tertiary-container/10 text-tertiary",
      revenue: "$42,000",
    },
  ];

  const footerLinks: ReportFooterLink[] = [
    { id: "privacy", label: "Chính sách bảo mật", href: "#" },
    { id: "terms", label: "Điều khoản dịch vụ", href: "#" },
    { id: "support", label: "Trung tâm hỗ trợ", href: "#" },
    { id: "contact", label: "Liên hệ", href: "#" },
  ];

  return {
    categoryBars,
    conversionChannels,
    guideUtilization,
    fillRateBars,
    logs,
    footerLinks,
    totalRevenue: "$4,285,190",
    bookingAverage: "$12,405",
    margin: "28.4%",
    fillRateValue: "82%",
  };
}
