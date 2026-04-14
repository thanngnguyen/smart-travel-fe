"use client";

import { useMemo, useState } from "react";
import {
  PersonnelActionLog,
  PersonnelFilterOption,
  PersonnelFlashMessage,
  PersonnelMember,
  PersonnelMetrics,
  PersonnelRequestItem,
  PersonnelRole,
  PersonnelRoleBreakdownItem,
  PersonnelStatus,
  PersonnelWorkloadAlertItem,
} from "@/types/admin-personnel";

const ROLE_LABELS: Record<PersonnelRole, string> = {
  admin: "Quản trị hệ thống",
  guide: "Hướng dẫn viên",
  operator: "Điều phối vận hành",
  support: "Hỗ trợ khách hàng",
};

const STATUS_LABELS: Record<PersonnelStatus, string> = {
  active: "Đang làm việc",
  "on-tour": "Đang dẫn tour",
  "off-duty": "Trực chờ",
  "on-leave": "Nghỉ phép",
  suspended: "Tạm khóa",
};

const BASE_ROLE_FILTERS: PersonnelFilterOption[] = [
  { id: "all", label: "Tất cả vai trò" },
  { id: "admin", label: "Admin" },
  { id: "guide", label: "Hướng dẫn viên" },
  { id: "operator", label: "Điều phối" },
  { id: "support", label: "Hỗ trợ" },
];

const BASE_STATUS_FILTERS: PersonnelFilterOption[] = [
  { id: "all", label: "Tất cả trạng thái" },
  { id: "active", label: "Đang làm việc" },
  { id: "on-tour", label: "Đang dẫn tour" },
  { id: "off-duty", label: "Trực chờ" },
  { id: "on-leave", label: "Nghỉ phép" },
  { id: "suspended", label: "Tạm khóa" },
];

