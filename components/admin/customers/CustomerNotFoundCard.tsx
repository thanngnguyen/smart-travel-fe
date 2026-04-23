import Link from "next/link";
import AdminCard from "@/components/ui/AdminCard";
import Icon from "@/components/ui/Icon";

interface CustomerNotFoundCardProps {
  title: string;
  backHref: string;
  backLabel: string;
}

export default function CustomerNotFoundCard({
  title,
  backHref,
  backLabel,
}: CustomerNotFoundCardProps) {
  return (
    <AdminCard className="space-y-4" radius="3xl">
      <h1 className="text-2xl font-black text-on-surface">{title}</h1>
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white"
      >
        <Icon name="arrow_back" className="text-base" />
        {backLabel}
      </Link>
    </AdminCard>
  );
}
