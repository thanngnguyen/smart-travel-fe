import Icon from "@/components/ui/Icon";
import { BookingItineraryMap } from "@/types/admin-booking-details";
import Image from "next/image";

interface ItineraryMapCardProps {
  itineraryMap: BookingItineraryMap;
}

export default function ItineraryMapCard({
  itineraryMap,
}: ItineraryMapCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm">
      <h4 className="font-bold mb-4">Bản đồ lịch trình</h4>
      <div className="w-full h-40 bg-surface-container-high rounded-xl relative overflow-hidden group">
        <Image
          alt="Bản đồ"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          src={itineraryMap.imageUrl}
        />
        <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
        <div className="absolute bottom-3 right-3 bg-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1 shadow-md">
          <Icon name="map" className="text-[12px]" />
          MỞ BẢN ĐỒ
        </div>
      </div>
    </div>
  );
}
