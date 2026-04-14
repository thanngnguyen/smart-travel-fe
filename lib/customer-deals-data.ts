import {
  CustomerDeal,
  CustomerDealCategoryOption,
  CustomerDealDetails,
  CustomerDealDetailsPayload,
  CustomerDealsHeroContent,
  CustomerDealsNewsletterContent,
} from "@/types/customer-deals";

export const CUSTOMER_DEAL_CATEGORIES: CustomerDealCategoryOption[] = [
  { id: "all", label: "Tất cả ưu đãi" },
  { id: "resort", label: "Nghỉ dưỡng", icon: "beach_access" },
  { id: "adventure", label: "Mạo hiểm", icon: "hiking" },
  { id: "urban", label: "Thành thị", icon: "pin_drop" },
];

export const CUSTOMER_DEALS_HERO: CustomerDealsHeroContent = {
  badgeLabel: "Khuyến mãi độc quyền",
  title: "Khám phá thế giới, tiết kiệm tối đa.",
  description:
    "Tận hưởng ưu đãi đến 50% cho những hành trình mùa hè. Chỉ dành riêng cho thành viên STMS.",
  primaryActionLabel: "Xem ngay",
  secondaryActionLabel: "Tìm hiểu thêm",
  backgroundImageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAajSf-Rhjzfk3CmWPPh1PWyh83vHuakHRMa_idNEGzKLQF-4vCu-NPwyj9oCBPnaHZ-48sh8ZE1i0tp2iIEqE7Q_fvkZwFkUibPxBTSlDGjMb7l1JM_rw9zG-0Tfd7b3kjUg5M-a_jKFevBwOYxKzKoVpFM7-J4bmQBRTPGs_Y4gudehW2C74QIpyblSaADd8FFquwh7CPrxgKB7O-QJvUL90_TTuMqZThkr8teFtyYkY4LHekS92qtHzzAkUbkKahKJCX7q2JRGI",
};

export const CUSTOMER_DEALS_NEWSLETTER: CustomerDealsNewsletterContent = {
  title: "Đừng bỏ lỡ ưu đãi độc quyền hàng tuần.",
  description:
    "Nhận ngay gói ưu đãi mới nhất từ STMS. Không spam, chỉ là những hành trình đáng mơ ước.",
  emailPlaceholder: "Email của bạn",
  submitLabel: "Đăng ký",
  backgroundImageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBPizlsEo_OOMjmjdh17FQHDCuRZW9dxGqMajYsk9eaTdHgiZ-rZhR532b13WiJbMr0ShgYI-1AwUJ5O5W-jfehDnpIruD681vSJBiIkWe74hEUJnvMBo8sHeCpzKkE0wmFh4XCto-fzjsLuYZ2V_xlK18mVRNp3513rQFtPw5nU6tQiwEz5tHzkC0rS31ZuffMj9TJlexXqlvSsmQ53pzPt4RwmL8ewPxhfcrbiHGf05i_xGp5--C38rUd9zn26GWNZVHr4bW6GZE",
};

