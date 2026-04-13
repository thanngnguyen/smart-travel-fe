interface AISensitivityCardProps {
  thresholdLabel: string;
  thresholdPercent: number;
}

export default function AISensitivityCard({
  thresholdLabel,
  thresholdPercent,
}: AISensitivityCardProps) {
  return (
    <div className="bg-tertiary text-white rounded-2xl p-8 shadow-[0_20px_40px_rgba(123,38,0,0.15)] relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-on-tertiary-container">
            auto_awesome
          </span>
          <h3 className="text-xl font-headline font-extrabold">
            Độ nhạy cảnh báo đỏ của AI
          </h3>
        </div>
        <p className="text-sm opacity-80 mb-8 leading-relaxed">
          Điều chỉnh ngưỡng cho bộ máy phát hiện bất thường du lịch. Độ nhạy cao
          hơn sẽ tăng cảnh báo &quot;Cờ đỏ&quot; cho xung đột lịch trình và mẫu
          đặt chỗ rủi ro cao.
        </p>
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between text-xs font-bold uppercase">
              <span>Mức ngưỡng</span>
              <span className="text-on-tertiary-container">
                {thresholdLabel}
              </span>
            </div>
            <div className="w-full h-1.5 bg-white/20 rounded-full relative">
              <div
                className="absolute top-0 left-0 h-full bg-on-tertiary-container rounded-full"
                style={{ width: `${thresholdPercent}%` }}
              ></div>
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg cursor-pointer"
                style={{ left: `${thresholdPercent}%` }}
              ></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-[10px] font-bold uppercase opacity-60 mb-1">
                Cảnh báo rủi ro
              </p>
              <p className="text-lg font-headline font-bold">Đang bật</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-[10px] font-bold uppercase opacity-60 mb-1">
                Trì hoãn tự động
              </p>
              <p className="text-lg font-headline font-bold">Đệm 12h</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
    </div>
  );
}
