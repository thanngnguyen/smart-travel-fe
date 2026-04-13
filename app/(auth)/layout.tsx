import React from "react";
import AuthAmbientBackground from "@/components/auth/layout/AuthAmbientBackground";
import AuthShellHeader from "@/components/auth/layout/AuthShellHeader";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans text-on-surface antialiased overflow-x-hidden">
      <AuthShellHeader />

      <main className="flex-1 w-full flex items-center justify-center pt-20 px-4 md:px-6 relative overflow-hidden">
        <AuthAmbientBackground />

        <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
          {children}
        </div>
      </main>
    </div>
  );
}
