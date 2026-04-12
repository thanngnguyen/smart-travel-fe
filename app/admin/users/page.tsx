import React from "react";
import Icon from "@/components/ui/Icon";

export default function UsersManagementPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Header Area */}
      <header className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-black text-on-surface tracking-tight font-headline">
            User Management
          </h2>
          <p className="text-on-surface-variant font-medium mt-1">
            Manage platform access, roles, and security protocols for the STMS
            ecosystem.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-lowest text-on-surface font-semibold rounded-xl shadow-sm border border-outline-variant/20 hover:bg-surface-container-low transition-all">
            <Icon name="file_download" className="text-[20px]" />
            Export CSV
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-xl shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
            <Icon name="person_add" className="text-[20px]" />
            Add New User
          </button>
        </div>
      </header>

      {/* Filter & Search Bar */}
      <div className="bg-surface-container-high rounded-3xl p-4 mb-6 flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[300px] relative">
          <Icon
            name="search"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-outline"
          />
          <input
            className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            placeholder="Search user by name or email..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-2 bg-surface-container-low p-1 rounded-2xl">
          <button className="px-4 py-2 rounded-xl text-sm font-bold bg-white shadow-sm text-primary">
            All Roles
          </button>
          <button className="px-4 py-2 rounded-xl text-sm font-bold text-outline hover:text-on-surface transition-colors">
            Admin
          </button>
          <button className="px-4 py-2 rounded-xl text-sm font-bold text-outline hover:text-on-surface transition-colors">
            Guide
          </button>
          <button className="px-4 py-2 rounded-xl text-sm font-bold text-outline hover:text-on-surface transition-colors">
            Customer
          </button>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-on-surface font-bold text-sm bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10">
          <Icon name="filter_list" className="text-[18px]" />
          Filters
        </button>
      </div>

      {/* User Table */}
      <div className="bg-surface-container-lowest rounded-3xl shadow-[0_20px_40px_rgba(25,28,30,0.06)] overflow-hidden mb-8">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low">
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                Name
              </th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                Email
              </th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                Role
              </th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                Status
              </th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline">
                Date Joined
              </th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-outline text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-low">
            {/* User Row 1 */}
            <tr className="hover:bg-surface transition-colors group">
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-xs">
                    AH
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-on-surface">
                      Alexander Hamilton
                    </span>
                    <span className="text-xs text-outline">ID: STMS-9021</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5 text-sm text-on-surface-variant">
                ahamilton@stms-travel.com
              </td>
              <td className="px-6 py-5">
                <span className="px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-tight">
                  Admin
                </span>
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-sm font-medium text-on-surface">
                    Active
                  </span>
                </div>
              </td>
              <td className="px-6 py-5 text-sm text-outline font-medium">
                Oct 12, 2023
              </td>
              <td className="px-6 py-5 text-right">
                <button className="p-2 rounded-lg hover:bg-surface-container-high transition-colors opacity-0 group-hover:opacity-100 text-outline">
                  <Icon name="more_vert" className="text-[20px]" />
                </button>
              </td>
            </tr>
            {/* User Row 2 */}
            <tr className="hover:bg-surface transition-colors group">
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <img
                    alt="Elena Rodriguez"
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxOqalHokk0yW26mNUctuDFnj3GQCxT7LBW1R4KUXf_d0wMeF_kEhDABVSxWm8tm-7du0a9iHt_zOgJZO5KYE6blCpR5QdiMzzUpXkQ1qp5Watz6i-0034BXO3LVs0DtDSLeWt1INimfuunQl42ndFrQ43Qe5uLK3UCKe6xQKpGqJED8SOARjqhRfH5llbTr5gt7wkqXCCUw2u0ZbtwG5m-21X8msij2-NghCNzOW1c4KmUtNs0dCFluxdex5RoxNqI0iue1BWl3Q"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-on-surface">
                      Elena Rodriguez
                    </span>
                    <span className="text-xs text-outline">ID: STMS-4421</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5 text-sm text-on-surface-variant">
                e.rodriguez@guidehub.org
              </td>
              <td className="px-6 py-5">
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-tight">
                  Tour Guide
                </span>
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span className="text-sm font-medium text-on-surface">
                    Pending
                  </span>
                </div>
              </td>
              <td className="px-6 py-5 text-sm text-outline font-medium">
                Nov 04, 2023
              </td>
              <td className="px-6 py-5 text-right">
                <button className="p-2 rounded-lg hover:bg-surface-container-high transition-colors opacity-0 group-hover:opacity-100 text-outline">
                  <Icon name="more_vert" className="text-[20px]" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="px-6 py-4 flex items-center justify-between bg-surface-container-low/50 border-t border-surface-container-high">
          <span className="text-xs font-bold text-outline uppercase tracking-wider">
            Showing 1 to 4 of 1,240 users
          </span>
          <div className="flex gap-2">
            <button className="p-2 rounded-xl bg-white shadow-sm border border-outline-variant/10 text-outline hover:text-on-surface">
              <Icon name="chevron_left" className="text-[20px]" />
            </button>
            <button className="w-10 h-10 rounded-xl bg-primary text-on-primary font-bold shadow-sm">
              1
            </button>
            <button className="w-10 h-10 rounded-xl bg-white shadow-sm border border-outline-variant/10 text-outline font-bold hover:bg-surface-container-low transition-colors">
              2
            </button>
            <button className="p-2 rounded-xl bg-white shadow-sm border border-outline-variant/10 text-outline hover:text-on-surface">
              <Icon name="chevron_right" className="text-[20px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Growth & Security Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-3xl shadow-[0_20px_40px_rgba(25,28,30,0.04)] flex flex-col relative overflow-hidden">
          <div className="relative z-10 mb-8">
            <h3 className="text-lg font-headline font-bold text-on-surface mb-2">
              User Growth Analytics
            </h3>
            <p className="text-sm text-on-surface-variant max-w-md">
              Your user base has increased by{" "}
              <span className="text-emerald-600 font-bold">12.5%</span> this
              month. Most new signups are choosing the 'Adventurer' package.
            </p>
          </div>
          <div className="mt-auto flex items-end gap-6 relative z-10">
            <div className="flex items-end gap-2 h-24">
              <div
                className="w-8 bg-primary/20 rounded-t-lg"
                style={{ height: "40%" }}
              ></div>
              <div
                className="w-8 bg-primary/40 rounded-t-lg"
                style={{ height: "60%" }}
              ></div>
              <div
                className="w-8 bg-primary/60 rounded-t-lg"
                style={{ height: "45%" }}
              ></div>
              <div
                className="w-8 bg-primary/80 rounded-t-lg"
                style={{ height: "75%" }}
              ></div>
              <div
                className="w-8 bg-primary rounded-t-lg"
                style={{ height: "100%" }}
              ></div>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-black text-primary font-headline tracking-tighter">
                1,240
              </span>
              <span className="text-[10px] font-bold text-outline uppercase tracking-widest mt-1">
                Total Active Users
              </span>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent flex items-center justify-center pointer-events-none">
            <Icon
              name="trending_up"
              className="text-[160px] text-primary/10 rotate-12 -mr-20"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-inverse-surface to-slate-800 rounded-3xl p-8 text-inverse-on-surface flex flex-col shadow-xl">
          <div className="flex justify-between items-start mb-6">
            <Icon name="security" className="p-3 bg-white/10 rounded-2xl" />
            <span className="px-3 py-1 bg-error-container text-on-error-container text-[10px] font-bold rounded-lg uppercase tracking-wider">
              High Risk
            </span>
          </div>
          <h3 className="text-xl font-bold font-headline mb-2 text-white">
            Security Audit
          </h3>
          <p className="text-sm text-slate-300 font-light mb-8">
            3 users have been flagged by the AI for suspicious login patterns
            from multiple geo-locations.
          </p>
          <button className="w-full py-3.5 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-slate-100 transition-all active:scale-95 mt-auto shadow-lg shadow-black/20">
            Review Flags
          </button>
        </div>
      </div>
    </div>
  );
}
