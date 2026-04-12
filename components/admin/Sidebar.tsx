"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Icon from "@/components/ui/Icon";

const NAV_ITEMS = [
  { path: "/admin", icon: "dashboard", label: "Dashboard" },
  { path: "/admin/tours", icon: "map", label: "Tour Management" },
  { path: "/admin/bookings", icon: "confirmation_number", label: "Bookings" },
  { path: "/admin/users", icon: "people", label: "User Management" },
  { path: "/admin/reports", icon: "monitoring", label: "Reports & Analytics" },
  { path: "/admin/insights", icon: "psychology", label: "AI Insights" },
  { path: "/admin/settings", icon: "settings", label: "System Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 border-r border-slate-200 bg-white h-screen sticky top-0 flex flex-col shadow-sm">
      <div className="p-6 border-b border-slate-200">
        <Link href="/admin" className="text-2xl font-black text-slate-950">
          STMS Admin
        </Link>
        <p className="mt-1 text-xs text-slate-500">Management Console</p>
      </div>

      <nav className="flex-1 p-5 flex flex-col gap-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.path || (item.path !== "/admin" && pathname.startsWith(item.path));
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-semibold transition ${
                isActive
                  ? "bg-slate-950 text-white shadow-lg"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Icon name={item.icon} filled={isActive} className="text-base" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-slate-200">
        <div className="flex items-center gap-3 rounded-3xl bg-slate-50 p-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-200 text-slate-950 font-bold">
            A
          </div>
          <div>
            <p className="text-sm font-bold text-slate-950">Admin User</p>
            <p className="text-xs text-slate-500">STMS Operations</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
