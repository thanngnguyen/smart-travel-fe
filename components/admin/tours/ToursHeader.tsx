import AdminButton from "@/components/ui/AdminButton";
import Link from "next/link";

interface ToursHeaderProps {
  title: string;
  description: string;
}

export default function ToursHeader({ title, description }: ToursHeaderProps) {
  return (
    <header className="flex justify-between items-end mb-10">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-on-surface">
          {title}
        </h1>
        <p className="text-on-surface-variant mt-2 text-lg">{description}</p>
      </div>
      <div className="flex gap-4">
        <Link
          href="/admin/tours/create"
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-container transition-colors font-bold mr-3"
        >
          <span className="material-symbols-outlined">add</span> Tạo tour
        </Link>
        <AdminButton variant="surface" size="lg" className="font-semibold">
          <span className="material-symbols-outlined">download</span>
          Xuất danh sách chuyến
        </AdminButton>
      </div>
    </header>
  );
}
