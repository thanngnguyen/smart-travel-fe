export interface SavedTourItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface PastTripItem {
  id: string;
  monthLabel: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  isReviewed: boolean;
}

export interface ProfileHeroData {
  memberLabel: string;
  heading: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  distanceLabel: string;
}

export interface UpcomingTripData {
  title: string;
  dateRange: string;
  location: string;
  readinessPercent: number;
  warningNote: string;
  imageUrl: string;
  imageAlt: string;
}
