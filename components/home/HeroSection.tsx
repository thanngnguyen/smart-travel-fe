import React from 'react';
import SearchBar from '@/components/ui/SearchBar';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          alt="A modern passenger jet flying above clouds at sunrise"
          src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1600&q=80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-slate-950/90" />
      </div>

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-300/80 mb-6">STMS Travel Intelligence</p>
          <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Beyond the <span className="text-sky-300">Horizon</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200/90">
            Experience the future of travel management. Orchestrated journeys, curated experiences, and intelligent logistics at your fingertips.
          </p>
        </div>

        <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/95 p-6 shadow-2xl shadow-slate-900/20 backdrop-blur-md sm:p-8">
          <div className="grid gap-4 sm:grid-cols-[1.4fr_1fr_1fr_1fr] items-center">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700 shadow-sm">
              <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Destination</p>
              <p className="mt-3 font-semibold text-slate-900">Where to next?</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700 shadow-sm">
              <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Dates</p>
              <p className="mt-3 font-semibold text-slate-900">Add travel dates</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700 shadow-sm">
              <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Budget</p>
              <p className="mt-3 font-semibold text-slate-900">Set your range</p>
            </div>
            <button className="inline-flex h-full items-center justify-center rounded-3xl bg-slate-950 px-6 py-4 text-base font-bold text-white shadow-lg shadow-slate-950/20 transition hover:bg-slate-900">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
