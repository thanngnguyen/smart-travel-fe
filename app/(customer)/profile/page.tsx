import PastTripsGrid from "@/components/customer/profile/PastTripsGrid";
import ProfileHeroSection from "@/components/customer/profile/ProfileHeroSection";
import SavedToursPanel from "@/components/customer/profile/SavedToursPanel";
import UpcomingTripCard from "@/components/customer/profile/UpcomingTripCard";
import { useCustomerProfileData } from "@/hooks/useCustomerProfileData";

export default function ProfilePage() {
  const { hero, upcomingTrip, savedTours, pastTrips } =
    useCustomerProfileData();

  return (
    <div className="bg-surface min-h-screen">
      <div className="grow max-w-7xl mx-auto w-full px-6 py-12 mt-10">
        <ProfileHeroSection hero={hero} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UpcomingTripCard trip={upcomingTrip} />
          <SavedToursPanel tours={savedTours} />
          <PastTripsGrid trips={pastTrips} />
        </div>
      </div>
    </div>
  );
}
