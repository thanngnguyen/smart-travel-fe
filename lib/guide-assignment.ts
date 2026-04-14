import {
  DepartureQueueItem,
  GuideRecommendation,
  ScheduleConflictResult,
  TourDeparture,
  TourGuide,
} from "@/types/admin-operations";

export const DEFAULT_PASSENGER_TO_GUIDE_RATIO = 30;

const recommendationOrder: Record<GuideRecommendation["status"], number> = {
  recommended: 0,
  eligible: 1,
  blocked: 2,
};

function toTimestamp(value: string) {
  return new Date(value).getTime();
}

function hasDateRangeOverlap(
  firstStart: string,
  firstEnd: string,
  secondStart: string,
  secondEnd: string,
) {
  const firstStartTime = toTimestamp(firstStart);
  const firstEndTime = toTimestamp(firstEnd);
  const secondStartTime = toTimestamp(secondStart);
  const secondEndTime = toTimestamp(secondEnd);

  return firstStartTime <= secondEndTime && secondStartTime <= firstEndTime;
}

export function calculateRequiredGuideCount(
  passengerCount: number,
  ratio = DEFAULT_PASSENGER_TO_GUIDE_RATIO,
) {
  if (passengerCount <= 0) {
    return 0;
  }

  return Math.ceil(passengerCount / ratio);
}

export function isDepartureReadyForAssignment(departure: TourDeparture) {
  return departure.passengerCount >= departure.minPassengersRequired;
}

export function checkScheduleConflict(
  guide: TourGuide,
  departure: TourDeparture,
): ScheduleConflictResult {
  const conflictWith = guide.schedules.find((schedule) =>
    hasDateRangeOverlap(
      schedule.startDate,
      schedule.endDate,
      departure.startDate,
      departure.endDate,
    ),
  );

  if (!conflictWith) {
    return { hasConflict: false };
  }

  return {
    hasConflict: true,
    conflictWith,
  };
}

export function getMissingGuideCount(departure: TourDeparture) {
  const requiredGuideCount = calculateRequiredGuideCount(
    departure.passengerCount,
  );

  return Math.max(requiredGuideCount - departure.assignments.length, 0);
}

export function toDepartureQueueItem(
  departure: TourDeparture,
): DepartureQueueItem {
  const requiredGuideCount = calculateRequiredGuideCount(
    departure.passengerCount,
  );

  return {
    ...departure,
    requiredGuideCount,
    missingGuideCount: Math.max(
      requiredGuideCount - departure.assignments.length,
      0,
    ),
    isReadyForAssignment: isDepartureReadyForAssignment(departure),
  };
}

export function evaluateGuideRecommendation(
  guide: TourGuide,
  departure: TourDeparture,
): GuideRecommendation {
  const reasons: string[] = [];
  let score = Math.round(guide.rating * 10);

  const isAlreadyAssigned = departure.assignments.some(
    (assignment) => assignment.guideId === guide.id,
  );

  if (isAlreadyAssigned) {
    reasons.push("HDV này đã được gán cho chuyến đi.");

    return {
      guideId: guide.id,
      score: 0,
      status: "blocked",
      reasons,
    };
  }

  const hasSkill = guide.skills.includes(departure.tourType);
  if (hasSkill) {
    score += 25;
    reasons.push("Đạt yêu cầu nghiệp vụ tour.");
  } else {
    reasons.push("Thiếu kỹ năng phù hợp loại hình tour.");
  }

  const hasLanguage = guide.languages.includes(departure.groupLanguage);
  if (hasLanguage) {
    score += 20;
    reasons.push(`Đáp ứng ngôn ngữ đoàn (${departure.groupLanguage}).`);
  } else {
    reasons.push(`Không hỗ trợ ngôn ngữ đoàn (${departure.groupLanguage}).`);
  }

  const conflict = checkScheduleConflict(guide, departure);
  if (conflict.hasConflict) {
    reasons.push(
      `Guide is Busy: Trùng lịch với ${conflict.conflictWith?.tourName ?? "chuyến khác"}.`,
    );
  } else {
    score += 20;
    reasons.push("Không có xung đột lịch công tác.");
  }

  const projectedWorkload = guide.monthlyWorkloadDays + departure.workloadDays;
  if (projectedWorkload > guide.monthlyWorkloadLimit) {
    reasons.push(
      `Vượt định mức ngày công (${projectedWorkload}/${guide.monthlyWorkloadLimit} ngày).`,
    );
  } else if (projectedWorkload >= guide.monthlyWorkloadLimit * 0.9) {
    score += 5;
    reasons.push(
      `Định mức cao nhưng vẫn hợp lệ (${projectedWorkload}/${guide.monthlyWorkloadLimit}).`,
    );
  } else {
    score += 15;
    reasons.push(
      `Định mức ổn định (${projectedWorkload}/${guide.monthlyWorkloadLimit} ngày).`,
    );
  }

  const isBlocked =
    !hasSkill ||
    !hasLanguage ||
    conflict.hasConflict ||
    projectedWorkload > guide.monthlyWorkloadLimit;

  if (isBlocked) {
    return {
      guideId: guide.id,
      score: Math.max(score, 0),
      status: "blocked",
      reasons,
      conflict,
    };
  }

  return {
    guideId: guide.id,
    score,
    status: score >= 85 ? "recommended" : "eligible",
    reasons,
    conflict,
  };
}

export function buildGuideRecommendations(
  guides: TourGuide[],
  departure: TourDeparture,
) {
  return guides
    .map((guide) => evaluateGuideRecommendation(guide, departure))
    .sort((left, right) => {
      const orderDiff =
        recommendationOrder[left.status] - recommendationOrder[right.status];

      if (orderDiff !== 0) {
        return orderDiff;
      }

      return right.score - left.score;
    });
}
