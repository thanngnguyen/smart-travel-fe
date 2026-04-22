"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State mới: Lưu trữ trạng thái đăng nhập
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  
  const pathname = usePathname();
  const router = useRouter();

  const navLinkClass = (isActive: boolean) =>
    isActive
      ? "text-blue-700 dark:text-blue-400 font-bold border-b-2 border-blue-700 dark:border-blue-400 pb-1 text-sm uppercase tracking-wider"
      : "text-slate-600 dark:text-slate-400 font-medium hover:text-blue-600 dark:hover:text-blue-300 transition-colors text-sm uppercase tracking-wider";

  // Hook theo dõi Scroll và Trạng thái Đăng nhập
  useEffect(() => {
    // Xử lý scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // KẾT NỐI VỚI LOCAL STORAGE ĐỂ KIỂM TRA ĐĂNG NHẬP
    // Vì Next.js chạy cả Server lẫn Client, ta phải đảm bảo mã này chỉ chạy trên Client
    // ĐỌC ĐÚNG TÊN KÉT SẮT TỪ LOCAL STORAGE
    const sessionString = localStorage.getItem("stms-auth-session-v1");
    
    if (sessionString) {
      try {
        // Mở gói JSON ra để lấy dữ liệu bên trong
        const sessionData = JSON.parse(sessionString);
        
        // Kiểm tra xem bên trong có token không
        if (sessionData && sessionData.token) {
          setIsLoggedIn(true);
          setUserRole(sessionData.backendRole || "USER");
        }
      } catch (error) {
        console.error("Không thể đọc dữ liệu đăng nhập:", error);
      }
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]); // Thêm pathname vào dependency để nó check lại khi chuyển trang

  // Hàm xử lý Đăng xuất
  const handleLogout = () => {
    // Xóa sạch két sắt
    localStorage.removeItem("stms-auth-session-v1");
    // Nếu có dùng hàm clear khác của auth-session, hãy gọi ở đây
    
    setIsLoggedIn(false);
    setUserRole(null);
    router.push("/login"); // Đá về trang đăng nhập
  };

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
            
            {/* KIỂM TRA TRẠNG THÁI Ở ĐÂY */}
            {isLoggedIn ? (
              // NẾU ĐÃ ĐĂNG NHẬP: Hiện Avatar và nút Đăng xuất
              <div className="flex items-center gap-4">
                <Link href="/profile" className="flex items-center gap-2 text-slate-700 font-medium hover:text-blue-600 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                    U
                  </div>
                  <span>Tài khoản</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-red-500 font-semibold hover:text-red-700 transition-colors text-sm flex items-center gap-1"
                >
                  <Icon name="logout" className="text-sm" /> Thoát
                </button>
              </div>
            ) : (
              // NẾU CHƯA ĐĂNG NHẬP: Hiện nút Đăng nhập như cũ
              <Link
                href="/login"
                className="text-slate-600 dark:text-slate-400 font-semibold hover:text-blue-600 transition-colors text-sm"
              >
                Đăng nhập
              </Link>
            )}

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
          <div className="flex flex-col px-6 py-6 gap-4">
            {/* ... (Các menu Mobile khác giữ nguyên) ... */}
            <Link href="/" className="font-bold text-lg text-blue-700 py-2 border-b border-slate-100 dark:border-slate-800">Điểm đến</Link>
            <Link href="/tours" className="font-medium text-lg text-slate-600 py-2 border-b border-slate-100 dark:border-slate-800">Tour</Link>
            
            <div className="flex flex-col gap-4 mt-4">
              
              {/* KIỂM TRA TRẠNG THÁI CHO BẢN MOBILE */}
              {isLoggedIn ? (
                 <>
                    <Link href="/profile" className="text-left font-semibold text-blue-600 text-lg flex items-center gap-2">
                       <Icon name="person" /> Tài khoản của tôi
                    </Link>
                    <button onClick={handleLogout} className="text-left font-semibold text-red-500 text-lg flex items-center gap-2">
                        <Icon name="logout" /> Đăng xuất
                    </button>
                 </>
              ) : (
                <Link href="/login" className="text-left font-semibold text-slate-600 text-lg">
                  Đăng nhập
                </Link>
              )}

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