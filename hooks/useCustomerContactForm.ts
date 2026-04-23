import { FormEvent, useState } from "react";
import { CONTACT_TOPICS } from "@/lib/customer-contact-data";
import { CustomerContactFormState } from "@/types/customer-edit-forms";

const DEFAULT_FORM: CustomerContactFormState = {
  name: "",
  email: "",
  phone: "",
  topic: CONTACT_TOPICS[0],
  message: "",
};

export function useCustomerContactForm() {
  const [form, setForm] = useState<CustomerContactFormState>(DEFAULT_FORM);
  const [notice, setNotice] = useState<string | null>(null);

  const setField = <Key extends keyof CustomerContactFormState>(
    field: Key,
    value: CustomerContactFormState[Key],
  ) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice(
      "Yêu cầu của bạn đã được ghi nhận. Concierge sẽ liên hệ trong 30 phút (demo frontend).",
    );
  };

  return {
    form,
    notice,
    setField,
    handleSubmit,
  };
}
