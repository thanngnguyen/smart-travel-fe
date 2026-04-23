import { FormEvent, useEffect, useState } from "react";
import { AdminCustomerRow } from "@/types/admin-customers";
import { AdminCustomerEditFormState } from "@/types/admin-edit-forms";

const DEFAULT_AVATAR_URL =
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=900&q=80";

const DEFAULT_FORM: AdminCustomerEditFormState = {
  name: "",
  email: "",
  phone: "",
  segment: "standard",
  status: "active",
  assignedConcierge: "",
  avatarUrl: DEFAULT_AVATAR_URL,
};

export function useAdminCustomerEditForm(customer?: AdminCustomerRow) {
  const [form, setForm] = useState<AdminCustomerEditFormState>(DEFAULT_FORM);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!customer) {
      return;
    }

    setForm({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      segment: customer.segment,
      status: customer.status,
      assignedConcierge: customer.assignedConcierge,
      avatarUrl: customer.avatarUrl || DEFAULT_AVATAR_URL,
    });
  }, [customer]);

  const setField = <Key extends keyof AdminCustomerEditFormState>(
    field: Key,
    value: AdminCustomerEditFormState[Key],
  ) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice(
      "Đã lưu thay đổi hồ sơ khách hàng (demo frontend). Chưa đồng bộ backend.",
    );
  };

  return {
    form,
    notice,
    setField,
    handleSubmit,
  };
}
