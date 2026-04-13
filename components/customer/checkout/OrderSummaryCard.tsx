import Icon from "@/components/ui/Icon";
import PillBadge from "@/components/ui/PillBadge";
import SurfaceCard from "@/components/ui/SurfaceCard";
import Image from "next/image";
import { CheckoutOrderSummary } from "@/types/customer-checkout";

interface OrderSummaryCardProps {
  summary: CheckoutOrderSummary;
}

export default function OrderSummaryCard({ summary }: OrderSummaryCardProps) {
  return (
    <SurfaceCard
      tone="surface-tint"
      border="outline"
      radius="3xl"
      className="p-6 md:p-8 sticky top-32"
    >
      <h3 className="text-xl font-black text-on-surface mb-6 border-b border-outline-variant/30 pb-4">
        Tóm tắt đơn hàng
      </h3>

      <div className="flex gap-4 mb-6">
        <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
          <Image
            src={summary.imageUrl}
            alt="Thumbnail"
            className="w-full h-full object-cover"
            width={96}
            height={96}
          />
        </div>
        <div>
          <h4 className="font-bold text-on-surface leading-tight mb-1">
            {summary.title}
          </h4>
          <p className="text-xs text-on-surface-variant mb-2">
            {summary.location}
          </p>
          <PillBadge tone="primary-soft" size="xs" radius="md">
            <Icon name="star" filled className="text-[10px]" /> {summary.rating}
          </PillBadge>
        </div>
      </div>

      <div className="space-y-3 text-sm text-on-surface-variant mb-6 border-b border-outline-variant/30 pb-6">
        <div className="flex justify-between">
          <span>Ngày đi</span>
          <span className="font-bold text-on-surface">{summary.dateRange}</span>
        </div>
        <div className="flex justify-between">
          <span>Hành khách</span>
          <span className="font-bold text-on-surface">
            {summary.passengers}
          </span>
        </div>
        <div className="flex justify-between mt-4">
          <span>Giá cơ bản (x2)</span>
          <span className="font-bold text-on-surface">{summary.basePrice}</span>
        </div>
        <div className="flex justify-between">
          <span>Thuế & phí</span>
          <span className="font-bold text-on-surface">{summary.fees}</span>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <span className="text-lg font-bold text-on-surface">Tổng cộng</span>
        <span className="text-3xl font-black text-primary">
          {summary.total}
        </span>
      </div>
    </SurfaceCard>
  );
}
