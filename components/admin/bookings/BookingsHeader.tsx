import AdminPageHeader from "@/components/ui/AdminPageHeader";
import AdminButton from "@/components/ui/AdminButton";
import Icon from "@/components/ui/Icon";

export default function BookingsHeader() {
  return (
    <AdminPageHeader
      title="Quản lý đặt chỗ"
      description="Theo dõi và xử lý các đơn đặt chỗ du lịch toàn cầu"
      className="mb-8"
      actions={
        <>
          <AdminButton variant="surface" size="md" className="font-semibold">
            <Icon name="file_download" className="text-[20px]" />
            Xuất CSV
          </AdminButton>
          <AdminButton
            variant="gradient"
            size="lg"
            className="py-2.5 hover:shadow-primary/20 active:scale-95"
          >
            <Icon name="add_circle" className="text-[20px]" />
            Đặt chỗ mới
          </AdminButton>
        </>
      }
    />
  );
}
