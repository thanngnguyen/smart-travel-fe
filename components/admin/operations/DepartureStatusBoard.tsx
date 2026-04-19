import AdminCard from "@/components/ui/AdminCard";
import PillBadge from "@/components/ui/PillBadge";
import StatusBadge from "@/components/ui/StatusBadge";
import Icon from "@/components/ui/Icon";
import { DepartureQueueItem } from "@/types/admin-operations";

interface DepartureStatusBoardProps {
  departures: DepartureQueueItem[];
  selectedDepartureId: string;
  onSelectDeparture: (departureId: string) => void;
}

function formatDateLabel(startDate: string, endDate: string) {
  const formatter = new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return `${formatter.format(new Date(startDate))} - ${formatter.format(new Date(endDate))}`;
}

function resolveDepartureTone(departure: DepartureQueueItem) {
  if (departure.departureStatus === "PLANNING") {
    return {
      statusLabel: "PLANNING",
      statusTone: "info" as const,
      hint: "Chuyến đang ở giai đoạn lập kế hoạch mở bán",
    };
  }

  if (departure.departureStatus === "LOCKED") {
    return {
      statusLabel: "LOCKED",
      statusTone: "warning" as const,
      hint: "Đang khóa bán thêm, chờ vận hành điều phối",
    };
  }

  if (!departure.isReadyForAssignment) {
    return {
      statusLabel: "Chưa đủ khách",
      statusTone: "warning" as const,
      hint: `Hiện có ${departure.passengerCount}/${departure.minPassengersRequired} khách`,
    };
  }

  if (departure.missingGuideCount > 0) {
    return {
      statusLabel: "Cần bổ sung HDV",
      statusTone: "error" as const,
      hint: `Thiếu ${departure.missingGuideCount} HDV theo định mức`,
    };
  }

  return {
    statusLabel: "Đã đủ HDV",
    statusTone: "success" as const,
    hint: "Đã sẵn sàng vận hành",
  };
}

export default function DepartureStatusBoard({
  departures,
  selectedDepartureId,
  onSelectDeparture,
}: DepartureStatusBoardProps) {
  return (
    <AdminCard padding="sm" radius="3xl" className="space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-2xl font-black text-on-surface">
            1. Departure Status Queue
          </h3>
          <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
            Hệ thống lọc các chuyến sắp khởi hành và đánh dấu chuyến đang thiếu
            HDV dựa trên định mức 30 khách / 1 HDV.
          </p>
        </div>
        <PillBadge tone="primary-soft" uppercase>
          {departures.length} chuyến sắp khởi hành
        </PillBadge>
      </div>

      <div className="space-y-3">
        {departures.map((departure) => {
          const status = resolveDepartureTone(departure);
          const isSelected = departure.id === selectedDepartureId;

          return (
            <button
              key={departure.id}
              type="button"
              onClick={() => onSelectDeparture(departure.id)}
              className={`w-full text-left p-4 rounded-2xl transition-all ${
                isSelected
                  ? "bg-primary/10 shadow-[0_20px_40px_rgba(25,28,30,0.06)]"
                  : "bg-surface-container-low hover:bg-surface-container"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-outline font-bold">
                    {departure.code}
                  </p>
                  <p className="mt-1 text-lg font-black text-on-surface">
                    {departure.tourName}
                  </p>
                  <p className="text-[11px] uppercase tracking-wide text-outline mt-1">
                    Backend status: {departure.departureStatus}
                  </p>
                  <p className="mt-1 text-sm text-on-surface-variant">
                    {formatDateLabel(departure.startDate, departure.endDate)}
                  </p>
                </div>

                <StatusBadge
                  label={status.statusLabel}
                  tone={status.statusTone}
                />
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div className="bg-white/85 rounded-xl px-3 py-2">
                  <p className="text-outline text-[11px] uppercase tracking-wide font-bold">
                    Khách đăng ký
                  </p>
                  <p className="text-on-surface font-bold mt-1">
                    {departure.passengerCount}
                  </p>
                </div>
                <div className="bg-white/85 rounded-xl px-3 py-2">
                  <p className="text-outline text-[11px] uppercase tracking-wide font-bold">
                    Định mức HDV
                  </p>
                  <p className="text-on-surface font-bold mt-1">
                    {departure.requiredGuideCount}
                  </p>
                </div>
                <div className="bg-white/85 rounded-xl px-3 py-2">
                  <p className="text-outline text-[11px] uppercase tracking-wide font-bold">
                    Đã gán / Thiếu
                  </p>
                  <p className="text-on-surface font-bold mt-1">
                    {departure.assignments.length} /{" "}
                    {departure.missingGuideCount}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs text-on-surface-variant">
                <Icon name="info" className="text-base" />
                <span>{status.hint}</span>
              </div>
            </button>
          );
        })}
      </div>
    </AdminCard>
  );
}
