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
  const [isCopiedBankAccount, setIsCopiedBankAccount] = useState(false);

  const transferReference = paymentForm.transferReference;

  const handleCopyBankAccount = async () => {
    try {
      await navigator.clipboard.writeText("001205008813");
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
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

          {paymentMethod === "VNPAY" ? (
            <SurfaceCard
              tone="white"
              border="outline"
              shadow="elevated"
              radius="2xl"
              className="p-6 space-y-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h4 className="text-lg font-headline font-bold text-on-surface">
                  Thanh toán qua VNPay
                </h4>
                <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold uppercase tracking-wider">
                  /api/payments/create_url
                </span>
              </div>

              <div className="rounded-2xl bg-surface-container-low p-4 space-y-3">
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Frontend sẽ tạo payment URL và redirect người dùng sang VNPay.
                  Sau callback thành công, payment status sẽ là SUCCESS.
                </p>

                <p className="text-sm text-on-surface-variant">
                  Số tiền thanh toán:
                  <span className="ml-1 font-bold text-on-surface">
                    {formatCurrency(orderSummary.grandTotal)}
                  </span>
                </p>
              </div>

              <div className="rounded-2xl bg-secondary-fixed/30 p-4">
                <p className="text-xs uppercase tracking-widest font-bold text-on-secondary-fixed-variant mb-2">
                  Luồng backend
                </p>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li className="flex items-center gap-2">
                    <Icon name="looks_one" className="text-base text-primary" />
                    GET /api/payments/create_url?amount=&bookingId=
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="looks_two" className="text-base text-primary" />
                    Redirect sang VNPay để người dùng thanh toán
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="looks_3" className="text-base text-primary" />
                    VNPay callback về /api/payments/vnpay-return
                  </li>
                </ul>
              </div>
            </SurfaceCard>
          ) : null}

          {paymentMethod === "BANK_TRANSFER" ? (
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
                    <span className="font-bold text-on-surface">MB Bank</span>
                  </p>
                  <p className="text-sm text-on-surface-variant">
                    Chủ tài khoản:{" "}
                    <span className="font-bold text-on-surface">
                      DO DUC MINH QUANG
                    </span>
                  </p>
                  <p className="text-sm text-on-surface-variant">
                    Số tài khoản:{" "}
                    <span className="font-bold text-on-surface">
                      001205008813
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
                  <label className="block text-sm text-on-surface-variant">
                    Mã tham chiếu
                  </label>
                  <input
                    className="w-full rounded-xl bg-white/90 px-3 py-2 text-sm font-semibold text-on-surface focus:ring-2 focus:ring-primary/30"
                    value={transferReference}
                    onChange={(event) =>
                      onPaymentFieldChange(
                        "transferReference",
                        event.target.value,
                      )
                    }
                    placeholder="THANH TOAN TOUR STMS-XXXX"
                  />
                  <p className="text-sm text-on-surface-variant">
                    Số tiền:{" "}
                    <span className="font-bold text-on-surface">
                      {formatCurrency(orderSummary.grandTotal)}
                    </span>
                  </p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Hệ thống backend đối soát theo bookingId + nội dung chuyển
                    khoản để xác nhận giao dịch.
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
                    Nhấn &quot;Hoàn tất đặt chỗ&quot; để hệ thống chờ đối soát
                    tự động.
                  </li>
                </ul>
              </div>
            </SurfaceCard>
          ) : null}

          {paymentMethod === "MOMO" ? (
            <SurfaceCard
              tone="white"
              border="outline"
              shadow="elevated"
              radius="2xl"
              className="p-6 space-y-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h4 className="text-lg font-headline font-bold text-on-surface">
                  Thanh toán bằng ví điện tử MoMo
                </h4>
                <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold uppercase tracking-wider">
                  MOMO
                </span>
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
                    Kênh thanh toán
                  </p>
                  <p className="text-lg font-black text-on-surface">MoMo</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Sau khi hoàn tất trong ứng dụng, hệ thống sẽ nhận callback
                    và ghi nhận transactionId từ cổng ví.
                  </p>

                  <input
                    className="w-full rounded-xl bg-white/90 px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/30"
                    value={paymentForm.transactionId}
                    onChange={(event) =>
                      onPaymentFieldChange("transactionId", event.target.value)
                    }
                    placeholder="MOMO_TXN_123456 (tùy chọn)"
                  />

                  <Button variant="white" size="md" className="w-full" disabled>
                    <Icon name="open_in_new" className="mr-2 text-base" />
                    Mở ứng dụng MoMo (mock)
                  </Button>
                </div>
              </div>
            </SurfaceCard>
          ) : null}

          {paymentMethod === "CASH" ? (
            <SurfaceCard
              tone="white"
              border="outline"
              shadow="elevated"
              radius="2xl"
              className="p-6 space-y-4"
            >
              <div className="flex items-center justify-between gap-3">
                <h4 className="text-lg font-headline font-bold text-on-surface">
                  Thanh toán tiền mặt
                </h4>
                <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface text-[10px] font-bold uppercase tracking-wider">
                  CASH
                </span>
              </div>

              <p className="text-sm text-on-surface-variant leading-relaxed">
                Trạng thái booking sẽ giữ PENDING cho đến khi nhân sự vận hành
                xác nhận thu tiền và tạo bản ghi payment SUCCESS.
              </p>

              <textarea
                rows={3}
                className="w-full rounded-xl bg-surface-container-low px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/30"
                value={paymentForm.payerNote}
                onChange={(event) =>
                  onPaymentFieldChange("payerNote", event.target.value)
                }
                placeholder="Ghi chú người nộp tiền / thời điểm hẹn thu tiền..."
              />
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
