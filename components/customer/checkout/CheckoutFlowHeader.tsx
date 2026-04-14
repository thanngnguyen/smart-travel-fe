import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Link from "next/link";

export default function CheckoutFlowHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(25,28,30,0.06)] px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-tight text-primary">
            STMS
          </span>
          <div className="h-6 w-px bg-outline-variant/30"></div>
          <span className="font-headline font-semibold text-on-surface">
            Thanh toán bảo mật
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3 md:gap-6">
          <div className="flex items-center gap-2 text-on-surface-variant text-sm font-medium">
            <Icon name="verified_user" className="text-[20px]" />
            <span>Chuẩn bảo mật PCI-DSS</span>
          </div>

          <Link href="/tours">
            <Button variant="ghost" size="sm" className="text-secondary">
              <Icon name="close" className="text-[18px] mr-1" />
              Hủy đặt chỗ
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
