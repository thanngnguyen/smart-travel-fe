"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  CUSTOMER_DEAL_CATEGORIES,
  CUSTOMER_DEALS,
  CUSTOMER_DEALS_HERO,
  CUSTOMER_DEALS_NEWSLETTER,
} from "@/lib/customer-deals-data";
import { CustomerDeal } from "@/types/customer-deals";

function normalizeSearchValue(value: string) {
  return value
    .toLocaleLowerCase("vi")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

async function copyToClipboard(value: string) {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  if (typeof document === "undefined") {
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = value;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

export function useCustomerDealsData() {
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [favoriteDealIds, setFavoriteDealIds] = useState<string[]>([]);
  const [copiedDealId, setCopiedDealId] = useState<string | null>(null);
  const clearCopiedStateTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (clearCopiedStateTimeoutRef.current) {
        window.clearTimeout(clearCopiedStateTimeoutRef.current);
      }
    };
  }, []);

  const filteredDeals = useMemo(() => {
    const normalizedQuery = normalizeSearchValue(searchQuery.trim());

    return CUSTOMER_DEALS.filter((deal) => {
      const isCategoryMatched =
        activeCategoryId === "all" || deal.categoryId === activeCategoryId;

      if (!isCategoryMatched) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const searchableText = normalizeSearchValue(
        `${deal.title} ${deal.location} ${deal.categoryLabel}`,
      );

      return searchableText.includes(normalizedQuery);
    });
  }, [activeCategoryId, searchQuery]);

  const toggleFavoriteDeal = (dealId: string) => {
    setFavoriteDealIds((currentDealIds) => {
      if (currentDealIds.includes(dealId)) {
        return currentDealIds.filter((id) => id !== dealId);
      }

      return [...currentDealIds, dealId];
    });
  };

  const isFavoriteDeal = (dealId: string) => favoriteDealIds.includes(dealId);

  const copyDealPromoCode = async (deal: CustomerDeal) => {
    try {
      await copyToClipboard(deal.promoCode);
      setCopiedDealId(deal.id);

      if (clearCopiedStateTimeoutRef.current) {
        window.clearTimeout(clearCopiedStateTimeoutRef.current);
      }

      clearCopiedStateTimeoutRef.current = window.setTimeout(() => {
        setCopiedDealId((currentId) =>
          currentId === deal.id ? null : currentId,
        );
      }, 2000);
    } catch {
      setCopiedDealId(null);
    }
  };

  return {
    hero: CUSTOMER_DEALS_HERO,
    newsletter: CUSTOMER_DEALS_NEWSLETTER,
    categories: CUSTOMER_DEAL_CATEGORIES,
    deals: CUSTOMER_DEALS,
    filteredDeals,
    activeCategoryId,
    setActiveCategoryId,
    searchQuery,
    setSearchQuery,
    copiedDealId,
    isFavoriteDeal,
    toggleFavoriteDeal,
    copyDealPromoCode,
  };
}
