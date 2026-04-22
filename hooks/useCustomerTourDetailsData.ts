"use client";
import { useState, useEffect } from "react";

export function useCustomerTourDetailsData(slug: string) {
  const [tourDetails, setTourDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchTourDetails = async () => {
      try {
        setIsLoading(true);
        // Gọi API lấy chi tiết 1 Tour bằng slug
        const response = await fetch(`http://localhost:8081/api/tours/${slug}`);
        
        if (response.ok) {
          const data = await response.json();
          console.log("Gói hàng từ Spring Boot gửi sang:", data);
          setTourDetails(data);
        }
      } catch (error) {
        console.error("Lỗi kéo dữ liệu chi tiết Tour:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTourDetails();
  }, [slug]);

  // NẾU ĐANG TẢI, TRẢ VỀ CÁC OBJECT TRỐNG ĐỂ UI KHÔNG BỊ LỖI UNDEFINED
  if (!tourDetails) {
    return {
      meta: { title: "Đang tải...", description: "", location: "", duration: "" },
      gallery: [],
      highlights: [],
      timeline: [],
      booking: { price: 0, adultPrice: 0, childPrice: 0 },
      isLoading: true
    };
  }

  // ==========================================
  // NHÀO NẶN LẠI DỮ LIỆU ĐỂ BƠM VÀO UI
  // ==========================================

  // 1. Phân bổ cho TourDetailsHero & TourOverviewSection
  const meta = {
    title: tourDetails.title,
    description: tourDetails.description,
    location: tourDetails.destinations?.[0]?.name || "Đang cập nhật",
    duration: `${tourDetails.durationDays} Ngày ${tourDetails.durationNights} Đêm`,
  };

  // 2. Phân bổ cho Gallery (Danh sách link ảnh)
  const gallery = tourDetails.images?.map((img: any, index: number) => ({
    id: img.id || index,
    src: img.imageUrl,
    alt: `Ảnh ${index + 1} của ${tourDetails.title}`
  })) || [];

  // 3. Phân bổ cho TourTimelineSection (Lịch trình)
  // Phải sort lại theo dayNumber cho chắc chắn nó hiển thị đúng ngày 1, 2, 3...
  const sortedItineraries = tourDetails.itineraries?.sort((a: any, b: any) => a.dayNumber - b.dayNumber) || [];
  
  const timeline = sortedItineraries.map((it: any) => ({
    day: `Ngày ${it.dayNumber}`,
    title: it.title,
    description: it.activities,
    meals: it.mealsIncluded,
    accommodation: it.accommodation
  }));

  // 4. Phân bổ cho TourBookingWidget (Chỗ đặt vé bên tay phải)
  const booking = {
    priceFrom: tourDetails.adultPrice, // ĐỔI THÀNH priceFrom ĐỂ KHỚP VỚI WIDGET
    defaultAdults: 2,                  // Mặc định chọn 2 người lớn
    defaultChildren: 0,                // Mặc định 0 trẻ em
    dateRange: "Khởi hành hàng ngày",  // Tạm thời để text tĩnh, sau này có thể thêm DB
    tourSlug: tourDetails.slug,
  };

// 5. Phân bổ cho TourHighlightsSection (Đã sửa đúng chuẩn title và description)
  const highlights = [
    { 
      id: "hl-1", 
      icon: "schedule", // Tên icon Google Material
      title: "Hành trình trọn vẹn",
      description: `Trải nghiệm ${meta.duration} không thể nào quên.`
    },
    { 
      id: "hl-2", 
      icon: "sailing", 
      title: "Nghỉ dưỡng đẳng cấp",
      description: `Tận hưởng dịch vụ 5 sao tại ${tourDetails.destinations?.[0]?.name || "Maldives"}.`
    },
    { 
      id: "hl-3", 
      icon: "map", 
      title: "Lịch trình chi tiết",
      description: `Bao gồm ${timeline.length} ngày khám phá với các hoạt động thú vị.`
    },
    { 
      id: "hl-4", 
      icon: "restaurant", 
      title: "Ẩm thực phong phú",
      description: `Thưởng thức các bữa ăn thượng hạng được chuẩn bị sẵn.`
    }
  ];

  return { meta, gallery, highlights, timeline, booking, isLoading: false };
}