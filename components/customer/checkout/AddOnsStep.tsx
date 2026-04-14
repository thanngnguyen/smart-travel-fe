import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import SurfaceCard from "@/components/ui/SurfaceCard";
import { CheckoutAddOnItem } from "@/types/customer-checkout";
import { formatCurrency } from "@/utils/formatters";

interface AddOnsStepProps {
  addOns: CheckoutAddOnItem[];
  selectedAddOnTotal: number;
  onToggleAddOn: (addOnId: string) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function AddOnsStep({
  addOns,
  selectedAddOnTotal,
  onToggleAddOn,
  onBack,
  onNext,
}: AddOnsStepProps) {
  return (
    <SurfaceCard
      tone="white"
      border="soft"
      shadow="elevated"
      radius="3xl"
      className="p-6 md:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
        <div>
          <h2 className="text-2xl font-black text-on-surface mb-1">
            Add-ons cá nhân hóa
          </h2>
          <p className="text-sm text-on-surface-variant">
            Tối ưu trải nghiệm bằng các dịch vụ mở rộng được đề xuất bởi STMS
            Concierge.
          </p>
        </div>
        <div className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-bold uppercase tracking-wider">
          Bước 2/3
        </div>
      </div>

      <div className="space-y-3">
        {addOns.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onToggleAddOn(item.id)}
            className={`w-full rounded-2xl p-4 text-left transition-all ${
              item.selected
                ? "bg-primary/10 shadow-[0_20px_40px_rgba(25,28,30,0.06)]"
                : "bg-surface-container-low hover:bg-surface-container"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-black text-on-surface">{item.label}</p>
                <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                  {item.description}
                </p>
                {item.tag ? (
                  <span className="inline-flex mt-3 px-2.5 py-1 rounded-lg bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold uppercase tracking-wide">
                    {item.tag}
                  </span>
                ) : null}
              </div>

              <div className="text-right">
                <p className="font-black text-primary">
                  {formatCurrency(item.price)}
                </p>
                <div
                  className={`mt-2 w-6 h-6 rounded-full flex items-center justify-center ${
                    item.selected
                      ? "bg-primary text-on-primary"
                      : "bg-outline-variant/30 text-on-surface-variant"
                  }`}
                >
                  <Icon name="check" className="text-[16px]" />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-surface-container-low p-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-outline">
            Tổng add-ons đã chọn
          </p>
          <p className="text-xl font-black text-on-surface mt-1">
            {formatCurrency(selectedAddOnTotal)}
          </p>
        </div>
        <Icon name="auto_awesome" className="text-3xl text-primary" />
      </div>

      <div className="mt-8 pt-6 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-3">
        <Button variant="outline" size="lg" onClick={onBack}>
          <Icon name="arrow_back" className="mr-2 text-base" />
          Quay lại thông tin hành khách
        </Button>

        <Button
          variant="primary"
          size="lg"
          onClick={onNext}
          className="bg-linear-to-r from-primary to-primary-container"
        >
          Tiếp tục đến thanh toán
          <Icon name="arrow_forward" className="ml-2 text-base" />
        </Button>
      </div>
    </SurfaceCard>
  );
}
