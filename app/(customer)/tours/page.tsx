"use client";
import React, { useState } from "react";
import Icon from "@/components/ui/Icon";
import TourCard from "@/components/ui/TourCard";
import Button from "@/components/ui/Button";

export default function ToursListingPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Mock data inspired by the design
  const mockupTours = [
    {
      id: "swiss-alps",
      title: "Thám hiểm dãy Alps Thụy Sĩ",
      location: "Dãy Alps, châu Âu",
      price: "$4,200",
      rating: 4.8,
      reviews: 142,
      duration: "7 ngày",
      image:
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "bali-retreat",
      title: "Nghỉ dưỡng chăm sóc sức khỏe Bali",
      location: "Bali, Indonesia",
      price: "$2,850",
      rating: 4.9,
      reviews: 201,
      duration: "10 ngày",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "maldivian-solitude",
      title: "Tĩnh Lặng Maldives",
      location: "Baa Atoll, Maldives",
      price: "$5,400",
      rating: 4.9,
      reviews: 128,
      duration: "5 ngày",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCzJas8FUitu1idJS4cnCzKvZcoqIYljgIWW1mk5bDlyTG-1Tmh6XZc_A2q0JNW5kiyz5nPEB04-nK9cYR8Tw-X7CdyLwIymaEkLQKAaG_8j_0NyErwCqzoOltOCaY2bU9BqCMQSuzUAmd5E3FN6cOxtpMW5CJprnUJP6IGkftFaQAFXIYMyUoEEa_GT7MEFR5PXNni6jYmrhCKyu5uCnr0zxOqsTnilxY09ZxLQpB0k6GZnyVphogny6JSLHum7f3MDJvnbe50VGA",
    },
    {
      id: "machu-picchu",
      title: "Điểm nhấn Machu Picchu",
      location: "Andes, Peru",
      price: "$3,100",
      rating: 4.7,
      reviews: 95,
      duration: "8 ngày",
      image:
        "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "kyoto-cultural",
      title: "Khám phá di sản Kyoto",
      location: "Kyoto, Japan",
      price: "$3,500",
      rating: 4.9,
      reviews: 310,
      duration: "6 ngày",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-surface flex min-h-screen">
      {/* Mobile filter toggle */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        >
          <Icon name="tune" />
        </button>
      </div>

      {/* Multi-faceted Sidebar Filter */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 transform ${isFilterOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300 ease-in-out lg:relative lg:block w-80 h-[calc(100vh-6rem)] lg:sticky lg:top-28 overflow-y-auto bg-surface-container-lowest lg:bg-transparent lg:pl-8 px-6 py-6 shadow-[20px_0_40px_rgba(0,0,0,0.1)] lg:shadow-none no-scrollbar`}
      >
        <div className="flex justify-between items-center lg:hidden mb-8">
          <h3 className="font-extrabold text-xl tracking-tight text-on-surface">
            Bộ lọc
          </h3>
          <button
            onClick={() => setIsFilterOpen(false)}
            className="p-2 bg-surface-container rounded-full text-on-surface-variant hover:bg-surface-container-highest transition-colors"
          >
            <Icon name="close" />
          </button>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-extrabold text-lg mb-6 hidden lg:block tracking-tight text-on-surface">
              Tinh chỉnh lựa chọn
            </h3>
            <div className="space-y-6">
              <div className="group">
                <label className="text-xs font-bold text-outline-variant uppercase tracking-widest mb-2 block group-focus-within:text-primary transition-colors">
                  Điểm đến / Từ khóa
                </label>
                <div className="relative">
                  <Icon
                    name="location_on"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant text-sm transition-colors group-focus-within:text-primary"
                  />
                  <input
                    type="text"
                    placeholder="VD: Alps, Thiền..."
                    className="w-full pl-10 pr-4 py-3.5 bg-surface-container-lowest border border-outline-variant/40 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-outline-variant/60 font-medium text-on-surface"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-outline-variant uppercase tracking-widest mb-4 block">
                  Khoảng giá ($)
                </label>
                <div className="px-2 pt-2">
                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="100"
                    defaultValue="5000"
                    className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between mt-3 text-xs font-bold uppercase tracking-wider text-outline">
                    <span>$500</span>
                    <span>$10,000</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-outline-variant uppercase tracking-widest mb-3 block">
                  Thời lượng
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button className="px-3 py-2.5 text-xs font-bold rounded-xl bg-primary/10 text-primary border border-primary/20 transition-all shadow-sm">
                    1-5 ngày
                  </button>
                  <button className="px-3 py-2.5 text-xs font-bold rounded-xl bg-surface-container-lowest text-outline border border-outline-variant/40 hover:border-primary/40 hover:text-primary transition-all">
                    6-10 ngày
                  </button>
                  <button className="px-3 py-2.5 text-xs font-bold rounded-xl bg-surface-container-lowest text-outline border border-outline-variant/40 hover:border-primary/40 hover:text-primary transition-all">
                    11-15 ngày
                  </button>
                  <button className="px-3 py-2.5 text-xs font-bold rounded-xl bg-surface-container-lowest text-outline border border-outline-variant/40 hover:border-primary/40 hover:text-primary transition-all">
                    15+ ngày
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-outline-variant uppercase tracking-widest mb-3 block">
                  Mức độ trải nghiệm
                </label>
                <div className="space-y-3 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/40">
                  {["Thư thái", "Vừa phải", "Thử thách"].map((diff, i) => (
                    <label
                      key={i}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div className="relative flex items-center justify-center">
                        <input
                          type="checkbox"
                          defaultChecked={i === 1}
                          className="w-5 h-5 rounded-md border-2 border-outline-variant/60 text-primary focus:ring-primary focus:ring-offset-2 cursor-pointer accent-primary appearance-none checked:bg-primary checked:border-transparent transition-all peer"
                        />
                        <Icon
                          name="check"
                          className="absolute text-white text-xs opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"
                        />
                      </div>
                      <span className="text-sm font-bold text-outline group-hover:text-on-surface peer-checked:text-on-surface transition-colors">
                        {diff}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AI Concierge Banner inside Filter */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden mt-8 shadow-[0_20px_40px_rgba(40,90,185,0.2)]">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3 text-primary-fixed-dim/80">
                <Icon name="auto_awesome" filled className="text-sm" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Vận hành bởi AI
                </span>
              </div>
              <h4 className="font-black mb-2 text-xl tracking-tight">
                Cần lịch trình cá nhân hóa?
              </h4>
              <p className="text-sm text-white/90 mb-5 leading-relaxed font-medium">
                Hãy để trợ lý AI xây dựng lịch trình tối ưu theo đúng sở thích
                của bạn.
              </p>
              <button className="w-full py-3 bg-white text-primary rounded-xl text-sm font-bold hover:bg-surface-container transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
                Hỏi trợ lý <Icon name="arrow_forward" className="text-sm" />
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10 transform -rotate-12 mix-blend-overlay">
              <Icon name="smart_toy" filled className="text-9xl" />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <section className="flex-1 px-4 lg:px-8 xl:pr-12 w-full max-w-[1200px]">
        {/* Header & Active Filters */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-outline-variant/30">
          <div>
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-outline mb-3">
              <span>Trang chủ</span>
              <Icon name="chevron_right" className="text-sm" />
              <span className="text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                Khám phá tour
              </span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface">
              Hành trình tuyển chọn
            </h1>
            <p className="text-outline mt-3 font-medium text-lg">
              Hiển thị{" "}
              <strong className="text-on-surface">
                {mockupTours.length} kết quả cao cấp
              </strong>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold text-outline uppercase tracking-wider hidden sm:inline-block">
              Sắp xếp theo:
            </span>
            <div className="relative">
              <select className="appearance-none bg-surface-container-lowest border border-outline-variant/40 rounded-full px-5 py-2.5 pr-10 text-sm font-bold text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm hover:border-outline-variant/80 transition-colors cursor-pointer relative z-10 bg-transparent">
                <option>Đánh giá cao trước</option>
                <option>Giá: thấp đến cao</option>
                <option>Giá: cao đến thấp</option>
                <option>Thời lượng: ngắn nhất</option>
              </select>
              <Icon
                name="expand_more"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none z-0"
              />
            </div>
          </div>
        </div>

        {/* Tour Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {mockupTours.map((tour, index) => (
            <div
              key={index}
              className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <TourCard
                id={tour.id}
                title={tour.title}
                price={tour.price}
                rating={tour.rating}
                duration={tour.duration}
                image={tour.image}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 mb-8 flex justify-center">
          <Button
            variant="secondary"
            size="lg"
            className="border-outline-variant/40 bg-surface-container-lowest hover:bg-surface-container shadow-sm px-10"
          >
            <Icon name="refresh" className="mr-2" /> Tải thêm hành trình
          </Button>
        </div>
      </section>

      {/* Backdrop for mobile active filter */}
      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-on-surface/20 backdrop-blur-sm z-30 lg:hidden opacity-100 transition-opacity"
          onClick={() => setIsFilterOpen(false)}
        />
      )}
    </div>
  );
}
