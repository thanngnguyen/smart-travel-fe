import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import TourCard from "@/components/ui/TourCard";
import UiSelect from "@/components/ui/UiSelect";
import { CustomerListingTour, ToursSortOption } from "@/types/customer-tours";

interface ToursResultsSectionProps {
  tours: CustomerListingTour[];
  sortOptions: ToursSortOption[];
}

export default function ToursResultsSection({
  tours,
  sortOptions,
}: ToursResultsSectionProps) {
  const sortSelectOptions = sortOptions.map((option) => ({
    value: option.value,
    label: option.label,
  }));

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
          <UiSelect
            options={sortSelectOptions}
            defaultValue={sortSelectOptions[0]?.value}
            size="lg"
            variant="surface"
            className="rounded-full bg-transparent border-outline-variant/40 py-2.5 pl-5 pr-10 font-bold hover:border-outline-variant/80"
          />
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
          className="border-outline-variant/40 bg-surface-tint hover:bg-surface-tint/80 shadow-sm px-10"
        >
          <Icon name="refresh" className="mr-2" /> Tải thêm hành trình
        </Button>
      </div>
    </section>
  );
}
