import Icon from "@/components/ui/Icon";
import { CustomerDealApplicableTour } from "@/types/customer-deals";
import Image from "next/image";
import Link from "next/link";

interface DealApplicableToursSectionProps {
  title: string;
  description: string;
  tours: CustomerDealApplicableTour[];
}

export default function DealApplicableToursSection({
  title,
  description,
  tours,
}: DealApplicableToursSectionProps) {
  return (
    <section className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-on-surface">
            {title}
          </h2>
          <p className="text-on-surface-variant mt-2">{description}</p>
        </div>
        <Link
          href="/tours"
          className="inline-flex items-center gap-1 text-primary font-black hover:underline"
        >
          Xem tất cả
          <Icon name="chevron_right" className="text-base" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
        {tours.map((tour) => (
          <article
            key={tour.id}
            className="group rounded-3xl bg-surface-container-lowest overflow-hidden shadow-[0_12px_30px_rgba(25,28,30,0.04)] hover:shadow-[0_20px_44px_rgba(25,28,30,0.08)] transition-shadow"
          >
            <div className="relative h-60 overflow-hidden">
              <Image
                src={tour.imageUrl}
                alt={tour.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 text-primary text-xs font-black backdrop-blur-sm">
                {tour.discountLabel}
              </span>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex justify-between gap-3 items-start">
                <h3 className="text-lg font-black tracking-tight leading-snug text-on-surface">
                  {tour.title}
                </h3>
                <div className="inline-flex items-center gap-1 text-yellow-500 text-xs font-black shrink-0">
                  <Icon name="star" filled className="text-sm" />
                  <span className="text-on-surface">
                    {tour.rating.toFixed(1)}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-on-surface-variant">
                <span className="inline-flex items-center gap-1">
                  <Icon name="schedule" className="text-sm" />
                  {tour.duration}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Icon name="group" className="text-sm" />
                  Còn {tour.seatsLeft} chỗ
                </span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <p className="text-[11px] text-outline line-through font-bold uppercase tracking-wide">
                    {tour.originalPrice}
                  </p>
                  <p className="text-xl font-black tracking-tight text-primary">
                    {tour.discountedPrice}
                  </p>
                </div>
                <Link
                  href={`/tours/${tour.id}`}
                  className="w-11 h-11 rounded-xl bg-surface-container-high inline-flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  <Icon name="arrow_forward" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
