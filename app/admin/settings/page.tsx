import React from "react";
import Link from "next/link";

export default function AdminSettingsPage() {
  return (
    <div className="bg-surface min-h-screen">
      <main className="min-h-screen p-8 lg:p-12">
        <header className="mb-12">
          <h2 className="text-4xl font-headline font-black text-on-surface tracking-tight mb-2">
            Cấu hình hệ thống
          </h2>
          <p className="text-on-surface-variant font-body">
            Quản lý tham số STMS toàn cục, khóa bảo mật và ngưỡng trí tuệ tự
            động.
          </p>
        </header>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          <section className="xl:col-span-8 flex flex-col gap-8">
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0_20px_40px_rgba(25,28,30,0.06)]">
              <div className="flex items-center gap-3 mb-8">
                <span
                  className="material-symbols-outlined text-primary text-3xl"
                  data-icon="business"
                >
                  business
                </span>
                <h3 className="text-xl font-headline font-bold">
                  Thông tin doanh nghiệp
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-outline">
                    Tên tổ chức
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-xl p-4 text-on-surface font-body focus:ring-2 focus:ring-primary-container transition-all"
                    type="text"
                    defaultValue="Smart Travel Management Systems Ltd."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-outline">
                    Email liên hệ
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-xl p-4 text-on-surface font-body focus:ring-2 focus:ring-primary-container transition-all"
                    type="email"
                    defaultValue="admin@stms-travel.com"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-outline">
                    Địa chỉ trụ sở chính toàn cầu
                  </label>
                  <textarea
                    className="w-full bg-surface-container-low border-none rounded-xl p-4 text-on-surface font-body focus:ring-2 focus:ring-primary-container transition-all"
                    rows={2}
                    defaultValue="124 Luxury Way, Floor 4, Zurich, Switzerland"
                  />
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0_20px_40px_rgba(25,28,30,0.06)]">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-primary text-3xl"
                    data-icon="vpn_key"
                  >
                    vpn_key
                  </span>
                  <h3 className="text-xl font-headline font-bold">
                    API cổng thanh toán
                  </h3>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-tighter">
                  Đã kết nối
                </span>
              </div>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 bg-surface-container-low p-4 rounded-xl">
                  <div className="flex-1">
                    <p className="text-xs font-bold text-outline uppercase mb-1">
                      Khóa Stripe môi trường thật
                    </p>
                    <code className="text-sm font-mono text-on-surface">
                      pk_live_51Mxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </code>
                  </div>
                  <button className="px-4 py-2 bg-surface-container-highest text-on-surface font-bold text-xs rounded-lg hover:bg-outline-variant transition-colors">
                    Xoay vòng khóa
                  </button>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-4 bg-surface-container-low p-4 rounded-xl">
                  <div className="flex-1">
                    <p className="text-xs font-bold text-outline uppercase mb-1">
                      Bí mật webhook
                    </p>
                    <div className="flex items-center gap-2">
                      <code className="text-sm font-mono text-on-surface">
                        whsec_******************************
                      </code>
                      <span
                        className="material-symbols-outlined text-outline cursor-pointer"
                        data-icon="visibility_off"
                      >
                        visibility_off
                      </span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-surface-container-highest text-on-surface font-bold text-xs rounded-lg hover:bg-outline-variant transition-colors">
                    Kiểm tra endpoint
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0_20px_40px_rgba(25,28,30,0.06)]">
              <div className="flex items-center gap-3 mb-8">
                <span
                  className="material-symbols-outlined text-primary text-3xl"
                  data-icon="shield_person"
                >
                  shield_person
                </span>
                <h3 className="text-xl font-headline font-bold">
                  Quản lý vai trò người dùng (RBAC)
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-surface-container">
                      <th className="pb-4 text-[10px] font-bold uppercase tracking-widest text-outline">
                        Tên vai trò
                      </th>
                      <th className="pb-4 text-[10px] font-bold uppercase tracking-widest text-outline">
                        Phạm vi
                      </th>
                      <th className="pb-4 text-[10px] font-bold uppercase tracking-widest text-outline">
                        Người dùng
                      </th>
                      <th className="pb-4 text-right"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-low">
                    <tr className="group hover:bg-surface-container-low transition-colors">
                      <td className="py-4 font-bold text-on-surface">
                        Quản trị viên cấp cao
                      </td>
                      <td className="py-4 text-sm text-outline">
                        Toàn quyền hệ thống
                      </td>
                      <td className="py-4 text-sm text-outline">2</td>
                      <td className="py-4 text-right">
                        <span
                          className="material-symbols-outlined text-outline cursor-pointer group-hover:text-primary"
                          data-icon="edit"
                        >
                          edit
                        </span>
                      </td>
                    </tr>
                    <tr className="group hover:bg-surface-container-low transition-colors">
                      <td className="py-4 font-bold text-on-surface">
                        Trưởng nhóm Concierge
                      </td>
                      <td className="py-4 text-sm text-outline">
                        Đặt chỗ &amp; tồn kho
                      </td>
                      <td className="py-4 text-sm text-outline">14</td>
                      <td className="py-4 text-right">
                        <span
                          className="material-symbols-outlined text-outline cursor-pointer group-hover:text-primary"
                          data-icon="edit"
                        >
                          edit
                        </span>
                      </td>
                    </tr>
                    <tr className="group hover:bg-surface-container-low transition-colors">
                      <td className="py-4 font-bold text-on-surface">
                        Kiểm toán tài chính
                      </td>
                      <td className="py-4 text-sm text-outline">
                        Thanh toán &amp; báo cáo
                      </td>
                      <td className="py-4 text-sm text-outline">4</td>
                      <td className="py-4 text-right">
                        <span
                          className="material-symbols-outlined text-outline cursor-pointer group-hover:text-primary"
                          data-icon="edit"
                        >
                          edit
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <aside className="xl:col-span-4 flex flex-col gap-8">
            <div className="bg-tertiary text-white rounded-2xl p-8 shadow-[0_20px_40px_rgba(123,38,0,0.15)] relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="material-symbols-outlined text-on-tertiary-container"
                    data-icon="auto_awesome"
                  >
                    auto_awesome
                  </span>
                  <h3 className="text-xl font-headline font-extrabold">
                    Độ nhạy cảnh báo đỏ của AI
                  </h3>
                </div>
                <p className="text-sm opacity-80 mb-8 leading-relaxed">
                  Điều chỉnh ngưỡng cho bộ máy phát hiện bất thường du lịch. Độ
                  nhạy cao hơn sẽ tăng cảnh báo "Cờ đỏ" cho xung đột lịch trình
                  và mẫu đặt chỗ rủi ro cao.
                </p>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex justify-between text-xs font-bold uppercase">
                      <span>Mức ngưỡng</span>
                      <span className="text-on-tertiary-container">
                        82% (Cao)
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/20 rounded-full relative">
                      <div className="absolute top-0 left-0 h-full w-[82%] bg-on-tertiary-container rounded-full"></div>
                      <div className="absolute top-1/2 left-[82%] -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg cursor-pointer"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-[10px] font-bold uppercase opacity-60 mb-1">
                        Cảnh báo rủi ro
                      </p>
                      <p className="text-lg font-headline font-bold">
                        Đang bật
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-[10px] font-bold uppercase opacity-60 mb-1">
                        Trì hoãn tự động
                      </p>
                      <p className="text-lg font-headline font-bold">Đệm 12h</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            </div>
            <div className="bg-surface-container-high rounded-2xl p-8">
              <h4 className="text-sm font-headline font-bold mb-4 flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="history"
                >
                  history
                </span>
                Hoạt động gần đây
              </h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0"></div>
                  <div>
                    <p className="text-xs font-bold">Admin (Sarah J.)</p>
                    <p className="text-[11px] text-outline">
                      Đã cập nhật khóa bí mật Stripe API môi trường thật
                    </p>
                    <p className="text-[10px] text-outline-variant mt-1">
                      2 giờ trước
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-tertiary flex-shrink-0"></div>
                  <div>
                    <p className="text-xs font-bold">AI hệ thống</p>
                    <p className="text-[11px] text-outline">
                      Tự hiệu chỉnh ngưỡng do lưu lượng cao
                    </p>
                    <p className="text-[10px] text-outline-variant mt-1">
                      6 giờ trước
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0"></div>
                  <div>
                    <p className="text-xs font-bold">
                      Trưởng bộ phận kiểm toán
                    </p>
                    <p className="text-[11px] text-outline">
                      Đã chỉnh phạm vi vai trò cho 'Kiểm toán tài chính'
                    </p>
                    <p className="text-[10px] text-outline-variant mt-1">
                      Hôm qua
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-2xl font-headline font-bold shadow-lg hover:shadow-xl transition-all scale-95 active:scale-90">
              Lưu cấu hình toàn cục
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
}
