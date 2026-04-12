"use client";

import React, { useState } from "react";
import Icon from "@/components/ui/Icon";

const navItems = [
  { label: 'Daily Schedule', icon: 'calendar_today' },
  { label: 'Check-in', icon: 'check_circle' },
  { label: 'My Tours', icon: 'tour' },
  { label: 'Resource Center', icon: 'inventory_2' },
  { label: 'Messages', icon: 'chat' },
  { label: 'Settings', icon: 'settings' },
];

const tasks = [
  {
    time: '09:00 AM',
    duration: '2.5 Hours',
    title: 'Old Town Historical Walk',
    location: 'Lindenhof Hill Plaza',
    status: 'Fully Confirmed',
    type: 'VIP Private',
    guests: '12 / 15',
    badge: 'VIP Private',
  },
  {
    time: '11:30 AM',
    duration: 'Break',
    title: 'Lunch Break',
    location: 'Riverfront Bistro',
    status: 'No tours scheduled',
    type: 'Break',
    guests: '—',
    badge: 'Break',
  },
  {
    time: '02:00 PM',
    duration: '4 Hours',
    title: 'Lakeside Culinary & Boat Experience',
    location: 'Bürkliplatz Pier 4',
    status: 'Confirm manifest 30 min before',
    type: 'Public Group',
    guests: '42 / 50',
    badge: 'Public Group',
  },
  {
    time: '06:30 PM',
    duration: '1 Hour',
    title: 'Daily Wrap-up & Reporting',
    location: 'Virtual Portal Admin Panel',
    status: 'Summary due',
    type: 'Summary',
    guests: '—',
    badge: 'Summary',
  },
];

const passengers = [
  {
    name: 'Marcus Wright',
    status: 'Checked-in',
    group: '14A',
    bookingId: '#BK-99021',
    ticket: 'A',
    initials: 'MW',
    action: 'View',
  },
  {
    name: 'Elena Lofton',
    status: 'Pending',
    group: '02C',
    bookingId: '#BK-99144',
    ticket: 'B',
    initials: 'EL',
    action: 'Check In',
  },
  {
    name: 'Samuel J. Dawson',
    status: 'Checked-in',
    group: '14B',
    bookingId: '#BK-99022',
    ticket: 'A',
    initials: 'SD',
    action: 'View',
  },
];

const completedTours = [
  {
    title: 'Alpine Ridge Expedition',
    date: 'Oct 24, 2023',
    guests: '12 Guests',
    status: 'Paid Out',
  },
  {
    title: 'Coastal Secrets Kayaking',
    date: 'Oct 21, 2023',
    guests: '8 Guests',
    status: 'Paid Out',
  },
  {
    title: 'Ancient Sequoia Trail',
    date: 'Oct 18, 2023',
    guests: '22 Guests',
    status: 'Processing',
  },
];

const messages = [
  {
    sender: 'HQ Operations (Sarah)',
    time: '14:20',
    text: 'Route clearance confirmed for sector 7. Please keep the guests clear of the landing pad.',
  },
  {
    sender: 'Amazonia Expedition G4',
    time: '12:05',
    text: 'David: Are we still meeting at the dock at 08:00 tomorrow? ',
  },
  {
    sender: 'Leon Hoffmann (Guest)',
    time: 'Yesterday',
    text: 'Thank you for the amazing tour yesterday!',
  },
];

