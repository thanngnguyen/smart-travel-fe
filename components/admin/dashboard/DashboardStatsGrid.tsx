import Icon from "@/components/ui/Icon";
import { DashboardMetric } from "@/types/admin-dashboard";

interface DashboardStatsGridProps {
  metrics: DashboardMetric[];
}

export default function DashboardStatsGrid({
  metrics,
}: DashboardStatsGridProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <div
          key={metric.id}
          className="bg-surface-container-lowest p-6 rounded-2xl shadow-none transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 group"
        >
          <div className="flex items-start justify-between">
            <div
              className={`p-3 rounded-xl transition-colors ${metric.iconWrapperClassName}`}
            >
              <Icon
                name={metric.iconName}
                className="material-symbols-outlined"
                filled={metric.iconName === "check_circle"}
              />
            </div>
            {metric.deltaText ? (
              <span
                className={`text-sm font-bold flex items-center gap-1 ${metric.deltaToneClassName}`}
              >
                {metric.deltaText}
                <Icon name="trending_up" className="text-xs" />
              </span>
            ) : metric.noteText && metric.noteToneClassName?.includes("bg-") ? (
              <span className={metric.noteToneClassName}>
                {metric.noteText}
              </span>
            ) : metric.noteText ? (
              <span className={`text-sm font-bold ${metric.noteToneClassName}`}>
                {metric.noteText}
              </span>
            ) : null}
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">
              {metric.label}
            </h3>
            <p className="text-3xl font-extrabold text-on-surface mt-1">
              {metric.value}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
