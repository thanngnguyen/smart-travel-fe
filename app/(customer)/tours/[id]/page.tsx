import React from "react";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function TourDetailsPage() {
  return (
    <div className="pt-24 pb-20 bg-surface">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-primary-container/20 text-on-secondary-container px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                Nghỉ dưỡng cao cấp
              </span>
              <div className="flex items-center gap-1 text-yellow-500 text-sm font-bold">
                <Icon name="star" filled className="text-sm" />
                4.9 (128 đánh giá)
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-on-surface tracking-tight">
              Tĩnh Lặng Maldives
            </h1>
            <p className="flex items-center text-outline mt-3">
              <Icon name="location_on" className="text-lg mr-1" />
              Baa Atoll, Maldives
            </p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center justify-center p-3 rounded-xl border border-outline-variant hover:bg-surface-container transition-colors">
              <Icon name="favorite" />
            </button>
            <button className="flex items-center justify-center p-3 rounded-xl border border-outline-variant hover:bg-surface-container transition-colors">
              <Icon name="share" />
            </button>
          </div>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden mt-6">
          <div className="md:col-span-2 relative group h-full">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzJas8FUitu1idJS4cnCzKvZcoqIYljgIWW1mk5bDlyTG-1Tmh6XZc_A2q0JNW5kiyz5nPEB04-nK9cYR8Tw-X7CdyLwIymaEkLQKAaG_8j_0NyErwCqzoOltOCaY2bU9BqCMQSuzUAmd5E3FN6cOxtpMW5CJprnUJP6IGkftFaQAFXIYMyUoEEa_GT7MEFR5PXNni6jYmrhCKyu5uCnr0zxOqsTnilxY09ZxLQpB0k6GZnyVphogny6JSLHum7f3MDJvnbe50VGA"
              alt="Main"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="hidden md:flex flex-col gap-4 h-full">
            <div className="flex-1 relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&w=800&q=80"
                alt="Resort"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex-1 relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80"
                alt="Villa"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-4 h-full">
            <div className="flex-1 relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80"
                alt="Food"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex-1 relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1596395819057-e37f55a8516d?auto=format&fit=crop&w=800&q=80"
                alt="Activity"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/30 transition-colors">
                <span className="text-white font-bold tracking-wider">
                  Xem tất cả 24 ảnh
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-on-surface mb-4">
              Về hành trình này
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              Tạm rời nhịp sống thường nhật và đắm mình trong trải nghiệm đảo
              riêng tư đẳng cấp. Trợ lý AI sẽ cân bằng lịch trình giữa khám phá
              đại dương, nghỉ dưỡng chăm sóc sức khỏe và ẩm thực cao cấp dưới
              mặt biển.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-on-surface mb-6">
              Điểm nổi bật
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Ẩm thực dưới biển",
                  icon: "restaurant",
                  desc: "Thưởng thức ẩm thực 5 sao giữa không gian sinh vật biển.",
                },
                {
                  title: "Quản gia riêng",
                  icon: "person",
                  desc: "Dịch vụ chuyên biệt 24/7 theo đúng nhu cầu của bạn.",
                },
                {
                  title: "Spa & Chăm sóc sức khỏe",
                  icon: "spa",
                  desc: "Liệu trình trị liệu đặc trưng mỗi ngày tại spa trên mặt nước.",
                },
                {
                  title: "Safari đại dương",
                  icon: "sailing",
                  desc: "Hành trình riêng có hướng dẫn cùng chuyên gia sinh vật biển.",
                },
              ].map((hl, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start p-4 rounded-2xl bg-surface-container-highest/30"
                >
                  <div className="bg-white p-3 rounded-xl shadow-sm text-primary">
                    <Icon name={hl.icon} />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">
                      {hl.title}
                    </h4>
                    <p className="text-sm text-on-surface-variant">{hl.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-on-surface mb-6">
              Lịch trình linh hoạt
            </h2>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outline-variant before:to-transparent">
              {/* Timeline Items */}
              {[
                "Đến nơi & chào mừng",
                "Khám phá cá đuối manta",
                "Nghỉ dưỡng chăm sóc sức khỏe",
                "Khởi hành",
              ].map((day, ix) => (
                <div
                  key={ix}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white shadow font-bold z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                    {ix + 1}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-sm border border-slate-100 group-hover:-translate-y-1 transition-transform">
                    <h4 className="font-bold text-lg text-primary mb-2">
                      Ngày {ix + 1}: {day}
                    </h4>
                    <p className="text-on-surface-variant text-sm">
                      STMS AI sẽ tự động sắp xếp lại hoạt động theo điều kiện
                      thời tiết để đảm bảo trải nghiệm tốt nhất mà không cần
                      thao tác thủ công.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sticky Booking Widget */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_40px_rgba(25,28,30,0.06)] border border-slate-100">
            <div className="flex justify-between items-end mb-6 pb-6 border-b border-outline-variant/30">
              <div>
                <p className="text-outline text-sm font-bold uppercase tracking-wider mb-1">
                  Giá từ
                </p>
                <div className="flex items-baseline gap-1">
                  <h2 className="text-4xl font-black text-on-surface">
                    $5,400
                  </h2>
                  <span className="text-on-surface-variant font-medium">
                    / người
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center p-4 border border-outline-variant/40 rounded-xl cursor-pointer hover:border-primary transition-colors">
                <div>
                  <p className="text-xs text-outline font-bold uppercase mb-1">
                    Ngày đi
                  </p>
                  <p className="text-sm text-on-surface font-bold">
                    12 Th10 - 17 Th10
                  </p>
                </div>
                <Icon name="calendar_month" className="text-primary" />
              </div>
              <div className="flex justify-between items-center p-4 border border-outline-variant/40 rounded-xl cursor-pointer hover:border-primary transition-colors">
                <div>
                  <p className="text-xs text-outline font-bold uppercase mb-1">
                    Hành khách
                  </p>
                  <p className="text-sm text-on-surface font-bold">
                    2 người lớn, 0 trẻ em
                  </p>
                </div>
                <Icon name="person" className="text-primary" />
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl mb-6 text-primary text-sm font-medium">
              <Icon name="info" />
              Có tùy chọn đặt trước, thanh toán sau trong bước thanh toán.
            </div>

            <Link
              href="/checkout/maldivian-solitude"
              className="w-full inline-block"
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full text-lg shadow-xl shadow-primary/20"
              >
                Giữ chỗ ngay
              </Button>
            </Link>

            <p className="text-center text-xs text-outline mt-4 font-medium">
              Không bị trừ phí cho đến khi xác nhận.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
