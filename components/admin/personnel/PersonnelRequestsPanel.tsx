import AdminButton from "@/components/ui/AdminButton";
import AdminCard from "@/components/ui/AdminCard";
import Icon from "@/components/ui/Icon";
import PillBadge from "@/components/ui/PillBadge";
import {
  PersonnelActionLog,
  PersonnelRequestItem,
} from "@/types/admin-personnel";

interface PersonnelRequestsPanelProps {
  requests: PersonnelRequestItem[];
  actionLogs: PersonnelActionLog[];
  onResolveRequest: (
    requestId: string,
    resolution: "approved" | "rejected",
  ) => void;
}

export default function PersonnelRequestsPanel({
  requests,
  actionLogs,
  onResolveRequest,
}: PersonnelRequestsPanelProps) {
  return (
    <section className="grid grid-cols-12 gap-6">
      <AdminCard
        padding="sm"
        radius="3xl"
        className="col-span-12 xl:col-span-8 space-y-4"
      >
        <div>
          <h3 className="text-2xl font-black text-on-surface">
            Yêu cầu nhân sự
          </h3>
          <p className="text-sm text-on-surface-variant mt-1">
            Duyệt nhanh nghỉ phép, đào tạo và quyền truy cập của từng nhân sự.
          </p>
        </div>

        {requests.length === 0 ? (
          <div className="rounded-2xl p-5 bg-surface-container-low text-sm text-on-surface-variant">
            Không còn yêu cầu đang chờ xử lý.
          </div>
        ) : (
          <div className="space-y-3">
            {requests.map((request) => (
              <div
                key={request.id}
                className="rounded-2xl bg-surface-container-low p-4 space-y-3"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-black text-on-surface">
                      {request.memberName}
                    </p>
                    <p className="text-xs text-outline mt-1">
                      {request.memberRoleLabel} · {request.requestedAt}
                    </p>
                  </div>
                  <PillBadge tone="primary-soft" size="xs" uppercase>
                    {request.typeLabel}
                  </PillBadge>
                </div>

                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {request.note}
                </p>

                <div className="flex flex-wrap justify-end gap-2">
                  <AdminButton
                    variant="surface"
                    size="sm"
                    onClick={() => onResolveRequest(request.id, "rejected")}
                  >
                    <Icon name="close" className="text-base" />
                    Từ chối
                  </AdminButton>
                  <AdminButton
                    variant="gradient"
                    size="sm"
                    onClick={() => onResolveRequest(request.id, "approved")}
                  >
                    <Icon name="check" className="text-base" />
                    Duyệt
                  </AdminButton>
                </div>
              </div>
            ))}
          </div>
        )}
      </AdminCard>

      <AdminCard
        padding="sm"
        radius="3xl"
        className="col-span-12 xl:col-span-4 space-y-4"
      >
        <div>
          <h3 className="text-xl font-black text-on-surface">
            Nhật ký thao tác
          </h3>
          <p className="text-sm text-on-surface-variant mt-1">
            Lịch sử các thay đổi gần nhất từ admin.
          </p>
        </div>

        {actionLogs.length === 0 ? (
          <div className="rounded-2xl p-4 bg-surface-container-low text-sm text-on-surface-variant">
            Chưa có thao tác mới trong phiên làm việc này.
          </div>
        ) : (
          <div className="space-y-3">
            {actionLogs.map((log) => (
              <div
                key={log.id}
                className="rounded-2xl p-3.5 bg-surface-container-low"
              >
                <p className="text-sm font-bold text-on-surface">{log.title}</p>
                <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                  {log.message}
                </p>
                <p className="text-xs text-outline mt-2">{log.createdAt}</p>
              </div>
            ))}
          </div>
        )}
      </AdminCard>
    </section>
  );
}
