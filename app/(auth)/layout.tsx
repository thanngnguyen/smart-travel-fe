import React from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans text-on-surface antialiased overflow-x-hidden">
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-8 h-20 max-w-full mx-auto bg-surface-container-lowest/80 backdrop-blur-xl">
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-primary"
        >
          STMS
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <span className="text-xs uppercase tracking-widest font-bold text-outline">
            Bảo mật đã xác minh
          </span>
          <Icon name="lock" className="text-primary" />
        </div>
      </header>

      <main className="flex-1 w-full flex items-center justify-center pt-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"></div>
          <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-secondary-container/10 blur-[100px]"></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl w-full flex flex-col items-center">
          {children}
        </div>
      </main>
    </div>
  );
}
