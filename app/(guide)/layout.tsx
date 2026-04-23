"use client";

import React from "react";
import GuideSidebar from "@/components/guide/GuideSidebar";
import { useGuidePortalData } from "@/hooks/useGuidePortalData";
import GuideNoticeToast from "@/components/guide/GuideNoticeToast";

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { profile, metrics, notice, clearNotice } = useGuidePortalData();

  return (
    <div className="flex min-h-screen bg-surface-container-low text-on-surface">
      <GuideSidebar
        profile={profile}
        unreadCount={metrics.unreadMessages}
        openIncidents={metrics.openIncidents}
      />
      <main className="flex-1 overflow-x-hidden overflow-y-auto min-h-screen">
        {children}
      </main>
      <GuideNoticeToast message={notice} onDismiss={clearNotice} />
    </div>
  );
}
