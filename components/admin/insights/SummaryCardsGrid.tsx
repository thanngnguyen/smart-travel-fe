import { InsightSummaryCard } from "@/types/admin-insights";

interface SummaryCardsGridProps {
  cards: InsightSummaryCard[];
}

export default function SummaryCardsGrid({ cards }: SummaryCardsGridProps) {
  return (
    <>
      {cards.map((card) => (
        <div
          key={card.id}
          className="col-span-3 bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/15 flex flex-col gap-3"
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${card.iconContainerClassName} ${card.iconClassName}`}
          >
            <span className="material-symbols-outlined">{card.iconName}</span>
          </div>
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
              {card.label}
            </p>
            <h4 className="text-2xl font-black">{card.value}</h4>
          </div>
          <p className="text-[10px] text-slate-500">{card.description}</p>
        </div>
      ))}
    </>
  );
}
