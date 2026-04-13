import InsightsHeader from "@/components/admin/insights/InsightsHeader";
import IntentStatsCard from "@/components/admin/insights/IntentStatsCard";
import RedFlagReviewsSection from "@/components/admin/insights/RedFlagReviewsSection";
import SentimentTrendCard from "@/components/admin/insights/SentimentTrendCard";
import SummaryCardsGrid from "@/components/admin/insights/SummaryCardsGrid";
import { useAdminInsightsData } from "@/hooks/useAdminInsightsData";

export default function AdminInsightsPage() {
  const {
    sentimentLegend,
    sentimentDays,
    intentStats,
    redFlagReviews,
    summaryCards,
  } = useAdminInsightsData();

  return (
    <div className="bg-surface min-h-screen">
      <main className="flex-1 p-8 bg-surface">
        <InsightsHeader />

        <div className="grid grid-cols-12 gap-6">
          <SentimentTrendCard legend={sentimentLegend} days={sentimentDays} />

          <IntentStatsCard stats={intentStats} />

          <RedFlagReviewsSection reviews={redFlagReviews} />

          <SummaryCardsGrid cards={summaryCards} />
        </div>
      </main>
    </div>
  );
}
