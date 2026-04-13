import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import SurfaceCard from "@/components/ui/SurfaceCard";
import Link from "next/link";
import { TourBookingSummary } from "@/types/customer-tour-details";

interface TourBookingWidgetProps {
  booking: TourBookingSummary;
}

export default function TourBookingWidget({ booking }: TourBookingWidgetProps) {
  return (
    <SurfaceCard
      tone="white"
      border="subtle"
      shadow="elevated"
      radius="3xl"
      className="sticky top-32 p-6 md:p-8"
    >
      <div className="flex justify-between items-end mb-6 pb-6 border-b border-outline-variant/30">
        <div>
          <p className="text-outline text-sm font-bold uppercase tracking-wider mb-1">
            Giá từ
          </p>
          <div className="flex items-baseline gap-1">
            <h2 className="text-4xl font-black text-on-surface">
              {booking.priceFrom}
            </h2>
            <span className="text-on-surface-variant font-medium">/ người</span>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center p-4 border border-outline-variant/40 rounded-xl cursor-pointer hover:border-primary transition-colors">
          <div>
            <p className="text-xs text-outline font-bold uppercase mb-1">
              Ngày đi
            </p>
            <p className="text-sm text-on-surface font-bold">
              {booking.dateRange}
            </p>
          </div>
          <Icon name="calendar_month" className="text-primary" />
        </div>
        <div className="flex justify-between items-center p-4 border border-outline-variant/40 rounded-xl cursor-pointer hover:border-primary transition-colors">
          <div>
            <p className="text-xs text-outline font-bold uppercase mb-1">
              Hành khách
            </p>
            <p className="text-sm text-on-surface font-bold">
              {booking.passengers}
            </p>
          </div>
          <Icon name="person" className="text-primary" />
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl mb-6 text-primary text-sm font-medium">
        <Icon name="info" />
        Có tùy chọn đặt trước, thanh toán sau trong bước thanh toán.
      </div>

      <Link href="/checkout/maldivian-solitude" className="w-full inline-block">
        <Button
          variant="primary"
          size="lg"
          className="w-full text-lg shadow-xl shadow-primary/20"
        >
          Giữ chỗ ngay
        </Button>
      </Link>

      <p className="text-center text-xs text-outline mt-4 font-medium">
        Không bị trừ phí cho đến khi xác nhận.
      </p>
    </SurfaceCard>
  );
}