export const CUSTOMER_DEALS: CustomerDeal[] = [
  {
    id: "phu-quoc-summer",
    title: "Phú Quốc Summer Escape",
    categoryId: "resort",
    categoryLabel: "Nghỉ dưỡng",
    location: "Phú Quốc, Việt Nam",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6cg4afd-KBoViFq6QTNcFinUbqCLyxhLM1_lbspexVBM554o_tWpICI9bHp7OxDIcl0qu9hb-NwWidAChH1E-zw5H-0sspDLsdKCMOp3d8gODuYE2ohh8yKeCfWN3QoN4tMS0JjDoQMNutSp0RIyrclNMkoYhaQKnW9EZ7pGtgFZPDYS7k5TUJwqbAX0bZlGsvR8ARr33suOqsa7vNtKuv48kXynfeMYSlxkNnIJWXMThk77o8ALlQxpMf4Xt9yh7E4aTJ-i_wls",
    shortDescription:
      "Kỳ nghỉ 5 sao tại đảo ngọc với trọn bộ trải nghiệm biển, ẩm thực và nghỉ dưỡng cao cấp.",
    validUntil: "31 thg 8, 2024",
    promoCode: "SUMMER2024",
    discountLabel: "-45%",
    originalPrice: "12,500,000d",
    discountedPrice: "6,875,000d",
  },
  {
    id: "halong-luxury-cruise",
    title: "Vịnh Hạ Long Luxury Cruise",
    categoryId: "resort",
    categoryLabel: "Nghỉ dưỡng",
    location: "Quảng Ninh, Việt Nam",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_dpTu8h-G0Xsc_DbCyhchs-dyie72wlfZuwlZH7ML4u269cgaEFpVoVMJ4KuWg9tGWFkMS_8ZbxeV9VD6hUbIMskkwuolFgTwpjeVQn2_kgIDFmYdtsg33nsZK3YadKHUO9qWRvgTRQYLJtcYK8JxbDGTDG-1K6GErjjuzsu170vCOImaEJr-fix9xh4TfsFXbnzYYaAvpKrzXf7r9rY36GO_weiQF2czyg5jBBrrcPw3HPh7lfzLs2lyvNBKBm2RstOf1kU-DOI",
    shortDescription:
      "Du thuyền 5 sao giữa kỳ quan thế giới với lịch trình tối ưu bởi trợ lý AI.",
    validUntil: "30 thg 9, 2024",
    promoCode: "HALONG35",
    discountLabel: "-35%",
    originalPrice: "10,200,000d",
    discountedPrice: "6,630,000d",
  },
  {
    id: "tokyo-heart-japan",
    title: "Tokyo - Trái tim Nhật Bản",
    categoryId: "urban",
    categoryLabel: "Thành thị",
    location: "Tokyo, Nhật Bản",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZi-rsuP1eZW6KDP63GsUFJayrMMVQSBNSMln-pQ3CzoFu2NY8D9a33-xVVYmSjXYteNkjg9VL7FqasHkz6zXPg9EDxg0ctAV84y6yQl8rJRM8HVCRfwL7234Lw8pUynebY7ki0oOAZSi0gx_YN59xTTQB53pwW2MnK2iMVFyVQ6GQAIkKfKeF3f-wziO7ikdfPR9DhLA8Bk_z0Tb27TOLGw4OY1ZEEvsoTsUl5eWzIzjUNzJstk7Hz3tI8iQ09bTvO5bC8GPRtmY",
    shortDescription:
      "Khám phá sự giao thoa giữa truyền thống và hiện đại tại thủ đô sôi động bậc nhất châu Á.",
    validUntil: "15 thg 10, 2024",
    promoCode: "TOKYO20",
    discountLabel: "-20%",
    originalPrice: "22,000,000d",
    discountedPrice: "17,600,000d",
  },
  {
    id: "paris-autumn-getaway",
    title: "Paris - Mùa thu quyến rũ",
    categoryId: "urban",
    categoryLabel: "Thành thị",
    location: "Paris, Pháp",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJTjhgs2qhodkcYdJ-87lrztNksbwmm0YvfdVHZoXFAYP78ViCVWIgSud4gDlzBz65DxLDYkeZrPbYonJruZhMNdpq5zuPLtRMu90M1t-SXNE1sE-Vg1osDiXbpNwjUrZKjT5uUxAQDG7MZP7QPvZiEwY4d8WNxuqZOXeFvo9AIbCqyL7kvG6NAYYq9ZuXbSfTk4oPLIXYYLsfqNj39HiW5OmrEOtdvbe0xoqjsC9pqYf9qamwghErx1-kgWvfb440OPlHa4R6NCg",
    shortDescription:
      "Hành trình lãng mạn tại kinh đô ánh sáng với ẩm thực tinh tế và điểm check-in biểu tượng.",
    validUntil: "01 thg 11, 2024",
    promoCode: "PARIS15",
    discountLabel: "-15%",
    originalPrice: "28,500,000d",
    discountedPrice: "24,225,000d",
  },
  {
    id: "phu-quoc-coral-adventure",
    title: "Lặn ngắm san hô Hòn Móng Tay",
    categoryId: "adventure",
    categoryLabel: "Mạo hiểm",
    location: "Phú Quốc, Việt Nam",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSaWxfco7cvDooU4ng8wqt-tCCGbfNgiFrgrSOrIwWpeTs670r1hYDyU0afBMtBUU5cyO8E9sYXFAK5Y_bfMFA_T2JHQN_swLFghJJckxaxTqK97FRwrxwpnaM7__Ss76s1I9qgs-myv98p5MHKx2IxdFMBYJi47cn15dSf0NduBdeYYf0asKk0BNzcETEX0KWXYyzAgZQficgTL_WV9RwUUHPe0ASVbh4UFRll0FzNYU1NkjUnIgBW3xK3Qa3-fWQn9Y-WzaVLOU",
    shortDescription:
      "Tour mạo hiểm tốc độ cao kết hợp snorkeling và cano quanh cụm đảo phía Nam.",
    validUntil: "20 thg 9, 2024",
    promoCode: "CORAL30",
    discountLabel: "-30%",
    originalPrice: "8,400,000d",
    discountedPrice: "5,880,000d",
  },
];

