import {
  TourChatAdminBroadcastType,
  TourChatAuditActionType,
  TourChatAuditLogEntry,
  TourChatChannelState,
  TourChatEnrollmentPayload,
  TourChatEnrollmentResult,
  TourChatGroup,
  TourChatParticipant,
} from "@/types/customer-tour-chat";

export const TOUR_CHAT_STORAGE_KEY = "stms-tour-chat-groups-v2";
export const TOUR_CHAT_AUDIT_STORAGE_KEY = "stms-tour-chat-audit-v1";
export const DEFAULT_TOUR_CHAT_GROUP_ID = "tour-halong-3n2d";

const DEFAULT_ADMIN: TourChatParticipant = {
  id: "admin-ly",
  name: "Trần Minh Lý",
  role: "admin",
  avatarUrl:
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=256&q=80",
  avatarAlt: "Chan dung admin quan ly kenh chat",
  isOnline: true,
};

const PARTICIPANT_AVATAR_POOL = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA9XOhXnG_zJdtCs-sTvC_C3ZQmotCWxsFdr1vM_wbINVgvrbHvP-9kn_he0FhIOubO4IWwFxaGT4UxcU9LZ_fWoPgg4367nqzZz5fp3jyqZYyTXnmjW0ryCqRsbxpuoN3K94QbqLd13jFaLhI0LV1UL4tZDKnX3ipi6oKgM5WUzMLE2SxCR2vmDqROt01e0YbyOyXzxiR2tjSfhfsbX0tDkQrSAyjXkT8l7LOX_YU1CEmBtiDWbvoCQKt7IS-JB3_WlNtTyWruzvA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD78AZ3lj5d6rqn-2384FYYDtrRcQRXCwMv95WHzXzUG2T19WAdbmt20C5BoCHjWYCE8X0ty_wKFHsjDUnv_QpkJKY8_21IpvQ4lobVPZ7ecFWUM_g0AmKyinjnq4UjfyDiwvKhK_1VyLHuX624iQx2DdK9Dp24QjR04_OwSms7vveTrcZ2oXV4dex6PWf1x_no0lXlGc7dC9Z9q6YPmTuA7Csq7pd6ros0jCBtZUXkfAzvI6BIBv5HZRz5mUyJ3pPkp_B_7grxrTo",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB00r_WPPfS6U6iio27EFVwQqVfGZu5--HgLJnwjX4X6P4oi8_Zoa3uczM9HSIuOUK2y2Ni2GIVxCpn76nyM7fSi4XQNeYQAMYxsa045brJui1_FdEp7MroHk3ibTjXSB-KcTMPPzjx88SQOrHjOLpvzFTCFrGIOMWcxGtcclIQLIKp8qqWWxpQpVYiI3YBkkA0urBOe3WwA8irqXtbV6NQVMxCB9pudUp965f45-4g0PeP9wRAc6UrT4QBmISAcyUT35nDpJxPbac",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCUyol5BrxlBsexgGF64AOThqU7qVjpw-SJRNg-X65vKQUBYq5g0Wo9VpyHzBY9rsjMaw1diLIhl5SOBQSQHWzePfxHzc1uQNqwBTnna-gRqDa6pgaMmhyL_iJ_4QUoP7EF4TfS93vMJO6pPIUfcD40Mco5tYIxl7XHVyFv3A1aHwbw3tLYcbMAm_tNR9W0_iYtVNobCL-C9-2oMSzy28ZAnCDW5eVmJM42Z7lsu4c-eeiIaZdi30f41Y60e6AzHhenrNwNFpJK2ZM",
];

export function getChannelStateLabel(state: TourChatChannelState) {
  if (state === "locked") {
    return "Đã khóa bởi admin";
  }

  if (state === "admin-review") {
    return "Đang kiểm duyệt";
  }

  return "Đang mở";
}

