import React from "react";
import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-surface-container-low text-on-surface">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="p-8 max-w-screen-2xl mx-auto w-full">{children}</div>
      </main>
    </div>
  );
}
