"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import AdminButton from "@/components/ui/AdminButton";
import AdminCard from "@/components/ui/AdminCard";
import Icon from "@/components/ui/Icon";
import PillBadge from "@/components/ui/PillBadge";
import { useAdminPersonnelData } from "@/hooks/useAdminPersonnelData";
import { useAdminPersonnelEditForm } from "@/hooks/useAdminPersonnelEditForm";
import { resolveRouteParam } from "@/lib/route-param";
import { PersonnelRole, PersonnelStatus } from "@/types/admin-personnel";

const ROLE_OPTIONS: Array<{ value: PersonnelRole; label: string }> = [
  { value: "admin", label: "Quản trị hệ thống" },
  { value: "guide", label: "Hướng dẫn viên" },
  { value: "operator", label: "Điều phối vận hành" },
  { value: "support", label: "Hỗ trợ khách hàng" },
];

const STATUS_OPTIONS: Array<{ value: PersonnelStatus; label: string }> = [
  { value: "active", label: "Đang làm việc" },
  { value: "on-tour", label: "Đang dẫn tour" },
  { value: "off-duty", label: "Trực chờ" },
  { value: "on-leave", label: "Nghỉ phép" },
  { value: "suspended", label: "Tạm khóa" },
];

export default function AdminPersonnelEditWorkspace() {
  const params = useParams<{ id: string | string[] }>();
  const routeId = resolveRouteParam(params?.id);

  const { members } = useAdminPersonnelData();
  const member = members.find((item) => item.id === routeId);

  const { form, notice, workloadPercent, setField, handleSubmit } =
    useAdminPersonnelEditForm(member);

  if (!member) {
    return (
      <AdminCard className="space-y-4" radius="3xl">
        <h1 className="text-2xl font-black text-on-surface">
          Không tìm thấy nhân sự để chỉnh sửa
        </h1>
        <Link
          href="/admin/personnel"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white"
        >
          <Icon name="arrow_back" className="text-base" />
          Quay lại danh sách nhân sự
        </Link>
      </AdminCard>
    );
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-2">
          <Link
            href={`/admin/personnel/${member.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Icon name="arrow_back" className="text-base" />
            Quay lại hồ sơ nhân sự
          </Link>

          <h1 className="text-4xl font-black tracking-tight text-on-surface">
            Chỉnh sửa nhân sự
          </h1>
        </div>

        <AdminButton
          variant="gradient"
          size="md"
          form="personnel-edit-form"
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
        id="personnel-edit-form"
        onSubmit={handleSubmit}
        className="grid grid-cols-12 gap-6"
      >
        <section className="col-span-12 xl:col-span-8 space-y-6">
          <AdminCard radius="3xl" className="space-y-4">
            <h2 className="text-xl font-black text-on-surface">
              Thông tin nhân sự
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Họ tên
                </span>
                <input
                  value={form.fullName}
                  onChange={(event) => setField("fullName", event.target.value)}
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Mã nhân sự
                </span>
                <input
                  value={form.staffCode}
                  onChange={(event) =>
                    setField("staffCode", event.target.value)
                  }
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Phòng ban
                </span>
                <input
                  value={form.department}
                  onChange={(event) =>
                    setField("department", event.target.value)
                  }
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Ngày gia nhập
                </span>
                <input
                  value={form.joinedDate}
                  onChange={(event) =>
                    setField("joinedDate", event.target.value)
                  }
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
                  Vai trò
                </span>
                <select
                  value={form.role}
                  onChange={(event) =>
                    setField("role", event.target.value as PersonnelRole)
                  }
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                >
                  {ROLE_OPTIONS.map((option) => (
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
                    setField("status", event.target.value as PersonnelStatus)
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

              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Tour phụ trách
                </span>
                <input
                  type="number"
                  min={0}
                  value={form.assignedTours}
                  onChange={(event) =>
                    setField("assignedTours", Number(event.target.value))
                  }
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Điểm hiệu suất
                </span>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={form.performanceScore}
                  onChange={(event) =>
                    setField("performanceScore", Number(event.target.value))
                  }
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Ngày công tháng
                </span>
                <input
                  type="number"
                  min={0}
                  value={form.monthlyWorkloadDays}
                  onChange={(event) =>
                    setField("monthlyWorkloadDays", Number(event.target.value))
                  }
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Định mức tháng
                </span>
                <input
                  type="number"
                  min={1}
                  value={form.monthlyWorkloadLimit}
                  onChange={(event) =>
                    setField("monthlyWorkloadLimit", Number(event.target.value))
                  }
                  className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
                />
              </label>
            </div>

            <label className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                Chứng chỉ (phân tách bằng dấu phẩy)
              </span>
              <input
                value={form.certificationsText}
                onChange={(event) =>
                  setField("certificationsText", event.target.value)
                }
                className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
              />
            </label>

            <label className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                Ngôn ngữ (phân tách bằng dấu phẩy)
              </span>
              <input
                value={form.languagesText}
                onChange={(event) =>
                  setField("languagesText", event.target.value)
                }
                className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-on-surface outline-none focus:border-primary"
              />
            </label>
          </AdminCard>
        </section>

        <aside className="col-span-12 xl:col-span-4 space-y-6">
          <AdminCard radius="3xl" className="space-y-4">
            <h2 className="text-lg font-black text-on-surface">Ảnh đại diện</h2>

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
                alt={form.fullName || "Personnel avatar"}
                fill
                sizes="(max-width: 1280px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
          </AdminCard>

          <AdminCard radius="3xl" className="space-y-3">
            <h2 className="text-lg font-black text-on-surface">
              Xem nhanh định mức
            </h2>
            <p className="text-sm text-on-surface-variant">
              Tỷ lệ hiện tại dựa trên dữ liệu chỉnh sửa:
            </p>
            <p className="text-3xl font-black text-primary">
              {workloadPercent}%
            </p>
            <div className="h-2 rounded-full bg-surface-container-high overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  workloadPercent >= 95
                    ? "bg-error"
                    : workloadPercent >= 80
                      ? "bg-amber-500"
                      : "bg-primary"
                }`}
                style={{ width: `${Math.min(workloadPercent, 100)}%` }}
              />
            </div>
            <PillBadge tone="surface" size="xs" uppercase>
              {form.monthlyWorkloadDays}/{form.monthlyWorkloadLimit} ngày công
            </PillBadge>
          </AdminCard>
        </aside>
      </form>
    </div>
  );
}
