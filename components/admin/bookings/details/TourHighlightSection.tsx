import Icon from "@/components/ui/Icon";
import { TourHighlightData } from "@/types/admin-booking-details";
import Image from "next/image";

interface TourHighlightSectionProps {
  tour: TourHighlightData;
}

const TOUR_META_LABELS = [
  { key: "departureDate", label: "Khởi hành" },
  { key: "returnDate", label: "Trở về" },
  { key: "groupSize", label: "Quy mô đoàn" },
] as const;

export default function TourHighlightSection({
  tour,
}: TourHighlightSectionProps) {
  return (
    <section className="bg-surface-container-lowest rounded-2xl p-0 overflow-hidden flex flex-col md:flex-row shadow-sm group">
      <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
        <Image
          alt="Điểm đến tour"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          src={tour.imageUrl}
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg shadow-sm">
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
            {tour.statusLabel}
          </span>
        </div>
      </div>
      <div className="p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-on-background tracking-tight">
              {tour.title}
            </h3>
            <span className="bg-primary-fixed text-primary text-[10px] font-black px-2 py-1 rounded">
              {tour.tierLabel}
            </span>
          </div>
          <div className="flex gap-6 mt-4">
            {TOUR_META_LABELS.map((meta) => (
              <div key={meta.key} className="flex flex-col">
                <span className="text-[10px] font-bold text-outline uppercase tracking-wider">
                  {meta.label}
                </span>
                <span className="text-sm font-semibold">{tour[meta.key]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-outline-variant/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="location_on" filled className="text-primary" />
            <span className="text-sm font-medium">{tour.location}</span>
          </div>
          <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
            Xem chi tiết tour <Icon name="open_in_new" className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
}
