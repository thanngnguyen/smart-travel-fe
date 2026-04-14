"use client";

import { useMemo, useState } from "react";
import {
  AdminCustomerRow,
  CustomerFilterOption,
  CustomerFlashMessage,
  CustomerSegment,
  CustomerSegmentBar,
  CustomerStatus,
  CustomersPagination,
  CustomersSummaryMetrics,
} from "@/types/admin-customers";

const SEGMENT_LABELS: Record<CustomerSegment, string> = {
  vip: "VIP",
  standard: "Tiêu chuẩn",
  family: "Gia đình",
  corporate: "Doanh nghiệp",
};

const STATUS_LABELS: Record<CustomerStatus, string> = {
  active: "Đang hoạt động",
  dormant: "Ngủ đông",
  "at-risk": "Có rủi ro rời bỏ",
  blocked: "Đã khóa",
};

const BASE_SEGMENT_FILTERS: CustomerFilterOption[] = [
  { id: "all", label: "Tất cả phân khúc" },
  { id: "vip", label: "VIP" },
  { id: "family", label: "Gia đình" },
  { id: "corporate", label: "Doanh nghiệp" },
  { id: "standard", label: "Tiêu chuẩn" },
];

const BASE_STATUS_FILTERS: CustomerFilterOption[] = [
  { id: "all", label: "Tất cả trạng thái" },
  { id: "active", label: "Đang hoạt động" },
  { id: "dormant", label: "Ngủ đông" },
  { id: "at-risk", label: "Có rủi ro" },
  { id: "blocked", label: "Đã khóa" },
];

const INITIAL_CUSTOMERS: AdminCustomerRow[] = [
  {
    id: "cus-001",
    name: "Nguyễn Minh Anh",
    customerCode: "CUS-001",
    email: "minhanh.nguyen@email.com",
    phone: "+84 908 220 110",
    avatarType: "initials",
    avatarInitials: "MA",
    avatarToneClassName: "bg-blue-100 text-primary",
    segment: "vip",
    segmentLabel: "VIP",
    status: "active",
    statusLabel: "Đang hoạt động",
    joinedDate: "12 Th03, 2024",
    lastBookingDate: "05 Th04, 2026",
    totalTrips: 9,
    lifetimeValue: "412,000,000đ",
    assignedConcierge: "Linh Hoàng",
  },
  {
    id: "cus-002",
    name: "Tranessa Group",
    customerCode: "CUS-002",
    email: "travel@tranessa.vn",
    phone: "+84 28 3890 8822",
    avatarType: "initials",
    avatarInitials: "TG",
    avatarToneClassName: "bg-indigo-100 text-indigo-700",
    segment: "corporate",
    segmentLabel: "Doanh nghiệp",
    status: "active",
    statusLabel: "Đang hoạt động",
    joinedDate: "02 Th11, 2023",
    lastBookingDate: "09 Th04, 2026",
    totalTrips: 14,
    lifetimeValue: "1,128,000,000đ",
    assignedConcierge: "Kai Nguyen",
  },
  {
    id: "cus-003",
    name: "Lê Thị Ánh Dương",
    customerCode: "CUS-003",
    email: "anhduong.le@email.com",
    phone: "+84 936 114 676",
    avatarType: "image",
    avatarUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80",
    segment: "family",
    segmentLabel: "Gia đình",
    status: "dormant",
    statusLabel: "Ngủ đông",
    joinedDate: "19 Th07, 2024",
    lastBookingDate: "16 Th12, 2025",
    totalTrips: 3,
    lifetimeValue: "98,000,000đ",
    assignedConcierge: "An Trần",
  },
  {
    id: "cus-004",
    name: "Đặng Phúc Long",
    customerCode: "CUS-004",
    email: "long.dang@email.com",
    phone: "+84 913 907 448",
    avatarType: "initials",
    avatarInitials: "PL",
    avatarToneClassName: "bg-emerald-100 text-emerald-700",
    segment: "standard",
    segmentLabel: "Tiêu chuẩn",
    status: "at-risk",
    statusLabel: "Có rủi ro rời bỏ",
    joinedDate: "09 Th01, 2025",
    lastBookingDate: "25 Th01, 2026",
    totalTrips: 2,
    lifetimeValue: "52,000,000đ",
    assignedConcierge: "Hà Lê",
  },
  {
    id: "cus-005",
    name: "Mia Sullivan",
    customerCode: "CUS-005",
    email: "mia.sullivan@email.com",
    phone: "+1 202 776 1919",
    avatarType: "image",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    segment: "vip",
    segmentLabel: "VIP",
    status: "active",
    statusLabel: "Đang hoạt động",
    joinedDate: "18 Th08, 2023",
    lastBookingDate: "11 Th04, 2026",
    totalTrips: 11,
    lifetimeValue: "526,000,000đ",
    assignedConcierge: "Emma Vũ",
  },
  {
    id: "cus-006",
    name: "Ngô Hoàng Sơn",
    customerCode: "CUS-006",
    email: "hoangson.ngo@email.com",
    phone: "+84 967 440 523",
    avatarType: "initials",
    avatarInitials: "HS",
    avatarToneClassName: "bg-amber-100 text-amber-700",
    segment: "standard",
    segmentLabel: "Tiêu chuẩn",
    status: "blocked",
    statusLabel: "Đã khóa",
    joinedDate: "21 Th09, 2024",
    lastBookingDate: "03 Th02, 2026",
    totalTrips: 1,
    lifetimeValue: "28,000,000đ",
    assignedConcierge: "Minh Trần",
  },
];

