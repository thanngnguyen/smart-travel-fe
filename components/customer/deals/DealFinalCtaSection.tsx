import { CustomerDealFinalCta } from "@/types/customer-deals";
import Image from "next/image";
import Link from "next/link";

interface DealFinalCtaSectionProps {
  cta: CustomerDealFinalCta;
}

export default function DealFinalCtaSection({ cta }: DealFinalCtaSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-[2.4rem] bg-primary text-white px-6 py-10 md:px-10 md:py-12">
      <Image
        src={cta.backgroundImageUrl}
        alt="CTA background"
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-container/80" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
            {cta.title}
          </h2>
          <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed">
            {cta.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:shrink-0">
          <Link
            href={cta.primaryActionHref}
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-primary text-base font-black hover:bg-surface transition-colors"
          >
            {cta.primaryActionLabel}
          </Link>
          <Link
            href={cta.secondaryActionHref}
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-primary-container text-white text-base font-black border border-white/20 hover:bg-primary transition-colors"
          >
            {cta.secondaryActionLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
