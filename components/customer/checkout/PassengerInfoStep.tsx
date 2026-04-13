import Button from "@/components/ui/Button";
import SurfaceCard from "@/components/ui/SurfaceCard";

interface PassengerInfoStepProps {
  onNext: () => void;
}

export default function PassengerInfoStep({ onNext }: PassengerInfoStepProps) {
  return (
    <SurfaceCard
      tone="white"
      border="subtle"
      shadow="soft"
      radius="3xl"
      className="p-6 md:p-8 animate-in fade-in duration-500"
    >
      <h2 className="text-2xl font-black text-on-surface mb-6">
        Thông tin liên hệ
      </h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-on-surface-variant mb-2">
              Tên
            </label>
            <input
              type="text"
              className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              placeholder="An"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-on-surface-variant mb-2">
              Họ
            </label>
            <input
              type="text"
              className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              placeholder="Nguyen"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold text-on-surface-variant mb-2">
            Địa chỉ email
          </label>
          <input
            type="email"
            className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            placeholder="john.doe@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-on-surface-variant mb-2">
            Số điện thoại
          </label>
          <input
            type="tel"
            className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-outline-variant/30 flex justify-end">
        <Button variant="primary" size="lg" onClick={onNext}>
          Tiếp tục thanh toán
        </Button>
      </div>
    </SurfaceCard>
  );
}
