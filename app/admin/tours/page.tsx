import ConflictCheckerSection from "@/components/admin/tours/ConflictCheckerSection";
import DepartureGeneratorSection from "@/components/admin/tours/DepartureGeneratorSection";
import MasterTourListSection from "@/components/admin/tours/MasterTourListSection";
import ToursHeader from "@/components/admin/tours/ToursHeader";
import { useAdminToursData } from "@/hooks/useAdminToursData";

export default function AdminToursPage() {
  const {
    tourRows,
    targetItineraryOptions,
    recurringDays,
    guideOptions,
    conflictLegend,
    conflictCards,
    yieldSuggestions,
  } = useAdminToursData();

  return (
    <div className="bg-surface min-h-screen">
      <main className="p-8">
        <ToursHeader
          title="Quản lý tour"
          description="Quản lý lịch trình gốc, lên lịch khởi hành và kiểm tra khả dụng của hướng dẫn viên."
        />

        <div className="grid grid-cols-12 gap-6">
          <MasterTourListSection rows={tourRows} />

          <DepartureGeneratorSection
            targetItineraryOptions={targetItineraryOptions}
            recurringDays={recurringDays}
            guideOptions={guideOptions}
          />

          <ConflictCheckerSection
            legend={conflictLegend}
            conflicts={conflictCards}
            yieldSuggestions={yieldSuggestions}
          />
        </div>
      </main>
    </div>
  );
}
