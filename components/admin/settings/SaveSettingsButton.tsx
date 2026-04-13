import AdminButton from "@/components/ui/AdminButton";

export default function SaveSettingsButton() {
  return (
    <AdminButton
      variant="gradient"
      size="lg"
      fullWidth
      className="py-4 rounded-2xl font-headline hover:shadow-xl scale-95 active:scale-90"
    >
      Lưu cấu hình toàn cục
    </AdminButton>
  );
}
