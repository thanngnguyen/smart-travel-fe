import Icon from "@/components/ui/Icon";
import PillBadge from "@/components/ui/PillBadge";
import SurfaceCard from "@/components/ui/SurfaceCard";
import Image from "next/image";
import { ConciergeMessage, ConciergeRecommendation } from "@/types/concierge";
import { RefObject } from "react";

interface ChatMessageThreadProps {
  messages: ConciergeMessage[];
  recommendations: ConciergeRecommendation[];
  messagesEndRef: RefObject<HTMLDivElement | null>;
}

function RecommendationCard({
  recommendation,
}: {
  recommendation: ConciergeRecommendation;
}) {
  return (
    <SurfaceCard
      tone="white"
      border="soft"
      shadow="elevated"
      radius="3xl"
      className="min-w-[320px] overflow-hidden snap-start group cursor-pointer transition-transform hover:-translate-y-1 relative"
    >
      <div className="h-44 relative">
        <Image
          alt={recommendation.title}
          className="object-cover"
          fill
          sizes="320px"
          src={recommendation.imageUrl}
        />
        <div className="absolute top-4 left-4">
          <PillBadge
            tone="tertiary"
            size="xs"
            className="uppercase tracking-widest"
          >
            <Icon name="auto_awesome" filled className="text-[12px]" /> AI ĐỀ
            XUẤT
          </PillBadge>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-headline font-bold text-lg text-on-surface">
            {recommendation.title}
          </h3>
          <span className="text-primary font-bold">{recommendation.price}</span>
        </div>
        <p className="text-xs text-on-surface-variant line-clamp-2 mb-4">
          {recommendation.description}
        </p>
        <button className="w-full py-2 bg-primary-fixed text-on-primary-fixed-variant rounded-xl font-bold text-sm transition-colors hover:bg-primary-container hover:text-white">
          Thêm vào lịch trình
        </button>
      </div>
    </SurfaceCard>
  );
}

export default function ChatMessageThread({
  messages,
  recommendations,
  messagesEndRef,
}: ChatMessageThreadProps) {
  return (
    <div className="flex-1 overflow-y-auto space-y-8 pr-4 custom-scrollbar">
      {messages.map((message) =>
        message.role === "ai" ? (
          <div key={message.id} className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
              <Icon name="smart_toy" filled className="text-white" />
            </div>
            <div className="space-y-3 max-w-[85%]">
              <div className="bg-white p-5 rounded-2xl rounded-tl-none shadow-[0_10px_25px_rgba(0,0,0,0.03)] border border-outline-variant/10">
                <p className="text-on-surface leading-relaxed whitespace-pre-line">
                  {message.text}
                </p>
              </div>
              {message.entities && message.entities.length > 0 ? (
                <div className="flex gap-2 flex-wrap">
                  <PillBadge tone="primary-fixed" size="sm" uppercase>
                    Thực thể: {message.entities[0]}
                  </PillBadge>
                  {message.entities[1] ? (
                    <PillBadge tone="tertiary-fixed" size="sm" uppercase>
                      {message.entities[1]}
                    </PillBadge>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <div key={message.id} className="flex gap-4 justify-end">
            <div className="bg-primary-container text-white p-5 rounded-2xl rounded-tr-none max-w-[70%] shadow-md">
              <p className="leading-relaxed whitespace-pre-line">
                {message.text}
              </p>
            </div>
            <Image
              alt="Ảnh đại diện khách hàng"
              className="w-10 h-10 rounded-xl shrink-0 object-cover"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&h=128&q=80"
              width={40}
              height={40}
            />
          </div>
        ),
      )}

      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
          <Icon name="smart_toy" filled className="text-white" />
        </div>
        <div className="space-y-6 w-full">
          <div className="bg-white p-5 rounded-2xl rounded-tl-none shadow-[0_10px_25px_rgba(0,0,0,0.03)] border border-outline-variant/10 max-w-[85%]">
            <p className="text-on-surface leading-relaxed italic">
              Đang xử lý yêu cầu... Tìm thấy hai nghi thức riêng tư &quot;chuẩn
              thiền&quot; khả dụng trong thời gian bạn lưu trú.
            </p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
            {recommendations.map((recommendation) => (
              <RecommendationCard
                key={recommendation.id}
                recommendation={recommendation}
              />
            ))}
          </div>
        </div>
      </div>

      <div ref={messagesEndRef} />
    </div>
  );
}
