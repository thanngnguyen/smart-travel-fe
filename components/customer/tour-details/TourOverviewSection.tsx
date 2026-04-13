import { TourDetailsMeta } from "@/types/customer-tour-details";

interface TourOverviewSectionProps {
  description: TourDetailsMeta["description"];
}

export default function TourOverviewSection({
  description,
}: TourOverviewSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-extrabold text-on-surface mb-4">
        Về hành trình này
      </h2>
      <p className="text-on-surface-variant leading-relaxed text-lg">
        {description}
      </p>
    </section>
  );
}
