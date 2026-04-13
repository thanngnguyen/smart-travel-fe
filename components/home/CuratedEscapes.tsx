import React from "react";
import Icon from "@/components/ui/Icon";
import TourCard from "@/components/ui/TourCard";

const TOURS = [
  {
    title: "Tĩnh Lặng Maldives",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzJas8FUitu1idJS4cnCzKvZcoqIYljgIWW1mk5bDlyTG-1Tmh6XZc_A2q0JNW5kiyz5nPEB04-nK9cYR8Tw-X7CdyLwIymaEkLQKAaG_8j_0NyErwCqzoOltOCaY2bU9BqCMQSuzUAmd5E3FN6cOxtpMW5CJprnUJP6IGkftFaQAFXIYMyUoEEa_GT7MEFR5PXNni6jYmrhCKyu5uCnr0zxOqsTnilxY09ZxLQpB0k6GZnyVphogny6JSLHum7f3MDJvnbe50VGA",
    description:
      "Trải nghiệm đảo riêng tư với nhà hàng dưới biển và hành trình nghỉ dưỡng chăm sóc sức khỏe cá nhân hóa.",
    seatsLeft: 2,
    rating: 4.5,
    featured: true,
    size: "large" as const,
  },
  {
    title: "Kyoto Tĩnh Tại",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCT1xthafm-pjldthhOzF_aT8QFlhnWKurjZm4XRGnmkZ9vvNRRBQJmJTRyflHkncMZ7uKerv_XMgJLRnbdxpYykx9meqt19mSj9SDj1wFYpw4xVih0ZCpYQfJSKkOXWPhgeOuNzd2TaRg5BONDevzxnv28uchVqLRXU2qCwSExq7YJckXobUDnYlND1bJoAgGubD7ULlLyx6BmflHAvrDxSgMiEqJOK78yTvLfUutZBlVe48NfWHjeNuxpkhGNapw_R9GyqiCOVlk",
    rating: 4.9,
    duration: "7 ngày / 6 đêm",
    price: "$3,450",
    size: "small" as const,
  },
  {
    title: "Nghỉ Dưỡng Alps Thụy Sĩ",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMXJBn3FWl3PJSCm13Ap-pHtCscYfnaYi9KeMdxORMM_UjhkbNPMiaRPyLLW0laGHPTMOsmLC7eEuSV4ZrZB5SCHPAoW0y4ZivNbtqxXmvqvqzzH7KYmQ37RTIkRfKZMSP1NMtzFUjftRtbvOnxHObeQ7gi7tWVfBKtjze0Jd5mSLiip5dI6VTlE7ofG6vwKDUgxdxBm5bT0oECYktkK8uolWe3kHQAomqcaqe5nhBlzYWt2TkF-YyFga7plPwqCkVCq3OWHAg1wE",
    rating: 5.0,
    duration: "5 ngày / 4 đêm",
    price: "$4,120",
    size: "small" as const,
  },
];

export default function CuratedEscapes() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-4">
              Hành Trình Tuyển Chọn
            </h2>
            <p className="text-on-surface-variant text-lg">
              Các chuyến đi được tuyển chọn bởi trợ lý AI và đội ngũ chuyên gia
              du lịch.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
            Xem tất cả tour <Icon name="arrow_forward" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main feature Card */}
          <TourCard {...TOURS[0]} />

          {/* Small feature Cards */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <TourCard {...TOURS[1]} />
            <TourCard {...TOURS[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}
