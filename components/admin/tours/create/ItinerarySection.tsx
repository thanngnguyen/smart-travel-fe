import { TourDraftDay } from "@/types/admin-create-tour";

interface ItinerarySectionProps {
  days: TourDraftDay[];
}

export default function ItinerarySection({ days }: ItinerarySectionProps) {
  return (
    <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_20px_40px_rgba(25,28,30,0.06)]">
      <div className="flex justify-between items-center border-b border-outline-variant/10 pb-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">route</span>
          <h3 className="text-lg font-bold text-on-surface">
            Lịch trình được tuyển chọn
          </h3>
        </div>
        <button className="flex items-center gap-2 text-primary font-bold text-xs hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-colors">
          <span className="material-symbols-outlined text-sm">add_circle</span>
          Thêm ngày
        </button>
      </div>

      <div className="relative pl-8 space-y-12">
        <div className="absolute left-[15px] top-4 bottom-4 w-1 bg-primary-fixed rounded-full"></div>

        {days.map((day) => (
          <div key={day.id} className="relative">
            <div className="absolute -left-[24px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-surface-container-lowest ring-4 ring-primary/5"></div>
            <div className="bg-surface p-6 rounded-2xl border border-outline-variant/10 shadow-sm space-y-4">
              <div className="flex justify-between">
                <h4 className="font-bold text-on-surface">{day.title}</h4>
                <span className="material-symbols-outlined text-outline cursor-pointer hover:text-error transition-colors">
                  delete
                </span>
              </div>
              <textarea
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm text-on-surface-variant italic"
                placeholder={day.descriptionPlaceholder}
                rows={2}
              ></textarea>
              <div className="flex gap-2">
                {day.tags.map((tag) => (
                  <span
                    key={`${day.id}-${tag}`}
                    className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold text-outline uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
