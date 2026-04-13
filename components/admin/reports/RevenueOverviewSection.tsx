import { RevenueCategoryBar } from "@/types/admin-reports";
import AdminCard from "@/components/ui/AdminCard";

interface RevenueOverviewSectionProps {
  bars: RevenueCategoryBar[];
  totalRevenue: string;
  bookingAverage: string;
  margin: string;
}

export default function RevenueOverviewSection({
  bars,
  totalRevenue,
  bookingAverage,
  margin,
}: RevenueOverviewSectionProps) {
  return (
    <>
      <AdminCard className="col-span-12 md:col-span-8 flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-headline font-bold text-slate-900">
              Doanh thu theo danh mục tour
            </h3>
            <p className="text-sm text-slate-500">
              Hiệu suất toàn cầu trên 5 điểm đến cao cấp hàng đầu
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              <span className="text-xs font-medium text-slate-600">
                Hiện tại
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-secondary-container"></span>
              <span className="text-xs font-medium text-slate-600">
                Trước đó
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between h-64 px-4">
          {bars.map((bar) => (
            <div
              key={bar.id}
              className="flex flex-col items-center gap-3 w-16 group"
            >
              <div className="w-full flex items-end gap-1 h-full">
                <div
                  className="w-1/2 bg-linear-to-b from-primary to-primary-container rounded-t-lg group-hover:opacity-90 transition-opacity"
                  style={{ height: `${bar.currentHeightPercent}%` }}
                ></div>
                <div
                  className="w-1/2 bg-surface-container-high rounded-t-lg"
                  style={{ height: `${bar.previousHeightPercent}%` }}
                ></div>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                {bar.label}
              </span>
            </div>
          ))}
        </div>
      </AdminCard>

      <div className="col-span-12 md:col-span-4 bg-primary text-white rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative">
        <div className="z-10">
          <h3 className="text-lg font-headline font-bold text-on-primary-container">
            Tổng doanh thu
          </h3>
          <p className="text-4xl font-headline font-extrabold mt-2 tracking-tighter">
            {totalRevenue}
          </p>
          <div className="mt-4 inline-flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full text-xs font-bold">
            <span className="material-symbols-outlined text-sm">
              trending_up
            </span>
            +12.4% so với cùng kỳ năm trước
          </div>
        </div>
        <div className="z-10 mt-12 grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-[10px] text-on-primary-container uppercase font-bold tracking-widest">
              Giá trị đặt chỗ TB
            </p>
            <p className="text-xl font-headline font-bold">{bookingAverage}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] text-on-primary-container uppercase font-bold tracking-widest">
              Biên lợi nhuận
            </p>
            <p className="text-xl font-headline font-bold">{margin}</p>
          </div>
        </div>
        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-12 -right-4 w-32 h-32 bg-primary-container/40 rounded-full blur-2xl"></div>
      </div>
    </>
  );
}
