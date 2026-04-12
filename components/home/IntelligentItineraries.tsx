import React from "react";
import Icon from "@/components/ui/Icon";

export default function IntelligentItineraries() {
  return (
    <section className="py-24 bg-surface-container">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-container/10 mb-8">
          <Icon name="travel_explore" className="text-primary text-4xl" />
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-8">
          Intelligent Itineraries
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-16">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-primary">Dynamic Planning</h4>
            <p className="text-on-surface-variant leading-relaxed">
              Our AI adjusts your schedule in real-time based on local weather,
              crowd density, and your personal fatigue levels.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-primary">
              Seamless Logistics
            </h4>
            <p className="text-on-surface-variant leading-relaxed">
              From private jet charters to local e-bikes, every transition is
              automated and synchronized with your portal.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-primary">Priority Access</h4>
            <p className="text-on-surface-variant leading-relaxed">
              Skip the lines at major landmarks with STMS digital keys,
              pre-authenticated for every destination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
