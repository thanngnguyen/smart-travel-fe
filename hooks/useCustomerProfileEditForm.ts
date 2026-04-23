import { FormEvent, useMemo, useState } from "react";
import {
  PROFILE_INTEREST_OPTIONS,
  extractDefaultProfileName,
} from "@/lib/customer-profile-utils";
import { CustomerProfileEditFormState } from "@/types/customer-edit-forms";

export function useCustomerProfileEditForm(
  heading: string,
  savedTourTitles: string[],
) {
  const [form, setForm] = useState<CustomerProfileEditFormState>({
    fullName: extractDefaultProfileName(heading),
    email: "alexandra.sterling@email.com",
    phone: "+1 202 555 0188",
    nationality: "United Kingdom",
    passportId: "P****9821",
    emergencyContact: "+44 7700 900123",
    preferredDepartureCity: "Singapore",
    dietaryNotes: "Không ăn hải sản sống",
    travelNotes: "Ưu tiên phòng yên tĩnh, gần khu vực lounge.",
    selectedInterests: ["Nghỉ dưỡng cao cấp", "Khám phá văn hóa"],
  });
  const [notice, setNotice] = useState<string | null>(null);

  const suggestedInterests = useMemo(
    () => [...new Set([...PROFILE_INTEREST_OPTIONS, ...savedTourTitles])],
    [savedTourTitles],
  );

  const setField = <Key extends keyof CustomerProfileEditFormState>(
    field: Key,
    value: CustomerProfileEditFormState[Key],
  ) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const toggleInterest = (interest: string) => {
    setForm((previous) => ({
      ...previous,
      selectedInterests: previous.selectedInterests.includes(interest)
        ? previous.selectedInterests.filter((item) => item !== interest)
        : [...previous.selectedInterests, interest],
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice(
      "Hồ sơ của bạn đã được cập nhật (demo frontend). Concierge sẽ đồng bộ thay đổi trong phiên kế tiếp.",
    );
  };

  return {
    form,
    notice,
    suggestedInterests,
    setField,
    toggleInterest,
    handleSubmit,
  };
}