export function getAdminBroadcastTemplate(type: TourChatAdminBroadcastType) {
  const templates: Record<TourChatAdminBroadcastType, string> = {
    notice:
      "Admin thông báo: vui lòng theo dõi khung chat này để nhận cập nhật chính thức từ hệ thống và hướng dẫn viên.",
    safety:
      "Admin nhắc nhở an toàn: cả đoàn vui lòng kiểm tra giấy tờ cá nhân, thuốc cá nhân và thông tin liên hệ khẩn cấp trước giờ tập trung.",
    coordination:
      "Admin điều phối: các yêu cầu đặc biệt sẽ được tổng hợp và phản hồi theo thứ tự ưu tiên trong vòng 15 phút.",
  };

  return templates[type];
}

export function getAuditActionLabel(actionType: TourChatAuditActionType) {
  const labels: Record<TourChatAuditActionType, string> = {
    "channel-opened": "Mở kênh chat",
    "channel-review-enabled": "Bật kiểm duyệt",
    "channel-locked": "Khóa kênh",
    "broadcast-notice": "Gửi thông báo chung",
    "broadcast-safety": "Gửi nhắc nhở an toàn",
    "broadcast-coordination": "Gửi thông báo điều phối",
  };

  return labels[actionType];
}

function normalizeTourId(rawTourId?: string) {
  const fallbackTourId = "halong-3n2d";
  if (!rawTourId) {
    return fallbackTourId;
  }

  const sanitized = rawTourId
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return sanitized || fallbackTourId;
}

function normalizeName(rawName?: string) {
  if (!rawName) {
    return "";
  }

  return rawName.trim().replace(/\s+/g, " ");
}

function toParticipantId(name: string) {
  return `guest-${name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

function buildMessageId(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}-${Math.round(Math.random() * 1000).toString(36)}`;
}

