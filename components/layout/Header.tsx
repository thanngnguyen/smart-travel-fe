"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinkClass = (isActive: boolean) =>
    isActive
      ? "text-blue-700 dark:text-blue-400 font-bold border-b-2 border-blue-700 dark:border-blue-400 pb-1 text-sm uppercase tracking-wider"
      : "text-slate-600 dark:text-slate-400 font-medium hover:text-blue-600 dark:hover:text-blue-300 transition-colors text-sm uppercase tracking-wider";

  // Hook để theo dõi trạng thái cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl shadow-[0_20px_40px_rgba(25,28,30,0.06)] py-2"
          : "bg-surface/50 dark:bg-slate-900/50 backdrop-blur-md py-4"
      }`}
    >
      <nav className="flex justify-between items-center w-full px-4 md:px-8 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-10">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-blue-700 dark:text-blue-400"
            >
              STMS
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <Link className={navLinkClass(pathname === "/")} href="/">
                Điểm đến
              </Link>
              <Link
                className={navLinkClass(pathname.startsWith("/tours"))}
                href="/tours"
              >
                Tour
              </Link>
              <Link
                className={navLinkClass(pathname.startsWith("/deals"))}
                href="/deals"
              >
                Ưu đãi
              </Link>
              <Link
                className={navLinkClass(pathname.startsWith("/tour-chat"))}
                href="/tour-chat"
              >
                Nhóm chat
              </Link>
              <Link
                className={navLinkClass(pathname.startsWith("/guide-portal"))}
                href="/guide-portal"
              >
                Hướng dẫn viên
              </Link>
              <Link
                className="flex items-center gap-1.5 text-primary dark:text-blue-400 font-bold hover:opacity-80 transition-opacity text-sm uppercase tracking-wider bg-primary/5 px-3 py-1 rounded-full"
                href="/concierge"
              >
                <Icon name="smart_toy" className="text-lg" />
                Trợ lý AI
              </Link>
            </div>
          </div>

          {/* Desktop Auth/Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/login"
              className="text-slate-600 dark:text-slate-400 font-semibold hover:text-blue-600 transition-colors text-sm"
            >
              Đăng nhập
            </Link>
            <Link href="/tours">
              <Button size="md" variant="primary">
                Đặt ngay
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icon
              name={isMobileMenuOpen ? "close" : "menu"}
              className="text-3xl"
            />
          </button>
        </div>
      </nav>
      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-xl border-t border-slate-100 dark:border-slate-800">
          {" "}
          <div className="flex flex-col px-6 py-6 gap-4">
            <Link
              href="/"
              className="font-bold text-lg text-blue-700 py-2 border-b border-slate-100 dark:border-slate-800"
            >
              Điểm đến
            </Link>
            <Link
              href="/tours"
              className="font-medium text-lg text-slate-600 py-2 border-b border-slate-100 dark:border-slate-800"
            >
              Tour
            </Link>
            <Link
              href="/deals"
              className="font-medium text-lg text-slate-600 py-2 border-b border-slate-100 dark:border-slate-800"
            >
              Ưu đãi
            </Link>
            <Link
              href="/profile"
              className="font-medium text-lg text-slate-600 py-2 border-b border-slate-100 dark:border-slate-800"
            >
              Chuyến đi của tôi
            </Link>
            <Link
              href="/tour-chat"
              className="font-medium text-lg text-slate-600 py-2 border-b border-slate-100 dark:border-slate-800"
            >
              Nhóm chat tour
            </Link>
            <Link
              href="/guide-portal"
              className="font-medium text-lg text-slate-600 py-2 border-b border-slate-100 dark:border-slate-800"
            >
              Hướng dẫn viên
            </Link>
            <Link
              href="/concierge"
              className="flex items-center gap-2 font-bold text-lg text-primary py-2 border-b border-slate-100 dark:border-slate-800"
            >
              <Icon name="smart_toy" /> Trợ lý AI
            </Link>

            <div className="flex flex-col gap-4 mt-4">
              <Link
                href="/login"
                className="text-left font-semibold text-slate-600 text-lg"
              >
                Đăng nhập
              </Link>
              <Link href="/tours" className="w-full inline-block">
                <Button className="w-full">Đặt ngay</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
