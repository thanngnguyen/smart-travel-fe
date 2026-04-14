"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ConciergeMessage,
  ConciergeNavItem,
  ConciergeRecommendation,
  ConciergeTopNavItem,
} from "@/types/concierge";

const INITIAL_MESSAGES: ConciergeMessage[] = [
  {
    id: "ai-welcome",
    role: "ai",
    text: "Chào buổi sáng! Tôi đã phân tích sở thích của bạn về **kiến trúc truyền thống Kyoto**. Tôi thấy bạn đang lên kế hoạch cho **12 - 18 tháng 11**. Chúng ta nên tập trung vào khu Gion hay thêm cả rừng tre Arashiyama?",
    entities: ["Kyoto", "12-18 thg 11"],
  },
  {
    id: "user-preference",
    role: "user",
    text: "Mình muốn cả hai, nhưng cần trải nghiệm thật riêng tư. Có thể có trà đạo với một nghệ nhân bản địa không?",
  },
];

const SIDEBAR_NAV: ConciergeNavItem[] = [
  { id: "home", label: "Trang chủ", href: "/", icon: "home" },
  {
    id: "trips",
    label: "Chuyến đi của tôi",
    href: "/profile",
    icon: "travel_explore",
  },
  { id: "saved", label: "Đã lưu", href: "/saved", icon: "bookmark" },
  {
    id: "concierge",
    label: "Trợ lý AI",
    href: "/concierge",
    icon: "smart_toy",
    isActive: true,
  },
  { id: "settings", label: "Cài đặt", href: "/settings", icon: "settings" },
];

const TOP_NAV: ConciergeTopNavItem[] = [
  { id: "destinations", label: "Điểm đến", href: "/" },
  { id: "tours", label: "Tour", href: "/tours" },
  { id: "offers", label: "Ưu đãi", href: "/deals" },
  { id: "assistant", label: "Trợ lý AI", href: "/concierge", isActive: true },
];

const RECOMMENDATIONS: ConciergeRecommendation[] = [
  {
    id: "gion-tea-garden",
    title: "Vườn trà bí mật Gion",
    price: "¥24,000",
    description:
      "Trà thất riêng tư từ thế kỷ 17 thường đóng cửa với công chúng. Bao gồm lớp trà matcha cùng nghệ nhân đời thứ 4.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDKFSNkt9E4RU2kHLXg9h_KAORDnrEPVqkqowUhs8p9LMfYZTGBnsjXqDmuiGQkvecdeajo3xjdmuL6P4UQqgKp5DCiljJkJGKKo_qBIWngbWC5c_WXrf84ClBu7vfEDGYP-KGj0k9-nrqLSA-Au6Xm41xOnhtaxVGokTfMMkBVpMFdB4Uj0XE9758EZlyjXTb5V2uK-WulFEt_cMgB4SYI_omCSwjT8z8YH49taZfTWl7fD7Ljv0CCXOZD-wr0KP2czIm4pWFWRs",
  },
  {
    id: "kodai-ji-zen",
    title: "Thiền buổi sáng tại Kodai-ji",
    price: "¥18,500",
    description:
      "Vào khu vườn đền trước giờ mở cửa, tiếp theo là nghi lễ trà riêng và phiên thiền định.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFCM95HTfF15mwHqXXpaCsLDJw3dScd01V6TiLfza-yt1sb0kV1JHxe9FJNNilNqIdsO2q6zc0T7UohEaII7OWSgKBy0PRBY4YG0mTLFdDjkrA7lsGIAUrj1eLiXFJ0nZHQ3-hS5gOIkQo0FRXKjzhXDmsClmxsCxQR-KJbCwZ33I8o-FfA7eDZKSr7Ytkur80YZhFjKmc1sev-1tMIhOFOVrZUwEx4HlakFm21KW8mGIe77lHeXgsa9b02E5dJvwzbWB-hEDq-9w",
  },
];

const QUICK_ACTIONS = [
  "Tìm chỗ đặt bữa tối",
  "Kiểm tra giá chuyến bay",
  "Yêu cầu visa",
];

export function useConciergeChat() {
  const [messages, setMessages] =
    useState<ConciergeMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (event: FormEvent) => {
    event.preventDefault();
    if (!input.trim()) {
      return;
    }

    const userMessage: ConciergeMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          role: "ai",
          text: "Đang xử lý yêu cầu... Tôi đã cập nhật lịch trình.",
          entities: [],
        },
      ]);
    }, 1500);
  };

  return {
    messages,
    input,
    setInput,
    handleSend,
    messagesEndRef,
    sidebarNav: SIDEBAR_NAV,
    topNav: TOP_NAV,
    recommendations: RECOMMENDATIONS,
    quickActions: QUICK_ACTIONS,
  };
}
