import Icon from "@/components/ui/Icon";
import Link from "next/link";
import { AuthRoleOption, RegisterFormData } from "@/types/auth";

interface RegisterGatewayFormProps {
  formData: RegisterFormData;
  roleOptions: AuthRoleOption[];
  onFieldChange: <K extends keyof RegisterFormData>(
    field: K,
    value: RegisterFormData[K],
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function RegisterGatewayForm({
  formData,
  roleOptions,
  onFieldChange,
  onSubmit,
}: RegisterGatewayFormProps) {
  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      <div className="w-full bg-surface-container-lowest shadow-[0_20px_40px_rgba(25,28,30,0.06)] rounded-[2.5rem] p-8 md:p-12 border border-slate-100">
        <div className="mb-10 text-center">
          <h1 className="font-extrabold text-3xl tracking-tight text-on-surface mb-2">
            Bắt đầu hành trình của bạn
          </h1>
          <p className="text-on-surface-variant text-sm md:text-base font-medium">
            Khởi tạo và quản lý chuyến đi toàn cầu cùng STMS.
          </p>
        </div>

        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold px-1">
                Họ và tên
              </label>
              <div className="group relative">
                <Icon
                  name="person"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-outline text-sm transition-colors group-focus-within:text-primary"
                />
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => onFieldChange("name", e.target.value)}
                  className="w-full bg-surface-container-low border border-transparent rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary text-on-surface transition-all placeholder:text-outline font-medium focus:outline-none"
                  placeholder="Nguyen Van A"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold px-1">
                Thiết lập vai trò (Demo)
              </label>
              <div className="group relative">
                <Icon
                  name="groups"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-outline text-sm transition-colors group-focus-within:text-primary z-10"
                />
                <select
                  value={formData.role}
                  onChange={(e) =>
                    onFieldChange(
                      "role",
                      e.target.value as RegisterFormData["role"],
                    )
                  }
                  className="w-full bg-surface-container-low border border-transparent rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary text-on-surface transition-all font-medium focus:outline-none appearance-none"
                >
                  {roleOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <Icon
                  name="expand_more"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-outline text-sm pointer-events-none"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold px-1">
              Địa chỉ email
            </label>
            <div className="group relative">
              <Icon
                name="alternate_email"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-outline text-sm transition-colors group-focus-within:text-primary"
              />
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => onFieldChange("email", e.target.value)}
                className="w-full bg-surface-container-low border border-transparent rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary text-on-surface transition-all placeholder:text-outline font-medium focus:outline-none"
                placeholder="john@stms.travel"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold px-1">
              Thiết lập mật khẩu
            </label>
            <div className="group relative">
              <Icon
                name="lock"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-outline text-sm transition-colors group-focus-within:text-primary"
              />
              <input
                required
                type="password"
                value={formData.password}
                onChange={(e) => onFieldChange("password", e.target.value)}
                className="w-full bg-surface-container-low border border-transparent rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary text-on-surface transition-all placeholder:text-outline font-medium focus:outline-none"
                placeholder="••••••••••••"
              />
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-container text-on-primary py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-colors shadow-lg shadow-primary/20 flex gap-2 justify-center items-center group"
            >
              Tạo tài khoản
              <Icon
                name="navigate_next"
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </form>

        <div className="mt-8 pt-8 border-t border-outline-variant/30 text-center">
          <p className="text-sm font-medium text-on-surface-variant">
            Đã có tài khoản?{" "}
            <Link
              href="/login"
              className="text-primary hover:underline font-bold"
            >
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
