import AdminPageHeader from "@/components/ui/AdminPageHeader";
import AdminButton from "@/components/ui/AdminButton";
import Icon from "@/components/ui/Icon";

interface BookingsHeaderProps {
  onExportCsv: () => void;
  pendingRecordsReadyToConfirm: number;
  pendingRecordsCanMarkPaid: number;
}

export default function BookingsHeader({
  onExportCsv,
  pendingRecordsReadyToConfirm,
  pendingRecordsCanMarkPaid,
}: BookingsHeaderProps) {
  return (
    <AdminPageHeader
      title="Quản lý đặt chỗ"
      description={`Ready to confirm: ${pendingRecordsReadyToConfirm} • Need payment update: ${pendingRecordsCanMarkPaid}`}
      className="mb-8"
      actions={
        <>
          <AdminButton
            variant="surface"
            size="lg"
            className="font-semibold"
            onClick={onExportCsv}
          >
            <Icon name="file_download" className="text-[20px]" />
            Xuất CSV
          </AdminButton>
          <AdminButton
            variant="surfaceMuted"
            size="lg"
            className="py-2.5"
            disabled
          >
            <Icon name="add_circle" className="text-[20px]" />
            Đặt chỗ mới (sắp có)
          </AdminButton>
        </>
      }
    />
  );
}
