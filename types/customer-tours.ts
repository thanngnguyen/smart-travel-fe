export interface CustomerListingTour {
  id: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  duration: string;
  image: string;
}

export interface ToursSortOption {
  value: string;
  label: string;
}

export interface ToursDifficultyOption {
  id: string;
  label: string;
  isActive?: boolean;
}
