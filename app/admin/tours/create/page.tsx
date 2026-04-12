import React from "react";
import Link from "next/link";

export default function AdminCreateTourPage() {
  return (
    <div className="bg-surface min-h-screen">
      <main className="flex-1 flex flex-col min-h-screen bg-surface">
        {/*  Top Header Area  */}
        <header className="flex justify-between items-center w-full px-8 py-6 sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
          <div className="flex flex-col">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Create Master Tour
            </h2>
            <nav className="flex text-xs text-outline font-medium gap-2 items-center">
              <span>Tours</span>
              <span className="material-symbols-outlined text-[10px]">
                arrow_forward_ios
              </span>
              <span className="text-primary">New Master</span>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-5 py-2.5 rounded-xl border border-outline-variant/20 text-on-surface font-semibold text-sm hover:bg-surface-container-low transition-colors">
              Discard Draft
            </button>
            <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-primary-container text-white font-bold text-sm shadow-md hover:shadow-lg active:scale-95 transition-all">
              Publish Tour
            </button>
          </div>
        </header>
        {/*  Form Layout: Bento Style  */}
        <div className="p-8 grid grid-cols-12 gap-6">
          {/*  Column 1: Core Details  */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            {/*  Basic Information Section  */}
            <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_20px_40px_rgba(25,28,30,0.06)] space-y-6">
              <div className="flex items-center gap-3 border-b border-outline-variant/10 pb-4">
                <span className="material-symbols-outlined text-primary">
                  info
                </span>
                <h3 className="text-lg font-bold text-on-surface">
                  General Information
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-outline uppercase tracking-wider">
                    Tour Title
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline-variant transition-all"
                    placeholder="e.g., Amalfi Coast Luxury Escape"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-outline uppercase tracking-wider">
                    Short Description
                  </label>
                  <textarea
                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline-variant transition-all"
                    placeholder="Summarize the experience in 2 sentences..."
                    rows={3}
                  ></textarea>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-outline uppercase tracking-wider">
                      Base Price ($)
                    </label>
                    <input
                      className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 text-on-surface transition-all"
                      placeholder="2,499"
                      type="number"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-outline uppercase tracking-wider">
                      Duration (Days)
                    </label>
                    <input
                      className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 text-on-surface transition-all"
                      placeholder="7"
                      type="number"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-outline uppercase tracking-wider">
                      Max Capacity
                    </label>
                    <input
                      className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 text-on-surface transition-all"
                      placeholder="12"
                      type="number"
                    />
                  </div>
                </div>
              </div>
            </section>
            {/*  Itinerary Section (Timeline Tracker style)  */}
            <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_20px_40px_rgba(25,28,30,0.06)]">
              <div className="flex justify-between items-center border-b border-outline-variant/10 pb-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    route
                  </span>
                  <h3 className="text-lg font-bold text-on-surface">
                    Curated Itinerary
                  </h3>
                </div>
                <button className="flex items-center gap-2 text-primary font-bold text-xs hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-sm">
                    add_circle
                  </span>{" "}
                  Add Day
                </button>
              </div>
              <div className="relative pl-8 space-y-12">
                {/*  Timeline Line  */}
                <div className="absolute left-[15px] top-4 bottom-4 w-1 bg-primary-fixed rounded-full"></div>
                {/*  Day 1  */}
                <div className="relative">
                  <div className="absolute -left-[24px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-surface-container-lowest ring-4 ring-primary/5"></div>
                  <div className="bg-surface p-6 rounded-2xl border border-outline-variant/10 shadow-sm space-y-4">
                    <div className="flex justify-between">
                      <h4 className="font-bold text-on-surface">
                        Day 1: Arrival &amp; Welcome Dinner
                      </h4>
                      <span className="material-symbols-outlined text-outline cursor-pointer hover:text-error transition-colors">
                        delete
                      </span>
                    </div>
                    <textarea
                      className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm text-on-surface-variant italic"
                      placeholder="Description of activities..."
                      rows={2}
                    ></textarea>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold text-outline uppercase">
                        Lodging Included
                      </span>
                      <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold text-outline uppercase">
                        Airport Pickup
                      </span>
                    </div>
                  </div>
                </div>
                {/*  Day 2  */}
                <div className="relative">
                  <div className="absolute -left-[24px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-surface-container-lowest ring-4 ring-primary/5"></div>
                  <div className="bg-surface p-6 rounded-2xl border border-outline-variant/10 shadow-sm space-y-4">
                    <div className="flex justify-between">
                      <h4 className="font-bold text-on-surface">
                        Day 2: Coastal Exploration
                      </h4>
                      <span className="material-symbols-outlined text-outline cursor-pointer hover:text-error transition-colors">
                        delete
                      </span>
                    </div>
                    <textarea
                      className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm text-on-surface-variant italic"
                      placeholder="Private yacht tour along the Positano cliffs..."
                      rows={2}
                    ></textarea>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold text-outline uppercase">
                        Activities Included
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/*  Column 2: Media & Automation  */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {/*  Media Upload  */}
            <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_20px_40px_rgba(25,28,30,0.06)] space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  image
                </span>
                <h3 className="text-lg font-bold text-on-surface">
                  Media Gallery
                </h3>
              </div>
              <div className="aspect-video bg-surface-container-low rounded-xl border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-4xl text-outline-variant group-hover:text-primary transition-colors">
                  cloud_upload
                </span>
                <p className="text-xs font-bold text-outline uppercase">
                  Upload Hero Image
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="aspect-square bg-surface-container rounded-lg overflow-hidden relative group">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="vibrant blue water of the Mediterranean coast with colorful cliffside villas under bright summer sun"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLv5MFhRd20XMxiexEkQTGKrz0jMNQHH7JB23Uj_B-qpedWP_bAqvx-PKgOKBJq90VVgdm2Cpkq8eIIipjFwu2QQpFIbSmNtmPQopzWwEQG_LguagfzSZ0CgWBipwxei314H6Gke33-Qywmo6CT9SRHucW8_p5dWmToCo2eGtH-kJfgd_yubK2ciPuUV4xCpgxxx72I8nJSU63KNCH3K1p-j4gzGp1kCHLRlK8MHP2N-cdB7VT1WAcCSo57yANxhVzL_z4tXvQ0bU"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="material-symbols-outlined text-white">
                      delete
                    </span>
                  </div>
                </div>
                <div className="aspect-square bg-surface-container rounded-lg overflow-hidden relative group">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="narrow stone alleyway in a classic Italian village with laundry hanging between balconies and warm afternoon shadows"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHqt2lLdeZ_4TDTeqOe4ROKrEjrXP2wl-MRefdwdulvRGjp2lSxL_tvjptQjWNWstir-ciKTZdOBtccnxC_FV2GV2HNOlXk54ZjR9GCfs3HAbq4-tiOeBU_YOdd_EDu13GfGVY7z8sLvujeR9tBpWw2NANLYPObTR01OKATmOtnD8R2xl2XdgIJL8Od-xeMUYulm3TslNBgQkTQv8zBpwyLzgMJQK-a_fuBdR9VGHW0HJ8DgxNw4TDIXCoac37sjld63tBu1zP3uw"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="material-symbols-outlined text-white">
                      delete
                    </span>
                  </div>
                </div>
                <div className="aspect-square bg-surface-container-low rounded-lg flex items-center justify-center border-2 border-dashed border-outline-variant/20">
                  <span className="material-symbols-outlined text-outline-variant">
                    add
                  </span>
                </div>
              </div>
            </section>
            {/*  Departure Generator (Specialized Section)  */}
            <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  calendar_month
                </span>
                <h3 className="text-lg font-bold text-on-surface">
                  Departure Generator
                </h3>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Auto-create recurring instances of this Master Tour across the
                seasonal calendar.
              </p>
              <div className="space-y-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-extrabold text-primary uppercase tracking-widest">
                    Frequency
                  </label>
                  <select className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-2.5 text-sm font-semibold text-on-surface focus:ring-2 focus:ring-primary/20">
                    <option>Weekly (Saturdays)</option>
                    <option>Bi-Weekly</option>
                    <option>Monthly (1st Monday)</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-extrabold text-primary uppercase tracking-widest">
                      Start Month
                    </label>
                    <input
                      className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-2 text-sm font-semibold text-on-surface"
                      type="month"
                      defaultValue="2024-05"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-extrabold text-primary uppercase tracking-widest">
                      Occurrences
                    </label>
                    <input
                      className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-2 text-sm font-semibold text-on-surface"
                      type="number"
                      defaultValue="12"
                    />
                  </div>
                </div>
              </div>
              <div className="p-4 bg-tertiary-container/10 border border-tertiary-container/20 rounded-xl">
                <div className="flex gap-2 items-start">
                  <span className="material-symbols-outlined text-tertiary-container text-sm">
                    info
                  </span>
                  <p className="text-[10px] font-medium text-tertiary">
                    This will generate 12 individual tour dates starting May
                    4th, 2024. Prices and capacity can be edited per departure
                    later.
                  </p>
                </div>
              </div>
              <button className="w-full py-3 rounded-xl bg-surface-container-lowest text-primary border border-primary/20 font-bold text-sm hover:bg-primary hover:text-white transition-all shadow-sm">
                Generate Batch Schedule
              </button>
            </section>
            {/*  AI Assistant Floating Advice  */}
            <div className="bg-inverse-surface p-6 rounded-2xl shadow-xl space-y-3">
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-primary-fixed-dim"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  psychology
                </span>
                <span className="text-xs font-black text-white tracking-widest uppercase">
                  Concierge Insight
                </span>
              </div>
              <p className="text-xs text-inverse-on-surface leading-normal">
                &quot;Master Tours with a 7-day duration and a price point under
                $2,500 currently have a 84% conversion rate for the Amalfi
                region. Consider adding a &apos;Wine Tasting&apos; tag to boost
                visibility.&quot;
              </p>
              <button className="text-[10px] font-bold text-primary-fixed-dim hover:underline transition-all">
                Apply Recommendation
              </button>
            </div>
          </div>
        </div>
        {/*  Footer (Authority Source: JSON)  */}
        <footer className="w-full py-12 px-8 mt-auto flex flex-col md:flex-row justify-between items-center gap-4 border-t border-slate-200/20 dark:border-slate-800/20 bg-slate-50 dark:bg-slate-950">
          <p className="font-['Inter'] text-xs text-slate-500">
            © 2024 Smart Travel Management System. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              className="font-['Inter'] text-xs text-slate-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-['Inter'] text-xs text-slate-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="font-['Inter'] text-xs text-slate-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              Support Center
            </a>
            <a
              className="font-['Inter'] text-xs text-slate-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              Contact
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
