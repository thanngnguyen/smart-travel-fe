import {
  FooterLink,
  FrequencyOption,
  MediaThumbnail,
  TourDraftDay,
} from "@/types/admin-create-tour";

export function useAdminCreateTourData() {
  const draftDays: TourDraftDay[] = [
    {
      id: "day-1",
      title: "Ngày 1: Đến nơi & Tiệc chào mừng",
      descriptionPlaceholder: "Mô tả hoạt động...",
      tags: ["Bao gồm lưu trú", "Đón sân bay"],
    },
    {
      id: "day-2",
      title: "Ngày 2: Khám phá ven biển",
      descriptionPlaceholder:
        "Du ngoạn du thuyền riêng dọc vách đá Positano...",
      tags: ["Bao gồm hoạt động"],
    },
  ];

  const mediaThumbnails: MediaThumbnail[] = [
    {
      id: "thumb-1",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLv5MFhRd20XMxiexEkQTGKrz0jMNQHH7JB23Uj_B-qpedWP_bAqvx-PKgOKBJq90VVgdm2Cpkq8eIIipjFwu2QQpFIbSmNtmPQopzWwEQG_LguagfzSZ0CgWBipwxei314H6Gke33-Qywmo6CT9SRHucW8_p5dWmToCo2eGtH-kJfgd_yubK2ciPuUV4xCpgxxx72I8nJSU63KNCH3K1p-j4gzGp1kCHLRlK8MHP2N-cdB7VT1WAcCSo57yANxhVzL_z4tXvQ0bU",
      altText:
        "vibrant blue water of the Mediterranean coast with colorful cliffside villas under bright summer sun",
    },
    {
      id: "thumb-2",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHqt2lLdeZ_4TDTeqOe4ROKrEjrXP2wl-MRefdwdulvRGjp2lSxL_tvjptQjWNWstir-ciKTZdOBtccnxC_FV2GV2HNOlXk54ZjR9GCfs3HAbq4-tiOeBU_YOdd_EDu13GfGVY7z8sLvujeR9tBpWw2NANLYPObTR01OKATmOtnD8R2xl2XdgIJL8Od-xeMUYulm3TslNBgQkTQv8zBpwyLzgMJQK-a_fuBdR9VGHW0HJ8DgxNw4TDIXCoac37sjld63tBu1zP3uw",
      altText:
        "narrow stone alleyway in a classic Italian village with laundry hanging between balconies and warm afternoon shadows",
    },
  ];

  const frequencyOptions: FrequencyOption[] = [
    { value: "weekly", label: "Hàng tuần (Thứ bảy)" },
    { value: "bi-weekly", label: "Hai tuần một lần" },
    { value: "monthly", label: "Hàng tháng (Thứ hai tuần 1)" },
  ];

  const footerLinks: FooterLink[] = [
    { id: "privacy", label: "Chính sách bảo mật", href: "#" },
    { id: "terms", label: "Điều khoản dịch vụ", href: "#" },
    { id: "support", label: "Trung tâm hỗ trợ", href: "#" },
    { id: "contact", label: "Liên hệ", href: "#" },
  ];

  return {
    draftDays,
    mediaThumbnails,
    frequencyOptions,
    footerLinks,
  };
}
