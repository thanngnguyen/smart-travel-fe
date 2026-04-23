import Icon from "@/components/ui/Icon";
import { SpecialRequestItem } from "@/types/admin-booking-details";

interface SpecialRequestsCardProps {
  requests: SpecialRequestItem[];
}

export default function SpecialRequestsCard({
  requests,
}: SpecialRequestsCardProps) {
  return (
    <div className="bg-red-100 p-6 rounded-2xl shadow-sm">
      <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
        <Icon name="priority_high" className="text-tertiary" />
        Yêu cầu đặc biệt
      </h4>
      <div className="space-y-3">
        {requests.map((request) => (
          <div
            key={request.id}
            className={`p-3 rounded-xl ${request.styleClassName}`}
          >
            <p
              className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${request.titleClassName}`}
            >
              {request.title}
            </p>
            <p className="text-sm font-medium">{request.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
