"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation"; // Bổ sung để đọc URL
import { ensureTourChatEnrollment } from "@/lib/customer-tour-chat";
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
  { id: 1, label: "Thông tin hành khách", description: "Xác nhận thông tin liên hệ và người đi cùng" },
  { id: 2, label: "Dịch vụ cộng thêm", description: "Tùy chọn gói concierge và bảo vệ chuyến đi" },
  { id: 3, label: "Thanh toán", description: "Xác nhận phương thức thanh toán bảo mật" },
];

const PAYMENT_METHOD_OPTIONS: CheckoutPaymentMethodOption[] = [
  { id: "VNPAY", label: "VNPay", icon: "qr_code_2" },
  { id: "BANK_TRANSFER", label: "Chuyển khoản ngân hàng", icon: "account_balance" },
  { id: "MOMO", label: "Ví MoMo", icon: "account_balance_wallet" },
  { id: "CASH", label: "Tiền mặt", icon: "payments" },
];

// Cập nhật chuyến bay mặc định thành Maldives cho hợp cảnh
const TRIP_OVERVIEW: CheckoutTripOverview = {
  tripType: "Bay thẳng",
  cabinClass: "Phổ thông",
  routeFromCode: "HAN",
  routeToCode: "MLE",
  routeFromCity: "Hà Nội, VN",
  routeToCity: "Male, Maldives",
  duration: "4h 30m",
  lockedSeats: ["14A", "14B"],
};

const BASE_ORDER_SUMMARY = {
  title: "Đang tải dữ liệu...",
  location: "---",
  dateRange: "---",
  baseFare: 0,
  taxesAndFees: 0,
  pointsEarned: "12,400 STMS Miles",
  localCurrencyEstimate: "~ ¥0",
  rating: 5.0,
};

const INITIAL_PASSENGER_INFO: CheckoutPassengerInfo = {
  primaryTraveler: "Julian Alexander Vance",
  companionTraveler: "Elena Sofia Vance",
  email: "julian.vance@email.com",
  phone: "+84 912 345 678",
  specialNote: "Ưu tiên suất ăn chay và ghế gần lối đi.",
};

const INITIAL_PAYMENT_FORM: CheckoutPaymentForm = {
  transferReference: "THANH TOAN TOUR STMS",
  payerNote: "",
  transactionId: "",
};

const INITIAL_ADD_ONS: CheckoutAddOnItem[] = [
  { id: "concierge", label: "Premium Concierge Add-on", description: "Điều phối viên riêng hỗ trợ 24/7, thay đổi lịch linh hoạt và ưu tiên xử lý sự cố.", price: 200, selected: true, tag: "SMART BUNDLE" },
  { id: "insurance", label: "Bảo hiểm hủy chuyến nâng cao", description: "Mở rộng hoàn tiền khi có thay đổi lịch vì lý do sức khỏe hoặc thiên tai.", price: 85, selected: false },
  { id: "lounge", label: "Phòng chờ thương gia 2 chiều", description: "Sử dụng lounge riêng tại cả điểm đi và điểm đến.", price: 115, selected: false },
];

