"use client";

import React, { useState } from "react";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="pt-24 pb-20 bg-surface min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-black text-on-surface mb-8">
          Secure Checkout
        </h1>

        <div className="flex justify-between items-center mb-12 relative w-full lg:w-2/3">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-1 bg-outline-variant/30 rounded-full z-0"></div>
          <div
            className="absolute top-1/2 -translate-y-1/2 left-0 h-1 bg-primary rounded-full z-0 transition-all duration-500"
            style={{ width: step === 1 ? "50%" : "100%" }}
          ></div>

          <div
            className={`relative z-10 flex flex-col items-center gap-2 transition-opacity ${step >= 1 ? "opacity-100" : "opacity-50"}`}
          >
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg">
              1
            </div>
            <span className="text-sm font-bold text-on-surface">
              Traveler Info
            </span>
          </div>

          <div
            className={`relative z-10 flex flex-col items-center gap-2 transition-opacity ${step >= 1 ? "opacity-100" : "opacity-50"}`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg transition-colors duration-500 ${step >= 2 ? "bg-primary text-white" : "bg-surface-container-highest text-on-surface-variant"}`}
            >
              2
            </div>
            <span className="text-sm font-bold text-on-surface">Payment</span>
          </div>

          <div
            className={`relative z-10 flex flex-col items-center gap-2 transition-opacity ${step >= 3 ? "opacity-100" : "opacity-50"}`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg transition-colors duration-500 ${step >= 3 ? "bg-primary text-white" : "bg-surface-container-highest text-on-surface-variant"}`}
            >
              3
            </div>
            <span className="text-sm font-bold text-on-surface">
              Confirmation
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {step === 1 && (
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(25,28,30,0.03)] animate-in fade-in duration-500">
                <h2 className="text-2xl font-black text-on-surface mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-on-surface-variant mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-on-surface-variant mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-on-surface-variant mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-on-surface-variant mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-outline-variant/30 flex justify-end">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => setStep(2)}
                  >
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(25,28,30,0.03)] animate-in fade-in duration-500">
                <h2 className="text-2xl font-black text-on-surface mb-6">
                  Payment Method
                </h2>

                <div className="space-y-4 mb-6">
                  <label className="flex items-center gap-4 p-4 border border-primary/40 bg-primary/5 rounded-xl cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      className="w-5 h-5 text-primary"
                      defaultChecked
                    />
                    <div className="flex-1 flex justify-between items-center">
                      <span className="font-bold text-on-surface text-lg">
                        Credit Card
                      </span>
                      <div className="flex gap-2 text-primary">
                        <Icon name="credit_card" />
                      </div>
                    </div>
                  </label>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-on-surface-variant mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-mono"
                      placeholder="0000 0000 0000 0000"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-on-surface-variant mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-mono"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-on-surface-variant mb-2">
                        CVC
                      </label>
                      <input
                        type="text"
                        className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-mono"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-outline-variant/30 flex justify-between">
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => setStep(1)}
                    className="hover:bg-surface-container"
                  >
                    <Icon name="arrow_back" className="mr-2" /> Back
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => setStep(3)}
                    className="shadow-xl shadow-primary/20"
                  >
                    Confirm & Pay
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-white p-12 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(25,28,30,0.03)] text-center animate-in fade-in duration-500">
                <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 shadow-inner shadow-green-200">
                  <Icon name="check_circle" className="text-5xl" filled />
                </div>
                <h2 className="text-3xl font-black text-on-surface mb-4">
                  Booking Confirmed!
                </h2>
                <p className="text-lg text-on-surface-variant mb-8 max-w-md mx-auto">
                  Your luxury escape has been secured. Our AI concierge will
                  reach out shortly to perfect your itinerary.
                </p>
                <p className="inline-block px-4 py-2 bg-surface-container text-on-surface rounded-xl font-mono border border-outline-variant/30 text-sm mb-8">
                  Booking ID: <span className="font-bold">#STMS-84291-A</span>
                </p>
                <div>
                  <Link href="/">
                    <Button variant="primary" size="lg">
                      Return to Home
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-surface-container-highest/20 rounded-3xl p-6 md:p-8 border border-outline-variant/20 sticky top-32">
              <h3 className="text-xl font-black text-on-surface mb-6 border-b border-outline-variant/30 pb-4">
                Order Summary
              </h3>

              <div className="flex gap-4 mb-6">
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&w=400&q=80"
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface leading-tight mb-1">
                    The Maldivian Solitude
                  </h4>
                  <p className="text-xs text-on-surface-variant mb-2">
                    Baa Atoll, Maldives
                  </p>
                  <div className="flex items-center gap-1 text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded inline-flex">
                    <Icon name="star" filled className="text-[10px]" /> 4.9
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm text-on-surface-variant mb-6 border-b border-outline-variant/30 pb-6">
                <div className="flex justify-between">
                  <span>Dates</span>
                  <span className="font-bold text-on-surface">
                    Oct 12 - Oct 17
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Travelers</span>
                  <span className="font-bold text-on-surface">2 Adults</span>
                </div>
                <div className="flex justify-between mt-4">
                  <span>Base Price (x2)</span>
                  <span className="font-bold text-on-surface">$10,800.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes & Fees</span>
                  <span className="font-bold text-on-surface">$1,250.00</span>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <span className="text-lg font-bold text-on-surface">Total</span>
                <span className="text-3xl font-black text-primary">
                  $12,050
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
