import React from "react";
import SearchBar from "@/components/ui/SearchBar";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-primary">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-60"
          alt="Cinematic wide angle view of a sleek passenger jet flying through soft ethereal white clouds at sunset"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJemsNMvicFYo3odDpPw9Ta5Bhr0bLYHUeSHHGT6t-SJcVfCxaqVjKi_n1Rg1SklC83eLs-vgittYjj1MohSSKpJfknm_Ug1QArEOImRy_daSNlZWGE-pczMuxL_5OeVV5NMkgGwpsh8bE1aoRjLOYPgVvYPn0qUIAV0wFdv5aRLq_N4QGyyO7yCG0GZu3vMyPwCIhFZePDryTVrZqKCw5qhpaXzZM4UNniDME_XidfE0Yq1lUZIPMCKBbksbjVt0AyOLXsyPmRTA"
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary/30 via-transparent to-surface" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-white text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-tight">
          Vượt qua <br />{" "}
          <span className="text-secondary-fixed">mọi giới hạn</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Trải nghiệm tương lai của quản lý du lịch với hành trình được điều
          phối, trải nghiệm được tuyển chọn và vận hành thông minh trong tầm
          tay.
        </p>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6 z-20">
        <SearchBar />
      </div>
    </section>
  );
}
