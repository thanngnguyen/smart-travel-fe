import Icon from "@/components/ui/Icon";
import { UserGrowthData } from "@/types/admin-users";

interface UsersInsightsSectionProps {
  growthBars: UserGrowthData[];
  totalActiveUsers: string;
  growthDescription: string;
  securityDescription: string;
}

export default function UsersInsightsSection({
  growthBars,
  totalActiveUsers,
  growthDescription,
  securityDescription,
}: UsersInsightsSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
      <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-3xl shadow-[0_20px_40px_rgba(25,28,30,0.04)] flex flex-col relative overflow-hidden">
        <div className="relative z-10 mb-8">
          <h3 className="text-lg font-headline font-bold text-on-surface mb-2">
            Phân tích tăng trưởng người dùng
          </h3>
          <p className="text-sm text-on-surface-variant max-w-md">
            {growthDescription.replace("12.5%", "")}
            <span className="text-emerald-600 font-bold">12.5%</span>
            {growthDescription.split("12.5%")[1] || ""}
          </p>
        </div>
        <div className="mt-auto flex items-end gap-6 relative z-10">
          <div className="flex items-end gap-2 h-24">
            {growthBars.map((bar, index) => {
              const opacityClass =
                index === growthBars.length - 1
                  ? "bg-primary"
                  : index === growthBars.length - 2
                    ? "bg-primary/80"
                    : index === growthBars.length - 3
                      ? "bg-primary/60"
                      : index === growthBars.length - 4
                        ? "bg-primary/40"
                        : "bg-primary/20";

              return (
                <div
                  key={bar.id}
                  className={`w-8 rounded-t-lg ${opacityClass}`}
                  style={{ height: `${bar.barHeightPercent}%` }}
                ></div>
              );
            })}
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-black text-primary font-headline tracking-tighter">
              {totalActiveUsers}
            </span>
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest mt-1">
              Tổng người dùng hoạt động
            </span>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent flex items-center justify-center pointer-events-none">
          <Icon
            name="trending_up"
            className="text-[160px] text-primary/10 rotate-12 -mr-20"
          />
        </div>
      </div>

      <div className="bg-gradient-to-br from-inverse-surface to-slate-800 rounded-3xl p-8 text-inverse-on-surface flex flex-col shadow-xl">
        <div className="flex justify-between items-start mb-6">
          <Icon name="security" className="p-3 bg-white/10 rounded-2xl" />
          <span className="px-3 py-1 bg-error-container text-on-error-container text-[10px] font-bold rounded-lg uppercase tracking-wider">
            Rủi ro cao
          </span>
        </div>
        <h3 className="text-xl font-bold font-headline mb-2 text-white">
          Kiểm toán bảo mật
        </h3>
        <p className="text-sm text-slate-300 font-light mb-8">
          {securityDescription}
        </p>
        <button className="w-full py-3.5 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-slate-100 transition-all active:scale-95 mt-auto shadow-lg shadow-black/20">
          Xem cảnh báo
        </button>
      </div>
    </div>
  );
}
