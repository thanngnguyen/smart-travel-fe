import Image from "next/image";
import { ProfileHeroData } from "@/types/customer-profile";

interface ProfileHeroSectionProps {
  hero: ProfileHeroData;
}

export default function ProfileHeroSection({ hero }: ProfileHeroSectionProps) {
  const headingLines = hero.heading.split("\n");
  const [distanceValue, distanceUnit = "KM"] = hero.distanceLabel.split(" ");

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
      <div className="md:col-span-8 flex flex-col justify-center">
        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4">
          {hero.memberLabel}
        </span>
        <h1 className="text-5xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
          {headingLines.map((line, index) => (
            <span key={`${line}-${index}`}>
              {line}
              {index < headingLines.length - 1 ? <br /> : null}
            </span>
          ))}
        </h1>
        <p className="text-on-surface-variant text-lg max-w-xl mb-8 leading-relaxed">
          {hero.description}
        </p>
        <div className="flex gap-4">
          <button className="bg-linear-to-r from-primary to-primary-container text-white px-8 py-4 rounded-3xl font-bold shadow-lg scale-95 active:scale-90 transition-transform">
            Chỉnh sửa hồ sơ
          </button>
          <button className="bg-white text-on-surface px-8 py-4 rounded-3xl font-bold shadow-sm border border-outline-variant/20 hover:bg-surface-container-low transition-all">
            Cài đặt tài khoản
          </button>
        </div>
      </div>
      <div className="md:col-span-4 relative">
        <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl transform rotate-3">
          <Image
            alt={hero.imageAlt}
            className="w-full h-full object-cover"
            src={hero.imageUrl}
            width={800}
            height={800}
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-60 transform -rotate-3 border border-outline-variant/10">
          <p className="text-xs text-on-surface-variant font-medium mb-1">
            Tổng quãng đường đã đi
          </p>
          <p className="text-3xl font-black text-primary tracking-tighter">
            {distanceValue}{" "}
            <span className="text-sm font-bold">{distanceUnit}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
