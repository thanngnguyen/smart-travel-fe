"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import AdminButton from "@/components/ui/AdminButton";
import AdminCard from "@/components/ui/AdminCard";
import Icon from "@/components/ui/Icon";
import { useAdminCustomerEditForm } from "@/hooks/useAdminCustomerEditForm";
import { useAdminCustomersData } from "@/hooks/useAdminCustomersData";
import { resolveRouteParam } from "@/lib/route-param";
import { CustomerSegment, CustomerStatus } from "@/types/admin-customers";

const SEGMENT_OPTIONS: Array<{ value: CustomerSegment; label: string }> = [
  { value: "vip", label: "VIP" },
  { value: "corporate", label: "Doanh nghiệp" },
  { value: "family", label: "Gia đình" },
  { value: "standard", label: "Tiêu chuẩn" },
];

const STATUS_OPTIONS: Array<{ value: CustomerStatus; label: string }> = [
  { value: "active", label: "Đang hoạt động" },
  { value: "dormant", label: "Ngủ đông" },
  { value: "at-risk", label: "Có rủi ro" },
  { value: "blocked", label: "Đã khóa" },
];

export default function AdminCustomerEditWorkspace() {
  const params = useParams<{ id: string | string[] }>();
  const routeId = resolveRouteParam(params?.id);

  const { customers } = useAdminCustomersData();
  const customer = customers.find((item) => item.id === routeId);

  const { form, notice, setField, handleSubmit } =
    useAdminCustomerEditForm(customer);

  if (!customer) {
    return (
      <AdminCard className="space-y-4" radius="3xl">
        <h1 className="text-2xl font-black text-on-surface">
          Không tìm thấy khách hàng để chỉnh sửa
        </h1>
        <Link
          href="/admin/customers"
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
            href={`/admin/customers/${customer.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Icon name="arrow_back" className="text-base" />
            Quay lại hồ sơ khách hàng
          </Link>

          <h1 className="text-4xl font-black tracking-tight text-on-surface">
            Chỉnh sửa khách hàng
          </h1>
        </div>

        <AdminButton
          variant="gradient"
          size="md"
          form="customer-edit-form"
          type="submit"
        >
          <Icon name="save" className="text-base" />
          Lưu thay đổi
        </AdminButton>
      </header>

      {notice ? (
        <AdminCard padding="sm" className="bg-primary/10 text-on-surface">
          <p className="text-sm font-bold">{notice}</p>
        </AdminCard>
      ) : null}

      <form
        id="customer-edit-form"
        onSubmit={handleSubmit}
        className="grid grid-cols-12 gap-6"
      >
        <section className="col-span-12 xl:col-span-8 space-y-6">
          <AdminCard radius="3xl" className="space-y-4">
            <h2 className="text-xl font-black text-on-surface">
              Thông tin hồ sơ
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Họ tên
                </span>
                <input
                  value={form.name}
                  onChange={(event) => setField("name", event.target.value)}
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Email
                </span>
                <input
                  value={form.email}
                  onChange={(event) => setField("email", event.target.value)}
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Điện thoại
                </span>
                <input
                  value={form.phone}
                  onChange={(event) => setField("phone", event.target.value)}
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Concierge phụ trách
                </span>
                <input
                  value={form.assignedConcierge}
                  onChange={(event) =>
                    setField("assignedConcierge", event.target.value)
                  }
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Phân khúc
                </span>
                <select
                  value={form.segment}
                  onChange={(event) =>
                    setField("segment", event.target.value as CustomerSegment)
                  }
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                >
                  {SEGMENT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Trạng thái
                </span>
                <select
                  value={form.status}
                  onChange={(event) =>
                    setField("status", event.target.value as CustomerStatus)
                  }
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                >
                  {STATUS_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </AdminCard>
        </section>

        <aside className="col-span-12 xl:col-span-4 space-y-6">
          <AdminCard radius="3xl" className="space-y-4">
            <h2 className="text-lg font-black text-on-surface">Ảnh hồ sơ</h2>

            <label className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                URL ảnh
              </span>
              <input
                value={form.avatarUrl}
                onChange={(event) => setField("avatarUrl", event.target.value)}
                className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
              />
            </label>

            <div className="relative h-60 overflow-hidden rounded-2xl border border-outline-variant/20">
              <Image
                src={form.avatarUrl}
                alt={form.name || "Customer avatar"}
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
