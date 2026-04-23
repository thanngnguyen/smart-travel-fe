import { FormEvent, useEffect, useMemo, useState } from "react";
import { PersonnelMember } from "@/types/admin-personnel";
import { AdminPersonnelEditFormState } from "@/types/admin-edit-forms";

const DEFAULT_AVATAR_URL =
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=900&q=80";

const DEFAULT_FORM: AdminPersonnelEditFormState = {
  fullName: "",
  staffCode: "",
  department: "",
  email: "",
  phone: "",
  joinedDate: "",
  role: "support",
  status: "active",
  assignedTours: 0,
  monthlyWorkloadDays: 0,
  monthlyWorkloadLimit: 24,
  performanceScore: 80,
  avatarUrl: DEFAULT_AVATAR_URL,
  certificationsText: "",
  languagesText: "",
};

export function useAdminPersonnelEditForm(member?: PersonnelMember) {
  const [form, setForm] = useState<AdminPersonnelEditFormState>(DEFAULT_FORM);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!member) {
      return;
    }

    setForm({
      fullName: member.fullName,
      staffCode: member.staffCode,
      department: member.department,
      email: member.email,
      phone: member.phone,
      joinedDate: member.joinedDate,
      role: member.role,
      status: member.status,
      assignedTours: member.assignedTours,
      monthlyWorkloadDays: member.monthlyWorkloadDays,
      monthlyWorkloadLimit: member.monthlyWorkloadLimit,
      performanceScore: member.performanceScore,
      avatarUrl: member.avatarUrl || DEFAULT_AVATAR_URL,
      certificationsText: member.certifications.join(", "),
      languagesText: member.languages.join(", "),
    });
  }, [member]);

  const setField = <Key extends keyof AdminPersonnelEditFormState>(
    field: Key,
    value: AdminPersonnelEditFormState[Key],
  ) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const workloadPercent = useMemo(() => {
    if (!form.monthlyWorkloadLimit) {
      return 0;
    }

    return Math.round(
      (form.monthlyWorkloadDays / form.monthlyWorkloadLimit) * 100,
    );
  }, [form.monthlyWorkloadDays, form.monthlyWorkloadLimit]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice(
      "Đã lưu thay đổi nhân sự (demo frontend). Chưa gửi request cập nhật backend.",
    );
  };

  return {
    form,
    notice,
    workloadPercent,
    setField,
    handleSubmit,
  };
}