const INITIAL_MEMBERS: PersonnelMember[] = [
  {
    id: "staff-001",
    fullName: "Nguyễn Hải Nam",
    staffCode: "HR-001",
    role: "admin",
    roleLabel: "Quản trị hệ thống",
    department: "Khối công nghệ",
    email: "hainam@stms.vn",
    phone: "+84 912 003 114",
    joinedDate: "07 Th01, 2022",
    status: "active",
    statusLabel: "Đang làm việc",
    avatarType: "initials",
    avatarInitials: "HN",
    avatarToneClassName: "bg-indigo-100 text-indigo-700",
    certifications: ["ISO 27001", "AWS Security"],
    languages: ["Tiếng Việt", "English"],
    assignedTours: 0,
    monthlyWorkloadDays: 18,
    monthlyWorkloadLimit: 24,
    performanceScore: 96,
    lastActiveAt: "14:02 - 14/04/2026",
  },
  {
    id: "staff-002",
    fullName: "Linh Hoàng",
    staffCode: "GD-021",
    role: "guide",
    roleLabel: "Hướng dẫn viên",
    department: "Khối điều hành tour",
    email: "linh.hoang@stms.vn",
    phone: "+84 903 998 125",
    joinedDate: "21 Th05, 2023",
    status: "on-tour",
    statusLabel: "Đang dẫn tour",
    avatarType: "image",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    certifications: ["First Aid", "Adventure Lead"],
    languages: ["Tiếng Việt", "English", "日本語"],
    assignedTours: 7,
    monthlyWorkloadDays: 22,
    monthlyWorkloadLimit: 24,
    performanceScore: 93,
    lastActiveAt: "13:48 - 14/04/2026",
  },
  {
    id: "staff-003",
    fullName: "Anna Suzuki",
    staffCode: "GD-077",
    role: "guide",
    roleLabel: "Hướng dẫn viên",
    department: "Khối điều hành tour",
    email: "anna.suzuki@stms.vn",
    phone: "+81 90 2222 8712",
    joinedDate: "14 Th09, 2024",
    status: "active",
    statusLabel: "Đang làm việc",
    avatarType: "initials",
    avatarInitials: "AS",
    avatarToneClassName: "bg-sky-100 text-sky-700",
    certifications: ["Culture Specialist"],
    languages: ["English", "日本語"],
    assignedTours: 4,
    monthlyWorkloadDays: 17,
    monthlyWorkloadLimit: 22,
    performanceScore: 90,
    lastActiveAt: "11:06 - 14/04/2026",
  },
  {
    id: "staff-004",
    fullName: "Trần Minh Khoa",
    staffCode: "OP-013",
    role: "operator",
    roleLabel: "Điều phối vận hành",
    department: "Trung tâm điều phối",
    email: "khoa.tran@stms.vn",
    phone: "+84 908 447 320",
    joinedDate: "03 Th03, 2023",
    status: "off-duty",
    statusLabel: "Trực chờ",
    avatarType: "initials",
    avatarInitials: "MK",
    avatarToneClassName: "bg-emerald-100 text-emerald-700",
    certifications: ["Dispatch Coordination"],
    languages: ["Tiếng Việt", "English"],
    assignedTours: 0,
    monthlyWorkloadDays: 15,
    monthlyWorkloadLimit: 24,
    performanceScore: 88,
    lastActiveAt: "09:26 - 14/04/2026",
  },
  {
    id: "staff-005",
    fullName: "Phạm Hạ Vy",
    staffCode: "CS-031",
    role: "support",
    roleLabel: "Hỗ trợ khách hàng",
    department: "Customer Success",
    email: "havy.pham@stms.vn",
    phone: "+84 983 115 781",
    joinedDate: "26 Th11, 2023",
    status: "active",
    statusLabel: "Đang làm việc",
    avatarType: "initials",
    avatarInitials: "HV",
    avatarToneClassName: "bg-amber-100 text-amber-700",
    certifications: ["Customer Retention"],
    languages: ["Tiếng Việt", "English"],
    assignedTours: 0,
    monthlyWorkloadDays: 20,
    monthlyWorkloadLimit: 24,
    performanceScore: 91,
    lastActiveAt: "13:12 - 14/04/2026",
  },
  {
    id: "staff-006",
    fullName: "Marc Delaney",
    staffCode: "GD-055",
    role: "guide",
    roleLabel: "Hướng dẫn viên",
    department: "Khối điều hành tour",
    email: "marc.delaney@stms.vn",
    phone: "+33 6 12 40 88 54",
    joinedDate: "18 Th08, 2022",
    status: "on-leave",
    statusLabel: "Nghỉ phép",
    avatarType: "image",
    avatarUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    certifications: ["Wildlife Expert", "First Aid"],
    languages: ["English", "Français"],
    assignedTours: 8,
    monthlyWorkloadDays: 10,
    monthlyWorkloadLimit: 24,
    performanceScore: 89,
    lastActiveAt: "08:45 - 13/04/2026",
  },
  {
    id: "staff-007",
    fullName: "Vũ Thanh Thảo",
    staffCode: "GD-099",
    role: "guide",
    roleLabel: "Hướng dẫn viên",
    department: "Khối điều hành tour",
    email: "thao.vu@stms.vn",
    phone: "+84 934 228 190",
    joinedDate: "30 Th10, 2025",
    status: "suspended",
    statusLabel: "Tạm khóa",
    avatarType: "initials",
    avatarInitials: "TT",
    avatarToneClassName: "bg-rose-100 text-rose-700",
    certifications: ["Marine Guide"],
    languages: ["Tiếng Việt", "English"],
    assignedTours: 2,
    monthlyWorkloadDays: 5,
    monthlyWorkloadLimit: 22,
    performanceScore: 71,
    lastActiveAt: "16:20 - 09/04/2026",
  },
];

