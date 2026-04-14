import Icon from "@/components/ui/Icon";
import PillBadge from "@/components/ui/PillBadge";
import SurfaceCard from "@/components/ui/SurfaceCard";
import {
  CheckoutAddOnItem,
  CheckoutOrderSummary,
  CheckoutTripOverview,
} from "@/types/customer-checkout";
import { formatCurrency } from "@/utils/formatters";

interface OrderSummaryCardProps {
  summary: CheckoutOrderSummary;
  tripOverview: CheckoutTripOverview;
  selectedAddOns: CheckoutAddOnItem[];
}

export default function OrderSummaryCard({
  summary,
  tripOverview,
  selectedAddOns,
}: OrderSummaryCardProps) {
  return (
    <SurfaceCard
      tone="white"
      border="soft"
      shadow="elevated"
      radius="2xl"
      className="p-6 md:p-8 sticky top-24"
    >
      <h3 className="text-lg font-headline font-bold text-on-surface mb-6 pb-4 border-b border-outline-variant/10">
        Tóm tắt đơn hàng
      </h3>

      <div className="mb-7 p-4 bg-surface-container-low rounded-xl">
        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-tighter mb-3">
          <Icon name="flight_takeoff" className="text-[16px]" />
          {tripOverview.tripType} · {tripOverview.cabinClass}
        </div>

        <div className="flex justify-between items-center mb-1">
          <span className="font-headline font-extrabold text-lg">
            {tripOverview.routeFromCode}
          </span>

          <div className="flex-1 flex flex-col items-center px-4">
            <div className="w-full h-0.5 bg-outline-variant/30 relative">
              <div className="absolute -top-0.75 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary"></div>
            </div>
            <span className="text-[10px] text-on-surface-variant mt-1 font-medium">
              {tripOverview.duration}
            </span>
          </div>

          <span className="font-headline font-extrabold text-lg">
            {tripOverview.routeToCode}
          </span>
        </div>

        <div className="flex justify-between text-xs text-on-surface-variant font-medium">
          <span>{tripOverview.routeFromCity}</span>
          <span>{tripOverview.routeToCity}</span>
        </div>
      </div>

      <div className="space-y-4 mb-7">
        <div className="flex justify-between text-sm">
          <span className="text-on-surface-variant">Giá vé (2 người lớn)</span>
          <span className="font-semibold text-on-surface">
            {formatCurrency(summary.baseFare)}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-on-surface-variant">Thuế & phí</span>
          <span className="font-semibold text-on-surface">
            {formatCurrency(summary.taxesAndFees)}
          </span>
        </div>

        {selectedAddOns.map((addOn) => (
          <div key={addOn.id} className="flex justify-between text-sm">
            <div className="flex flex-col">
              <span className="text-on-surface-variant">{addOn.label}</span>
              {addOn.tag ? (
                <span className="text-[10px] text-primary font-bold uppercase">
                  {addOn.tag}
                </span>
              ) : null}
            </div>
            <span className="font-semibold text-on-surface">
              {formatCurrency(addOn.price)}
            </span>
          </div>
        ))}
      </div>

      <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 mb-7 flex items-center gap-3">
        <Icon name="stars" className="text-primary" filled />
        <div>
          <p className="text-xs font-bold text-primary uppercase">
            Điểm thưởng
          </p>
          <p className="text-sm font-bold text-on-primary-fixed">
            {summary.pointsEarned}
          </p>
        </div>
      </div>

      <div className="pt-5 border-t border-outline-variant/10">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-headline font-bold text-on-surface">
            Tổng cộng
          </span>
          <span className="text-2xl font-headline font-extrabold text-primary">
            {formatCurrency(summary.grandTotal)}
          </span>
        </div>
        <p className="text-[10px] text-on-surface-variant text-right italic font-medium">
          {summary.localCurrencyEstimate}
        </p>
      </div>

      <div className="mt-7 pt-5 border-t border-outline-variant/10 grid grid-cols-3 gap-3">
        <div className="flex flex-col items-center text-center gap-2">
          <Icon name="shield" className="text-on-surface-variant text-[20px]" />
          <span className="text-[9px] font-bold text-on-surface-variant uppercase leading-none">
            Bảo hiểm
          </span>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <Icon
            name="verified"
            className="text-on-surface-variant text-[20px]"
          />
          <span className="text-[9px] font-bold text-on-surface-variant uppercase leading-none">
            IATA
          </span>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <Icon
            name="support_agent"
            className="text-on-surface-variant text-[20px]"
          />
          <span className="text-[9px] font-bold text-on-surface-variant uppercase leading-none">
            24/7
          </span>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <PillBadge tone="primary-soft" size="xs" uppercase>
          {summary.title}
        </PillBadge>
        <PillBadge tone="surface" size="xs" uppercase>
          {summary.dateRange}
        </PillBadge>
        <PillBadge tone="surface-glass" size="xs" uppercase>
          {summary.passengersLabel}
        </PillBadge>
      </div>
    </SurfaceCard>
  );
}
