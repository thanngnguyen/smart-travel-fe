import Icon from "@/components/ui/Icon";
import { CheckoutProgressStep, CheckoutStep } from "@/types/customer-checkout";

interface CheckoutStepIndicatorProps {
  step: CheckoutStep;
  steps: CheckoutProgressStep[];
  onStepSelect: (targetStep: CheckoutStep) => void;
}

export default function CheckoutStepIndicator({
  step,
  steps,
  onStepSelect,
}: CheckoutStepIndicatorProps) {
  return (
    <div className="mb-12 border-b border-outline-variant/20">
      <div className="flex flex-wrap items-center gap-4 md:gap-8">
        {steps.map((item) => {
          const isActive = step === item.id;
          const isCompleted = step > item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onStepSelect(item.id)}
              className={`pb-4 flex items-center gap-2 transition-all ${
                isActive
                  ? "text-primary font-bold border-b-2 border-primary"
                  : isCompleted
                    ? "text-on-surface font-semibold"
                    : "text-on-surface-variant opacity-50"
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full text-[12px] flex items-center justify-center font-bold ${
                  isActive
                    ? "bg-primary text-on-primary"
                    : isCompleted
                      ? "bg-primary-fixed text-on-primary-fixed"
                      : "bg-outline-variant text-on-primary"
                }`}
              >
                {item.id}
              </span>
              <span className="font-headline text-sm md:text-base">
                {item.label}
              </span>
            </button>
          );
        })}

        {step === 3 ? (
          <div className="pb-4 ml-auto hidden md:flex items-center gap-2 text-primary">
            <Icon name="shield_lock" className="text-xl" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Thanh toán bảo mật
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
