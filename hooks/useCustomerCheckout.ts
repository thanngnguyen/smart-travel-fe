"use client";

import { useState } from "react";
import {
  CheckoutOrderSummary,
  CheckoutProgressStep,
  CheckoutStep,
} from "@/types/customer-checkout";

const PROGRESS_STEPS: CheckoutProgressStep[] = [
  { id: 1, label: "Thông tin hành khách" },
  { id: 2, label: "Thanh toán" },
  { id: 3, label: "Xác nhận" },
];

const ORDER_SUMMARY: CheckoutOrderSummary = {
  title: "Tĩnh Lặng Maldives",
  location: "Baa Atoll, Maldives",
  dateRange: "12 Th10 - 17 Th10",
  passengers: "2 người lớn",
  basePrice: "$10,800.00",
  fees: "$1,250.00",
  total: "$12,050",
  rating: 4.9,
  imageUrl:
    "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&w=400&q=80",
};

export function useCustomerCheckout() {
  const [step, setStep] = useState<CheckoutStep>(1);

  return {
    step,
    setStep,
    progressSteps: PROGRESS_STEPS,
    orderSummary: ORDER_SUMMARY,
  };
}
