import AdminPageHeader from "@/components/ui/AdminPageHeader";
import AdminButton from "@/components/ui/AdminButton";
import Icon from "@/components/ui/Icon";

interface CustomersHeaderProps {
  onFocusAtRisk: () => void;
  onFocusBlocked: () => void;
}

export default function CustomersHeader({
  onFocusAtRisk,
  onFocusBlocked,
}: CustomersHeaderProps) {
  return (
    <AdminPageHeader
      title="Quản lý khách hàng"
      description="Theo dõi trạng thái khách hàng, phân khúc giá trị và xử lý chăm sóc lại theo mức độ rủi ro rời bỏ."
      className="mb-0"
      titleClassName="text-4xl"
      descriptionClassName="text-base max-w-4xl"
      actions={
        <>
          <AdminButton variant="surface" size="lg" onClick={onFocusBlocked}>
            <Icon name="gpp_bad" className="text-base" />
            Tập trung tài khoản khóa
          </AdminButton>
          <AdminButton variant="gradient" size="lg" onClick={onFocusAtRisk}>
            <Icon name="priority_high" className="text-base" />
            Ưu tiên khách hàng rủi ro
          </AdminButton>
        </>
      }
    />
  );
}
