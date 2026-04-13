import React from "react";
import Icon from "@/components/ui/Icon";

export default function IntelligentItineraries() {
  return (
    <section className="py-24 bg-surface-container">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-container/10 mb-8">
          <Icon name="travel_explore" className="text-primary text-4xl" />
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-8">
          Lịch Trình Thông Minh
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-16">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-primary">
              Lập Kế Hoạch Linh Hoạt
            </h4>
            <p className="text-on-surface-variant leading-relaxed">
              AI của chúng tôi tự động điều chỉnh lịch trình theo thời tiết địa
              phương, mật độ đám đông và mức độ mệt mỏi cá nhân theo thời gian
              thực.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-primary">Vận Hành Mượt Mà</h4>
            <p className="text-on-surface-variant leading-relaxed">
              Từ chuyến bay riêng đến phương tiện địa phương, mọi chặng chuyển
              tiếp đều được tự động hóa và đồng bộ trong cổng thông tin của bạn.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-primary">Ưu Tiên Truy Cập</h4>
            <p className="text-on-surface-variant leading-relaxed">
              Bỏ qua hàng chờ tại các địa danh nổi tiếng với khóa số STMS, được
              xác thực sẵn cho từng điểm đến.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
