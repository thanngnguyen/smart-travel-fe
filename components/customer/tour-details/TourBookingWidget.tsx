"use client";

import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import SurfaceCard from "@/components/ui/SurfaceCard";
import Link from "next/link";
import { TourBookingSummary } from "@/types/customer-tour-details";
import { formatCurrency } from "@/utils/formatters";

interface TourBookingWidgetProps {
  booking: TourBookingSummary;
}

// Thêm | number | undefined vào type để hàm chấp nhận cả kiểu số và kiểu trống
function parsePriceFromLabel(value: string | number | undefined) {
  // 1. Nếu không có giá trị truyền vào (undefined/null/rỗng) -> Trả về 0
  if (!value) return 0;

  // 2. Nếu Spring Boot đã trả về số chuẩn luôn rồi -> Trả về số đó luôn, khỏi cần replace
  if (typeof value === "number") return value;

  // 3. Nếu là chuỗi (VD: "35,000,000 VNĐ") -> Ép về chuỗi rồi mới replace để cắt chữ
  const numeric = Number(value.toString().replace(/[^0-9.]/g, ""));
  
  if (!Number.isFinite(numeric) || numeric <= 0) {
    return 0;
  }
  return numeric;
}

function parseCountFromLabel(value: string, keyword: string, fallback: number) {
  if (!value) return fallback;

  const pattern = new RegExp(`(\\d+)\\s*${keyword}`, "i");
  const match = value.match(pattern);

  if (!match?.[1]) {
    return fallback;
  }

  const parsed = Number(match[1]);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }

  return parsed;
}

function resolveMultiplierTag(multiplier: number) {
  if (multiplier === 1) {
    return "Giá chuẩn";
  }

  const percentage = Math.round(Math.abs((multiplier - 1) * 100));
  if (multiplier > 1) {
    return `Cao điểm +${percentage}%`;
  }

  return `Ưu đãi -${percentage}%`;
}

