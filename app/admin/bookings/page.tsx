import React from "react";
import Icon from "@/components/ui/Icon";

export default function BookingsManagementPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header & Actions */}
      <header className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-black text-on-surface tracking-tight">
            Quản lý đặt chỗ
          </h2>
          <p className="text-on-surface-variant font-medium mt-1">
            Theo dõi và xử lý các đơn đặt chỗ du lịch toàn cầu
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-lowest text-on-surface font-semibold rounded-xl shadow-sm border border-outline-variant/20 hover:bg-surface-container-low transition-all">
            <Icon name="file_download" className="text-[20px]" />
            Xuất CSV
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-xl shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
            <Icon name="add_circle" className="text-[20px]" />
            Đặt chỗ mới
          </button>
        </div>
      </header>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-[0_20px_40px_rgba(25,28,30,0.04)] flex flex-col">
          <span className="text-xs font-bold uppercase tracking-widest text-outline mb-2">
            Tổng đơn đặt chỗ
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-on-surface">1,284</span>
            <span className="text-sm font-bold text-green-600">+12%</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-[0_20px_40px_rgba(25,28,30,0.04)] flex flex-col">
          <span className="text-xs font-bold uppercase tracking-widest text-outline mb-2">
            Doanh thu
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-on-surface">$42.8k</span>
            <span className="text-sm font-bold text-green-600">+$3k</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-[0_20px_40px_rgba(25,28,30,0.04)] flex flex-col">
          <span className="text-xs font-bold uppercase tracking-widest text-outline mb-2">
            Chờ xử lý
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-on-surface">43</span>
            <span className="text-sm font-bold text-secondary">Cần duyệt</span>
          </div>
        </div>
        <div className="bg-tertiary-container p-6 rounded-3xl shadow-[0_20px_40px_rgba(163,53,0,0.1)] flex flex-col">
          <span className="text-xs font-bold uppercase tracking-widest text-on-tertiary-container mb-2">
            Cảnh báo AI
          </span>
          <div className="flex items-center gap-2">
            <Icon
              name="warning"
              filled
              className="text-on-tertiary-container"
            />
            <span className="text-sm font-bold text-on-tertiary-container">
              3 giao dịch tranh chấp
            </span>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-surface-container-high rounded-3xl p-4 mb-6 flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[300px] relative">
          <Icon
            name="search"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-outline"
          />
          <input
            className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            placeholder="Tìm khách hàng, tên tour hoặc ID..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-2 bg-surface-container-low p-1 rounded-2xl">
          <button className="px-4 py-2 rounded-xl text-sm font-bold bg-white shadow-sm text-primary">
            Tất cả
          </button>
          <button className="px-4 py-2 rounded-xl text-sm font-bold text-outline hover:text-on-surface transition-colors">
            Đã thanh toán
          </button>
          <button className="px-4 py-2 rounded-xl text-sm font-bold text-outline hover:text-on-surface transition-colors">
            Chờ xử lý
          </button>
          <button className="px-4 py-2 rounded-xl text-sm font-bold text-outline hover:text-on-surface transition-colors">
            Đã hủy
          </button>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-on-surface font-bold text-sm bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10">
          <Icon name="filter_list" className="text-[18px]" />
          Bộ lọc
        </button>
      </div>

      {/* DataTable */}
      <div className="bg-surface-container-lowest rounded-3xl shadow-[0_20px_40px_rgba(25,28,30,0.06)] overflow-hidden mb-8">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low">
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                <input
                  className="rounded border-outline-variant text-primary focus:ring-primary"
                  type="checkbox"
                />
              </th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                Khách hàng
              </th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                Tên tour
              </th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                Khởi hành
              </th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                Số tiền
              </th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                Trạng thái
              </th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-low">
            {/* Row 1 */}
            <tr className="hover:bg-surface transition-colors group">
              <td className="px-6 py-5">
                <input
                  className="rounded border-outline-variant text-primary focus:ring-primary"
                  type="checkbox"
                />
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-xs">
                    JD
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-on-surface">
                      Julianne Moore
                    </span>
                    <span className="text-xs text-outline">
                      j.moore@travel.com
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5">
                <span className="font-semibold text-on-surface">
                  Santorini hoàng hôn
                </span>
              </td>
              <td className="px-6 py-5">
                <div className="flex flex-col">
                  <span className="font-medium text-on-surface">
                    12 Th10, 2024
                  </span>
                  <span className="text-xs text-outline">
                    Cổng 4B • Phổ thông
                  </span>
                </div>
              </td>
              <td className="px-6 py-5 font-black text-on-surface">
                $2,450.00
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                  Đã thanh toán
                </span>
              </td>
              <td className="px-6 py-5">
                <button className="p-2 rounded-lg hover:bg-surface-container-high transition-colors opacity-0 group-hover:opacity-100">
                  <Icon name="more_vert" className="text-[20px]" />
                </button>
              </td>
            </tr>
            {/* Row 2 */}
            <tr className="hover:bg-surface transition-colors group">
              <td className="px-6 py-5">
                <input
                  className="rounded border-outline-variant text-primary focus:ring-primary"
                  type="checkbox"
                />
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xs">
                    RW
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-on-surface">
                      Robert Wagner
                    </span>
                    <span className="text-xs text-outline">
                      robert.w@web.de
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5">
                <span className="font-semibold text-on-surface">
                  Tàu hỏa cao cấp Alps Thụy Sĩ
                </span>
              </td>
              <td className="px-6 py-5">
                <div className="flex flex-col">
                  <span className="font-medium text-on-surface">
                    05 Th11, 2024
                  </span>
                  <span className="text-xs text-outline">
                    Zurich HB • Hạng nhất
                  </span>
                </div>
              </td>
              <td className="px-6 py-5 font-black text-on-surface">
                $5,120.00
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
                  Chờ xử lý
                </span>
              </td>
              <td className="px-6 py-5">
                <button className="p-2 rounded-lg hover:bg-surface-container-high transition-colors opacity-0 group-hover:opacity-100">
                  <Icon name="more_vert" className="text-[20px]" />
                </button>
              </td>
            </tr>
            {/* Row 3 */}
            <tr className="hover:bg-surface transition-colors group">
              <td className="px-6 py-5">
                <input
                  className="rounded border-outline-variant text-primary focus:ring-primary"
                  type="checkbox"
                />
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-xs">
                    EL
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-on-surface">
                      Elena Lopez
                    </span>
                    <span className="text-xs text-outline">
                      e.lopez@studio.io
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5">
                <span className="font-semibold text-on-surface">
                  Tour hoa anh đào Kyoto
                </span>
              </td>
              <td className="px-6 py-5">
                <div className="flex flex-col">
                  <span className="font-medium text-on-surface">
                    29 Th10, 2024
                  </span>
                  <span className="text-xs text-outline">
                    Osaka Intl • Boutique
                  </span>
                </div>
              </td>
              <td className="px-6 py-5 font-black text-on-surface">
                $1,890.00
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">
                  Đã hủy
                </span>
              </td>
              <td className="px-6 py-5">
                <button className="p-2 rounded-lg hover:bg-surface-container-high transition-colors opacity-0 group-hover:opacity-100">
                  <Icon name="more_vert" className="text-[20px]" />
                </button>
              </td>
            </tr>
            {/* Row 4 */}
            <tr className="hover:bg-surface transition-colors group">
              <td className="px-6 py-5">
                <input
                  className="rounded border-outline-variant text-primary focus:ring-primary"
                  type="checkbox"
                />
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
                    TK
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-on-surface">
                      Thomas Klein
                    </span>
                    <span className="text-xs text-outline">tk@corp.net</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5">
                <span className="font-semibold text-on-surface">
                  Safari Serengeti cổ điển
                </span>
              </td>
              <td className="px-6 py-5">
                <div className="flex flex-col">
                  <span className="font-medium text-on-surface">
                    14 Th12, 2024
                  </span>
                  <span className="text-xs text-outline">
                    Sân bay JRO • Khu nghỉ dưỡng
                  </span>
                </div>
              </td>
              <td className="px-6 py-5 font-black text-on-surface">
                $3,900.00
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                  Đã thanh toán
                </span>
              </td>
              <td className="px-6 py-5">
                <button className="p-2 rounded-lg hover:bg-surface-container-high transition-colors opacity-0 group-hover:opacity-100">
                  <Icon name="more_vert" className="text-[20px]" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="px-6 py-4 flex items-center justify-between bg-surface-container-low/50 border-t border-surface-container-low">
          <span className="text-xs font-bold text-outline uppercase tracking-wider">
            Hiển thị 1-10 / 1,284 đơn đặt chỗ
          </span>
          <div className="flex gap-2">
            <button className="p-2 rounded-xl bg-white shadow-sm border border-outline-variant/10 text-outline hover:text-on-surface">
              <Icon name="chevron_left" className="text-[20px]" />
            </button>
            <button className="w-10 h-10 rounded-xl bg-primary text-on-primary font-bold shadow-sm">
              1
            </button>
            <button className="w-10 h-10 rounded-xl bg-white shadow-sm border border-outline-variant/10 text-outline font-bold hover:bg-surface-container-low transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded-xl bg-white shadow-sm border border-outline-variant/10 text-outline font-bold hover:bg-surface-container-low transition-colors">
              3
            </button>
            <button className="p-2 rounded-xl bg-white shadow-sm border border-outline-variant/10 text-outline hover:text-on-surface">
              <Icon name="chevron_right" className="text-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
