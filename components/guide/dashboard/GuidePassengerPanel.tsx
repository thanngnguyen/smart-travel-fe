"use client";

import React, { useState } from "react";
import Icon from "@/components/ui/Icon";
import {
  GuideCheckInStatus,
  GuideTaskPassenger,
} from "@/types/guide-portal";

interface GuidePassengerPanelProps {
  passengers: GuideTaskPassenger[];
  taskStatus: string;
  onCheckIn: (passengerId: string, status: GuideCheckInStatus) => void;
}

const CHECK_IN_OPTIONS: { value: GuideCheckInStatus; label: string; icon: string; color: string }[] = [
  { value: "pending", label: "Chờ", icon: "schedule", color: "text-outline" },
  { value: "checked-in", label: "Đã check-in", icon: "check_circle", color: "text-green-600" },
  { value: "late", label: "Đến muộn", icon: "watch_later", color: "text-amber-600" },
  { value: "no-show", label: "Vắng mặt", icon: "cancel", color: "text-red-600" },
];

function getStatusColor(status: GuideCheckInStatus) {
  switch (status) {
    case "checked-in":
      return "bg-green-100 text-green-700";
    case "late":
      return "bg-amber-100 text-amber-700";
    case "no-show":
      return "bg-red-100 text-red-700";
    default:
      return "bg-surface-container-high text-on-surface-variant";
  }
}

function getStatusLabel(status: GuideCheckInStatus) {
  switch (status) {
    case "checked-in":
      return "Đã check-in";
    case "late":
      return "Đến muộn";
    case "no-show":
      return "Vắng mặt";
    default:
      return "Chờ check-in";
  }
}

export default function GuidePassengerPanel({
  passengers,
  taskStatus,
  onCheckIn,
}: GuidePassengerPanelProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const canCheckIn = taskStatus === "confirmed" || taskStatus === "in-progress";

  const checkedCount = passengers.filter(
    (p) => p.checkInStatus === "checked-in" || p.checkInStatus === "late",
  ).length;

  return (
    <div>
      {/* Summary */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Icon name="group" className="text-primary" />
          <h3 className="text-sm font-bold text-on-surface">
            Hành khách ({passengers.length})
          </h3>
        </div>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary">
          {checkedCount}/{passengers.length} đã điểm danh
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 rounded-full bg-surface-container-high mb-5 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary-container transition-all duration-500"
          style={{
            width: passengers.length
              ? `${(checkedCount / passengers.length) * 100}%`
              : "0%",
          }}
        />
      </div>

      {/* Passenger list */}
      <div className="space-y-2">
        {passengers.map((passenger) => {
          const isExpanded = expandedId === passenger.id;

          return (
            <div
              key={passenger.id}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden transition-all duration-200 shadow-[0_4px_16px_rgba(25,28,30,0.02)]"
            >
              {/* Collapsed row */}
              <button
                type="button"
                onClick={() => setExpandedId(isExpanded ? null : passenger.id)}
                className="w-full flex items-center gap-3 p-4 text-left cursor-pointer group"
              >
                <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-xs font-black text-on-surface-variant shrink-0">
                  {passenger.fullName
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-on-surface truncate">
                    {passenger.fullName}
                  </p>
                  <p className="text-[11px] font-medium text-outline">
                    {passenger.bookingCode}
                  </p>
                </div>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${getStatusColor(passenger.checkInStatus)}`}
                >
                  {getStatusLabel(passenger.checkInStatus)}
                </span>
                <Icon
                  name="expand_more"
                  className={`text-outline transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                />
              </button>

              {/* Expanded detail */}
              {isExpanded && (
                <div className="px-4 pb-4 pt-0 space-y-3 animate-[fadeIn_0.2s_ease-out]">
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <DetailItem icon="phone" label="Điện thoại" value={passenger.phone} />
                    <DetailItem
                      icon="emergency"
                      label="Liên hệ khẩn"
                      value={passenger.emergencyContact}
                    />
                    <DetailItem
                      icon="confirmation_number"
                      label="Booking"
                      value={`${passenger.bookingStatus} / ${passenger.paymentStatus}`}
                    />
                    {passenger.specialRequest && (
                      <DetailItem
                        icon="sticky_note_2"
                        label="Yêu cầu đặc biệt"
                        value={passenger.specialRequest}
                      />
                    )}
                  </div>

                  {/* Check-in actions */}
                  {canCheckIn && (
                    <div className="pt-2 border-t border-outline-variant/10">
                      <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-2">
                        Cập nhật trạng thái
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {CHECK_IN_OPTIONS.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            disabled={passenger.checkInStatus === opt.value}
                            onClick={() => onCheckIn(passenger.id, opt.value)}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
                              passenger.checkInStatus === opt.value
                                ? "bg-primary/10 text-primary ring-1 ring-primary/30"
                                : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
                            }`}
                          >
                            <Icon name={opt.icon} className={`text-sm ${opt.color}`} />
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DetailItem({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2 p-2 rounded-xl bg-surface-container-low">
      <Icon name={icon} className="text-sm text-outline shrink-0 mt-0.5" />
      <div>
        <p className="text-[10px] font-bold text-outline uppercase tracking-wider">
          {label}
        </p>
        <p className="text-xs font-medium text-on-surface mt-0.5">{value}</p>
      </div>
    </div>
  );
}
