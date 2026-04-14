import AdminButton from "@/components/ui/AdminButton";
import AdminCard from "@/components/ui/AdminCard";
import PillBadge from "@/components/ui/PillBadge";
import StatusBadge from "@/components/ui/StatusBadge";
import Icon from "@/components/ui/Icon";
import {
  DepartureQueueItem,
  GuideCandidate,
  GuideRecommendation,
  TourType,
} from "@/types/admin-operations";

interface GuideScreeningPanelProps {
  selectedDeparture: DepartureQueueItem | null;
  candidates: GuideCandidate[];
  onAssignGuide: (guideId: string) => void;
}

const tourTypeMap: Record<TourType, string> = {
  adventure: "Tour mạo hiểm",
  leisure: "Tour nghỉ dưỡng",
  culture: "Tour văn hóa",
};

const recommendationMeta: Record<
  GuideRecommendation["status"],
  {
    tone: "success" | "warning" | "error";
    label: string;
    buttonVariant: "gradient" | "solid" | "surfaceMuted";
  }
> = {
  recommended: {
    tone: "success",
    label: "Phù hợp cao",
    buttonVariant: "gradient",
  },
  eligible: {
    tone: "warning",
    label: "Có thể phân công",
    buttonVariant: "solid",
  },
  blocked: {
    tone: "error",
    label: "Bị chặn",
    buttonVariant: "surfaceMuted",
  },
};

export default function GuideScreeningPanel({
  selectedDeparture,
  candidates,
  onAssignGuide,
}: GuideScreeningPanelProps) {
  if (!selectedDeparture) {
    return (
      <AdminCard padding="md" radius="3xl">
        <p className="text-on-surface-variant">
          Chưa có chuyến đi nào để điều phối.
        </p>
      </AdminCard>
    );
  }

  return (
    <AdminCard padding="sm" radius="3xl" className="space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-2xl font-black text-on-surface">
            2. Sàng lọc hướng dẫn viên
          </h3>
          <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
            Kiểm tra kỹ năng, ngôn ngữ, lịch công tác và định mức ngày công
            trước khi cho phép phân công.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <PillBadge tone="primary-soft" uppercase>
            {selectedDeparture.code}
          </PillBadge>
          <PillBadge tone="surface" uppercase>
            {tourTypeMap[selectedDeparture.tourType]}
          </PillBadge>
          <PillBadge tone="primary-container" uppercase>
            Ngôn ngữ: {selectedDeparture.groupLanguage}
          </PillBadge>
        </div>
      </div>

      <div className="bg-surface-container-low rounded-2xl p-4 grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
        <div>
          <p className="text-outline text-[11px] uppercase tracking-wide font-bold">
            Khách hiện tại
          </p>
          <p className="font-black text-on-surface mt-1 text-xl">
            {selectedDeparture.passengerCount}
          </p>
        </div>
        <div>
          <p className="text-outline text-[11px] uppercase tracking-wide font-bold">
            Yêu cầu tối thiểu
          </p>
          <p className="font-black text-on-surface mt-1 text-xl">
            {selectedDeparture.minPassengersRequired}
          </p>
        </div>
        <div>
          <p className="text-outline text-[11px] uppercase tracking-wide font-bold">
            Cần tổng HDV
          </p>
          <p className="font-black text-on-surface mt-1 text-xl">
            {selectedDeparture.requiredGuideCount}
          </p>
        </div>
        <div>
          <p className="text-outline text-[11px] uppercase tracking-wide font-bold">
            Thiếu HDV
          </p>
          <p className="font-black text-error mt-1 text-xl">
            {selectedDeparture.missingGuideCount}
          </p>
        </div>
      </div>

      <div className="space-y-3 max-h-[620px] overflow-y-auto pr-1">
        {candidates.map(({ guide, recommendation }) => {
          const meta = recommendationMeta[recommendation.status];
          const utilization = Math.round(
            ((guide.monthlyWorkloadDays + selectedDeparture.workloadDays) /
              guide.monthlyWorkloadLimit) *
              100,
          );

          return (
            <div
              key={guide.id}
              className="bg-surface-container-low rounded-2xl p-4 space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-black flex items-center justify-center">
                    {guide.avatarInitials}
                  </div>
                  <div>
                    <p className="font-black text-on-surface">
                      {guide.fullName}
                    </p>
                    <p className="text-sm text-on-surface-variant">
                      Đánh giá {guide.rating.toFixed(1)} / 5
                    </p>
                  </div>
                </div>
                <StatusBadge label={meta.label} tone={meta.tone} />
              </div>

              <div className="flex flex-wrap gap-2">
                {guide.skills.map((skill) => (
                  <PillBadge
                    key={`${guide.id}-${skill}`}
                    tone="surface-glass"
                    size="xs"
                  >
                    {tourTypeMap[skill]}
                  </PillBadge>
                ))}
                {guide.languages.map((language) => (
                  <PillBadge
                    key={`${guide.id}-${language}`}
                    tone="primary-soft"
                    size="xs"
                  >
                    {language}
                  </PillBadge>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wide text-outline">
                  <span>Định mức công việc dự kiến</span>
                  <span>{utilization}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/80 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      utilization > 100
                        ? "bg-error"
                        : utilization >= 90
                          ? "bg-amber-500"
                          : "bg-primary"
                    }`}
                    style={{ width: `${Math.min(utilization, 100)}%` }}
                  />
                </div>
              </div>

              <ul className="space-y-1 text-sm text-on-surface-variant leading-relaxed">
                {recommendation.reasons.map((reason, index) => (
                  <li
                    key={`${guide.id}-reason-${index}`}
                    className="flex items-start gap-2"
                  >
                    <Icon
                      name={
                        reason.includes("Guide is Busy")
                          ? "warning"
                          : reason.includes("Không")
                            ? "cancel"
                            : "check_circle"
                      }
                      className="text-base mt-0.5"
                    />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-1">
                <p className="text-sm font-bold text-on-surface">
                  Điểm phù hợp: {recommendation.score}
                </p>
                <AdminButton
                  variant={meta.buttonVariant}
                  size="sm"
                  disabled={recommendation.status === "blocked"}
                  onClick={() => onAssignGuide(guide.id)}
                >
                  {recommendation.status === "blocked"
                    ? "Không thể phân công"
                    : "Phân công"}
                </AdminButton>
              </div>
            </div>
          );
        })}
      </div>
    </AdminCard>
  );
}
