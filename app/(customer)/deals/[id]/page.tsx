import DealApplicableToursSection from "@/components/customer/deals/DealApplicableToursSection";
import DealConditionsSection from "@/components/customer/deals/DealConditionsSection";
import DealDetailsHero from "@/components/customer/deals/DealDetailsHero";
import DealFinalCtaSection from "@/components/customer/deals/DealFinalCtaSection";
import { getCustomerDealDetailsById } from "@/lib/customer-deals-data";
import { notFound } from "next/navigation";

interface DealDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function DealDetailsPage({
  params,
}: DealDetailsPageProps) {
  const { id } = await params;
  const dealDetails = getCustomerDealDetailsById(id);

  if (!dealDetails) {
    notFound();
  }

  return (
    <div className="bg-surface min-h-screen pb-24">
      <DealDetailsHero deal={dealDetails.deal} hero={dealDetails.hero} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-16 md:-mt-20 relative z-10 space-y-9 md:space-y-10">
        <DealConditionsSection
          title={dealDetails.conditionTitle}
          conditionColumns={dealDetails.conditionColumns}
          supportCard={dealDetails.supportCard}
        />

        <DealApplicableToursSection
          title={dealDetails.applicableToursTitle}
          description={dealDetails.applicableToursDescription}
          tours={dealDetails.applicableTours}
        />

        <DealFinalCtaSection cta={dealDetails.finalCta} />
      </div>
    </div>
  );
}
