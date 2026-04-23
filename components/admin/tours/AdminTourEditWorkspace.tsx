"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import AdminButton from "@/components/ui/AdminButton";
import AdminCard from "@/components/ui/AdminCard";
import Icon from "@/components/ui/Icon";
import PillBadge from "@/components/ui/PillBadge";
import { useAdminTourEditForm } from "@/hooks/useAdminTourEditForm";
import { useAdminToursData } from "@/hooks/useAdminToursData";
import { resolveRouteParam } from "@/lib/route-param";

export default function AdminTourEditWorkspace() {
  const params = useParams<{ id: string | string[] }>();
  const routeId = resolveRouteParam(params?.id);

  const { tourRows, recurringDays, guideOptions } = useAdminToursData();
  const tour = tourRows.find((item) => item.id === routeId);

  const { form, notice, setField, toggleDay, handleSubmit } =
    useAdminTourEditForm(tour, recurringDays, guideOptions);

  if (!tour) {
    return (
      <AdminCard className="space-y-4" radius="3xl">
        <h1 className="text-2xl font-black text-on-surface">
          Không tìm thấy tour để chỉnh sửa
        </h1>
        <Link
          href="/admin/tours"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white"
        >
          <Icon name="arrow_back" className="text-base" />
          Quay lại danh sách
        </Link>
      </AdminCard>
    );
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-2">
          <Link
            href={`/admin/tours/${tour.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Icon name="arrow_back" className="text-base" />
            Quay lại chi tiết tour
          </Link>

          <h1 className="text-4xl font-black tracking-tight text-on-surface">
            Chỉnh sửa tour
          </h1>
          <PillBadge tone="primary-soft" size="xs" uppercase>
            {tour.code}
          </PillBadge>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link href={`/admin/tours/${tour.id}`}>
            <AdminButton variant="surface" size="md">
              Hủy thay đổi
            </AdminButton>
          </Link>
          <AdminButton
            variant="gradient"
            size="md"
            form="tour-edit-form"
            type="submit"
          >
            <Icon name="save" className="text-base" />
            Lưu tour
          </AdminButton>
        </div>
      </header>

      {notice ? (
        <AdminCard padding="sm" className="bg-primary/10 text-on-surface">
          <p className="text-sm font-bold">{notice}</p>
        </AdminCard>
      ) : null}

      <form
        id="tour-edit-form"
        onSubmit={handleSubmit}
        className="grid grid-cols-12 gap-6"
      >
        <div className="col-span-12 xl:col-span-8 space-y-6">
          <AdminCard radius="3xl" className="space-y-4">
            <h2 className="text-xl font-black text-on-surface">
              Thông tin cơ bản
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Tên tour
                </span>
                <input
                  value={form.title}
                  onChange={(event) => setField("title", event.target.value)}
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Thời lượng
                </span>
                <input
                  value={form.duration}
                  onChange={(event) => setField("duration", event.target.value)}
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Giá cơ bản
                </span>
                <input
                  value={form.basePrice}
                  onChange={(event) =>
                    setField("basePrice", event.target.value)
                  }
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Khởi hành hoạt động
                </span>
                <input
                  value={form.activeDepartures}
                  onChange={(event) =>
                    setField("activeDepartures", event.target.value)
                  }
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                />
              </label>

              <label className="space-y-1.5 md:col-span-2">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Hướng dẫn viên chính
                </span>
                <select
                  value={form.assignedGuide}
                  onChange={(event) =>
                    setField("assignedGuide", event.target.value)
                  }
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                >
                  {guideOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </AdminCard>

          <AdminCard radius="3xl" className="space-y-4">
            <h2 className="text-xl font-black text-on-surface">
              Lịch khởi hành định kỳ
            </h2>

            <div className="flex flex-wrap gap-2">
              {recurringDays.map((day) => {
                const isSelected = form.selectedDays.includes(day.id);

                return (
                  <button
                    key={day.id}
                    type="button"
                    onClick={() => toggleDay(day.id)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors ${
                      isSelected
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-outline-variant/30 bg-surface-container-lowest text-on-surface-variant"
                    }`}
                  >
                    {day.label}
                  </button>
                );
              })}
            </div>
          </AdminCard>
        </div>

        <aside className="col-span-12 xl:col-span-4 space-y-6">
          <AdminCard radius="3xl" className="space-y-4">
            <h2 className="text-lg font-black text-on-surface">
              Ảnh đại diện tour
            </h2>

            <label className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                URL ảnh
              </span>
              <input
                value={form.imageUrl}
                onChange={(event) => setField("imageUrl", event.target.value)}
                className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
              />
            </label>

            <label className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                Mô tả ảnh
              </span>
              <input
                value={form.imageAlt}
                onChange={(event) => setField("imageAlt", event.target.value)}
                className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
              />
            </label>

            <div className="relative h-52 overflow-hidden rounded-2xl border border-outline-variant/20">
              <Image
                src={form.imageUrl || tour.imageUrl}
                alt={form.imageAlt || tour.imageAlt}
                fill
                sizes="(max-width: 1280px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
          </AdminCard>
        </aside>
      </form>
    </div>
  );
}
