import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import SurfaceCard from "@/components/ui/SurfaceCard";
import Link from "next/link";

interface CheckoutSuccessStepProps {
  bookingCode: string;
  chatGroupId: string | null;
  onCreateNewBooking: () => void;
}

export default function CheckoutSuccessStep({
  bookingCode,
  chatGroupId,
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
        Concierge sẽ liên hệ trong vòng 15 phút để tối ưu lịch trình và bạn đã
        được thêm tự động vào nhóm chat của tour.
      </p>
      <p className="inline-block px-4 py-2 bg-surface-container text-on-surface rounded-xl font-mono border border-outline-variant/30 text-sm mb-8">
        Mã đặt chỗ: <span className="font-bold">#{bookingCode}</span>
      </p>

      {chatGroupId ? (
        <div className="mb-8 mx-auto max-w-lg rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4 text-left">
          <p className="text-sm font-semibold text-primary mb-1">
            Nhóm chat tour đã sẵn sàng
          </p>
          <p className="text-sm text-on-surface-variant">
            Bạn có thể trao đổi trực tiếp với hướng dẫn viên và các khách hàng
            đi cùng tour để nhận thông tin cập nhật theo thời gian thực.
          </p>
        </div>
      ) : null}

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="outline" size="lg" onClick={onCreateNewBooking}>
          Tạo booking mới
        </Button>
        {chatGroupId ? (
          <Link href={`/tour-chat/${chatGroupId}`}>
            <Button variant="primary" size="lg">
              Vào nhóm chat tour
            </Button>
          </Link>
        ) : null}
        <Link href="/">
          <Button variant={chatGroupId ? "secondary" : "primary"} size="lg">
            Quay về trang chủ
          </Button>
        </Link>
      </div>
    </SurfaceCard>
  );
}
