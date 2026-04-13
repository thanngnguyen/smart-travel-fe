"use client";

import ToursFilterBackdrop from "@/components/customer/tours/ToursFilterBackdrop";
import ToursFilterSidebar from "@/components/customer/tours/ToursFilterSidebar";
import ToursMobileFilterToggle from "@/components/customer/tours/ToursMobileFilterToggle";
import ToursResultsSection from "@/components/customer/tours/ToursResultsSection";
import { useCustomerToursData } from "@/hooks/useCustomerToursData";

export default function ToursListingPage() {
  const { isFilterOpen, setIsFilterOpen, tours, difficulties, sortOptions } =
    useCustomerToursData();

  return (
    <div className="pt-32 pb-20 bg-surface flex min-h-screen">
      <ToursMobileFilterToggle
        onToggle={() => setIsFilterOpen(!isFilterOpen)}
      />

      <ToursFilterSidebar
        isOpen={isFilterOpen}
        difficulties={difficulties}
        onClose={() => setIsFilterOpen(false)}
      />

      <ToursResultsSection tours={tours} sortOptions={sortOptions} />

      <ToursFilterBackdrop
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
}