export default function GuidePortalPage() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('Daily Schedule');

  const activeTabContent = () => {
    switch (activeTab) {
      case 'Daily Schedule':
        return (
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200/70">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Timeline: Thursday, Oct 24</p>
                  <h2 className="mt-3 text-2xl font-black text-slate-950">Today’s schedule</h2>
                </div>
                <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition">
                  Week View
                </button>
              </div>
              <div className="mt-6 space-y-6">
                {tasks.map((task) => (
                  <div key={task.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{task.time} · {task.duration}</p>
                        <h3 className="mt-2 text-xl font-black text-slate-950">{task.title}</h3>
                        <p className="mt-1 text-sm text-slate-600">{task.location}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-slate-950 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white">{task.badge}</span>
                        <span className="text-sm font-semibold text-slate-950">{task.guests}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-slate-600">{task.status}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'Check-in':
        return (
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Passenger Check-in</p>
                  <h2 className="mt-3 text-2xl font-black text-slate-950">Tour ID: #EXP-2024-008</h2>
                  <p className="mt-2 text-sm text-slate-600">Alpine Summit Trail • Boarding manifest review</p>
                </div>
                <div className="rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">Boarding Progress: 18 / 24</div>
              </div>
              <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-slate-200">
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 bg-slate-100 px-5 py-4 text-xs uppercase tracking-[0.35em] text-slate-500">
                  <span>Passenger Name</span>
                  <span>Seat / Group</span>
                  <span>Booking ID</span>
                  <span>Status</span>
                  <span>Actions</span>
                </div>
                <div className="divide-y divide-slate-200 bg-white">
                  {passengers.map((passenger) => (
                    <div key={passenger.name} className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 px-5 py-4 items-center text-sm text-slate-700">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-2xl bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-700">{passenger.initials}</div>
                        <div>{passenger.name}</div>
                      </div>
                      <div>{passenger.group}</div>
                      <div className="text-slate-500">{passenger.bookingId}</div>
                      <div>
                        <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${passenger.status === 'Pending' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-700'}`}>
                          {passenger.status}
                        </span>
                      </div>
                      <div>
                        <button className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition">
                          {passenger.action}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-base font-bold text-slate-950">Tour briefing</h3>
                <p className="mt-3 text-sm text-slate-600">Arrival at Base Camp expected at 14:30. Weather is clear and visibility is excellent. Ensure radios are on channel 7.</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">+2</div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">Assistant Guides Active</p>
                    <p className="text-xs text-slate-500">Support team ready at check-in point.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-slate-950">Recent alerts</h3>
                <div className="mt-5 space-y-4">
                  <div className="rounded-3xl border border-rose-100 bg-rose-50 p-4">
                    <p className="text-sm font-bold text-rose-700">Medical Clearance Required</p>
                    <p className="mt-2 text-sm text-slate-600">Passenger Elena Lofton (#BK-99144) marked Mobility. Arrange ramp access and assisted boarding.</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-bold text-slate-950">Weather advisory</p>
                    <p className="mt-2 text-sm text-slate-600">Wind gusts expected in the afternoon. Keep guests informed and secure loose equipment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'My Tours':
        return (
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Total Tours', value: '142' },
                { label: 'Passengers', value: '2,840' },
                { label: 'Avg Rating', value: '4.92' },
                { label: 'Earnings', value: '$12,450' },
              ].map((item) => (
                <div key={item.label} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{item.label}</p>
                  <p className="mt-4 text-3xl font-black text-slate-950">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Completed tours</p>
                  <h2 className="mt-3 text-2xl font-black text-slate-950">History of your guided expeditions</h2>
                </div>
                <div className="flex items-center gap-3">
                  <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">Filter</button>
                  <button className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">Export</button>
                </div>
              </div>
              <div className="space-y-4">
                {completedTours.map((tour) => (
                  <div key={tour.title} className="flex flex-col gap-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-bold text-slate-950">{tour.title}</p>
                      <p className="text-sm text-slate-500">{tour.date} • {tour.guests}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-emerald-700">{tour.status}</span>
                      <button className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">View Summary</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'Resource Center':
        return (
          <div className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {[
                { title: 'Incident Report', description: 'Report safety issues quickly and escalate to operations.' },
                { title: 'Support', description: 'Contact dispatch or request technical assistance.' },
                { title: 'Route Map', description: 'Open live navigation and guide route details.' },
              ].map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-3 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-2xl font-black text-slate-950">Resource Center</h2>
              <p className="mt-3 text-sm text-slate-600">Access manuals, quick links, and mission-critical procedures in one place.</p>
            </div>
          </div>
        );
      case 'Messages':
        return (
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-950">Recent conversations</h2>
                <div className="inline-flex gap-2 rounded-full bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600">All</div>
              </div>
              <div className="mt-6 space-y-3">
                {messages.map((message) => (
                  <button key={message.sender} className="w-full rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 text-left transition hover:bg-slate-100">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-slate-950">{message.sender}</p>
                        <p className="text-sm text-slate-600">{message.text}</p>
                      </div>
                      <span className="text-xs text-slate-500">{message.time}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Live chat</p>
              <div className="mt-4 space-y-4">
                <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-700">Good morning Marcus. Just checking in on the trail conditions for the morning expedition at 9:00 AM.</div>
                <div className="rounded-3xl bg-slate-950 p-4 text-sm text-white">Conditions are great. We've had some light rain overnight but the trails are holding up. Sector 7 is clear.</div>
                <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-700">Perfect. Route clearance confirmed for sector 7. Please note there's a scheduled drone survey at 11:30 AM near the waterfall area.</div>
              </div>
              <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-950">Type a message</p>
                <div className="mt-3 flex items-center gap-3">
                  <input className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none" placeholder="Write a note..." />
                  <button className="rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white">Send</button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Settings':
        return (
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Account preferences</p>
                  <h2 className="mt-3 text-2xl font-black text-slate-950">Manage your profile</h2>
                </div>
                <button className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">Save Changes</button>
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {[
                  { label: 'Full Name', value: 'Alex Rivera' },
                  { label: 'Job Title', value: 'Senior Mountain Guide' },
                  { label: 'Phone Number', value: '+1 (555) 012-3456' },
                ].map((field) => (
                  <div key={field.label} className="rounded-[1.75rem] bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">{field.label}</p>
                    <p className="mt-2 text-sm text-slate-900">{field.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-slate-950">Notification channels</h3>
                <div className="mt-4 space-y-4">
                  {[
                    { title: 'Push Notifications', text: 'Alerts for new tour assignments and route changes.', active: true },
                    { title: 'Email Summary', text: 'Weekly performance metrics and schedule overview.', active: false },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center justify-between rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4">
                      <div>
                        <p className="font-semibold text-slate-950">{item.title}</p>
                        <p className="text-sm text-slate-600">{item.text}</p>
                      </div>
                      <span className={`inline-flex h-6 w-12 items-center rounded-full ${item.active ? 'bg-slate-950 justify-end' : 'bg-slate-300 justify-start'} p-1`}>
                        <span className="h-4 w-4 rounded-full bg-white shadow-sm transition" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
                <h3 className="text-base font-bold">Account security</h3>
                <p className="mt-4 text-sm text-slate-300">Protect your account with extra security and session management.</p>
                <div className="mt-6 space-y-4 rounded-[1.75rem] bg-slate-900 p-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-100">Password</p>
                    <p className="mt-2 text-xs text-slate-400">Last updated 3 months ago</p>
                  </div>
                  <button className="w-full rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-950">Update Password</button>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="rounded-[1.75rem] bg-slate-900 p-4 border border-slate-800">
                    <p className="text-sm font-semibold text-slate-100">Two-Factor Auth</p>
                    <p className="mt-2 text-sm text-slate-400">Protect your account with an extra authentication layer.</p>
                  </div>
                  <div className="rounded-[1.75rem] bg-slate-900 p-4 border border-slate-800">
                    <p className="text-sm font-semibold text-slate-100">Active Sessions</p>
                    <p className="mt-2 text-sm text-slate-400">Manage devices currently logged into your account.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[280px_1fr]">
          <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-xl font-black text-primary">G</div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Guide Portal</p>
                <p className="mt-1 text-lg font-semibold text-slate-950">STMS Admin System</p>
              </div>
            </div>
            <div className="mt-10 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActiveTab(item.label)}
                  className={`flex w-full items-center gap-3 rounded-3xl px-4 py-4 text-left text-sm font-semibold transition ${
                    activeTab === item.label ? 'bg-slate-950 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-50'
                  }`}>
                  <Icon name={item.icon} className="text-base" />
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Quick stats</p>
              <div className="mt-4 space-y-4">
                <div className="rounded-3xl bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Today’s tours</p>
                  <p className="mt-3 text-2xl font-black text-slate-950">6</p>
                </div>
                <div className="rounded-3xl bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Guest feedback</p>
                  <p className="mt-3 text-2xl font-black text-slate-950">4.92</p>
                </div>
              </div>
            </div>
          </aside>

          <main className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Tour Guide Portal</p>
                  <h1 className="mt-3 text-4xl font-black text-slate-950">Your guide command center</h1>
                  <p className="mt-2 text-sm text-slate-600">Monitor assignments, check-in progress, and guest communications in one place.</p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="relative w-full sm:w-[320px]">
                    <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search passengers, routes, or guides"
                      className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm text-slate-700 shadow-sm outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
                    />
                  </div>
                  <button className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800">
                    <Icon name="notifications" className="mr-2 text-base" /> Notifications
                  </button>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  { label: 'Total Tours', value: '142' },
                  { label: 'Passengers', value: '2,840' },
                  { label: 'Avg Rating', value: '4.92' },
                  { label: 'Earnings', value: '$12,450' },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{item.label}</p>
                    <p className="mt-4 text-3xl font-black text-slate-950">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <section className="space-y-6">{activeTabContent()}</section>
              <aside className="space-y-6">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Tour readiness</p>
                      <h2 className="mt-3 text-2xl font-black text-slate-950">Live status</h2>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">On track</span>
                  </div>
                  <div className="mt-6 space-y-4">
                    {[
                      { label: 'Passengers Checked In', value: '18/24' },
                      { label: 'Next pickup', value: '08:45 AM' },
                      { label: 'Route alerts', value: '1 active' },
                    ].map((item) => (
                      <div key={item.label} className="rounded-3xl bg-slate-50 p-4">
                        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{item.label}</p>
                        <p className="mt-2 text-xl font-black text-slate-950">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Focus</p>
                  <h3 className="mt-4 text-xl font-black">Guest satisfaction</h3>
                  <p className="mt-3 text-sm text-slate-300">Maintain a 4.8+ rating by reviewing feedback and confirming logistics.</p>
                  <button className="mt-6 w-full rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition">
                    Review last report
                  </button>
                </div>
              </aside>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
