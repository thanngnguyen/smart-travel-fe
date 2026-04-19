import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 w-full py-12 px-8 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <span className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4 block">
            STMS
          </span>
          <p className="text-slate-500 text-sm leading-relaxed">
            Nâng tầm du lịch toàn cầu bằng quản lý thông minh và trải nghiệm
            liền mạch.
          </p>
        </div>
        <div>
          <h4 className="font-headline font-bold text-on-surface mb-4">
            Liên kết nhanh
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                className="text-slate-500 hover:text-blue-500 transition-opacity"
                href="/"
              >
                Điểm đến
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-500 hover:text-blue-500 transition-opacity"
                href="/tours"
              >
                Tour
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-500 hover:text-blue-500 transition-opacity"
                href="/deals"
              >
                Ưu đãi
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-500 hover:text-blue-500 transition-opacity"
                href="/tour-chat"
              >
                Nhóm chat tour
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-500 hover:text-blue-500 transition-opacity"
                href="/concierge"
              >
                Hướng dẫn AI
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-bold text-on-surface mb-4">
            Pháp lý
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                className="text-slate-500 hover:text-blue-500 transition-opacity text-sm"
                href="#"
              >
                Chính sách bảo mật
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-500 hover:text-blue-500 transition-opacity text-sm"
                href="#"
              >
                Điều khoản dịch vụ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-bold text-on-surface mb-4">
            Bản tin
          </h4>
          <div className="flex gap-2">
            <input
              className="bg-white border-none rounded-xl text-sm w-full focus:ring-2 focus:ring-primary px-4 py-2"
              placeholder="Địa chỉ email"
              type="email"
            />
            <button className="bg-primary text-white p-2 rounded-xl flex items-center justify-center min-w-[40px]">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Hệ Thống Quản Lý Du Lịch Thông Minh. Bảo
          lưu mọi quyền.
        </p>
      </div>
    </footer>
  );
}
