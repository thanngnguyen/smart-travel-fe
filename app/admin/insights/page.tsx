import React from "react";
import Link from "next/link";

export default function AdminInsightsPage() {
  return (
    <div className="bg-surface min-h-screen">
      <main className="flex-1 p-8 bg-surface">
        {/*  Header  */}
        <header className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-4xl font-black text-on-surface tracking-tight mb-1">
              Bảng điều khiển phân tích AI
            </h2>
            <p className="text-on-surface-variant font-medium">
              Phân tích dự báo và theo dõi cảm xúc cho Quý 4 năm 2024
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 flex items-center gap-2 hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-sm">
                calendar_today
              </span>
              <span className="text-sm font-bold">30 ngày gần nhất</span>
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-bold shadow-lg hover:opacity-90 transition-opacity">
              Xuất báo cáo phân tích
            </button>
          </div>
        </header>
        {/*  Bento Grid Insights  */}
        <div className="grid grid-cols-12 gap-6">
          {/*  Overall Sentiment Trend (Large Graph Placeholder)  */}
          <div className="col-span-8 bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-extrabold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  analytics
                </span>
                Xu hướng phân tích cảm xúc
              </h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5 text-xs font-medium">
                  <span className="w-3 h-3 rounded-full bg-primary"></span> Tích
                  cực
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium">
                  <span className="w-3 h-3 rounded-full bg-secondary-container"></span>{" "}
                  Trung tính
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium">
                  <span className="w-3 h-3 rounded-full bg-error"></span> Tiêu
                  cực
                </div>
              </div>
            </div>
            {/*  Visual Chart Representation  */}
            <div className="h-64 w-full flex items-end justify-between gap-2 px-2">
              <div className="w-full bg-surface-container-low rounded-t-lg relative group h-[40%]">
                <div className="absolute bottom-0 w-full bg-primary rounded-t-lg h-[60%] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 w-full bg-secondary-container rounded-t-lg h-[25%] opacity-80"></div>
              </div>
              <div className="w-full bg-surface-container-low rounded-t-lg relative group h-[55%]">
                <div className="absolute bottom-0 w-full bg-primary rounded-t-lg h-[70%] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 w-full bg-secondary-container rounded-t-lg h-[20%] opacity-80"></div>
              </div>
              <div className="w-full bg-surface-container-low rounded-t-lg relative group h-[70%]">
                <div className="absolute bottom-0 w-full bg-primary rounded-t-lg h-[80%] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 w-full bg-error rounded-t-lg h-[10%] opacity-80"></div>
              </div>
              <div className="w-full bg-surface-container-low rounded-t-lg relative group h-[60%]">
                <div className="absolute bottom-0 w-full bg-primary rounded-t-lg h-[65%] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 w-full bg-secondary-container rounded-t-lg h-[30%] opacity-80"></div>
              </div>
              <div className="w-full bg-surface-container-low rounded-t-lg relative group h-[85%]">
                <div className="absolute bottom-0 w-full bg-primary rounded-t-lg h-[90%] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 w-full bg-secondary-container rounded-t-lg h-[5%] opacity-80"></div>
              </div>
              <div className="w-full bg-surface-container-low rounded-t-lg relative group h-[50%]">
                <div className="absolute bottom-0 w-full bg-primary rounded-t-lg h-[55%] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 w-full bg-error rounded-t-lg h-[35%] opacity-80"></div>
              </div>
              <div className="w-full bg-surface-container-low rounded-t-lg relative group h-[75%]">
                <div className="absolute bottom-0 w-full bg-primary rounded-t-lg h-[85%] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 w-full bg-secondary-container rounded-t-lg h-[10%] opacity-80"></div>
              </div>
            </div>
            <div className="flex justify-between text-[10px] text-on-surface-variant font-bold uppercase tracking-widest px-2">
              <span>Th2</span>
              <span>Th3</span>
              <span>Th4</span>
              <span>Th5</span>
              <span>Th6</span>
              <span>Th7</span>
              <span>CN</span>
            </div>
          </div>
          {/*  Chatbot Intent Recognition Stats  */}
          <div className="col-span-4 bg-surface-container-high rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-extrabold mb-4">Thống kê ý định</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Yêu cầu đặt chỗ</span>
                    <span className="text-primary">64%</span>
                  </div>
                  <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: "64%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Yêu cầu hoàn tiền</span>
                    <span className="text-tertiary">22%</span>
                  </div>
                  <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                    <div
                      className="h-full bg-tertiary rounded-full"
                      style={{ width: "22%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Trạng thái chuyến bay</span>
                    <span className="text-secondary">12%</span>
                  </div>
                  <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                    <div
                      className="h-full bg-secondary rounded-full"
                      style={{ width: "12%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-outline-variant/20">
              <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">
                  smart_toy
                </span>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                    Tỷ lệ xử lý bởi AI
                  </p>
                  <p className="text-2xl font-black text-primary">91.4%</p>
                </div>
              </div>
            </div>
          </div>
          {/*  Red Flag Reviews List (Admin Style)  */}
          <div className="col-span-12 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/15 overflow-hidden">
            <div className="px-6 py-5 bg-surface-container flex justify-between items-center border-b border-outline-variant/10">
              <h3 className="text-lg font-extrabold flex items-center gap-2">
                <span className="material-symbols-outlined text-error">
                  flag
                </span>
                Đánh giá "Cờ đỏ"
              </h3>
              <span className="px-2 py-1 bg-tertiary-container text-on-tertiary-container text-[10px] font-black rounded-md">
                8 HÀNH ĐỘNG KHẨN
              </span>
            </div>
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant/10">
                    <th className="px-6 py-3 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">
                      Khách hàng
                    </th>
                    <th className="px-6 py-3 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">
                      Trích đoạn đánh giá
                    </th>
                    <th className="px-6 py-3 text-[10px] font-black text-on-surface-variant uppercase tracking-widest text-center">
                      Điểm cảm xúc
                    </th>
                    <th className="px-6 py-3 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">
                      Ý định chính
                    </th>
                    <th className="px-6 py-3 text-[10px] font-black text-on-surface-variant uppercase tracking-widest text-right">
                      Thao tác
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {/*  High Density Row 1  */}
                  <tr className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center font-bold text-xs">
                          JD
                        </div>
                        <div>
                          <p className="text-sm font-bold">Johnathan Doe</p>
                          <p className="text-[10px] text-slate-500">
                            Thành viên cao cấp
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-on-surface max-w-xs truncate italic">
                        "Chuyến bay bị trễ 6 tiếng và không ai ở quầy concierge
                        hỗ trợ. Thật sự là thảm họa..."
                      </p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-xs font-black">
                        <span
                          className="material-symbols-outlined text-xs"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          mood_bad
                        </span>
                        0.12
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold rounded">
                        LỖI_HỖ_TRỢ
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary font-bold text-xs hover:underline">
                        Chuyển xử lý
                      </button>
                    </td>
                  </tr>
                  {/*  High Density Row 2  */}
                  <tr className="hover:bg-surface-container-low/50 transition-colors bg-surface-container-low/20">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center font-bold text-xs">
                          MS
                        </div>
                        <div>
                          <p className="text-sm font-bold">Maria Santos</p>
                          <p className="text-[10px] text-slate-500">
                            Khách lần đầu
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-on-surface max-w-xs truncate italic">
                        "Hướng dẫn viên không xuất hiện. Không có phản hồi từ
                        ứng dụng. Tôi muốn hoàn tiền toàn bộ ngay lập tức."
                      </p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-xs font-black">
                        <span
                          className="material-symbols-outlined text-xs"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          mood_bad
                        </span>
                        0.08
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold rounded">
                        YÊU_CẦU_HOÀN_TIỀN
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary font-bold text-xs hover:underline">
                        Chuyển xử lý
                      </button>
                    </td>
                  </tr>
                  {/*  High Density Row 3  */}
                  <tr className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center font-bold text-xs">
                          AW
                        </div>
                        <div>
                          <p className="text-sm font-bold">Alex Wong</p>
                          <p className="text-[10px] text-slate-500">
                            Hạng thương gia
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-on-surface max-w-xs truncate italic">
                        "Lỗi thanh toán ở đơn đặt gần nhất. Tôi bị trừ tiền hai
                        lần cho cùng một điểm đến. Bot AI không hữu ích."
                      </p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-xs font-black">
                        <span
                          className="material-symbols-outlined text-xs"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          mood_bad
                        </span>
                        0.21
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold rounded">
                        TRANH_CHẤP_THANH_TOÁN
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary font-bold text-xs hover:underline">
                        Chuyển xử lý
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-surface-container-low text-center">
              <button className="text-sm font-bold text-primary hover:text-primary-container transition-colors">
                Xem toàn bộ 124 cảnh báo
              </button>
            </div>
          </div>
          {/*  AI Insight Summary Cards  */}
          <div className="col-span-3 bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/15 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">trending_up</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                Tăng trưởng cảm xúc
              </p>
              <h4 className="text-2xl font-black">+14.2%</h4>
            </div>
            <p className="text-[10px] text-slate-500">
              So với mức nền cảm xúc của tháng trước.
            </p>
          </div>
          <div className="col-span-3 bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/15 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">forum</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                Tổng lượng đánh giá
              </p>
              <h4 className="text-2xl font-black">2,842</h4>
            </div>
            <p className="text-[10px] text-slate-500">
              Được xử lý trên 12 nền tảng du lịch liên kết.
            </p>
          </div>
          <div className="col-span-3 bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/15 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined">priority_high</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                Chỉ số khẩn cấp
              </p>
              <h4 className="text-2xl font-black">Trung bình</h4>
            </div>
            <p className="text-[10px] text-slate-500">
              Dựa trên cụm ý định tiêu cực và rủi ro rời bỏ.
            </p>
          </div>
          <div className="col-span-3 bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/15 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-full bg-outline-variant/20 flex items-center justify-center text-outline">
              <span className="material-symbols-outlined">timer</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                Thời gian phản hồi TB
              </p>
              <h4 className="text-2xl font-black">1.2m</h4>
            </div>
            <p className="text-[10px] text-slate-500">
              Độ trễ tạo phản hồi do AI đề xuất.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
