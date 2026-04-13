import ActivityLogSection from "@/components/admin/bookings/details/ActivityLogSection";
import AIAnalysisCard from "@/components/admin/bookings/details/AIAnalysisCard";
import BookingDetailsTopBar from "@/components/admin/bookings/details/BookingDetailsTopBar";
import ItineraryMapCard from "@/components/admin/bookings/details/ItineraryMapCard";
import PaymentStatusCard from "@/components/admin/bookings/details/PaymentStatusCard";
import PrimaryPassengerCard from "@/components/admin/bookings/details/PrimaryPassengerCard";
import QuickActionsCard from "@/components/admin/bookings/details/QuickActionsCard";
import SpecialRequestsCard from "@/components/admin/bookings/details/SpecialRequestsCard";
import TourHighlightSection from "@/components/admin/bookings/details/TourHighlightSection";
import { useAdminBookingDetailsData } from "@/hooks/useAdminBookingDetailsData";

export default function BookingDetailsPage() {
  const {
    header,
    tourHighlight,
    primaryPassenger,
    specialRequests,
    activityLogs,
    payment,
    aiInsight,
    quickActions,
    itineraryMap,
  } = useAdminBookingDetailsData();

  return (
    <div className="flex flex-col min-h-screen -mx-8 -mt-8">
      <BookingDetailsTopBar
        bookingCode={header.bookingCode}
        confirmationText={header.confirmationText}
      />

      <div className="p-8 grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
          <TourHighlightSection tour={tourHighlight} />

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PrimaryPassengerCard passenger={primaryPassenger} />
            <SpecialRequestsCard requests={specialRequests} />
          </section>

          <ActivityLogSection logs={activityLogs} />
        </div>

        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <PaymentStatusCard payment={payment} />
          <AIAnalysisCard insight={aiInsight} />
          <QuickActionsCard actions={quickActions} />
          <ItineraryMapCard itineraryMap={itineraryMap} />
        </div>
      </div>
    </div>
  );
}
