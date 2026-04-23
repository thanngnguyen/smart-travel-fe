import {
  GuideCheckpointState,
  GuideCheckInStatus,
  GuideDepartureTask,
  GuideIncidentDraft,
  GuideIncidentReport,
  GuideMessageRole,
  GuidePortalState,
  GuideStateMutationResult,
  GuideSyncLogEntry,
  GuideTaskMessage,
  GuideTaskStatusAction,
} from "@/types/guide-portal";

export const GUIDE_PORTAL_STORAGE_KEY = "stms-guide-portal-v1";
export const GUIDE_PORTAL_UPDATED_EVENT = "stms-guide-portal-updated";

const DEFAULT_GUIDE_PORTAL_STATE: GuidePortalState = {
  profile: {
    id: "guide-nam-tran",
    fullName: "Tran Van Nam",
    avatarInitials: "TN",
    roleLabel: "Huong dan vien truong doan",
    baseLocation: "Ha Noi",
    languages: ["Vietnamese", "English"],
    expertise: ["Du lich van hoa", "Dieu phoi doan lon", "Xu ly su co"],
    rating: 4.9,
    monthlyWorkloadDays: 17,
    monthlyWorkloadLimit: 24,
  },
  tasks: [
    {
      id: "guide-task-halong-1205",
      departureCode: "HAL-1205",
      tourId: "tour-halong-5s",
      tourTitle: "Vinh Ha Long Signature 5 Sao",
      destinationLabel: "Quang Ninh, Viet Nam",
      startDate: "2026-05-12T08:00:00.000Z",
      endDate: "2026-05-14T18:00:00.000Z",
      departureStatus: "OPEN",
      taskStatus: "pending-confirmation",
      groupLanguage: "Vietnamese",
      meetingPoint: "Sanh A - Khach san Novotel Ha Noi",
      maxParticipants: 32,
      currentParticipants: 25,
      itinerarySummary: [
        "Ngay 1: Don doan, di chuyen den ben Tau Tuan Chau",
        "Ngay 2: Tham hang Sung Sot va kayak",
        "Ngay 3: Brunch tren tau va tra doan",
      ],
      passengers: [
        {
          id: "passenger-hl-1",
          bookingCode: "BK-HL-2001",
          fullName: "Nguyen Le An",
          phone: "0901 200 500",
          emergencyContact: "Tran Anh - 0903 880 112",
          bookingStatus: "CONFIRMED",
          paymentStatus: "SUCCESS",
          specialRequest: "An chay truong",
          checkInStatus: "pending",
        },
        {
          id: "passenger-hl-2",
          bookingCode: "BK-HL-2002",
          fullName: "Pham Minh Chau",
          phone: "0988 221 442",
          emergencyContact: "Pham Thanh - 0917 111 009",
          bookingStatus: "CONFIRMED",
          paymentStatus: "SUCCESS",
          specialRequest: "Tre nho 5 tuoi, uu tien ghe gan cua",
          checkInStatus: "pending",
        },
        {
          id: "passenger-hl-3",
          bookingCode: "BK-HL-2003",
          fullName: "Le Hoang Nam",
          phone: "0937 440 661",
          emergencyContact: "Le Thi Van - 0938 701 111",
          bookingStatus: "PENDING",
          paymentStatus: "PENDING",
          checkInStatus: "pending",
        },
      ],
      checkpoints: [
        {
          id: "hl-cp-1",
          timeLabel: "07:30",
          title: "Tap trung doan",
          locationLabel: "Sanh A",
          description: "Diem danh va nhan the hanh ly",
          state: "upcoming",
        },
        {
          id: "hl-cp-2",
          timeLabel: "09:45",
          title: "Nhan phong tau",
          locationLabel: "Cang Tuan Chau",
          description: "Hoan tat check-in du thuyen",
          state: "upcoming",
        },
        {
          id: "hl-cp-3",
          timeLabel: "12:30",
          title: "Briefing an toan",
          locationLabel: "Deck 2",
          description: "Huong dan an toan va noi quy tour",
          state: "upcoming",
        },
      ],
      chatRoomId: "room-halong-1205",
      chatThread: [
        {
          id: "hl-msg-1",
          roomId: "room-halong-1205",
          senderRole: "system",
          senderName: "He thong",
          content:
            "Nhiem vu moi duoc dieu phoi vien giao. Vui long xac nhan truoc 22:00 hom nay.",
          sentAtIso: "2026-05-10T04:30:00.000Z",
        },
        {
          id: "hl-msg-2",
          roomId: "room-halong-1205",
          senderRole: "admin",
          senderName: "Dieu phoi STMS",
          content:
            "Luu y co 2 hanh khach an chay. Nho xac nhan thuc don voi ben du thuyen.",
          sentAtIso: "2026-05-10T05:10:00.000Z",
          isUnreadByGuide: true,
        },
      ],
      incidents: [],
      updatedAtIso: "2026-05-10T05:10:00.000Z",
    },
    {
      id: "guide-task-ninhbinh-0405",
      departureCode: "NBI-0405",
      tourId: "tour-ninhbinh-premium",
      tourTitle: "Ninh Binh Heritage Retreat",
      destinationLabel: "Ninh Binh, Viet Nam",
      startDate: "2026-05-04T06:30:00.000Z",
      endDate: "2026-05-05T20:00:00.000Z",
      departureStatus: "IN_PROGRESS",
      taskStatus: "in-progress",
      groupLanguage: "English",
      meetingPoint: "Terminal C - Noi Bai",
      maxParticipants: 18,
      currentParticipants: 16,
      itinerarySummary: [
        "Day 1: Trang An boat tour va Hoa Lu",
        "Day 2: Mua Cave sunrise va tra doan",
      ],
      passengers: [
        {
          id: "passenger-nb-1",
          bookingCode: "BK-NB-1011",
          fullName: "Olivia Watson",
          phone: "+44 7020 155 889",
          emergencyContact: "James Watson - +44 7011 880 220",
          bookingStatus: "CONFIRMED",
          paymentStatus: "SUCCESS",
          checkInStatus: "checked-in",
          checkInAtIso: "2026-05-04T06:10:00.000Z",
        },
        {
          id: "passenger-nb-2",
          bookingCode: "BK-NB-1012",
          fullName: "Marco Rossi",
          phone: "+39 388 511 900",
          emergencyContact: "Luca Rossi - +39 355 000 112",
          bookingStatus: "CONFIRMED",
          paymentStatus: "SUCCESS",
          specialRequest: "Di ung dau phong",
          checkInStatus: "late",
          checkInAtIso: "2026-05-04T06:45:00.000Z",
        },
        {
          id: "passenger-nb-3",
          bookingCode: "BK-NB-1013",
          fullName: "Tran Quoc Bao",
          phone: "0966 882 771",
          emergencyContact: "Tran Linh - 0977 228 444",
          bookingStatus: "CONFIRMED",
          paymentStatus: "SUCCESS",
          checkInStatus: "checked-in",
          checkInAtIso: "2026-05-04T06:20:00.000Z",
        },
      ],
      checkpoints: [
        {
          id: "nb-cp-1",
          timeLabel: "06:30",
          title: "Don khach tai san bay",
          locationLabel: "Noi Bai",
          description: "Diem danh va nhan hanh ly ky gui",
          state: "done",
          updatedAtIso: "2026-05-04T06:35:00.000Z",
        },
        {
          id: "nb-cp-2",
          timeLabel: "10:15",
          title: "Len thuyen Trang An",
          locationLabel: "Ben thuyen Trang An",
          description: "Cap phao cuu sinh va phan nhom",
          state: "in-progress",
          updatedAtIso: "2026-05-04T10:20:00.000Z",
        },
        {
          id: "nb-cp-3",
          timeLabel: "18:00",
          title: "Nhan phong resort",
          locationLabel: "Tam Coc Retreat",
          description: "Check-in khach san va thong bao lich toi",
          state: "upcoming",
        },
      ],
      chatRoomId: "room-ninhbinh-0405",
      chatThread: [
        {
          id: "nb-msg-1",
          roomId: "room-ninhbinh-0405",
          senderRole: "customer",
          senderName: "Olivia Watson",
          content: "Doan toi khu thuyen roi, minh den gate nao?",
          sentAtIso: "2026-05-04T10:18:00.000Z",
          isUnreadByGuide: true,
        },
        {
          id: "nb-msg-2",
          roomId: "room-ninhbinh-0405",
          senderRole: "guide",
          senderName: "Tran Van Nam",
          content:
            "Nhom minh tap trung tai gate 2. Toi dang dung ngay ban ve de don doan.",
          sentAtIso: "2026-05-04T10:21:00.000Z",
        },
      ],
      incidents: [
        {
          id: "nb-incident-1",
          departureId: "guide-task-ninhbinh-0405",
          title: "Tre 15 phut tai diem tap trung",
          description:
            "2 hanh khach quoc te den muon do delay hanh ly. Da sap xep xe trung chuyen linh hoat.",
          severity: "medium",
          status: "mitigating",
          createdAtIso: "2026-05-04T06:40:00.000Z",
          updatedAtIso: "2026-05-04T07:05:00.000Z",
        },
      ],
      updatedAtIso: "2026-05-04T10:21:00.000Z",
    },
    {
      id: "guide-task-kyoto-2804",
      departureCode: "KYO-2804",
      tourId: "tour-kyoto-sakura",
      tourTitle: "Kyoto Sakura Cultural Journey",
      destinationLabel: "Kyoto, Japan",
      startDate: "2026-04-28T04:00:00.000Z",
      endDate: "2026-05-02T16:00:00.000Z",
      departureStatus: "COMPLETED",
      taskStatus: "completed",
      groupLanguage: "Japanese",
      meetingPoint: "Kansai Airport Arrivals",
      maxParticipants: 24,
      currentParticipants: 24,
      itinerarySummary: [
        "Day 1: Kiyomizu-dera va Gion",
        "Day 2: Arashiyama bamboo grove",
        "Day 3: Tea ceremony va artisan village",
      ],
      passengers: [
        {
          id: "passenger-kyo-1",
          bookingCode: "BK-KYO-3001",
          fullName: "Aiko Tanaka",
          phone: "+81 90 2222 7788",
          emergencyContact: "Ken Tanaka - +81 90 6677 1100",
          bookingStatus: "CONFIRMED",
          paymentStatus: "SUCCESS",
          checkInStatus: "checked-in",
          checkInAtIso: "2026-04-28T03:35:00.000Z",
        },
        {
          id: "passenger-kyo-2",
          bookingCode: "BK-KYO-3002",
          fullName: "Linh Nguyen",
          phone: "+84 901 008 312",
          emergencyContact: "Nguyen Ha - 0902 444 112",
          bookingStatus: "CONFIRMED",
          paymentStatus: "SUCCESS",
          checkInStatus: "checked-in",
          checkInAtIso: "2026-04-28T03:40:00.000Z",
        },
      ],
      checkpoints: [
        {
          id: "kyo-cp-1",
          timeLabel: "13:00",
          title: "Don doan tai san bay",
          locationLabel: "KIX",
          description: "Hoan tat don doan va di chuyen vao trung tam",
          state: "done",
          updatedAtIso: "2026-04-28T04:10:00.000Z",
        },
        {
          id: "kyo-cp-2",
          timeLabel: "15:30",
          title: "Check-in khach san",
          locationLabel: "Kyoto Central",
          description: "Nhan phong va chia lich trinh",
          state: "done",
          updatedAtIso: "2026-04-28T06:45:00.000Z",
        },
      ],
      chatRoomId: "room-kyoto-2804",
      chatThread: [
        {
          id: "kyo-msg-1",
          roomId: "room-kyoto-2804",
          senderRole: "system",
          senderName: "He thong",
          content: "Tour da hoan thanh. Vui long cap nhat bao cao tong ket.",
          sentAtIso: "2026-05-02T16:20:00.000Z",
          isUnreadByGuide: true,
        },
      ],
      incidents: [
        {
          id: "kyo-incident-1",
          departureId: "guide-task-kyoto-2804",
          title: "Dieu chinh lich trinh do mua lon",
          description:
            "Huy outdoor walking trong 2 gio va chuyen sang tea workshop trong nha.",
          severity: "low",
          status: "resolved",
          createdAtIso: "2026-04-29T07:00:00.000Z",
          updatedAtIso: "2026-04-29T10:15:00.000Z",
          resolutionNote: "Doan da duoc thong bao truoc, muc do hai long 4.8/5",
        },
      ],
      updatedAtIso: "2026-05-02T16:30:00.000Z",
    },
  ],
  syncLogs: [
    {
      id: "guide-log-1",
      tone: "info",
      title: "Nhiem vu moi duoc giao",
      detail: "HAL-1205 dang cho ban xac nhan tiep nhan truoc 22:00.",
      createdAtIso: "2026-05-10T05:10:00.000Z",
    },
    {
      id: "guide-log-2",
      tone: "warning",
      title: "Can xu ly tre lich",
      detail: "NBI-0405 co 2 khach den muon, doi xe duoc thong bao dieu phoi.",
      createdAtIso: "2026-05-04T07:05:00.000Z",
    },
  ],
};