function getCurrentTimeLabel() {
  return new Date().toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

const DEFAULT_TOUR_CHAT_GROUPS: TourChatGroup[] = [
  {
    id: "tour-halong-3n2d",
    tourId: "halong-3n2d",
    bookingCode: "HLB-8992K",
    title: "Tour Vịnh Hạ Long 3N2Đ",
    subtitle: "6 hành khách, 1 Hướng dẫn viên",
    status: "active",
    statusLabel: "Đang diễn ra",
    channelState: "open",
    channelStateLabel: getChannelStateLabel("open"),
    typeLabel: "Tour ghép",
    locationLabel: "Vịnh Hạ Long, Việt Nam",
    durationLabel: "3 ngày 2 đêm",
    vehicleLabel: "Du thuyền 5*",
    coverImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmeMErUYoAjZRxU4sJ9vmbIfjsH6-nnYsP0t-mzdMpQkdXjpaDEfy3p2EHTNYilOIVl3sXy6os5hFxp8xhnVXGDHyDBQ6I2xi_YaLaXwCFpfBJxAP5rhjAJMj-EyXwaEDDfJMcnf_4tHru2L-4NaHKB9n3qYQIvFA1GBx6x76tCrKjhaa-pT2Cfb2YhZPtXO7AyHft843XGywD2YQliSMwuMxVg4aB-qOw3cqk5CSVbGr3cU6JBfcGqRoijdxziWzDKtJgN5480d0",
    coverImageAlt: "Toan canh Vinh Ha Long voi du thuyen va nui da voi",
    participants: [
      {
        id: "guide-nam",
        name: "Trần Văn Nam",
        role: "guide",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDEub3w7bMIrTbGl9H9jfxyDBEmVr-qrroTlB9qNdyD_aP1TrphsEx24aH14XoanizbQqtTvg6oY2-D5jrC5X9HG1U29yQircgEUe98IZsKk_yKwi-EuMIOutgR33LulS_XoDKKhDEeEvXzF5OVUg52L41xdp-IogyfIEAHqsfirldAWWnlYwHci2PhXzsiHC3fSitez9nDsZWvDwF859X5lTRyTEYZkgikD-xAhfiZjX916OKHaOE0Js6C3QIbmKswZ7xc4MslzIw",
        avatarAlt: "Chan dung huong dan vien Tran Van Nam",
        isOnline: true,
        ratingLabel: "4.9 (120+ tours)",
      },
      {
        id: "guest-nguyen-le-an",
        name: "Nguyễn Lê An",
        role: "customer",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA9XOhXnG_zJdtCs-sTvC_C3ZQmotCWxsFdr1vM_wbINVgvrbHvP-9kn_he0FhIOubO4IWwFxaGT4UxcU9LZ_fWoPgg4367nqzZz5fp3jyqZYyTXnmjW0ryCqRsbxpuoN3K94QbqLd13jFaLhI0LV1UL4tZDKnX3ipi6oKgM5WUzMLE2SxCR2vmDqROt01e0YbyOyXzxiR2tjSfhfsbX0tDkQrSAyjXkT8l7LOX_YU1CEmBtiDWbvoCQKt7IS-JB3_WlNtTyWruzvA",
        avatarAlt: "Chan dung khach hang Nguyen Le An",
      },
      {
        id: "guest-you",
        name: "Bạn",
        role: "customer",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD78AZ3lj5d6rqn-2384FYYDtrRcQRXCwMv95WHzXzUG2T19WAdbmt20C5BoCHjWYCE8X0ty_wKFHsjDUnv_QpkJKY8_21IpvQ4lobVPZ7ecFWUM_g0AmKyinjnq4UjfyDiwvKhK_1VyLHuX624iQx2DdK9Dp24QjR04_OwSms7vveTrcZ2oXV4dex6PWf1x_no0lXlGc7dC9Z9q6YPmTuA7Csq7pd6ros0jCBtZUXkfAzvI6BIBv5HZRz5mUyJ3pPkp_B_7grxrTo",
        avatarAlt: "Chan dung nguoi dung hien tai",
        isCurrentUser: true,
      },
      {
        ...DEFAULT_ADMIN,
      },
    ],
    messages: [
      {
        id: "system-tour-start",
        role: "system",
        senderName: "Hệ thống",
        sentAtLabel: "07:30",
        body: "Tour sẽ bắt đầu lúc 08:00 sáng. Vui lòng có mặt tại sảnh khách sạn đúng giờ.",
      },
      {
        id: "guide-welcome",
        role: "guide",
        senderId: "guide-nam",
        senderName: "Trần Văn Nam",
        sentAtLabel: "07:45",
        body: "Chào buổi sáng mọi người! Xe đã đến trước sảnh khách sạn. Thời tiết hôm nay trên vịnh rất đẹp, trời trong và có nắng nhẹ. Mọi người nhớ mang theo kem chống nắng nhé.",
      },
      {
        id: "guest-checkin",
        role: "customer",
        senderId: "guest-nguyen-le-an",
        senderName: "Nguyễn Lê An",
        sentAtLabel: "07:50",
        body: "Mình xuống ngay đây ạ!",
      },
      {
        id: "self-question",
        role: "customer",
        senderId: "guest-you",
        senderName: "Bạn",
        sentAtLabel: "07:52",
        body: "Cho mình hỏi trên tàu có phục vụ cà phê sáng không anh Nam?",
        isReadByCurrentUser: true,
      },
      {
        id: "guide-reply-menu",
        role: "guide",
        senderId: "guide-nam",
        senderName: "Trần Văn Nam",
        sentAtLabel: "07:55",
        body: "Dạ có ạ. Có sẵn cà phê và bánh ngọt trên quầy bar tầng 2 của du thuyền. Lát lên tàu mình sẽ hướng dẫn chi tiết.",
        card: {
          title: "Thực đơn Sáng & Trưa",
          description: "Nhấn để xem chi tiết bữa ăn trên tàu",
          iconName: "restaurant_menu",
          ctaLabel: "Xem chi tiết",
        },
      },
    ],
    itinerary: [
      {
        id: "halong-0730",
        timeLabel: "07:30",
        title: "Tập trung sảnh khách sạn",
        description: "Khách sạn Mường Thanh Hạ Long",
        locationLabel: "Sảnh chính",
        state: "done",
      },
      {
        id: "halong-0800",
        timeLabel: "08:00",
        title: "Lên du thuyền",
        description:
          "Làm thủ tục nhận phòng và thưởng thức đồ uống chào mừng cùng đoàn.",
        locationLabel: "Bến Tuần Châu",
        state: "current",
      },
      {
        id: "halong-1230",
        timeLabel: "12:30",
        title: "Ăn trưa buffet",
        description: "Nhà hàng Ocean, tầng 3",
        locationLabel: "Du thuyền 5*",
        state: "upcoming",
      },
    ],
    documents: [
      {
        id: "halong-ticket",
        fileName: "Ve_Tham_Quan.pdf",
        fileSizeLabel: "1.2 MB",
        iconName: "picture_as_pdf",
      },
      {
        id: "halong-boarding",
        fileName: "Huong_Dan_Len_Tau.pdf",
        fileSizeLabel: "620 KB",
        iconName: "description",
      },
    ],
  },
  {
    id: "tour-maldivian-solitude",
    tourId: "maldivian-solitude",
    bookingCode: "STMS-MALDIVIAN-SOLITUDE",
    title: "Tĩnh Lặng Maldives",
    subtitle: "4 hành khách, 1 Hướng dẫn viên",
    status: "upcoming",
    statusLabel: "Chuẩn bị khởi hành",
    channelState: "admin-review",
    channelStateLabel: getChannelStateLabel("admin-review"),
    typeLabel: "Tour nghỉ dưỡng",
    locationLabel: "Baa Atoll, Maldives",
    durationLabel: "5 ngày 4 đêm",
    vehicleLabel: "Speedboat & Villa",
    coverImageUrl:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80",
    coverImageAlt: "Khu nghi duong cao cap tren mat nuoc tai Maldives",
    participants: [
      {
        id: "guide-khoi",
        name: "Lê Minh Khôi",
        role: "guide",
        avatarUrl:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80",
        avatarAlt: "Chan dung huong dan vien Le Minh Khoi",
        isOnline: true,
        ratingLabel: "5.0 (87 tours)",
      },
      {
        id: "guest-mia",
        name: "Mia Henderson",
        role: "customer",
        avatarUrl:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=256&q=80",
        avatarAlt: "Chan dung khach hang Mia Henderson",
      },
      {
        id: "guest-arjun",
        name: "Arjun Patel",
        role: "customer",
        avatarUrl:
          "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=256&q=80",
        avatarAlt: "Chan dung khach hang Arjun Patel",
      },
      {
        ...DEFAULT_ADMIN,
      },
    ],
    messages: [
      {
        id: "maldives-system",
        role: "system",
        senderName: "Hệ thống",
        sentAtLabel: "09:00",
        body: "Nhóm chat sẽ mở đầy đủ tính năng 24 giờ trước giờ khởi hành.",
      },
      {
        id: "maldives-guide",
        role: "guide",
        senderId: "guide-khoi",
        senderName: "Lê Minh Khôi",
        sentAtLabel: "09:05",
        body: "Xin chào cả đoàn. Mình là Khôi - hướng dẫn viên cho hành trình Maldives. Nếu mọi người có yêu cầu đặc biệt về ăn uống hoặc sức khỏe, cứ nhắn tại đây để mình chuẩn bị trước.",
      },
      {
        id: "maldives-admin-note",
        role: "admin",
        senderId: "admin-ly",
        senderName: "Trần Minh Lý",
        sentAtLabel: "09:10",
        body: "Admin đã bật chế độ kiểm duyệt tạm thời để tổng hợp yêu cầu đặc biệt trước ngày khởi hành.",
      },
    ],
    itinerary: [
      {
        id: "maldives-day1",
        timeLabel: "06:30",
        title: "Check-in tại sân bay",
        description: "Hỗ trợ ưu tiên thủ tục và gắn hành lý",
        locationLabel: "Ga quốc tế",
        state: "upcoming",
      },
      {
        id: "maldives-day1-2",
        timeLabel: "13:00",
        title: "Đón tại Male",
        description: "Di chuyển bằng speedboat về resort",
        locationLabel: "Sân bay Male",
        state: "upcoming",
      },
      {
        id: "maldives-day1-3",
        timeLabel: "18:30",
        title: "Dinner under stars",
        description: "Bữa tối riêng bên bãi biển",
        locationLabel: "Beach Deck",
        state: "upcoming",
      },
    ],
    documents: [
      {
        id: "maldives-e-ticket",
        fileName: "E-Ticket_Maldives.pdf",
        fileSizeLabel: "860 KB",
        iconName: "picture_as_pdf",
      },
      {
        id: "maldives-packing",
        fileName: "Packing_Checklist.pdf",
        fileSizeLabel: "420 KB",
        iconName: "description",
      },
    ],
  },
];

function cloneGroups(groups: TourChatGroup[]) {
  return JSON.parse(JSON.stringify(groups)) as TourChatGroup[];
}

function ensureAdminInParticipants(participants: TourChatParticipant[]) {
  const hasAdmin = participants.some(
    (participant) => participant.role === "admin",
  );
  if (hasAdmin) {
    return participants;
  }

  return [...participants, { ...DEFAULT_ADMIN }];
}

function hydrateGroup(rawGroup: TourChatGroup) {
  const resolvedState = rawGroup.channelState ?? "open";

  return {
    ...rawGroup,
    channelState: resolvedState,
    channelStateLabel: getChannelStateLabel(resolvedState),
    participants: ensureAdminInParticipants(rawGroup.participants ?? []),
  };
}

function createFallbackGroup(
  tourId: string,
  bookingCode: string,
): TourChatGroup {
  return {
    id: `tour-${tourId}`,
    tourId,
    bookingCode,
    title: `Nhóm chat tour ${tourId}`,
    subtitle: "Đang cập nhật thành viên",
    status: "upcoming",
    statusLabel: "Đang tạo nhóm",
    channelState: "open",
    channelStateLabel: getChannelStateLabel("open"),
    typeLabel: "Tour",
    locationLabel: "Đang cập nhật",
    durationLabel: "Đang cập nhật",
    vehicleLabel: "Đang cập nhật",
    coverImageUrl:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80",
    coverImageAlt: "Canh dep du lich",
    participants: [
      {
        id: "guide-system",
        name: "Điều phối STMS",
        role: "guide",
        avatarUrl:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=256&q=80",
        avatarAlt: "Chan dung dieu phoi vien",
        isOnline: true,
      },
      {
        ...DEFAULT_ADMIN,
      },
    ],
    messages: [
      {
        id: "fallback-system",
        role: "system",
        senderName: "Hệ thống",
        sentAtLabel: getCurrentTimeLabel(),
        body: "Nhóm chat đã được khởi tạo tự động sau khi thanh toán thành công.",
      },
    ],
    itinerary: [
      {
        id: "fallback-itinerary",
        timeLabel: "--:--",
        title: "Lịch trình đang cập nhật",
        description:
          "Điều phối viên sẽ đồng bộ lịch trình trong thời gian sớm nhất.",
        locationLabel: "STMS",
        state: "upcoming",
      },
    ],
    documents: [],
  };
}

export function getDefaultTourChatGroups() {
  return cloneGroups(DEFAULT_TOUR_CHAT_GROUPS.map(hydrateGroup));
}

export function loadTourChatGroups() {
  if (typeof window === "undefined") {
    return getDefaultTourChatGroups();
  }

  try {
    const storedData = window.localStorage.getItem(TOUR_CHAT_STORAGE_KEY);

    if (!storedData) {
      const defaults = getDefaultTourChatGroups();
      window.localStorage.setItem(
        TOUR_CHAT_STORAGE_KEY,
        JSON.stringify(defaults),
      );
      return defaults;
    }

    const parsed = JSON.parse(storedData) as TourChatGroup[];

    if (!Array.isArray(parsed) || parsed.length === 0) {
      const defaults = getDefaultTourChatGroups();
      window.localStorage.setItem(
        TOUR_CHAT_STORAGE_KEY,
        JSON.stringify(defaults),
      );
      return defaults;
    }

    return parsed.map(hydrateGroup);
  } catch {
    const defaults = getDefaultTourChatGroups();
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        TOUR_CHAT_STORAGE_KEY,
        JSON.stringify(defaults),
      );
    }
    return defaults;
  }
}

