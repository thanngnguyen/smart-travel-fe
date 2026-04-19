"use client";

import { useEffect, useMemo, useState } from "react";
import {
  buildGuideRecommendations,
  evaluateGuideRecommendation,
  getMissingGuideCount,
  isDepartureReadyForAssignment,
  toDepartureQueueItem,
} from "@/lib/guide-assignment";
import {
  ActiveGuideTaskItem,
  DepartureQueueItem,
  GuideCandidate,
  OperationsMetrics,
  OperationsNotification,
  PendingConfirmationItem,
  TourDeparture,
  TourGuide,
} from "@/types/admin-operations";

const INITIAL_DEPARTURES: TourDeparture[] = [
  {
    id: "dep-kyoto-1205",
    code: "KYO-1205",
    tourName: "Di sản Kyoto & Vườn Thiền",
    tourType: "culture",
    startDate: "2026-05-12",
    endDate: "2026-05-17",
    departureStatus: "OPEN",
    groupLanguage: "Japanese",
    minPassengersRequired: 40,
    passengerCount: 64,
    workloadDays: 6,
    itinerarySummary: [
      "Ngày 1: Chùa Kiyomizu-dera và phố cổ Gion",
      "Ngày 2: Thiền sáng tại Arashiyama",
      "Ngày 3: Trải nghiệm trà đạo và làng nghề",
    ],
    passengers: [
      { id: "p-kyo-1", fullName: "Yuki Sato", language: "Japanese" },
      { id: "p-kyo-2", fullName: "Haruto Watanabe", language: "Japanese" },
      { id: "p-kyo-3", fullName: "Linh Tran", language: "Vietnamese" },
      { id: "p-kyo-4", fullName: "Aiko Tanaka", language: "Japanese" },
      { id: "p-kyo-5", fullName: "Minh Nguyen", language: "English" },
    ],
    specialRequests: [
      "2 khách ăn chay hoàn toàn",
      "1 khách cần hỗ trợ xe lăn ngày 2",
      "Ưu tiên khách sạn gần ga Kyoto",
    ],
    assignments: [
      {
        guideId: "guide-linh",
        status: "pending-confirmation",
        assignedAt: "2026-04-10T09:00:00.000Z",
      },
    ],
  },
  {
    id: "dep-ice-2005",
    code: "ICE-2005",
    tourName: "Thám hiểm cao nguyên Iceland",
    tourType: "adventure",
    startDate: "2026-05-20",
    endDate: "2026-05-27",
    departureStatus: "PLANNING",
    groupLanguage: "English",
    minPassengersRequired: 30,
    passengerCount: 31,
    workloadDays: 8,
    itinerarySummary: [
      "Ngày 1: Briefing an toàn băng hà",
      "Ngày 2-5: Trekking và cắm trại vùng Highlands",
      "Ngày 6: Suối nước nóng và phục hồi thể lực",
    ],
    passengers: [
      { id: "p-ice-1", fullName: "Emma Davis", language: "English" },
      { id: "p-ice-2", fullName: "Noah Brown", language: "English" },
      { id: "p-ice-3", fullName: "Thao Le", language: "Vietnamese" },
    ],
    specialRequests: [
      "3 khách cần thực đơn không gluten",
      "Đội quay phim đi kèm, cần hỗ trợ permit",
    ],
    assignments: [],
  },
  {
    id: "dep-phu-0206",
    code: "PHU-0206",
    tourName: "Nghỉ dưỡng đảo Phú Quốc",
    tourType: "leisure",
    startDate: "2026-06-02",
    endDate: "2026-06-05",
    departureStatus: "PLANNING",
    groupLanguage: "Vietnamese",
    minPassengersRequired: 25,
    passengerCount: 22,
    workloadDays: 4,
    itinerarySummary: [
      "Ngày 1: Nhận phòng resort",
      "Ngày 2: Cano 4 đảo",
      "Ngày 3: Spa và gala dinner",
    ],
    passengers: [
      { id: "p-phu-1", fullName: "Lan Anh", language: "Vietnamese" },
      { id: "p-phu-2", fullName: "Quang Huy", language: "Vietnamese" },
    ],
    specialRequests: ["1 gia đình có trẻ nhỏ cần ghế ăn"],
    assignments: [],
  },
  {
    id: "dep-ser-1006",
    code: "SER-1006",
    tourName: "Safari cao cấp Serengeti",
    tourType: "adventure",
    startDate: "2026-06-10",
    endDate: "2026-06-18",
    departureStatus: "PLANNING",
    groupLanguage: "English",
    minPassengersRequired: 50,
    passengerCount: 95,
    workloadDays: 9,
    itinerarySummary: [
      "Ngày 1: Bay nội địa và nhập trại",
      "Ngày 2-7: Theo dõi động vật hoang dã",
      "Ngày 8: Tổng kết và trở về",
    ],
    passengers: [
      { id: "p-ser-1", fullName: "Olivia Wilson", language: "English" },
      { id: "p-ser-2", fullName: "Liam Martinez", language: "English" },
      { id: "p-ser-3", fullName: "Henry Clark", language: "English" },
      { id: "p-ser-4", fullName: "An Pham", language: "Vietnamese" },
    ],
    specialRequests: [
      "2 khách yêu cầu xe riêng do vấn đề sức khỏe",
      "1 khách dị ứng hạt",
    ],
    assignments: [
      {
        guideId: "guide-marc",
        status: "on-tour",
        assignedAt: "2026-04-08T08:00:00.000Z",
        confirmedAt: "2026-04-08T08:10:00.000Z",
      },
    ],
  },
];

