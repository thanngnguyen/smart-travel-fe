import React from "react";

const BRANDS = [
  "DU KHÁCH TOÀN CẦU",
  "FORBES DU LỊCH",
  "VOGUE HÀNH TRÌNH",
  "THỜI BÁO",
];

export default function TrustSignals() {
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center text-outline font-bold uppercase tracking-[0.3em] text-xs mb-10">
          Được giới thiệu và tin dùng bởi
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {BRANDS.map((brand, i) => (
            <span
              key={i}
              className="text-2xl font-black italic tracking-tighter"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
