"use client";
import { useState, useEffect } from "react";

export function useCustomerToursData() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [tours, setTours] = useState<any[]>([]); 
  const [isLoading, setIsLoading] = useState(true);

  // Giữ nguyên các options cho bộ lọc
  const difficulties = ["Dễ", "Trung bình", "Khó"];
  const sortOptions = ["Giá tăng dần", "Giá giảm dần", "Mới nhất"];

  useEffect(() => {
    const fetchTours = async () => {
      try {
        setIsLoading(true);
        // Gọi API thật từ Spring Boot
        const response = await fetch("http://localhost:8081/api/tours");
        
        if (response.ok) {
          const data = await response.json();
          
          // MAP DỮ LIỆU BẠN NHẬN ĐƯỢC TỪ BACKEND SANG ĐỊNH DẠNG FRONTEND CẦN
          const formattedTours = data.map((t: any) => {
            // Tìm cái ảnh được đánh dấu là isPrimary = true, nếu không có thì lấy ảnh đầu tiên
            const primaryImage = t.images?.find((img: any) => img.isPrimary)?.imageUrl 
                              || t.images?.[0]?.imageUrl 
                              || "/placeholder-image.jpg"; // Ảnh mặc định nếu tour chưa có ảnh

            return {
              id: t.slug, // Dùng slug làm id để khi bấm vào thẻ Tour nó chuyển trang cho chuẩn
              title: t.title,
              image: primaryImage,
              duration: `${t.durationDays} Ngày ${t.durationNights} Đêm`,
              // Lấy tên Điểm đến đầu tiên trong danh sách destinations của Tour
              location: t.destinations?.[0]?.name || "Nhiều điểm đến", 
              price: t.adultPrice,
              originalPrice: t.adultPrice + 2000000, // Làm giá gốc cao hơn chút để hiển thị gạch ngang (Tùy chọn)
              rating: 5.0, // Tạm thời hardcode, sau này lấy từ bảng Review
              reviews: 12,
            };
          });

          setTours(formattedTours);
        }
      } catch (error) {
        console.error("Lỗi kết nối Backend:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTours();
  }, []);

  return {
    isFilterOpen,
    setIsFilterOpen,
    tours,
    difficulties,
    sortOptions,
    isLoading
  };
}