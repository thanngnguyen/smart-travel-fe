import { RedFlagReview } from "@/types/admin-insights";

interface RedFlagReviewsSectionProps {
  reviews: RedFlagReview[];
}

export default function RedFlagReviewsSection({
  reviews,
}: RedFlagReviewsSectionProps) {
  return (
    <div className="col-span-12 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/15 overflow-hidden">
      <div className="px-6 py-5 bg-surface-container flex justify-between items-center border-b border-outline-variant/10">
        <h3 className="text-lg font-extrabold flex items-center gap-2">
          <span className="material-symbols-outlined text-error">flag</span>
          Đánh giá &quot;Cờ đỏ&quot;
        </h3>
        <span className="px-2 py-1 bg-tertiary-container text-on-tertiary-container text-[10px] font-black rounded-md">
          8 HÀNH ĐỘNG KHẨN
        </span>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant/10">
              <th className="px-6 py-3 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">
                Khách hàng
              </th>
              <th className="px-6 py-3 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">
                Trích đoạn đánh giá
              </th>
              <th className="px-6 py-3 text-[10px] font-black text-on-surface-variant uppercase tracking-widest text-center">
                Điểm cảm xúc
              </th>
              <th className="px-6 py-3 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">
                Ý định chính
              </th>
              <th className="px-6 py-3 text-[10px] font-black text-on-surface-variant uppercase tracking-widest text-right">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10">
            {reviews.map((review, index) => (
              <tr
                key={review.id}
                className={`hover:bg-surface-container-low/50 transition-colors ${
                  index === 1 ? "bg-surface-container-low/20" : ""
                }`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center font-bold text-xs">
                      {review.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold">{review.customerName}</p>
                      <p className="text-[10px] text-slate-500">
                        {review.customerType}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-on-surface max-w-xs truncate italic">
                    {review.excerpt}
                  </p>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-xs font-black">
                    <span
                      className="material-symbols-outlined text-xs"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      mood_bad
                    </span>
                    {review.sentiment}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold rounded">
                    {review.primaryIntent}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-primary font-bold text-xs hover:underline">
                    Chuyển xử lý
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 bg-surface-container-low text-center">
        <button className="text-sm font-bold text-primary hover:text-primary-container transition-colors">
          Xem toàn bộ 124 cảnh báo
        </button>
      </div>
    </div>
  );
}
