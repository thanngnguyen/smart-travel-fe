import Icon from "@/components/ui/Icon";
import { CustomerDeal, CustomerDealHero } from "@/types/customer-deals";
import Image from "next/image";
import Link from "next/link";

interface DealDetailsHeroProps {
  deal: CustomerDeal;
  hero: CustomerDealHero;
}

export default function DealDetailsHero({ deal, hero }: DealDetailsHeroProps) {
  return (
    <section className="relative min-h-[620px] md:min-h-[720px] overflow-hidden">
      <Image
        src={hero.backgroundImageUrl}
        alt={deal.title}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-24 text-white">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs md:text-sm font-black uppercase tracking-wider">
          <Icon name="local_offer" className="text-base" />
          {hero.campaignLabel}
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl xl:text-7xl font-black leading-tight tracking-tight max-w-3xl">
          {hero.title}
        </h1>

        <p className="mt-5 text-lg text-white/90 leading-relaxed max-w-2xl">
          {hero.description}
        </p>

        <div className="mt-8 flex flex-wrap items-stretch gap-3">
          <Link
            href={`/checkout/${deal.id}`}
            className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-primary-container text-white text-base font-black shadow-[0_18px_35px_rgba(0,0,0,0.2)] hover:bg-primary transition-colors"
          >
            {hero.primaryActionLabel}
          </Link>

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/12 border border-white/25 backdrop-blur-md">
            <Icon name="calendar_today" className="text-secondary-fixed" />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/70 font-black">
                Hết hạn sau
              </p>
              <p className="font-bold">{hero.countdownLabel}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 max-w-md glass-panel rounded-2xl p-6 text-on-surface shadow-[0_24px_45px_rgba(0,0,0,0.2)]">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-primary font-black">
                Giảm trực tiếp
              </p>
              <p className="text-4xl font-black tracking-tight">
                {hero.discountValue}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-widest text-outline font-black">
                Mã ưu đãi
              </p>
              <p className="mt-1 font-mono text-xl font-black px-3 py-1 rounded-lg bg-surface-container-high">
                {hero.promoCode}
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-on-surface-variant">Giá ưu đãi từ</span>
            <span className="text-primary font-black text-lg">
              {deal.discountedPrice}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
