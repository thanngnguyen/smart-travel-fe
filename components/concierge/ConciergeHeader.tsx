import IconButton from "@/components/ui/IconButton";
import Link from "next/link";
import Image from "next/image";
import { ConciergeTopNavItem } from "@/types/concierge";

interface ConciergeHeaderProps {
  topNav: ConciergeTopNavItem[];
}

export default function ConciergeHeader({ topNav }: ConciergeHeaderProps) {
  return (
    <header className="flex justify-between items-center h-30 relative z-10">
      <div className="flex items-center gap-8">
        <h1 className="font-headline text-3xl font-extrabold tracking-tight text-primary">
          STMS
        </h1>
        <nav className="hidden md:flex items-center gap-6">
          {topNav.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={
                item.isActive
                  ? "text-sm font-bold text-primary border-b-2 border-primary pb-1"
                  : "text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex -space-x-3">
          <Image
            alt="Ảnh đại diện người dùng"
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=128&h=128&q=80"
            width={40}
            height={40}
          />
          <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-primary-fixed flex items-center justify-center text-primary font-bold text-xs">
            +3
          </div>
        </div>
        <IconButton
          icon="notifications"
          variant="elevated"
          size="md"
          radius="full"
        />
      </div>
    </header>
  );
}
