import {
  InsightSummaryCard,
  IntentStat,
  RedFlagReview,
  SentimentDayBar,
  SentimentLegendItem,
} from "@/types/admin-insights";

export function useAdminInsightsData() {
  const sentimentLegend: SentimentLegendItem[] = [
    { id: "positive", label: "Tích cực", colorClassName: "bg-primary" },
    {
      id: "neutral",
      label: "Trung tính",
      colorClassName: "bg-secondary-container",
    },
    { id: "negative", label: "Tiêu cực", colorClassName: "bg-error" },
  ];

  const sentimentDays: SentimentDayBar[] = [
    {
      id: "mon",
      dayLabel: "T2",
      containerHeight: "40%",
      primaryHeight: "60%",
      secondaryHeight: "25%",
      secondaryTone: "secondary",
    },
    {
      id: "tue",
      dayLabel: "T3",
      containerHeight: "55%",
      primaryHeight: "70%",
      secondaryHeight: "20%",
      secondaryTone: "secondary",
    },
    {
      id: "wed",
      dayLabel: "T4",
      containerHeight: "70%",
      primaryHeight: "80%",
      secondaryHeight: "10%",
      secondaryTone: "error",
    },
    {
      id: "thu",
      dayLabel: "T5",
      containerHeight: "60%",
      primaryHeight: "65%",
      secondaryHeight: "30%",
      secondaryTone: "secondary",
    },
    {
      id: "fri",
      dayLabel: "T6",
      containerHeight: "85%",
      primaryHeight: "90%",
      secondaryHeight: "5%",
      secondaryTone: "secondary",
    },
    {
      id: "sat",
      dayLabel: "T7",
      containerHeight: "50%",
      primaryHeight: "55%",
      secondaryHeight: "35%",
      secondaryTone: "error",
    },
    {
      id: "sun",
      dayLabel: "CN",
      containerHeight: "75%",
      primaryHeight: "85%",
      secondaryHeight: "10%",
      secondaryTone: "secondary",
    },
  ];

  const intentStats: IntentStat[] = [
    {
      id: "booking",
      label: "Yêu cầu đặt chỗ",
      percent: "64%",
      barColorClassName: "bg-primary",
      textColorClassName: "text-primary",
    },
    {
      id: "refund",
      label: "Yêu cầu hoàn tiền",
      percent: "22%",
      barColorClassName: "bg-tertiary",
      textColorClassName: "text-tertiary",
    },
    {
      id: "flight-status",
      label: "Trạng thái chuyến bay",
      percent: "12%",
      barColorClassName: "bg-secondary",
      textColorClassName: "text-secondary",
    },
  ];

  const redFlagReviews: RedFlagReview[] = [
    {
      id: "johnathan-doe",
      initials: "JD",
      customerName: "Johnathan Doe",
      customerType: "Thành viên cao cấp",
      excerpt:
        '"Chuyến bay bị trễ 6 tiếng và không ai ở quầy concierge hỗ trợ. Thật sự là thảm họa..."',
      sentiment: "0.12",
      primaryIntent: "LỖI_HỖ_TRỢ",
    },
    {
      id: "maria-santos",
      initials: "MS",
      customerName: "Maria Santos",
      customerType: "Khách lần đầu",
      excerpt:
        '"Hướng dẫn viên không xuất hiện. Không có phản hồi từ ứng dụng. Tôi muốn hoàn tiền toàn bộ ngay lập tức."',
      sentiment: "0.08",
      primaryIntent: "YÊU_CẦU_HOÀN_TIỀN",
    },
    {
      id: "alex-wong",
      initials: "AW",
      customerName: "Alex Wong",
      customerType: "Hạng thương gia",
      excerpt:
        '"Lỗi thanh toán ở đơn đặt gần nhất. Tôi bị trừ tiền hai lần cho cùng một điểm đến. Bot AI không hữu ích."',
      sentiment: "0.21",
      primaryIntent: "TRANH_CHẤP_THANH_TOÁN",
    },
  ];

  const summaryCards: InsightSummaryCard[] = [
    {
      id: "sentiment-growth",
      iconName: "trending_up",
      iconContainerClassName: "bg-primary/10",
      iconClassName: "text-primary",
      label: "Tăng trưởng cảm xúc",
      value: "+14.2%",
      description: "So với mức nền cảm xúc của tháng trước.",
    },
    {
      id: "review-volume",
      iconName: "forum",
      iconContainerClassName: "bg-secondary-container/20",
      iconClassName: "text-secondary",
      label: "Tổng lượng đánh giá",
      value: "2,842",
      description: "Được xử lý trên 12 nền tảng du lịch liên kết.",
    },
    {
      id: "urgency-index",
      iconName: "priority_high",
      iconContainerClassName: "bg-tertiary-container/20",
      iconClassName: "text-tertiary",
      label: "Chỉ số khẩn cấp",
      value: "Trung bình",
      description: "Dựa trên cụm ý định tiêu cực và rủi ro rời bỏ.",
    },
    {
      id: "avg-response-time",
      iconName: "timer",
      iconContainerClassName: "bg-outline-variant/20",
      iconClassName: "text-outline",
      label: "Thời gian phản hồi TB",
      value: "1.2m",
      description: "Độ trễ tạo phản hồi do AI đề xuất.",
    },
  ];

  return {
    sentimentLegend,
    sentimentDays,
    intentStats,
    redFlagReviews,
    summaryCards,
  };
}
