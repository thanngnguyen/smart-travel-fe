import {
  ConflictCard,
  ConflictLegendItem,
  YieldSuggestion,
} from "@/types/admin-tours";

interface ConflictCheckerSectionProps {
  legend: ConflictLegendItem[];
  conflicts: ConflictCard[];
  yieldSuggestions: YieldSuggestion[];
}

function getConflictStyles(theme: ConflictCard["theme"]) {
  if (theme === "error") {
    return {
      wrapper: "border-error bg-error/10",
      icon: "text-error",
      badge: "text-error",
      primaryAction: "text-error",
      symbol: "dangerous",
    };
  }

  return {
    wrapper: "border-tertiary bg-tertiary/10",
    icon: "text-tertiary",
    badge: "text-tertiary",
    primaryAction: "text-tertiary",
    symbol: "warning",
  };
}

export default function ConflictCheckerSection({
  legend,
  conflicts,
  yieldSuggestions,
}: ConflictCheckerSectionProps) {
  return (
    <section className="col-span-12 lg:col-span-12 bg-surface-container-lowest rounded-2xl p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-bold">
            Trình kiểm tra xung đột thông minh
          </h3>
          <p className="text-sm text-on-surface-variant">
            Kiểm tra trực tiếp việc phân công hướng dẫn viên và chồng chéo tài
            nguyên cho quý sắp tới.
          </p>
        </div>
        <div className="flex gap-4">
          {legend.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 text-sm font-medium"
            >
              <div
                className={`w-3 h-3 rounded-full ${item.dotClassName}`}
              ></div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {conflicts.map((card) => {
          const styles = getConflictStyles(card.theme);

          return (
            <div
              key={card.id}
              className={`p-5 rounded-2xl flex gap-4 ${styles.wrapper}`}
            >
              <div className="shrink-0">
                <span className={`material-symbols-outlined ${styles.icon}`}>
                  {styles.symbol}
                </span>
              </div>
              <div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest ${styles.badge}`}
                >
                  {card.badge}
                </span>
                <h4 className="font-bold text-on-surface mt-1">{card.title}</h4>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  {card.description.prefix}{" "}
                  <span className="font-bold">
                    {card.description.primaryHighlight}
                  </span>
                  {card.description.middle
                    ? ` ${card.description.middle} `
                    : " "}
                  {card.description.secondaryHighlight ? (
                    <span className="font-bold">
                      {card.description.secondaryHighlight}
                    </span>
                  ) : null}{" "}
                  {card.description.suffix}
                </p>
                <div className="mt-4 flex gap-2">
                  <button
                    className={`text-[11px] font-bold underline uppercase ${styles.primaryAction}`}
                  >
                    {card.primaryAction}
                  </button>
                  <button className="text-[11px] font-bold text-on-surface-variant underline uppercase">
                    {card.secondaryAction}
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        <div className="p-5 rounded-2xl bg-surface-container-low flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-on-surface">Quản lý lợi suất</h4>
            <p className="text-xs text-on-surface-variant mt-1 italic">
              Đề xuất tăng giá cho các ngày nhu cầu cao.
            </p>
          </div>
          <div className="mt-6 space-y-3">
            {yieldSuggestions.map((suggestion) => (
              <div key={suggestion.id}>
                <div className="flex justify-between items-center text-xs">
                  <span>{suggestion.label}</span>
                  <span
                    className={`font-black ${suggestion.adjustmentClassName}`}
                  >
                    {suggestion.adjustment}
                  </span>
                </div>
                <div className="w-full bg-outline-variant/30 h-1 rounded-full overflow-hidden mt-1">
                  <div
                    className={`h-full ${suggestion.barWidthClassName} ${suggestion.adjustmentClassName.includes("green") ? "bg-green-500" : "bg-blue-500"}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
