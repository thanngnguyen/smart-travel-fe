"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Icon from "@/components/ui/Icon";
import { GuideProfile } from "@/types/guide-portal";

const NAV_ITEMS = [
  { path: "/guide-portal", icon: "space_dashboard", label: "Bảng điều khiển" },
  { path: "/guide-portal/profile", icon: "person", label: "Hồ sơ cá nhân" },
  { path: "/guide-portal/activity", icon: "history", label: "Nhật ký hoạt động" },
];

interface GuideSidebarProps {
  profile: GuideProfile;
  unreadCount?: number;
  openIncidents?: number;
}

export default function GuideSidebar({
  profile,
  unreadCount = 0,
  openIncidents = 0,
}: GuideSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen sticky top-0 flex flex-col bg-surface-container-lowest/70 backdrop-blur-xl">
      {/* Brand */}
      <div className="px-7 pt-7 pb-5">
        <Link
          href="/guide-portal"
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-lg shadow-primary/20">
            <Icon name="explore" className="text-white text-lg" />
          </div>
          <div>
            <h1 className="text-lg font-extrabold tracking-tight text-on-surface">
              STMS Guide
            </h1>
            <p className="text-[10px] font-bold text-outline uppercase tracking-widest">
              Cổng hướng dẫn viên
            </p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 flex flex-col gap-1 mt-2">
        <p className="text-[10px] font-bold text-outline uppercase tracking-widest px-3 mb-2">
          Điều hướng
        </p>
        {NAV_ITEMS.map((item) => {
          const isActive =
            pathname === item.path ||
            (item.path !== "/guide-portal" && pathname.startsWith(item.path));

          const badge =
            item.path === "/guide-portal" && (unreadCount + openIncidents) > 0
              ? unreadCount + openIncidents
              : null;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-sm transition-all duration-200 relative ${
                isActive
                  ? "bg-gradient-to-r from-primary to-primary-container text-white shadow-lg shadow-primary/20"
                  : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
              }`}
            >
              <Icon name={item.icon} filled={isActive} />
              <span className="flex-1">{item.label}</span>
              {badge ? (
                <span className="min-w-5 h-5 px-1.5 flex items-center justify-center rounded-full bg-error text-white text-[10px] font-black">
                  {badge > 9 ? "9+" : badge}
                </span>
              ) : null}
            </Link>
          );
        })}
      </nav>

      {/* Workload indicator */}
      <div className="mx-4 mb-4 p-4 rounded-2xl bg-surface-container-low">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold text-outline uppercase tracking-widest">
            Khối lượng tháng
          </span>
          <span className="text-xs font-black text-on-surface">
            {profile.monthlyWorkloadDays}/{profile.monthlyWorkloadLimit}
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-primary-container transition-all duration-500"
            style={{
              width: `${Math.min(100, (profile.monthlyWorkloadDays / profile.monthlyWorkloadLimit) * 100)}%`,
            }}
          />
        </div>
        <p className="text-[11px] font-medium text-on-surface-variant mt-1.5">
          {profile.monthlyWorkloadLimit - profile.monthlyWorkloadDays} ngày còn lại
        </p>
      </div>

      {/* Profile footer */}
      <div className="px-5 py-5 bg-surface-container-low/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-fixed to-primary-fixed-dim flex items-center justify-center text-on-primary-fixed font-black text-sm shadow-sm">
            {profile.avatarInitials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-on-surface truncate">
              {profile.fullName}
            </p>
            <p className="text-[11px] font-medium text-on-surface-variant truncate">
              {profile.roleLabel}
            </p>
          </div>
          <div className="flex items-center gap-0.5 px-2 py-1 rounded-full bg-amber-100 text-amber-600">
            <Icon name="star" filled className="text-xs" />
            <span className="text-[11px] font-black">{profile.rating}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
