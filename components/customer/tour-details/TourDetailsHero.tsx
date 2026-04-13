import Icon from "@/components/ui/Icon";
import IconButton from "@/components/ui/IconButton";
import PillBadge from "@/components/ui/PillBadge";
import Image from "next/image";
import {
  TourDetailsMeta,
  TourGalleryImage,
} from "@/types/customer-tour-details";

interface TourDetailsHeroProps {
  meta: TourDetailsMeta;
  gallery: TourGalleryImage[];
}

export default function TourDetailsHero({
  meta,
  gallery,
}: TourDetailsHeroProps) {
  const [mainImage, ...secondaryImages] = gallery;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <PillBadge tone="primary-container" size="sm" radius="lg" uppercase>
              {meta.categoryLabel}
            </PillBadge>
            <div className="flex items-center gap-1 text-yellow-500 text-sm font-bold">
              <Icon name="star" filled className="text-sm" />
              {meta.rating} ({meta.reviewCount} đánh giá)
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-on-surface tracking-tight">
            {meta.title}
          </h1>
          <p className="flex items-center text-outline mt-3">
            <Icon name="location_on" className="text-lg mr-1" />
            {meta.location}
          </p>
        </div>
        <div className="flex gap-4">
          <IconButton icon="favorite" size="md" radius="xl" />
          <IconButton icon="share" size="md" radius="xl" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden mt-6">
        {mainImage ? (
          <div className="md:col-span-2 relative group h-full">
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : null}

        <div className="hidden md:flex flex-col gap-4 h-full">
          {secondaryImages.slice(0, 2).map((image) => (
            <div
              key={image.id}
              className="flex-1 relative overflow-hidden group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                fill
                sizes="25vw"
              />
            </div>
          ))}
        </div>

        <div className="hidden md:flex flex-col gap-4 h-full">
          {secondaryImages.slice(2, 4).map((image, index) => (
            <div
              key={image.id}
              className="flex-1 relative overflow-hidden group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                fill
                sizes="25vw"
              />
              {index === 1 ? (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/30 transition-colors">
                  <span className="text-white font-bold tracking-wider">
                    Xem tất cả 24 ảnh
                  </span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
