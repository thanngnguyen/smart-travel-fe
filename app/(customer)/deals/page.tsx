"use client";

import DealsFilterBar from "@/components/customer/deals/DealsFilterBar";
import DealsGridSection from "@/components/customer/deals/DealsGridSection";
import DealsHeroSection from "@/components/customer/deals/DealsHeroSection";
import DealsNewsletterSection from "@/components/customer/deals/DealsNewsletterSection";
import { useCustomerDealsData } from "@/hooks/useCustomerDealsData";

const DEALS_ANCHOR_ID = "customer-deals-grid";
const NEWSLETTER_ANCHOR_ID = "customer-deals-newsletter";

export default function DealsListingPage() {
  const {
    hero,
    newsletter,
    categories,
    filteredDeals,
    activeCategoryId,
    setActiveCategoryId,
    searchQuery,
    setSearchQuery,
    copiedDealId,
    isFavoriteDeal,
    toggleFavoriteDeal,
    copyDealPromoCode,
  } = useCustomerDealsData();

  return (
    <div className="bg-surface min-h-screen pb-24">
      <DealsHeroSection
        hero={hero}
        dealsAnchorId={DEALS_ANCHOR_ID}
        newsletterAnchorId={NEWSLETTER_ANCHOR_ID}
      />

      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 mt-12 md:mt-14">
        <div
          id={DEALS_ANCHOR_ID}
          className="relative bg-surface-container-low/70 rounded-[2rem] p-5 md:p-8 lg:p-10 shadow-[0_18px_45px_rgba(25,28,30,0.04)]"
        >
          <div className="absolute -top-20 -right-14 w-52 h-52 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-10 w-44 h-44 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <DealsFilterBar
              categories={categories}
              activeCategoryId={activeCategoryId}
              searchQuery={searchQuery}
              onCategoryChange={setActiveCategoryId}
              onSearchQueryChange={setSearchQuery}
            />

            <DealsGridSection
              deals={filteredDeals}
              copiedDealId={copiedDealId}
              onToggleFavorite={toggleFavoriteDeal}
              onCopyPromoCode={copyDealPromoCode}
              isFavoriteDeal={isFavoriteDeal}
            />
          </div>
        </div>

        <div id={NEWSLETTER_ANCHOR_ID}>
          <DealsNewsletterSection newsletter={newsletter} />
        </div>
      </div>
    </div>
  );
}
