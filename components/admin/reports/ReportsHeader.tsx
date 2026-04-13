import AdminPageHeader from "@/components/ui/AdminPageHeader";
import AdminButton from "@/components/ui/AdminButton";

export default function ReportsHeader() {
  return (
    <AdminPageHeader
      title="Tài chính & vận hành"
      description="Chỉ số hiệu suất thời gian thực cho Quý 4 năm 2024"
      className="mb-12"
      titleClassName="text-4xl font-headline text-slate-900"
      descriptionClassName="text-slate-500"
      actions={
        <>
          <AdminButton variant="surface" size="lg" className="text-slate-900">
            <span className="material-symbols-outlined text-lg">
              calendar_today
            </span>
            30 ngày gần nhất
          </AdminButton>
          <AdminButton variant="solid" size="lg" className="hover:scale-105">
            <span className="material-symbols-outlined text-lg">download</span>
            Xuất PDF
          </AdminButton>
        </>
      }
    />
  );
}
