import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import SurfaceCard from "@/components/ui/SurfaceCard";
import { useState } from "react";
import {
  CheckoutOrderSummary,
  CheckoutPassengerInfo,
  CheckoutPaymentForm,
  CheckoutPaymentMethod,
  CheckoutPaymentMethodOption,
  CheckoutTripOverview,
} from "@/types/customer-checkout";
import { formatCurrency } from "@/utils/formatters";

interface PaymentStepProps {
  passengerInfo: CheckoutPassengerInfo;
  paymentMethod: CheckoutPaymentMethod;
  paymentOptions: CheckoutPaymentMethodOption[];
  paymentForm: CheckoutPaymentForm;
  isTermsAccepted: boolean;
  seatProtectionTime: string;
  seatProtectionProgressPercent: number;
  isSeatProtectionExpired: boolean;
  orderSummary: CheckoutOrderSummary;
  tripOverview: CheckoutTripOverview;
  errorMessage?: string | null;
  onBack: () => void;
  onPaymentMethodChange: (method: CheckoutPaymentMethod) => void;
  onPaymentFieldChange: (
    field: keyof CheckoutPaymentForm,
    value: string,
  ) => void;
  onTermsChange: (value: boolean) => void;
  onConfirm: () => void;
}

const WALLET_OPTIONS = [
  {
    id: "momo",
    label: "MoMo",
    description: "Thanh toán tức thì qua QR hoặc app",
    accentClassName: "bg-pink-100 text-pink-700",
  },
  {
    id: "zalopay",
    label: "ZaloPay",
    description: "Hỗ trợ quét mã và deep-link ứng dụng",
    accentClassName: "bg-blue-100 text-blue-700",
  },
  {
    id: "vnpay",
    label: "VNPay",
    description: "Kết nối trực tiếp ngân hàng nội địa",
    accentClassName: "bg-indigo-100 text-indigo-700",
  },
] as const;

