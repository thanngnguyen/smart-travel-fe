import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import SurfaceCard from "@/components/ui/SurfaceCard";
import Link from "next/link";

export default function CheckoutSuccessStep() {
  return (
    <SurfaceCard
      tone="white"
      border="subtle"
      shadow="soft"
      radius="3xl"
      className="p-12 text-center animate-in fade-in duration-500"
    >
      <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 shadow-inner shadow-green-200">
        <Icon name="check_circle" className="text-5xl" filled />
      </div>
      <h2 className="text-3xl font-black text-on-surface mb-4">
        Đặt chỗ thành công!
      </h2>
      <p className="text-lg text-on-surface-variant mb-8 max-w-md mx-auto">
        Chuyến đi cao cấp của bạn đã được xác nhận. Trợ lý AI sẽ sớm liên hệ để
        tối ưu lịch trình cho bạn.
      </p>
      <p className="inline-block px-4 py-2 bg-surface-container text-on-surface rounded-xl font-mono border border-outline-variant/30 text-sm mb-8">
        Mã đặt chỗ: <span className="font-bold">#STMS-84291-A</span>
      </p>
      <div>
        <Link href="/">
          <Button variant="primary" size="lg">
            Quay về trang chủ
          </Button>
        </Link>
      </div>
    </SurfaceCard>
  );
}
