import React from "react";
import Icon from "@/components/ui/Icon";
import { GuideProfile } from "@/types/guide-portal";

interface GuideProfileCardProps {
  profile: GuideProfile;
}

export default function GuideProfileCard({ profile }: GuideProfileCardProps) {
  return (
    <div className="space-y-6">
      {/* Profile hero */}
      <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_20px_40px_rgba(25,28,30,0.04)]">
        <div className="flex items-start gap-6">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-3xl font-black text-white shadow-xl shadow-primary/20 shrink-0">
            {profile.avatarInitials}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-extrabold text-on-surface mb-1">
              {profile.fullName}
            </h2>
            <p className="text-sm font-bold text-primary mb-3">
              {profile.roleLabel}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <InfoChip icon="location_on" value={profile.baseLocation} />
              <InfoChip
                icon="star"
                value={`${profile.rating}/5.0`}
                iconFilled
                highlight
              />
            </div>
          </div>
        </div>
      </div>

      {/* Details grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Languages */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_10px_30px_rgba(25,28,30,0.03)]">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-xl bg-primary/10">
              <Icon name="translate" className="text-primary" />
            </div>
            <h3 className="text-sm font-bold text-on-surface">Ngôn ngữ</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {profile.languages.map((lang) => (
              <span
                key={lang}
                className="px-4 py-2 rounded-xl bg-surface-container-low text-sm font-bold text-on-surface"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_10px_30px_rgba(25,28,30,0.03)]">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-xl bg-secondary-fixed">
              <Icon name="psychology" className="text-on-secondary-fixed-variant" />
            </div>
            <h3 className="text-sm font-bold text-on-surface">Chuyên môn</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {profile.expertise.map((exp) => (
              <span
                key={exp}
                className="px-4 py-2 rounded-xl bg-surface-container-low text-sm font-bold text-on-surface"
              >
                {exp}
              </span>
            ))}
          </div>
        </div>

        {/* Workload */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_10px_30px_rgba(25,28,30,0.03)] lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-xl bg-tertiary-fixed">
              <Icon name="event_available" className="text-on-tertiary-fixed-variant" />
            </div>
            <h3 className="text-sm font-bold text-on-surface">
              Khối lượng công việc tháng này
            </h3>
          </div>

          <div className="flex items-end gap-8">
            {/* Progress ring */}
            <WorkloadRing
              used={profile.monthlyWorkloadDays}
              limit={profile.monthlyWorkloadLimit}
            />

            {/* Stats */}
            <div className="flex-1 grid grid-cols-3 gap-6">
              <WorkloadStat
                label="Đã làm việc"
                value={`${profile.monthlyWorkloadDays} ngày`}
                icon="work_history"
                iconClass="bg-primary/10 text-primary"
              />
              <WorkloadStat
                label="Giới hạn"
                value={`${profile.monthlyWorkloadLimit} ngày`}
                icon="event_busy"
                iconClass="bg-surface-container-high text-on-surface-variant"
              />
              <WorkloadStat
                label="Còn trống"
                value={`${profile.monthlyWorkloadLimit - profile.monthlyWorkloadDays} ngày`}
                icon="event_available"
                iconClass="bg-green-100 text-green-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoChip({
  icon,
  value,
  iconFilled,
  highlight,
}: {
  icon: string;
  value: string;
  iconFilled?: boolean;
  highlight?: boolean;
}) {
  return (
    <span
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold ${
        highlight
          ? "bg-amber-100 text-amber-700"
          : "bg-surface-container-low text-on-surface-variant"
      }`}
    >
      <Icon name={icon} filled={iconFilled} className="text-sm" />
      {value}
    </span>
  );
}

function WorkloadRing({ used, limit }: { used: number; limit: number }) {
  const pct = Math.min(100, (used / limit) * 100);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;
  const color = pct >= 90 ? "#dc2626" : pct >= 70 ? "#d97706" : "#16a34a";

  return (
    <div className="relative shrink-0">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-surface-container-high"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 50 50)"
          className="transition-all duration-700"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-black text-on-surface">
          {Math.round(pct)}%
        </span>
        <span className="text-[9px] font-bold text-outline uppercase">
          Tải
        </span>
      </div>
    </div>
  );
}

function WorkloadStat({
  label,
  value,
  icon,
  iconClass,
}: {
  label: string;
  value: string;
  icon: string;
  iconClass: string;
}) {
  return (
    <div>
      <div className={`inline-flex p-2 rounded-xl ${iconClass} mb-2`}>
        <Icon name={icon} className="text-lg" />
      </div>
      <p className="text-[10px] font-bold text-outline uppercase tracking-widest">
        {label}
      </p>
      <p className="text-lg font-black text-on-surface mt-0.5">{value}</p>
    </div>
  );
}
