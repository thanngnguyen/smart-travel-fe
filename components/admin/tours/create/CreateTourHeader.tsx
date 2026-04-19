import AdminButton from "@/components/ui/AdminButton";

export default function CreateTourHeader() {
  return (
    <header className="flex justify-between items-center w-full px-8 py-6 sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex flex-col">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          Tạo tour gốc
        </h2>
        <nav className="flex text-xs text-outline font-medium gap-2 items-center">
          <span>Tour</span>
          <span className="material-symbols-outlined text-[10px]">
            arrow_forward_ios
          </span>
          <span className="text-primary">Tour gốc mới</span>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <AdminButton variant="surface" size="lg" className="font-semibold">
          Hủy bản nháp
        </AdminButton>
        <AdminButton
          variant="gradient"
          size="lg"
          className="py-2.5 shadow-md hover:shadow-lg active:scale-95"
        >
          Xuất bản tour
        </AdminButton>
      </div>
    </header>
  );
}
