import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import TourCard from "@/components/ui/TourCard";
import { CustomerListingTour, ToursSortOption } from "@/types/customer-tours";

interface ToursResultsSectionProps {
  tours: CustomerListingTour[];
  sortOptions: ToursSortOption[];
}

export default function ToursResultsSection({
  tours,
  sortOptions,
}: ToursResultsSectionProps) {
  return (
    <section className="flex-1 px-4 lg:px-8 xl:pr-12 w-full max-w-300">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-outline-variant/30">
        <div>
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-outline mb-3">
            <span>Trang chủ</span>
            <Icon name="chevron_right" className="text-sm" />
            <span className="text-primary bg-primary/10 px-2 py-0.5 rounded-full">
              Khám phá tour
            </span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface">
            Hành trình tuyển chọn
          </h1>
          <p className="text-outline mt-3 font-medium text-lg">
            Hiển thị{" "}
            <strong className="text-on-surface">
              {tours.length} kết quả cao cấp
            </strong>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold text-outline uppercase tracking-wider hidden sm:inline-block">
            Sắp xếp theo:
          </span>
          <div className="relative">
            <select className="appearance-none border border-outline-variant/40 rounded-full px-5 py-2.5 pr-10 text-sm font-bold text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm hover:border-outline-variant/80 transition-colors cursor-pointer relative z-10 bg-transparent">
              {sortOptions.map((option) => (
                <option key={option.value}>{option.label}</option>
              ))}
            </select>
            <Icon
              name="expand_more"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none z-0"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {tours.map((tour, index) => (
          <div
            key={tour.id}
            className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <TourCard
              id={tour.id}
              title={tour.title}
              price={tour.price}
              rating={tour.rating}
              duration={tour.duration}
              image={tour.image}
            />
          </div>
        ))}
      </div>

      <div className="mt-12 mb-8 flex justify-center">
        <Button
          variant="secondary"
          size="lg"
          className="border-outline-variant/40 bg-surface-container-lowest hover:bg-surface-container shadow-sm px-10"
        >
          <Icon name="refresh" className="mr-2" /> Tải thêm hành trình
        </Button>
      </div>
    </section>
  );
}
