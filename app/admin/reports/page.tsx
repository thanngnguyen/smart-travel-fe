import React from "react";
import Link from "next/link";

export default function AdminReportsPage() {
  return (
    <div className="bg-surface min-h-screen">
      <main className="p-8 min-h-screen">
        <header className="flex justify-between items-end mb-12">
          <div className="space-y-1">
            <h2 className="text-4xl font-headline font-extrabold tracking-tight text-slate-900">
              Tài chính &amp; vận hành
            </h2>
            <p className="text-slate-500 font-medium">
              Chỉ số hiệu suất thời gian thực cho Quý 4 năm 2024
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-surface-container-lowest text-slate-900 font-bold rounded-xl shadow-sm hover:bg-surface-container transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">
                calendar_today
              </span>
              30 ngày gần nhất
            </button>
            <button className="px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">
                download
              </span>
              Xuất PDF
            </button>
          </div>
        </header>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8 bg-surface-container-lowest rounded-2xl p-8 shadow-[0_20px_40px_rgba(25,28,30,0.06)] flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-headline font-bold text-slate-900">
                  Doanh thu theo danh mục tour
                </h3>
                <p className="text-sm text-slate-500">
                  Hiệu suất toàn cầu trên 5 điểm đến cao cấp hàng đầu
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span className="text-xs font-medium text-slate-600">
                    Hiện tại
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-secondary-container"></span>
                  <span className="text-xs font-medium text-slate-600">
                    Trước đó
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-between h-64 px-4">
              <div className="flex flex-col items-center gap-3 w-16 group">
                <div className="w-full flex items-end gap-1 h-full">
                  <div className="w-1/2 bg-gradient-to-b from-primary to-primary-container rounded-t-lg h-[85%] group-hover:opacity-90 transition-opacity"></div>
                  <div className="w-1/2 bg-surface-container-high rounded-t-lg h-[40%]"></div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  Châu Âu
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 w-16 group">
                <div className="w-full flex items-end gap-1 h-full">
                  <div className="w-1/2 bg-gradient-to-b from-primary to-primary-container rounded-t-lg h-[65%] group-hover:opacity-90 transition-opacity"></div>
                  <div className="w-1/2 bg-surface-container-high rounded-t-lg h-[55%]"></div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  Châu Á
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 w-16 group">
                <div className="w-full flex items-end gap-1 h-full">
                  <div className="w-1/2 bg-gradient-to-b from-primary to-primary-container rounded-t-lg h-[95%] group-hover:opacity-90 transition-opacity"></div>
                  <div className="w-1/2 bg-surface-container-high rounded-t-lg h-[70%]"></div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  Châu Mỹ
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 w-16 group">
                <div className="w-full flex items-end gap-1 h-full">
                  <div className="w-1/2 bg-gradient-to-b from-primary to-primary-container rounded-t-lg h-[45%] group-hover:opacity-90 transition-opacity"></div>
                  <div className="w-1/2 bg-surface-container-high rounded-t-lg h-[35%]"></div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  Châu Phi
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 w-16 group">
                <div className="w-full flex items-end gap-1 h-full">
                  <div className="w-1/2 bg-gradient-to-b from-primary to-primary-container rounded-t-lg h-[75%] group-hover:opacity-90 transition-opacity"></div>
                  <div className="w-1/2 bg-surface-container-high rounded-t-lg h-[60%]"></div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  Châu Đại Dương
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 bg-primary text-white rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative">
            <div className="z-10">
              <h3 className="text-lg font-headline font-bold text-on-primary-container">
                Tổng doanh thu
              </h3>
              <p className="text-4xl font-headline font-extrabold mt-2 tracking-tighter">
                $4,285,190
              </p>
              <div className="mt-4 inline-flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full text-xs font-bold">
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
                +12.4% so với cùng kỳ năm trước
              </div>
            </div>
            <div className="z-10 mt-12 grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-[10px] text-on-primary-container uppercase font-bold tracking-widest">
                  Giá trị đặt chỗ TB
                </p>
                <p className="text-xl font-headline font-bold">$12,405</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-on-primary-container uppercase font-bold tracking-widest">
                  Biên lợi nhuận
                </p>
                <p className="text-xl font-headline font-bold">28.4%</p>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -top-12 -right-4 w-32 h-32 bg-primary-container/40 rounded-full blur-2xl"></div>
          </div>
          <div className="col-span-12 md:col-span-4 bg-surface-container-lowest rounded-2xl p-8 flex flex-col gap-6">
            <h3 className="text-lg font-headline font-bold text-slate-900">
              Tỷ lệ chuyển đổi đặt chỗ
            </h3>
            <div className="relative flex items-center justify-center py-4">
              <svg className="w-40 h-40 transform -rotate-90">
                <circle
                  className="text-surface-container-low"
                  cx="80"
                  cy="80"
                  fill="transparent"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="12"
                ></circle>
                <circle
                  className="text-primary"
                  cx="80"
                  cy="80"
                  fill="transparent"
                  r="70"
                  stroke="currentColor"
                  strokeDasharray="440"
                  strokeDashoffset="140"
                  strokeWidth="12"
                ></circle>
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-3xl font-headline font-extrabold text-slate-900">
                  68%
                </span>
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                  Từ khách tiềm năng thành tour
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Tìm kiếm trực tiếp</span>
                <span className="font-bold text-slate-900">72%</span>
              </div>
              <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[72%]"></div>
              </div>
              <div className="flex justify-between items-center text-sm pt-2">
                <span className="text-slate-500">Giới thiệu từ Concierge</span>
                <span className="font-bold text-slate-900">45%</span>
              </div>
              <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                <div className="bg-secondary-container h-full w-[45%]"></div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 bg-surface-container-lowest rounded-2xl p-8">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-lg font-headline font-bold text-slate-900">
                  Mức độ sử dụng hướng dẫn viên
                </h3>
                <p className="text-sm text-slate-500">Hiệu quả vận hành</p>
              </div>
              <span className="px-2 py-1 bg-tertiary-container/10 text-tertiary font-bold text-[10px] rounded uppercase">
                Nhu cầu đỉnh
              </span>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <img
                  className="w-12 h-12 rounded-xl object-cover bg-slate-200"
                  data-alt="Portrait of a smiling professional tour guide in a blue uniform with a scenic mountain background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiLgk9ET5zzJv8y37VI6RmCqN93ZZjQI3b1xOS1VvI9anWK4Ia1VcT-h4DnBtpJzZhoKbXLtWNT-_zhYu7m3EouECYPE3dbr3n1AyosD_AVzwbXlyIAy2vKJPGgK0XRFSahCZL6XgS10U9ji3cuJBoYED8GG6j37hYiCBTH7_pqWIgUSaEuZzZ-HFwHSEsOvI7XHXgYU2-JbIwK3fmuuIA-Kj3lDraqXrX6xiRsQz5WPqg9wH9f5QwV7PJ7WTLXhkr6Z9O3GpNIgk"
                />
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <p className="text-sm font-bold text-slate-900">
                      Marco Rossi
                    </p>
                    <p className="text-sm font-bold text-primary">94%</p>
                  </div>
                  <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[94%]"></div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <img
                  className="w-12 h-12 rounded-xl object-cover bg-slate-200"
                  data-alt="Close-up of a middle-aged woman guide with headphones, professional setting with soft office lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD94ImF41HUbHtg-RkrNlwzQzXQwak06oHqUP1R8C6ZJxhw-TeQMChi1wFjye_eGgpPPvI0eHpJe89cYMBXpi6wMNSEMAYHdlETkySZjrjB2YeV8XmjX4JF7EV75Zl_PiJSh7ozwEyx7kAeF45liLocEGNIrTwnfSw29zN4wq-oE7UkCZ-8Hjh11KzNOyH3u-ohThZqUhKOdO_EEUB5rjCAGtOzDyhz3KjuMAdelzTFjIFcjyOCCwK6eJ814dnQ8wOuAgIZWs71ryc"
                />
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <p className="text-sm font-bold text-slate-900">
                      Elena Vance
                    </p>
                    <p className="text-sm font-bold text-primary">88%</p>
                  </div>
                  <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[88%]"></div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <img
                  className="w-12 h-12 rounded-xl object-cover bg-slate-200"
                  data-alt="Young energetic tour guide with a backpack standing in a lush tropical forest environment"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuArqnZFVV6n4E6rgjFjOL0Xzz55ji7n1Y_doyD6Hbzle-xX5IJr95Ij53GBDCLys8WCpkKXBa7ovbedUbcR721haUUr79oMjeN367xOl-ezHi0gXo8I7zBtCz17325WkZJvilvFm7rdXbxD12aDG6wLbVXr7oCY5p8uSxkVBsftHcZa16o8-FfNhjZmdHh3-J4ucYjQmSY6VzFQy1lNIKLcC0q1YmrdIJDaOtxSPfo4kjsrqh-a4Hor-c1FTwkMbbm8xxBkWC-OsHs"
                />
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <p className="text-sm font-bold text-slate-900">Kai Chen</p>
                    <p className="text-sm font-bold text-primary">76%</p>
                  </div>
                  <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[76%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 bg-surface-container-lowest rounded-2xl p-8 relative overflow-hidden group">
            <div className="z-10 relative">
              <h3 className="text-lg font-headline font-bold text-slate-900">
                Tỷ lệ lấp đầy chỗ
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Trung bình trên mọi loại phương tiện
              </p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-headline font-extrabold text-slate-900 tracking-tighter">
                  82%
                </span>
                <span className="text-slate-500 font-bold">+5 điểm %</span>
              </div>
              <div className="grid grid-cols-4 gap-2 h-24 items-end">
                <div className="bg-primary/20 h-[40%] rounded-t-md"></div>
                <div className="bg-primary/40 h-[60%] rounded-t-md"></div>
                <div className="bg-primary/60 h-[85%] rounded-t-md"></div>
                <div className="bg-primary h-[100%] rounded-t-md"></div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  Xe buýt
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  SUV
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  Phản lực
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  Du thuyền
                </span>
              </div>
            </div>
            <div className="absolute -right-12 -top-12 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined !text-[12rem]">
                flight_class
              </span>
            </div>
          </div>
          <div className="col-span-12 bg-surface-container-lowest rounded-2xl p-0 overflow-hidden shadow-[0_20px_40px_rgba(25,28,30,0.06)]">
            <div className="p-8 flex justify-between items-center border-b border-surface-container">
              <div>
                <h3 className="text-lg font-headline font-bold text-slate-900">
                  Nhật ký vận hành gần đây
                </h3>
                <p className="text-sm text-slate-500">
                  Trạng thái đặt chỗ trực tiếp và phân công hướng dẫn viên
                </p>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-slate-600">
                    filter_list
                  </span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-slate-600">
                    more_vert
                  </span>
                </button>
              </div>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    ID
                  </th>
                  <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Chi tiết tour
                  </th>
                  <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Hướng dẫn viên
                  </th>
                  <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Sức chứa
                  </th>
                  <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Trạng thái
                  </th>
                  <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Doanh thu
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-6 font-bold text-slate-400">
                    #TR-8821
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-slate-900">
                      Kỳ nghỉ riêng bờ biển Amalfi
                    </p>
                    <p className="text-xs text-slate-500">Ý • 3 ngày</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                      <span className="text-sm font-medium">Marco Rossi</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold">12/12</span>
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase">
                      Đang diễn ra
                    </span>
                  </td>
                  <td className="px-8 py-6 font-headline font-bold text-slate-900">
                    $24,500
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-6 font-bold text-slate-400">
                    #TR-8822
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-slate-900">
                      Hành trình Thiền Kyoto
                    </p>
                    <p className="text-xs text-slate-500">Nhật Bản • 5 ngày</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                      <span className="text-sm font-medium">Kai Chen</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold">08/10</span>
                      <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-surface-container text-slate-500 text-[10px] font-bold rounded-full uppercase">
                      Đã lên lịch
                    </span>
                  </td>
                  <td className="px-8 py-6 font-headline font-bold text-slate-900">
                    $18,200
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-6 font-bold text-slate-400">
                    #TR-8823
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-slate-900">
                      Safari cao cấp Serengeti
                    </p>
                    <p className="text-xs text-slate-500">Tanzania • 7 ngày</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                      <span className="text-sm font-medium">Elena Vance</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold">06/06</span>
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-tertiary-container/10 text-tertiary text-[10px] font-bold rounded-full uppercase">
                      Cần xem xét
                    </span>
                  </td>
                  <td className="px-8 py-6 font-headline font-bold text-slate-900">
                    $42,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-4 mt-12 border-t border-slate-200/20">
          <p className="font-body text-xs text-slate-500">
            © 2024 Smart Travel Management System. Đã đăng ký mọi quyền.
          </p>
          <div className="flex gap-8">
            <a
              className="text-slate-500 text-xs hover:text-blue-700 transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              Chính sách bảo mật
            </a>
            <a
              className="text-slate-500 text-xs hover:text-blue-700 transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              Điều khoản dịch vụ
            </a>
            <a
              className="text-slate-500 text-xs hover:text-blue-700 transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              Trung tâm hỗ trợ
            </a>
            <a
              className="text-slate-500 text-xs hover:text-blue-700 transition-colors opacity-80 hover:opacity-100"
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
