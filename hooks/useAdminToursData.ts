import {
  AdminTourRow,
  ConflictCard,
  ConflictLegendItem,
  RecurringDayOption,
  SelectOption,
  YieldSuggestion,
} from "@/types/admin-tours";

export function useAdminToursData() {
  const tourRows: AdminTourRow[] = [
    {
      id: "ice-hgh-01",
      title: "Thám hiểm cao nguyên Iceland",
      code: "ICE-HGH-01",
      duration: "8 ngày",
      basePrice: "$3,450",
      activeDepartures: "24 hoạt động",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDeuqIbfEAhaBeNLUBAHdsfdSPrQqQwuXdapl58UXUSYjsg2YIRjrMAy9E--ujGh3CSUkmt57zzmPMnlzZLknfME-OrgNSCr_ea4dCK6CX3ZM0YIx7sWLrAsXW4LkKIKFE5MO5vhFpDt_Azh4yhhKzdDZs6HX-5g_A0okr_AsvN_MtwqOVrHWvlArj85pCQNIMfNjRe-bfWawGyhMxGAFEAD8WdAIL_MuQlymgUaSI7Z0GD3yvLd6eVQ9MIur5aE29aHlzmpoGGVfk",
      imageAlt:
        "vibrant blue glacier in Iceland with soft morning mist and cinematic lighting",
    },
    {
      id: "jpn-kyo-04",
      title: "Di sản Kyoto & Vườn Thiền",
      code: "JPN-KYO-04",
      duration: "5 ngày",
      basePrice: "$1,890",
      activeDepartures: "12 hoạt động",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDrKXwKwDz4p-4b2A9wYj016IAw2nhfsyePRdhIsmrOgcVY881KZdpOzPXQEo6VXrnCGtzPotkaShmI-BQPPCX8Kq8DVk5iGcPPdq471VqdJbDl8KYAsG61Bwun80kRD6RYRO33bNML5cCFzr1790H3H1TLw0HlZ5Hv-HfBM7usotjTF6il9tqKnPUQtem2Tl-SrAZC3Jf6qi7thMwcQdGl6RJL33RGEA-GFYUMWaSTLDClY-q-5IeeGCBA9FLokzxGK_QS6qGnmHw",
      imageAlt:
        "cobblestone streets of Kyoto Japan at sunset with glowing lanterns and cherry blossoms",
    },
    {
      id: "tan-ser-09",
      title: "Safari cao cấp Serengeti",
      code: "TAN-SER-09",
      duration: "10 ngày",
      basePrice: "$6,200",
      activeDepartures: "8 hoạt động",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBSGu-9mT77fw8nphVke4wNURyzHyXpd4PKcCM5ZzCssDuGRtZmrvEic3Ugb-o2KTrqPE4L1c2sgC2Y7QLpMhrRgsoX-Kd2WKNhqZ6oWzctuuHHeNHB1CL3t4q0PNaVOXkm49B4PMQDR_j7CqAoevDkEyqqcHhGUN7RLAiVe_9gMN9081dcjjcYgD2yxSMo-RVbs70rED0lP_3-oj67nyjLzQ-HtS7xKP--RXXzCG9MPV6mC2iTPfjjPIjVgz3eIAngoAtTYvDUWaA",
      imageAlt:
        "dramatic aerial view of Serengeti savanna at dawn with hot air balloons in distance",
    },
  ];

  const targetItineraryOptions: SelectOption[] = [
    { value: "ice-hgh-01", label: "Thám hiểm cao nguyên Iceland" },
    { value: "jpn-kyo-04", label: "Di sản Kyoto & Vườn Thiền" },
  ];

  const recurringDays: RecurringDayOption[] = [
    { id: "mon", label: "T2", isSelected: false },
    { id: "tue", label: "T3", isSelected: false },
    { id: "wed", label: "T4", isSelected: false },
    { id: "thu", label: "T5", isSelected: false },
    { id: "fri", label: "T6", isSelected: false },
    { id: "sat", label: "T7", isSelected: true },
    { id: "sun", label: "CN", isSelected: true },
  ];

  const guideOptions: SelectOption[] = [
    {
      value: "elena-rodriguez",
      label: "Elena Rodriguez (Hướng dẫn viên cao cấp)",
    },
    {
      value: "markus-thorne",
      label: "Markus Thorne (Trưởng nhóm khảo sát)",
    },
  ];

  const conflictLegend: ConflictLegendItem[] = [
    {
      id: "guide-conflict",
      label: "Xung đột hướng dẫn viên",
      dotClassName: "bg-tertiary",
    },
    {
      id: "overbooked",
      label: "Quá tải đặt chỗ",
      dotClassName: "bg-error",
    },
  ];

  const conflictCards: ConflictCard[] = [
    {
      id: "conflict-1",
      theme: "warning",
      badge: "Phát hiện chồng chéo",
      title: "Elena Rodriguez",
      description: {
        prefix: "Được xếp cho",
        primaryHighlight: "Thám hiểm Iceland",
        middle: "(12-20/10) trong khi được phân cho",
        secondaryHighlight: "Dạo bộ Kyoto",
        suffix: "bắt đầu ngày 19/10.",
      },
      primaryAction: "Phân công lại hướng dẫn viên",
      secondaryAction: "Bỏ qua",
    },
    {
      id: "conflict-2",
      theme: "error",
      badge: "Cảnh báo tồn kho",
      title: "Serengeti Safari (SN-102)",
      description: {
        prefix:
          "Sức chứa phương tiện đã vượt mức cho lịch khởi hành ngày 04/11.",
        primaryHighlight: "14/12 ghế",
        suffix: "được xác nhận qua đồng bộ OTA.",
      },
      primaryAction: "Mở rộng đội phương tiện",
      secondaryAction: "Tạm dừng đặt chỗ",
    },
  ];

  const yieldSuggestions: YieldSuggestion[] = [
    {
      id: "yield-peak",
      label: "15-25/08 (Cao điểm)",
      adjustment: "+15% SRP",
      adjustmentClassName: "text-green-600",
      barWidthClassName: "w-[85%]",
    },
    {
      id: "yield-low",
      label: "01-10/12 (Thấp điểm)",
      adjustment: "-10% SRP",
      adjustmentClassName: "text-blue-600",
      barWidthClassName: "w-[25%]",
    },
  ];

  return {
    tourRows,
    targetItineraryOptions,
    recurringDays,
    guideOptions,
    conflictLegend,
    conflictCards,
    yieldSuggestions,
  };
}
