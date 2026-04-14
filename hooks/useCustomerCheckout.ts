"use client";

import { useEffect, useMemo, useState } from "react";
import { formatCurrency } from "@/utils/formatters";
import {
  CheckoutAddOnItem,
  CheckoutFlashMessage,
  CheckoutOrderSummary,
  CheckoutPassengerInfo,
  CheckoutPaymentForm,
  CheckoutPaymentMethod,
  CheckoutPaymentMethodOption,
  CheckoutProgressStep,
  CheckoutStep,
  CheckoutTripOverview,
} from "@/types/customer-checkout";

const SEAT_PROTECTION_INITIAL_SECONDS = 8 * 60 + 42;

const PROGRESS_STEPS: CheckoutProgressStep[] = [
  {
    id: 1,
    label: "Thông tin hành khách",
    description: "Xác nhận thông tin liên hệ và người đi cùng",
  },
  {
    id: 2,
    label: "Dịch vụ cộng thêm",
    description: "Tùy chọn gói concierge và bảo vệ chuyến đi",
  },
  {
    id: 3,
    label: "Thanh toán",
    description: "Xác nhận phương thức thanh toán bảo mật",
  },
];

const PAYMENT_METHOD_OPTIONS: CheckoutPaymentMethodOption[] = [
  { id: "card", label: "Thẻ tín dụng", icon: "credit_card" },
  {
    id: "bank-transfer",
    label: "Chuyển khoản ngân hàng",
    icon: "account_balance",
  },
  { id: "wallet", label: "Ví điện tử", icon: "qr_code_2" },
];

const TRIP_OVERVIEW: CheckoutTripOverview = {
  tripType: "Khứ hồi",
  cabinClass: "Thương gia",
  routeFromCode: "LHR",
  routeToCode: "HND",
  routeFromCity: "London, UK",
  routeToCity: "Tokyo, JP",
  duration: "11h 20m",
  lockedSeats: ["14A", "14B"],
};

const BASE_ORDER_SUMMARY = {
  title: "Hành trình Tokyo Tinh Hoa",
  location: "Haneda, Tokyo",
  dateRange: "12/10 - 17/10/2026",
  baseFare: 2450,
  taxesAndFees: 192,
  pointsEarned: "12,400 STMS Miles",
  localCurrencyEstimate: "~ ¥428,150",
  rating: 4.9,
};

const INITIAL_PASSENGER_INFO: CheckoutPassengerInfo = {
  primaryTraveler: "Julian Alexander Vance",
  companionTraveler: "Elena Sofia Vance",
  email: "julian.vance@email.com",
  phone: "+84 912 345 678",
  specialNote: "Ưu tiên suất ăn chay và ghế gần lối đi.",
};

const INITIAL_PAYMENT_FORM: CheckoutPaymentForm = {
  cardholderName: "Julian Alexander Vance",
  cardNumberTokenized: "•••• •••• •••• 9924",
  expiryDate: "",
  cvv: "",
};

const INITIAL_ADD_ONS: CheckoutAddOnItem[] = [
  {
    id: "concierge",
    label: "Premium Concierge Add-on",
    description:
      "Điều phối viên riêng hỗ trợ 24/7, thay đổi lịch linh hoạt và ưu tiên xử lý sự cố.",
    price: 200,
    selected: true,
    tag: "SMART BUNDLE",
  },
  {
    id: "insurance",
    label: "Bảo hiểm hủy chuyến nâng cao",
    description:
      "Mở rộng hoàn tiền khi có thay đổi lịch vì lý do sức khỏe hoặc thiên tai.",
    price: 85,
    selected: false,
  },
  {
    id: "lounge",
    label: "Phòng chờ thương gia 2 chiều",
    description: "Sử dụng lounge riêng tại cả điểm đi và điểm đến.",
    price: 115,
    selected: false,
  },
];

function formatCountdown(seconds: number) {
  const minutePortion = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secondPortion = (seconds % 60).toString().padStart(2, "0");

  return `${minutePortion}:${secondPortion}`;
}

