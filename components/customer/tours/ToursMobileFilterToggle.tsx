import Icon from "@/components/ui/Icon";

interface ToursMobileFilterToggleProps {
  onToggle: () => void;
}

export default function ToursMobileFilterToggle({
  onToggle,
}: ToursMobileFilterToggleProps) {
  return (
    <div className="lg:hidden fixed bottom-6 right-6 z-50">
      <button
        onClick={onToggle}
        className="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
      >
        <Icon name="tune" />
      </button>
    </div>
  );
}
