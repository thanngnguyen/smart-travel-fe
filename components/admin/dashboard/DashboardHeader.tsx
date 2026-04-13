import Icon from "@/components/ui/Icon";
import SearchField from "@/components/ui/SearchField";

export default function DashboardHeader() {
  return (
    <header className="h-20 px-8 flex items-center justify-between sticky top-0 z-10 bg-surface/80 backdrop-blur-md">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-on-surface">
          Tổng quan bảng điều khiển
        </h1>
        <p className="text-sm text-on-surface-variant font-medium">
          Chào mừng quay lại, Marcus. Đây là những gì đang diễn ra hôm nay.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <SearchField
          placeholder="Tìm dữ liệu..."
          className="w-64"
          inputClassName="py-2 rounded-full bg-transparent"
          iconClassName="text-xl"
        />
        <div className="relative p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full cursor-pointer">
          <Icon name="notifications" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
        </div>
      </div>
    </header>
  );
}
