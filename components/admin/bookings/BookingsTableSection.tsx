import Link from "next/link";
import Icon from "@/components/ui/Icon";
import PaginationBar from "@/components/ui/PaginationBar";
import StatusBadge from "@/components/ui/StatusBadge";
import { BookingRow, BookingsPagination } from "@/types/admin-bookings";

interface BookingsTableSectionProps {
  rows: BookingRow[];
  pagination: BookingsPagination;
  allVisibleSelected: boolean;
  isBookingSelected: (bookingId: string) => boolean;
  onToggleSelectBooking: (bookingId: string) => void;
  onToggleSelectVisibleRows: () => void;
  onMarkPaymentSuccess: (bookingId: string) => void;
  onConfirmBooking: (bookingId: string) => void;
  onCancelBooking: (bookingId: string) => void;
  onRefundBooking: (bookingId: string) => void;
  onPageChange: (page: number) => void;
}

export default function BookingsTableSection({
  rows,
  pagination,
  allVisibleSelected,
  isBookingSelected,
  onToggleSelectBooking,
  onToggleSelectVisibleRows,
  onMarkPaymentSuccess,
  onConfirmBooking,
  onCancelBooking,
  onRefundBooking,
  onPageChange,
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
                checked={allVisibleSelected}
                onChange={onToggleSelectVisibleRows}
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
              Payment
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
                  checked={isBookingSelected(row.id)}
                  onChange={() => onToggleSelectBooking(row.id)}
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
                {row.isHighRisk ? (
                  <div className="mt-2">
                    <StatusBadge label="MANUAL REVIEW" tone="warning" />
                  </div>
                ) : null}
              </td>
              <td className="px-6 py-5">
                <div className="flex flex-col gap-2">
                  <StatusBadge
                    label={`${row.paymentStatusLabel} • ${row.paymentMethod}`}
                    tone={row.paymentTone}
                  />
                  <span className="text-[11px] font-semibold text-outline">
                    Updated: {row.updatedAtLabel}
                  </span>
                </div>
              </td>
              <td className="px-6 py-5">
                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    href={`/admin/bookings/${row.id}`}
                    className="inline-flex items-center gap-1 rounded-lg bg-surface-container-low px-2 py-1 text-[11px] font-bold text-on-surface"
                  >
                    <Icon name="visibility" className="text-[14px]" />
                    View
                  </Link>

                  <Link
                    href={`/admin/bookings/${row.id}/edit`}
                    className="inline-flex items-center gap-1 rounded-lg bg-surface-container-low px-2 py-1 text-[11px] font-bold text-on-surface"
                  >
                    <Icon name="edit" className="text-[14px]" />
                    Edit
                  </Link>

                  <button
                    type="button"
                    onClick={() => onMarkPaymentSuccess(row.id)}
                    disabled={!row.canMarkPaymentSuccess}
                    className="inline-flex items-center gap-1 rounded-lg bg-blue-100 px-2 py-1 text-[11px] font-bold text-blue-700 disabled:opacity-40"
                  >
                    <Icon name="credit_score" className="text-[14px]" />
                    Mark Paid
                  </button>

                  <button
                    type="button"
                    onClick={() => onConfirmBooking(row.id)}
                    disabled={!row.canConfirm}
                    className="inline-flex items-center gap-1 rounded-lg bg-green-100 px-2 py-1 text-[11px] font-bold text-green-700 disabled:opacity-40"
                  >
                    <Icon name="task_alt" className="text-[14px]" />
                    Confirm
                  </button>

                  <button
                    type="button"
                    onClick={() => onCancelBooking(row.id)}
                    disabled={!row.canCancel}
                    className="inline-flex items-center gap-1 rounded-lg bg-red-100 px-2 py-1 text-[11px] font-bold text-red-700 disabled:opacity-40"
                  >
                    <Icon name="cancel" className="text-[14px]" />
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={() => onRefundBooking(row.id)}
                    disabled={!row.canRefund}
                    className="inline-flex items-center gap-1 rounded-lg bg-amber-100 px-2 py-1 text-[11px] font-bold text-amber-700 disabled:opacity-40"
                  >
                    <Icon name="sync" className="text-[14px]" />
                    Refund
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <PaginationBar
        summaryLabel={pagination.summaryLabel}
        currentPage={pagination.currentPage}
        pages={pagination.pages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
