import { SettingsActivityItem } from "@/types/admin-settings";

interface RecentActivityCardProps {
  activities: SettingsActivityItem[];
}

export default function RecentActivityCard({
  activities,
}: RecentActivityCardProps) {
  return (
    <div className="bg-surface-container-high rounded-2xl p-8">
      <h4 className="text-sm font-headline font-bold mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">history</span>
        Hoạt động gần đây
      </h4>
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-4">
            <div
              className={`w-2 h-2 mt-1.5 rounded-full shrink-0 ${activity.dotClassName}`}
            ></div>
            <div>
              <p className="text-xs font-bold">{activity.actor}</p>
              <p className="text-[11px] text-outline">{activity.description}</p>
              <p className="text-[10px] text-outline-variant mt-1">
                {activity.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
