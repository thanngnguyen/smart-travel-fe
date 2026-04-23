import { FormEvent, useEffect, useState } from "react";
import { BookingRow } from "@/types/admin-bookings";
import { AdminBookingEditFormState } from "@/types/admin-edit-forms";

const DEFAULT_FORM: AdminBookingEditFormState = {
  customerName: "",
  customerEmail: "",
  tourName: "",
  departureDate: "",
  amount: "",
  status: "PENDING",
  adminNote: "",
};

export function useAdminBookingEditForm(booking?: BookingRow) {
  const [form, setForm] = useState<AdminBookingEditFormState>(DEFAULT_FORM);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!booking) {
      return;
    }

    setForm({
      customerName: booking.customerName,
      customerEmail: booking.customerEmail,
      tourName: booking.tourName,
      departureDate: booking.departureDate,
      amount: booking.amount,
      status: booking.status,
      adminNote: "",
    });
  }, [booking]);

  const setField = <Key extends keyof AdminBookingEditFormState>(
    field: Key,
    value: AdminBookingEditFormState[Key],
  ) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice("Đã lưu thay đổi đặt chỗ (demo frontend). Chưa gọi API backend.");
  };

  return {
    form,
    notice,
    setField,
    handleSubmit,
  };
}
