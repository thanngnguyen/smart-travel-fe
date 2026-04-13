import {
  AdminUserRow,
  UserFilterTab,
  UserGrowthData,
  UsersPagination,
} from "@/types/admin-users";

export function useAdminUsersData() {
  const filterTabs: UserFilterTab[] = [
    { id: "all", label: "Tất cả vai trò", isActive: true },
    { id: "admin", label: "Quản trị viên" },
    { id: "guide", label: "Hướng dẫn viên" },
    { id: "customer", label: "Khách hàng" },
  ];

  const users: AdminUserRow[] = [
    {
      id: "stms-9021",
      name: "Alexander Hamilton",
      userCode: "ID: STMS-9021",
      email: "ahamilton@stms-travel.com",
      avatarType: "initials",
      avatarInitials: "AH",
      avatarToneClassName: "bg-blue-100 text-primary",
      roleLabel: "Quản trị viên",
      roleTone: "primary",
      statusLabel: "Hoạt động",
      statusDotClassName: "bg-emerald-500",
      joinedDate: "12 Th10, 2023",
    },
    {
      id: "stms-4421",
      name: "Elena Rodriguez",
      userCode: "ID: STMS-4421",
      email: "e.rodriguez@guidehub.org",
      avatarType: "image",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCxOqalHokk0yW26mNUctuDFnj3GQCxT7LBW1R4KUXf_d0wMeF_kEhDABVSxWm8tm-7du0a9iHt_zOgJZO5KYE6blCpR5QdiMzzUpXkQ1qp5Watz6i-0034BXO3LVs0DtDSLeWt1INimfuunQl42ndFrQ43Qe5uLK3UCKe6xQKpGqJED8SOARjqhRfH5llbTr5gt7wkqXCCUw2u0ZbtwG5m-21X8msij2-NghCNzOW1c4KmUtNs0dCFluxdex5RoxNqI0iue1BWl3Q",
      roleLabel: "Hướng dẫn viên",
      roleTone: "warning",
      statusLabel: "Chờ xử lý",
      statusDotClassName: "bg-blue-400",
      joinedDate: "04 Th11, 2023",
    },
  ];

  const growthBars: UserGrowthData[] = [
    { id: "bar-1", barHeightPercent: 40 },
    { id: "bar-2", barHeightPercent: 60 },
    { id: "bar-3", barHeightPercent: 45 },
    { id: "bar-4", barHeightPercent: 75 },
    { id: "bar-5", barHeightPercent: 100 },
  ];

  const pagination: UsersPagination = {
    summaryLabel: "Hiển thị 1 đến 4 trong tổng 1,240 người dùng",
    currentPage: 1,
    pages: [1, 2],
  };

  return {
    filterTabs,
    users,
    growthBars,
    pagination,
    totalActiveUsers: "1,240",
    growthDescription:
      'Tệp người dùng của bạn đã tăng 12.5% this month. Phần lớn lượt đăng ký mới chọn gói "Nhà thám hiểm".',
    securityDescription:
      "3 người dùng đã bị AI gắn cờ vì mẫu đăng nhập bất thường từ nhiều vị trí địa lý.",
  };
}
