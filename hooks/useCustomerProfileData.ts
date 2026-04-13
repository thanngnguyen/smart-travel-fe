import {
  PastTripItem,
  ProfileHeroData,
  SavedTourItem,
  UpcomingTripData,
} from "@/types/customer-profile";

const PROFILE_HERO: ProfileHeroData = {
  memberLabel: "Hội viên Voyager hạng Vàng",
  heading: "Chào mừng quay lại,\nAlexandra Sterling.",
  description:
    "Chuyến hành trình Địa Trung Hải của bạn chỉ còn 14 ngày nữa. Chúng tôi đã cập nhật lịch trình số với các gợi ý độc quyền từ trợ lý cá nhân.",
  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuConJcrK0IvgDZetRgszI9zZLOl7UXpio0VHfzs8p6TrJSHvecJJEtXKkOy5NS7HNiSyjhIHBSQtXvzp7TQfd_2vgS_gzkNlBYd5jeVWPO43pqfLVRIjClDAj8pK1fBffC8OXQ7QiC2Lrmn9vrmH4hhr80euvRGn9kJErS1MmvZKBQ6ZcnwGLn4LZZc_WcYNEP7xbBqzJL4D2EKYtcu3xWUxuvs87ABQG4foX0gWMTNdZWbS_-go1XZVGC5epqKtK1u6WE13Ol9j_I",
  imageAlt:
    "traveler looking out over a Mediterranean coastal town at sunset with warm orange and purple sky",
  distanceLabel: "42,850 KM",
};

const UPCOMING_TRIP: UpcomingTripData = {
  title: "Du thuyền & khám phá Địa Trung Hải",
  dateRange: "12 Th10 - 26 Th10",
  location: "Ý, Hy Lạp, Croatia",
  readinessPercent: 85,
  warningNote: "Đừng quên tải lên giấy tờ bảo hiểm du lịch.",
  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCioP6tC332zGePerO8FnI8xhQ7wb1YY02BF1sFXlxdsIEbkzOvorDj1_4bkE9Pgfh5fieI1EwZoJjiZaBkdUleFFzna9Hu47LuUj8rnDX4DUoFUNL3SHgDw_nCfxnJOaxmvTyo5Lbr-hVT_B-MhgReIlt6gn60BMncMrhwRIRrM8OoNs6MF-RBS20OEj-jS2bRaTia4KHw-Nz9oFmifwa2rmbItfnc90ykybrT3q6YExT2vpFAXHVBi6Q_tYdxO98GBI7ZLKHwxkQ",
  imageAlt:
    "scenic view of Venice canals with gondolas at sunrise, soft lighting, vibrant architecture",
};

const SAVED_TOURS: SavedTourItem[] = [
  {
    id: "swiss-alps",
    title: "Ẩn cư dãy Alps Thụy Sĩ",
    subtitle: "7 ngày • $3,400",
    icon: "forest",
  },
  {
    id: "kyoto",
    title: "Dạo bước di sản Kyoto",
    subtitle: "5 ngày • $1,850",
    icon: "temple_buddhist",
  },
  {
    id: "sahara",
    title: "Ngắm sao Sahara",
    subtitle: "3 ngày • $980",
    icon: "nightlight_round",
  },
];

const PAST_TRIPS: PastTripItem[] = [
  {
    id: "golden-triangle",
    monthLabel: "Tháng 8/2023",
    title: "Hành trình Tam Giác Vàng",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCsRU0y52RPpZbXBe8rj2xPyJQmur0n6T8f3usetbPm89dISLGWH_x6VwxZKwehrpI1K9gP8P_Exnd4sDjPfTxXQyEPKu6600f-oaYZKiS-hw2rgHeU6WiqQi5dM3wUz0AdQbglJ_zx9RsIWBbXAH_Kic_FbNi0AfICYYr0kNzlu-cXHYa8EpGCsrytHpe0N3GGLfjg1Lyr9bXUuWKSmLUTYH0V8zIHoVJhFePN6ehIkEuiFeLQA6TQR57cl5YtSGeiaNuqHl_jvhQ",
    imageAlt:
      "Taj Mahal reflecting in the water during early morning with soft mist and golden light",
    isReviewed: false,
  },
  {
    id: "bahamas",
    monthLabel: "Tháng 6/2023",
    title: "Du thuyền cao cấp Bahamas",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuTa0UkpdXO2UOG6nYLuB0Zh2-ugw54qtJHxjtyxu28w42mgYVlXr3bFipU1hj4LdkNOJiso7yUVfPZUatiX6EbWC1gn4dMLIsHFOkJwzbQUHpR7cpZmByQ5mPaKjYQwCRzLYmpoWp7A3Ty-oaUdvo7YCmy3wHmaZYehdtmqXOZJLNkBBlA6RExhw62WViNYVvcVyW_tJW-wvpjnpjs1VASJpn8ZnzT9DnA6EqmS_qltbk14zI4RCAoWuHjw3YQ8tRx22CLZvDc7o",
    imageAlt:
      "tropical beach with white sand and turquoise water under clear blue sky with palm trees",
    isReviewed: true,
  },
  {
    id: "imperial-train",
    monthLabel: "Tháng 12/2022",
    title: "Hành trình tàu hỏa các thành phố đế chế",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6tAKqhEzxP8GbdawYnfkPcXBN1wssMekx-4HzcXNORmKQcU7vh9bw0rhr9s1xPWyFnp6Q5sgPsLlwfovOm6DtRc2y0zGLPl1Zx62xGHUnX3PXOKP4q0Y5GD9OEPpEhnkFd1trfzu_uTVuhmEfvxaj1FJaxlf4gKGkqJ3LP_431p7e7HcCu0DbpVErsZd4WEBhLSlvgLTi32uls4Zk41TSIMYbMgyCyJl0zfM9HuR4kQ54QBqKVLGxmf2TvdRF8pYBgimrcBzlvRQ",
    imageAlt:
      "architectural detail of Saint Basil's Cathedral with colorful domes and clear winter sky",
    isReviewed: false,
  },
  {
    id: "kenya",
    monthLabel: "Tháng 10/2022",
    title: "Safari hoang dã Kenya",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3VbtLfpcn2HeyVqKfN7nnXC_dFxyx7BSThYixl9uAWRQP-ZKEMC8k5AKyCGUATstvZF7F-3xMvDlKuS3ucO03fuwAEqyoX8e1E_USP_B9LM4UYpYa15ZkkxDta0FC4eu-xeayeRu-PmwJOxncOZMupBabm6Kj2i9fKiTkcw6pMww9t4X8qFBWnXxE3iTxsRw_WaXcYLswO3UoegAaCme3lcUeinOC7rS9oe8L7MlaxnQI4IhJUkKwYiLXGfJ3Q0eviTBSnf-1N20",
    imageAlt:
      "majestic lion walking through tall golden grass in the African savanna at sunrise",
    isReviewed: true,
  },
];

export function useCustomerProfileData() {
  return {
    hero: PROFILE_HERO,
    upcomingTrip: UPCOMING_TRIP,
    savedTours: SAVED_TOURS,
    pastTrips: PAST_TRIPS,
  };
}
