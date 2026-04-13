import ConciergeInsightCard from "@/components/admin/tours/create/ConciergeInsightCard";
import CreateTourFooter from "@/components/admin/tours/create/CreateTourFooter";
import CreateTourHeader from "@/components/admin/tours/create/CreateTourHeader";
import DepartureGeneratorCard from "@/components/admin/tours/create/DepartureGeneratorCard";
import GeneralInformationSection from "@/components/admin/tours/create/GeneralInformationSection";
import ItinerarySection from "@/components/admin/tours/create/ItinerarySection";
import MediaGallerySection from "@/components/admin/tours/create/MediaGallerySection";
import { useAdminCreateTourData } from "@/hooks/useAdminCreateTourData";

export default function AdminCreateTourPage() {
  const { draftDays, mediaThumbnails, frequencyOptions, footerLinks } =
    useAdminCreateTourData();

  return (
    <div className="bg-surface min-h-screen">
      <main className="flex-1 flex flex-col min-h-screen bg-surface">
        <CreateTourHeader />

        <div className="p-8 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <GeneralInformationSection />
            <ItinerarySection days={draftDays} />
          </div>

          <div className="col-span-12 lg:col-span-4 space-y-6">
            <MediaGallerySection thumbnails={mediaThumbnails} />
            <DepartureGeneratorCard frequencyOptions={frequencyOptions} />
            <ConciergeInsightCard />
          </div>
        </div>

        <CreateTourFooter links={footerLinks} />
      </main>
    </div>
  );
}