export function saveTourChatGroups(groups: TourChatGroup[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(TOUR_CHAT_STORAGE_KEY, JSON.stringify(groups));
}

function formatAuditTimeLabel(iso: string) {
  return new Date(iso).toLocaleString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
  });
}

export function resolveStateAuditActionType(state: TourChatChannelState) {
  if (state === "locked") {
    return "channel-locked" as const;
  }

  if (state === "admin-review") {
    return "channel-review-enabled" as const;
  }

  return "channel-opened" as const;
}

export function resolveBroadcastAuditActionType(
  type: TourChatAdminBroadcastType,
) {
  if (type === "safety") {
    return "broadcast-safety" as const;
  }

  if (type === "coordination") {
    return "broadcast-coordination" as const;
  }

  return "broadcast-notice" as const;
}

export function createTourChatAuditLogEntry(payload: {
  group: TourChatGroup;
  actor: TourChatParticipant;
  actionType: TourChatAuditActionType;
  detail: string;
  fromState?: TourChatChannelState;
  toState?: TourChatChannelState;
}) {
  const createdAtIso = new Date().toISOString();

  const entry: TourChatAuditLogEntry = {
    id: `audit-${Date.now().toString(36)}-${Math.round(Math.random() * 1000).toString(36)}`,
    groupId: payload.group.id,
    tourId: payload.group.tourId,
    groupTitle: payload.group.title,
    actorId: payload.actor.id,
    actorName: payload.actor.name,
    actorRole: payload.actor.role,
    actionType: payload.actionType,
    actionLabel: getAuditActionLabel(payload.actionType),
    detail: payload.detail,
    fromState: payload.fromState,
    toState: payload.toState,
    createdAtIso,
    createdAtLabel: formatAuditTimeLabel(createdAtIso),
  };

  return entry;
}

