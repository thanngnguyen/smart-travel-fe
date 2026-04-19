"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { usePathname } from "next/navigation";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isImmersiveFlow =
    pathname.startsWith("/checkout/") || pathname.startsWith("/tour-chat");

  if (isImmersiveFlow) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