function cloneDefaultState() {
  return JSON.parse(
    JSON.stringify(DEFAULT_GUIDE_PORTAL_STATE),
  ) as GuidePortalState;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isTaskStatus(
  value: unknown,
): value is GuideDepartureTask["taskStatus"] {
  return (
    value === "pending-confirmation" ||
    value === "confirmed" ||
    value === "in-progress" ||
    value === "completed"
  );
}

function isCheckInStatus(value: unknown): value is GuideCheckInStatus {
  return (
    value === "pending" ||
    value === "checked-in" ||
    value === "late" ||
    value === "no-show"
  );
}

function isCheckpointState(value: unknown): value is GuideCheckpointState {
  return (
    value === "upcoming" ||
    value === "in-progress" ||
    value === "done" ||
    value === "blocked"
  );
}

function isMessageRole(value: unknown): value is GuideMessageRole {
  return (
    value === "system" ||
    value === "guide" ||
    value === "customer" ||
    value === "admin"
  );
}

function isIncidentSeverity(
  value: unknown,
): value is GuideIncidentReport["severity"] {
  return (
    value === "low" ||
    value === "medium" ||
    value === "high" ||
    value === "critical"
  );
}

function isIncidentStatus(
  value: unknown,
): value is GuideIncidentReport["status"] {
  return value === "open" || value === "mitigating" || value === "resolved";
}

function normalizeState(value: unknown) {
  if (!isObject(value)) {
    return cloneDefaultState();
  }

  if (
    !isObject(value.profile) ||
    !Array.isArray(value.tasks) ||
    !Array.isArray(value.syncLogs)
  ) {
    return cloneDefaultState();
  }

  const fallback = cloneDefaultState();

  const normalizedTasks = value.tasks
    .filter((task): task is Record<string, unknown> => isObject(task))
    .map((task) => {
      const fallbackTask = fallback.tasks.find(
        (item) => item.id === String(task.id || ""),
      );
      if (!fallbackTask) {
        return null;
      }

      const passengers = Array.isArray(task.passengers)
        ? task.passengers
            .filter((passenger): passenger is Record<string, unknown> =>
              isObject(passenger),
            )
            .map((passenger) => ({
              ...passenger,
              id: String(passenger.id || ""),
              bookingCode: String(passenger.bookingCode || ""),
              fullName: String(passenger.fullName || "Unknown Passenger"),
              phone: String(passenger.phone || "N/A"),
              emergencyContact: String(passenger.emergencyContact || "N/A"),
              bookingStatus:
                passenger.bookingStatus === "CONFIRMED" ||
                passenger.bookingStatus === "CANCELLED"
                  ? passenger.bookingStatus
                  : "PENDING",
              paymentStatus:
                passenger.paymentStatus === "SUCCESS" ||
                passenger.paymentStatus === "FAILED" ||
                passenger.paymentStatus === "REFUNDED"
                  ? passenger.paymentStatus
                  : "PENDING",
              specialRequest:
                typeof passenger.specialRequest === "string"
                  ? passenger.specialRequest
                  : undefined,
              checkInStatus: isCheckInStatus(passenger.checkInStatus)
                ? passenger.checkInStatus
                : "pending",
              checkInAtIso:
                typeof passenger.checkInAtIso === "string"
                  ? passenger.checkInAtIso
                  : undefined,
            }))
            .filter((passenger) => passenger.id)
        : fallbackTask.passengers;

      const checkpoints = Array.isArray(task.checkpoints)
        ? task.checkpoints
            .filter((checkpoint): checkpoint is Record<string, unknown> =>
              isObject(checkpoint),
            )
            .map((checkpoint) => ({
              id: String(checkpoint.id || ""),
              timeLabel: String(checkpoint.timeLabel || "--:--"),
              title: String(checkpoint.title || "Checkpoint"),
              locationLabel: String(
                checkpoint.locationLabel || "Dang cap nhat",
              ),
              description: String(checkpoint.description || ""),
              state: isCheckpointState(checkpoint.state)
                ? checkpoint.state
                : "upcoming",
              updatedAtIso:
                typeof checkpoint.updatedAtIso === "string"
                  ? checkpoint.updatedAtIso
                  : undefined,
            }))
            .filter((checkpoint) => checkpoint.id)
        : fallbackTask.checkpoints;

      const chatThread = Array.isArray(task.chatThread)
        ? task.chatThread
            .filter((message): message is Record<string, unknown> =>
              isObject(message),
            )
            .map((message) => ({
              id: String(message.id || ""),
              roomId: String(message.roomId || fallbackTask.chatRoomId),
              senderRole: isMessageRole(message.senderRole)
                ? message.senderRole
                : "system",
              senderName: String(message.senderName || "He thong"),
              content: String(message.content || ""),
              sentAtIso:
                typeof message.sentAtIso === "string"
                  ? message.sentAtIso
                  : new Date().toISOString(),
              isUnreadByGuide: Boolean(message.isUnreadByGuide),
            }))
            .filter((message) => message.id && message.content)
        : fallbackTask.chatThread;

      const incidents = Array.isArray(task.incidents)
        ? task.incidents
            .filter((incident): incident is Record<string, unknown> =>
              isObject(incident),
            )
            .map((incident) => ({
              id: String(incident.id || ""),
              departureId: String(incident.departureId || fallbackTask.id),
              title: String(incident.title || "Su co"),
              description: String(incident.description || ""),
              severity: isIncidentSeverity(incident.severity)
                ? incident.severity
                : "low",
              status: isIncidentStatus(incident.status)
                ? incident.status
                : "open",
              createdAtIso:
                typeof incident.createdAtIso === "string"
                  ? incident.createdAtIso
                  : new Date().toISOString(),
              updatedAtIso:
                typeof incident.updatedAtIso === "string"
                  ? incident.updatedAtIso
                  : new Date().toISOString(),
              resolutionNote:
                typeof incident.resolutionNote === "string"
                  ? incident.resolutionNote
                  : undefined,
            }))
            .filter((incident) => incident.id && incident.title)
        : fallbackTask.incidents;

      return {
        ...fallbackTask,
        ...task,
        id: fallbackTask.id,
        departureCode: String(task.departureCode || fallbackTask.departureCode),
        tourId: String(task.tourId || fallbackTask.tourId),
        tourTitle: String(task.tourTitle || fallbackTask.tourTitle),
        destinationLabel: String(
          task.destinationLabel || fallbackTask.destinationLabel,
        ),
        startDate: String(task.startDate || fallbackTask.startDate),
        endDate: String(task.endDate || fallbackTask.endDate),
        departureStatus:
          task.departureStatus === "PLANNING" ||
          task.departureStatus === "OPEN" ||
          task.departureStatus === "LOCKED" ||
          task.departureStatus === "IN_PROGRESS" ||
          task.departureStatus === "COMPLETED" ||
          task.departureStatus === "CANCELLED"
            ? task.departureStatus
            : fallbackTask.departureStatus,
        taskStatus: isTaskStatus(task.taskStatus)
          ? task.taskStatus
          : fallbackTask.taskStatus,
        groupLanguage: String(task.groupLanguage || fallbackTask.groupLanguage),
        meetingPoint: String(task.meetingPoint || fallbackTask.meetingPoint),
        maxParticipants:
          Number(task.maxParticipants) || fallbackTask.maxParticipants,
        currentParticipants:
          Number(task.currentParticipants) || fallbackTask.currentParticipants,
        itinerarySummary: Array.isArray(task.itinerarySummary)
          ? task.itinerarySummary
              .map((item) => String(item || "").trim())
              .filter(Boolean)
          : fallbackTask.itinerarySummary,
        passengers:
          passengers.length > 0 ? passengers : fallbackTask.passengers,
        checkpoints:
          checkpoints.length > 0 ? checkpoints : fallbackTask.checkpoints,
        chatRoomId: String(task.chatRoomId || fallbackTask.chatRoomId),
        chatThread,
        incidents,
        updatedAtIso:
          typeof task.updatedAtIso === "string"
            ? task.updatedAtIso
            : fallbackTask.updatedAtIso,
      } as GuideDepartureTask;
    })
    .filter((task): task is GuideDepartureTask => task !== null);

  const normalizedSyncLogs: GuideSyncLogEntry[] = value.syncLogs
    .filter((entry): entry is Record<string, unknown> => isObject(entry))
    .map((entry) => {
      const tone: GuideSyncLogEntry["tone"] =
        entry.tone === "success" || entry.tone === "warning"
          ? entry.tone
          : "info";

      return {
        id: String(entry.id || ""),
        tone,
        title: String(entry.title || "Cap nhat he thong"),
        detail: String(entry.detail || ""),
        createdAtIso:
          typeof entry.createdAtIso === "string"
            ? entry.createdAtIso
            : new Date().toISOString(),
      };
    })
    .filter((entry) => entry.id && entry.title);

  if (normalizedTasks.length === 0) {
    return cloneDefaultState();
  }

  return {
    profile: {
      ...fallback.profile,
      ...value.profile,
      id: String(value.profile.id || fallback.profile.id),
      fullName: String(value.profile.fullName || fallback.profile.fullName),
      avatarInitials: String(
        value.profile.avatarInitials || fallback.profile.avatarInitials,
      ),
      roleLabel: String(value.profile.roleLabel || fallback.profile.roleLabel),
      baseLocation: String(
        value.profile.baseLocation || fallback.profile.baseLocation,
      ),
      languages: Array.isArray(value.profile.languages)
        ? value.profile.languages
            .map((item) => String(item || ""))
            .filter(Boolean)
        : fallback.profile.languages,
      expertise: Array.isArray(value.profile.expertise)
        ? value.profile.expertise
            .map((item) => String(item || ""))
            .filter(Boolean)
        : fallback.profile.expertise,
      rating: Number(value.profile.rating) || fallback.profile.rating,
      monthlyWorkloadDays:
        Number(value.profile.monthlyWorkloadDays) ||
        fallback.profile.monthlyWorkloadDays,
      monthlyWorkloadLimit:
        Number(value.profile.monthlyWorkloadLimit) ||
        fallback.profile.monthlyWorkloadLimit,
    },
    tasks: normalizedTasks,
    syncLogs: normalizedSyncLogs,
  };
}

function emitGuidePortalUpdatedEvent() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new CustomEvent(GUIDE_PORTAL_UPDATED_EVENT));
}

