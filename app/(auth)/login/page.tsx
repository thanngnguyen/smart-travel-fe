'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent, role: 'customer' | 'admin') => {
    e.preventDefault();
    if (role === 'admin') {
      router.push('/admin');
    } else {
      router.push('/');
    }
  };

  return (
    <div className="w-full bg-surface-container-lowest shadow-[0_20px_40px_rgba(25,28,30,0.06)] rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
      
      {/* Visual Identity Section */}
      <div className="hidden lg:flex w-1/2 relative bg-primary flex-col justify-between p-12 overflow-hidden items-start">
        {/* Dynamic Background Gradient Map */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tertiary blur-[120px] opacity-40 rounded-full mix-blend-multiply flex-none"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary blur-[150px] opacity-60 rounded-full mix-blend-multiply flex-none"></div>
        </div>

        <div className="relative z-10 w-full max-w-sm mt-32">
           <h2 className="text-5xl font-black text-on-primary mb-6 leading-tight tracking-tight">Manage travel,<br/>intelligently.</h2>
           <p className="text-primary-container-lowest text-lg font-medium">Log in to oversee luxury bookings, dynamic pricing, and real-time AI routing optimizations.</p>
        </div>
        
        <div className="relative z-10 mt-auto">
          <div className="flex items-center gap-2 mb-2 text-on-primary">
            <Icon name="verified_user" filled />
            <span className="text-sm font-bold uppercase tracking-widest">Enterprise Secured</span>
          </div>
        </div>
      </div>

      {/* Authentication Gateway */}
      <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-surface-container-lowest relative z-10">
        <div className="mb-10">
          <h1 className="font-extrabold text-3xl tracking-tight text-on-surface mb-2">Welcome back</h1>
          <p className="text-on-surface-variant text-sm md:text-base">Enter your credentials to access the STMS platform.</p>
        </div>

        <form className="space-y-6">
          <div className="flex flex-col space-y-2">
            <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold px-1">Email Address</label>
            <div className="group relative">
              <Icon name="alternate_email" className="absolute left-4 top-1/2 -translate-y-1/2 text-outline text-sm transition-colors group-focus-within:text-primary" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-surface-container-low border border-transparent rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent text-on-surface transition-all placeholder:text-outline font-medium focus:outline-none" 
                placeholder="administrator@stms.travel" 
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold px-1">Password</label>
            <div className="group relative">
              <Icon name="lock" className="absolute left-4 top-1/2 -translate-y-1/2 text-outline text-sm transition-colors group-focus-within:text-primary" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-surface-container-low border border-transparent rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent text-on-surface transition-all placeholder:text-outline font-medium focus:outline-none" 
                placeholder="••••••••••••" 
              />
              <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors cursor-pointer text-sm">
                 <Icon name="visibility" />
              </button>
            </div>
            <div className="flex justify-end pt-2">
              <span className="text-sm font-bold text-primary hover:text-primary-container transition-colors cursor-pointer">Recover Password?</span>
            </div>
          </div>

          {/* Role Choice for Demo */}
          <div className="pt-6 flex flex-col gap-3">
             <button 
                onClick={(e) => handleLogin(e, 'customer')} 
                className="w-full bg-primary hover:bg-primary/90 text-on-primary py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-colors shadow-lg shadow-primary/20 flex gap-2 justify-center items-center">
               Login as Customer
               <Icon name="arrow_forward" className="text-sm" />
             </button>
             <button 
                onClick={(e) => handleLogin(e, 'admin')} 
                className="w-full bg-surface-container hover:bg-surface-container-high text-on-surface py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-colors flex gap-2 justify-center items-center">
               <Icon name="shield_person" className="text-sm" />
               Login as Administrator
             </button>
          </div>

        </form>

        <div className="mt-10 text-center">
           <p className="text-sm font-medium text-on-surface-variant">
             Don't have an account? <Link href="/register" className="text-primary hover:underline font-bold">Request Access</Link>
           </p>
        </div>
      </div>
      
    </div>
  );
}
