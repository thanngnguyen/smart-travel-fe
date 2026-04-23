import { FormEvent, useEffect, useState } from "react";
import {
  AdminTourRow,
  RecurringDayOption,
  SelectOption,
} from "@/types/admin-tours";
import { AdminTourEditFormState } from "@/types/admin-edit-forms";

const DEFAULT_FORM: AdminTourEditFormState = {
  title: "",
  duration: "",
  basePrice: "",
  activeDepartures: "",
  imageUrl: "",
  imageAlt: "",
  assignedGuide: "",
  selectedDays: [],
};

export function useAdminTourEditForm(
  tour: AdminTourRow | undefined,
  recurringDays: RecurringDayOption[],
  guideOptions: SelectOption[],
) {
  const [form, setForm] = useState<AdminTourEditFormState>(DEFAULT_FORM);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!tour) {
      return;
    }

    setForm({
      title: tour.title,
      duration: tour.duration,
      basePrice: tour.basePrice,
      activeDepartures: tour.activeDepartures,
      imageUrl: tour.imageUrl,
      imageAlt: tour.imageAlt,
      assignedGuide: guideOptions[0]?.value ?? "",
      selectedDays: recurringDays
        .filter((day) => day.isSelected)
        .map((day) => day.id),
    });
  }, [tour, recurringDays, guideOptions]);

  const setField = <Key extends keyof AdminTourEditFormState>(
    field: Key,
    value: AdminTourEditFormState[Key],
  ) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const toggleDay = (dayId: string) => {
    setForm((previous) => ({
      ...previous,
      selectedDays: previous.selectedDays.includes(dayId)
        ? previous.selectedDays.filter((item) => item !== dayId)
        : [...previous.selectedDays, dayId],
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice("Đã lưu thông tin tour (demo frontend). Chưa đồng bộ backend.");
  };

  return {
    form,
    notice,
    setField,
    toggleDay,
    handleSubmit,
  };
}
