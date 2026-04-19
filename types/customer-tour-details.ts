export interface TourGalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface TourDetailHighlight {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface TourTimelineItem {
  id: string;
  title: string;
  description: string;
}

export interface TourDepartureDateOption {
  id: string;
  label: string;
  priceMultiplier: number;
}

export interface TourBookingSummary {
  tourSlug: string;
  priceFrom: string;
  dateRange: string;
  passengers: string;
  departureDateOptions?: TourDepartureDateOption[];
  defaultAdults?: number;
  defaultChildren?: number;
}

export interface TourDetailsMeta {
  categoryLabel: string;
  rating: number;
  reviewCount: number;
  title: string;
  location: string;
  description: string;
}
