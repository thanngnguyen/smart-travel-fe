import Icon from "@/components/ui/Icon";
import { CustomerDealSupportCard } from "@/types/customer-deals";
import Link from "next/link";

interface DealConditionsSectionProps {
  title: string;
  conditionColumns: string[][];
  supportCard: CustomerDealSupportCard;
}

export default function DealConditionsSection({
  title,
  conditionColumns,
  supportCard,
}: DealConditionsSectionProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8 rounded-3xl bg-surface-container-lowest p-7 md:p-10 shadow-[0_14px_35px_rgba(25,28,30,0.05)]">
        <h2 className="text-2xl font-black tracking-tight text-on-surface flex items-center gap-3">
          <Icon name="description" className="text-primary" />
          {title}
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-7">
          {conditionColumns.map((columnItems, columnIndex) => (
            <ul key={columnIndex} className="space-y-4">
              {columnItems.map((condition) => (
                <li key={condition} className="flex items-start gap-3">
                  <Icon
                    name="check_circle"
                    className="text-primary text-xl mt-0.5 shrink-0"
                  />
                  <span className="text-sm font-medium text-on-surface-variant leading-relaxed">
                    {condition}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <aside className="lg:col-span-4 rounded-3xl bg-primary-container p-7 md:p-8 text-on-primary-container shadow-[0_16px_34px_rgba(12,86,208,0.25)] flex flex-col justify-center">
        <div className="w-16 h-16 rounded-2xl bg-white/12 flex items-center justify-center mb-6">
          <Icon
            name={supportCard.icon}
            className="text-4xl"
            filled={supportCard.icon === "verified"}
          />
        </div>
        <h3 className="text-2xl font-black tracking-tight text-white">
          {supportCard.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-on-primary-container/85">
          {supportCard.description}
        </p>

        <Link
          href={supportCard.actionHref}
          className="mt-7 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-primary text-sm font-black hover:bg-surface transition-colors"
        >
          {supportCard.actionLabel}
        </Link>
      </aside>
    </section>
  );
}
