"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import AdminButton from "@/components/ui/AdminButton";
import AdminCard from "@/components/ui/AdminCard";
import Icon from "@/components/ui/Icon";
import PillBadge from "@/components/ui/PillBadge";
import StatusBadge from "@/components/ui/StatusBadge";
import { useAdminToursData } from "@/hooks/useAdminToursData";
import { resolveTourConflictTone } from "@/lib/admin-view-resolvers";
import { resolveRouteParam } from "@/lib/route-param";

export default function AdminTourDetailsWorkspace() {
  const params = useParams<{ id: string | string[] }>();
  const routeId = resolveRouteParam(params?.id);

  const { tourRows, conflictLegend, conflictCards, yieldSuggestions } =
    useAdminToursData();

  const tour = tourRows.find((item) => item.id === routeId);

  if (!tour) {
    return (
      <AdminCard className="space-y-4" radius="3xl">
        <h1 className="text-2xl font-black text-on-surface">
          Không tìm thấy tour
        </h1>
        <p className="text-sm text-on-surface-variant">
          Mã tour bạn truy cập không tồn tại hoặc đã bị xóa khỏi hệ thống.
        </p>
        <Link
          href="/admin/tours"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white"
        >
          <Icon name="arrow_back" className="text-base" />
          Quay lại danh sách tour
        </Link>
      </AdminCard>
    );
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-2">
          <Link
            href="/admin/tours"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Icon name="arrow_back" className="text-base" />
            Danh sách tour
          </Link>
          <h1 className="text-4xl font-black tracking-tight text-on-surface">
            {tour.title}
          </h1>
          <div className="flex items-center gap-2">
            <PillBadge tone="primary-soft" size="xs" uppercase>
              {tour.code}
            </PillBadge>
            <StatusBadge label={tour.activeDepartures} tone="success" />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <AdminButton variant="surface" size="md">
            <Icon name="file_download" className="text-base" />
            Xuất lịch trình
          </AdminButton>
          <Link href={`/admin/tours/${tour.id}/edit`}>
            <AdminButton variant="gradient" size="md">
              <Icon name="edit" className="text-base" />
              Chỉnh sửa tour
            </AdminButton>
          </Link>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 xl:col-span-8 space-y-6">
          <AdminCard padding="none" radius="3xl" className="overflow-hidden">
            <div className="relative h-76">
              <Image
                src={tour.imageUrl}
                alt={tour.imageAlt}
                fill
                sizes="(max-width: 1280px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-1 gap-3 text-white md:grid-cols-3">
                <div className="rounded-xl bg-black/30 p-3 backdrop-blur-sm">
                  <p className="text-xs font-bold uppercase tracking-wide text-white/70">
                    Thời lượng
                  </p>
                  <p className="mt-1 text-lg font-black">{tour.duration}</p>
                </div>
                <div className="rounded-xl bg-black/30 p-3 backdrop-blur-sm">
                  <p className="text-xs font-bold uppercase tracking-wide text-white/70">
                    Giá cơ bản
                  </p>
                  <p className="mt-1 text-lg font-black">{tour.basePrice}</p>
                </div>
                <div className="rounded-xl bg-black/30 p-3 backdrop-blur-sm">
                  <p className="text-xs font-bold uppercase tracking-wide text-white/70">
                    Khởi hành hoạt động
                  </p>
                  <p className="mt-1 text-lg font-black">
                    {tour.activeDepartures}
                  </p>
                </div>
              </div>
            </div>
          </AdminCard>

          <AdminCard radius="3xl" className="space-y-4">
            <div>
              <h2 className="text-xl font-black text-on-surface">
                Xung đột vận hành liên quan
              </h2>
              <p className="mt-1 text-sm text-on-surface-variant">
                Tổng hợp cảnh báo từ điều phối guide và phân bổ sức chứa theo dữ
                liệu backend hiện tại.
              </p>
            </div>

            <div className="space-y-3">
              {conflictCards.map((conflict) => (
                <div
                  key={conflict.id}
                  className="rounded-2xl border border-outline-variant/20 bg-surface-container-low p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-on-surface">
                        {conflict.title}
                      </p>
                      <p className="mt-1 text-sm text-on-surface-variant">
                        {conflict.description.prefix}{" "}
                        <span className="font-semibold text-on-surface">
                          {conflict.description.primaryHighlight}
                        </span>{" "}
                        {conflict.description.middle ?? ""}{" "}
                        {conflict.description.secondaryHighlight ? (
                          <span className="font-semibold text-on-surface">
                            {conflict.description.secondaryHighlight}
                          </span>
                        ) : null}{" "}
                        {conflict.description.suffix}
                      </p>
                    </div>

                    <StatusBadge
                      label={conflict.badge}
                      tone={resolveTourConflictTone(conflict.theme)}
                      className="shrink-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </AdminCard>
        </section>

        <aside className="col-span-12 xl:col-span-4 space-y-6">
          <AdminCard radius="3xl" className="space-y-4">
            <h2 className="text-lg font-black text-on-surface">
              Chú thích điều phối
            </h2>
            <div className="space-y-2">
              {conflictLegend.map((legend) => (
                <div key={legend.id} className="flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${legend.dotClassName}`}
                  />
                  <span className="text-sm text-on-surface-variant">
                    {legend.label}
                  </span>
                </div>
              ))}
            </div>
          </AdminCard>

          <AdminCard radius="3xl" className="space-y-4">
            <h2 className="text-lg font-black text-on-surface">
              Gợi ý yield cho tour
            </h2>
            <div className="space-y-3">
              {yieldSuggestions.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl bg-surface-container-low p-3"
                >
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold text-on-surface-variant">
                      {item.label}
                    </p>
                    <p
                      className={`text-sm font-bold ${item.adjustmentClassName}`}
                    >
                      {item.adjustment}
                    </p>
                  </div>
                  <div className="h-2 rounded-full bg-surface-container-high">
                    <div
                      className={`h-full rounded-full bg-primary ${item.barWidthClassName}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </AdminCard>
        </aside>
      </div>
    </div>
  );
}
