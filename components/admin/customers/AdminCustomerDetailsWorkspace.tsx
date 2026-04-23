"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import AdminButton from "@/components/ui/AdminButton";
import AdminCard from "@/components/ui/AdminCard";
import Icon from "@/components/ui/Icon";
import PillBadge from "@/components/ui/PillBadge";
import StatusBadge from "@/components/ui/StatusBadge";
import CustomerFlashMessageBanner from "@/components/admin/customers/CustomerFlashMessageBanner";
import CustomerNotFoundCard from "@/components/admin/customers/CustomerNotFoundCard";
import { useAdminCustomersData } from "@/hooks/useAdminCustomersData";
import {
  resolveAdminCustomerSegmentTone,
  resolveAdminCustomerStatusTone,
} from "@/lib/admin-view-resolvers";
import { resolveRouteParam } from "@/lib/route-param";

export default function AdminCustomerDetailsWorkspace() {
  const params = useParams<{ id: string | string[] }>();
  const routeId = resolveRouteParam(params?.id);

  const {
    customers,
    flashMessage,
    clearFlashMessage,
    toggleVipTier,
    toggleCustomerBlock,
    markRetentionFollowUp,
  } = useAdminCustomersData();

  const customer = customers.find((item) => item.id === routeId);

  if (!customer) {
    return (
      <CustomerNotFoundCard
        title="Không tìm thấy khách hàng"
        backHref="/admin/customers"
        backLabel="Quay lại quản lý khách hàng"
      />
    );
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-2">
          <Link
            href="/admin/customers"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Icon name="arrow_back" className="text-base" />
            Danh sách khách hàng
          </Link>

          <h1 className="text-4xl font-black tracking-tight text-on-surface">
            {customer.name}
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            <PillBadge tone="primary-soft" size="xs" uppercase>
              {customer.customerCode}
            </PillBadge>
            <PillBadge
              tone={resolveAdminCustomerSegmentTone(customer.segment)}
              size="xs"
              uppercase
            >
              {customer.segmentLabel}
            </PillBadge>
            <StatusBadge
              label={customer.statusLabel}
              tone={resolveAdminCustomerStatusTone(customer.status)}
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link href={`/admin/customers/${customer.id}/edit`}>
            <AdminButton variant="gradient" size="md">
              <Icon name="edit" className="text-base" />
              Chỉnh sửa hồ sơ
            </AdminButton>
          </Link>
        </div>
      </header>

      {flashMessage ? (
        <CustomerFlashMessageBanner
          message={flashMessage}
          onClose={clearFlashMessage}
        />
      ) : null}

      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 xl:col-span-8 space-y-6">
          <AdminCard radius="3xl" className="space-y-5">
            <div className="flex flex-wrap items-center gap-4">
              {customer.avatarType === "image" && customer.avatarUrl ? (
                <Image
                  src={customer.avatarUrl}
                  alt={customer.name}
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-2xl object-cover"
                />
              ) : (
                <div
                  className={`flex h-24 w-24 items-center justify-center rounded-2xl text-2xl font-black ${customer.avatarToneClassName ?? "bg-surface-container-high text-on-surface"}`}
                >
                  {customer.avatarInitials ?? "KH"}
                </div>
              )}

              <div>
                <p className="text-sm font-semibold text-on-surface-variant">
                  Concierge phụ trách: {customer.assignedConcierge}
                </p>
                <p className="mt-1 text-sm text-on-surface-variant">
                  Gia nhập: {customer.joinedDate}
                </p>
                <p className="text-sm text-on-surface-variant">
                  Booking gần nhất: {customer.lastBookingDate}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-surface-container-low p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-outline">
                  Tổng chuyến
                </p>
                <p className="mt-1 text-2xl font-black text-on-surface">
                  {customer.totalTrips}
                </p>
              </div>
              <div className="rounded-2xl bg-surface-container-low p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-outline">
                  Lifetime value
                </p>
                <p className="mt-1 text-2xl font-black text-primary">
                  {customer.lifetimeValue}
                </p>
              </div>
              <div className="rounded-2xl bg-surface-container-low p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-outline">
                  Trạng thái
                </p>
                <p className="mt-1 text-lg font-black text-on-surface">
                  {customer.statusLabel}
                </p>
              </div>
            </div>
          </AdminCard>

          <AdminCard radius="3xl" className="space-y-3">
            <h2 className="text-xl font-black text-on-surface">
              Liên hệ & hỗ trợ
            </h2>
            <p className="flex items-center gap-2 text-sm text-on-surface-variant">
              <Icon name="mail" className="text-base" />
              {customer.email}
            </p>
            <p className="flex items-center gap-2 text-sm text-on-surface-variant">
              <Icon name="call" className="text-base" />
              {customer.phone}
            </p>
          </AdminCard>
        </section>

        <aside className="col-span-12 xl:col-span-4 space-y-6">
          <AdminCard radius="3xl" className="space-y-3">
            <h2 className="text-lg font-black text-on-surface">Tác vụ nhanh</h2>
            <div className="grid grid-cols-1 gap-2">
              <AdminButton
                variant="surface"
                size="sm"
                onClick={() => toggleVipTier(customer.id)}
              >
                <Icon name="stars" className="text-base" />
                {customer.segment === "vip" ? "Hạ hạng VIP" : "Nâng hạng VIP"}
              </AdminButton>

              <AdminButton
                variant="surfaceMuted"
                size="sm"
                onClick={() => toggleCustomerBlock(customer.id)}
              >
                <Icon
                  name={customer.status === "blocked" ? "lock_open" : "lock"}
                  className="text-base"
                />
                {customer.status === "blocked" ? "Mở khóa" : "Tạm khóa"}
              </AdminButton>

              <AdminButton
                variant="gradient"
                size="sm"
                onClick={() => markRetentionFollowUp(customer.id)}
                disabled={customer.status === "blocked"}
              >
                <Icon name="support_agent" className="text-base" />
                Tạo tác vụ chăm sóc lại
              </AdminButton>
            </div>
          </AdminCard>
        </aside>
      </div>
    </div>
  );
}
