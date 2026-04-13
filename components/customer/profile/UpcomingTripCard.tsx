import Icon from "@/components/ui/Icon";
import Image from "next/image";
import { UpcomingTripData } from "@/types/customer-profile";

interface UpcomingTripCardProps {
  trip: UpcomingTripData;
}

export default function UpcomingTripCard({ trip }: UpcomingTripCardProps) {
  return (
    <div className="md:col-span-2 bg-surface-container-lowest rounded-3xl p-8 shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8">
        <span className="bg-primary-container/10 text-primary px-4 py-1 rounded-full text-xs font-bold">
          Sắp tới
        </span>
      </div>
      <h2 className="text-2xl font-extrabold mb-6">Chuyến đi sắp tới</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden">
          <Image
            alt="Venice Tour"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={trip.imageUrl}
            width={192}
            height={192}
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-on-surface mb-2">
            {trip.title}
          </h3>
          <div className="flex items-center gap-4 text-on-surface-variant text-sm mb-4">
            <span className="flex items-center gap-1">
              <Icon name="calendar_today" className="text-base" />{" "}
              {trip.dateRange}
            </span>
            <span className="flex items-center gap-1">
              <Icon name="location_on" className="text-base" /> {trip.location}
            </span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-xs font-bold">
              <span>Mức độ sẵn sàng</span>
              <span>{trip.readinessPercent}%</span>
            </div>
            <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: `${trip.readinessPercent}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-outline-variant/10 flex justify-between items-center">
        <p className="text-sm text-on-surface-variant italic">
          {trip.warningNote}
        </p>
        <button className="text-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
          Quản lý lịch trình <Icon name="arrow_forward" />
        </button>
      </div>
    </div>
  );
}
