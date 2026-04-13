import React from "react";
import Link from "next/link";

export default function AdminCreateTourPage() {
  return (
    <div className="bg-surface min-h-screen">
      <main className="flex-1 flex flex-col min-h-screen bg-surface">
        {/*  Top Header Area  */}
        <header className="flex justify-between items-center w-full px-8 py-6 sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
          <div className="flex flex-col">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Tạo tour gốc
            </h2>
            <nav className="flex text-xs text-outline font-medium gap-2 items-center">
              <span>Tour</span>
              <span className="material-symbols-outlined text-[10px]">
                arrow_forward_ios
              </span>
              <span className="text-primary">Tour gốc mới</span>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-5 py-2.5 rounded-xl border border-outline-variant/20 text-on-surface font-semibold text-sm hover:bg-surface-container-low transition-colors">
              Hủy bản nháp
            </button>
            <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-primary-container text-white font-bold text-sm shadow-md hover:shadow-lg active:scale-95 transition-all">
              Xuất bản tour
            </button>
          </div>
        </header>
        {/*  Form Layout: Bento Style  */}
        <div className="p-8 grid grid-cols-12 gap-6">
          {/*  Column 1: Core Details  */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            {/*  Basic Information Section  */}
            <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_20px_40px_rgba(25,28,30,0.06)] space-y-6">
              <div className="flex items-center gap-3 border-b border-outline-variant/10 pb-4">
                <span className="material-symbols-outlined text-primary">
                  info
                </span>
                <h3 className="text-lg font-bold text-on-surface">
                  Thông tin chung
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-outline uppercase tracking-wider">
                    Tiêu đề tour
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline-variant transition-all"
                    placeholder="ví dụ: Kỳ nghỉ cao cấp bờ biển Amalfi"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-outline uppercase tracking-wider">
                    Mô tả ngắn
                  </label>
                  <textarea
                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline-variant transition-all"
                    placeholder="Tóm tắt trải nghiệm trong 2 câu..."
                    rows={3}
                  ></textarea>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-outline uppercase tracking-wider">
                      Giá cơ bản ($)
                    </label>
                    <input
                      className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 text-on-surface transition-all"
                      placeholder="2,499"
                      type="number"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-outline uppercase tracking-wider">
                      Thời lượng (ngày)
                    </label>
                    <input
                      className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 text-on-surface transition-all"
                      placeholder="7"
                      type="number"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-outline uppercase tracking-wider">
                      Sức chứa tối đa
                    </label>
                    <input
                      className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 text-on-surface transition-all"
                      placeholder="12"
                      type="number"
                    />
                  </div>
                </div>
              </div>
            </section>
            {/*  Itinerary Section (Timeline Tracker style)  */}
            <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_20px_40px_rgba(25,28,30,0.06)]">
              <div className="flex justify-between items-center border-b border-outline-variant/10 pb-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    route
                  </span>
                  <h3 className="text-lg font-bold text-on-surface">
                    Lịch trình được tuyển chọn
                  </h3>
                </div>
                <button className="flex items-center gap-2 text-primary font-bold text-xs hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-sm">
                    add_circle
                  </span>{" "}
                  Thêm ngày
                </button>
              </div>
              <div className="relative pl-8 space-y-12">
                {/*  Timeline Line  */}
                <div className="absolute left-[15px] top-4 bottom-4 w-1 bg-primary-fixed rounded-full"></div>
                {/*  Day 1  */}
                <div className="relative">
                  <div className="absolute -left-[24px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-surface-container-lowest ring-4 ring-primary/5"></div>
                  <div className="bg-surface p-6 rounded-2xl border border-outline-variant/10 shadow-sm space-y-4">
                    <div className="flex justify-between">
                      <h4 className="font-bold text-on-surface">
                        Ngày 1: Đến nơi &amp; Tiệc chào mừng
                      </h4>
                      <span className="material-symbols-outlined text-outline cursor-pointer hover:text-error transition-colors">
                        delete
                      </span>
                    </div>
                    <textarea
                      className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm text-on-surface-variant italic"
                      placeholder="Mô tả hoạt động..."
                      rows={2}
                    ></textarea>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold text-outline uppercase">
                        Bao gồm lưu trú
                      </span>
                      <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold text-outline uppercase">
                        Đón sân bay
                      </span>
                    </div>
                  </div>
                </div>
                {/*  Day 2  */}
                <div className="relative">
                  <div className="absolute -left-[24px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-surface-container-lowest ring-4 ring-primary/5"></div>
                  <div className="bg-surface p-6 rounded-2xl border border-outline-variant/10 shadow-sm space-y-4">
                    <div className="flex justify-between">
                      <h4 className="font-bold text-on-surface">
                        Ngày 2: Khám phá ven biển
                      </h4>
                      <span className="material-symbols-outlined text-outline cursor-pointer hover:text-error transition-colors">
                        delete
                      </span>
                    </div>
                    <textarea
                      className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm text-on-surface-variant italic"
                      placeholder="Du ngoạn du thuyền riêng dọc vách đá Positano..."
                      rows={2}
                    ></textarea>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold text-outline uppercase">
                        Bao gồm hoạt động
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/*  Column 2: Media & Automation  */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {/*  Media Upload  */}
            <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_20px_40px_rgba(25,28,30,0.06)] space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  image
                </span>
                <h3 className="text-lg font-bold text-on-surface">
                  Thư viện media
                </h3>
              </div>
              <div className="aspect-video bg-surface-container-low rounded-xl border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-4xl text-outline-variant group-hover:text-primary transition-colors">
                  cloud_upload
                </span>
                <p className="text-xs font-bold text-outline uppercase">
                  Tải ảnh nổi bật
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="aspect-square bg-surface-container rounded-lg overflow-hidden relative group">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="vibrant blue water of the Mediterranean coast with colorful cliffside villas under bright summer sun"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLv5MFhRd20XMxiexEkQTGKrz0jMNQHH7JB23Uj_B-qpedWP_bAqvx-PKgOKBJq90VVgdm2Cpkq8eIIipjFwu2QQpFIbSmNtmPQopzWwEQG_LguagfzSZ0CgWBipwxei314H6Gke33-Qywmo6CT9SRHucW8_p5dWmToCo2eGtH-kJfgd_yubK2ciPuUV4xCpgxxx72I8nJSU63KNCH3K1p-j4gzGp1kCHLRlK8MHP2N-cdB7VT1WAcCSo57yANxhVzL_z4tXvQ0bU"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="material-symbols-outlined text-white">
                      delete
                    </span>
                  </div>
                </div>
                <div className="aspect-square bg-surface-container rounded-lg overflow-hidden relative group">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="narrow stone alleyway in a classic Italian village with laundry hanging between balconies and warm afternoon shadows"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHqt2lLdeZ_4TDTeqOe4ROKrEjrXP2wl-MRefdwdulvRGjp2lSxL_tvjptQjWNWstir-ciKTZdOBtccnxC_FV2GV2HNOlXk54ZjR9GCfs3HAbq4-tiOeBU_YOdd_EDu13GfGVY7z8sLvujeR9tBpWw2NANLYPObTR01OKATmOtnD8R2xl2XdgIJL8Od-xeMUYulm3TslNBgQkTQv8zBpwyLzgMJQK-a_fuBdR9VGHW0HJ8DgxNw4TDIXCoac37sjld63tBu1zP3uw"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="material-symbols-outlined text-white">
                      delete
                    </span>
                  </div>
                </div>
                <div className="aspect-square bg-surface-container-low rounded-lg flex items-center justify-center border-2 border-dashed border-outline-variant/20">
                  <span className="material-symbols-outlined text-outline-variant">
                    add
                  </span>
                </div>
              </div>
            </section>
            {/*  Trình tạo lịch khởi hành (Specialized Section)  */}
            <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  calendar_month
                </span>
                <h3 className="text-lg font-bold text-on-surface">
                  Trình tạo lịch khởi hành
                </h3>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Tự động tạo các lịch khởi hành lặp lại cho Tour gốc này theo
                lịch mùa vụ.
              </p>
              <div className="space-y-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-extrabold text-primary uppercase tracking-widest">
                    Tần suất
                  </label>
                  <select className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-2.5 text-sm font-semibold text-on-surface focus:ring-2 focus:ring-primary/20">
                    <option>Hàng tuần (Thứ bảy)</option>
                    <option>Hai tuần một lần</option>
                    <option>Hàng tháng (Thứ hai tuần 1)</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-extrabold text-primary uppercase tracking-widest">
                      Tháng bắt đầu
                    </label>
                    <input
                      className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-2 text-sm font-semibold text-on-surface"
                      type="month"
                      defaultValue="2024-05"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-extrabold text-primary uppercase tracking-widest">
                      Số lần lặp
                    </label>
                    <input
                      className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-2 text-sm font-semibold text-on-surface"
                      type="number"
                      defaultValue="12"
                    />
                  </div>
                </div>
              </div>
              <div className="p-4 bg-tertiary-container/10 border border-tertiary-container/20 rounded-xl">
                <div className="flex gap-2 items-start">
                  <span className="material-symbols-outlined text-tertiary-container text-sm">
                    info
                  </span>
                  <p className="text-[10px] font-medium text-tertiary">
                    Hệ thống sẽ tạo 12 ngày tour riêng lẻ bắt đầu từ 04/05/2024.
                    Giá và sức chứa có thể chỉnh theo từng lịch khởi hành sau
                    đó.
                  </p>
                </div>
              </div>
              <button className="w-full py-3 rounded-xl bg-surface-container-lowest text-primary border border-primary/20 font-bold text-sm hover:bg-primary hover:text-white transition-all shadow-sm">
                Tạo lịch hàng loạt
              </button>
            </section>
            {/*  AI Assistant Floating Advice  */}
            <div className="bg-inverse-surface p-6 rounded-2xl shadow-xl space-y-3">
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-primary-fixed-dim"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  psychology
                </span>
                <span className="text-xs font-black text-white tracking-widest uppercase">
                  Gợi ý Concierge
                </span>
              </div>
              <p className="text-xs text-inverse-on-surface leading-normal">
                &quot;Các Tour gốc có thời lượng 7 ngày và mức giá dưới $2,500
                hiện có tỷ lệ chuyển đổi 84% tại khu vực Amalfi. Hãy cân nhắc
                thêm thẻ &apos;Thử rượu vang&apos; để tăng hiển thị.&quot;
              </p>
              <button className="text-[10px] font-bold text-primary-fixed-dim hover:underline transition-all">
                Áp dụng đề xuất
              </button>
            </div>
          </div>
        </div>
        {/*  Footer (Authority Source: JSON)  */}
        <footer className="w-full py-12 px-8 mt-auto flex flex-col md:flex-row justify-between items-center gap-4 border-t border-slate-200/20 dark:border-slate-800/20 bg-slate-50 dark:bg-slate-950">
          <p className="font-['Inter'] text-xs text-slate-500">
            © 2024 Smart Travel Management System. Đã đăng ký mọi quyền.
          </p>
          <div className="flex gap-6">
            <a
              className="font-['Inter'] text-xs text-slate-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              Chính sách bảo mật
            </a>
            <a
              className="font-['Inter'] text-xs text-slate-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              Điều khoản dịch vụ
            </a>
            <a
              className="font-['Inter'] text-xs text-slate-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              Trung tâm hỗ trợ
            </a>
            <a
              className="font-['Inter'] text-xs text-slate-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              Liên hệ
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
