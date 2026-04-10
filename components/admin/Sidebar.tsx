"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Icon from "@/components/ui/Icon";

const NAV_ITEMS = [
  { path: "/admin", icon: "dashboard", label: "Dashboard" },
  { path: "/admin/tours", icon: "map", label: "Tour Management" },
  { path: "/admin/bookings", icon: "confirmation_number", label: "Bookings" },
  { path: "/admin/reports", icon: "monitoring", label: "Reports & Analytics" },
  { path: "/admin/insights", icon: "psychology", label: "AI Insights" },
  { path: "/admin/settings", icon: "settings", label: "System Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-screen sticky top-0 flex flex-col shadow-sm">
      <div className="p-6 border-b border-slate-200 dark:border-slate-800">
        <Link href="/admin" className="text-2xl font-black text-blue-700 dark:text-blue-400">
          STMS Admin
        </Link>
        <p className="text-xs text-slate-500 font-medium mt-1">Management Console</p>
      </div>

      <nav className="flex-1 p-4 flex flex-col gap-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.path || (item.path !== "/admin" && pathname.startsWith(item.path));
          
          return (
            <Link 
              key={item.path} 
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                isActive 
                  ? "bg-primary text-white shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:bg-surface-container-low"
              }`}
            >
              <Icon name={item.icon} filled={isActive} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3 cursor-pointer group">
           <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-primary font-bold">
             A
           </div>
           <div>
             <p className="text-sm font-bold text-on-surface">Admin User</p>
             <p className="text-xs text-on-surface-variant group-hover:text-primary transition-colors">Log out</p>
           </div>
        </div>
      </div>
    </aside>
  );
}
