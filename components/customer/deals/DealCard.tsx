import Icon from "@/components/ui/Icon";
import { CustomerDeal } from "@/types/customer-deals";
import Image from "next/image";
import Link from "next/link";

interface DealCardProps {
  deal: CustomerDeal;
  isFavorite: boolean;
  isPromoCopied: boolean;
  onToggleFavorite: (dealId: string) => void;
  onCopyPromoCode: (deal: CustomerDeal) => void;
}

export default function DealCard({
  deal,
  isFavorite,
  isPromoCopied,
  onToggleFavorite,
  onCopyPromoCode,
}: DealCardProps) {
  return (
    <article className="group bg-surface-container-lowest rounded-[1.75rem] overflow-hidden shadow-[0_12px_30px_rgba(25,28,30,0.04)] hover:shadow-[0_20px_45px_rgba(25,28,30,0.08)] transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={deal.imageUrl}
          alt={deal.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        <span className="absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-black bg-tertiary-fixed text-on-tertiary-fixed uppercase tracking-wide">
          {deal.discountLabel}
        </span>

        <button
          type="button"
          aria-label="Lưu ưu đãi"
          onClick={() => onToggleFavorite(deal.id)}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/85 backdrop-blur-md hover:bg-white transition-colors"
        >
          <Icon
            name="favorite"
            filled={isFavorite}
            className={isFavorite ? "text-primary" : "text-on-surface-variant"}
          />
        </button>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-[11px] font-black uppercase tracking-[0.16em] text-primary/70 mb-2">
          {deal.categoryLabel}
        </p>
        <h3 className="text-xl font-extrabold tracking-tight text-on-surface leading-snug">
          {deal.title}
        </h3>
        <p className="text-sm text-outline mt-1.5">{deal.location}</p>

        <p className="text-sm text-on-surface-variant mt-4 leading-relaxed min-h-[44px]">
          {deal.shortDescription}
        </p>

        <div className="mt-5 flex items-center gap-2 text-xs text-on-surface-variant">
          <Icon name="calendar_today" className="text-sm" />
          Hạn dùng: {deal.validUntil}
        </div>

        <div className="mt-4 p-3.5 rounded-xl bg-surface-container-low flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-outline">
              Mã ưu đãi
            </p>
            <p className="font-mono text-sm font-black text-primary mt-0.5">
              {deal.promoCode}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onCopyPromoCode(deal)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold bg-primary/10 text-primary hover:bg-primary/15 transition-colors"
          >
            <Icon
              name={isPromoCopied ? "check" : "content_copy"}
              className="text-base"
            />
            {isPromoCopied ? "Đã copy" : "Sao chép"}
          </button>
        </div>

        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold text-outline line-through uppercase tracking-wide">
              {deal.originalPrice}
            </p>
            <p className="text-xl font-black text-primary tracking-tight">
              {deal.discountedPrice}
            </p>
          </div>

          <div className="flex gap-2">
            <Link
              href={`/deals/${deal.id}`}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-outline-variant/40 text-sm font-bold text-on-surface-variant hover:bg-surface-container transition-colors"
            >
              Chi tiết
            </Link>
            <Link
              href={`/checkout/${deal.id}`}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary-container transition-colors"
            >
              Đặt ngay
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
