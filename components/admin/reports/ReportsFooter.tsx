import { ReportFooterLink } from "@/types/admin-reports";

interface ReportsFooterProps {
  links: ReportFooterLink[];
}

export default function ReportsFooter({ links }: ReportsFooterProps) {
  return (
    <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-4 mt-12 border-t border-slate-200/20">
      <p className="font-body text-xs text-slate-500">
        © 2024 Smart Travel Management System. Đã đăng ký mọi quyền.
      </p>
      <div className="flex gap-8">
        {links.map((link) => (
          <a
            key={link.id}
            className="text-slate-500 text-xs hover:text-blue-700 transition-colors opacity-80 hover:opacity-100"
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
