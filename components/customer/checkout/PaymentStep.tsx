import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import SurfaceCard from "@/components/ui/SurfaceCard";

interface PaymentStepProps {
  onBack: () => void;
  onConfirm: () => void;
}

export default function PaymentStep({ onBack, onConfirm }: PaymentStepProps) {
  return (
    <SurfaceCard
      tone="white"
      border="subtle"
      shadow="soft"
      radius="3xl"
      className="p-6 md:p-8 animate-in fade-in duration-500"
    >
      <h2 className="text-2xl font-black text-on-surface mb-6">
        Phương thức thanh toán
      </h2>

      <div className="space-y-4 mb-6">
        <label className="flex items-center gap-4 p-4 border border-primary/40 bg-primary/5 rounded-xl cursor-pointer">
          <input
            type="radio"
            name="payment"
            className="w-5 h-5 text-primary"
            defaultChecked
          />
          <div className="flex-1 flex justify-between items-center">
            <span className="font-bold text-on-surface text-lg">
              Thẻ tín dụng
            </span>
            <div className="flex gap-2 text-primary">
              <Icon name="credit_card" />
            </div>
          </div>
        </label>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-on-surface-variant mb-2">
            Số thẻ
          </label>
          <input
            type="text"
            className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-mono"
            placeholder="0000 0000 0000 0000"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-on-surface-variant mb-2">
              Ngày hết hạn
            </label>
            <input
              type="text"
              className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-mono"
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-on-surface-variant mb-2">
              CVC
            </label>
            <input
              type="text"
              className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-mono"
              placeholder="123"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-outline-variant/30 flex justify-between">
        <Button
          variant="secondary"
          size="lg"
          onClick={onBack}
          className="hover:bg-surface-container"
        >
          <Icon name="arrow_back" className="mr-2" /> Quay lại
        </Button>
        <Button
          variant="primary"
          size="lg"
          onClick={onConfirm}
          className="shadow-xl shadow-primary/20"
        >
          Xác nhận & thanh toán
        </Button>
      </div>
    </SurfaceCard>
  );
}
