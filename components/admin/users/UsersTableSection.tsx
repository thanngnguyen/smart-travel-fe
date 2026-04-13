import Icon from "@/components/ui/Icon";
import PaginationBar from "@/components/ui/PaginationBar";
import StatusBadge from "@/components/ui/StatusBadge";
import { AdminUserRow, UsersPagination } from "@/types/admin-users";
import Image from "next/image";

interface UsersTableSectionProps {
  rows: AdminUserRow[];
  pagination: UsersPagination;
}

export default function UsersTableSection({
  rows,
  pagination,
}: UsersTableSectionProps) {
  return (
    <div className="bg-surface-container-lowest rounded-3xl shadow-[0_20px_40px_rgba(25,28,30,0.06)] overflow-hidden mb-8">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-surface-container-low">
            <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
              Tên
            </th>
            <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
              Email
            </th>
            <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
              Vai trò
            </th>
            <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
              Trạng thái
            </th>
            <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
              Ngày tham gia
            </th>
            <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline text-right">
              Thao tác
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-surface-container-low">
          {rows.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-surface transition-colors group"
            >
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  {row.avatarType === "initials" ? (
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${row.avatarToneClassName}`}
                    >
                      {row.avatarInitials}
                    </div>
                  ) : (
                    <Image
                      alt={row.name}
                      className="w-10 h-10 rounded-full object-cover"
                      src={row.avatarUrl}
                      width={40}
                      height={40}
                    />
                  )}
                  <div className="flex flex-col">
                    <span className="font-bold text-on-surface">
                      {row.name}
                    </span>
                    <span className="text-xs text-outline">{row.userCode}</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5 text-sm text-on-surface-variant">
                {row.email}
              </td>
              <td className="px-6 py-5">
                <StatusBadge
                  label={row.roleLabel}
                  tone={row.roleTone}
                  className="uppercase tracking-tight text-[10px]"
                />
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${row.statusDotClassName}`}
                  ></span>
                  <span className="text-sm font-medium text-on-surface">
                    {row.statusLabel}
                  </span>
                </div>
              </td>
              <td className="px-6 py-5 text-sm text-outline font-medium">
                {row.joinedDate}
              </td>
              <td className="px-6 py-5 text-right">
                <button className="p-2 rounded-lg hover:bg-surface-container-high transition-colors opacity-0 group-hover:opacity-100 text-outline">
                  <Icon name="more_vert" className="text-[20px]" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <PaginationBar
        summaryLabel={pagination.summaryLabel}
        currentPage={pagination.currentPage}
        pages={pagination.pages}
        className="border-surface-container-high"
      />
    </div>
  );
}
