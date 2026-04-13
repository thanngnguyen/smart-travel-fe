import OperationsLogSection from "@/components/admin/reports/OperationsLogSection";
import PerformanceCardsSection from "@/components/admin/reports/PerformanceCardsSection";
import ReportsFooter from "@/components/admin/reports/ReportsFooter";
import ReportsHeader from "@/components/admin/reports/ReportsHeader";
import RevenueOverviewSection from "@/components/admin/reports/RevenueOverviewSection";
import { useAdminReportsData } from "@/hooks/useAdminReportsData";

export default function AdminReportsPage() {
  const {
    categoryBars,
    conversionChannels,
    guideUtilization,
    fillRateBars,
    logs,
    footerLinks,
    totalRevenue,
    bookingAverage,
    margin,
    fillRateValue,
  } = useAdminReportsData();

  return (
    <div className="bg-surface min-h-screen">
      <main className="p-8 min-h-screen">
        <ReportsHeader />

        <div className="grid grid-cols-12 gap-6">
          <RevenueOverviewSection
            bars={categoryBars}
            totalRevenue={totalRevenue}
            bookingAverage={bookingAverage}
            margin={margin}
          />

          <PerformanceCardsSection
            conversionChannels={conversionChannels}
            guideUtilization={guideUtilization}
            fillRateBars={fillRateBars}
            fillRateValue={fillRateValue}
          />

          <OperationsLogSection rows={logs} />
        </div>

        <ReportsFooter links={footerLinks} />
      </main>
    </div>
  );
}
