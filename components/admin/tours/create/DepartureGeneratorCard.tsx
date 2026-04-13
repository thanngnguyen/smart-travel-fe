import { FrequencyOption } from "@/types/admin-create-tour";

interface DepartureGeneratorCardProps {
  frequencyOptions: FrequencyOption[];
}

export default function DepartureGeneratorCard({
  frequencyOptions,
}: DepartureGeneratorCardProps) {
  return (
    <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10 space-y-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-primary">
          calendar_month
        </span>
        <h3 className="text-lg font-bold text-on-surface">
          Trình tạo lịch khởi hành
        </h3>
      </div>

      <p className="text-xs text-on-surface-variant leading-relaxed">
        Tự động tạo các lịch khởi hành lặp lại cho Tour gốc này theo lịch mùa
        vụ.
      </p>

      <div className="space-y-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-extrabold text-primary uppercase tracking-widest">
            Tần suất
          </label>
          <select className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-2.5 text-sm font-semibold text-on-surface focus:ring-2 focus:ring-primary/20">
            {frequencyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-extrabold text-primary uppercase tracking-widest">
              Tháng bắt đầu
            </label>
            <input
              className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-2 text-sm font-semibold text-on-surface"
              type="month"
              defaultValue="2024-05"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-extrabold text-primary uppercase tracking-widest">
              Số lần lặp
            </label>
            <input
              className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-2 text-sm font-semibold text-on-surface"
              type="number"
              defaultValue="12"
            />
          </div>
        </div>
      </div>

      <div className="p-4 bg-tertiary-container/10 border border-tertiary-container/20 rounded-xl">
        <div className="flex gap-2 items-start">
          <span className="material-symbols-outlined text-tertiary-container text-sm">
            info
          </span>
          <p className="text-[10px] font-medium text-tertiary">
            Hệ thống sẽ tạo 12 ngày tour riêng lẻ bắt đầu từ 04/05/2024. Giá và
            sức chứa có thể chỉnh theo từng lịch khởi hành sau đó.
          </p>
        </div>
      </div>

      <button className="w-full py-3 rounded-xl bg-surface-container-lowest text-primary border border-primary/20 font-bold text-sm hover:bg-primary hover:text-white transition-all shadow-sm">
        Tạo lịch hàng loạt
      </button>
    </section>
  );
}
