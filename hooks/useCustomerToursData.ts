"use client";

import { useState } from "react";
import {
  CustomerListingTour,
  ToursDifficultyOption,
  ToursSortOption,
} from "@/types/customer-tours";

const TOUR_LIST: CustomerListingTour[] = [
  {
    id: "swiss-alps",
    title: "Thám hiểm dãy Alps Thụy Sĩ",
    location: "Dãy Alps, châu Âu",
    price: "$4,200",
    rating: 4.8,
    reviews: 142,
    duration: "7 ngày",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "bali-retreat",
    title: "Nghỉ dưỡng chăm sóc sức khỏe Bali",
    location: "Bali, Indonesia",
    price: "$2,850",
    rating: 4.9,
    reviews: 201,
    duration: "10 ngày",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "maldivian-solitude",
    title: "Tĩnh Lặng Maldives",
    location: "Baa Atoll, Maldives",
    price: "$5,400",
    rating: 4.9,
    reviews: 128,
    duration: "5 ngày",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzJas8FUitu1idJS4cnCzKvZcoqIYljgIWW1mk5bDlyTG-1Tmh6XZc_A2q0JNW5kiyz5nPEB04-nK9cYR8Tw-X7CdyLwIymaEkLQKAaG_8j_0NyErwCqzoOltOCaY2bU9BqCMQSuzUAmd5E3FN6cOxtpMW5CJprnUJP6IGkftFaQAFXIYMyUoEEa_GT7MEFR5PXNni6jYmrhCKyu5uCnr0zxOqsTnilxY09ZxLQpB0k6GZnyVphogny6JSLHum7f3MDJvnbe50VGA",
  },
  {
    id: "machu-picchu",
    title: "Điểm nhấn Machu Picchu",
    location: "Andes, Peru",
    price: "$3,100",
    rating: 4.7,
    reviews: 95,
    duration: "8 ngày",
    image:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "kyoto-cultural",
    title: "Khám phá di sản Kyoto",
    location: "Kyoto, Japan",
    price: "$3,500",
    rating: 4.9,
    reviews: 310,
    duration: "6 ngày",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
  },
];

const DIFFICULTIES: ToursDifficultyOption[] = [
  { id: "easy", label: "Thư thái" },
  { id: "balanced", label: "Vừa phải", isActive: true },
  { id: "hard", label: "Thử thách" },
];

const SORT_OPTIONS: ToursSortOption[] = [
  { value: "top-rated", label: "Đánh giá cao trước" },
  { value: "price-asc", label: "Giá: thấp đến cao" },
  { value: "price-desc", label: "Giá: cao đến thấp" },
  { value: "duration-asc", label: "Thời lượng: ngắn nhất" },
];

export function useCustomerToursData() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return {
    isFilterOpen,
    setIsFilterOpen,
    tours: TOUR_LIST,
    difficulties: DIFFICULTIES,
    sortOptions: SORT_OPTIONS,
  };
}
