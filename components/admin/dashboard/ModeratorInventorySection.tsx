import {
  InventoryDepartureItem,
  ModeratorAlertItem,
} from "@/types/admin-dashboard";
import Image from "next/image";

interface ModeratorInventorySectionProps {
  alerts: ModeratorAlertItem[];
  departures: InventoryDepartureItem[];
}

export default function ModeratorInventorySection({
  alerts,
  departures,
}: ModeratorInventorySectionProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-7 bg-tertiary-container text-on-tertiary-container p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                psychology
              </span>
            </div>
            <h2 className="text-xl font-bold font-headline">
              AI kiểm duyệt: Rà soát cảnh báo đỏ
            </h2>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest bg-black/20 px-3 py-1 rounded-full">
            Phân tích trực tiếp
          </span>
        </div>

        <div className="mt-8 space-y-4 relative z-10">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex items-center justify-between group hover:bg-white/15 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full overflow-hidden border-2 ${alert.avatarBorderClassName}`}
                >
                  <Image
                    alt={alert.reviewerName}
                    className="w-full h-full object-cover"
                    src={alert.avatarUrl}
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <p className="text-sm font-bold">
                    {alert.reviewerName}
                    <span className="text-white/60 font-normal ml-2">
                      {alert.tripCode}
                    </span>
                  </p>
                  <p className="text-xs text-white/80 line-clamp-1 italic">
                    {alert.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded ${alert.severityClassName}`}
                    >
                      {alert.severityLabel}
                    </span>
                  </div>
                </div>
              </div>
              <button className="bg-white text-tertiary font-bold px-4 py-2 rounded-xl text-sm shadow-lg shadow-black/10 hover:scale-105 transition-transform">
                {alert.actionLabel}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5 bg-surface-container-low p-8 rounded-3xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold font-headline">
            Chuyến khởi hành sắp tới
          </h2>
          <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
            Danh sách đầy đủ
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        </div>
        <div className="space-y-6">
          {departures.map((departure) => (
            <div key={departure.id} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-bold text-on-surface">
                  {departure.title}
                </span>
                <span className="text-on-surface-variant">
                  {departure.seatStatus}
                </span>
              </div>
              <div className="h-3 w-full bg-surface-container-high rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${departure.ratioClassName}`}
                  style={{ width: `${departure.ratioWidthPercent}%` }}
                ></div>
              </div>
              <p
                className={`text-[10px] uppercase font-bold tracking-tighter ${departure.noteClassName}`}
              >
                {departure.noteText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