function normalizeSearchValue(value: string) {
  return value
    .toLocaleLowerCase("vi")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function withSegment(
  customer: AdminCustomerRow,
  segment: CustomerSegment,
): AdminCustomerRow {
  return {
    ...customer,
    segment,
    segmentLabel: SEGMENT_LABELS[segment],
  };
}

function withStatus(
  customer: AdminCustomerRow,
  status: CustomerStatus,
): AdminCustomerRow {
  return {
    ...customer,
    status,
    statusLabel: STATUS_LABELS[status],
  };
}

export function useAdminCustomersData() {
  const [customers, setCustomers] = useState(INITIAL_CUSTOMERS);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSegmentFilter, setActiveSegmentFilter] = useState("all");
  const [activeStatusFilter, setActiveStatusFilter] = useState("all");
  const [selectedCustomerId, setSelectedCustomerId] = useState(
    INITIAL_CUSTOMERS[0]?.id ?? "",
  );
  const [flashMessage, setFlashMessage] = useState<CustomerFlashMessage | null>(
    null,
  );

  const segmentFilters = useMemo(
    () =>
      BASE_SEGMENT_FILTERS.map((item) => ({
        ...item,
        isActive: item.id === activeSegmentFilter,
      })),
    [activeSegmentFilter],
  );

  const statusFilters = useMemo(
    () =>
      BASE_STATUS_FILTERS.map((item) => ({
        ...item,
        isActive: item.id === activeStatusFilter,
      })),
    [activeStatusFilter],
  );

  const filteredCustomers = useMemo(() => {
    const normalizedQuery = normalizeSearchValue(searchQuery.trim());

    return customers.filter((customer) => {
      const matchSegment =
        activeSegmentFilter === "all" ||
        customer.segment === activeSegmentFilter;
      const matchStatus =
        activeStatusFilter === "all" || customer.status === activeStatusFilter;

      if (!matchSegment || !matchStatus) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const searchable = normalizeSearchValue(
        `${customer.name} ${customer.customerCode} ${customer.email} ${customer.assignedConcierge}`,
      );

      return searchable.includes(normalizedQuery);
    });
  }, [customers, searchQuery, activeSegmentFilter, activeStatusFilter]);

  const selectedCustomer = useMemo(() => {
    if (!filteredCustomers.length) {
      return null;
    }

    return (
      filteredCustomers.find(
        (customer) => customer.id === selectedCustomerId,
      ) ?? filteredCustomers[0]
    );
  }, [filteredCustomers, selectedCustomerId]);

  const metrics = useMemo<CustomersSummaryMetrics>(() => {
    return {
      totalCustomers: customers.length,
      activeCustomers: customers.filter((item) => item.status === "active")
        .length,
      vipCustomers: customers.filter((item) => item.segment === "vip").length,
      blockedCustomers: customers.filter((item) => item.status === "blocked")
        .length,
      atRiskCustomers: customers.filter((item) => item.status === "at-risk")
        .length,
    };
  }, [customers]);

  const segmentBars = useMemo<CustomerSegmentBar[]>(() => {
    const segmentIds: CustomerSegment[] = [
      "vip",
      "family",
      "corporate",
      "standard",
    ];
    const rawCounts = segmentIds.map((segment) => ({
      id: segment,
      label: SEGMENT_LABELS[segment],
      count: customers.filter((item) => item.segment === segment).length,
    }));

    const maxCount = Math.max(...rawCounts.map((item) => item.count), 1);

    return rawCounts.map((item) => ({
      id: item.id,
      label: item.label,
      barHeightPercent: Math.max(10, Math.round((item.count / maxCount) * 100)),
    }));
  }, [customers]);

  const pagination = useMemo<CustomersPagination>(() => {
    return {
      summaryLabel: `Hiển thị ${filteredCustomers.length} / ${customers.length} khách hàng`,
      currentPage: 1,
      pages: [1],
    };
  }, [filteredCustomers.length, customers.length]);

  const toggleVipTier = (customerId: string) => {
    const targetCustomer = customers.find((item) => item.id === customerId);

    if (!targetCustomer) {
      return;
    }

    const nextSegment: CustomerSegment =
      targetCustomer.segment === "vip" ? "standard" : "vip";

    setCustomers((previous) =>
      previous.map((item) =>
        item.id === customerId ? withSegment(item, nextSegment) : item,
      ),
    );

    setFlashMessage({
      tone: "success",
      text:
        nextSegment === "vip"
          ? `Đã nâng hạng VIP cho ${targetCustomer.name}.`
          : `Đã chuyển ${targetCustomer.name} về phân khúc tiêu chuẩn.`,
    });
  };

  const toggleCustomerBlock = (customerId: string) => {
    const targetCustomer = customers.find((item) => item.id === customerId);

    if (!targetCustomer) {
      return;
    }

    const nextStatus: CustomerStatus =
      targetCustomer.status === "blocked" ? "active" : "blocked";

    setCustomers((previous) =>
      previous.map((item) =>
        item.id === customerId ? withStatus(item, nextStatus) : item,
      ),
    );

    setFlashMessage({
      tone: nextStatus === "blocked" ? "error" : "success",
      text:
        nextStatus === "blocked"
          ? `Đã khóa tài khoản khách hàng ${targetCustomer.name}.`
          : `Đã mở khóa tài khoản khách hàng ${targetCustomer.name}.`,
    });
  };

  const markRetentionFollowUp = (customerId: string) => {
    const targetCustomer = customers.find((item) => item.id === customerId);

    if (!targetCustomer) {
      return;
    }

    setCustomers((previous) =>
      previous.map((item) =>
        item.id === customerId ? withStatus(item, "active") : item,
      ),
    );

    setFlashMessage({
      tone: "info",
      text: `Đã tạo tác vụ chăm sóc lại cho ${targetCustomer.name}.`,
    });
  };

  return {
    customers,
    filteredCustomers,
    selectedCustomer,
    selectedCustomerId,
    setSelectedCustomerId,
    searchQuery,
    setSearchQuery,
    segmentFilters,
    statusFilters,
    setActiveSegmentFilter,
    setActiveStatusFilter,
    metrics,
    segmentBars,
    pagination,
    flashMessage,
    clearFlashMessage: () => setFlashMessage(null),
    toggleVipTier,
    toggleCustomerBlock,
    markRetentionFollowUp,
  };
}
