import React from "react";
import Icon from "@/components/ui/Icon";
import { GuidePortalMetrics } from "@/types/guide-portal";

interface GuideMetricsGridProps {
  metrics: GuidePortalMetrics;
}

interface MetricCardConfig {
  key: string;
  label: string;
  icon: string;
  getValue: (m: GuidePortalMetrics) => number;
  iconWrapperClass: string;
  pulse?: (m: GuidePortalMetrics) => boolean;
}

const METRIC_CARDS: MetricCardConfig[] = [
  {
    key: "readiness",
    label: "Độ sẵn sàng",
    icon: "speed",
    getValue: (m) => m.readinessScore,
    iconWrapperClass: "bg-green-100 text-green-600",
  },
  {
    key: "pending",
    label: "Chờ tiếp nhận",
    icon: "pending_actions",
    getValue: (m) => m.pendingConfirmations,
    iconWrapperClass: "bg-amber-100 text-amber-600",
    pulse: (m) => m.pendingConfirmations > 0,
  },
  {
    key: "active",
    label: "Đang vận hành",
    icon: "directions_bus",
    getValue: (m) => m.activeDepartures,
    iconWrapperClass: "bg-primary/10 text-primary",
  },
  {
    key: "checkedIn",
    label: "Đã check-in",
    icon: "how_to_reg",
    getValue: (m) => m.checkedInPassengers,
    iconWrapperClass: "bg-blue-100 text-blue-600",
  },
  {
    key: "incidents",
    label: "Sự cố mở",
    icon: "warning",
    getValue: (m) => m.openIncidents,
    iconWrapperClass: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
    pulse: (m) => m.openIncidents > 0,
  },
  {
    key: "unread",
    label: "Tin chưa đọc",
    icon: "mark_unread_chat_alt",
    getValue: (m) => m.unreadMessages,
    iconWrapperClass: "bg-secondary-fixed text-on-secondary-fixed-variant",
  },
];

function ReadinessRing({ score }: { score: number }) {
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color =
    score >= 80 ? "#16a34a" : score >= 50 ? "#d97706" : "#dc2626";

  return (
    <svg width="56" height="56" viewBox="0 0 56 56" className="shrink-0">
      <circle
        cx="28"
        cy="28"
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        className="text-surface-container-high"
      />
      <circle
        cx="28"
        cy="28"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 28 28)"
        className="transition-all duration-700"
      />
      <text
        x="28"
        y="28"
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-on-surface text-xs font-black"
      >
        {score}
      </text>
    </svg>
  );
}

export default function GuideMetricsGrid({ metrics }: GuideMetricsGridProps) {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {METRIC_CARDS.map((card) => {
        const value = card.getValue(metrics);
        const showPulse = card.pulse?.(metrics);

        return (
          <div
            key={card.key}
            className="bg-surface-container-lowest p-5 rounded-2xl shadow-[0_10px_30px_rgba(25,28,30,0.03)] hover:shadow-[0_20px_40px_rgba(25,28,30,0.06)] transition-all duration-300 group"
          >
            <div className="flex items-start justify-between">
              {card.key === "readiness" ? (
                <ReadinessRing score={value} />
              ) : (
                <div
                  className={`p-2.5 rounded-xl ${card.iconWrapperClass} relative`}
                >
                  <Icon name={card.icon} className="text-lg" />
                  {showPulse && (
                    <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-error animate-pulse" />
                  )}
                </div>
              )}
            </div>
            <div className="mt-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-outline">
                {card.label}
              </p>
              <p className="text-2xl font-black text-on-surface mt-0.5">
                {card.key === "readiness" ? `${value}%` : value}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