export default function TourBookingWidget({ booking }: TourBookingWidgetProps) {
  const departureDateOptions = useMemo(() => {
    if (
      booking.departureDateOptions &&
      booking.departureDateOptions.length > 0
    ) {
      return booking.departureDateOptions;
    }

    return [
      {
        id: "fallback-date",
        label: booking.dateRange,
        priceMultiplier: 1,
      },
    ];
  }, [booking.dateRange, booking.departureDateOptions]);

  const [selectedDateId, setSelectedDateId] = useState(
    departureDateOptions[0].id,
  );
  const [adultCount, setAdultCount] = useState(() =>
    Math.max(
      1,
      booking.defaultAdults ??
        parseCountFromLabel(booking.passengers, "người lớn", 2),
    ),
  );
  const [childrenCount, setChildrenCount] = useState(() =>
    Math.max(
      0,
      booking.defaultChildren ??
        parseCountFromLabel(booking.passengers, "trẻ em", 0),
    ),
  );

  const selectedDate = useMemo(() => {
    return (
      departureDateOptions.find((option) => option.id === selectedDateId) ??
      departureDateOptions[0]
    );
  }, [departureDateOptions, selectedDateId]);

  const basePricePerAdult = useMemo(() => {
    return parsePriceFromLabel(booking.priceFrom);
  }, [booking.priceFrom]);

  const adjustedAdultPrice = basePricePerAdult * selectedDate.priceMultiplier;
  const adjustedChildrenPrice = adjustedAdultPrice * 0.7;
  const totalPassengers = adultCount + childrenCount;
  const totalPrice =
    adjustedAdultPrice * adultCount + adjustedChildrenPrice * childrenCount;
  const checkoutHref = `/checkout/${booking.tourSlug}?departure=${encodeURIComponent(selectedDate.label)}&adults=${adultCount}&children=${childrenCount}`;

  return (
    <SurfaceCard
      tone="white"
      border="subtle"
      shadow="elevated"
      radius="3xl"
      className="sticky top-32 p-6 md:p-8"
    >
      <div className="flex justify-between items-end mb-6 pb-6 border-b border-outline-variant/30">
        <div>
          <p className="text-outline text-sm font-bold uppercase tracking-wider mb-1">
            Giá tạm tính
          </p>
          <div className="flex items-baseline gap-1">
            <h2 className="text-4xl font-black text-on-surface">
              {formatCurrency(totalPrice || adjustedAdultPrice)}
            </h2>
            <span className="text-on-surface-variant font-medium">/ tổng</span>
          </div>
          <p className="text-xs text-on-surface-variant mt-2">
            {formatCurrency(adjustedAdultPrice)} mỗi người lớn ·{" "}
            {formatCurrency(adjustedChildrenPrice)} mỗi trẻ em
          </p>
          <p className="text-xs text-primary font-bold mt-1">
            {resolveMultiplierTag(selectedDate.priceMultiplier)}
          </p>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <div className="p-4 border border-outline-variant/40 rounded-xl hover:border-primary transition-colors space-y-2">
          <div>
            <p className="text-xs text-outline font-bold uppercase mb-1">
              Ngày đi
            </p>
            <select
              value={selectedDateId}
              onChange={(event) => setSelectedDateId(event.target.value)}
              className="w-full rounded-xl border border-outline-variant/40 bg-white px-3 py-2 text-sm font-bold text-on-surface focus:border-primary focus:outline-none"
            >
              {departureDateOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label} ({resolveMultiplierTag(option.priceMultiplier)}
                  )
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-end">
            <Icon name="calendar_month" className="text-primary" />
          </div>
        </div>

        <div className="p-4 border border-outline-variant/40 rounded-xl hover:border-primary transition-colors space-y-4">
          <div>
            <p className="text-xs text-outline font-bold uppercase mb-1">
              Hành khách
            </p>
            <p className="text-sm text-on-surface font-bold">
              {adultCount} người lớn, {childrenCount} trẻ em
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-on-surface">Người lớn</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setAdultCount((previous) => Math.max(1, previous - 1))
                  }
                  className="w-8 h-8 rounded-full border border-outline-variant/40 text-on-surface font-bold"
                  aria-label="Giảm số người lớn"
                >
                  -
                </button>
                <span className="min-w-6 text-center text-sm font-bold text-on-surface">
                  {adultCount}
                </span>
                <button
                  type="button"
                  onClick={() => setAdultCount((previous) => previous + 1)}
                  className="w-8 h-8 rounded-full border border-outline-variant/40 text-on-surface font-bold"
                  aria-label="Tăng số người lớn"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-on-surface">Trẻ em</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setChildrenCount((previous) => Math.max(0, previous - 1))
                  }
                  className="w-8 h-8 rounded-full border border-outline-variant/40 text-on-surface font-bold"
                  aria-label="Giảm số trẻ em"
                >
                  -
                </button>
                <span className="min-w-6 text-center text-sm font-bold text-on-surface">
                  {childrenCount}
                </span>
                <button
                  type="button"
                  onClick={() => setChildrenCount((previous) => previous + 1)}
                  className="w-8 h-8 rounded-full border border-outline-variant/40 text-on-surface font-bold"
                  aria-label="Tăng số trẻ em"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <Icon name="person" className="text-primary" />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-outline-variant/40 p-4 mb-6 bg-surface-container-low">
        <p className="text-xs uppercase tracking-wider font-bold text-outline">
          Tóm tắt đặt chỗ
        </p>
        <p className="text-sm text-on-surface mt-2">
          {selectedDate.label} · {totalPassengers} hành khách
        </p>
      </div>

      <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl mb-6 text-primary text-sm font-medium">
        <Icon name="info" />
        Có tùy chọn đặt trước, thanh toán sau trong bước thanh toán.
      </div>

      <Link href={checkoutHref} className="w-full inline-block">
        <Button
          variant="primary"
          size="lg"
          className="w-full text-lg shadow-xl shadow-primary/20"
        >
          Giữ chỗ ngay
        </Button>
      </Link>

      <p className="text-center text-xs text-outline mt-4 font-medium">
        Không bị trừ phí cho đến khi xác nhận.
      </p>
    </SurfaceCard>
  );
}
