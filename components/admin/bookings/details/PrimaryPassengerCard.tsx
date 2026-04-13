import Icon from "@/components/ui/Icon";
import { PassengerInfo } from "@/types/admin-booking-details";

interface PrimaryPassengerCardProps {
  passenger: PassengerInfo;
}

export default function PrimaryPassengerCard({
  passenger,
}: PrimaryPassengerCardProps) {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
          <Icon name="person" />
        </div>
        <div>
          <h4 className="font-bold text-lg">{passenger.name}</h4>
          <p className="text-xs text-outline">
            Hành khách chính (ID: {passenger.passengerId})
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center text-sm">
          <span className="text-outline">Email</span>
          <span className="font-medium">{passenger.email}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-outline">Số điện thoại</span>
          <span className="font-medium">{passenger.phone}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-outline">Quốc tịch</span>
          <span className="font-medium">{passenger.nationality}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-outline">Hộ chiếu</span>
          <span className="font-medium">{passenger.passportMasked}</span>
        </div>
      </div>
    </div>
  );
}
