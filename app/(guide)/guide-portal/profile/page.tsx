"use client";

import React from "react";
import { useGuidePortalData } from "@/hooks/useGuidePortalData";
import GuideProfileCard from "@/components/guide/profile/GuideProfileCard";
import Icon from "@/components/ui/Icon";

export default function GuideProfilePage() {
  const { profile } = useGuidePortalData();

  return (
    <>
      <header className="h-20 px-8 flex items-center sticky top-0 z-10 bg-surface-container-low/80 backdrop-blur-xl">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-on-surface">
            Hồ sơ cá nhân
          </h1>
          <p className="text-sm text-on-surface-variant font-medium">
            Thông tin và chuyên môn của bạn.
          </p>
        </div>
      </header>

      <div className="px-8 pb-8">
        <GuideProfileCard profile={profile} />
      </div>
    </>
  );
}