function formatCountdown(seconds: number) {
  const minutePortion = Math.floor(seconds / 60).toString().padStart(2, "0");
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

function isPaymentValid(method: CheckoutPaymentMethod, paymentForm: CheckoutPaymentForm) {
  if (method === "BANK_TRANSFER") return paymentForm.transferReference.trim().length >= 6;
  if (method === "CASH") return paymentForm.payerNote.trim().length >= 4;
  return true;
}

export function useCustomerCheckout(bookingId?: string) {
  // 1. LẤY PARAMS TỪ URL
  const searchParams = useSearchParams();
  const adultsParam = searchParams.get("adults") || "1";
  const childrenParam = searchParams.get("children") || "0";
  const departureParam = searchParams.get("departure") || "Khởi hành hàng ngày";

  // 2. STATE LƯU DỮ LIỆU TOUR TỪ BACKEND
  const [realTourData, setRealTourData] = useState<any>(null);

  const [step, setStep] = useState<CheckoutStep>(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [passengerInfo, setPassengerInfo] = useState<CheckoutPassengerInfo>(INITIAL_PASSENGER_INFO);
  const [addOns, setAddOns] = useState<CheckoutAddOnItem[]>(INITIAL_ADD_ONS);
  const [paymentMethod, setPaymentMethod] = useState<CheckoutPaymentMethod>("VNPAY");
  const [paymentForm, setPaymentForm] = useState<CheckoutPaymentForm>(INITIAL_PAYMENT_FORM);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [remainingSeatProtectionSeconds, setRemainingSeatProtectionSeconds] = useState(SEAT_PROTECTION_INITIAL_SECONDS);
  const [flashMessage, setFlashMessage] = useState<CheckoutFlashMessage | null>(null);
  const [chatGroupId, setChatGroupId] = useState<string | null>(null);

  // 3. FETCH DỮ LIỆU TOUR TỪ SPRING BOOT
  useEffect(() => {
    if (!bookingId) return;
    
    const fetchTour = async () => {
      try {
        const res = await fetch(`http://localhost:8081/api/tours/${bookingId}`);
        if (res.ok) {
          const data = await res.json();
          setRealTourData(data);
        }
      } catch (error) {
        console.error("Lỗi lấy dữ liệu Tour Checkout:", error);
      }
    };
    
    fetchTour();
  }, [bookingId]);

  useEffect(() => {
    if (isCompleted || remainingSeatProtectionSeconds <= 0) return;
    const timer = window.setInterval(() => {
      setRemainingSeatProtectionSeconds((previous) => Math.max(previous - 1, 0));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [isCompleted, remainingSeatProtectionSeconds]);

  useEffect(() => {
    if (remainingSeatProtectionSeconds === 0 && !isCompleted) {
      const seatExpiredTimer = window.setTimeout(() => {
        setFlashMessage({ tone: "error", text: "Giữ chỗ đã hết hạn. Vui lòng làm mới lại phiên thanh toán." });
      }, 0);
      return () => window.clearTimeout(seatExpiredTimer);
    }
  }, [isCompleted, remainingSeatProtectionSeconds]);

  const selectedAddOns = useMemo(() => addOns.filter((item) => item.selected), [addOns]);
  const addOnTotal = useMemo(() => selectedAddOns.reduce((sum, item) => sum + item.price, 0), [selectedAddOns]);

  // 4. GHI ĐÈ ORDER SUMMARY BẰNG DỮ LIỆU THẬT
  const orderSummary: CheckoutOrderSummary = useMemo(() => {
    if (!realTourData) {
      return {
        ...BASE_ORDER_SUMMARY,
        selectedAddOnsTotal: addOnTotal,
        grandTotal: BASE_ORDER_SUMMARY.baseFare + BASE_ORDER_SUMMARY.taxesAndFees + addOnTotal,
      };
    }

    const adults = parseInt(adultsParam, 10);
    const children = parseInt(childrenParam, 10);
    const baseFareAdult = realTourData.adultPrice * adults;
    const baseFareChild = realTourData.childPrice * children;
    const totalFare = baseFareAdult + baseFareChild;

    return {
      title: realTourData.title,
      location: realTourData.destinations?.[0]?.name || "Nhiều điểm đến",
      dateRange: departureParam,
      passengersLabel: `${adults} người lớn` + (children > 0 ? `, ${children} trẻ em` : ""),
      baseFare: totalFare,
      taxesAndFees: 0, 
      selectedAddOnsTotal: addOnTotal,
      grandTotal: totalFare + addOnTotal,
      localCurrencyEstimate: "", 
      pointsEarned: "1,500 STMS Miles", 
      rating: 5.0,
    };
  }, [realTourData, addOnTotal, adultsParam, childrenParam, departureParam]);

  const bookingCode = useMemo(() => {
    if (!bookingId) return "STMS-84291-A";
    return `STMS-${bookingId.toUpperCase()}`;
  }, [bookingId]);

  useEffect(() => {
    const syncTransferReferenceTimer = window.setTimeout(() => {
      setPaymentForm((previous) => {
        if (previous.transferReference !== "THANH TOAN TOUR STMS") return previous;
        return { ...previous, transferReference: `THANH TOAN TOUR ${bookingCode}` };
      });
    }, 0);
    return () => window.clearTimeout(syncTransferReferenceTimer);
  }, [bookingCode]);

  const seatProtectionProgressPercent = useMemo(() => {
    return Math.round((remainingSeatProtectionSeconds / SEAT_PROTECTION_INITIAL_SECONDS) * 100);
  }, [remainingSeatProtectionSeconds]);

  const updatePassengerField = (field: keyof CheckoutPassengerInfo, value: string) => {
    setPassengerInfo((previous) => ({ ...previous, [field]: value }));
    setFlashMessage(null);
  };

  const toggleAddOn = (addOnId: string) => {
    setAddOns((previous) =>
      previous.map((item) => (item.id === addOnId ? { ...item, selected: !item.selected } : item))
    );
  };

  const updatePaymentField = (field: keyof CheckoutPaymentForm, value: string) => {
    setPaymentForm((previous) => ({ ...previous, [field]: value }));
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
    setFlashMessage({ tone: "error", text: "Vui lòng hoàn thành bước hiện tại trước khi chuyển tiếp." });
  };

  const goNextStep = () => {
    if (step === 1) {
      if (!isPassengerInfoValid(passengerInfo)) {
        setFlashMessage({ tone: "error", text: "Thông tin hành khách chưa hợp lệ. Vui lòng kiểm tra lại họ tên, email và số điện thoại." });
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
    setStep((previous) => (previous > 1 ? ((previous - 1) as CheckoutStep) : previous));
    setFlashMessage(null);
  };

  const confirmBooking = () => {
    if (remainingSeatProtectionSeconds <= 0) {
      setFlashMessage({ tone: "error", text: "Phiên giữ chỗ đã hết hạn. Không thể hoàn tất thanh toán." });
      return;
    }
    if (!isTermsAccepted) {
      setFlashMessage({ tone: "error", text: "Bạn cần đồng ý Điều khoản dịch vụ trước khi hoàn tất đặt chỗ." });
      return;
    }
    if (!isPaymentValid(paymentMethod, paymentForm)) {
      setFlashMessage({ tone: "error", text: "Thông tin thanh toán chưa hợp lệ cho phương thức đã chọn." });
      return;
    }

    const enrollment = ensureTourChatEnrollment({
      tourId: bookingId,
      bookingCode,
      primaryTravelerName: passengerInfo.primaryTraveler,
      companionTravelerName: passengerInfo.companionTraveler,
      email: passengerInfo.email,
      phone: passengerInfo.phone,
    });

    setChatGroupId(enrollment.groupId);
    setIsCompleted(true);
    setFlashMessage({
      tone: "success",
      text: "Thanh toán mô phỏng thành công (Payment: SUCCESS). Booking đã chuyển từ PENDING sang CONFIRMED và bạn đã được thêm vào nhóm chat tour.",
    });
  };

  const restartCheckout = () => {
    setIsCompleted(false);
    setStep(1);
    setPassengerInfo(INITIAL_PASSENGER_INFO);
    setAddOns(INITIAL_ADD_ONS);
    setPaymentMethod("VNPAY");
    setPaymentForm(INITIAL_PAYMENT_FORM);
    setIsTermsAccepted(false);
    setRemainingSeatProtectionSeconds(SEAT_PROTECTION_INITIAL_SECONDS);
    setFlashMessage(null);
    setChatGroupId(null);
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
    chatGroupId,
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