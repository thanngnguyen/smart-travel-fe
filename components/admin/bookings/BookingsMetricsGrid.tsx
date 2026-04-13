import Icon from "@/components/ui/Icon";
import StatTile from "@/components/ui/StatTile";
import { BookingMetric } from "@/types/admin-bookings";

interface BookingsMetricsGridProps {
  metrics: BookingMetric[];
}

export default function BookingsMetricsGrid({
  metrics,
}: BookingsMetricsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric) => {
        if (metric.cardTone === "alert") {
          return (
            <div
              key={metric.id}
              className="bg-tertiary-container p-6 rounded-3xl shadow-[0_20px_40px_rgba(163,53,0,0.1)] flex flex-col"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-on-tertiary-container mb-2">
                {metric.label}
              </span>
              <div className="flex items-center gap-2">
                <Icon
                  name={metric.noteText || "warning"}
                  filled
                  className="text-on-tertiary-container"
                />
                <span className="text-sm font-bold text-on-tertiary-container">
                  {metric.value}
                </span>
              </div>
            </div>
          );
        }

        return (
          <StatTile
            key={metric.id}
            label={metric.label}
            value={metric.value}
            rightContent={
              metric.deltaText ? (
                <span
                  className={`text-sm font-bold ${metric.deltaToneClassName || "text-on-surface-variant"}`}
                >
                  {metric.deltaText}
                </span>
              ) : null
            }
          />
        );
      })}
    </div>
  );
}
