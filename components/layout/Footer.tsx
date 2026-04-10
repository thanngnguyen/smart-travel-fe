import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 w-full py-12 px-8 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <span className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4 block">
            STMS
          </span>
          <p className="text-slate-500 text-sm leading-relaxed">
            Elevating global travel through intelligent management and seamless experiences.
          </p>
        </div>
        <div>
          <h4 className="font-headline font-bold text-on-surface mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link className="text-slate-500 hover:text-blue-500 transition-opacity" href="#">Destinations</Link>
            </li>
            <li>
              <Link className="text-slate-500 hover:text-blue-500 transition-opacity" href="#">Tours</Link>
            </li>
            <li>
              <Link className="text-slate-500 hover:text-blue-500 transition-opacity" href="#">AI Guides</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-bold text-on-surface mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link className="text-slate-500 hover:text-blue-500 transition-opacity text-sm" href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link className="text-slate-500 hover:text-blue-500 transition-opacity text-sm" href="#">Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-bold text-on-surface mb-4">Newsletter</h4>
          <div className="flex gap-2">
            <input 
              className="bg-white border-none rounded-xl text-sm w-full focus:ring-2 focus:ring-primary px-4 py-2" 
              placeholder="Email address" 
              type="email"
            />
            <button className="bg-primary text-white p-2 rounded-xl flex items-center justify-center min-w-[40px]">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Smart Travel Management System. All rights reserved.</p>
      </div>
    </footer>
  );
}
