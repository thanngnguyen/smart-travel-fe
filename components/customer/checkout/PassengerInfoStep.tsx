import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import SurfaceCard from "@/components/ui/SurfaceCard";
import { CheckoutPassengerInfo } from "@/types/customer-checkout";

interface PassengerInfoStepProps {
  passengerInfo: CheckoutPassengerInfo;
  onFieldChange: (field: keyof CheckoutPassengerInfo, value: string) => void;
  onNext: () => void;
  errorMessage?: string | null;
}

export default function PassengerInfoStep({
  passengerInfo,
  onFieldChange,
  onNext,
  errorMessage,
}: PassengerInfoStepProps) {
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
            Passenger Info
          </h2>
          <p className="text-sm text-on-surface-variant">
            Nhập thông tin hành khách để hệ thống giữ chỗ và khóa giá tự động.
          </p>
        </div>
        <div className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold uppercase tracking-wider">
          Bước 1/3
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 bg-surface-container-low rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Icon name="person" className="text-[20px]" />
            </div>
            <p className="text-xs uppercase tracking-widest font-bold text-outline">
              Hành khách chính
            </p>
          </div>
          <div>
            <label className="block text-sm font-bold text-on-surface-variant mb-2">
              Họ và tên
            </label>
            <input
              type="text"
              className="w-full bg-surface-container-lowest rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30"
              value={passengerInfo.primaryTraveler}
              onChange={(event) =>
                onFieldChange("primaryTraveler", event.target.value)
              }
              placeholder="Ví dụ: Julian Alexander Vance"
            />
          </div>
        </div>

        <div className="p-5 bg-surface-container-low rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-on-secondary-fixed-variant flex items-center justify-center">
              <Icon name="person_4" className="text-[20px]" />
            </div>
            <p className="text-xs uppercase tracking-widest font-bold text-outline">
              Người đi cùng
            </p>
          </div>
          <div>
            <label className="block text-sm font-bold text-on-surface-variant mb-2">
              Họ và tên
            </label>
            <input
              type="text"
              className="w-full bg-surface-container-lowest rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30"
              value={passengerInfo.companionTraveler}
              onChange={(event) =>
                onFieldChange("companionTraveler", event.target.value)
              }
              placeholder="Ví dụ: Elena Sofia Vance"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-bold text-on-surface-variant mb-2">
            Địa chỉ email
          </label>
          <input
            type="email"
            className="w-full bg-surface-container-low rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30"
            value={passengerInfo.email}
            onChange={(event) => onFieldChange("email", event.target.value)}
            placeholder="you@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-on-surface-variant mb-2">
            Số điện thoại
          </label>
          <input
            type="tel"
            className="w-full bg-surface-container-low rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30"
            value={passengerInfo.phone}
            onChange={(event) => onFieldChange("phone", event.target.value)}
            placeholder="+84..."
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-bold text-on-surface-variant mb-2">
          Ghi chú đặc biệt
        </label>
        <textarea
          className="w-full min-h-24 bg-surface-container-low rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30"
          value={passengerInfo.specialNote}
          onChange={(event) => onFieldChange("specialNote", event.target.value)}
          placeholder="Yêu cầu suất ăn, hỗ trợ đặc biệt..."
        />
      </div>

      {errorMessage ? (
        <p className="mt-4 text-sm font-semibold text-error">{errorMessage}</p>
      ) : null}

      <div className="mt-8 pt-6 border-t border-outline-variant/20 flex justify-end">
        <Button
          variant="primary"
          size="lg"
          onClick={onNext}
          className="bg-linear-to-r from-primary to-primary-container"
        >
          Tiếp tục đến dịch vụ cộng thêm
        </Button>
      </div>
    </SurfaceCard>
  );
}
