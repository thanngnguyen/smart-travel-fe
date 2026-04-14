import { CustomerDealsNewsletterContent } from "@/types/customer-deals";
import Image from "next/image";

interface DealsNewsletterSectionProps {
  newsletter: CustomerDealsNewsletterContent;
}

export default function DealsNewsletterSection({
  newsletter,
}: DealsNewsletterSectionProps) {
  return (
    <section className="mt-20 rounded-[2rem] overflow-hidden bg-primary-container grid grid-cols-1 lg:grid-cols-12 shadow-[0_22px_45px_rgba(12,86,208,0.2)]">
      <div className="lg:col-span-7 px-6 py-10 md:px-10 md:py-12 xl:px-12 xl:py-14">
        <h2 className="text-3xl md:text-4xl font-black leading-tight text-white max-w-xl tracking-tight">
          {newsletter.title}
        </h2>
        <p className="text-on-primary-container/80 mt-4 text-base md:text-lg max-w-xl leading-relaxed">
          {newsletter.description}
        </p>

        <form
          className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center max-w-xl"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="email"
            placeholder={newsletter.emailPlaceholder}
            className="w-full sm:flex-1 px-5 py-3.5 rounded-xl bg-white text-on-surface outline-none focus:ring-4 focus:ring-white/25"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-primary text-white text-sm font-black hover:bg-primary/90 transition-colors"
          >
            {newsletter.submitLabel}
          </button>
        </form>
      </div>

      <div className="hidden lg:block lg:col-span-5 relative min-h-[320px]">
        <Image
          src={newsletter.backgroundImageUrl}
          alt="Newsletter background"
          fill
          className="object-cover"
          sizes="40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent" />
      </div>
    </section>
  );
}
