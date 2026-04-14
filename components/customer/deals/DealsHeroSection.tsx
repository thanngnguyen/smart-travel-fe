import Icon from "@/components/ui/Icon";
import { CustomerDealsHeroContent } from "@/types/customer-deals";
import Image from "next/image";
import Link from "next/link";

interface DealsHeroSectionProps {
  hero: CustomerDealsHeroContent;
  dealsAnchorId: string;
  newsletterAnchorId: string;
}

export default function DealsHeroSection({
  hero,
  dealsAnchorId,
  newsletterAnchorId,
}: DealsHeroSectionProps) {
  return (
    <section className="relative min-h-[430px] md:min-h-[520px] overflow-hidden flex items-center group">
      <Image
        src={hero.backgroundImageUrl}
        alt="Deals hero background"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-primary/10" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 md:px-8 w-full pt-[4.5rem] md:pt-20 pb-12">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/18 backdrop-blur-md text-xs md:text-sm font-bold uppercase tracking-wider">
            <Icon name="local_offer" className="text-base" />
            {hero.badgeLabel}
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight tracking-tight">
            {hero.title}
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/90 max-w-xl font-medium leading-relaxed">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
            <Link
              href={`#${dealsAnchorId}`}
              className="inline-flex items-center justify-center px-6 md:px-8 py-3.5 bg-white text-primary rounded-xl font-extrabold shadow-[0_15px_30px_rgba(0,0,0,0.18)] hover:shadow-[0_18px_35px_rgba(0,0,0,0.2)] transition-all"
            >
              {hero.primaryActionLabel}
            </Link>
            <Link
              href={`#${newsletterAnchorId}`}
              className="inline-flex items-center justify-center px-6 md:px-8 py-3.5 rounded-xl bg-white/12 border border-white/25 backdrop-blur-sm font-extrabold hover:bg-white/20 transition-colors"
            >
              {hero.secondaryActionLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