const INITIAL_REQUESTS: PersonnelRequestItem[] = [
  {
    id: "req-001",
    memberId: "staff-003",
    memberName: "Anna Suzuki",
    memberRoleLabel: "Hướng dẫn viên",
    type: "leave",
    typeLabel: "Xin nghỉ phép",
    requestedAt: "09:20 - 14/04/2026",
    note: "Xin nghỉ phép 2 ngày để xử lý việc cá nhân.",
    status: "pending",
  },
  {
    id: "req-002",
    memberId: "staff-004",
    memberName: "Trần Minh Khoa",
    memberRoleLabel: "Điều phối vận hành",
    type: "access",
    typeLabel: "Mở rộng quyền hệ thống",
    requestedAt: "10:12 - 14/04/2026",
    note: "Cần quyền cập nhật lịch điều phối cho các đoàn quốc tế.",
    status: "pending",
  },
  {
    id: "req-003",
    memberId: "staff-005",
    memberName: "Phạm Hạ Vy",
    memberRoleLabel: "Hỗ trợ khách hàng",
    type: "training",
    typeLabel: "Đăng ký đào tạo",
    requestedAt: "11:08 - 14/04/2026",
    note: "Đề xuất khóa đào tạo xử lý khách hàng high-value.",
    status: "pending",
  },
  {
    id: "req-004",
    memberId: "staff-007",
    memberName: "Vũ Thanh Thảo",
    memberRoleLabel: "Hướng dẫn viên",
    type: "availability",
    typeLabel: "Xin khôi phục lịch làm việc",
    requestedAt: "15:24 - 13/04/2026",
    note: "Đã hoàn thành buổi đánh giá nội bộ, đề nghị mở lịch.",
    status: "pending",
  },
];

