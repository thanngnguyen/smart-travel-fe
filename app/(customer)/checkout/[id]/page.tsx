"use client";

import AddOnsStep from "@/components/customer/checkout/AddOnsStep";
import CheckoutFlowFooter from "@/components/customer/checkout/CheckoutFlowFooter";
import CheckoutFlowHeader from "@/components/customer/checkout/CheckoutFlowHeader";
import CheckoutStepIndicator from "@/components/customer/checkout/CheckoutStepIndicator";
import CheckoutSuccessStep from "@/components/customer/checkout/CheckoutSuccessStep";
import OrderSummaryCard from "@/components/customer/checkout/OrderSummaryCard";
import PassengerInfoStep from "@/components/customer/checkout/PassengerInfoStep";
import PaymentStep from "@/components/customer/checkout/PaymentStep";
import SurfaceCard from "@/components/ui/SurfaceCard";
import { useCustomerCheckout } from "@/hooks/useCustomerCheckout";
import { useParams } from "next/navigation";

export default function CheckoutPage() {
  const params = useParams<{ id: string | string[] }>();
  const bookingId = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const {
    step,
    progressSteps,
    tripOverview,
    paymentMethodOptions,
    passengerInfo,
    addOns,
    selectedAddOns,
    paymentMethod,
    paymentForm,
    isTermsAccepted,
    isCompleted,
    flashMessage,
    orderSummary,
    bookingCode,
    chatGroupId,
    seatProtectionTime,
    seatProtectionProgressPercent,
    isSeatProtectionExpired,
    updatePassengerField,
    toggleAddOn,
    updatePaymentField,
    setPaymentMethod,
    setIsTermsAccepted,
    goToStep,
    goNextStep,
    goBackStep,
    confirmBooking,
    restartCheckout,
  } = useCustomerCheckout(bookingId);

  return (
    <div className="bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      <CheckoutFlowHeader />

      <main className="pt-24 pb-20 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-12 gap-8 lg:gap-12">
        <div className="col-span-12 lg:col-span-8">
          <CheckoutStepIndicator
            step={step}
            steps={progressSteps}
            onStepSelect={goToStep}
          />

          {flashMessage ? (
            <SurfaceCard
              tone={flashMessage.tone === "error" ? "tertiary" : "surface-high"}
              radius="2xl"
              className="p-4 mb-6"
            >
              <p className="text-sm font-semibold">{flashMessage.text}</p>
            </SurfaceCard>
          ) : null}

          {isCompleted ? (
            <CheckoutSuccessStep
              bookingCode={bookingCode}
              chatGroupId={chatGroupId}
              onCreateNewBooking={restartCheckout}
            />
          ) : null}

          {!isCompleted && step === 1 ? (
            <PassengerInfoStep
              passengerInfo={passengerInfo}
              onFieldChange={updatePassengerField}
              onNext={goNextStep}
              errorMessage={
                flashMessage?.tone === "error" ? flashMessage.text : null
              }
            />
          ) : null}

          {!isCompleted && step === 2 ? (
            <AddOnsStep
              addOns={addOns}
              selectedAddOnTotal={orderSummary.selectedAddOnsTotal}
              onToggleAddOn={toggleAddOn}
              onBack={goBackStep}
              onNext={goNextStep}
            />
          ) : null}

          {!isCompleted && step === 3 ? (
            <PaymentStep
              passengerInfo={passengerInfo}
              paymentMethod={paymentMethod}
              paymentOptions={paymentMethodOptions}
              paymentForm={paymentForm}
              isTermsAccepted={isTermsAccepted}
              seatProtectionTime={seatProtectionTime}
              seatProtectionProgressPercent={seatProtectionProgressPercent}
              isSeatProtectionExpired={isSeatProtectionExpired}
              orderSummary={orderSummary}
              tripOverview={tripOverview}
              errorMessage={
                flashMessage?.tone === "error" ? flashMessage.text : null
              }
              onBack={goBackStep}
              onPaymentMethodChange={setPaymentMethod}
              onPaymentFieldChange={updatePaymentField}
              onTermsChange={setIsTermsAccepted}
              onConfirm={confirmBooking}
            />
          ) : null}
        </div>

        <aside className="col-span-12 lg:col-span-4">
          <OrderSummaryCard
            summary={orderSummary}
            tripOverview={tripOverview}
            selectedAddOns={selectedAddOns}
          />
        </aside>
      </main>

      <CheckoutFlowFooter />
    </div>
  );
}
