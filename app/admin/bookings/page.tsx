import Link from "next/link";

export default function AdminBookingsPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface px-6 py-10">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
        <h1 className="text-3xl font-black text-slate-950">Admin Bookings</h1>
        <p className="mt-4 text-slate-600">Trang quản lý booking tạm thời chưa có nội dung chi tiết. Các số liệu booking hiện có thể xem trong dashboard <Link href="/admin" className="font-semibold text-primary underline">Admin Overview</Link>.</p>
      </div>
    </div>
  );
}
