import { FooterLink } from "@/types/admin-create-tour";

interface CreateTourFooterProps {
  links: FooterLink[];
}

export default function CreateTourFooter({ links }: CreateTourFooterProps) {
  return (
    <footer className="w-full py-12 px-8 mt-auto flex flex-col md:flex-row justify-between items-center gap-4 border-t border-slate-200/20 dark:border-slate-800/20 bg-slate-50 dark:bg-slate-950">
      <p className="font-['Inter'] text-xs text-slate-500">
        © 2024 Smart Travel Management System. Đã đăng ký mọi quyền.
      </p>
      <div className="flex gap-6">
        {links.map((link) => (
          <a
            key={link.id}
            className="font-['Inter'] text-xs text-slate-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors opacity-80 hover:opacity-100"
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