const INITIAL_GUIDES: TourGuide[] = [
  {
    id: "guide-linh",
    fullName: "Linh Hoang",
    avatarInitials: "LH",
    skills: ["culture", "leisure"],
    languages: ["Vietnamese", "English", "Japanese"],
    monthlyWorkloadDays: 12,
    monthlyWorkloadLimit: 24,
    rating: 4.8,
    schedules: [
      {
        departureId: "dep-kor-0905",
        tourName: "Seoul Food & Culture",
        startDate: "2026-05-09",
        endDate: "2026-05-11",
      },
    ],
  },
  {
    id: "guide-anna",
    fullName: "Anna Suzuki",
    avatarInitials: "AS",
    skills: ["culture", "leisure"],
    languages: ["Japanese", "English"],
    monthlyWorkloadDays: 18,
    monthlyWorkloadLimit: 22,
    rating: 4.9,
    schedules: [
      {
        departureId: "dep-tok-1305",
        tourName: "Tokyo Night Culture",
        startDate: "2026-05-13",
        endDate: "2026-05-16",
      },
    ],
  },
  {
    id: "guide-marc",
    fullName: "Marc Delaney",
    avatarInitials: "MD",
    skills: ["adventure"],
    languages: ["English", "French"],
    monthlyWorkloadDays: 20,
    monthlyWorkloadLimit: 24,
    rating: 4.7,
    schedules: [
      {
        departureId: "dep-ser-1006",
        tourName: "Safari cao cấp Serengeti",
        startDate: "2026-06-10",
        endDate: "2026-06-18",
      },
    ],
  },
  {
    id: "guide-kai",
    fullName: "Kai Chen",
    avatarInitials: "KC",
    skills: ["adventure", "culture"],
    languages: ["English", "Chinese"],
    monthlyWorkloadDays: 15,
    monthlyWorkloadLimit: 24,
    rating: 4.6,
    schedules: [
      {
        departureId: "dep-nep-2205",
        tourName: "Trek Annapurna",
        startDate: "2026-05-22",
        endDate: "2026-05-29",
      },
    ],
  },
  {
    id: "guide-mina",
    fullName: "Mina Park",
    avatarInitials: "MP",
    skills: ["leisure", "culture"],
    languages: ["Korean", "Japanese", "English"],
    monthlyWorkloadDays: 21,
    monthlyWorkloadLimit: 22,
    rating: 4.5,
    schedules: [],
  },
  {
    id: "guide-thanh",
    fullName: "Thanh Vu",
    avatarInitials: "TV",
    skills: ["adventure", "leisure"],
    languages: ["Vietnamese", "English"],
    monthlyWorkloadDays: 10,
    monthlyWorkloadLimit: 24,
    rating: 4.4,
    schedules: [],
  },
];

