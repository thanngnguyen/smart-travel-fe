import React from "react";
import Link from "next/link";

export default function AdminSettingsPage() {
  return (
    <div className="bg-surface min-h-screen">
      <main className="min-h-screen p-8 lg:p-12">
        <header className="mb-12">
          <h2 className="text-4xl font-headline font-black text-on-surface tracking-tight mb-2">
            System Configuration
          </h2>
          <p className="text-on-surface-variant font-body">
            Manage global STMS parameters, security keys, and automated
            intelligence thresholds.
          </p>
        </header>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          <section className="xl:col-span-8 flex flex-col gap-8">
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0_20px_40px_rgba(25,28,30,0.06)]">
              <div className="flex items-center gap-3 mb-8">
                <span
                  className="material-symbols-outlined text-primary text-3xl"
                  data-icon="business"
                >
                  business
                </span>
                <h3 className="text-xl font-headline font-bold">
                  Company Identity
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-outline">
                    Organization Name
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-xl p-4 text-on-surface font-body focus:ring-2 focus:ring-primary-container transition-all"
                    type="text"
                    defaultValue="Smart Travel Management Systems Ltd."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-outline">
                    Contact Email
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-xl p-4 text-on-surface font-body focus:ring-2 focus:ring-primary-container transition-all"
                    type="email"
                    defaultValue="admin@stms-travel.com"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-outline">
                    Global HQ Address
                  </label>
                  <textarea
                    className="w-full bg-surface-container-low border-none rounded-xl p-4 text-on-surface font-body focus:ring-2 focus:ring-primary-container transition-all"
                    rows={2}
                    defaultValue="124 Luxury Way, Floor 4, Zurich, Switzerland"
                  />
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0_20px_40px_rgba(25,28,30,0.06)]">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-primary text-3xl"
                    data-icon="vpn_key"
                  >
                    vpn_key
                  </span>
                  <h3 className="text-xl font-headline font-bold">
                    Payment Gateway API
                  </h3>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-tighter">
                  Connected
                </span>
              </div>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 bg-surface-container-low p-4 rounded-xl">
                  <div className="flex-1">
                    <p className="text-xs font-bold text-outline uppercase mb-1">
                      Stripe Production Key
                    </p>
                    <code className="text-sm font-mono text-on-surface">
                      pk_live_51Mxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </code>
                  </div>
                  <button className="px-4 py-2 bg-surface-container-highest text-on-surface font-bold text-xs rounded-lg hover:bg-outline-variant transition-colors">
                    Rotate Key
                  </button>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-4 bg-surface-container-low p-4 rounded-xl">
                  <div className="flex-1">
                    <p className="text-xs font-bold text-outline uppercase mb-1">
                      Webhook Secret
                    </p>
                    <div className="flex items-center gap-2">
                      <code className="text-sm font-mono text-on-surface">
                        whsec_******************************
                      </code>
                      <span
                        className="material-symbols-outlined text-outline cursor-pointer"
                        data-icon="visibility_off"
                      >
                        visibility_off
                      </span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-surface-container-highest text-on-surface font-bold text-xs rounded-lg hover:bg-outline-variant transition-colors">
                    Test Endpoint
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0_20px_40px_rgba(25,28,30,0.06)]">
              <div className="flex items-center gap-3 mb-8">
                <span
                  className="material-symbols-outlined text-primary text-3xl"
                  data-icon="shield_person"
                >
                  shield_person
                </span>
                <h3 className="text-xl font-headline font-bold">
                  User Role Management (RBAC)
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-surface-container">
                      <th className="pb-4 text-[10px] font-bold uppercase tracking-widest text-outline">
                        Role Name
                      </th>
                      <th className="pb-4 text-[10px] font-bold uppercase tracking-widest text-outline">
                        Scope
                      </th>
                      <th className="pb-4 text-[10px] font-bold uppercase tracking-widest text-outline">
                        Users
                      </th>
                      <th className="pb-4 text-right"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-low">
                    <tr className="group hover:bg-surface-container-low transition-colors">
                      <td className="py-4 font-bold text-on-surface">
                        Super Admin
                      </td>
                      <td className="py-4 text-sm text-outline">
                        Full System Access
                      </td>
                      <td className="py-4 text-sm text-outline">2</td>
                      <td className="py-4 text-right">
                        <span
                          className="material-symbols-outlined text-outline cursor-pointer group-hover:text-primary"
                          data-icon="edit"
                        >
                          edit
                        </span>
                      </td>
                    </tr>
                    <tr className="group hover:bg-surface-container-low transition-colors">
                      <td className="py-4 font-bold text-on-surface">
                        Concierge Lead
                      </td>
                      <td className="py-4 text-sm text-outline">
                        Booking &amp; Inventory
                      </td>
                      <td className="py-4 text-sm text-outline">14</td>
                      <td className="py-4 text-right">
                        <span
                          className="material-symbols-outlined text-outline cursor-pointer group-hover:text-primary"
                          data-icon="edit"
                        >
                          edit
                        </span>
                      </td>
                    </tr>
                    <tr className="group hover:bg-surface-container-low transition-colors">
                      <td className="py-4 font-bold text-on-surface">
                        Finance Auditor
                      </td>
                      <td className="py-4 text-sm text-outline">
                        Payments &amp; Reports
                      </td>
                      <td className="py-4 text-sm text-outline">4</td>
                      <td className="py-4 text-right">
                        <span
                          className="material-symbols-outlined text-outline cursor-pointer group-hover:text-primary"
                          data-icon="edit"
                        >
                          edit
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <aside className="xl:col-span-4 flex flex-col gap-8">
            <div className="bg-tertiary text-white rounded-2xl p-8 shadow-[0_20px_40px_rgba(123,38,0,0.15)] relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="material-symbols-outlined text-on-tertiary-container"
                    data-icon="auto_awesome"
                  >
                    auto_awesome
                  </span>
                  <h3 className="text-xl font-headline font-extrabold">
                    AI Red Flag Sensitivity
                  </h3>
                </div>
                <p className="text-sm opacity-80 mb-8 leading-relaxed">
                  Adjust the threshold for the travel anomaly detection engine.
                  Higher sensitivity increases "Red Flag" warnings for itinerary
                  conflicts and high-risk booking patterns.
                </p>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex justify-between text-xs font-bold uppercase">
                      <span>Threshold Level</span>
                      <span className="text-on-tertiary-container">
                        82% (High)
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/20 rounded-full relative">
                      <div className="absolute top-0 left-0 h-full w-[82%] bg-on-tertiary-container rounded-full"></div>
                      <div className="absolute top-1/2 left-[82%] -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg cursor-pointer"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-[10px] font-bold uppercase opacity-60 mb-1">
                        Risk Alerts
                      </p>
                      <p className="text-lg font-headline font-bold">Enabled</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-[10px] font-bold uppercase opacity-60 mb-1">
                        Auto-Delay
                      </p>
                      <p className="text-lg font-headline font-bold">
                        12h Buffer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            </div>
            <div className="bg-surface-container-high rounded-2xl p-8">
              <h4 className="text-sm font-headline font-bold mb-4 flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="history"
                >
                  history
                </span>
                Recent Activity
              </h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0"></div>
                  <div>
                    <p className="text-xs font-bold">Admin (Sarah J.)</p>
                    <p className="text-[11px] text-outline">
                      Updated Stripe API Production Secret
                    </p>
                    <p className="text-[10px] text-outline-variant mt-1">
                      2 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-tertiary flex-shrink-0"></div>
                  <div>
                    <p className="text-xs font-bold">System AI</p>
                    <p className="text-[11px] text-outline">
                      Auto-calibrated threshold due to high volume
                    </p>
                    <p className="text-[10px] text-outline-variant mt-1">
                      6 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0"></div>
                  <div>
                    <p className="text-xs font-bold">Lead Auditor</p>
                    <p className="text-[11px] text-outline">
                      Modified Role Scope for 'Finance Auditor'
                    </p>
                    <p className="text-[10px] text-outline-variant mt-1">
                      Yesterday
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-2xl font-headline font-bold shadow-lg hover:shadow-xl transition-all scale-95 active:scale-90">
              Save Global Configuration
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
}
