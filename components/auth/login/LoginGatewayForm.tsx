import Icon from "@/components/ui/Icon";
import Link from "next/link";
import { AuthRole } from "@/types/auth";

interface LoginGatewayFormProps {
  email: string;
  password: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onLogin: (e: React.FormEvent, role: AuthRole) => void;
}

export default function LoginGatewayForm({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onLogin,
}: LoginGatewayFormProps) {
  return (
    <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-surface-container-lowest relative z-10">
      <div className="mb-10">
        <h1 className="font-extrabold text-3xl tracking-tight text-on-surface mb-2">
          Chào mừng quay lại
        </h1>
        <p className="text-on-surface-variant text-sm md:text-base">
          Nhập thông tin đăng nhập để truy cập nền tảng STMS.
        </p>
      </div>

      <form className="space-y-6">
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
              type="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              className="w-full bg-surface-container-low border border-transparent rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent text-on-surface transition-all placeholder:text-outline font-medium focus:outline-none"
              placeholder="administrator@stms.travel"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold px-1">
            Mật khẩu
          </label>
          <div className="group relative">
            <Icon
              name="lock"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-outline text-sm transition-colors group-focus-within:text-primary"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
              className="w-full bg-surface-container-low border border-transparent rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent text-on-surface transition-all placeholder:text-outline font-medium focus:outline-none"
              placeholder="••••••••••••"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors cursor-pointer text-sm"
            >
              <Icon name="visibility" />
            </button>
          </div>
          <div className="flex justify-end pt-2">
            <span className="text-sm font-bold text-primary hover:text-primary-container transition-colors cursor-pointer">
              Quên mật khẩu?
            </span>
          </div>
        </div>

        <div className="pt-6 flex flex-col gap-3">
          <button
            onClick={(e) => onLogin(e, "customer")}
            className="w-full bg-primary hover:bg-primary/90 text-on-primary py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-colors shadow-lg shadow-primary/20 flex gap-2 justify-center items-center"
          >
            Đăng nhập khách hàng
            <Icon name="arrow_forward" className="text-sm" />
          </button>
          <button
            onClick={(e) => onLogin(e, "admin")}
            className="w-full bg-surface-container hover:bg-surface-container-high text-on-surface py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-colors flex gap-2 justify-center items-center"
          >
            <Icon name="shield_person" className="text-sm" />
            Đăng nhập quản trị viên
          </button>
        </div>
      </form>

      <div className="mt-10 text-center">
        <p className="text-sm font-medium text-on-surface-variant">
          Chưa có tài khoản?{" "}
          <Link
            href="/register"
            className="text-primary hover:underline font-bold"
          >
            Yêu cầu quyền truy cập
          </Link>
        </p>
      </div>
    </div>
  );
}
