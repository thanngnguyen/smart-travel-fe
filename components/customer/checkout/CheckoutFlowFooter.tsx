import Link from "next/link";

export default function CheckoutFlowFooter() {
  return (
    <footer className="py-10 bg-surface text-center">
      <p className="text-xs text-on-surface-variant font-medium">
        © 2026 STMS Travel Management System. Giao dịch được mã hóa AES-256.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        <Link
          className="text-[11px] font-bold text-on-surface-variant hover:text-primary transition-colors"
          href="#"
        >
          CHÍNH SÁCH BẢO MẬT
        </Link>
        <Link
          className="text-[11px] font-bold text-on-surface-variant hover:text-primary transition-colors"
          href="#"
        >
          KIỂM TOÁN BẢO MẬT
        </Link>
        <Link
          className="text-[11px] font-bold text-on-surface-variant hover:text-primary transition-colors"
          href="#"
        >
          QUY ĐỊNH HOÀN HỦY
        </Link>
      </div>
    </footer>
  );
}
