"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import SurfaceCard from "@/components/ui/SurfaceCard";
import Icon from "@/components/ui/Icon";
import PillBadge from "@/components/ui/PillBadge";
import { useCustomerProfileData } from "@/hooks/useCustomerProfileData";
import { resolveRouteParam } from "@/lib/route-param";

export default function CustomerProfileDetailsWorkspace() {
  const params = useParams<{ id: string | string[] }>();
  const routeId = resolveRouteParam(params?.id);

  const { hero, upcomingTrip, savedTours, pastTrips } =
    useCustomerProfileData();

  return (
    <div className="bg-surface min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
        <header className="space-y-3">
          <Link
            href="/profile"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Icon name="arrow_back" className="text-base" />
            Quay lại trang profile
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <PillBadge tone="primary-soft" size="xs" uppercase>
              Member ID: {routeId ?? "unknown"}
            </PillBadge>
            <PillBadge tone="surface" size="xs" uppercase>
              {hero.memberLabel}
            </PillBadge>
          </div>

          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-on-surface">
            Hồ sơ thành viên & hành trình cá nhân hóa
          </h1>
          <p className="text-sm md:text-base text-on-surface-variant max-w-3xl">
            Theo dõi lộ trình sắp tới, lịch sử trải nghiệm và các đề xuất dành
            riêng cho hành trình tiếp theo của bạn.
          </p>
        </header>

        <div className="grid grid-cols-12 gap-6">
          <section className="col-span-12 xl:col-span-8 space-y-6">
            <SurfaceCard
              tone="white"
              border="soft"
              shadow="soft"
              radius="3xl"
              className="overflow-hidden"
            >
              <div className="relative h-72">
                <Image
                  src={hero.imageUrl}
                  alt={hero.imageAlt}
                  fill
                  sizes="(max-width: 1280px) 100vw, 66vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-wide text-white/80">
                    Tổng quãng đường đã đi
                  </p>
                  <p className="text-3xl font-black">{hero.distanceLabel}</p>
                </div>
              </div>
            </SurfaceCard>

            <SurfaceCard
              tone="white"
              border="soft"
              shadow="soft"
              radius="3xl"
              className="p-5 md:p-7 space-y-4"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-black text-on-surface">
                    Chuyến sắp khởi hành
                  </h2>
                  <p className="text-sm text-on-surface-variant mt-1">
                    {upcomingTrip.dateRange} • {upcomingTrip.location}
                  </p>
                </div>

                <Link
                  href={`/profile/${routeId ?? "guest"}/edit`}
                  className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-primary to-primary-container px-4 py-2 text-sm font-bold text-white"
                >
                  <Icon name="edit" className="text-base" />
                  Chỉnh sửa hồ sơ
                </Link>
              </div>

              <div className="relative h-44 rounded-2xl overflow-hidden">
                <Image
                  src={upcomingTrip.imageUrl}
                  alt={upcomingTrip.imageAlt}
                  fill
                  sizes="(max-width: 1280px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>

              <p className="text-lg font-black text-on-surface">
                {upcomingTrip.title}
              </p>
              <p className="text-sm text-on-surface-variant">
                {upcomingTrip.warningNote}
              </p>
            </SurfaceCard>
          </section>

          <aside className="col-span-12 xl:col-span-4 space-y-4">
            <SurfaceCard
              tone="surface"
              border="outline"
              radius="2xl"
              className="p-5 space-y-3"
            >
              <h3 className="text-lg font-black text-on-surface">
                Tour đã lưu
              </h3>
              <div className="space-y-2">
                {savedTours.map((tour) => (
                  <div
                    key={tour.id}
                    className="rounded-xl bg-surface-container-low p-3"
                  >
                    <p className="text-sm font-bold text-on-surface">
                      {tour.title}
                    </p>
                    <p className="text-xs text-on-surface-variant mt-1">
                      {tour.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </SurfaceCard>

            <SurfaceCard
              tone="white"
              border="soft"
              radius="2xl"
              className="p-5 space-y-3"
            >
              <h3 className="text-lg font-black text-on-surface">
                Lịch sử gần đây
              </h3>
              <div className="space-y-2">
                {pastTrips.slice(0, 3).map((trip) => (
                  <div
                    key={trip.id}
                    className="rounded-xl bg-surface-container-low p-3"
                  >
                    <p className="text-xs font-bold uppercase tracking-wide text-outline">
                      {trip.monthLabel}
                    </p>
                    <p className="text-sm font-bold text-on-surface mt-1">
                      {trip.title}
                    </p>
                  </div>
                ))}
              </div>
            </SurfaceCard>
          </aside>
        </div>
      </div>
    </div>
  );
}
