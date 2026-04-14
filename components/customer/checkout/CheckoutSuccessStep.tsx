import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import SurfaceCard from "@/components/ui/SurfaceCard";
import Link from "next/link";

interface CheckoutSuccessStepProps {
  bookingCode: string;
  onCreateNewBooking: () => void;
}

export default function CheckoutSuccessStep({
  bookingCode,
  onCreateNewBooking,
}: CheckoutSuccessStepProps) {
  return (
    <SurfaceCard
      tone="white"
      border="soft"
      shadow="elevated"
      radius="3xl"
      className="p-12 text-center"
    >
      <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 shadow-inner shadow-green-200">
        <Icon name="check_circle" className="text-5xl" filled />
      </div>
      <h2 className="text-3xl font-black text-on-surface mb-4">
        Đặt chỗ thành công
      </h2>
      <p className="text-lg text-on-surface-variant mb-8 max-w-md mx-auto">
        Chuyến đi của bạn đã được xác nhận và hệ thống đã gửi email vé điện tử.
        Concierge sẽ liên hệ trong vòng 15 phút để tối ưu lịch trình.
      </p>
      <p className="inline-block px-4 py-2 bg-surface-container text-on-surface rounded-xl font-mono border border-outline-variant/30 text-sm mb-8">
        Mã đặt chỗ: <span className="font-bold">#{bookingCode}</span>
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="outline" size="lg" onClick={onCreateNewBooking}>
          Tạo booking mới
        </Button>
        <Link href="/">
          <Button variant="primary" size="lg">
            Quay về trang chủ
          </Button>
        </Link>
      </div>
    </SurfaceCard>
  );
}
