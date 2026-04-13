import Icon from "@/components/ui/Icon";
import SurfaceCard from "@/components/ui/SurfaceCard";

export default function PeakSeasonAlertCard() {
  return (
    <SurfaceCard tone="tertiary" radius="3xl" className="p-6 space-y-4">
      <div className="flex items-center gap-2">
        <Icon name="warning" filled className="text-on-tertiary-container" />
        <h4 className="font-headline font-bold">Gợi ý AI: Mùa cao điểm</h4>
      </div>
      <p className="text-sm font-medium leading-relaxed opacity-90">
        Từ 12-18 tháng 11 là giai đoạn cao điểm mùa lá thu. Tôi khuyên bạn nên
        đặt tất cả tour riêng trong <strong>48 giờ</strong> tới vì tỷ lệ còn chỗ
        chỉ còn 12%.
      </p>
    </SurfaceCard>
  );
}
