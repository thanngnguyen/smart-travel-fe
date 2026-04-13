import AdminCard from "@/components/ui/AdminCard";
import { BusinessInfo } from "@/types/admin-settings";

interface BusinessInfoSectionProps {
  info: BusinessInfo;
}

export default function BusinessInfoSection({
  info,
}: BusinessInfoSectionProps) {
  return (
    <AdminCard>
      <div className="flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-primary text-3xl">
          business
        </span>
        <h3 className="text-xl font-headline font-bold">
          Thông tin doanh nghiệp
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-outline">
            Tên tổ chức
          </label>
          <input
            className="w-full bg-surface-container-low border-none rounded-xl p-4 text-on-surface font-body focus:ring-2 focus:ring-primary-container transition-all"
            type="text"
            defaultValue={info.organizationName}
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-outline">
            Email liên hệ
          </label>
          <input
            className="w-full bg-surface-container-low border-none rounded-xl p-4 text-on-surface font-body focus:ring-2 focus:ring-primary-container transition-all"
            type="email"
            defaultValue={info.contactEmail}
          />
        </div>
        <div className="md:col-span-2 space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-outline">
            Địa chỉ trụ sở chính toàn cầu
          </label>
          <textarea
            className="w-full bg-surface-container-low border-none rounded-xl p-4 text-on-surface font-body focus:ring-2 focus:ring-primary-container transition-all"
            rows={2}
            defaultValue={info.headquartersAddress}
          />
        </div>
      </div>
    </AdminCard>
  );
}
