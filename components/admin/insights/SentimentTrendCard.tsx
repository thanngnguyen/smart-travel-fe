import { SentimentDayBar, SentimentLegendItem } from "@/types/admin-insights";

interface SentimentTrendCardProps {
  legend: SentimentLegendItem[];
  days: SentimentDayBar[];
}

export default function SentimentTrendCard({
  legend,
  days,
}: SentimentTrendCardProps) {
  return (
    <div className="col-span-8 bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-extrabold flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            analytics
          </span>
          Xu hướng phân tích cảm xúc
        </h3>
        <div className="flex gap-4">
          {legend.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-1.5 text-xs font-medium"
            >
              <span
                className={`w-3 h-3 rounded-full ${item.colorClassName}`}
              ></span>
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <div className="h-64 w-full flex items-end justify-between gap-2 px-2">
        {days.map((day) => (
          <div
            key={day.id}
            className="w-full bg-surface-container-low rounded-t-lg relative group"
            style={{ height: day.containerHeight }}
          >
            <div
              className="absolute bottom-0 w-full bg-primary rounded-t-lg opacity-80 group-hover:opacity-100 transition-opacity"
              style={{ height: day.primaryHeight }}
            ></div>
            <div
              className={`absolute bottom-0 w-full rounded-t-lg opacity-80 ${
                day.secondaryTone === "secondary"
                  ? "bg-secondary-container"
                  : "bg-error"
              }`}
              style={{ height: day.secondaryHeight }}
            ></div>
          </div>
        ))}
      </div>

      <div className="flex justify-between text-[10px] text-on-surface-variant font-bold uppercase tracking-widest px-2">
        {days.map((day) => (
          <span key={`${day.id}-label`}>{day.dayLabel}</span>
        ))}
      </div>
    </div>
  );
}
