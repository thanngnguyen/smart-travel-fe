import {
  TourBookingSummary,
  TourDetailsMeta,
  TourDetailHighlight,
  TourGalleryImage,
  TourTimelineItem,
} from "@/types/customer-tour-details";

const TOUR_META: TourDetailsMeta = {
  categoryLabel: "Nghỉ dưỡng cao cấp",
  rating: 4.9,
  reviewCount: 128,
  title: "Tĩnh Lặng Maldives",
  location: "Baa Atoll, Maldives",
  description:
    "Tạm rời nhịp sống thường nhật và đắm mình trong trải nghiệm đảo riêng tư đẳng cấp. Trợ lý AI sẽ cân bằng lịch trình giữa khám phá đại dương, nghỉ dưỡng chăm sóc sức khỏe và ẩm thực cao cấp dưới mặt biển.",
};

const GALLERY_IMAGES: TourGalleryImage[] = [
  {
    id: "main",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzJas8FUitu1idJS4cnCzKvZcoqIYljgIWW1mk5bDlyTG-1Tmh6XZc_A2q0JNW5kiyz5nPEB04-nK9cYR8Tw-X7CdyLwIymaEkLQKAaG_8j_0NyErwCqzoOltOCaY2bU9BqCMQSuzUAmd5E3FN6cOxtpMW5CJprnUJP6IGkftFaQAFXIYMyUoEEa_GT7MEFR5PXNni6jYmrhCKyu5uCnr0zxOqsTnilxY09ZxLQpB0k6GZnyVphogny6JSLHum7f3MDJvnbe50VGA",
    alt: "Main",
  },
  {
    id: "resort",
    src: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&w=800&q=80",
    alt: "Resort",
  },
  {
    id: "villa",
    src: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
    alt: "Villa",
  },
  {
    id: "food",
    src: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80",
    alt: "Food",
  },
  {
    id: "activity",
    src: "https://images.unsplash.com/photo-1596395819057-e37f55a8516d?auto=format&fit=crop&w=800&q=80",
    alt: "Activity",
  },
];

const HIGHLIGHTS: TourDetailHighlight[] = [
  {
    id: "undersea-dining",
    title: "Ẩm thực dưới biển",
    icon: "restaurant",
    description: "Thưởng thức ẩm thực 5 sao giữa không gian sinh vật biển.",
  },
  {
    id: "private-butler",
    title: "Quản gia riêng",
    icon: "person",
    description: "Dịch vụ chuyên biệt 24/7 theo đúng nhu cầu của bạn.",
  },
  {
    id: "spa",
    title: "Spa & Chăm sóc sức khỏe",
    icon: "spa",
    description:
      "Liệu trình trị liệu đặc trưng mỗi ngày tại spa trên mặt nước.",
  },
  {
    id: "ocean-safari",
    title: "Safari đại dương",
    icon: "sailing",
    description: "Hành trình riêng có hướng dẫn cùng chuyên gia sinh vật biển.",
  },
];

const TIMELINE: TourTimelineItem[] = [
  {
    id: "day-1",
    title: "Đến nơi & chào mừng",
    description:
      "STMS AI sẽ tự động sắp xếp lại hoạt động theo điều kiện thời tiết để đảm bảo trải nghiệm tốt nhất mà không cần thao tác thủ công.",
  },
  {
    id: "day-2",
    title: "Khám phá cá đuối manta",
    description:
      "STMS AI sẽ tự động sắp xếp lại hoạt động theo điều kiện thời tiết để đảm bảo trải nghiệm tốt nhất mà không cần thao tác thủ công.",
  },
  {
    id: "day-3",
    title: "Nghỉ dưỡng chăm sóc sức khỏe",
    description:
      "STMS AI sẽ tự động sắp xếp lại hoạt động theo điều kiện thời tiết để đảm bảo trải nghiệm tốt nhất mà không cần thao tác thủ công.",
  },
  {
    id: "day-4",
    title: "Khởi hành",
    description:
      "STMS AI sẽ tự động sắp xếp lại hoạt động theo điều kiện thời tiết để đảm bảo trải nghiệm tốt nhất mà không cần thao tác thủ công.",
  },
];

const BOOKING_SUMMARY: TourBookingSummary = {
  priceFrom: "$5,400",
  dateRange: "12 Th10 - 17 Th10",
  passengers: "2 người lớn, 0 trẻ em",
};

export function useCustomerTourDetailsData() {
  return {
    meta: TOUR_META,
    gallery: GALLERY_IMAGES,
    highlights: HIGHLIGHTS,
    timeline: TIMELINE,
    booking: BOOKING_SUMMARY,
  };
}