const DEFAULT_FINAL_CTA = {
  title: "Đừng bỏ lỡ kỳ nghỉ trong mơ của bạn!",
  description:
    "Ưu đãi chỉ xuất hiện trong thời gian ngắn. Đặt lịch ngay hôm nay để khóa giá tốt nhất cho hành trình sắp tới.",
  primaryActionLabel: "Đặt tour ngay",
  primaryActionHref: "/tours",
  secondaryActionLabel: "Tải mã voucher",
  secondaryActionHref: "/deals",
  backgroundImageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA7JpQNxfG7ZB-ogWxpLNYGQCujca-KjzC5La1LbEmQmB2qF_05Ftzo7_JAuPYOCTztWP_kCBXjYkK6_ZKWFamyEbCB_SjZvHN6gIPt3iHE9zmAFDBnGgQgNGPIYl1Rf1PmxEBo-Cou7xf162nSU63ydNsx2_dNkCyWDHFZYLGdxXe98R_aud1MLtBH-4oDnXJrJKI5wTTq-BFqd6RoQBduBiXOFK60SQKDazi7JFi5wDRDtGL8iIQ8qCXvhYkbTdC36ufTtEMMt_c",
};

const CUSTOMER_DEAL_DETAILS_MAP: Record<string, CustomerDealDetails> = {
  "phu-quoc-summer": {
    hero: {
      campaignLabel: "Siêu ưu đãi mùa hè",
      title: "Ưu đãi hè rực rỡ tại Phú Quốc",
      description:
        "Khám phá đảo ngọc với gói nghỉ dưỡng 5 sao, lịch trình linh hoạt và dịch vụ được cá nhân hóa bởi STMS.",
      countdownLabel: "15 ngày 08 giờ",
      discountValue: "-45%",
      promoCode: "SUMMER2024",
      primaryActionLabel: "Áp dụng ngay",
      backgroundImageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD6cg4afd-KBoViFq6QTNcFinUbqCLyxhLM1_lbspexVBM554o_tWpICI9bHp7OxDIcl0qu9hb-NwWidAChH1E-zw5H-0sspDLsdKCMOp3d8gODuYE2ohh8yKeCfWN3QoN4tMS0JjDoQMNutSp0RIyrclNMkoYhaQKnW9EZ7pGtgFZPDYS7k5TUJwqbAX0bZlGsvR8ARr33suOqsa7vNtKuv48kXynfeMYSlxkNnIJWXMThk77o8ALlQxpMf4Xt9yh7E4aTJ-i_wls",
    },
    conditionTitle: "Điều kiện áp dụng",
    conditionColumns: [
      [
        "Áp dụng cho booking từ 2 khách trở lên.",
        "Thời gian lưu trú từ 01/06/2024 đến 31/08/2024.",
        "Không áp dụng đồng thời với các chương trình khác.",
      ],
      [
        "Ưu tiên thành viên hạng Gold trở lên.",
        "Hoàn hủy miễn phí trước 7 ngày khởi hành.",
        "Mã ưu đãi chỉ sử dụng 1 lần cho mỗi tài khoản.",
      ],
    ],
    supportCard: {
      icon: "verified",
      title: "Hỗ trợ 24/7",
      description:
        "Đội ngũ chuyên gia STMS luôn sẵn sàng hỗ trợ bạn áp dụng ưu đãi nhanh và chính xác.",
      actionLabel: "Chat với tư vấn viên",
      actionHref: "/concierge",
    },
    applicableToursTitle: "Danh sách tour áp dụng",
    applicableToursDescription: "Chọn hành trình phù hợp nhất với bạn.",
    applicableTours: [
      {
        id: "phu-quoc-north-island",
        title: "Khám phá Bắc Đảo: Rừng nguyên sinh và Gành Dầu",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBFx-8dZ2jFeSiwgpCPJFjFjjHI9GuHM0ruGPh8sj4DNRFqZSYtTQWBAUX1KbVhiHvEJvT14CCJQPJk9wpx6dn688-VZG7WbWUIov3uDADP5FFBJU-qsmGhl4cvoEDZYH4tSdOCR2X_gmsGzUZHoD8nnm2kG4S--o-CBpkKqETG8YDh8E-drk4qlsZgalsS2GJBqdEIyPXdPGWl7y7ebVXvw1P6gywDolq3I4oFf0HlCwwsa99mzwbv7WJNLj5urRDYxF_6vnJwhGE",
        rating: 4.9,
        duration: "3 ngày 2 đêm",
        seatsLeft: 4,
        originalPrice: "12,500,000d",
        discountedPrice: "6,875,000d",
        discountLabel: "-45% OFF",
      },
      {
        id: "phu-quoc-premium",
        title: "Nghỉ dưỡng Premium 5 sao: Sunset Sanato và Bãi Sao",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDiTg8PP_ey03YCeTN0tYvmhhVH0SuO-UsF-_TXuQP0isjG4OWgA4rtQWeW8OE7KGsujUSbRydGl4GhT0fzg53-0Sgye8Il8HLZtNMJxk_V6n9g3oDiQQjX2zGu08KB7YTaHRZ4RQzf0H-iL_U4uDF6S9TBds7Mk0enb6Nv80u8hyvHVGSJcIiaovYOJKyyOZ_UY1N1lng8b63LHGeoJZ22ARktWlJqtKplwj6StR_cwDG109dFMO8EYg5hpEAl6wOOb-hhic-wNGQ",
        rating: 5,
        duration: "4 ngày 3 đêm",
        seatsLeft: 2,
        originalPrice: "18,200,000d",
        discountedPrice: "10,010,000d",
        discountLabel: "-45% OFF",
      },
      {
        id: "phu-quoc-coral-safari",
        title: "Tour mạo hiểm: Lặn ngắm san hô Hòn Móng Tay",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCSaWxfco7cvDooU4ng8wqt-tCCGbfNgiFrgrSOrIwWpeTs670r1hYDyU0afBMtBUU5cyO8E9sYXFAK5Y_bfMFA_T2JHQN_swLFghJJckxaxTqK97FRwrxwpnaM7__Ss76s1I9qgs-myv98p5MHKx2IxdFMBYJi47cn15dSf0NduBdeYYf0asKk0BNzcETEX0KWXYyzAgZQficgTL_WV9RwUUHPe0ASVbh4UFRll0FzNYU1NkjUnIgBW3xK3Qa3-fWQn9Y-WzaVLOU",
        rating: 4.8,
        duration: "2 ngày 1 đêm",
        seatsLeft: 8,
        originalPrice: "8,400,000d",
        discountedPrice: "4,620,000d",
        discountLabel: "-45% OFF",
      },
    ],
    finalCta: DEFAULT_FINAL_CTA,
  },
  "halong-luxury-cruise": {
    hero: {
      campaignLabel: "Deal thuong gia",
      title: "Du thuyen Ha Long voi uu dai cao cap",
      description:
        "Ky nghi tren du thuyen 5 sao, ngam binh minh tren Vinh Ha Long va thuong thuc am thuc Viet hien dai.",
      countdownLabel: "22 ngay 04 gio",
      discountValue: "-35%",
      promoCode: "HALONG35",
      primaryActionLabel: "Nhan uu dai",
      backgroundImageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD_dpTu8h-G0Xsc_DbCyhchs-dyie72wlfZuwlZH7ML4u269cgaEFpVoVMJ4KuWg9tGWFkMS_8ZbxeV9VD6hUbIMskkwuolFgTwpjeVQn2_kgIDFmYdtsg33nsZK3YadKHUO9qWRvgTRQYLJtcYK8JxbDGTDG-1K6GErjjuzsu170vCOImaEJr-fix9xh4TfsFXbnzYYaAvpKrzXf7r9rY36GO_weiQF2czyg5jBBrrcPw3HPh7lfzLs2lyvNBKBm2RstOf1kU-DOI",
    },
    conditionTitle: "Dieu kien ap dung",
    conditionColumns: [
      [
        "Ap dung cho hanh trinh khoi hanh tu thu Hai den thu Nam.",
        "Booking toi thieu 7 ngay truoc ngay khoi hanh.",
        "Moi hoa don duoc su dung toi da 1 ma uu dai.",
      ],
      [
        "Uu dai bao gom bua toi fine-dining tren du thuyen.",
        "Khong hoan tien cho phan dich vu da su dung.",
        "STMS co quyen dieu chinh lich trinh neu thoi tiet xau.",
      ],
    ],
    supportCard: {
      icon: "support_agent",
      title: "Concierge rieng",
      description:
        "Tu van hanh trinh theo so thich va doi tuong khach, toi uu gio check-in va su kien tren tau.",
      actionLabel: "Nhan tu van",
      actionHref: "/concierge",
    },
    applicableToursTitle: "Tour du thuyen dang ap dung",
    applicableToursDescription: "Lua chon hanh trinh phu hop voi nhom cua ban.",
    applicableTours: [
      {
        id: "halong-overnight-premium",
        title: "Ha Long Overnight Premium Cruise",
        imageUrl:
          "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
        rating: 4.9,
        duration: "2 ngay 1 dem",
        seatsLeft: 6,
        originalPrice: "11,800,000d",
        discountedPrice: "7,670,000d",
        discountLabel: "-35% OFF",
      },
      {
        id: "halong-sunset-gala",
        title: "Ha Long Sunset Gala Cruise",
        imageUrl:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        rating: 4.8,
        duration: "3 ngay 2 dem",
        seatsLeft: 4,
        originalPrice: "15,900,000d",
        discountedPrice: "10,335,000d",
        discountLabel: "-35% OFF",
      },
      {
        id: "halong-private-yacht",
        title: "Private Yacht Ha Long Signature",
        imageUrl:
          "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80",
        rating: 5,
        duration: "2 ngay 1 dem",
        seatsLeft: 2,
        originalPrice: "23,000,000d",
        discountedPrice: "14,950,000d",
        discountLabel: "-35% OFF",
      },
    ],
    finalCta: {
      ...DEFAULT_FINAL_CTA,
      title: "Kham pha Ha Long theo cach sang trong nhat",
    },
  },
  "tokyo-heart-japan": {
    hero: {
      campaignLabel: "Deal thanh pho",
      title: "Tokyo phong cach moi cho moi hanh trinh",
      description:
        "Tron bo Tokyo voi lich trinh can bang giua shopping, am thuc va di san van hoa Nhat Ban.",
      countdownLabel: "19 ngay 11 gio",
      discountValue: "-20%",
      promoCode: "TOKYO20",
      primaryActionLabel: "Dat cho ngay",
      backgroundImageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCZi-rsuP1eZW6KDP63GsUFJayrMMVQSBNSMln-pQ3CzoFu2NY8D9a33-xVVYmSjXYteNkjg9VL7FqasHkz6zXPg9EDxg0ctAV84y6yQl8rJRM8HVCRfwL7234Lw8pUynebY7ki0oOAZSi0gx_YN59xTTQB53pwW2MnK2iMVFyVQ6GQAIkKfKeF3f-wziO7ikdfPR9DhLA8Bk_z0Tb27TOLGw4OY1ZEEvsoTsUl5eWzIzjUNzJstk7Hz3tI8iQ09bTvO5bC8GPRtmY",
    },
    conditionTitle: "Dieu kien ap dung",
    conditionColumns: [
      [
        "Ap dung cho tour khoi hanh trong mua la do.",
        "Bao gom ve metro 72 gio va city pass tham quan.",
        "Khach can ho chieu con han toi thieu 6 thang.",
      ],
      [
        "Khong gom le phi visa va bao hiem ca nhan.",
        "Khuyen khich dat truoc toi thieu 14 ngay.",
        "Khong ket hop voi uu dai flash sale theo gio.",
      ],
    ],
    supportCard: {
      icon: "translate",
      title: "Ho tro ngon ngu",
      description:
        "Huong dan vien song ngu Viet - Nhat va tro ly AI ho tro tuyen diem theo so thich mua sam.",
      actionLabel: "Nhan lich trinh goi y",
      actionHref: "/concierge",
    },
    applicableToursTitle: "Tour Tokyo noi bat",
    applicableToursDescription:
      "Goi y cho khach yeu thich kham pha thanh thi hien dai.",
    applicableTours: [
      {
        id: "tokyo-nightlife-pro",
        title: "Tokyo Nightlife and Hidden Izakaya",
        imageUrl:
          "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
        rating: 4.8,
        duration: "4 ngay 3 dem",
        seatsLeft: 10,
        originalPrice: "24,500,000d",
        discountedPrice: "19,600,000d",
        discountLabel: "-20% OFF",
      },
      {
        id: "tokyo-cultural-core",
        title: "Tokyo Cultural Core: Asakusa and Ueno",
        imageUrl:
          "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=1200&q=80",
        rating: 4.9,
        duration: "5 ngay 4 dem",
        seatsLeft: 7,
        originalPrice: "26,000,000d",
        discountedPrice: "20,800,000d",
        discountLabel: "-20% OFF",
      },
      {
        id: "tokyo-premium-shopping",
        title: "Tokyo Premium Shopping Concierge",
        imageUrl:
          "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1200&q=80",
        rating: 5,
        duration: "3 ngay 2 dem",
        seatsLeft: 5,
        originalPrice: "18,900,000d",
        discountedPrice: "15,120,000d",
        discountLabel: "-20% OFF",
      },
    ],
    finalCta: {
      ...DEFAULT_FINAL_CTA,
      title: "Tokyo dang cho ban voi gia uu dai nhat",
    },
  },
  "paris-autumn-getaway": {
    hero: {
      campaignLabel: "Deal lang man",
      title: "Paris mua thu cho nhung tam hon yeu nghe thuat",
      description:
        "Tan huong mua thu vang o Paris, tour am thuc va bo anh thanh pho trong khung canh co dien.",
      countdownLabel: "27 ngay 02 gio",
      discountValue: "-15%",
      promoCode: "PARIS15",
      primaryActionLabel: "Dat lich ngay",
      backgroundImageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAJTjhgs2qhodkcYdJ-87lrztNksbwmm0YvfdVHZoXFAYP78ViCVWIgSud4gDlzBz65DxLDYkeZrPbYonJruZhMNdpq5zuPLtRMu90M1t-SXNE1sE-Vg1osDiXbpNwjUrZKjT5uUxAQDG7MZP7QPvZiEwY4d8WNxuqZOXeFvo9AIbCqyL7kvG6NAYYq9ZuXbSfTk4oPLIXYYLsfqNj39HiW5OmrEOtdvbe0xoqjsC9pqYf9qamwghErx1-kgWvfb440OPlHa4R6NCg",
    },
    conditionTitle: "Dieu kien ap dung",
    conditionColumns: [
      [
        "Ap dung cho tour khoi hanh tu thang 9 den thang 11.",
        "Gia da bao gom 1 bua toi tasting menu tai khu Marais.",
        "Voucher hieu luc trong 48 gio sau khi xac nhan dat cho.",
      ],
      [
        "Khong ap dung cho tour su kien dac biet va Fashion Week.",
        "Hoan huy mien phi truoc 10 ngay khoi hanh.",
        "Can xac nhan lich trinh cu the truoc 72 gio khoi hanh.",
      ],
    ],
    supportCard: {
      icon: "camera",
      title: "Goi chup anh city walk",
      description:
        "Tang kem bo anh tai 3 dia diem bieu tuong tai Paris khi dat tour trong thoi gian ap dung.",
      actionLabel: "Xem chi tiet goi",
      actionHref: "/profile",
    },
    applicableToursTitle: "Tour Paris noi bat",
    applicableToursDescription:
      "Lua chon theo phong cach nghi duong va am thuc cua ban.",
    applicableTours: [
      {
        id: "paris-classic-boulevard",
        title: "Paris Classic Boulevard and Museums",
        imageUrl:
          "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1200&q=80",
        rating: 4.9,
        duration: "5 ngay 4 dem",
        seatsLeft: 6,
        originalPrice: "30,200,000d",
        discountedPrice: "25,670,000d",
        discountLabel: "-15% OFF",
      },
      {
        id: "paris-culinary-love",
        title: "Paris Culinary Love Story",
        imageUrl:
          "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
        rating: 5,
        duration: "4 ngay 3 dem",
        seatsLeft: 4,
        originalPrice: "27,800,000d",
        discountedPrice: "23,630,000d",
        discountLabel: "-15% OFF",
      },
      {
        id: "paris-riverside-luxury",
        title: "Paris Riverside Luxury Retreat",
        imageUrl:
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
        rating: 4.8,
        duration: "6 ngay 5 dem",
        seatsLeft: 3,
        originalPrice: "34,900,000d",
        discountedPrice: "29,665,000d",
        discountLabel: "-15% OFF",
      },
    ],
    finalCta: {
      ...DEFAULT_FINAL_CTA,
      title: "Paris mua thu dang cho ban den kham pha",
    },
  },
  "phu-quoc-coral-adventure": {
    hero: {
      campaignLabel: "Deal mao hiem",
      title: "Phu Quoc Adventure: Lan bien va cano toc do cao",
      description:
        "Tron bo trai nghiem mao hiem tren bien voi huong dan vien chuyen nghiep va trang thiet bi dat chuan.",
      countdownLabel: "12 ngay 03 gio",
      discountValue: "-30%",
      promoCode: "CORAL30",
      primaryActionLabel: "Bat dau hanh trinh",
      backgroundImageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCSaWxfco7cvDooU4ng8wqt-tCCGbfNgiFrgrSOrIwWpeTs670r1hYDyU0afBMtBUU5cyO8E9sYXFAK5Y_bfMFA_T2JHQN_swLFghJJckxaxTqK97FRwrxwpnaM7__Ss76s1I9qgs-myv98p5MHKx2IxdFMBYJi47cn15dSf0NduBdeYYf0asKk0BNzcETEX0KWXYyzAgZQficgTL_WV9RwUUHPe0ASVbh4UFRll0FzNYU1NkjUnIgBW3xK3Qa3-fWQn9Y-WzaVLOU",
    },
    conditionTitle: "Dieu kien an toan va ap dung",
    conditionColumns: [
      [
        "Khach tu 12 tuoi tro len va du dieu kien suc khoe.",
        "Bat buoc su dung ao phao va thiet bi bao ho duoc cap.",
        "Thoi gian linh dong theo du bao song gio.",
      ],
      [
        "Tour khoi hanh toi thieu 6 khach moi dot.",
        "Khong ap dung cho khach co benh ly tim mach nang.",
        "Voucher vo hieu neu den tre qua 20 phut so voi lich hen.",
      ],
    ],
    supportCard: {
      icon: "health_and_safety",
      title: "Huong dan vien cuu ho",
      description:
        "Doi ngu duoc chung nhan cuu ho bien va theo sat suot hanh trinh de dam bao an toan.",
      actionLabel: "Xem cam ket an toan",
      actionHref: "/profile",
    },
    applicableToursTitle: "Goi adventure dang mo ban",
    applicableToursDescription:
      "Danh cho du khach yeu thich van dong va trai nghiem doc dao.",
    applicableTours: [
      {
        id: "phu-quoc-coral-pro",
        title: "Coral Dive Pro Experience",
        imageUrl:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
        rating: 4.9,
        duration: "2 ngay 1 dem",
        seatsLeft: 8,
        originalPrice: "9,200,000d",
        discountedPrice: "6,440,000d",
        discountLabel: "-30% OFF",
      },
      {
        id: "phu-quoc-cano-island-hop",
        title: "Cano Island Hopping Expedition",
        imageUrl:
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
        rating: 4.7,
        duration: "1 ngay",
        seatsLeft: 10,
        originalPrice: "5,800,000d",
        discountedPrice: "4,060,000d",
        discountLabel: "-30% OFF",
      },
      {
        id: "phu-quoc-sea-camp",
        title: "Sea Camp and Night Snorkeling",
        imageUrl:
          "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=1200&q=80",
        rating: 4.8,
        duration: "3 ngay 2 dem",
        seatsLeft: 5,
        originalPrice: "11,200,000d",
        discountedPrice: "7,840,000d",
        discountLabel: "-30% OFF",
      },
    ],
    finalCta: {
      ...DEFAULT_FINAL_CTA,
      title: "San sang cho hanh trinh mao hiem tiep theo",
    },
  },
};

export function getCustomerDealById(dealId: string): CustomerDeal | null {
  return CUSTOMER_DEALS.find((deal) => deal.id === dealId) ?? null;
}

export function getCustomerDealDetailsById(
  dealId: string,
): CustomerDealDetailsPayload | null {
  const deal = getCustomerDealById(dealId);
  const details = CUSTOMER_DEAL_DETAILS_MAP[dealId];

  if (!deal || !details) {
    return null;
  }

  return {
    deal,
    ...details,
  };
}
