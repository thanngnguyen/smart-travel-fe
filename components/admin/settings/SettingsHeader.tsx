import AdminPageHeader from "@/components/ui/AdminPageHeader";

export default function SettingsHeader() {
  return (
    <AdminPageHeader
      title="Cấu hình hệ thống"
      description="Quản lý tham số STMS toàn cục, khóa bảo mật và ngưỡng trí tuệ tự động."
      className="mb-12"
      titleClassName="text-4xl font-headline"
      descriptionClassName="font-body"
    />
  );
}
