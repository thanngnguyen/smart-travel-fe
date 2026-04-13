import AdminButton from "@/components/ui/AdminButton";
import AdminCard from "@/components/ui/AdminCard";
import { ReportLogRow } from "@/types/admin-reports";

interface OperationsLogSectionProps {
  rows: ReportLogRow[];
}

export default function OperationsLogSection({
  rows,
}: OperationsLogSectionProps) {
  return (
    <AdminCard className="col-span-12 overflow-hidden" padding="none">
      <div className="p-8 flex justify-between items-center border-b border-surface-container">
        <div>
          <h3 className="text-lg font-headline font-bold text-slate-900">
            Nhật ký vận hành gần đây
          </h3>
          <p className="text-sm text-slate-500">
            Trạng thái đặt chỗ trực tiếp và phân công hướng dẫn viên
          </p>
        </div>
        <div className="flex gap-2">
          <AdminButton variant="icon" size="icon">
            <span className="material-symbols-outlined text-slate-600">
              filter_list
            </span>
          </AdminButton>
          <AdminButton variant="icon" size="icon">
            <span className="material-symbols-outlined text-slate-600">
              more_vert
            </span>
          </AdminButton>
        </div>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="bg-surface-container-low">
            <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              ID
            </th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Chi tiết tour
            </th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Hướng dẫn viên
            </th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Sức chứa
            </th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Trạng thái
            </th>
            <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Doanh thu
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-surface-container">
          {rows.map((row) => (
            <tr key={row.id} className="hover:bg-slate-50 transition-colors">
              <td className="px-8 py-6 font-bold text-slate-400">{row.code}</td>
              <td className="px-8 py-6">
                <p className="text-sm font-bold text-slate-900">
                  {row.tourName}
                </p>
                <p className="text-xs text-slate-500">{row.tourMeta}</p>
              </td>
              <td className="px-8 py-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                  <span className="text-sm font-medium">{row.guideName}</span>
                </div>
              </td>
              <td className="px-8 py-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold">{row.capacity}</span>
                  <span
                    className={`w-2 h-2 rounded-full ${row.capacityDotClassName}`}
                  ></span>
                </div>
              </td>
              <td className="px-8 py-6">
                <span
                  className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase ${row.statusClassName}`}
                >
                  {row.statusLabel}
                </span>
              </td>
              <td className="px-8 py-6 font-headline font-bold text-slate-900">
                {row.revenue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminCard>
  );
}
