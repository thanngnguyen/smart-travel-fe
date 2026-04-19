import Icon from "@/components/ui/Icon";
import Link from "next/link";
import { RegisterFlowStep, RegisterFormData } from "@/types/auth";

interface RegisterGatewayFormProps {
  step: RegisterFlowStep;
  formData: RegisterFormData;
  isSubmitting: boolean;
  notice?: {
    tone: "success" | "error" | "info";
    text: string;
  } | null;
  onFieldChange: <K extends keyof RegisterFormData>(
    field: K,
    value: RegisterFormData[K],
  ) => void;
  onSubmitRegister: (e: React.FormEvent) => void;
  onVerifyOtp: (e: React.FormEvent) => void;
  onResendOtp: () => void;
  onBackToRegister: () => void;
}

export default function RegisterGatewayForm({
  step,
  formData,
  isSubmitting,
  notice,
  onFieldChange,
  onSubmitRegister,
  onVerifyOtp,
  onResendOtp,
  onBackToRegister,
}: RegisterGatewayFormProps) {
  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      <div className="w-full bg-surface-container-lowest shadow-[0_20px_40px_rgba(25,28,30,0.06)] rounded-[2.5rem] p-8 md:p-12 border border-slate-100">
        <div className="mb-10 text-center">
          <h1 className="font-extrabold text-3xl tracking-tight text-on-surface mb-2">
            {step === "register"
              ? "Bắt đầu hành trình của bạn"
              : "Xác thực OTP"}
          </h1>
          <p className="text-on-surface-variant text-sm md:text-base font-medium">
            {step === "register"
              ? "Đăng ký tài khoản theo luồng backend và nhận OTP qua email."
              : "Nhập mã OTP để kích hoạt tài khoản mới."}
          </p>
        </div>

        {step === "register" ? (
          <form className="space-y-6" onSubmit={onSubmitRegister}>
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

            <p className="rounded-xl bg-surface-container px-4 py-3 text-xs font-medium text-on-surface-variant">
              Theo backend Velaris, role mặc định khi đăng ký là USER và chỉ
              được kích hoạt sau khi xác thực OTP.
            </p>

            {notice ? (
              <p
                className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                  notice.tone === "error"
                    ? "bg-error-container text-on-error-container"
                    : notice.tone === "success"
                      ? "bg-primary-fixed text-on-primary-fixed-variant"
                      : "bg-secondary-fixed text-on-secondary-fixed-variant"
                }`}
              >
                {notice.text}
              </p>
            ) : null}

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-container text-on-primary py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-colors shadow-lg shadow-primary/20 flex gap-2 justify-center items-center group disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Đang gửi OTP..." : "Đăng ký và nhận OTP"}
                <Icon
                  name="navigate_next"
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </form>
        ) : (
          <form className="space-y-6" onSubmit={onVerifyOtp}>
            <div className="flex flex-col space-y-2">
              <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold px-1">
                Email đăng ký
              </label>
              <div className="group relative">
                <Icon
                  name="alternate_email"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-outline text-sm"
                />
                <input
                  type="email"
                  value={formData.email}
                  readOnly
                  className="w-full bg-surface-container-low border border-transparent rounded-xl py-4 pl-12 pr-4 text-on-surface font-medium focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold px-1">
                Mã OTP (6 chữ số)
              </label>
              <div className="group relative">
                <Icon
                  name="password"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-outline text-sm transition-colors group-focus-within:text-primary"
                />
                <input
                  required
                  type="text"
                  maxLength={6}
                  value={formData.otpCode}
                  onChange={(e) => onFieldChange("otpCode", e.target.value)}
                  className="w-full bg-surface-container-low border border-transparent rounded-xl py-4 pl-12 pr-4 tracking-[0.3em] text-on-surface font-medium focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="123456"
                />
              </div>
            </div>

            {notice ? (
              <p
                className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                  notice.tone === "error"
                    ? "bg-error-container text-on-error-container"
                    : notice.tone === "success"
                      ? "bg-primary-fixed text-on-primary-fixed-variant"
                      : "bg-secondary-fixed text-on-secondary-fixed-variant"
                }`}
              >
                {notice.text}
              </p>
            ) : null}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={onBackToRegister}
                className="rounded-xl border border-outline-variant/60 py-3 px-4 text-sm font-semibold text-on-surface-variant hover:bg-surface-container"
              >
                Quay lại
              </button>
              <button
                type="button"
                onClick={onResendOtp}
                className="rounded-xl border border-primary/30 py-3 px-4 text-sm font-semibold text-primary hover:bg-primary/5"
              >
                Gửi lại OTP
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-xl bg-primary py-3 px-4 text-sm font-bold text-on-primary hover:bg-primary-container disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Đang xác thực..." : "Xác thực OTP"}
              </button>
            </div>
          </form>
        )}

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
