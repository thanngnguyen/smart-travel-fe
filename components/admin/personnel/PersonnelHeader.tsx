import AdminButton from "@/components/ui/AdminButton";
import AdminPageHeader from "@/components/ui/AdminPageHeader";
import Icon from "@/components/ui/Icon";

interface PersonnelHeaderProps {
  onFocusWorkloadAlerts: () => void;
  onFocusPendingRequests: () => void;
}

export default function PersonnelHeader({
  onFocusWorkloadAlerts,
  onFocusPendingRequests,
}: PersonnelHeaderProps) {
  return (
    <AdminPageHeader
      title="Quản lý nhân sự"
      description="Quản lý đội ngũ admin, điều phối, hỗ trợ và hướng dẫn viên với trạng thái làm việc theo thời gian thực."
      className="mb-4"
      titleClassName="text-4xl"
      descriptionClassName="text-base max-w-4xl"
      actions={
        <>
          <AdminButton
            variant="surface"
            size="lg"
            onClick={onFocusPendingRequests}
          >
            <Icon name="pending_actions" className="text-base" />
            Xử lý yêu cầu nhân sự
          </AdminButton>
          <AdminButton
            variant="gradient"
            size="lg"
            onClick={onFocusWorkloadAlerts}
          >
            <Icon name="warning" className="text-base" />
            Ưu tiên nhân sự quá tải
          </AdminButton>
        </>
      }
    />
  );
}
