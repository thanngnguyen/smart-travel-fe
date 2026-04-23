import AdminButton from "@/components/ui/AdminButton";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

interface BookingDetailsTopBarProps {
  bookingId: string;
  bookingCode: string;
  confirmationText: string;
}

export default function BookingDetailsTopBar({
  bookingId,
  bookingCode,
  confirmationText,
}: BookingDetailsTopBarProps) {
  return (
    <header className="flex justify-between items-center w-full px-8 py-6 sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-30 shadow-[0_20px_40px_rgba(25,28,30,0.06)]">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/bookings"
          className="p-2 hover:bg-surface-container-low rounded-full transition-colors active:scale-90"
        >
          <Icon name="arrow_back" />
        </Link>
        <div>
          <h2 className="font-headline font-bold tracking-tight text-slate-900 dark:text-slate-100 text-xl">
            {bookingCode}
          </h2>
          <p className="text-xs font-medium text-slate-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            {confirmationText}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <AdminButton
          variant="surface"
          size="sm"
          className="text-primary font-semibold"
        >
          <Link href={`/admin/bookings/${bookingId}/edit`}>
            Chỉnh sửa đặt chỗ
          </Link>
        </AdminButton>
        <AdminButton
          variant="gradient"
          size="lg"
          className="py-2 active:scale-95 transition-transform"
        >
          In lịch trình
        </AdminButton>
      </div>
    </header>
  );
}
