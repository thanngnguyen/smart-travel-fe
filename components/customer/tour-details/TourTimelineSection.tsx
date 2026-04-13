import { TourTimelineItem } from "@/types/customer-tour-details";

interface TourTimelineSectionProps {
  timeline: TourTimelineItem[];
}

export default function TourTimelineSection({
  timeline,
}: TourTimelineSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-extrabold text-on-surface mb-6">
        Lịch trình linh hoạt
      </h2>
      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outline-variant before:to-transparent">
        {timeline.map((item, index) => (
          <div
            key={item.id}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white shadow font-bold z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
              {index + 1}
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-sm border border-slate-100 group-hover:-translate-y-1 transition-transform">
              <h4 className="font-bold text-lg text-primary mb-2">
                Ngày {index + 1}: {item.title}
              </h4>
              <p className="text-on-surface-variant text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
