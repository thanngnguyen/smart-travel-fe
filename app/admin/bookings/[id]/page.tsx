"use client";

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
import { resolveRouteParam } from "@/lib/route-param";
import { useParams } from "next/navigation";

export default function BookingDetailsPage() {
  const params = useParams<{ id: string | string[] }>();
  const routeId = resolveRouteParam(params?.id);

  const {
    bookingRow,
    header,
    tourHighlight,
    primaryPassenger,
    specialRequests,
    activityLogs,
    payment,
    aiInsight,
    quickActions,
    itineraryMap,
    notice,
    runQuickAction,
  } = useAdminBookingDetailsData(routeId);

  if (
    !bookingRow ||
    !tourHighlight ||
    !primaryPassenger ||
    !payment ||
    !aiInsight ||
    !itineraryMap
  ) {
    return (
      <div className="rounded-3xl bg-surface-container-low px-6 py-8 text-on-surface">
        <h1 className="text-2xl font-black">Booking khong ton tai</h1>
        <p className="mt-2 text-sm text-on-surface-variant">
          Kiem tra lai ma booking tren URL hoac quay ve danh sach booking.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen -mx-8 -mt-8">
      <BookingDetailsTopBar
        bookingId={bookingRow.id}
        bookingCode={header.bookingCode}
        confirmationText={header.confirmationText}
      />

      {notice ? (
        <div className="mx-8 mt-6 rounded-2xl border border-primary/25 bg-primary/5 px-4 py-3 text-sm font-bold text-on-surface">
          {notice}
        </div>
      ) : null}

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
          <PaymentStatusCard
            payment={payment}
            onMarkPaymentSuccess={() => runQuickAction("mark-payment-success")}
          />
          <AIAnalysisCard insight={aiInsight} />
          <QuickActionsCard actions={quickActions} onAction={runQuickAction} />
          <ItineraryMapCard itineraryMap={itineraryMap} />
        </div>
      </div>
    </div>
  );
}
