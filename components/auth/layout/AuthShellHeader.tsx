import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function AuthShellHeader() {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-8 h-20 max-w-full mx-auto bg-surface-container-lowest/80 backdrop-blur-xl">
      <Link
        href="/"
        className="text-2xl font-black tracking-tighter text-primary"
      >
        STMS
      </Link>
      <div className="hidden md:flex gap-8 items-center">
        <span className="text-xs uppercase tracking-widest font-bold text-outline">
          Bảo mật đã xác minh
        </span>
        <Icon name="lock" className="text-primary" />
      </div>
    </header>
  );
}