export default function PaymentStep({
  passengerInfo,
  paymentMethod,
  paymentOptions,
  paymentForm,
  isTermsAccepted,
  seatProtectionTime,
  seatProtectionProgressPercent,
  isSeatProtectionExpired,
  orderSummary,
  tripOverview,
  errorMessage,
  onBack,
  onPaymentMethodChange,
  onPaymentFieldChange,
  onTermsChange,
  onConfirm,
}: PaymentStepProps) {
  const [selectedWallet, setSelectedWallet] =
    useState<(typeof WALLET_OPTIONS)[number]["id"]>("momo");
  const [isCopiedBankAccount, setIsCopiedBankAccount] = useState(false);

  const transferReference = `${tripOverview.routeFromCode}${tripOverview.routeToCode}-${Math.round(orderSummary.grandTotal)}`;

  const handleCopyBankAccount = async () => {
    try {
      await navigator.clipboard.writeText("0381000999248");
      setIsCopiedBankAccount(true);
      window.setTimeout(() => setIsCopiedBankAccount(false), 1600);
    } catch {
      setIsCopiedBankAccount(false);
    }
  };

  return (
    <div className="space-y-8">
      <SurfaceCard
        tone="surface"
        border="outline"
        shadow="soft"
        radius="2xl"
        className="p-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary animate-pulse">
              timer
            </span>
            <h4 className="font-headline font-bold text-on-secondary-fixed-variant">
              Giữ chỗ đang hoạt động
            </h4>
          </div>

          <span className="text-[10px] font-bold font-body text-secondary-container bg-on-secondary-container px-3 py-1 rounded-full uppercase tracking-widest">
            Kiểm tra đồng thời thời gian thực
          </span>
        </div>

        <div className="w-full h-1.5 bg-outline-variant/20 rounded-full overflow-hidden mt-4">
          <div
            className={`h-full rounded-full ${
              isSeatProtectionExpired ? "bg-error" : "bg-secondary-container"
            }`}
            style={{
              width: `${Math.max(0, Math.min(seatProtectionProgressPercent, 100))}%`,
            }}
          />
        </div>

        <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">
          Hệ thống đang khóa chỗ
          <span className="font-bold text-on-surface">
            {" "}
            {tripOverview.lockedSeats.join(" & ")}
          </span>
          . Giá được giữ trong
          <span
            className={`font-bold ${isSeatProtectionExpired ? "text-error" : "text-secondary"}`}
          >
            {" "}
            {seatProtectionTime}
          </span>
          .
        </p>
      </SurfaceCard>

      <section>
        <h3 className="text-xl font-headline font-bold text-on-surface mb-4">
          Review Passenger Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SurfaceCard
            tone="white"
            border="soft"
            shadow="soft"
            radius="2xl"
            className="p-5"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <Icon name="person" />
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Primary Traveler
                </p>
                <p className="font-headline font-bold text-on-surface">
                  {passengerInfo.primaryTraveler}
                </p>
              </div>
            </div>
          </SurfaceCard>

          <SurfaceCard
            tone="white"
            border="soft"
            shadow="soft"
            radius="2xl"
            className="p-5"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <Icon name="person_4" />
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Companion
                </p>
                <p className="font-headline font-bold text-on-surface">
                  {passengerInfo.companionTraveler}
                </p>
              </div>
            </div>
          </SurfaceCard>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-end mb-6">
          <h3 className="text-xl font-headline font-bold text-on-surface">
            Secure Payment
          </h3>
          <div className="flex gap-2 text-outline">
            <span className="material-symbols-outlined">credit_card</span>
            <span className="material-symbols-outlined">payments</span>
            <span className="material-symbols-outlined">
              account_balance_wallet
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {paymentOptions.map((option) => {
              const isSelected = paymentMethod === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => onPaymentMethodChange(option.id)}
                  className={`flex items-center justify-center gap-2 p-4 rounded-2xl transition-all ${
                    isSelected
                      ? "bg-primary/10 text-primary shadow-[0_20px_40px_rgba(25,28,30,0.06)]"
                      : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {option.icon}
                  </span>
                  <span className="font-semibold">{option.label}</span>
                </button>
              );
            })}
          </div>

          {paymentMethod === "card" ? (
            <SurfaceCard
              tone="white"
              border="outline"
              shadow="elevated"
              radius="2xl"
              className="p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <span className="material-symbols-outlined text-primary/20 text-6xl">
                  lock
                </span>
              </div>

              <div className="grid grid-cols-12 gap-4 relative z-10">
                <div className="col-span-12">
                  <label className="block text-sm font-semibold text-on-surface-variant mb-2">
                    Cardholder Name
                  </label>
                  <input
                    className="w-full bg-surface-container-low rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/30 text-on-surface"
                    type="text"
                    value={paymentForm.cardholderName}
                    onChange={(event) =>
                      onPaymentFieldChange("cardholderName", event.target.value)
                    }
                  />
                </div>

                <div className="col-span-12">
                  <label className="block text-sm font-semibold text-on-surface-variant mb-2">
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      className="w-full bg-surface-container-low rounded-xl px-4 py-3 text-on-surface tracking-[0.2em]"
                      type="text"
                      value={paymentForm.cardNumberTokenized}
                      readOnly
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <span className="text-[10px] font-bold text-primary px-2 py-1 bg-primary-fixed rounded">
                        TOKENIZED
                      </span>
                      <span
                        className="material-symbols-outlined text-green-600 text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-6">
                  <label className="block text-sm font-semibold text-on-surface-variant mb-2">
                    Expiry Date
                  </label>
                  <input
                    className="w-full bg-surface-container-low rounded-xl px-4 py-3 text-on-surface"
                    placeholder="MM/YY"
                    type="text"
                    value={paymentForm.expiryDate}
                    onChange={(event) =>
                      onPaymentFieldChange("expiryDate", event.target.value)
                    }
                  />
                </div>

                <div className="col-span-6">
                  <label className="block text-sm font-semibold text-on-surface-variant mb-2">
                    Security Code (CVV)
                  </label>
                  <input
                    className="w-full bg-surface-container-low rounded-xl px-4 py-3 text-on-surface"
                    placeholder="•••"
                    type="password"
                    value={paymentForm.cvv}
                    onChange={(event) =>
                      onPaymentFieldChange("cvv", event.target.value)
                    }
                  />
                </div>
              </div>
            </SurfaceCard>
          ) : null}

          {paymentMethod === "bank-transfer" ? (
            <SurfaceCard
              tone="white"
              border="outline"
              shadow="elevated"
              radius="2xl"
              className="p-6 space-y-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h4 className="text-lg font-headline font-bold text-on-surface">
                  Thanh toán bằng chuyển khoản ngân hàng
                </h4>
                <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold uppercase tracking-wider">
                  Tự động đối soát
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-surface-container-low p-4 space-y-3">
                  <p className="text-xs uppercase tracking-widest font-bold text-outline">
                    Tài khoản nhận tiền
                  </p>
                  <p className="text-sm text-on-surface-variant">
                    Ngân hàng:{" "}
                    <span className="font-bold text-on-surface">
                      Vietcombank
                    </span>
                  </p>
                  <p className="text-sm text-on-surface-variant">
                    Chủ tài khoản:{" "}
                    <span className="font-bold text-on-surface">
                      CONG TY STMS TRAVEL
                    </span>
                  </p>
                  <p className="text-sm text-on-surface-variant">
                    Số tài khoản:{" "}
                    <span className="font-bold text-on-surface">
                      0381000999248
                    </span>
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyBankAccount}
                  >
                    <Icon
                      name={isCopiedBankAccount ? "task_alt" : "content_copy"}
                      className="mr-2 text-base"
                    />
                    {isCopiedBankAccount
                      ? "Đã sao chép"
                      : "Sao chép số tài khoản"}
                  </Button>
                </div>

                <div className="rounded-2xl bg-surface-container-low p-4 space-y-3">
                  <p className="text-xs uppercase tracking-widest font-bold text-outline">
                    Nội dung chuyển khoản
                  </p>
                  <p className="text-sm text-on-surface-variant">
                    Mã tham chiếu:{" "}
                    <span className="font-bold text-primary">
                      {transferReference}
                    </span>
                  </p>
                  <p className="text-sm text-on-surface-variant">
                    Số tiền:{" "}
                    <span className="font-bold text-on-surface">
                      {formatCurrency(orderSummary.grandTotal)}
                    </span>
                  </p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Hệ thống sẽ tự động xác nhận trong vòng 1-3 phút sau khi
                    ngân hàng ghi nhận giao dịch.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-secondary-fixed/30 p-4">
                <p className="text-xs uppercase tracking-widest font-bold text-on-secondary-fixed-variant mb-2">
                  Quy trình thực hiện
                </p>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li className="flex items-center gap-2">
                    <Icon name="looks_one" className="text-base text-primary" />
                    Mở app ngân hàng và chuyển đúng số tiền.
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="looks_two" className="text-base text-primary" />
                    Dán chính xác mã tham chiếu vào nội dung chuyển khoản.
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="looks_3" className="text-base text-primary" />
                    Nhấn "Hoàn tất đặt chỗ" để hệ thống chờ đối soát tự động.
                  </li>
                </ul>
              </div>
            </SurfaceCard>
          ) : null}

          {paymentMethod === "wallet" ? (
            <SurfaceCard
              tone="white"
              border="outline"
              shadow="elevated"
              radius="2xl"
              className="p-6 space-y-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h4 className="text-lg font-headline font-bold text-on-surface">
                  Thanh toán bằng ví điện tử
                </h4>
                <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold uppercase tracking-wider">
                  QR / App Link
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {WALLET_OPTIONS.map((wallet) => {
                  const isActiveWallet = selectedWallet === wallet.id;

                  return (
                    <button
                      key={wallet.id}
                      type="button"
                      onClick={() => setSelectedWallet(wallet.id)}
                      className={`rounded-2xl p-4 text-left transition-all ${
                        isActiveWallet
                          ? "bg-primary/10 shadow-[0_20px_40px_rgba(25,28,30,0.06)]"
                          : "bg-surface-container-low hover:bg-surface-container"
                      }`}
                    >
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-bold ${wallet.accentClassName}`}
                      >
                        {wallet.label}
                      </span>
                      <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
                        {wallet.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-surface-container-low p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-36 h-36 rounded-2xl bg-white flex items-center justify-center shadow-[0_20px_40px_rgba(25,28,30,0.06)]">
                    <Icon name="qr_code_2" className="text-7xl text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-on-surface mt-3">
                    Quét mã để thanh toán{" "}
                    {formatCurrency(orderSummary.grandTotal)}
                  </p>
                </div>

                <div className="rounded-2xl bg-surface-container-low p-4 space-y-3">
                  <p className="text-xs uppercase tracking-widest font-bold text-outline">
                    Nhà cung cấp ví đã chọn
                  </p>
                  <p className="text-lg font-black text-on-surface">
                    {
                      WALLET_OPTIONS.find(
                        (wallet) => wallet.id === selectedWallet,
                      )?.label
                    }
                  </p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Sau khi hoàn tất trong ứng dụng ví, hệ thống sẽ tự động nhận
                    callback và xác nhận thanh toán.
                  </p>
                  <Button variant="white" size="md" className="w-full">
                    <Icon name="open_in_new" className="mr-2 text-base" />
                    Mở ứng dụng ví
                  </Button>
                </div>
              </div>
            </SurfaceCard>
          ) : null}
        </div>
      </section>

      <div className="flex items-start gap-3">
        <input
          className="mt-1 rounded-sm border-outline-variant text-primary focus:ring-primary"
          id="terms"
          type="checkbox"
          checked={isTermsAccepted}
          onChange={(event) => onTermsChange(event.target.checked)}
        />
        <label
          className="text-sm text-on-surface-variant leading-relaxed"
          htmlFor="terms"
        >
          Tôi đồng ý với Điều khoản dịch vụ, Chính sách hoàn hủy và cho phép hệ
          thống xử lý dữ liệu phục vụ quy trình bảo mật thanh toán.
        </label>
      </div>

      {errorMessage ? (
        <p className="text-sm font-semibold text-error">{errorMessage}</p>
      ) : null}

      <div className="flex flex-wrap justify-between gap-3 pt-2">
        <Button variant="outline" size="lg" onClick={onBack}>
          <Icon name="arrow_back" className="mr-2 text-base" />
          Quay lại Add-ons
        </Button>

        <button
          type="button"
          onClick={onConfirm}
          disabled={isSeatProtectionExpired}
          className="px-8 py-4 bg-linear-to-r from-primary to-primary-container text-white font-headline font-extrabold text-lg rounded-2xl shadow-lg hover:shadow-primary/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Hoàn tất đặt chỗ — {formatCurrency(orderSummary.grandTotal)}
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
