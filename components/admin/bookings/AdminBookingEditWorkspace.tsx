"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import AdminButton from "@/components/ui/AdminButton";
import AdminCard from "@/components/ui/AdminCard";
import Icon from "@/components/ui/Icon";
import PillBadge from "@/components/ui/PillBadge";
import StatusBadge from "@/components/ui/StatusBadge";
import { useAdminBookingDetailsData } from "@/hooks/useAdminBookingDetailsData";
import { useAdminBookingEditForm } from "@/hooks/useAdminBookingEditForm";
import { useAdminBookingsData } from "@/hooks/useAdminBookingsData";
import { resolveRouteParam } from "@/lib/route-param";
import { BackendBookingStatus } from "@/types/backend-contract";

export default function AdminBookingEditWorkspace() {
  const params = useParams<{ id: string | string[] }>();
  const routeId = resolveRouteParam(params?.id);

  const { rows } = useAdminBookingsData();
  const { tourHighlight, primaryPassenger, specialRequests } =
    useAdminBookingDetailsData();

  const booking = rows.find((item) => item.id === routeId);
  const { form, notice, setField, handleSubmit } =
    useAdminBookingEditForm(booking);

  if (!booking) {
    return (
      <AdminCard className="space-y-4" radius="3xl">
        <h1 className="text-2xl font-black text-on-surface">
          Không tìm thấy booking
        </h1>
        <Link
          href="/admin/bookings"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white"
        >
          <Icon name="arrow_back" className="text-base" />
          Quay lại danh sách booking
        </Link>
      </AdminCard>
    );
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-2">
          <Link
            href={`/admin/bookings/${booking.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Icon name="arrow_back" className="text-base" />
            Quay lại chi tiết booking
          </Link>

          <h1 className="text-4xl font-black tracking-tight text-on-surface">
            Chỉnh sửa booking
          </h1>
          <div className="flex items-center gap-2">
            <PillBadge tone="primary-soft" size="xs" uppercase>
              #{booking.id}
            </PillBadge>
            <StatusBadge
              label={booking.statusLabel}
              tone={booking.statusTone}
            />
          </div>
        </div>

        <AdminButton
          variant="gradient"
          size="md"
          form="booking-edit-form"
          type="submit"
        >
          <Icon name="save" className="text-base" />
          Lưu booking
        </AdminButton>
      </header>

      {notice ? (
        <AdminCard padding="sm" className="bg-primary/10 text-on-surface">
          <p className="text-sm font-bold">{notice}</p>
        </AdminCard>
      ) : null}

      <form
        id="booking-edit-form"
        onSubmit={handleSubmit}
        className="grid grid-cols-12 gap-6"
      >
        <section className="col-span-12 xl:col-span-8 space-y-6">
          <AdminCard radius="3xl" className="space-y-4">
            <h2 className="text-xl font-black text-on-surface">
              Thông tin giao dịch
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Tên khách hàng
                </span>
                <input
                  value={form.customerName}
                  onChange={(event) =>
                    setField("customerName", event.target.value)
                  }
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Email
                </span>
                <input
                  value={form.customerEmail}
                  onChange={(event) =>
                    setField("customerEmail", event.target.value)
                  }
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Tour
                </span>
                <input
                  value={form.tourName}
                  onChange={(event) => setField("tourName", event.target.value)}
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Ngày khởi hành
                </span>
                <input
                  value={form.departureDate}
                  onChange={(event) =>
                    setField("departureDate", event.target.value)
                  }
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Số tiền
                </span>
                <input
                  value={form.amount}
                  onChange={(event) => setField("amount", event.target.value)}
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Trạng thái booking
                </span>
                <select
                  value={form.status}
                  onChange={(event) =>
                    setField(
                      "status",
                      event.target.value as BackendBookingStatus,
                    )
                  }
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                >
                  <option value="PENDING">PENDING</option>
                  <option value="CONFIRMED">CONFIRMED</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
              </label>
            </div>

            <label className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                Ghi chú nội bộ
              </span>
              <textarea
                rows={4}
                value={form.adminNote}
                onChange={(event) => setField("adminNote", event.target.value)}
                className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-medium text-on-surface outline-none focus:border-primary"
                placeholder="Nhập ghi chú vận hành hoặc lý do chỉnh sửa booking..."
              />
            </label>
          </AdminCard>
        </section>

        <aside className="col-span-12 xl:col-span-4 space-y-6">
          <AdminCard padding="none" radius="3xl" className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={tourHighlight.imageUrl}
                alt={tourHighlight.title}
                fill
                sizes="(max-width: 1280px) 100vw, 30vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0))",
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-bold uppercase tracking-wide text-white/75">
                  {tourHighlight.statusLabel}
                </p>
                <p className="mt-1 text-sm font-bold line-clamp-2">
                  {tourHighlight.title}
                </p>
              </div>
            </div>
          </AdminCard>

          <AdminCard radius="3xl" className="space-y-3">
            <h2 className="text-lg font-black text-on-surface">
              Hành khách chính
            </h2>
            <p className="text-sm font-semibold text-on-surface">
              {primaryPassenger.name}
            </p>
            <p className="text-sm text-on-surface-variant">
              {primaryPassenger.email}
            </p>
            <p className="text-sm text-on-surface-variant">
              {primaryPassenger.phone}
            </p>
            <p className="text-sm text-on-surface-variant">
              {primaryPassenger.nationality} • {primaryPassenger.passportMasked}
            </p>
          </AdminCard>

          <AdminCard radius="3xl" className="space-y-3">
            <h2 className="text-lg font-black text-on-surface">
              Yêu cầu đặc biệt
            </h2>
            <div className="space-y-2">
              {specialRequests.map((request) => (
                <div
                  key={request.id}
                  className="rounded-xl bg-surface-container-low p-3"
                >
                  <p className="text-xs font-bold uppercase tracking-wide text-primary">
                    {request.title}
                  </p>
                  <p className="mt-1 text-sm text-on-surface-variant">
                    {request.description}
                  </p>
                </div>
              ))}
            </div>
          </AdminCard>
        </aside>
      </form>
    </div>
  );
}