export function loadTourChatAuditLogs() {
  if (typeof window === "undefined") {
    return [] as TourChatAuditLogEntry[];
  }

  try {
    const raw = window.localStorage.getItem(TOUR_CHAT_AUDIT_STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw) as TourChatAuditLogEntry[];
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed;
  } catch {
    return [];
  }
}

export function saveTourChatAuditLogs(entries: TourChatAuditLogEntry[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    TOUR_CHAT_AUDIT_STORAGE_KEY,
    JSON.stringify(entries),
  );
}

function resolveAvatar(indexSeed: number) {
  return PARTICIPANT_AVATAR_POOL[indexSeed % PARTICIPANT_AVATAR_POOL.length];
}

function upsertCustomerParticipant(
  participants: TourChatParticipant[],
  memberName: string,
  isCurrentUser: boolean,
  avatarSeed: number,
) {
  const normalizedMemberName = memberName.toLowerCase();
  const participantIndex = participants.findIndex(
    (participant) =>
      participant.role === "customer" &&
      normalizeName(participant.name).toLowerCase() === normalizedMemberName,
  );

  if (participantIndex >= 0) {
    const existingParticipant = participants[participantIndex];
    participants[participantIndex] = {
      ...existingParticipant,
      isCurrentUser,
      isOnline: isCurrentUser ? true : existingParticipant.isOnline,
    };
    return false;
  }

  participants.push({
    id: toParticipantId(memberName),
    name: memberName,
    role: "customer",
    avatarUrl: resolveAvatar(avatarSeed),
    avatarAlt: `Chan dung khach hang ${memberName}`,
    isCurrentUser,
    isOnline: isCurrentUser,
  });
  return true;
}

