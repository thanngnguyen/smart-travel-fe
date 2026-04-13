import Image from "next/image";
import SurfaceCard from "@/components/ui/SurfaceCard";

export default function SmartMapCard() {
  return (
    <SurfaceCard
      tone="white"
      shadow="elevated"
      radius="3xl"
      className="p-4 h-64 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-slate-200">
        <Image
          alt="Bản đồ điểm đến Kyoto"
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWC0XU1KeAknS3tS_3lvqDd3T5AvjcMIuj5KgGPl2dUa5qL_OHU98Q21XzZN9fTRyTeOW1LPUQggdwatiNsfx4PfJ-mprNhrV0oVPFCjL2tpbHLrwhDGvG2Uar--FcKL5pZpRrq1UwRriLdM_ebbb-Lol3QxZeYjQ_uiLK1S8znGRwDLChnk2yHxjaH3_UQd921OD-g6xwXeSUwSxTtkkGI9RZgTwjZQBFk5YsRDGlySq5aNC6ORhFSStB0EC7R4kSnuNKXJq9sCw"
        />
      </div>
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-2 rounded-xl text-[10px] font-bold text-primary shadow-sm tracking-wider">
        ĐIỂM ĐẾN: KYOTO, NHẬT BẢN
      </div>
    </SurfaceCard>
  );
}
