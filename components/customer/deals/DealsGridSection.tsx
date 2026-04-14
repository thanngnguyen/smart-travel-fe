import DealCard from "@/components/customer/deals/DealCard";
import { CustomerDeal } from "@/types/customer-deals";

interface DealsGridSectionProps {
  deals: CustomerDeal[];
  copiedDealId: string | null;
  onToggleFavorite: (dealId: string) => void;
  onCopyPromoCode: (deal: CustomerDeal) => void;
  isFavoriteDeal: (dealId: string) => boolean;
}

export default function DealsGridSection({
  deals,
  copiedDealId,
  onToggleFavorite,
  onCopyPromoCode,
  isFavoriteDeal,
}: DealsGridSectionProps) {
  if (!deals.length) {
    return (
      <section className="rounded-[2rem] bg-surface-container-low p-8 md:p-10 text-center shadow-[0_14px_36px_rgba(25,28,30,0.05)]">
        <h2 className="text-2xl font-black tracking-tight text-on-surface">
          Không tìm thấy ưu đãi phù hợp
        </h2>
        <p className="text-on-surface-variant mt-3 max-w-xl mx-auto leading-relaxed">
          Thử đổi bộ lọc hoặc từ khóa tìm kiếm để xem thêm những hành trình đang
          giảm giá cho thành viên STMS.
        </p>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-8">
      {deals.map((deal, index) => (
        <div
          key={deal.id}
          className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <DealCard
            deal={deal}
            isFavorite={isFavoriteDeal(deal.id)}
            isPromoCopied={copiedDealId === deal.id}
            onToggleFavorite={onToggleFavorite}
            onCopyPromoCode={onCopyPromoCode}
          />
        </div>
      ))}
    </section>
  );
}
