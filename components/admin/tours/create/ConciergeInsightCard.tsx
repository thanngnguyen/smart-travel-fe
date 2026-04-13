export default function ConciergeInsightCard() {
  return (
    <div className="bg-inverse-surface p-6 rounded-2xl shadow-xl space-y-3">
      <div className="flex items-center gap-2">
        <span
          className="material-symbols-outlined text-primary-fixed-dim"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          psychology
        </span>
        <span className="text-xs font-black text-white tracking-widest uppercase">
          Gợi ý Concierge
        </span>
      </div>
      <p className="text-xs text-inverse-on-surface leading-normal">
        &quot;Các Tour gốc có thời lượng 7 ngày và mức giá dưới $2,500 hiện có
        tỷ lệ chuyển đổi 84% tại khu vực Amalfi. Hãy cân nhắc thêm thẻ &apos;Thử
        rượu vang&apos; để tăng hiển thị.&quot;
      </p>
      <button className="text-[10px] font-bold text-primary-fixed-dim hover:underline transition-all">
        Áp dụng đề xuất
      </button>
    </div>
  );
}
