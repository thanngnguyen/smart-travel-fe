import AdminButton from "@/components/ui/AdminButton";

export default function InsightsHeader() {
  return (
    <header className="flex justify-between items-end mb-8">
      <div>
        <h2 className="text-4xl font-black text-on-surface tracking-tight mb-1">
          Bảng điều khiển phân tích AI
        </h2>
        <p className="text-on-surface-variant font-medium">
          Phân tích dự báo và theo dõi cảm xúc cho Quý 4 năm 2024
        </p>
      </div>
      <div className="flex gap-3">
        <AdminButton variant="surfaceMuted" size="lg">
          <span className="material-symbols-outlined text-sm">
            calendar_today
          </span>
          <span className="text-sm font-bold">30 ngày gần nhất</span>
        </AdminButton>
        <AdminButton
          variant="gradient"
          size="lg"
          className="py-2 hover:opacity-90"
        >
          Xuất báo cáo phân tích
        </AdminButton>
      </div>
    </header>
  );
}
