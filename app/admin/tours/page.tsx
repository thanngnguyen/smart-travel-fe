import React from "react";
import Link from "next/link";

export default function AdminToursPage() {
  return (
    <div className="bg-surface min-h-screen">
      <main className="p-8">
        {/*  Header Section  */}
        <header className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-on-surface">
              Quản lý tour
            </h1>
            <p className="text-on-surface-variant mt-2 text-lg">
              Quản lý lịch trình gốc, lên lịch khởi hành và kiểm tra khả dụng
              của hướng dẫn viên.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/admin/tours/create"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-container transition-colors font-bold mr-3"
            >
              <span className="material-symbols-outlined">add</span> Tạo tour
            </Link>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface border border-outline-variant/20 hover:bg-surface-container transition-colors font-semibold">
              <span className="material-symbols-outlined">download</span>
              Xuất danh sách chuyến
            </button>
          </div>
        </header>
        {/*  Bento Grid Layout for Features  */}
        <div className="grid grid-cols-12 gap-6">
          {/*  Danh sách tour gốc (Primary Canvas)  */}
          <section className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-2xl p-6 shadow-none">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Danh sách tour gốc</h3>
              <div className="flex gap-2">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
                    search
                  </span>
                  <input
                    className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary"
                    placeholder="Tìm kiếm lịch trình..."
                    type="text"
                  />
                </div>
                <button className="p-2 bg-surface-container-low rounded-lg text-on-surface-variant">
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left text-xs font-black uppercase tracking-widest text-outline border-b border-outline-variant/10">
                    <th className="pb-4 px-2">Lịch trình</th>
                    <th className="pb-4 px-2">Mã</th>
                    <th className="pb-4 px-2">Thời lượng</th>
                    <th className="pb-4 px-2">Giá cơ bản</th>
                    <th className="pb-4 px-2">Lịch khởi hành hoạt động</th>
                    <th className="pb-4 px-2 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-4 px-2 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          className="w-full h-full object-cover"
                          data-alt="vibrant blue glacier in Iceland with soft morning mist and cinematic lighting"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeuqIbfEAhaBeNLUBAHdsfdSPrQqQwuXdapl58UXUSYjsg2YIRjrMAy9E--ujGh3CSUkmt57zzmPMnlzZLknfME-OrgNSCr_ea4dCK6CX3ZM0YIx7sWLrAsXW4LkKIKFE5MO5vhFpDt_Azh4yhhKzdDZs6HX-5g_A0okr_AsvN_MtwqOVrHWvlArj85pCQNIMfNjRe-bfWawGyhMxGAFEAD8WdAIL_MuQlymgUaSI7Z0GD3yvLd6eVQ9MIur5aE29aHlzmpoGGVfk"
                        />
                      </div>
                      <span className="font-bold">
                        Thám hiểm cao nguyên Iceland
                      </span>
                    </td>
                    <td className="py-4 px-2 font-mono text-outline">
                      ICE-HGH-01
                    </td>
                    <td className="py-4 px-2">8 ngày</td>
                    <td className="py-4 px-2 font-semibold text-primary">
                      $3,450
                    </td>
                    <td className="py-4 px-2">
                      <span className="bg-primary-fixed text-on-primary-fixed px-2 py-1 rounded-full text-[10px] font-bold">
                        24 hoạt động
                      </span>
                    </td>
                    <td className="py-4 px-2 text-right">
                      <button className="p-2 hover:bg-surface-container-high rounded-full">
                        <span className="material-symbols-outlined text-sm">
                          edit
                        </span>
                      </button>
                      <button className="p-2 hover:bg-surface-container-high rounded-full">
                        <span className="material-symbols-outlined text-sm">
                          more_vert
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-4 px-2 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          className="w-full h-full object-cover"
                          data-alt="cobblestone streets of Kyoto Japan at sunset with glowing lanterns and cherry blossoms"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrKXwKwDz4p-4b2A9wYj016IAw2nhfsyePRdhIsmrOgcVY881KZdpOzPXQEo6VXrnCGtzPotkaShmI-BQPPCX8Kq8DVk5iGcPPdq471VqdJbDl8KYAsG61Bwun80kRD6RYRO33bNML5cCFzr1790H3H1TLw0HlZ5Hv-HfBM7usotjTF6il9tqKnPUQtem2Tl-SrAZC3Jf6qi7thMwcQdGl6RJL33RGEA-GFYUMWaSTLDClY-q-5IeeGCBA9FLokzxGK_QS6qGnmHw"
                        />
                      </div>
                      <span className="font-bold">
                        Di sản Kyoto &amp; Vườn Thiền
                      </span>
                    </td>
                    <td className="py-4 px-2 font-mono text-outline">
                      JPN-KYO-04
                    </td>
                    <td className="py-4 px-2">5 ngày</td>
                    <td className="py-4 px-2 font-semibold text-primary">
                      $1,890
                    </td>
                    <td className="py-4 px-2">
                      <span className="bg-primary-fixed text-on-primary-fixed px-2 py-1 rounded-full text-[10px] font-bold">
                        12 hoạt động
                      </span>
                    </td>
                    <td className="py-4 px-2 text-right">
                      <button className="p-2 hover:bg-surface-container-high rounded-full">
                        <span className="material-symbols-outlined text-sm">
                          edit
                        </span>
                      </button>
                      <button className="p-2 hover:bg-surface-container-high rounded-full">
                        <span className="material-symbols-outlined text-sm">
                          more_vert
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-4 px-2 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          className="w-full h-full object-cover"
                          data-alt="dramatic aerial view of Serengeti savanna at dawn with hot air balloons in distance"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSGu-9mT77fw8nphVke4wNURyzHyXpd4PKcCM5ZzCssDuGRtZmrvEic3Ugb-o2KTrqPE4L1c2sgC2Y7QLpMhrRgsoX-Kd2WKNhqZ6oWzctuuHHeNHB1CL3t4q0PNaVOXkm49B4PMQDR_j7CqAoevDkEyqqcHhGUN7RLAiVe_9gMN9081dcjjcYgD2yxSMo-RVbs70rED0lP_3-oj67nyjLzQ-HtS7xKP--RXXzCG9MPV6mC2iTPfjjPIjVgz3eIAngoAtTYvDUWaA"
                        />
                      </div>
                      <span className="font-bold">
                        Safari cao cấp Serengeti
                      </span>
                    </td>
                    <td className="py-4 px-2 font-mono text-outline">
                      TAN-SER-09
                    </td>
                    <td className="py-4 px-2">10 ngày</td>
                    <td className="py-4 px-2 font-semibold text-primary">
                      $6,200
                    </td>
                    <td className="py-4 px-2">
                      <span className="bg-primary-fixed text-on-primary-fixed px-2 py-1 rounded-full text-[10px] font-bold">
                        8 hoạt động
                      </span>
                    </td>
                    <td className="py-4 px-2 text-right">
                      <button className="p-2 hover:bg-surface-container-high rounded-full">
                        <span className="material-symbols-outlined text-sm">
                          edit
                        </span>
                      </button>
                      <button className="p-2 hover:bg-surface-container-high rounded-full">
                        <span className="material-symbols-outlined text-sm">
                          more_vert
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          {/*  Departure Generator (Utility Sidebar)  */}
          <section className="col-span-12 lg:col-span-4 bg-surface-container rounded-2xl p-6 border border-outline-variant/10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-sm">
                  event_repeat
                </span>
              </div>
              <h3 className="text-xl font-bold">Trình tạo hàng loạt</h3>
            </div>
            <form className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase text-on-surface-variant mb-2">
                  Lịch trình mục tiêu
                </label>
                <select className="w-full bg-surface-container-lowest border-none rounded-lg text-sm focus:ring-2 focus:ring-primary py-3">
                  <option>Thám hiểm cao nguyên Iceland</option>
                  <option>Di sản Kyoto &amp; Vườn Thiền</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-on-surface-variant mb-2">
                    Ngày bắt đầu
                  </label>
                  <input
                    className="w-full p-2 bg-surface-container-lowest border-none rounded-lg text-sm focus:ring-2 focus:ring-primary"
                    type="date"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-on-surface-variant mb-2">
                    Ngày kết thúc
                  </label>
                  <input
                    className="w-full p-2 bg-surface-container-lowest border-none rounded-lg text-sm focus:ring-2 focus:ring-primary"
                    type="date"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-on-surface-variant mb-2">
                  Ngày lặp lại
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    className="w-9 h-9 rounded-full bg-surface-container-lowest text-on-surface text-xs font-bold border border-outline-variant/20 hover:border-primary"
                    type="button"
                  >
                    T2
                  </button>
                  <button
                    className="w-9 h-9 rounded-full bg-surface-container-lowest text-on-surface text-xs font-bold border border-outline-variant/20 hover:border-primary"
                    type="button"
                  >
                    T3
                  </button>
                  <button
                    className="w-9 h-9 rounded-full bg-surface-container-lowest text-on-surface text-xs font-bold border border-outline-variant/20 hover:border-primary"
                    type="button"
                  >
                    T4
                  </button>
                  <button
                    className="w-9 h-9 rounded-full bg-surface-container-lowest text-on-surface text-xs font-bold border border-outline-variant/20 hover:border-primary"
                    type="button"
                  >
                    T5
                  </button>
                  <button
                    className="w-9 h-9 rounded-full bg-surface-container-lowest text-on-surface text-xs font-bold border border-outline-variant/20 hover:border-primary"
                    type="button"
                  >
                    T6
                  </button>
                  <button
                    className="w-9 h-9 rounded-full bg-primary text-on-primary text-xs font-bold"
                    type="button"
                  >
                    T7
                  </button>
                  <button
                    className="w-9 h-9 rounded-full bg-primary text-on-primary text-xs font-bold"
                    type="button"
                  >
                    CN
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-on-surface-variant mb-2">
                  Hướng dẫn viên phụ trách
                </label>
                <select className="w-full bg-surface-container-lowest border-none rounded-lg text-sm focus:ring-2 focus:ring-primary py-3">
                  <option>Elena Rodriguez (Hướng dẫn viên cao cấp)</option>
                  <option>Markus Thorne (Trưởng nhóm khảo sát)</option>
                </select>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-bold shadow-lg hover:shadow-primary-container/20 transition-all flex items-center justify-center gap-2">
                Xem trước 24 lịch khởi hành
              </button>
            </form>
          </section>
          {/*  Conflict Checker & Availability (The "Red Flag" Area)  */}
          <section className="col-span-12 lg:col-span-12 bg-surface-container-lowest rounded-2xl p-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold">
                  Trình kiểm tra xung đột thông minh
                </h3>
                <p className="text-sm text-on-surface-variant">
                  Kiểm tra trực tiếp việc phân công hướng dẫn viên và chồng chéo
                  tài nguyên cho quý sắp tới.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <div className="w-3 h-3 rounded-full bg-tertiary"></div>
                  <span>Xung đột hướng dẫn viên</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <div className="w-3 h-3 rounded-full bg-error"></div>
                  <span>Quá tải đặt chỗ</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/*  Conflict Card 1  */}
              <div className="p-5 rounded-2xl bg-tertiary-container/10 border-l-4 border-tertiary flex gap-4">
                <div className="flex-shrink-0">
                  <span className="material-symbols-outlined text-tertiary">
                    warning
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-tertiary tracking-widest">
                    Phát hiện chồng chéo
                  </span>
                  <h4 className="font-bold text-on-surface mt-1">
                    Elena Rodriguez
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                    Được xếp cho{" "}
                    <span className="font-bold">Thám hiểm Iceland</span>
                    (12-20/10) trong khi được phân cho{" "}
                    <span className="font-bold">Dạo bộ Kyoto</span> bắt đầu ngày
                    19/10.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <button className="text-[11px] font-bold text-tertiary underline uppercase">
                      Phân công lại hướng dẫn viên
                    </button>
                    <button className="text-[11px] font-bold text-on-surface-variant underline uppercase">
                      Bỏ qua
                    </button>
                  </div>
                </div>
              </div>
              {/*  Conflict Card 2  */}
              <div className="p-5 rounded-2xl bg-error-container/10 border-l-4 border-error flex gap-4">
                <div className="flex-shrink-0">
                  <span className="material-symbols-outlined text-error">
                    dangerous
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-error tracking-widest">
                    Cảnh báo tồn kho
                  </span>
                  <h4 className="font-bold text-on-surface mt-1">
                    Serengeti Safari (SN-102)
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                    Sức chứa phương tiện đã vượt mức cho lịch khởi hành ngày
                    04/11. <span className="font-bold">14/12 ghế</span> được xác
                    nhận qua đồng bộ OTA.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <button className="text-[11px] font-bold text-error underline uppercase">
                      Mở rộng đội phương tiện
                    </button>
                    <button className="text-[11px] font-bold text-on-surface-variant underline uppercase">
                      Tạm dừng đặt chỗ
                    </button>
                  </div>
                </div>
              </div>
              {/*  Availability Summary (Pricing Visual)  */}
              <div className="p-5 rounded-2xl bg-surface-container-low flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-on-surface">
                    Quản lý lợi suất
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-1 italic">
                    Đề xuất tăng giá cho các ngày nhu cầu cao.
                  </p>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span>15-25/08 (Cao điểm)</span>
                    <span className="font-black text-green-600">+15% SRP</span>
                  </div>
                  <div className="w-full bg-outline-variant/30 h-1 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full w-[85%]"></div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span>01-10/12 (Thấp điểm)</span>
                    <span className="font-black text-blue-600">-10% SRP</span>
                  </div>
                  <div className="w-full bg-outline-variant/30 h-1 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-[25%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
