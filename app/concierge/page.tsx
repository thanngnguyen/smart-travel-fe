"use client";

import React, { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/Icon";
import Link from "next/link";

export default function ConciergePage() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Chào buổi sáng! Tôi đã phân tích sở thích của bạn về **kiến trúc truyền thống Kyoto**. Tôi thấy bạn đang lên kế hoạch cho **12 - 18 tháng 11**. Chúng ta nên tập trung vào khu Gion hay thêm cả rừng tre Arashiyama?",
      entities: ["Kyoto", "12-18 thg 11"],
    },
    {
      role: "user",
      text: "Mình muốn cả hai, nhưng cần trải nghiệm thật riêng tư. Có thể có trà đạo với một nghệ nhân bản địa không?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", text: input }]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Đang xử lý yêu cầu... Tôi đã cập nhật lịch trình.",
          entities: [],
        },
      ]);
    }, 1500);
  };

  return (
    <div className="bg-surface font-body text-on-surface">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-50 dark:bg-slate-950 flex flex-col p-6 gap-4 z-50">
        <div className="mb-8">
          <Link href="/">
            <h1 className="text-xl font-extrabold text-blue-700 dark:text-blue-400">
              STMS
            </h1>
          </Link>
        </div>
        <div className="mb-10">
          <h2 className="font-headline text-lg font-bold text-on-surface">
            Chào mừng quay lại
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Hành trình tiếp theo đang chờ bạn
          </p>
        </div>
        <nav className="flex-1 space-y-2">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl group"
          >
            <Icon name="home" />
            <span className="font-semibold">Trang chủ</span>
          </Link>
          <Link
            href="/profile"
            className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl group"
          >
            <Icon name="travel_explore" />
            <span className="font-semibold">Chuyến đi của tôi</span>
          </Link>
          <Link
            href="/saved"
            className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl group"
          >
            <Icon name="bookmark" />
            <span className="font-semibold">Đã lưu</span>
          </Link>
          <Link
            href="/concierge"
            className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl font-semibold transition-all scale-105 duration-200"
          >
            <Icon name="smart_toy" filled />
            <span className="font-semibold">Trợ lý AI</span>
          </Link>
          <Link
            href="/settings"
            className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl group"
          >
            <Icon name="settings" />
            <span className="font-semibold">Cài đặt</span>
          </Link>
        </nav>
        <button className="mt-auto w-full py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-3xl font-bold shadow-lg hover:opacity-90 transition-all">
          Lên kế hoạch mới
        </button>
      </aside>

      {/* Main Content Canvas */}
      <main className="ml-64 p-8 min-h-screen relative overflow-hidden">
        {/* Header */}
        <header className="flex justify-between items-center h-30 relative z-10">
          <div className="flex items-center gap-8">
            <h1 className="font-headline text-3xl font-extrabold tracking-tight text-primary">
              STMS
            </h1>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
              >
                Điểm đến
              </Link>
              <Link
                href="/tours"
                className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
              >
                Tour
              </Link>
              <Link
                href="/tours"
                className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
              >
                Ưu đãi
              </Link>
              <Link
                href="/concierge"
                className="text-sm font-bold text-primary border-b-2 border-primary pb-1"
              >
                Trợ lý AI
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <img
                className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=128&h=128&q=80"
              />
              <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-primary-fixed flex items-center justify-center text-primary font-bold text-xs">
                +3
              </div>
            </div>
            <button className="p-3 bg-white shadow-[0_20px_40px_rgba(25,28,30,0.06)] rounded-full text-on-surface hover:bg-slate-50 transition-colors">
              <Icon name="notifications" />
            </button>
          </div>
        </header>

        {/* Chat Experience Grid */}
        <div className="mb-12 relative z-10">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary">
            AI Trợ lý cá nhân
          </h1>
          <p className="text-on-surface-variant font-medium mt-1">
            Tinh chỉnh hành trình Kyoto của bạn bằng độ chính xác thông minh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-[calc(100vh-200px)] relative z-10">
          {/* Message Flow (Left/Center) */}
          <div className="col-span-1 md:col-span-8 flex flex-col h-full bg-surface-container-low rounded-3xl p-6 relative overflow-hidden">
            <div className="flex-1 overflow-y-auto space-y-8 pr-4 custom-scrollbar">
              {messages.map((msg, index) => (
                <React.Fragment key={index}>
                  {msg.role === "ai" ? (
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                        <Icon name="smart_toy" filled className="text-white" />
                      </div>
                      <div className="space-y-3 max-w-[85%]">
                        <div className="bg-white p-5 rounded-2xl rounded-tl-none shadow-[0_10px_25px_rgba(0,0,0,0.03)] border border-outline-variant/10">
                          <p className="text-on-surface leading-relaxed whitespace-pre-line">
                            {msg.text}
                          </p>
                        </div>
                        {msg.entities && msg.entities.length > 0 && (
                          <div className="flex gap-2 flex-wrap">
                            <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                              Thực thể: {msg.entities[0]}
                            </span>
                            {msg.entities[1] && (
                              <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                {msg.entities[1]}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-4 justify-end">
                      <div className="bg-primary-container text-white p-5 rounded-2xl rounded-tr-none max-w-[70%] shadow-md">
                        <p className="leading-relaxed whitespace-pre-line">
                          {msg.text}
                        </p>
                      </div>
                      <img
                        className="w-10 h-10 rounded-xl shrink-0 object-cover"
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&h=128&q=80"
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}

              {/* Hardcoded Tour Cards for demonstration (as AI response) */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Icon name="smart_toy" filled className="text-white" />
                </div>
                <div className="space-y-6 w-full">
                  <div className="bg-white p-5 rounded-2xl rounded-tl-none shadow-[0_10px_25px_rgba(0,0,0,0.03)] border border-outline-variant/10 max-w-[85%]">
                    <p className="text-on-surface leading-relaxed italic">
                      Đang xử lý yêu cầu... Tìm thấy hai nghi thức riêng tư
                      "chuẩn thiền" khả dụng trong thời gian bạn lưu trú.
                    </p>
                  </div>
                  {/* Horizontal Recommended Cards */}
                  <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
                    {/* Card 1 */}
                    <div className="min-w-[320px] bg-white rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(25,28,30,0.06)] border border-outline-variant/10 snap-start group cursor-pointer transition-transform hover:-translate-y-1 relative">
                      <div className="h-44 relative">
                        <img
                          className="w-full h-full object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDKFSNkt9E4RU2kHLXg9h_KAORDnrEPVqkqowUhs8p9LMfYZTGBnsjXqDmuiGQkvecdeajo3xjdmuL6P4UQqgKp5DCiljJkJGKKo_qBIWngbWC5c_WXrf84ClBu7vfEDGYP-KGj0k9-nrqLSA-Au6Xm41xOnhtaxVGokTfMMkBVpMFdB4Uj0XE9758EZlyjXTb5V2uK-WulFEt_cMgB4SYI_omCSwjT8z8YH49taZfTWl7fD7Ljv0CCXOZD-wr0KP2czIm4pWFWRs"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-tertiary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                            <Icon
                              name="auto_awesome"
                              filled
                              className="text-[12px]"
                            />{" "}
                            AI ĐỀ XUẤT
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-headline font-bold text-lg text-on-surface">
                            Vườn trà bí mật Gion
                          </h3>
                          <span className="text-primary font-bold">
                            ¥24,000
                          </span>
                        </div>
                        <p className="text-xs text-on-surface-variant line-clamp-2 mb-4">
                          Trà thất riêng tư từ thế kỷ 17 thường đóng cửa với
                          công chúng. Bao gồm lớp trà matcha cùng nghệ nhân đời
                          thứ 4.
                        </p>
                        <button className="w-full py-2 bg-primary-fixed text-on-primary-fixed-variant rounded-xl font-bold text-sm transition-colors hover:bg-primary-container hover:text-white">
                          Thêm vào lịch trình
                        </button>
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className="min-w-[320px] bg-white rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(25,28,30,0.06)] border border-outline-variant/10 snap-start group cursor-pointer transition-transform hover:-translate-y-1 relative">
                      <div className="h-44 relative">
                        <img
                          className="w-full h-full object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFCM95HTfF15mwHqXXpaCsLDJw3dScd01V6TiLfza-yt1sb0kV1JHxe9FJNNilNqIdsO2q6zc0T7UohEaII7OWSgKBy0PRBY4YG0mTLFdDjkrA7lsGIAUrj1eLiXFJ0nZHQ3-hS5gOIkQo0FRXKjzhXDmsClmxsCxQR-KJbCwZ33I8o-FfA7eDZKSr7Ytkur80YZhFjKmc1sev-1tMIhOFOVrZUwEx4HlakFm21KW8mGIe77lHeXgsa9b02E5dJvwzbWB-hEDq-9w"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-tertiary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                            <Icon
                              name="auto_awesome"
                              filled
                              className="text-[12px]"
                            />{" "}
                            AI ĐỀ XUẤT
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-headline font-bold text-lg text-on-surface">
                            Thiền buổi sáng tại Kodai-ji
                          </h3>
                          <span className="text-primary font-bold">
                            ¥18,500
                          </span>
                        </div>
                        <p className="text-xs text-on-surface-variant line-clamp-2 mb-4">
                          Vào khu vườn đền trước giờ mở cửa, tiếp theo là nghi
                          lễ trà riêng và phiên thiền định.
                        </p>
                        <button className="w-full py-2 bg-primary-fixed text-on-primary-fixed-variant rounded-xl font-bold text-sm transition-colors hover:bg-primary-container hover:text-white">
                          Thêm vào lịch trình
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="mt-6 pt-6 border-t border-outline-variant/10">
              <form onSubmit={handleSend} className="relative">
                <input
                  className="w-full bg-white border-0 ring-1 ring-outline-variant/30 rounded-3xl py-5 pl-6 pr-28 text-on-surface focus:ring-2 focus:ring-primary focus:ring-offset-0 transition-all font-medium placeholder:text-slate-400 outline-none"
                  placeholder="Hỏi bất cứ điều gì về chuyến đi của bạn..."
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <button
                    type="button"
                    className="p-2 text-on-surface-variant hover:text-primary transition-colors outline-none cursor-pointer"
                  >
                    <Icon name="mic" />
                  </button>
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    className="p-3 bg-primary text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 disabled:opacity-50 transition-all outline-none cursor-pointer"
                  >
                    <Icon name="send" />
                  </button>
                </div>
              </form>
              <div className="mt-4 flex gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4">
                <span className="flex items-center gap-1">
                  <Icon name="check_circle" className="text-[12px]" /> Đối tác
                  đã xác minh
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="security" className="text-[12px]" /> Đặt chỗ an
                  toàn & bảo mật
                </span>
              </div>
            </div>
          </div>

          {/* Contextual Sidebar (Right) */}
          <div className="hidden md:flex col-span-4 flex-col gap-6">
            {/* Smart Map */}
            <div className="bg-white rounded-3xl p-4 shadow-[0_20px_40px_rgba(25,28,30,0.06)] h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-200">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWC0XU1KeAknS3tS_3lvqDd3T5AvjcMIuj5KgGPl2dUa5qL_OHU98Q21XzZN9fTRyTeOW1LPUQggdwatiNsfx4PfJ-mprNhrV0oVPFCjL2tpbHLrwhDGvG2Uar--FcKL5pZpRrq1UwRriLdM_ebbb-Lol3QxZeYjQ_uiLK1S8znGRwDLChnk2yHxjaH3_UQd921OD-g6xwXeSUwSxTtkkGI9RZgTwjZQBFk5YsRDGlySq5aNC6ORhFSStB0EC7R4kSnuNKXJq9sCw"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-2 rounded-xl text-[10px] font-bold text-primary shadow-sm tracking-wider">
                ĐIỂM ĐẾN: KYOTO, NHẬT BẢN
              </div>
            </div>

            {/* Entity Summary "Red Flag" & Alerts */}
            <div className="bg-tertiary-container text-on-tertiary-container p-6 rounded-3xl space-y-4">
              <div className="flex items-center gap-2">
                <Icon
                  name="warning"
                  filled
                  className="text-on-tertiary-container"
                />
                <h4 className="font-headline font-bold">
                  Gợi ý AI: Mùa cao điểm
                </h4>
              </div>
              <p className="text-sm font-medium leading-relaxed opacity-90">
                Từ 12-18 tháng 11 là giai đoạn cao điểm mùa lá thu. Tôi khuyên
                bạn nên đặt tất cả tour riêng trong <strong>48 giờ</strong> tới
                vì tỷ lệ còn chỗ chỉ còn 12%.
              </p>
            </div>

            {/* Quick Action List */}
            <div className="bg-surface-container-high rounded-3xl p-6 flex-1 space-y-6">
              <h4 className="font-headline font-bold text-on-surface">
                Gợi ý tiếp theo
              </h4>
              <div className="space-y-3">
                <button className="w-full text-left p-4 bg-surface-container-lowest rounded-2xl flex items-center justify-between group hover:shadow-md transition-all text-on-surface cursor-pointer border-none outline-none">
                  <span className="text-sm font-semibold">
                    Tìm chỗ đặt bữa tối
                  </span>
                  <Icon
                    name="chevron_right"
                    className="text-primary group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <button className="w-full text-left p-4 bg-surface-container-lowest rounded-2xl flex items-center justify-between group hover:shadow-md transition-all text-on-surface cursor-pointer border-none outline-none">
                  <span className="text-sm font-semibold">
                    Kiểm tra giá chuyến bay
                  </span>
                  <Icon
                    name="chevron_right"
                    className="text-primary group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <button className="w-full text-left p-4 bg-surface-container-lowest rounded-2xl flex items-center justify-between group hover:shadow-md transition-all text-on-surface cursor-pointer border-none outline-none">
                  <span className="text-sm font-semibold">Yêu cầu visa</span>
                  <Icon
                    name="chevron_right"
                    className="text-primary group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
              <div className="pt-6 border-t border-outline-variant/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                    Nhịp du lịch toàn cầu: Đang hoạt động
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-3/4 rounded-full"></div>
                  </div>
                  <p className="text-[10px] text-on-surface-variant font-medium italic">
                    Trợ lý đang tối ưu theo hồ sơ ưu tiên "Cao cấp" và "Riêng
                    tư".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating UI Gradient Accents */}
        <div className="fixed top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
        <div className="fixed bottom-[-10%] left-0 w-[30vw] h-[30vw] bg-secondary-container/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
      </main>
    </div>
  );
}
