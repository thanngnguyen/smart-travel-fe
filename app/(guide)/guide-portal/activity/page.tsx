"use client";

import React from "react";
import { useGuidePortalData } from "@/hooks/useGuidePortalData";
import GuideSyncLogPanel from "@/components/guide/dashboard/GuideSyncLogPanel";
import Icon from "@/components/ui/Icon";

export default function GuideActivityPage() {
  const { latestLogs } = useGuidePortalData();

  return (
    <>
      <header className="h-20 px-8 flex items-center sticky top-0 z-10 bg-surface-container-low/80 backdrop-blur-xl">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-on-surface">
            Nhật ký hoạt động
          </h1>
          <p className="text-sm text-on-surface-variant font-medium">
            Lịch sử thao tác và đồng bộ gần đây.
          </p>
        </div>
      </header>

      <div className="px-8 pb-8">
        <GuideSyncLogPanel logs={latestLogs} />
      </div>
    </>
  );
}