function createNotification(
  type: OperationsNotification["type"],
  title: string,
  message: string,
): OperationsNotification {
  return {
    id: `notif-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type,
    title,
    message,
    createdAt: new Date().toISOString(),
  };
}

export function useAdminOperationsData() {
  const [departures, setDepartures] =
    useState<TourDeparture[]>(INITIAL_DEPARTURES);
  const [guides, setGuides] = useState<TourGuide[]>(INITIAL_GUIDES);
  const [notifications, setNotifications] = useState<OperationsNotification[]>(
    [],
  );
  const [selectedDepartureId, setSelectedDepartureId] = useState<string>(
    INITIAL_DEPARTURES[0]?.id ?? "",
  );
  const [flashMessage, setFlashMessage] = useState<{
    tone: "success" | "error";
    text: string;
  } | null>(null);

  const departureQueue = useMemo<DepartureQueueItem[]>(() => {
    return departures
      .map((departure) => toDepartureQueueItem(departure))
      .filter(
        (departure) =>
          departure.departureStatus !== "IN_PROGRESS" &&
          departure.departureStatus !== "COMPLETED" &&
          departure.departureStatus !== "CANCELLED",
      )
      .sort(
        (left, right) =>
          new Date(left.startDate).getTime() -
          new Date(right.startDate).getTime(),
      );
  }, [departures]);

  const actionableDepartures = useMemo(() => {
    return departureQueue.filter(
      (departure) =>
        departure.isReadyForAssignment && departure.missingGuideCount > 0,
    );
  }, [departureQueue]);

  useEffect(() => {
    if (!departureQueue.length) {
      return;
    }

    const selectedStillExists = departureQueue.some(
      (departure) => departure.id === selectedDepartureId,
    );

    if (selectedStillExists) {
      return;
    }

    const fallbackDeparture = actionableDepartures[0] ?? departureQueue[0];

    if (fallbackDeparture) {
      const syncSelectionTimer = window.setTimeout(() => {
        setSelectedDepartureId(fallbackDeparture.id);
      }, 0);

      return () => window.clearTimeout(syncSelectionTimer);
    }
  }, [actionableDepartures, departureQueue, selectedDepartureId]);

  const selectedDeparture = useMemo(() => {
    if (!selectedDepartureId) {
      return null;
    }

    return (
      departureQueue.find(
        (departure) => departure.id === selectedDepartureId,
      ) ?? null
    );
  }, [departureQueue, selectedDepartureId]);

  const guideCandidates = useMemo(() => {
    if (!selectedDeparture) {
      return [] as GuideCandidate[];
    }

    return buildGuideRecommendations(guides, selectedDeparture)
      .map((recommendation) => {
        const guide = guides.find((item) => item.id === recommendation.guideId);

        if (!guide) {
          return null;
        }

        return { guide, recommendation };
      })
      .filter((item): item is GuideCandidate => item !== null);
  }, [guides, selectedDeparture]);

  const pendingConfirmations = useMemo<PendingConfirmationItem[]>(() => {
    return departures
      .flatMap((departure) => {
        return departure.assignments
          .filter((assignment) => assignment.status === "pending-confirmation")
          .map((assignment) => {
            const guide = guides.find((item) => item.id === assignment.guideId);

            if (!guide) {
              return null;
            }

            return { departure, guide, assignment };
          });
      })
      .filter((item): item is PendingConfirmationItem => item !== null);
  }, [departures, guides]);

  const activeGuideTasks = useMemo<ActiveGuideTaskItem[]>(() => {
    return departures
      .flatMap((departure) => {
        return departure.assignments
          .filter((assignment) => assignment.status === "on-tour")
          .map((assignment) => {
            const guide = guides.find((item) => item.id === assignment.guideId);

            if (!guide) {
              return null;
            }

            return { departure, guide, assignment };
          });
      })
      .filter((item): item is ActiveGuideTaskItem => item !== null);
  }, [departures, guides]);

  const metrics = useMemo<OperationsMetrics>(() => {
    const missingGuides = actionableDepartures.reduce(
      (sum, departure) => sum + departure.missingGuideCount,
      0,
    );

    return {
      departuresReadyForAssignment: actionableDepartures.length,
      missingGuides,
      pendingConfirmations: pendingConfirmations.length,
      notificationsSent: notifications.length,
    };
  }, [actionableDepartures, notifications.length, pendingConfirmations.length]);

  const focusNextUrgentDeparture = () => {
    const nextDeparture = actionableDepartures[0];

    if (!nextDeparture) {
      return;
    }

    setSelectedDepartureId(nextDeparture.id);
  };

  const assignGuide = (guideId: string) => {
    if (!selectedDeparture) {
      setFlashMessage({
        tone: "error",
        text: "Vui lòng chọn chuyến đi trước khi phân công hướng dẫn viên.",
      });
      return;
    }

    const selectedGuide = guides.find((guide) => guide.id === guideId);

    if (!selectedGuide) {
      setFlashMessage({
        tone: "error",
        text: "Không tìm thấy hướng dẫn viên được chọn.",
      });
      return;
    }

    if (!isDepartureReadyForAssignment(selectedDeparture)) {
      setFlashMessage({
        tone: "error",
        text: "Chuyến đi chưa đủ số lượng khách yêu cầu để phân công.",
      });
      return;
    }

    if (getMissingGuideCount(selectedDeparture) <= 0) {
      setFlashMessage({
        tone: "error",
        text: "Chuyến đi đã đủ số lượng hướng dẫn viên.",
      });
      return;
    }

    const recommendation = evaluateGuideRecommendation(
      selectedGuide,
      selectedDeparture,
    );

    if (recommendation.status === "blocked") {
      const reason =
        recommendation.reasons.find((item) => item.includes("Guide is Busy")) ??
        recommendation.reasons[recommendation.reasons.length - 1] ??
        "Không thể phân công hướng dẫn viên ở thời điểm hiện tại.";

      setNotifications((previous) => [
        createNotification(
          "assignment-blocked",
          "Phân công bị chặn",
          `${selectedGuide.fullName}: ${reason}`,
        ),
        ...previous,
      ]);

      setFlashMessage({
        tone: "error",
        text: reason,
      });
      return;
    }

    const assignedAt = new Date().toISOString();

    setDepartures((previous) =>
      previous.map((departure) => {
        if (departure.id !== selectedDeparture.id) {
          return departure;
        }

        return {
          ...departure,
          assignments: [
            ...departure.assignments,
            {
              guideId: selectedGuide.id,
              status: "pending-confirmation",
              assignedAt,
            },
          ],
        };
      }),
    );

    setGuides((previous) =>
      previous.map((guide) => {
        if (guide.id !== selectedGuide.id) {
          return guide;
        }

        return {
          ...guide,
          monthlyWorkloadDays:
            guide.monthlyWorkloadDays + selectedDeparture.workloadDays,
          schedules: [
            ...guide.schedules,
            {
              departureId: selectedDeparture.id,
              tourName: selectedDeparture.tourName,
              startDate: selectedDeparture.startDate,
              endDate: selectedDeparture.endDate,
            },
          ],
        };
      }),
    );

    setNotifications((previous) => [
      createNotification(
        "assignment-sent",
        "Đã đồng bộ Departure + gửi thông báo",
        `${selectedGuide.fullName} đã nhận Push Notification và Email cho ${selectedDeparture.code}.`,
      ),
      ...previous,
    ]);

    setFlashMessage({
      tone: "success",
      text: `Đã phân công ${selectedGuide.fullName}. Chờ HDV xác nhận nhiệm vụ.`,
    });
  };

  const confirmGuideTask = (departureId: string, guideId: string) => {
    const departure = departures.find((item) => item.id === departureId);
    const guide = guides.find((item) => item.id === guideId);

    if (!departure || !guide) {
      return;
    }

    const confirmedAt = new Date().toISOString();

    setDepartures((previous) =>
      previous.map((item) => {
        if (item.id !== departureId) {
          return item;
        }

        const nextAssignments = item.assignments.map((assignment) => {
          if (assignment.guideId !== guideId) {
            return assignment;
          }

          return {
            ...assignment,
            status: "on-tour" as const,
            confirmedAt,
          };
        });

        return {
          ...item,
          assignments: nextAssignments,
          departureStatus:
            item.departureStatus === "OPEN" || item.departureStatus === "LOCKED"
              ? "IN_PROGRESS"
              : item.departureStatus,
        };
      }),
    );

    setNotifications((previous) => [
      createNotification(
        "guide-confirmed",
        "HDV đã xác nhận nhiệm vụ",
        `${guide.fullName} chuyển trạng thái sang "Đang đi tour" cho ${departure.code}.`,
      ),
      ...previous,
    ]);

    setFlashMessage({
      tone: "success",
      text: `${guide.fullName} đã xác nhận nhiệm vụ và chuyển sang trạng thái Đang đi tour.`,
    });
  };

  return {
    departureQueue,
    actionableDepartures,
    selectedDeparture,
    selectedDepartureId,
    setSelectedDepartureId,
    guideCandidates,
    pendingConfirmations,
    activeGuideTasks,
    notifications,
    metrics,
    flashMessage,
    focusNextUrgentDeparture,
    assignGuide,
    confirmGuideTask,
  };
}
