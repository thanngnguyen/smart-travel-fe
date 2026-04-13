import AdminButton from "@/components/ui/AdminButton";
import { BookingPaymentBreakdown } from "@/types/admin-booking-details";

interface PaymentStatusCardProps {
  payment: BookingPaymentBreakdown;
}

export default function PaymentStatusCard({ payment }: PaymentStatusCardProps) {
  return (
    <div className="bg-primary text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
      <div className="absolute -right-12 -top-12 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div>
          <p className="text-primary-container text-xs font-bold tracking-widest uppercase">
            Trạng thái thanh toán
          </p>
          <h3 className="text-3xl font-black mt-1">{payment.paidAmount}</h3>
        </div>
        <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold">
          {payment.statusLabel}
        </div>
      </div>
      <div className="space-y-3 relative z-10">
        <div className="flex justify-between text-xs font-medium">
          <span className="opacity-70">Tạm tính</span>
          <span>{payment.subtotal}</span>
        </div>
        <div className="flex justify-between text-xs font-medium">
          <span className="opacity-70">Thuế &amp; phí</span>
          <span>{payment.feesAndTaxes}</span>
        </div>
        <div className="pt-3 border-t border-white/10 flex justify-between text-xs font-bold">
          <span>Tổng cộng</span>
          <span>{payment.total}</span>
        </div>
      </div>
      <AdminButton variant="white" size="lg" fullWidth className="mt-6 py-3">
        Tải hóa đơn
      </AdminButton>
    </div>
  );
}
