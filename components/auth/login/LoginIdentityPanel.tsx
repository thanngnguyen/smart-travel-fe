import Icon from "@/components/ui/Icon";

export default function LoginIdentityPanel() {
  return (
    <div className="hidden lg:flex w-1/2 relative bg-primary flex-col justify-between p-12 overflow-hidden items-start">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tertiary blur-[120px] opacity-40 rounded-full mix-blend-multiply flex-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary blur-[150px] opacity-60 rounded-full mix-blend-multiply flex-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-sm mt-32">
        <h2 className="text-5xl font-black text-on-primary mb-6 leading-tight tracking-tight">
          Quản lý du lịch,
          <br />
          thông minh hơn.
        </h2>
        <p className="text-primary-container-lowest text-lg font-medium">
          Đăng nhập để giám sát đặt chỗ cao cấp, định giá linh hoạt và tối ưu lộ
          trình AI theo thời gian thực.
        </p>
      </div>

      <div className="relative z-10 mt-auto">
        <div className="flex items-center gap-2 mb-2 text-on-primary">
          <Icon name="verified_user" filled />
          <span className="text-sm font-bold uppercase tracking-widest">
            Bảo mật doanh nghiệp
          </span>
        </div>
      </div>
    </div>
  );
}
