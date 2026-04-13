import AdminButton from "@/components/ui/AdminButton";
import AdminCard from "@/components/ui/AdminCard";
import { ApiCredentialItem } from "@/types/admin-settings";

interface PaymentApiSectionProps {
  credentials: ApiCredentialItem[];
}

export default function PaymentApiSection({
  credentials,
}: PaymentApiSectionProps) {
  return (
    <AdminCard>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">
            vpn_key
          </span>
          <h3 className="text-xl font-headline font-bold">
            API cổng thanh toán
          </h3>
        </div>
        <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-tighter">
          Đã kết nối
        </span>
      </div>
      <div className="space-y-6">
        {credentials.map((credential) => (
          <div
            key={credential.id}
            className="flex flex-col md:flex-row md:items-center gap-4 bg-surface-container-low p-4 rounded-xl"
          >
            <div className="flex-1">
              <p className="text-xs font-bold text-outline uppercase mb-1">
                {credential.label}
              </p>
              <div className="flex items-center gap-2">
                <code className="text-sm font-mono text-on-surface">
                  {credential.value}
                </code>
                {credential.isMasked ? (
                  <span className="material-symbols-outlined text-outline cursor-pointer">
                    visibility_off
                  </span>
                ) : null}
              </div>
            </div>
            <AdminButton
              variant="surfaceMuted"
              size="sm"
              className="bg-surface-container-highest border-0"
            >
              {credential.actionLabel}
            </AdminButton>
          </div>
        ))}
      </div>
    </AdminCard>
  );
}