function createEnrollmentMessage(
  joinedMemberNames: string[],
  bookingCode: string,
) {
  const memberLabel =
    joinedMemberNames.length === 1
      ? joinedMemberNames[0]
      : `${joinedMemberNames.slice(0, -1).join(", ")} và ${joinedMemberNames[joinedMemberNames.length - 1]}`;

  return {
    id: buildMessageId("system-join"),
    role: "system" as const,
    senderName: "Hệ thống",
    sentAtLabel: getCurrentTimeLabel(),
    body: `${memberLabel} đã được thêm vào nhóm chat tự động sau khi thanh toán thành công (${bookingCode}).`,
  };
}

export function ensureTourChatEnrollment(
  payload: TourChatEnrollmentPayload,
): TourChatEnrollmentResult {
  const normalizedPrimaryName = normalizeName(payload.primaryTravelerName);
  const normalizedCompanionName = normalizeName(payload.companionTravelerName);
  const normalizedTourId = normalizeTourId(payload.tourId);
  const normalizedBookingCode = payload.bookingCode.trim() || "STMS-NEW";

  const existingGroups = loadTourChatGroups();
  const nextGroups = cloneGroups(existingGroups);

  let targetGroupIndex = nextGroups.findIndex(
    (group) => normalizeTourId(group.tourId) === normalizedTourId,
  );

  if (targetGroupIndex < 0) {
    const fallbackGroup = createFallbackGroup(
      normalizedTourId,
      normalizedBookingCode,
    );
    nextGroups.unshift(fallbackGroup);
    targetGroupIndex = 0;
  }

  const targetGroup = hydrateGroup(nextGroups[targetGroupIndex]);
  const joinedMemberNames: string[] = [];

  targetGroup.bookingCode = normalizedBookingCode;

  targetGroup.participants = targetGroup.participants.map((participant) =>
    participant.role === "customer"
      ? {
          ...participant,
          isCurrentUser: false,
        }
      : participant,
  );

  if (normalizedPrimaryName) {
    const hasJoined = upsertCustomerParticipant(
      targetGroup.participants,
      normalizedPrimaryName,
      true,
      0,
    );
    if (hasJoined) {
      joinedMemberNames.push(normalizedPrimaryName);
    }
  }

  if (
    normalizedCompanionName &&
    normalizedCompanionName.toLowerCase() !==
      normalizedPrimaryName.toLowerCase()
  ) {
    const hasJoined = upsertCustomerParticipant(
      targetGroup.participants,
      normalizedCompanionName,
      false,
      1,
    );
    if (hasJoined) {
      joinedMemberNames.push(normalizedCompanionName);
    }
  }

  const passengerCount = targetGroup.participants.filter(
    (participant) => participant.role === "customer",
  ).length;
  const guideCount = targetGroup.participants.filter(
    (participant) => participant.role === "guide",
  ).length;
  targetGroup.subtitle = `${passengerCount} hành khách, ${guideCount} Hướng dẫn viên`;

  if (joinedMemberNames.length > 0) {
    targetGroup.messages.push(
      createEnrollmentMessage(joinedMemberNames, normalizedBookingCode),
    );
  }

  nextGroups[targetGroupIndex] = targetGroup;
  saveTourChatGroups(nextGroups);

  return {
    groupId: targetGroup.id,
    joinedMemberNames,
  };
}
