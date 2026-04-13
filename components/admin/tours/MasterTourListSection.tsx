import { AdminTourRow } from "@/types/admin-tours";
import Image from "next/image";

interface MasterTourListSectionProps {
  rows: AdminTourRow[];
}

export default function MasterTourListSection({
  rows,
}: MasterTourListSectionProps) {
  return (
    <section className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-2xl p-6 shadow-none">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Danh sách tour gốc</h3>
        <div className="flex gap-2">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
              search
            </span>
            <input
              className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary"
              placeholder="Tìm kiếm lịch trình..."
              type="text"
            />
          </div>
          <button className="p-2 bg-surface-container-low rounded-lg text-on-surface-variant">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-xs font-black uppercase tracking-widest text-outline border-b border-outline-variant/10">
              <th className="pb-4 px-2">Lịch trình</th>
              <th className="pb-4 px-2">Mã</th>
              <th className="pb-4 px-2">Thời lượng</th>
              <th className="pb-4 px-2">Giá cơ bản</th>
              <th className="pb-4 px-2">Lịch khởi hành hoạt động</th>
              <th className="pb-4 px-2 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rows.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-surface-container-low transition-colors group"
              >
                <td className="py-4 px-2 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      alt={row.imageAlt}
                      className="w-full h-full object-cover"
                      data-alt={row.imageAlt}
                      src={row.imageUrl}
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="font-bold">{row.title}</span>
                </td>
                <td className="py-4 px-2 font-mono text-outline">{row.code}</td>
                <td className="py-4 px-2">{row.duration}</td>
                <td className="py-4 px-2 font-semibold text-primary">
                  {row.basePrice}
                </td>
                <td className="py-4 px-2">
                  <span className="bg-primary-fixed text-on-primary-fixed px-2 py-1 rounded-full text-[10px] font-bold">
                    {row.activeDepartures}
                  </span>
                </td>
                <td className="py-4 px-2 text-right">
                  <button className="p-2 hover:bg-surface-container-high rounded-full">
                    <span className="material-symbols-outlined text-sm">
                      edit
                    </span>
                  </button>
                  <button className="p-2 hover:bg-surface-container-high rounded-full">
                    <span className="material-symbols-outlined text-sm">
                      more_vert
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
