import AdminCard from "@/components/ui/AdminCard";
import { RbacRoleRow } from "@/types/admin-settings";

interface RbacRolesSectionProps {
  roles: RbacRoleRow[];
}

export default function RbacRolesSection({ roles }: RbacRolesSectionProps) {
  return (
    <AdminCard>
      <div className="flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-primary text-3xl">
          shield_person
        </span>
        <h3 className="text-xl font-headline font-bold">
          Quản lý vai trò người dùng (RBAC)
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-surface-container">
              <th className="pb-4 text-[10px] font-bold uppercase tracking-widest text-outline">
                Tên vai trò
              </th>
              <th className="pb-4 text-[10px] font-bold uppercase tracking-widest text-outline">
                Phạm vi
              </th>
              <th className="pb-4 text-[10px] font-bold uppercase tracking-widest text-outline">
                Người dùng
              </th>
              <th className="pb-4 text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-low">
            {roles.map((role) => (
              <tr
                key={role.id}
                className="group hover:bg-surface-container-low transition-colors"
              >
                <td className="py-4 font-bold text-on-surface">
                  {role.roleName}
                </td>
                <td className="py-4 text-sm text-outline">{role.scope}</td>
                <td className="py-4 text-sm text-outline">{role.userCount}</td>
                <td className="py-4 text-right">
                  <span className="material-symbols-outlined text-outline cursor-pointer group-hover:text-primary">
                    edit
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminCard>
  );
}
