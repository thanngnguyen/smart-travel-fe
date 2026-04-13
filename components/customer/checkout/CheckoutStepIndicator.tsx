import Icon from "@/components/ui/Icon";
import { CheckoutProgressStep, CheckoutStep } from "@/types/customer-checkout";

interface CheckoutStepIndicatorProps {
  step: CheckoutStep;
  steps: CheckoutProgressStep[];
}

export default function CheckoutStepIndicator({
  step,
  steps,
}: CheckoutStepIndicatorProps) {
  const progressWidth = step === 1 ? "50%" : "100%";

  return (
    <div className="flex justify-between items-center mb-12 relative w-full lg:w-2/3">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-1 bg-outline-variant/30 rounded-full z-0"></div>
      <div
        className="absolute top-1/2 -translate-y-1/2 left-0 h-1 bg-primary rounded-full z-0 transition-all duration-500"
        style={{ width: progressWidth }}
      ></div>

      {steps.map((item) => (
        <div
          key={item.id}
          className={`relative z-10 flex flex-col items-center gap-2 transition-opacity ${step >= item.id ? "opacity-100" : "opacity-50"}`}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg transition-colors duration-500 ${step >= item.id ? "bg-primary text-white" : "bg-surface-container-highest text-on-surface-variant"}`}
          >
            {item.id}
          </div>
          <span className="text-sm font-bold text-on-surface">
            {item.label}
          </span>
        </div>
      ))}

      {step === 3 ? (
        <div className="absolute right-[-3.5rem] top-1/2 -translate-y-1/2 text-primary hidden lg:block">
          <Icon name="check_circle" filled className="text-2xl" />
        </div>
      ) : null}
    </div>
  );
}
