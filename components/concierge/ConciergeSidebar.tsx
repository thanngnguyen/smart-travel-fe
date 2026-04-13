import Icon from "@/components/ui/Icon";
import Link from "next/link";
import { ConciergeNavItem } from "@/types/concierge";

interface ConciergeSidebarProps {
  navItems: ConciergeNavItem[];
}

export default function ConciergeSidebar({ navItems }: ConciergeSidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-50 dark:bg-slate-950 flex flex-col p-6 gap-4 z-50">
      <div className="mb-8">
        <Link href="/">
          <h1 className="text-xl font-extrabold text-blue-700 dark:text-blue-400">
            STMS
          </h1>
        </Link>
      </div>
      <div className="mb-10">
        <h2 className="font-headline text-lg font-bold text-on-surface">
          Chào mừng quay lại
        </h2>
        <p className="text-xs text-slate-500 font-medium">
          Hành trình tiếp theo đang chờ bạn
        </p>
      </div>
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={
              item.isActive
                ? "flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl font-semibold transition-all scale-105 duration-200"
                : "flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl group"
            }
          >
            <Icon name={item.icon} filled={Boolean(item.isActive)} />
            <span className="font-semibold">{item.label}</span>
          </Link>
        ))}
      </nav>
      <button className="mt-auto w-full py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-3xl font-bold shadow-lg hover:opacity-90 transition-all">
        Lên kế hoạch mới
      </button>
    </aside>
  );
}
