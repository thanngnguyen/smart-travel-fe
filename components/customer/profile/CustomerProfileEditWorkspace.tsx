"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import SurfaceCard from "@/components/ui/SurfaceCard";
import Icon from "@/components/ui/Icon";
import PillBadge from "@/components/ui/PillBadge";
import { useCustomerProfileData } from "@/hooks/useCustomerProfileData";
import { useCustomerProfileEditForm } from "@/hooks/useCustomerProfileEditForm";
import { resolveRouteParam } from "@/lib/route-param";

export default function CustomerProfileEditWorkspace() {
  const params = useParams<{ id: string | string[] }>();
  const routeId = resolveRouteParam(params?.id);

  const { hero, upcomingTrip, savedTours } = useCustomerProfileData();

  const {
    form,
    notice,
    suggestedInterests,
    setField,
    toggleInterest,
    handleSubmit,
  } = useCustomerProfileEditForm(
    hero.heading,
    savedTours.map((tour) => tour.title),
  );

  return (
    <div className="bg-surface min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
        <header className="space-y-3">
          <Link
            href="/profile"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Icon name="arrow_back" className="text-base" />
            Quay lại trang hồ sơ
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <PillBadge tone="primary-soft" size="xs" uppercase>
              Profile ID: {routeId ?? "unknown"}
            </PillBadge>
            <PillBadge tone="surface" size="xs" uppercase>
              Cập nhật lần cuối: hôm nay
            </PillBadge>
          </div>

          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-on-surface">
            Chỉnh sửa thông tin cá nhân
          </h1>
          <p className="text-sm md:text-base text-on-surface-variant max-w-3xl">
            Tối ưu hồ sơ để chúng tôi cá nhân hóa itinerary, dịch vụ concierge
            và ưu đãi dành riêng cho bạn.
          </p>
        </header>

        {notice ? (
          <SurfaceCard
            tone="surface-high"
            border="outline"
            radius="2xl"
            className="p-4"
          >
            <p className="text-sm font-semibold text-on-surface">{notice}</p>
          </SurfaceCard>
        ) : null}

        <div className="grid grid-cols-12 gap-6">
          <section className="col-span-12 xl:col-span-8">
            <SurfaceCard
              tone="white"
              border="soft"
              shadow="soft"
              radius="3xl"
              className="p-5 md:p-7 space-y-6"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <h2 className="text-2xl font-black text-on-surface">
                    Thông tin cơ bản
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="space-y-1.5">
                      <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                        Họ tên
                      </span>
                      <input
                        value={form.fullName}
                        onChange={(event) =>
                          setField("fullName", event.target.value)
                        }
                        className="w-full rounded-xl border border-outline-variant/25 bg-surface px-3 py-2.5 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                      />
                    </label>

                    <label className="space-y-1.5">
                      <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                        Email
                      </span>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(event) =>
                          setField("email", event.target.value)
                        }
                        className="w-full rounded-xl border border-outline-variant/25 bg-surface px-3 py-2.5 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                      />
                    </label>

                    <label className="space-y-1.5">
                      <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                        Điện thoại
                      </span>
                      <input
                        value={form.phone}
                        onChange={(event) =>
                          setField("phone", event.target.value)
                        }
                        className="w-full rounded-xl border border-outline-variant/25 bg-surface px-3 py-2.5 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                      />
                    </label>

                    <label className="space-y-1.5">
                      <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                        Quốc tịch
                      </span>
                      <input
                        value={form.nationality}
                        onChange={(event) =>
                          setField("nationality", event.target.value)
                        }
                        className="w-full rounded-xl border border-outline-variant/25 bg-surface px-3 py-2.5 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                      />
                    </label>

                    <label className="space-y-1.5">
                      <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                        Hộ chiếu
                      </span>
                      <input
                        value={form.passportId}
                        onChange={(event) =>
                          setField("passportId", event.target.value)
                        }
                        className="w-full rounded-xl border border-outline-variant/25 bg-surface px-3 py-2.5 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                      />
                    </label>

                    <label className="space-y-1.5">
                      <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                        Liên hệ khẩn cấp
                      </span>
                      <input
                        value={form.emergencyContact}
                        onChange={(event) =>
                          setField("emergencyContact", event.target.value)
                        }
                        className="w-full rounded-xl border border-outline-variant/25 bg-surface px-3 py-2.5 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                      />
                    </label>
                  </div>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-black text-on-surface">
                    Tùy chọn hành trình
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="space-y-1.5">
                      <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                        Thành phố khởi hành ưu tiên
                      </span>
                      <input
                        value={form.preferredDepartureCity}
                        onChange={(event) =>
                          setField("preferredDepartureCity", event.target.value)
                        }
                        className="w-full rounded-xl border border-outline-variant/25 bg-surface px-3 py-2.5 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                      />
                    </label>

                    <label className="space-y-1.5">
                      <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                        Ghi chú ăn uống
                      </span>
                      <input
                        value={form.dietaryNotes}
                        onChange={(event) =>
                          setField("dietaryNotes", event.target.value)
                        }
                        className="w-full rounded-xl border border-outline-variant/25 bg-surface px-3 py-2.5 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                      />
                    </label>
                  </div>

                  <label className="space-y-1.5 block">
                    <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                      Ghi chú cho concierge
                    </span>
                    <textarea
                      rows={4}
                      value={form.travelNotes}
                      onChange={(event) =>
                        setField("travelNotes", event.target.value)
                      }
                      className="w-full rounded-xl border border-outline-variant/25 bg-surface px-3 py-2.5 text-sm font-medium text-on-surface outline-none focus:border-primary"
                    />
                  </label>

                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                      Sở thích du lịch
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {suggestedInterests.map((interest) => {
                        const selected =
                          form.selectedInterests.includes(interest);

                        return (
                          <button
                            key={interest}
                            type="button"
                            onClick={() => toggleInterest(interest)}
                            className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                              selected
                                ? "bg-primary text-white"
                                : "bg-surface-container text-on-surface"
                            }`}
                          >
                            {interest}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-primary to-primary-container px-5 py-2.5 text-sm font-bold text-white shadow-lg"
                >
                  <Icon name="save" className="text-base" />
                  Lưu hồ sơ
                </button>
              </form>
            </SurfaceCard>
          </section>

          <aside className="col-span-12 xl:col-span-4 space-y-4">
            <SurfaceCard
              tone="white"
              border="soft"
              shadow="soft"
              radius="2xl"
              className="overflow-hidden"
            >
              <div className="relative h-56">
                <Image
                  src={hero.imageUrl}
                  alt={hero.imageAlt}
                  fill
                  sizes="(max-width: 1280px) 100vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-bold uppercase tracking-wide text-white/80">
                    Hồ sơ hội viên
                  </p>
                  <p className="text-lg font-black line-clamp-2">
                    {form.fullName}
                  </p>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <p className="text-sm text-on-surface-variant">
                  {hero.memberLabel}
                </p>
                <p className="text-sm text-on-surface-variant">
                  Tổng quãng đường cùng Smart Travel: {hero.distanceLabel}
                </p>
              </div>
            </SurfaceCard>

            <SurfaceCard
              tone="surface"
              border="outline"
              radius="2xl"
              className="p-4 space-y-3"
            >
              <h3 className="text-lg font-black text-on-surface">
                Chuyến sắp tới
              </h3>
              <div className="relative h-32 rounded-xl overflow-hidden">
                <Image
                  src={upcomingTrip.imageUrl}
                  alt={upcomingTrip.imageAlt}
                  fill
                  sizes="(max-width: 1280px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-bold text-on-surface">
                {upcomingTrip.title}
              </p>
              <p className="text-sm text-on-surface-variant">
                {upcomingTrip.dateRange}
              </p>
              <p className="text-sm text-on-surface-variant">
                {upcomingTrip.location}
              </p>
            </SurfaceCard>
          </aside>
        </div>
      </div>
    </div>
  );
}
