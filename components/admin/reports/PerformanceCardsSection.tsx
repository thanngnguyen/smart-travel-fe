import {
  ConversionChannel,
  FillRateBar,
  GuideUtilization,
} from "@/types/admin-reports";
import Image from "next/image";

interface PerformanceCardsSectionProps {
  conversionChannels: ConversionChannel[];
  guideUtilization: GuideUtilization[];
  fillRateBars: FillRateBar[];
  fillRateValue: string;
}

export default function PerformanceCardsSection({
  conversionChannels,
  guideUtilization,
  fillRateBars,
  fillRateValue,
}: PerformanceCardsSectionProps) {
  return (
    <>
      <div className="col-span-12 md:col-span-4 bg-surface-container-lowest rounded-2xl p-8 flex flex-col gap-6">
        <h3 className="text-lg font-headline font-bold text-slate-900">
          Tỷ lệ chuyển đổi đặt chỗ
        </h3>
        <div className="relative flex items-center justify-center py-4">
          <svg className="w-40 h-40 transform -rotate-90">
            <circle
              className="text-surface-container-low"
              cx="80"
              cy="80"
              fill="transparent"
              r="70"
              stroke="currentColor"
              strokeWidth="12"
            ></circle>
            <circle
              className="text-primary"
              cx="80"
              cy="80"
              fill="transparent"
              r="70"
              stroke="currentColor"
              strokeDasharray="440"
              strokeDashoffset="140"
              strokeWidth="12"
            ></circle>
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-3xl font-headline font-extrabold text-slate-900">
              68%
            </span>
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
              Từ khách tiềm năng thành tour
            </span>
          </div>
        </div>
        <div className="space-y-3">
          {conversionChannels.map((channel) => (
            <div key={channel.id}>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">{channel.label}</span>
                <span className="font-bold text-slate-900">
                  {channel.valuePercent}%
                </span>
              </div>
              <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden mt-1">
                <div
                  className={`h-full ${channel.barClassName}`}
                  style={{ width: `${channel.valuePercent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-12 md:col-span-4 bg-surface-container-lowest rounded-2xl p-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="text-lg font-headline font-bold text-slate-900">
              Mức độ sử dụng hướng dẫn viên
            </h3>
            <p className="text-sm text-slate-500">Hiệu quả vận hành</p>
          </div>
          <span className="px-2 py-1 bg-tertiary-container/10 text-tertiary font-bold text-[10px] rounded uppercase">
            Nhu cầu đỉnh
          </span>
        </div>
        <div className="space-y-6">
          {guideUtilization.map((guide) => (
            <div key={guide.id} className="flex gap-4 items-center">
              <Image
                className="w-12 h-12 rounded-xl object-cover bg-slate-200"
                alt={guide.name}
                src={guide.avatarUrl}
                width={48}
                height={48}
              />
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <p className="text-sm font-bold text-slate-900">
                    {guide.name}
                  </p>
                  <p className="text-sm font-bold text-primary">
                    {guide.percent}%
                  </p>
                </div>
                <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-full"
                    style={{ width: `${guide.percent}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-12 md:col-span-4 bg-surface-container-lowest rounded-2xl p-8 relative overflow-hidden group">
        <div className="z-10 relative">
          <h3 className="text-lg font-headline font-bold text-slate-900">
            Tỷ lệ lấp đầy chỗ
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            Trung bình trên mọi loại phương tiện
          </p>
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-5xl font-headline font-extrabold text-slate-900 tracking-tighter">
              {fillRateValue}
            </span>
            <span className="text-slate-500 font-bold">+5 điểm %</span>
          </div>
          <div className="grid grid-cols-4 gap-2 h-24 items-end">
            {fillRateBars.map((bar) => (
              <div
                key={bar.id}
                className={`${bar.toneClassName} rounded-t-md`}
                style={{ height: `${bar.valuePercent}%` }}
              ></div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {fillRateBars.map((bar) => (
              <span
                key={`${bar.id}-label`}
                className="text-[10px] font-bold text-slate-400 uppercase"
              >
                {bar.label}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute -right-12 -top-12 opacity-5 group-hover:opacity-10 transition-opacity">
          <span className="material-symbols-outlined !text-[12rem]">
            flight_class
          </span>
        </div>
      </div>
    </>
  );
}
