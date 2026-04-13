import Icon from "@/components/ui/Icon";
import PaginationBar from "@/components/ui/PaginationBar";
import StatusBadge from "@/components/ui/StatusBadge";
import { BookingRow, BookingsPagination } from "@/types/admin-bookings";

interface BookingsTableSectionProps {
  rows: BookingRow[];
  pagination: BookingsPagination;
}

export default function BookingsTableSection({
  rows,
  pagination,
}: BookingsTableSectionProps) {
  return (
    <div className="bg-surface-container-lowest rounded-3xl shadow-[0_20px_40px_rgba(25,28,30,0.06)] overflow-hidden mb-8">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-surface-container-low">
            <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
              <input
                className="rounded border-outline-variant text-primary focus:ring-primary"
                type="checkbox"
              />
            </th>
            <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
              Khách hàng
            </th>
            <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
              Tên tour
            </th>
            <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
              Khởi hành
            </th>
            <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
              Số tiền
            </th>
            <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
              Trạng thái
            </th>
            <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
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
                <input
                  className="rounded border-outline-variant text-primary focus:ring-primary"
                  type="checkbox"
                />
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${row.avatarToneClassName}`}
                  >
                    {row.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-on-surface">
                      {row.customerName}
                    </span>
                    <span className="text-xs text-outline">
                      {row.customerEmail}
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5">
                <span className="font-semibold text-on-surface">
                  {row.tourName}
                </span>
              </td>
              <td className="px-6 py-5">
                <div className="flex flex-col">
                  <span className="font-medium text-on-surface">
                    {row.departureDate}
                  </span>
                  <span className="text-xs text-outline">
                    {row.departureMeta}
                  </span>
                </div>
              </td>
              <td className="px-6 py-5 font-black text-on-surface">
                {row.amount}
              </td>
              <td className="px-6 py-5">
                <StatusBadge label={row.statusLabel} tone={row.statusTone} />
              </td>
              <td className="px-6 py-5">
                <button className="p-2 rounded-lg hover:bg-surface-container-high transition-colors opacity-0 group-hover:opacity-100">
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
      />
    </div>
  );
}
