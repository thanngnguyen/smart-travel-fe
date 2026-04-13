"use client";

import CheckoutStepIndicator from "@/components/customer/checkout/CheckoutStepIndicator";
import CheckoutSuccessStep from "@/components/customer/checkout/CheckoutSuccessStep";
import OrderSummaryCard from "@/components/customer/checkout/OrderSummaryCard";
import PassengerInfoStep from "@/components/customer/checkout/PassengerInfoStep";
import PaymentStep from "@/components/customer/checkout/PaymentStep";
import { useCustomerCheckout } from "@/hooks/useCustomerCheckout";

export default function CheckoutPage() {
  const { step, setStep, progressSteps, orderSummary } = useCustomerCheckout();

  return (
    <div className="pt-24 pb-20 bg-surface min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-black text-on-surface mb-8">
          Thanh toán an toàn
        </h1>

        <CheckoutStepIndicator step={step} steps={progressSteps} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {step === 1 ? (
              <PassengerInfoStep onNext={() => setStep(2)} />
            ) : null}

            {step === 2 ? (
              <PaymentStep
                onBack={() => setStep(1)}
                onConfirm={() => setStep(3)}
              />
            ) : null}

            {step === 3 ? <CheckoutSuccessStep /> : null}
          </div>

          <div className="lg:col-span-1">
            <OrderSummaryCard summary={orderSummary} />
          </div>
        </div>
      </div>
    </div>
  );
}
