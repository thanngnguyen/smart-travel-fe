import AdminChatManagementWorkbench from "@/components/admin/chat/AdminChatManagementWorkbench";

interface AdminChatManagementPageProps {
  searchParams: Promise<{
    tourId?: string | string[];
  }>;
}

export default async function AdminChatManagementPage({
  searchParams,
}: AdminChatManagementPageProps) {
  const resolvedSearchParams = await searchParams;
  const tourId = resolvedSearchParams?.tourId;
  const initialTourId = Array.isArray(tourId) ? tourId[0] : tourId;

  return (
    <div className="bg-surface min-h-screen p-4">
      <AdminChatManagementWorkbench initialTourId={initialTourId} />
    </div>
  );
}
