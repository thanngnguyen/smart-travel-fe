import TourBookingWidget from "@/components/customer/tour-details/TourBookingWidget";
import TourDetailsHero from "@/components/customer/tour-details/TourDetailsHero";
import TourHighlightsSection from "@/components/customer/tour-details/TourHighlightsSection";
import TourOverviewSection from "@/components/customer/tour-details/TourOverviewSection";
import TourTimelineSection from "@/components/customer/tour-details/TourTimelineSection";
import { useCustomerTourDetailsData } from "@/hooks/useCustomerTourDetailsData";

interface TourDetailsPageProps {
  params: {
    id: string;
  };
}

export default function TourDetailsPage({ params }: TourDetailsPageProps) {
  const tourSlug = params?.id;
  const { meta, gallery, highlights, timeline, booking } =
    useCustomerTourDetailsData(tourSlug);

  return (
    <div className="pt-24 pb-20 bg-surface">
      <TourDetailsHero meta={meta} gallery={gallery} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
        <div className="lg:col-span-2 space-y-12">
          <TourOverviewSection description={meta.description} />
          <TourHighlightsSection highlights={highlights} />
          <TourTimelineSection timeline={timeline} />
        </div>

        <div className="lg:col-span-1">
          <TourBookingWidget booking={booking} />
        </div>
      </div>
    </div>
  );
}
