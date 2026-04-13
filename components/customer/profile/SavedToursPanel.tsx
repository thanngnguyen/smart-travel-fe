import Icon from "@/components/ui/Icon";
import { SavedTourItem } from "@/types/customer-profile";

interface SavedToursPanelProps {
  tours: SavedTourItem[];
}

export default function SavedToursPanel({ tours }: SavedToursPanelProps) {
  return (
    <div className="bg-surface-container-low rounded-3xl p-8 flex flex-col justify-between border border-white/50">
      <h2 className="text-xl font-extrabold mb-6">Tour đã lưu</h2>
      <div className="space-y-6">
        {tours.map((tour) => (
          <div key={tour.id} className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
              <Icon name={tour.icon} />
            </div>
            <div>
              <p className="text-sm font-bold">{tour.title}</p>
              <p className="text-xs text-on-surface-variant">{tour.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-8 text-sm font-bold text-primary-container underline underline-offset-4">
        Xem tất cả đã lưu (12)
      </button>
    </div>
  );
}