function isPassengerInfoValid(passengerInfo: CheckoutPassengerInfo) {
  return (
    passengerInfo.primaryTraveler.trim().length >= 3 &&
    passengerInfo.companionTraveler.trim().length >= 3 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(passengerInfo.email) &&
    passengerInfo.phone.trim().length >= 8
  );
}

function isPaymentValid(
  method: CheckoutPaymentMethod,
  paymentForm: CheckoutPaymentForm,
) {
  if (method !== "card") {
    return true;
  }

  const expiryValid = /^((0[1-9])|(1[0-2]))\/[0-9]{2}$/.test(
    paymentForm.expiryDate,
  );
  const cvvValid = /^[0-9]{3,4}$/.test(paymentForm.cvv);

  return expiryValid && cvvValid;
}

export function useCustomerCheckout(bookingId?: string) {
  const [step, setStep] = useState<CheckoutStep>(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [passengerInfo, setPassengerInfo] = useState<CheckoutPassengerInfo>(
    INITIAL_PASSENGER_INFO,
  );
  const [addOns, setAddOns] = useState<CheckoutAddOnItem[]>(INITIAL_ADD_ONS);
  const [paymentMethod, setPaymentMethod] =
    useState<CheckoutPaymentMethod>("card");
  const [paymentForm, setPaymentForm] =
    useState<CheckoutPaymentForm>(INITIAL_PAYMENT_FORM);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [remainingSeatProtectionSeconds, setRemainingSeatProtectionSeconds] =
    useState(SEAT_PROTECTION_INITIAL_SECONDS);
  const [flashMessage, setFlashMessage] = useState<CheckoutFlashMessage | null>(
    null,
  );

  useEffect(() => {
    if (isCompleted || remainingSeatProtectionSeconds <= 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setRemainingSeatProtectionSeconds((previous) =>
        Math.max(previous - 1, 0),
      );
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isCompleted, remainingSeatProtectionSeconds]);

  useEffect(() => {
    if (remainingSeatProtectionSeconds === 0 && !isCompleted) {
      setFlashMessage({
        tone: "error",
        text: "Giữ chỗ đã hết hạn. Vui lòng làm mới lại phiên thanh toán.",
      });
    }
  }, [isCompleted, remainingSeatProtectionSeconds]);

  const selectedAddOns = useMemo(
    () => addOns.filter((item) => item.selected),
    [addOns],
  );

  const addOnTotal = useMemo(
    () => selectedAddOns.reduce((sum, item) => sum + item.price, 0),
    [selectedAddOns],
  );

  const orderSummary: CheckoutOrderSummary = useMemo(() => {
    const grandTotal =
      BASE_ORDER_SUMMARY.baseFare +
      BASE_ORDER_SUMMARY.taxesAndFees +
      addOnTotal;

    return {
      title: BASE_ORDER_SUMMARY.title,
      location: BASE_ORDER_SUMMARY.location,
      dateRange: BASE_ORDER_SUMMARY.dateRange,
      passengersLabel: "2 người lớn",
      baseFare: BASE_ORDER_SUMMARY.baseFare,
      taxesAndFees: BASE_ORDER_SUMMARY.taxesAndFees,
      selectedAddOnsTotal: addOnTotal,
      grandTotal,
      localCurrencyEstimate: BASE_ORDER_SUMMARY.localCurrencyEstimate,
      pointsEarned: BASE_ORDER_SUMMARY.pointsEarned,
      rating: BASE_ORDER_SUMMARY.rating,
    };
  }, [addOnTotal]);

  const bookingCode = useMemo(() => {
    if (!bookingId) {
      return "STMS-84291-A";
    }

    return `STMS-${bookingId.toUpperCase()}`;
  }, [bookingId]);

  const seatProtectionProgressPercent = useMemo(() => {
    return Math.round(
      (remainingSeatProtectionSeconds / SEAT_PROTECTION_INITIAL_SECONDS) * 100,
    );
  }, [remainingSeatProtectionSeconds]);

  const updatePassengerField = (
    field: keyof CheckoutPassengerInfo,
    value: string,
  ) => {
    setPassengerInfo((previous) => ({
      ...previous,
      [field]: value,
    }));

    setFlashMessage(null);
  };

  const toggleAddOn = (addOnId: string) => {
    setAddOns((previous) =>
      previous.map((item) =>
        item.id === addOnId
          ? {
              ...item,
              selected: !item.selected,
            }
          : item,
      ),
    );
  };

  const updatePaymentField = (
    field: keyof CheckoutPaymentForm,
    value: string,
  ) => {
    setPaymentForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setFlashMessage(null);
  };

  const goToStep = (targetStep: CheckoutStep) => {
    if (targetStep <= step) {
      setStep(targetStep);
      setFlashMessage(null);
      return;
    }

    if (targetStep === 2 && isPassengerInfoValid(passengerInfo)) {
      setStep(2);
      setFlashMessage(null);
      return;
    }

    if (targetStep === 3 && isPassengerInfoValid(passengerInfo)) {
      setStep(3);
      setFlashMessage(null);
      return;
    }

    setFlashMessage({
      tone: "error",
      text: "Vui lòng hoàn thành bước hiện tại trước khi chuyển tiếp.",
    });
  };

  const goNextStep = () => {
    if (step === 1) {
      if (!isPassengerInfoValid(passengerInfo)) {
        setFlashMessage({
          tone: "error",
          text: "Thông tin hành khách chưa hợp lệ. Vui lòng kiểm tra lại họ tên, email và số điện thoại.",
        });
        return;
      }

      setStep(2);
      setFlashMessage(null);
      return;
    }

    if (step === 2) {
      setStep(3);
      setFlashMessage(null);
    }
  };

  const goBackStep = () => {
    setStep((previous) =>
      previous > 1 ? ((previous - 1) as CheckoutStep) : previous,
    );
    setFlashMessage(null);
  };

  const confirmBooking = () => {
    if (remainingSeatProtectionSeconds <= 0) {
      setFlashMessage({
        tone: "error",
        text: "Phiên giữ chỗ đã hết hạn. Không thể hoàn tất thanh toán.",
      });
      return;
    }

    if (!isTermsAccepted) {
      setFlashMessage({
        tone: "error",
        text: "Bạn cần đồng ý Điều khoản dịch vụ trước khi hoàn tất đặt chỗ.",
      });
      return;
    }

    if (!isPaymentValid(paymentMethod, paymentForm)) {
      setFlashMessage({
        tone: "error",
        text: "Thông tin thanh toán chưa hợp lệ. Vui lòng kiểm tra ngày hết hạn và mã CVV.",
      });
      return;
    }

    setIsCompleted(true);
    setFlashMessage({
      tone: "success",
      text: "Thanh toán thành công. Mã đặt chỗ của bạn đã được kích hoạt.",
    });
  };

  const restartCheckout = () => {
    setIsCompleted(false);
    setStep(1);
    setPassengerInfo(INITIAL_PASSENGER_INFO);
    setAddOns(INITIAL_ADD_ONS);
    setPaymentMethod("card");
    setPaymentForm(INITIAL_PAYMENT_FORM);
    setIsTermsAccepted(false);
    setRemainingSeatProtectionSeconds(SEAT_PROTECTION_INITIAL_SECONDS);
    setFlashMessage(null);
  };

  return {
    step,
    progressSteps: PROGRESS_STEPS,
    tripOverview: TRIP_OVERVIEW,
    paymentMethodOptions: PAYMENT_METHOD_OPTIONS,
    passengerInfo,
    addOns,
    selectedAddOns,
    paymentMethod,
    paymentForm,
    isTermsAccepted,
    isCompleted,
    flashMessage,
    orderSummary,
    bookingCode,
    seatProtectionTime: formatCountdown(remainingSeatProtectionSeconds),
    seatProtectionProgressPercent,
    isSeatProtectionExpired: remainingSeatProtectionSeconds <= 0,
    updatePassengerField,
    toggleAddOn,
    updatePaymentField,
    setPaymentMethod,
    setIsTermsAccepted,
    goToStep,
    goNextStep,
    goBackStep,
    confirmBooking,
    restartCheckout,
    formatCurrency,
  };
}
