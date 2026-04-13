import Icon from "@/components/ui/Icon";
import { TourDetailHighlight } from "@/types/customer-tour-details";

interface TourHighlightsSectionProps {
  highlights: TourDetailHighlight[];
}

export default function TourHighlightsSection({
  highlights,
}: TourHighlightsSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-extrabold text-on-surface mb-6">
        Điểm nổi bật
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((highlight) => (
          <div
            key={highlight.id}
            className="flex gap-4 items-start p-4 rounded-2xl bg-surface-container-highest/30"
          >
            <div className="bg-white p-3 rounded-xl shadow-sm text-primary">
              <Icon name={highlight.icon} />
            </div>
            <div>
              <h4 className="font-bold text-on-surface mb-1">
                {highlight.title}
              </h4>
              <p className="text-sm text-on-surface-variant">
                {highlight.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
