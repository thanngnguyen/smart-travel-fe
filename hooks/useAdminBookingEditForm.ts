import { FormEvent, useEffect, useState } from "react";
import {
  applyBookingFieldUpdate,
  loadAdminBookingRecords,
  saveAdminBookingRecords,
} from "@/lib/admin-bookings-store";
import { BookingRow } from "@/types/admin-bookings";
import { AdminBookingEditFormState } from "@/types/admin-edit-forms";

const DEFAULT_FORM: AdminBookingEditFormState = {
  customerName: "",
  customerEmail: "",
  tourName: "",
  departureDate: "",
  amount: "",
  status: "PENDING",
  paymentStatus: "PENDING",
  paymentMethod: "VNPAY",
  adminNote: "",
};

function parseAmountInput(value: string) {
  const numeric = Number(value.replace(/[^0-9.]/g, ""));
  return Number.isFinite(numeric) ? numeric : NaN;
}

export function useAdminBookingEditForm(booking?: BookingRow) {
  const [form, setForm] = useState<AdminBookingEditFormState>(DEFAULT_FORM);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!booking) {
      return;
    }

    const syncBookingFormTimer = window.setTimeout(() => {
      setForm({
        customerName: booking.customerName,
        customerEmail: booking.customerEmail,
        tourName: booking.tourName,
        departureDate: booking.departureDate,
        amount: booking.amount,
        status: booking.status,
        paymentStatus: booking.paymentStatus,
        paymentMethod: booking.paymentMethod,
        adminNote: "",
      });
    }, 0);

    return () => {
      window.clearTimeout(syncBookingFormTimer);
    };
  }, [booking]);

  const setField = <Key extends keyof AdminBookingEditFormState>(
    field: Key,
    value: AdminBookingEditFormState[Key],
  ) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!booking) {
      setNotice("Khong tim thay booking de cap nhat.");
      return;
    }

    const amountValue = parseAmountInput(form.amount);

    const currentRecords = loadAdminBookingRecords();
    const result = applyBookingFieldUpdate(currentRecords, booking.id, {
      customerName: form.customerName,
      customerEmail: form.customerEmail,
      tourName: form.tourName,
      departureDate: form.departureDate,
      departureMeta: booking.departureMeta,
      amountValue,
      status: form.status,
      paymentStatus: form.paymentStatus,
      paymentMethod: form.paymentMethod,
      adminNote: form.adminNote,
    });

    if (result.changed) {
      saveAdminBookingRecords(result.nextRecords);
    }

    setNotice(result.message);
  };

  return {
    form,
    notice,
    setField,
    handleSubmit,
  };
}
