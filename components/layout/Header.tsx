"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200"
          : "bg-white/80 backdrop-blur-lg"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
            STMS
          </Link>
          <div className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-[0.3em] text-slate-600">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Destinations
            </Link>
            <Link href="/tours" className="hover:text-slate-900 transition-colors">
              Tours
            </Link>
            <Link href="/tours" className="hover:text-slate-900 transition-colors">
              Deals
            </Link>
            <Link href="/guide-portal" className="hover:text-slate-900 transition-colors">
              Guides
            </Link>
            <Link
              href="/concierge"
              className="rounded-full bg-slate-900 px-4 py-2 text-white shadow-sm transition hover:bg-slate-800"
            >
              Concierge
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            Login
          </Link>
          <Link href="/tours">
            <Button size="md" variant="primary">
              Book Now
            </Button>
          </Link>
        </div>

        <button className="lg:hidden p-2 text-slate-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Icon name={isMobileMenuOpen ? "close" : "menu"} className="text-3xl" />
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 px-6 py-5 shadow-xl">
          <div className="space-y-3">
            <Link href="/" className="block rounded-2xl px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-100">
              Destinations
            </Link>
            <Link href="/tours" className="block rounded-2xl px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-100">
              Tours
            </Link>
            <Link href="/tours" className="block rounded-2xl px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-100">
              Deals
            </Link>
            <Link href="/guide-portal" className="block rounded-2xl px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-100">
              Guides
            </Link>
            <Link href="/concierge" className="block rounded-2xl bg-slate-900 px-4 py-3 text-base font-semibold text-white hover:bg-slate-800">
              Concierge
            </Link>
          </div>
          <div className="mt-5 flex flex-col gap-3">
            <Link href="/login" className="block rounded-2xl px-4 py-3 text-center text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200">
              Login
            </Link>
            <Link href="/tours" className="block rounded-2xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
