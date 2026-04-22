"use client"; // 1. THÊM DÒNG NÀY ĐỂ BIẾN THÀNH CLIENT COMPONENT

import React from "react"; // 2. IMPORT REACT ĐỂ DÙNG React.use()
import TourBookingWidget from "@/components/customer/tour-details/TourBookingWidget";
import TourDetailsHero from "@/components/customer/tour-details/TourDetailsHero";
import TourHighlightsSection from "@/components/customer/tour-details/TourHighlightsSection";
import TourOverviewSection from "@/components/customer/tour-details/TourOverviewSection";
import TourTimelineSection from "@/components/customer/tour-details/TourTimelineSection";
import { useCustomerTourDetailsData } from "@/hooks/useCustomerTourDetailsData";

interface TourDetailsPageProps {
  params: Promise<{ id: string }>; // 3. KHAI BÁO PARAMS LÀ MỘT PROMISE
}

export default function TourDetailsPage({ params }: TourDetailsPageProps) {
  // 4. BÓC TÁCH PARAMS BẰNG React.use() CHUẨN NEXT.JS 15+
  const resolvedParams = React.use(params);
  const tourSlug = resolvedParams.id;
  
  const { meta, gallery, highlights, timeline, booking, isLoading } =
    useCustomerTourDetailsData(tourSlug);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface pt-24">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="text-blue-600 font-medium animate-pulse">Đang chuẩn bị chuyến đi cho bạn...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-surface">
      <TourDetailsHero meta={meta} gallery={gallery} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
        <div className="lg:col-span-2 space-y-12">
          <TourOverviewSection description={meta.description} />
          <TourHighlightsSection highlights={highlights} />
          <TourTimelineSection timeline={timeline} />
        </div>

        <div className="lg:col-span-1">
          <TourBookingWidget booking={booking} />
        </div>
      </div>
    </div>
  );
}