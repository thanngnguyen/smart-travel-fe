import { IntentStat } from "@/types/admin-insights";

interface IntentStatsCardProps {
  stats: IntentStat[];
}

export default function IntentStatsCard({ stats }: IntentStatsCardProps) {
  return (
    <div className="col-span-4 bg-surface-container-high rounded-2xl p-6 shadow-sm flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-extrabold mb-4">Thống kê ý định</h3>
        <div className="space-y-4">
          {stats.map((stat) => (
            <div key={stat.id}>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>{stat.label}</span>
                <span className={stat.textColorClassName}>{stat.percent}</span>
              </div>
              <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${stat.barColorClassName}`}
                  style={{ width: stat.percent }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-outline-variant/20">
        <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-3xl">
            smart_toy
          </span>
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
              Tỷ lệ xử lý bởi AI
            </p>
            <p className="text-2xl font-black text-primary">91.4%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
