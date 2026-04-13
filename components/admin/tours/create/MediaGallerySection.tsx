import { MediaThumbnail } from "@/types/admin-create-tour";
import Image from "next/image";

interface MediaGallerySectionProps {
  thumbnails: MediaThumbnail[];
}

export default function MediaGallerySection({
  thumbnails,
}: MediaGallerySectionProps) {
  return (
    <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_20px_40px_rgba(25,28,30,0.06)] space-y-4">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-primary">image</span>
        <h3 className="text-lg font-bold text-on-surface">Thư viện media</h3>
      </div>

      <div className="aspect-video bg-surface-container-low rounded-xl border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-surface-container-high transition-colors">
        <span className="material-symbols-outlined text-4xl text-outline-variant group-hover:text-primary transition-colors">
          cloud_upload
        </span>
        <p className="text-xs font-bold text-outline uppercase">
          Tải ảnh nổi bật
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {thumbnails.map((thumbnail) => (
          <div
            key={thumbnail.id}
            className="aspect-square bg-surface-container rounded-lg overflow-hidden relative group"
          >
            <Image
              alt={thumbnail.altText}
              className="object-cover"
              data-alt={thumbnail.altText}
              fill
              sizes="(max-width: 1024px) 33vw, 160px"
              src={thumbnail.src}
            />
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <span className="material-symbols-outlined text-white">
                delete
              </span>
            </div>
          </div>
        ))}

        <div className="aspect-square bg-surface-container-low rounded-lg flex items-center justify-center border-2 border-dashed border-outline-variant/20">
          <span className="material-symbols-outlined text-outline-variant">
            add
          </span>
        </div>
      </div>
    </section>
  );
}
