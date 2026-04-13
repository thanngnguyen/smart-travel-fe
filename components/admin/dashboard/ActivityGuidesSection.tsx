import { ActivityRow, GuideStatusItem } from "@/types/admin-dashboard";
import Image from "next/image";

interface ActivityGuidesSectionProps {
  activities: ActivityRow[];
  guides: GuideStatusItem[];
}

export default function ActivityGuidesSection({
  activities,
  guides,
}: ActivityGuidesSectionProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-3xl border-0">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold font-headline">
            Hoạt động đặt chỗ gần đây
          </h2>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-surface-container rounded-full text-xs font-bold text-on-surface-variant">
              Hôm nay
            </button>
            <button className="px-3 py-1 bg-transparent rounded-full text-xs font-medium text-outline">
              Hôm qua
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] uppercase tracking-widest text-outline border-b border-surface-container-low">
                <th className="pb-4 font-black">Khách hàng</th>
                <th className="pb-4 font-black">Điểm đến</th>
                <th className="pb-4 font-black">Thời gian</th>
                <th className="pb-4 font-black">Trạng thái</th>
                <th className="pb-4 font-black text-right">Số tiền</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-surface-container-low">
              {activities.map((activity) => (
                <tr
                  key={activity.id}
                  className="hover:bg-surface-container-low/30 transition-colors"
                >
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${activity.initialsClassName}`}
                      >
                        {activity.initials}
                      </div>
                      <span className="font-bold">{activity.customerName}</span>
                    </div>
                  </td>
                  <td className="py-4 text-on-surface-variant">
                    {activity.destination}
                  </td>
                  <td className="py-4 text-on-surface-variant">
                    {activity.timeLabel}
                  </td>
                  <td className="py-4">
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${activity.statusClassName}`}
                    >
                      {activity.statusLabel}
                    </span>
                  </td>
                  <td className="py-4 text-right font-bold">
                    {activity.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-50">
        <h2 className="text-xl font-bold font-headline mb-6">
          Trạng thái hướng dẫn viên
        </h2>
        <div className="space-y-6">
          {guides.map((guide) => (
            <div key={guide.id} className="flex items-center gap-4">
              <div className="relative">
                <Image
                  alt={guide.name}
                  className="w-12 h-12 rounded-2xl object-cover"
                  src={guide.avatarUrl}
                  width={48}
                  height={48}
                />
                <span
                  className={`absolute -bottom-1 -right-1 w-4 h-4 border-2 border-white rounded-full ${guide.statusDotClassName}`}
                ></span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold">{guide.name}</p>
                <p className="text-xs text-outline italic">
                  {guide.statusText}
                </p>
              </div>
              <span className="material-symbols-outlined text-outline">
                more_vert
              </span>
            </div>
          ))}
        </div>
        <button className="w-full mt-8 py-3 border border-outline-variant text-on-surface-variant text-sm font-bold rounded-xl hover:bg-surface-container-low transition-colors">
          Quản lý toàn bộ đội ngũ
        </button>
      </div>
    </section>
  );
}
