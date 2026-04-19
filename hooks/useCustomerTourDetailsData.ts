import {
  TourBookingSummary,
  TourDetailsMeta,
  TourDetailHighlight,
  TourGalleryImage,
  TourTimelineItem,
} from "@/types/customer-tour-details";

interface TourDetailsPayload {
  meta: TourDetailsMeta;
  gallery: TourGalleryImage[];
  highlights: TourDetailHighlight[];
  timeline: TourTimelineItem[];
  booking: TourBookingSummary;
}

const TOUR_DETAILS_BY_SLUG: Record<string, TourDetailsPayload> = {
  "maldivian-solitude": {
    meta: {
      categoryLabel: "Nghỉ dưỡng cao cấp",
      rating: 4.9,
      reviewCount: 128,
      title: "Tĩnh Lặng Maldives",
      location: "Baa Atoll, Maldives",
      description:
        "Tạm rời nhịp sống thường nhật và đắm mình trong trải nghiệm đảo riêng tư đẳng cấp. Trợ lý AI sẽ cân bằng lịch trình giữa khám phá đại dương, nghỉ dưỡng chăm sóc sức khỏe và ẩm thực cao cấp dưới mặt biển.",
    },
    gallery: [
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
    ],
    highlights: [
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
        description:
          "Hành trình riêng có hướng dẫn cùng chuyên gia sinh vật biển.",
      },
    ],
    timeline: [
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
    ],
    booking: {
      tourSlug: "maldivian-solitude",
      priceFrom: "$5,400",
      dateRange: "12 Th10 - 17 Th10",
      passengers: "2 người lớn, 0 trẻ em",
      departureDateOptions: [
        {
          id: "mal-2026-10-12",
          label: "12 Th10 - 17 Th10",
          priceMultiplier: 1,
        },
        {
          id: "mal-2026-10-19",
          label: "19 Th10 - 24 Th10",
          priceMultiplier: 1.06,
        },
        {
          id: "mal-2026-11-02",
          label: "02 Th11 - 07 Th11",
          priceMultiplier: 0.94,
        },
      ],
      defaultAdults: 2,
      defaultChildren: 0,
    },
  },
  "swiss-alps": {
    meta: {
      categoryLabel: "Khám phá thiên nhiên",
      rating: 4.8,
      reviewCount: 142,
      title: "Thám hiểm dãy Alps Thụy Sĩ",
      location: "St. Moritz, Thụy Sĩ",
      description:
        "Hành trình trekking, tàu ngắm cảnh và nghỉ dưỡng cao nguyên được tối ưu theo mô hình vận hành backend tour/departure của Velaris.",
    },
    gallery: [
      {
        id: "main",
        src: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
        alt: "Swiss Alps main",
      },
      {
        id: "train",
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        alt: "Scenic train",
      },
    ],
    highlights: [
      {
        id: "alpine-train",
        title: "Tàu toàn cảnh Alps",
        icon: "train",
        description: "Lộ trình qua thung lũng và đèo tuyết nổi tiếng.",
      },
      {
        id: "summit-view",
        title: "Đài quan sát đỉnh núi",
        icon: "landscape",
        description:
          "Toàn cảnh dãy Alps với lịch trình linh hoạt theo thời tiết.",
      },
    ],
    timeline: [
      {
        id: "day-1",
        title: "Nhập đoàn tại Zurich",
        description: "Check-in và hướng dẫn tổng quan chuyến đi.",
      },
      {
        id: "day-2",
        title: "Di chuyển St. Moritz",
        description: "Khởi hành tàu cảnh quan và tham quan cao nguyên.",
      },
    ],
    booking: {
      tourSlug: "swiss-alps",
      priceFrom: "$4,200",
      dateRange: "22 Th11 - 28 Th11",
      passengers: "2 người lớn, 1 trẻ em",
      departureDateOptions: [
        {
          id: "alps-2026-11-22",
          label: "22 Th11 - 28 Th11",
          priceMultiplier: 1,
        },
        {
          id: "alps-2026-12-04",
          label: "04 Th12 - 10 Th12",
          priceMultiplier: 1.08,
        },
        {
          id: "alps-2026-12-15",
          label: "15 Th12 - 21 Th12",
          priceMultiplier: 0.97,
        },
      ],
      defaultAdults: 2,
      defaultChildren: 1,
    },
  },
};
export function useCustomerTourDetailsData(slug?: string) {
  const normalizedSlug = slug?.trim().toLowerCase() || "maldivian-solitude";
  return (
    TOUR_DETAILS_BY_SLUG[normalizedSlug] ||
    TOUR_DETAILS_BY_SLUG["maldivian-solitude"]
  );
}
