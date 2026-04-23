import { ContactOfficePoint } from "@/types/customer-edit-forms";

export const CONTACT_TOPICS = [
  "Tư vấn chuyến đi cá nhân hóa",
  "Hỗ trợ booking đã đặt",
  "Đề xuất hợp tác doanh nghiệp",
  "Phản hồi trải nghiệm dịch vụ",
];

export const CONTACT_OFFICE_POINTS: ContactOfficePoint[] = [
  {
    id: "hcm",
    city: "TP. Hồ Chí Minh",
    address: "125 Lê Lợi, Quận 1",
    imageUrl:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Ho Chi Minh city skyline at sunset",
  },
  {
    id: "hn",
    city: "Hà Nội",
    address: "88 Tràng Tiền, Hoàn Kiếm",
    imageUrl:
      "https://images.unsplash.com/photo-1557750255-c76072a7aad1?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Hanoi old quarter with lake and trees",
  },
];