function normalizeSearchValue(value: string) {
  return value
    .toLocaleLowerCase("vi")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function withStatus(
  member: PersonnelMember,
  status: PersonnelStatus,
): PersonnelMember {
  return {
    ...member,
    status,
    statusLabel: STATUS_LABELS[status],
  };
}

function createActionLog(title: string, message: string): PersonnelActionLog {
  return {
    id: `log-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    title,
    message,
    createdAt: new Date().toLocaleString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
    }),
  };
}

export function useAdminPersonnelData() {
  const [members, setMembers] = useState(INITIAL_MEMBERS);
  const [requests, setRequests] = useState(INITIAL_REQUESTS);
  const [actionLogs, setActionLogs] = useState<PersonnelActionLog[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeRoleFilter, setActiveRoleFilter] = useState("all");
  const [activeStatusFilter, setActiveStatusFilter] = useState("all");
  const [selectedMemberId, setSelectedMemberId] = useState(
    INITIAL_MEMBERS[0]?.id ?? "",
  );
  const [flashMessage, setFlashMessage] =
    useState<PersonnelFlashMessage | null>(null);

  const roleFilters = useMemo(
    () =>
      BASE_ROLE_FILTERS.map((item) => ({
        ...item,
        isActive: item.id === activeRoleFilter,
      })),
    [activeRoleFilter],
  );

  const statusFilters = useMemo(
    () =>
      BASE_STATUS_FILTERS.map((item) => ({
        ...item,
        isActive: item.id === activeStatusFilter,
      })),
    [activeStatusFilter],
  );

  const filteredMembers = useMemo(() => {
    const normalizedQuery = normalizeSearchValue(searchQuery.trim());

    return members.filter((member) => {
      const matchRole =
        activeRoleFilter === "all" || member.role === activeRoleFilter;
      const matchStatus =
        activeStatusFilter === "all" || member.status === activeStatusFilter;

      if (!matchRole || !matchStatus) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const searchable = normalizeSearchValue(
        `${member.fullName} ${member.staffCode} ${member.email} ${member.department}`,
      );

      return searchable.includes(normalizedQuery);
    });
  }, [members, searchQuery, activeRoleFilter, activeStatusFilter]);

  const selectedMember = useMemo(() => {
    if (!filteredMembers.length) {
      return null;
    }

    return (
      filteredMembers.find((member) => member.id === selectedMemberId) ??
      filteredMembers[0]
    );
  }, [filteredMembers, selectedMemberId]);

  const pendingRequests = useMemo(
    () => requests.filter((request) => request.status === "pending"),
    [requests],
  );

  const metrics = useMemo<PersonnelMetrics>(() => {
    return {
      totalHeadcount: members.length,
      activeHeadcount: members.filter((member) =>
        ["active", "on-tour", "off-duty"].includes(member.status),
      ).length,
      guidesOnTour: members.filter(
        (member) => member.role === "guide" && member.status === "on-tour",
      ).length,
      onLeaveCount: members.filter((member) => member.status === "on-leave")
        .length,
      suspendedCount: members.filter((member) => member.status === "suspended")
        .length,
      pendingRequests: pendingRequests.length,
    };
  }, [members, pendingRequests.length]);

  const roleBreakdown = useMemo<PersonnelRoleBreakdownItem[]>(() => {
    const roleIds: PersonnelRole[] = ["admin", "guide", "operator", "support"];

    return roleIds.map((roleId) => ({
      id: roleId,
      label: ROLE_LABELS[roleId],
      count: members.filter((member) => member.role === roleId).length,
    }));
  }, [members]);

  const workloadAlerts = useMemo<PersonnelWorkloadAlertItem[]>(() => {
    return members
      .map((member) => {
        const ratioPercent = Math.round(
          (member.monthlyWorkloadDays / member.monthlyWorkloadLimit) * 100,
        );

        return {
          memberId: member.id,
          memberName: member.fullName,
          ratioPercent,
          statusLabel: member.statusLabel,
        };
      })
      .filter((item) => item.ratioPercent >= 85)
      .sort((left, right) => right.ratioPercent - left.ratioPercent)
      .slice(0, 4);
  }, [members]);

  const pushLog = (title: string, message: string) => {
    setActionLogs((previous) =>
      [createActionLog(title, message), ...previous].slice(0, 8),
    );
  };

  const toggleLeaveStatus = (memberId: string) => {
    const targetMember = members.find((member) => member.id === memberId);

    if (!targetMember) {
      return;
    }

    if (targetMember.status === "suspended") {
      setFlashMessage({
        tone: "error",
        text: `Không thể chuyển nghỉ phép vì ${targetMember.fullName} đang bị tạm khóa.`,
      });
      return;
    }

    const nextStatus: PersonnelStatus =
      targetMember.status === "on-leave" ? "active" : "on-leave";

    setMembers((previous) =>
      previous.map((member) =>
        member.id === memberId ? withStatus(member, nextStatus) : member,
      ),
    );

    pushLog(
      "Cập nhật trạng thái nhân sự",
      `${targetMember.fullName} -> ${STATUS_LABELS[nextStatus]}.`,
    );
    setFlashMessage({
      tone: "success",
      text: `Đã cập nhật trạng thái của ${targetMember.fullName}.`,
    });
  };

  const toggleSuspendStatus = (memberId: string) => {
    const targetMember = members.find((member) => member.id === memberId);

    if (!targetMember) {
      return;
    }

    const nextStatus: PersonnelStatus =
      targetMember.status === "suspended" ? "active" : "suspended";

    setMembers((previous) =>
      previous.map((member) =>
        member.id === memberId ? withStatus(member, nextStatus) : member,
      ),
    );

    pushLog(
      nextStatus === "suspended" ? "Tạm khóa tài khoản" : "Mở khóa tài khoản",
      `${targetMember.fullName} -> ${STATUS_LABELS[nextStatus]}.`,
    );
    setFlashMessage({
      tone: nextStatus === "suspended" ? "error" : "success",
      text:
        nextStatus === "suspended"
          ? `Đã tạm khóa tài khoản của ${targetMember.fullName}.`
          : `Đã mở khóa tài khoản của ${targetMember.fullName}.`,
    });
  };

  const assignEmergencyTour = (memberId: string) => {
    const targetMember = members.find((member) => member.id === memberId);

    if (!targetMember) {
      return;
    }

    if (!["guide", "operator"].includes(targetMember.role)) {
      setFlashMessage({
        tone: "error",
        text: `Nhân sự ${targetMember.fullName} không thuộc nhóm điều phối tour.`,
      });
      return;
    }

    if (["suspended", "on-leave"].includes(targetMember.status)) {
      setFlashMessage({
        tone: "error",
        text: `Không thể gán tour vì ${targetMember.fullName} hiện không sẵn sàng làm việc.`,
      });
      return;
    }

    setMembers((previous) =>
      previous.map((member) => {
        if (member.id !== memberId) {
          return member;
        }

        return {
          ...withStatus(member, "on-tour"),
          assignedTours: member.assignedTours + 1,
          monthlyWorkloadDays: Math.min(
            member.monthlyWorkloadDays + 3,
            member.monthlyWorkloadLimit,
          ),
        };
      }),
    );

    pushLog(
      "Gán tour khẩn",
      `Đã gán thêm nhiệm vụ điều phối khẩn cho ${targetMember.fullName}.`,
    );
    setFlashMessage({
      tone: "info",
      text: `Đã gán tour khẩn cho ${targetMember.fullName}.`,
    });
  };

  const promoteToAdmin = (memberId: string) => {
    const targetMember = members.find((member) => member.id === memberId);

    if (!targetMember) {
      return;
    }

    if (targetMember.role === "admin") {
      setFlashMessage({
        tone: "info",
        text: `${targetMember.fullName} đã thuộc nhóm admin.`,
      });
      return;
    }

    setMembers((previous) =>
      previous.map((member) =>
        member.id === memberId
          ? {
              ...member,
              role: "admin",
              roleLabel: ROLE_LABELS.admin,
              department: "Khối điều hành",
            }
          : member,
      ),
    );

    pushLog("Nâng quyền", `Đã nâng quyền admin cho ${targetMember.fullName}.`);
    setFlashMessage({
      tone: "success",
      text: `Đã nâng quyền admin cho ${targetMember.fullName}.`,
    });
  };

  const resolveRequest = (
    requestId: string,
    resolution: "approved" | "rejected",
  ) => {
    const targetRequest = requests.find((request) => request.id === requestId);

    if (!targetRequest || targetRequest.status !== "pending") {
      return;
    }

    setRequests((previous) =>
      previous.map((request) =>
        request.id === requestId ? { ...request, status: resolution } : request,
      ),
    );

    if (resolution === "approved") {
      setMembers((previous) =>
        previous.map((member) => {
          if (member.id !== targetRequest.memberId) {
            return member;
          }

          if (targetRequest.type === "leave") {
            return withStatus(member, "on-leave");
          }

          if (targetRequest.type === "availability") {
            return withStatus(member, "active");
          }

          return member;
        }),
      );
    }

    pushLog(
      resolution === "approved"
        ? "Duyệt yêu cầu nhân sự"
        : "Từ chối yêu cầu nhân sự",
      `${targetRequest.memberName} - ${targetRequest.typeLabel}.`,
    );

    setFlashMessage({
      tone: resolution === "approved" ? "success" : "info",
      text:
        resolution === "approved"
          ? `Đã duyệt yêu cầu: ${targetRequest.typeLabel}.`
          : `Đã từ chối yêu cầu: ${targetRequest.typeLabel}.`,
    });
  };

  return {
    members,
    filteredMembers,
    selectedMember,
    selectedMemberId,
    setSelectedMemberId,
    searchQuery,
    setSearchQuery,
    roleFilters,
    statusFilters,
    setActiveRoleFilter,
    setActiveStatusFilter,
    metrics,
    roleBreakdown,
    workloadAlerts,
    pendingRequests,
    actionLogs,
    flashMessage,
    clearFlashMessage: () => setFlashMessage(null),
    toggleLeaveStatus,
    toggleSuspendStatus,
    assignEmergencyTour,
    promoteToAdmin,
    resolveRequest,
  };
}
