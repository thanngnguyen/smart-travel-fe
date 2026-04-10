'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';

export default function GuidePortalPage() {
  const [filter, setFilter] = useState<'All' | 'Pending'>('All');
  
  return (
    <>
      <header className="bg-surface-container-high/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex flex-col">
          <Link href="/" className="text-xs font-bold text-primary tracking-widest uppercase">STMS Home</Link>
          <h1 className="text-xl font-extrabold tracking-tight">Guide Portal</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-colors">
            <Icon name="notifications" />
          </button>
          <img 
            alt="Guide profile avatar" 
            className="w-10 h-10 rounded-full object-cover border-2 border-primary-container"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7PKrhdlW5TTirzai6IFybSArtVMaZCcrFGueofi2Pu_O4dA5NWzy7k8xm0YOCKVBXAaiku62CPrEj8TW7eYlbnowRNxUZedDl61BcxB4eg2UBru-tSXuwmFCEL13c_inHpEbLfKdb7mMv3DKFehqL4XRdrSLOEJozJu_La9ze0Kq0vS3nZbC9hcdkOqEXNLaXaCw9JcnHutnHD4tfXq-cMvmWfAN0iwqmxeBPkixMLiNT0fmagJ9qzJRqGmoaERAUa6wNcwBwN5E" 
          />    
        </div>
      </header>

      <main className="flex-grow p-6 space-y-8 max-w-lg mx-auto w-full">
        {/* Daily Schedule Section */}
        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-2xl font-bold">Daily Schedule</h2>
            <span className="text-sm font-medium text-primary">Today, Oct 24</span>
          </div>

          <div className="space-y-4">
            {/* Active Tour Card */}
            <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-l-4 border-primary hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <span className="px-3 py-1 bg-primary-container text-on-primary-container text-[10px] font-bold rounded-full uppercase tracking-wider">In Progress</span>
                <span className="text-sm font-semibold text-on-surface-variant">09:00 - 13:00</span>
              </div>
              <h3 className="text-lg font-bold leading-tight mb-1">Alpine Valley Explorer</h3>    
              <p className="text-sm text-on-surface-variant mb-4">Pickup: Central Station East</p>
              
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <img alt="Traveler 1" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80" />
                  <img alt="Traveler 2" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=64&h=64&q=80" />
                  <img alt="Traveler 3" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64&q=80" />
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest border-2 border-white flex items-center justify-center text-[10px] font-bold text-on-surface-variant">+12</div>
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">15 / 20 Seats Filled</span>
              </div>
            </div>

            {/* Upcoming Tour Card */}
            <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/30 hover:bg-surface-container transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold rounded-full uppercase tracking-wider">Upcoming</span>        
                <span className="text-sm font-semibold text-on-surface-variant">14:30 - 18:30</span>
              </div>
              <h3 className="text-lg font-bold leading-tight mb-1 text-on-surface/80">Sunset Vineyard Trek</h3>      
              <p className="text-sm text-on-surface-variant mb-4">Pickup: Plaza del Sol</p>       
              <div className="flex items-center justify-between opacity-60">
                <div className="flex items-center gap-2">
                  <Icon name="group" className="text-sm" />
                  <span className="text-xs font-bold">8 booked</span>
                </div>
                <button className="text-primary text-xs font-bold uppercase tracking-wider">Details</button>
              </div>
            </div>
          </div>
        </section>

        {/* Check-in & Passenger List Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Check-in</h2>
            <div className="bg-surface-container-high rounded-lg p-1 flex">
              <button 
                onClick={() => setFilter('All')} 
                className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${filter === 'All' ? 'bg-white shadow-sm text-on-surface' : 'text-on-surface-variant hover:bg-white/50'}`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter('Pending')} 
                className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${filter === 'Pending' ? 'bg-white shadow-sm text-on-surface' : 'text-on-surface-variant hover:bg-white/50'}`}
              >
                Pending
              </button>
            </div>
          </div>

          {/* Search/Filter */}
          <div className="relative">
            <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant focus-within:text-primary transition-colors" />
            <input 
              className="w-full bg-white border border-outline-variant/30 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none text-sm font-medium placeholder:text-on-surface-variant/50 shadow-sm transition-all" 
              placeholder="Search passenger name..." 
              type="text"
            />
          </div>

          {/* Passenger List */}
          <div className="space-y-3">
            {/* Passenger Item 1 */}
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-outline-variant/20 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img alt="Sarah Jenkins" className="w-12 h-12 rounded-xl object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&h=128&q=80" />      
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-tertiary rounded-full border-2 border-white flex items-center justify-center">
                    <Icon name="priority_high" className="text-[12px] text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Sarah Jenkins</h4>
                  <p className="text-xs text-on-surface-variant font-medium">Gate 4 • <span className="text-primary">2 Adults</span></p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors" href="tel:123">
                  <Icon name="call" className="text-xl" />
                </a>
                <button className="w-14 h-8 bg-primary rounded-full relative transition-colors duration-200 focus:outline-none">
                  <span className="absolute right-1 top-1.5 w-5 h-5 bg-white rounded-full shadow-sm"></span>
                </button>
              </div>
            </div>

            {/* Passenger Item 2 */}
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-outline-variant/20 hover:border-primary/30 transition-colors opacity-60">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img alt="Michael Chen" className="w-12 h-12 rounded-xl object-cover grayscale" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=128&h=128&q=80" />      
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Michael Chen</h4>
                  <p className="text-xs text-on-surface-variant font-medium">Gate 4 • 1 Adult</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-primary uppercase tracking-wider flex flex-col items-center">
                  <Icon name="check_circle" filled className="text-primary text-xl mb-0.5" />
                  Done
                </span>
              </div>
            </div>
            
            {/* Passenger Item 3 */}
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-outline-variant/20 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100 text-orange-600 font-bold text-lg">
                  ED
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Elena Davis</h4>
                  <p className="text-xs text-on-surface-variant font-medium">Gate 2 • 3 Adults, 1 Child</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors" href="tel:123">
                  <Icon name="call" className="text-xl" />
                </a>
                <button className="w-14 h-8 bg-surface-container-highest rounded-full relative transition-colors duration-200 focus:outline-none">
                  <span className="absolute left-1 top-1.5 w-5 h-5 bg-white rounded-full shadow-sm"></span>
                </button>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Floating Action Button for Scan */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-2xl shadow-[0_8px_30px_rgba(0,61,155,0.3)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-50">
        <Icon name="qr_code_scanner" className="text-2xl" />
      </button>
    </>
  );
}
