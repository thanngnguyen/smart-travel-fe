import { RecurringDayOption, SelectOption } from "@/types/admin-tours";
import AdminButton from "@/components/ui/AdminButton";

interface DepartureGeneratorSectionProps {
  targetItineraryOptions: SelectOption[];
  recurringDays: RecurringDayOption[];
  guideOptions: SelectOption[];
}

export default function DepartureGeneratorSection({
  targetItineraryOptions,
  recurringDays,
  guideOptions,
}: DepartureGeneratorSectionProps) {
  return (
    <section className="col-span-12 lg:col-span-4 bg-surface-container rounded-2xl p-6 border border-outline-variant/10">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-sm">
            event_repeat
          </span>
        </div>
        <h3 className="text-xl font-bold">Trình tạo hàng loạt</h3>
      </div>
      <form className="space-y-5">
        <div>
          <label className="block text-xs font-bold uppercase text-on-surface-variant mb-2">
            Lịch trình mục tiêu
          </label>
          <select className="w-full bg-surface-container-lowest border-none rounded-lg text-sm focus:ring-2 focus:ring-primary py-3">
            {targetItineraryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-on-surface-variant mb-2">
              Ngày bắt đầu
            </label>
            <input
              className="w-full p-2 bg-surface-container-lowest border-none rounded-lg text-sm focus:ring-2 focus:ring-primary"
              type="date"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-on-surface-variant mb-2">
              Ngày kết thúc
            </label>
            <input
              className="w-full p-2 bg-surface-container-lowest border-none rounded-lg text-sm focus:ring-2 focus:ring-primary"
              type="date"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-on-surface-variant mb-2">
            Ngày lặp lại
          </label>
          <div className="flex flex-wrap gap-2">
            {recurringDays.map((day) => (
              <button
                key={day.id}
                className={
                  day.isSelected
                    ? "w-9 h-9 rounded-full bg-primary text-on-primary text-xs font-bold"
                    : "w-9 h-9 rounded-full bg-surface-container-lowest text-on-surface text-xs font-bold border border-outline-variant/20 hover:border-primary"
                }
                type="button"
              >
                {day.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-on-surface-variant mb-2">
            Hướng dẫn viên phụ trách
          </label>
          <select className="w-full bg-surface-container-lowest border-none rounded-lg text-sm focus:ring-2 focus:ring-primary py-3">
            {guideOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <AdminButton
          variant="gradient"
          size="lg"
          fullWidth
          className="py-4 hover:shadow-primary-container/20"
        >
          Xem trước 24 lịch khởi hành
        </AdminButton>
      </form>
    </section>
  );
}
