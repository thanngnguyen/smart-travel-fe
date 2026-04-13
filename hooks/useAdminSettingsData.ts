import {
  ApiCredentialItem,
  BusinessInfo,
  RbacRoleRow,
  SettingsActivityItem,
} from "@/types/admin-settings";

export function useAdminSettingsData() {
  const businessInfo: BusinessInfo = {
    organizationName: "Smart Travel Management Systems Ltd.",
    contactEmail: "admin@stms-travel.com",
    headquartersAddress: "124 Luxury Way, Floor 4, Zurich, Switzerland",
  };

  const apiCredentials: ApiCredentialItem[] = [
    {
      id: "stripe-live-key",
      label: "Khóa Stripe môi trường thật",
      value: "pk_live_51Mxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      actionLabel: "Xoay vòng khóa",
    },
    {
      id: "webhook-secret",
      label: "Bí mật webhook",
      value: "whsec_******************************",
      actionLabel: "Kiểm tra endpoint",
      isMasked: true,
    },
  ];

  const rbacRoles: RbacRoleRow[] = [
    {
      id: "senior-admin",
      roleName: "Quản trị viên cấp cao",
      scope: "Toàn quyền hệ thống",
      userCount: "2",
    },
    {
      id: "concierge-lead",
      roleName: "Trưởng nhóm Concierge",
      scope: "Đặt chỗ & tồn kho",
      userCount: "14",
    },
    {
      id: "finance-auditor",
      roleName: "Kiểm toán tài chính",
      scope: "Thanh toán & báo cáo",
      userCount: "4",
    },
  ];

  const recentActivities: SettingsActivityItem[] = [
    {
      id: "act-1",
      actor: "Admin (Sarah J.)",
      description: "Đã cập nhật khóa bí mật Stripe API môi trường thật",
      timestamp: "2 giờ trước",
      dotClassName: "bg-primary",
    },
    {
      id: "act-2",
      actor: "AI hệ thống",
      description: "Tự hiệu chỉnh ngưỡng do lưu lượng cao",
      timestamp: "6 giờ trước",
      dotClassName: "bg-tertiary",
    },
    {
      id: "act-3",
      actor: "Trưởng bộ phận kiểm toán",
      description: "Đã chỉnh phạm vi vai trò cho 'Kiểm toán tài chính'",
      timestamp: "Hôm qua",
      dotClassName: "bg-primary",
    },
  ];

  return {
    businessInfo,
    apiCredentials,
    rbacRoles,
    recentActivities,
    aiThresholdLabel: "82% (Cao)",
    aiThresholdPercent: 82,
  };
}
