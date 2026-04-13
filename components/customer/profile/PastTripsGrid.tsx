import Icon from "@/components/ui/Icon";
import IconButton from "@/components/ui/IconButton";
import PillBadge from "@/components/ui/PillBadge";
import Image from "next/image";
import { PastTripItem } from "@/types/customer-profile";

interface PastTripsGridProps {
  trips: PastTripItem[];
}

function ReviewedStars() {
  return (
    <div className="flex items-center gap-1 text-tertiary">
      <Icon name="star" className="text-sm" filled />
      <Icon name="star" className="text-sm" filled />
      <Icon name="star" className="text-sm" filled />
      <Icon name="star" className="text-sm" filled />
      <Icon name="star" className="text-sm" />
      <span className="text-[10px] text-on-surface-variant ml-1">
        Đã đánh giá
      </span>
    </div>
  );
}

function PastTripCard({ trip }: { trip: PastTripItem }) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      <div className="h-40 relative overflow-hidden">
        <Image
          alt={trip.imageAlt}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          src={trip.imageUrl}
        />
        <div className="absolute top-3 left-3">
          <PillBadge
            tone="surface-glass"
            size="xs"
            className="font-black uppercase tracking-widest shadow-sm"
          >
            Hoàn thành
          </PillBadge>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs text-on-surface-variant font-medium mb-1">
          {trip.monthLabel}
        </p>
        <h4 className="font-bold text-on-surface mb-3 line-clamp-1">
          {trip.title}
        </h4>
        {trip.isReviewed ? (
          <ReviewedStars />
        ) : (
          <button className="w-full py-2 bg-surface-container text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2">
            <Icon name="rate_review" className="text-sm" /> Viết đánh giá
          </button>
        )}
      </div>
    </div>
  );
}

export default function PastTripsGrid({ trips }: PastTripsGridProps) {
  return (
    <div className="md:col-span-3 mt-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-on-surface tracking-tight">
            Trải nghiệm đã qua
          </h2>
          <p className="text-on-surface-variant">
            Nhìn lại kỷ niệm và chia sẻ đánh giá để giúp những du khách khác.
          </p>
        </div>
        <div className="hidden md:flex gap-2">
          <IconButton icon="chevron_left" variant="outline" size="sm" />
          <IconButton icon="chevron_right" variant="outline" size="sm" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {trips.map((trip) => (
          <PastTripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}
