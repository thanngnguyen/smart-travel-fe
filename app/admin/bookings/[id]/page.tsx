import React from "react";
import Icon from "@/components/ui/Icon";
import Link from "next/link";

export default function BookingDetailsPage() {
  return (
    <div className="flex flex-col min-h-screen -mx-8 -mt-8">
      {/* Header / Top Bar */}
      <header className="flex justify-between items-center w-full px-8 py-6 sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-30 shadow-[0_20px_40px_rgba(25,28,30,0.06)]">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/bookings"
            className="p-2 hover:bg-surface-container-low rounded-full transition-colors active:scale-90"
          >
            <Icon name="arrow_back" />
          </Link>
          <div>
            <h2 className="font-headline font-bold tracking-tight text-slate-900 dark:text-slate-100 text-xl">
              Booking #STMS-882910
            </h2>
            <p className="text-xs font-medium text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Confirmed on Oct 24, 2024
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-semibold text-primary hover:bg-primary-fixed transition-colors rounded-xl border border-outline-variant/20">
            Edit Booking
          </button>
          <button className="px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-primary to-primary-container rounded-xl shadow-lg active:scale-95 transition-transform">
            Print Itinerary
          </button>
        </div>
      </header>

      {/* Booking Content Grid */}
      <div className="p-8 grid grid-cols-12 gap-8">
        {/* Left Column: Primary Details */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
          {/* Tour Highlight Card (Asymmetric Layout) */}
          <section className="bg-surface-container-lowest rounded-2xl p-0 overflow-hidden flex flex-col md:flex-row shadow-sm group">
            <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
              <img
                alt="Tour Destination"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbT3LNTtKsWPmZC93CfclJzFmKb04EWaQGLPBF7CetnNQIsKY39LEL1gXX9U2XZfXOPHb_mnbtVQ7W-kjEgrczHSnnCspb75GJ7BLPQkdscYzdCt5HsIZnIMJwqqnKRwaGNSU3MMY7RRuiCkyyOaMeZeLJrOsqz3r-vvZVcygJpLFJ3vJG5ctuVSCDE4gYOcR3Eghy1cYSw2x4Go4PjFUQh3WU4z-dk_yioOT2TBmLv4VRkiruOnIMhh3n8wyfqxobB6EZt3iF1bI"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg shadow-sm">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                  Active Tour
                </span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-on-background tracking-tight">
                    Swiss Alps Expedition: 7-Day Peaks & Valleys
                  </h3>
                  <span className="bg-primary-fixed text-primary text-[10px] font-black px-2 py-1 rounded">
                    PREMIUM
                  </span>
                </div>
                <div className="flex gap-6 mt-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-outline uppercase tracking-wider">
                      Departure
                    </span>
                    <span className="text-sm font-semibold">Dec 12, 2024</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-outline uppercase tracking-wider">
                      Return
                    </span>
                    <span className="text-sm font-semibold">Dec 19, 2024</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-outline uppercase tracking-wider">
                      Group Size
                    </span>
                    <span className="text-sm font-semibold">12 Pax</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="location_on" filled className="text-primary" />
                  <span className="text-sm font-medium">
                    St. Moritz, Switzerland
                  </span>
                </div>
                <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                  View Tour Details{" "}
                  <Icon name="open_in_new" className="text-sm" />
                </button>
              </div>
            </div>
          </section>

          {/* Passenger Details (Bento Grid) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primary Passenger */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                  <Icon name="person" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Elena Rodriguez</h4>
                  <p className="text-xs text-outline">
                    Lead Passenger (ID: P-9912)
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-outline">Email</span>
                  <span className="font-medium">e.rodriguez@example.com</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-outline">Phone</span>
                  <span className="font-medium">+34 612 990 123</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-outline">Nationality</span>
                  <span className="font-medium">Spanish</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-outline">Passport</span>
                  <span className="font-medium">P88****12</span>
                </div>
              </div>
            </div>

            {/* Additional Info / Special Requests */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-l-4 border-tertiary">
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Icon name="priority_high" className="text-tertiary" />
                Special Requirements
              </h4>
              <div className="space-y-3">
                <div className="p-3 bg-tertiary-fixed/30 rounded-xl">
                  <p className="text-[10px] font-bold text-tertiary uppercase tracking-widest mb-1">
                    Dietary
                  </p>
                  <p className="text-sm font-medium">
                    Severe nut allergy. Requires vegan meal options for all
                    flights and group dinners.
                  </p>
                </div>
                <div className="p-3 bg-surface-container-low rounded-xl">
                  <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">
                    Accessibility
                  </p>
                  <p className="text-sm font-medium">
                    Requests lower-floor hotel rooms where available (No stairs
                    preference).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Activity Log / Audit Trail */}
          <section className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-outline-variant/10 flex justify-between items-center">
              <h4 className="font-bold">Activity Log</h4>
              <span className="text-[10px] font-bold text-outline-variant bg-surface-container-low px-2 py-1 rounded">
                AUDIT TRAIL
              </span>
            </div>
            <div className="p-6 space-y-6">
              {/* Log Item */}
              <div className="flex gap-4 relative">
                <div className="absolute left-[11px] top-6 bottom-[-24px] w-[2px] bg-outline-variant/20"></div>
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10">
                  <Icon name="check" className="text-[14px] text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">Booking Confirmed</p>
                  <p className="text-xs text-outline mt-1">
                    Payment verified through Stripe (Ref: ch_91283)
                  </p>
                  <p className="text-[10px] text-outline-variant mt-2 font-mono">
                    OCT 24, 2024 • 14:32 PM • System
                  </p>
                </div>
              </div>
              {/* Log Item */}
              <div className="flex gap-4 relative">
                <div className="absolute left-[11px] top-6 bottom-[-24px] w-[2px] bg-outline-variant/20"></div>
                <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center z-10">
                  <Icon name="edit" className="text-[14px] text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">
                    Passenger Details Updated
                  </p>
                  <p className="text-xs text-outline mt-1">
                    Passport expiry date corrected to 2029-05-15.
                  </p>
                  <p className="text-[10px] text-outline-variant mt-2 font-mono">
                    OCT 25, 2024 • 09:12 AM • Admin: Sarah J.
                  </p>
                </div>
              </div>
              {/* Log Item */}
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-tertiary-container flex items-center justify-center z-10">
                  <Icon name="mail" className="text-[14px] text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">
                    Pre-Departure Pack Sent
                  </p>
                  <p className="text-xs text-outline mt-1">
                    Digital itinerary and visa guide delivered to lead passenger
                    email.
                  </p>
                  <p className="text-[10px] text-outline-variant mt-2 font-mono">
                    NOV 01, 2024 • 10:00 AM • Automated Task
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Sidebar Stats */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          {/* Payment Status Card */}
          <div className="bg-primary text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
            {/* Decor Gradient */}
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div>
                <p className="text-primary-container text-xs font-bold tracking-widest uppercase">
                  Payment Status
                </p>
                <h3 className="text-3xl font-black mt-1">$4,850.00</h3>
              </div>
              <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold">
                PAID IN FULL
              </div>
            </div>
            <div className="space-y-3 relative z-10">
              <div className="flex justify-between text-xs font-medium">
                <span className="opacity-70">Subtotal</span>
                <span>$4,500.00</span>
              </div>
              <div className="flex justify-between text-xs font-medium">
                <span className="opacity-70">Tax & Fees</span>
                <span>$350.00</span>
              </div>
              <div className="pt-3 border-t border-white/10 flex justify-between text-xs font-bold">
                <span>Total</span>
                <span>$4,850.00</span>
              </div>
            </div>
            <button className="w-full mt-6 py-3 bg-white text-primary rounded-xl font-bold text-sm shadow-md hover:bg-slate-50 transition-colors">
              Download Invoice
            </button>
          </div>

          {/* AI Risk Assessment */}
          <div className="bg-white rounded-2xl p-6 border border-outline-variant/10 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="psychology" className="text-blue-600" />
              <h4 className="font-bold">AI Insights</h4>
            </div>
            <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100 mb-4">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">
                Travel Advisory
              </p>
              <p className="text-sm text-slate-700">
                Flight connection in Zurich has a 12% delay probability based on
                winter weather trends. Monitoring active weather fronts.
              </p>
            </div>
            <div className="p-4 bg-tertiary-fixed/30 rounded-xl">
              <p className="text-xs font-bold text-tertiary uppercase tracking-widest mb-1">
                Urgent Action
              </p>
              <p className="text-sm text-slate-700 font-medium">
                Visa verification required for segment 2. Deadline: Nov 15.
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-surface-container-low rounded-2xl p-6">
            <h4 className="font-bold mb-4">Quick Admin Actions</h4>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 text-primary">
                <Icon name="send" className="mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-tight">
                  Resend
                </span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 text-primary">
                <Icon name="content_copy" className="mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-tight">
                  Clone
                </span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 text-primary">
                <Icon name="sync" className="mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-tight">
                  Refund
                </span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 text-error">
                <Icon name="cancel" className="mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-tight">
                  Cancel
                </span>
              </button>
            </div>
          </div>

          {/* Itinerary Quick Look */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm">
            <h4 className="font-bold mb-4">Itinerary Map</h4>
            <div className="w-full h-40 bg-surface-container-high rounded-xl relative overflow-hidden group">
              <img
                alt="Map View"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWCQixtElx0_lIKUH0oy5ExCEY22P0EsBQwIw102dPbiFgEC1HVEiUNwdQ8A32OyCHhyH2aCjlYy5uu9a1MLuircOLEmk0EI8h-wFK0JZ6cEuDjq54jKgBlpbh-4HXtEvu-pqzXZAf_gOZVbd4IaX2XOLiKXOmH8XacF8MJjsy--ZJCBNkiMSO4pLU3uiKngP0KNUkQ4kKcfLKCFwv8Y7ze5D8A3TvQGHVSSdBLJpQxRuSjNev84PdJFygzb4WCaw99vsEr1P675U"
              />
              <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
              <div className="absolute bottom-3 right-3 bg-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1 shadow-md">
                <Icon name="map" className="text-[12px]" />
                OPEN MAP
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
