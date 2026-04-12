import React from "react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <>
      {/*  Header / Top Bar  */}
      <header className="h-20 px-8 flex items-center justify-between sticky top-0 z-10 bg-surface/80 backdrop-blur-md">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-on-surface">
            Dashboard Overview
          </h1>
          <p className="text-sm text-on-surface-variant font-medium">
            Welcome back, Marcus. Here's what's happening today.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-surface-container-low flex items-center px-4 py-2 rounded-full gap-3 text-outline">
            <span className="material-symbols-outlined text-xl">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-48"
              placeholder="Search data points..."
              type="text"
            />
          </div>
          <div className="relative p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full cursor-pointer">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </div>
        </div>
      </header>
      {/*  Dashboard Content  */}
      <div className="p-8 space-y-8 max-w-screen-2xl mx-auto w-full">
        {/*  1. Stats Overview (Grid)  */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/*  Total Bookings  */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-none transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 group">
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">
                  confirmation_number
                </span>
              </div>
              <span className="text-sm font-bold text-green-600 flex items-center gap-1">
                +12%{" "}
                <span className="material-symbols-outlined text-xs">
                  trending_up
                </span>
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">
                Total Bookings
              </h3>
              <p className="text-3xl font-extrabold text-on-surface mt-1">
                1,284
              </p>
            </div>
          </div>
          {/*  Revenue  */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-none transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 group">
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <span className="text-sm font-bold text-green-600 flex items-center gap-1">
                +5.4%{" "}
                <span className="material-symbols-outlined text-xs">
                  trending_up
                </span>
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">
                Revenue
              </h3>
              <p className="text-3xl font-extrabold text-on-surface mt-1">
                $412.5k
              </p>
            </div>
          </div>
          {/*  Active Guides  */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-none transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 group">
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-xl bg-tertiary-container/10 text-tertiary group-hover:bg-tertiary-container group-hover:text-on-tertiary-container transition-colors">
                <span className="material-symbols-outlined">
                  person_pin_circle
                </span>
              </div>
              <span className="text-sm font-bold text-on-surface-variant">
                42 Active
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">
                Active Guides
              </h3>
              <p className="text-3xl font-extrabold text-on-surface mt-1">
                86%
              </p>
            </div>
          </div>
          {/*  System Health  */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-none transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 group">
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-xl bg-green-50 text-green-700">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              </div>
              <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-full uppercase">
                Stable
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">
                System Health
              </h3>
              <p className="text-3xl font-extrabold text-on-surface mt-1">
                99.9<span className="text-lg">%</span>
              </p>
            </div>
          </div>
        </section>
        {/*  2. AI Moderator & Inventory Snapshot (Asymmetric Bento)  */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/*  AI Moderator Widget (Large Column)  */}
          <div className="lg:col-span-7 bg-tertiary-container text-on-tertiary-container p-8 rounded-3xl relative overflow-hidden">
            {/*  Subtle AI Glow Texture  */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    psychology
                  </span>
                </div>
                <h2 className="text-xl font-bold font-headline">
                  AI Moderator: Review Red Flags
                </h2>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest bg-black/20 px-3 py-1 rounded-full">
                Live Analysis
              </span>
            </div>
            <div className="mt-8 space-y-4 relative z-10">
              {/*  Red Flag Item 1  */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex items-center justify-between group hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-error">
                    <img
                      alt="Reviewer Avatar"
                      data-alt="portrait of a frustrated middle-aged woman in a travel context, soft daylight, realistic features"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNOPOnyfnXvlYNDVTDJ42m-sy0M4oGkM8pZzUkFBg7aR7gBFhpR_b0yOGU4i1DA9n7OnQtsOI49hQiTs6oYycqvvbxwVB75Wdxv1mPfptrjtaCvEqZjeGZ5rNDyzk5ndLKUbv72fLYbaG6oT9gPrhpNaalJq5sRnPVCFHgDHJQ1gnU-CIgGFTNs_Nd-GnqSYKex3Exu74E-zLogn2lGAiuWG_kzPhPgVEkYjDPm7LJZ09oULmym2EiFyRHJvuejJznC8bkU004sww"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold">
                      Sarah Jenkins{" "}
                      <span className="text-white/60 font-normal ml-2">
                        Tour #492
                      </span>
                    </p>
                    <p className="text-xs text-white/80 line-clamp-1 italic">
                      "The guide never showed up at the meeting point and..."
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-bold bg-error/20 text-error-container px-2 py-0.5 rounded border border-error/30">
                        CRITICAL: SENTIMENT 0.12
                      </span>
                    </div>
                  </div>
                </div>
                <button className="bg-white text-tertiary font-bold px-4 py-2 rounded-xl text-sm shadow-lg shadow-black/10 hover:scale-105 transition-transform">
                  Take Action
                </button>
              </div>
              {/*  Red Flag Item 2  */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex items-center justify-between group hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-400">
                    <img
                      alt="Reviewer Avatar"
                      data-alt="serious man with dark hair in outdoor lighting, sharp photography, bokeh background"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLqj6DTJjT51ff_h96kOaLuEtFDSSY2czuFIVPrixT2uzMVEs6ObMIYXMLtZ1WH1aGIJr7NE9tV6vtHPtQy-0U73T-NIeym01c_gq9mNoUL1HwnxLxnwZ2or52XG8OPEpviCYBfZeLf25vb7LU8GdJ4T2z4r5qCS22Kp7pOyDhRo-EVnaQwrq3QWfPHuzWm9qFrmpd4HP4eutoHvCARQkSTVKDYBBrTjg3q_yA0qRUHd4WHUDJmvgQ0Kzg6RhXqCqq2CMdW8SarU8"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold">
                      David Chen{" "}
                      <span className="text-white/60 font-normal ml-2">
                        Tour #311
                      </span>
                    </p>
                    <p className="text-xs text-white/80 line-clamp-1 italic">
                      "Transport was cramped and air conditioning failed
                      midway..."
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-bold bg-orange-400/20 text-orange-200 px-2 py-0.5 rounded border border-orange-400/30">
                        WARNING: SENTIMENT 0.38
                      </span>
                    </div>
                  </div>
                </div>
                <button className="bg-white text-tertiary font-bold px-4 py-2 rounded-xl text-sm shadow-lg shadow-black/10 hover:scale-105 transition-transform">
                  View Details
                </button>
              </div>
            </div>
          </div>
          {/*  Inventory Snapshot (Small Column)  */}
          <div className="lg:col-span-5 bg-surface-container-low p-8 rounded-3xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold font-headline">
                Upcoming Departures
              </h2>
              <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                Full Manifest{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
            <div className="space-y-6">
              {/*  Departure Item 1  */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-on-surface">
                    Iceland Glaciers Expedition
                  </span>
                  <span className="text-on-surface-variant">2/14 Seats</span>
                </div>
                <div className="h-3 w-full bg-surface-container-high rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: "85.7%" }}
                  ></div>
                </div>
                <p className="text-[10px] uppercase font-bold text-error tracking-tighter">
                  Selling Fast • 48h to Launch
                </p>
              </div>
              {/*  Departure Item 2  */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-on-surface">
                    Amalfi Coast Luxury Retreat
                  </span>
                  <span className="text-on-surface-variant">8/12 Seats</span>
                </div>
                <div className="h-3 w-full bg-surface-container-high rounded-full overflow-hidden">
                  <div
                    className="h-full bg-secondary-container rounded-full"
                    style={{ width: "66.6%" }}
                  ></div>
                </div>
                <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-tighter">
                  Steady Pace • 5d to Launch
                </p>
              </div>
              {/*  Departure Item 3  */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-on-surface">
                    Kyoto Cherry Blossom Tour
                  </span>
                  <span className="text-on-surface-variant">20/20 Seats</span>
                </div>
                <div className="h-3 w-full bg-surface-container-high rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <p className="text-[10px] uppercase font-bold text-green-600 tracking-tighter">
                  Fully Booked • 12d to Launch
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*  3. Recent Activity (Full Width/Asymmetric)  */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-3xl border-0">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold font-headline">
                Recent Booking Activity
              </h2>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-surface-container rounded-full text-xs font-bold text-on-surface-variant">
                  Today
                </button>
                <button className="px-3 py-1 bg-transparent rounded-full text-xs font-medium text-outline">
                  Yesterday
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] uppercase tracking-widest text-outline border-b border-surface-container-low">
                    <th className="pb-4 font-black">Customer</th>
                    <th className="pb-4 font-black">Destination</th>
                    <th className="pb-4 font-black">Date</th>
                    <th className="pb-4 font-black">Status</th>
                    <th className="pb-4 font-black text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-surface-container-low">
                  <tr className="hover:bg-surface-container-low/30 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-[10px] font-bold text-primary">
                          EJ
                        </div>
                        <span className="font-bold">Elena Jacobs</span>
                      </div>
                    </td>
                    <td className="py-4 text-on-surface-variant">
                      Paris Arts &amp; Gastronomy
                    </td>
                    <td className="py-4 text-on-surface-variant">
                      Oct 24, 09:42 AM
                    </td>
                    <td className="py-4">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-md text-[10px] font-bold">
                        PAID
                      </span>
                    </td>
                    <td className="py-4 text-right font-bold">$2,450</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/30 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-[10px] font-bold text-secondary">
                          MK
                        </div>
                        <span className="font-bold">Marcus King</span>
                      </div>
                    </td>
                    <td className="py-4 text-on-surface-variant">
                      Wild Safari Kenya
                    </td>
                    <td className="py-4 text-on-surface-variant">
                      Oct 24, 08:15 AM
                    </td>
                    <td className="py-4">
                      <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md text-[10px] font-bold">
                        PENDING
                      </span>
                    </td>
                    <td className="py-4 text-right font-bold">$4,890</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/30 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center text-[10px] font-bold text-tertiary">
                          SR
                        </div>
                        <span className="font-bold">Sofia Rodriguez</span>
                      </div>
                    </td>
                    <td className="py-4 text-on-surface-variant">
                      Machu Picchu Trek
                    </td>
                    <td className="py-4 text-on-surface-variant">
                      Oct 24, 07:30 AM
                    </td>
                    <td className="py-4">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-md text-[10px] font-bold">
                        PAID
                      </span>
                    </td>
                    <td className="py-4 text-right font-bold">$3,120</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/*  Guide Assignments (Last Column)  */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-50">
            <h2 className="text-xl font-bold font-headline mb-6">
              Guide Status
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    alt="Guide Avatar"
                    className="w-12 h-12 rounded-2xl object-cover"
                    data-alt="professional woman's headshot, soft studio lighting, confident expression, minimalist background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLtgTYarxVuhLOYR8WCvQylcjEaUvybYzVNSoRQ5DwL29TANhIo2nKx85KubvG-aC9ATJTH5NHoLjty_rpboLc0vo1mpgVbSNQpxe0ZCCXIBLvVxt0BL9MhR8ri_nC1-I6Y47VmxC8_JPnTLomcBUKyEpfgNcTygPZmHibXWFq93RoEQxirn3iYvy-IPLG1kvyytTJmc2sXTO2UhQz3tiwl_n_ZObaOblrezc8-PAMGP3Uw2fMkWXrEOJz4hd2BNyBOFHUlAUXzUc"
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold">Emma Wilson</p>
                  <p className="text-xs text-outline italic">
                    In Transit: Rome City Tour
                  </p>
                </div>
                <span className="material-symbols-outlined text-outline">
                  more_vert
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    alt="Guide Avatar"
                    className="w-12 h-12 rounded-2xl object-cover"
                    data-alt="middle-aged male guide with a warm smile, outdoor natural lighting, soft focus foliage background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1J8Hmf7zJ8cezdpohyUMY1iczZWRuyKcAC624mnHFvIzm2fE3M-JmwwLuQSU5QMQQOAsTlhgquC5fcbl1CurnPrEL_jyHUMPfhEk0PShIln9Og9jR8V-XPWwzoXKkiA1yOgfyjroIXTlQvdzurgrTSqFfGYXIsZFsYLpk26dVw93aKbIa9hMZvz3lxZQb-v4-WOAhdhBoxuh8We08cwiJIsCW4pR_M1M8Dxd4qHqeQeAxGT_j-ilsYsGu5L6npYorbUR2Tks9ZG4"
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 border-2 border-white rounded-full"></span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold">Julian Pearce</p>
                  <p className="text-xs text-outline italic">
                    Resting (On Call)
                  </p>
                </div>
                <span className="material-symbols-outlined text-outline">
                  more_vert
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    alt="Guide Avatar"
                    className="w-12 h-12 rounded-2xl object-cover"
                    data-alt="close-up portrait of a young male professional, bright daylight, cinematic depth of field"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnk7YEuUrMvK6Wy3gpZFGF8TY38jsKYsQJy_k-0WdxwWUj2UCqBIS0Jvz1Nso7vf6Wa8xTMR2x6umIW1vXJ_PwX_40W8DXoLo9QvkNaKgGn7OBFkHtbcMM2ZXqtwKMD68zVvOcis67GwatCcTcLl8LGhzE8bcet_tQStu99AS8femQnw5St-dW4L6w1dF8TyBUa8t6Wljs3zuFm6nUrlxmkz34JeanR2FVrg0rmQ2cM-1JVyuM3TQYe4jdRnLCk2V0ZmWEWD5G8gM"
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold">Liam Foster</p>
                  <p className="text-xs text-outline italic">
                    Briefing: Safari Prep
                  </p>
                </div>
                <span className="material-symbols-outlined text-outline">
                  more_vert
                </span>
              </div>
            </div>
            <button className="w-full mt-8 py-3 border border-outline-variant text-on-surface-variant text-sm font-bold rounded-xl hover:bg-surface-container-low transition-colors">
              Manage All Fleet
            </button>
          </div>
        </section>
      </div>
      {/*  Footer Integration  */}
    </>
  );
}