function createEntityId(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}-${Math.round(Math.random() * 999)
    .toString(36)
    .padStart(2, "0")}`;
}

function createSyncLog(
  tone: GuideSyncLogEntry["tone"],
  title: string,
  detail: string,
): GuideSyncLogEntry {
  return {
    id: createEntityId("guide-log"),
    tone,
    title,
    detail,
    createdAtIso: new Date().toISOString(),
  };
}

function withPrependedLog(
  state: GuidePortalState,
  entry: GuideSyncLogEntry,
): GuidePortalState {
  return {
    ...state,
    syncLogs: [entry, ...state.syncLogs].slice(0, 50),
  };
}

function updateTask(
  state: GuidePortalState,
  taskId: string,
  updater: (task: GuideDepartureTask) => GuideDepartureTask,
) {
  let changed = false;

  const nextTasks = state.tasks.map((task) => {
    if (task.id !== taskId) {
      return task;
    }

    const nextTask = updater(task);
    changed = nextTask !== task;
    return nextTask;
  });

  return {
    changed,
    nextState: changed ? { ...state, tasks: nextTasks } : state,
  };
}

function isTaskActionAllowed(
  task: GuideDepartureTask,
  action: GuideTaskStatusAction,
) {
  if (action === "confirm-task") {
    return task.taskStatus === "pending-confirmation";
  }

  if (action === "start-task") {
    return task.taskStatus === "confirmed";
  }

  if (action === "complete-task") {
    return task.taskStatus === "in-progress";
  }

  return false;
}

export function loadGuidePortalState() {
  if (typeof window === "undefined") {
    return cloneDefaultState();
  }

  try {
    const raw = window.localStorage.getItem(GUIDE_PORTAL_STORAGE_KEY);
    if (!raw) {
      const fallback = cloneDefaultState();
      window.localStorage.setItem(
        GUIDE_PORTAL_STORAGE_KEY,
        JSON.stringify(fallback),
      );
      return fallback;
    }

    return normalizeState(JSON.parse(raw));
  } catch {
    const fallback = cloneDefaultState();
    window.localStorage.setItem(
      GUIDE_PORTAL_STORAGE_KEY,
      JSON.stringify(fallback),
    );
    return fallback;
  }
}

export function saveGuidePortalState(state: GuidePortalState) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(GUIDE_PORTAL_STORAGE_KEY, JSON.stringify(state));
  emitGuidePortalUpdatedEvent();
}

export function applyGuideTaskStatusAction(
  state: GuidePortalState,
  taskId: string,
  action: GuideTaskStatusAction,
): GuideStateMutationResult {
  const targetTask = state.tasks.find((task) => task.id === taskId);

  if (!targetTask) {
    return {
      changed: false,
      nextState: state,
      message: "Khong tim thay nhiem vu duoc chon.",
    };
  }

  if (!isTaskActionAllowed(targetTask, action)) {
    return {
      changed: false,
      nextState: state,
      message: "Trang thai nhiem vu hien tai khong cho phep thao tac nay.",
    };
  }

  const updatedAtIso = new Date().toISOString();

  const actionMeta =
    action === "confirm-task"
      ? {
          message: `Ban da xac nhan nhiem vu ${targetTask.departureCode}.`,
          logTone: "success" as const,
          logTitle: "Nhiem vu da duoc tiep nhan",
          nextTaskStatus: "confirmed" as const,
          nextDepartureStatus: targetTask.departureStatus,
        }
      : action === "start-task"
        ? {
            message: `Nhiem vu ${targetTask.departureCode} da chuyen sang dang van hanh.`,
            logTone: "info" as const,
            logTitle: "Bat dau van hanh tour",
            nextTaskStatus: "in-progress" as const,
            nextDepartureStatus: "IN_PROGRESS" as const,
          }
        : {
            message: `Nhiem vu ${targetTask.departureCode} da duoc hoan tat.`,
            logTone: "success" as const,
            logTitle: "Dong tour thanh cong",
            nextTaskStatus: "completed" as const,
            nextDepartureStatus: "COMPLETED" as const,
          };

  const updated = updateTask(state, taskId, (task) => {
    const nextCheckpoints =
      action === "complete-task"
        ? task.checkpoints.map((checkpoint) => ({
            ...checkpoint,
            state: "done" as const,
            updatedAtIso,
          }))
        : task.checkpoints;

    return {
      ...task,
      taskStatus: actionMeta.nextTaskStatus,
      departureStatus: actionMeta.nextDepartureStatus,
      checkpoints: nextCheckpoints,
      updatedAtIso,
    };
  });

  if (!updated.changed) {
    return {
      changed: false,
      nextState: state,
      message: "Khong co thay doi nao duoc ap dung.",
    };
  }

  return {
    changed: true,
    nextState: withPrependedLog(
      updated.nextState,
      createSyncLog(
        actionMeta.logTone,
        actionMeta.logTitle,
        `${targetTask.departureCode} - ${targetTask.tourTitle}`,
      ),
    ),
    message: actionMeta.message,
  };
}

export function applyPassengerCheckInStatus(
  state: GuidePortalState,
  taskId: string,
  passengerId: string,
  status: GuideCheckInStatus,
): GuideStateMutationResult {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) {
    return {
      changed: false,
      nextState: state,
      message: "Khong tim thay nhiem vu de cap nhat check-in.",
    };
  }

  const passenger = task.passengers.find((item) => item.id === passengerId);
  if (!passenger) {
    return {
      changed: false,
      nextState: state,
      message: "Khong tim thay hanh khach can cap nhat.",
    };
  }

  if (passenger.checkInStatus === status) {
    return {
      changed: false,
      nextState: state,
      message: "Trang thai check-in da o muc nay.",
    };
  }

  const nowIso = new Date().toISOString();

  const updated = updateTask(state, taskId, (currentTask) => {
    const nextPassengers = currentTask.passengers.map((item) => {
      if (item.id !== passengerId) {
        return item;
      }

      return {
        ...item,
        checkInStatus: status,
        checkInAtIso: status === "pending" ? undefined : nowIso,
      };
    });

    return {
      ...currentTask,
      passengers: nextPassengers,
      updatedAtIso: nowIso,
    };
  });

  if (!updated.changed) {
    return {
      changed: false,
      nextState: state,
      message: "Khong the cap nhat check-in cho hanh khach nay.",
    };
  }

  return {
    changed: true,
    nextState: withPrependedLog(
      updated.nextState,
      createSyncLog(
        status === "no-show" ? "warning" : "info",
        "Cap nhat check-in hanh khach",
        `${passenger.fullName} - ${status.toUpperCase()} (${task.departureCode})`,
      ),
    ),
    message: `Da cap nhat check-in cho ${passenger.fullName}.`,
  };
}

export function applyCheckpointStateUpdate(
  state: GuidePortalState,
  taskId: string,
  checkpointId: string,
  nextState: GuideCheckpointState,
): GuideStateMutationResult {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) {
    return {
      changed: false,
      nextState: state,
      message: "Khong tim thay nhiem vu de cap nhat timeline.",
    };
  }

  const checkpoint = task.checkpoints.find((item) => item.id === checkpointId);
  if (!checkpoint) {
    return {
      changed: false,
      nextState: state,
      message: "Khong tim thay moc timeline can cap nhat.",
    };
  }

  if (checkpoint.state === nextState) {
    return {
      changed: false,
      nextState: state,
      message: "Trang thai checkpoint da duoc cap nhat truoc do.",
    };
  }

  const nowIso = new Date().toISOString();

  const updated = updateTask(state, taskId, (currentTask) => {
    const checkpoints = currentTask.checkpoints.map((item) => {
      if (item.id !== checkpointId) {
        return item;
      }

      return {
        ...item,
        state: nextState,
        updatedAtIso: nowIso,
      };
    });

    return {
      ...currentTask,
      checkpoints,
      updatedAtIso: nowIso,
    };
  });

  if (!updated.changed) {
    return {
      changed: false,
      nextState: state,
      message: "Khong co thay doi nao duoc ap dung cho checkpoint.",
    };
  }

  return {
    changed: true,
    nextState: withPrependedLog(
      updated.nextState,
      createSyncLog(
        nextState === "blocked" ? "warning" : "info",
        "Cap nhat checkpoint timeline",
        `${task.departureCode} - ${checkpoint.title} -> ${nextState.toUpperCase()}`,
      ),
    ),
    message: "Da cap nhat moc timeline thanh cong.",
  };
}

export function appendGuideTaskMessage(
  state: GuidePortalState,
  taskId: string,
  payload: {
    senderRole: GuideTaskMessage["senderRole"];
    senderName: string;
    content: string;
    markUnreadForGuide?: boolean;
  },
): GuideStateMutationResult {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) {
    return {
      changed: false,
      nextState: state,
      message: "Khong tim thay phong chat can cap nhat.",
    };
  }

  const content = payload.content.trim();
  if (!content) {
    return {
      changed: false,
      nextState: state,
      message: "Noi dung tin nhan dang rong.",
    };
  }

  const nowIso = new Date().toISOString();
  const message: GuideTaskMessage = {
    id: createEntityId("guide-msg"),
    roomId: task.chatRoomId,
    senderRole: payload.senderRole,
    senderName: payload.senderName,
    content,
    sentAtIso: nowIso,
    isUnreadByGuide: Boolean(payload.markUnreadForGuide),
  };

  const updated = updateTask(state, taskId, (currentTask) => ({
    ...currentTask,
    chatThread: [...currentTask.chatThread, message],
    updatedAtIso: nowIso,
  }));

  if (!updated.changed) {
    return {
      changed: false,
      nextState: state,
      message: "Khong gui duoc tin nhan vao phong chat.",
    };
  }

  return {
    changed: true,
    nextState: withPrependedLog(
      updated.nextState,
      createSyncLog(
        "info",
        "Tin nhan moi trong phong tour",
        `${task.departureCode} - ${payload.senderName}`,
      ),
    ),
    message: "Da gui tin nhan vao phong chat tour.",
  };
}

export function markTaskMessagesAsRead(
  state: GuidePortalState,
  taskId: string,
): GuideStateMutationResult {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) {
    return {
      changed: false,
      nextState: state,
      message: "Khong tim thay phong chat can danh dau da doc.",
    };
  }

  const hasUnread = task.chatThread.some((message) => message.isUnreadByGuide);
  if (!hasUnread) {
    return {
      changed: false,
      nextState: state,
      message: "Khong co tin nhan chua doc.",
    };
  }

  const updated = updateTask(state, taskId, (currentTask) => ({
    ...currentTask,
    chatThread: currentTask.chatThread.map((message) => ({
      ...message,
      isUnreadByGuide: false,
    })),
    updatedAtIso: new Date().toISOString(),
  }));

  if (!updated.changed) {
    return {
      changed: false,
      nextState: state,
      message: "Khong co thay doi nao duoc luu.",
    };
  }

  return {
    changed: true,
    nextState: updated.nextState,
    message: "Da danh dau toan bo tin nhan la da doc.",
  };
}

export function appendIncidentReport(
  state: GuidePortalState,
  taskId: string,
  draft: GuideIncidentDraft,
): GuideStateMutationResult {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) {
    return {
      changed: false,
      nextState: state,
      message: "Khong tim thay nhiem vu de tao su co.",
    };
  }

  const title = draft.title.trim();
  const description = draft.description.trim();

  if (!title || !description) {
    return {
      changed: false,
      nextState: state,
      message: "Tieu de va mo ta su co khong duoc de trong.",
    };
  }

  const nowIso = new Date().toISOString();

  const incident: GuideIncidentReport = {
    id: createEntityId("guide-incident"),
    departureId: task.id,
    title,
    description,
    severity: draft.severity,
    status: draft.severity === "critical" ? "mitigating" : "open",
    createdAtIso: nowIso,
    updatedAtIso: nowIso,
  };

  const updated = updateTask(state, taskId, (currentTask) => ({
    ...currentTask,
    incidents: [incident, ...currentTask.incidents],
    updatedAtIso: nowIso,
  }));

  if (!updated.changed) {
    return {
      changed: false,
      nextState: state,
      message: "Khong tao duoc su co moi.",
    };
  }

  const withLog = withPrependedLog(
    updated.nextState,
    createSyncLog(
      draft.severity === "critical" || draft.severity === "high"
        ? "warning"
        : "info",
      "Bao cao su co moi",
      `${task.departureCode}: ${title}`,
    ),
  );

  return {
    changed: true,
    nextState: withLog,
    message: "Da tao bao cao su co va dong bo cho dieu phoi.",
  };
}

export function resolveIncidentReport(
  state: GuidePortalState,
  taskId: string,
  incidentId: string,
  resolutionNote: string,
): GuideStateMutationResult {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) {
    return {
      changed: false,
      nextState: state,
      message: "Khong tim thay nhiem vu de dong su co.",
    };
  }

  const incident = task.incidents.find((item) => item.id === incidentId);
  if (!incident) {
    return {
      changed: false,
      nextState: state,
      message: "Khong tim thay su co can xu ly.",
    };
  }

  if (incident.status === "resolved") {
    return {
      changed: false,
      nextState: state,
      message: "Su co da duoc dong truoc do.",
    };
  }

  const note = resolutionNote.trim();
  if (!note) {
    return {
      changed: false,
      nextState: state,
      message: "Vui long nhap ghi chu xu ly truoc khi dong su co.",
    };
  }

  const nowIso = new Date().toISOString();

  const updated = updateTask(state, taskId, (currentTask) => ({
    ...currentTask,
    incidents: currentTask.incidents.map((item) => {
      if (item.id !== incidentId) {
        return item;
      }

      return {
        ...item,
        status: "resolved",
        resolutionNote: note,
        updatedAtIso: nowIso,
      };
    }),
    updatedAtIso: nowIso,
  }));

  if (!updated.changed) {
    return {
      changed: false,
      nextState: state,
      message: "Khong the cap nhat trang thai su co.",
    };
  }

  return {
    changed: true,
    nextState: withPrependedLog(
      updated.nextState,
      createSyncLog(
        "success",
        "Su co da duoc dong",
        `${task.departureCode}: ${incident.title}`,
      ),
    ),
    message: "Da dong su co va cap nhat ghi chu xu ly.",
  };
}
