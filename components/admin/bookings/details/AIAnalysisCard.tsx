import Icon from "@/components/ui/Icon";
import { BookingAiInsight } from "@/types/admin-booking-details";

interface AIAnalysisCardProps {
  insight: BookingAiInsight;
}

export default function AIAnalysisCard({ insight }: AIAnalysisCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-outline-variant/10 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Icon name="psychology" className="text-blue-600" />
        <h4 className="font-bold">Phân tích AI</h4>
      </div>
      <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100 mb-4">
        <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">
          {insight.recommendationTitle}
        </p>
        <p className="text-sm text-slate-700">
          {insight.recommendationDescription}
        </p>
      </div>
      <div className="p-4 bg-tertiary-fixed/30 rounded-xl">
        <p className="text-xs font-bold text-tertiary uppercase tracking-widest mb-1">
          {insight.urgentActionTitle}
        </p>
        <p className="text-sm text-slate-700 font-medium">
          {insight.urgentActionDescription}
        </p>
      </div>
    </div>
  );
}
