import AdminPageHeader from "@/components/ui/AdminPageHeader";
import AdminButton from "@/components/ui/AdminButton";
import Icon from "@/components/ui/Icon";

export default function UsersHeader() {
  return (
    <AdminPageHeader
      title="Quản lý người dùng"
      description="Quản lý quyền truy cập, vai trò và quy trình bảo mật trên hệ sinh thái STMS."
      className="mb-8"
      titleClassName="font-headline"
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
            <Icon name="person_add" className="text-[20px]" />
            Thêm người dùng mới
          </AdminButton>
        </>
      }
    />
  );
}
