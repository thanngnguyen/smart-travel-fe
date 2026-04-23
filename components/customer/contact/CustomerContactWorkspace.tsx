"use client";

import Image from "next/image";
import SurfaceCard from "@/components/ui/SurfaceCard";
import Icon from "@/components/ui/Icon";
import PillBadge from "@/components/ui/PillBadge";
import {
  CONTACT_OFFICE_POINTS,
  CONTACT_TOPICS,
} from "@/lib/customer-contact-data";
import { useCustomerContactForm } from "@/hooks/useCustomerContactForm";

export default function CustomerContactWorkspace() {
  const { form, notice, setField, handleSubmit } = useCustomerContactForm();

  return (
    <div className="bg-surface min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
        <SurfaceCard
          tone="surface"
          border="soft"
          shadow="elevated"
          radius="3xl"
          className="overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-70">
              <Image
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1400&q=80"
                alt="friendly travel consultant helping customers with trip planning"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="p-6 md:p-8 lg:p-10 bg-surface-container-low space-y-4">
              <PillBadge tone="primary-soft" size="xs" uppercase>
                Smart Travel Concierge Desk
              </PillBadge>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-on-surface">
                Liên hệ nhanh để chốt hành trình đúng gu của bạn.
              </h1>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                Đội điều phối và concierge trực 24/7 để hỗ trợ từ việc chọn
                tour, xử lý giấy tờ đến chăm sóc trong suốt chuyến đi.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="rounded-2xl bg-surface-container-lowest p-4 border border-outline-variant/15">
                  <p className="text-xs font-bold uppercase tracking-wide text-outline">
                    Hotline ưu tiên
                  </p>
                  <p className="mt-1 text-lg font-black text-primary">
                    1900 6868
                  </p>
                </div>
                <div className="rounded-2xl bg-surface-container-lowest p-4 border border-outline-variant/15">
                  <p className="text-xs font-bold uppercase tracking-wide text-outline">
                    Email chăm sóc
                  </p>
                  <p className="mt-1 text-sm font-bold text-on-surface">
                    concierge@stms.vn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SurfaceCard>

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
          <section className="col-span-12 lg:col-span-8">
            <SurfaceCard
              tone="white"
              border="soft"
              shadow="soft"
              radius="3xl"
              className="p-5 md:p-7 space-y-4"
            >
              <div>
                <h2 className="text-2xl font-black text-on-surface">
                  Gửi yêu cầu hỗ trợ
                </h2>
                <p className="mt-1 text-sm text-on-surface-variant">
                  Điền thông tin ngắn gọn, chuyên viên sẽ liên hệ đúng chủ đề
                  bạn cần.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                      Họ tên
                    </span>
                    <input
                      value={form.name}
                      onChange={(event) => setField("name", event.target.value)}
                      required
                      className="w-full rounded-xl border border-outline-variant/25 bg-surface px-3 py-2.5 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                      placeholder="Ví dụ: Nguyễn Minh Anh"
                    />
                  </label>

                  <label className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                      Email
                    </span>
                    <input
                      value={form.email}
                      onChange={(event) =>
                        setField("email", event.target.value)
                      }
                      required
                      type="email"
                      className="w-full rounded-xl border border-outline-variant/25 bg-surface px-3 py-2.5 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                      placeholder="you@email.com"
                    />
                  </label>

                  <label className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                      Số điện thoại
                    </span>
                    <input
                      value={form.phone}
                      onChange={(event) =>
                        setField("phone", event.target.value)
                      }
                      className="w-full rounded-xl border border-outline-variant/25 bg-surface px-3 py-2.5 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                      placeholder="+84 ..."
                    />
                  </label>

                  <label className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                      Chủ đề cần hỗ trợ
                    </span>
                    <select
                      value={form.topic}
                      onChange={(event) =>
                        setField("topic", event.target.value)
                      }
                      className="w-full rounded-xl border border-outline-variant/25 bg-surface px-3 py-2.5 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                    >
                      {CONTACT_TOPICS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="space-y-1.5 block">
                  <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                    Nội dung
                  </span>
                  <textarea
                    value={form.message}
                    onChange={(event) =>
                      setField("message", event.target.value)
                    }
                    rows={5}
                    required
                    className="w-full rounded-xl border border-outline-variant/25 bg-surface px-3 py-2.5 text-sm font-medium text-on-surface outline-none focus:border-primary"
                    placeholder="Mô tả mong muốn chuyến đi, thời gian dự kiến, số lượng người tham gia..."
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-primary to-primary-container px-5 py-2.5 text-sm font-bold text-white shadow-lg"
                >
                  <Icon name="send" className="text-base" />
                  Gửi yêu cầu ngay
                </button>
              </form>
            </SurfaceCard>
          </section>

          <aside className="col-span-12 lg:col-span-4 space-y-4">
            <SurfaceCard
              tone="white"
              border="soft"
              radius="2xl"
              className="p-5 space-y-3"
            >
              <h3 className="text-lg font-black text-on-surface">
                Kênh liên hệ
              </h3>
              <p className="flex items-center gap-2 text-sm text-on-surface-variant">
                <Icon name="call" className="text-base" />
                +84 28 3811 2233
              </p>
              <p className="flex items-center gap-2 text-sm text-on-surface-variant">
                <Icon name="mail" className="text-base" />
                support@stms.vn
              </p>
              <p className="flex items-center gap-2 text-sm text-on-surface-variant">
                <Icon name="schedule" className="text-base" />
                24/7 cho khách đang đi tour
              </p>
            </SurfaceCard>

            <SurfaceCard
              tone="surface-tint"
              border="outline"
              radius="2xl"
              className="p-5 space-y-3"
            >
              <h3 className="text-lg font-black text-on-surface">
                Câu hỏi nhanh
              </h3>
              <div className="space-y-2 text-sm text-on-surface-variant">
                <p>1. Tôi có thể đổi ngày khởi hành không?</p>
                <p>2. Tour có hỗ trợ ăn kiêng không?</p>
                <p>3. Thanh toán theo đợt như thế nào?</p>
              </div>
            </SurfaceCard>
          </aside>
        </div>

        <section className="space-y-3">
          <h2 className="text-2xl font-black text-on-surface">
            Văn phòng hỗ trợ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CONTACT_OFFICE_POINTS.map((office) => (
              <SurfaceCard
                key={office.id}
                tone="white"
                border="soft"
                shadow="soft"
                radius="2xl"
                className="overflow-hidden"
              >
                <div className="relative h-44">
                  <Image
                    src={office.imageUrl}
                    alt={office.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-lg font-black text-on-surface">
                    {office.city}
                  </p>
                  <p className="mt-1 text-sm text-on-surface-variant">
                    {office.address}
                  </p>
                </div>
              </SurfaceCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
