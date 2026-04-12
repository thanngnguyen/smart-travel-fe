import React from "react";
import Button from "@/components/ui/Button";

export default function HomeCTA() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          className="w-full h-full object-cover"
          alt="Soft blurred sunset beach background with gentle waves and pastel pink sky"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6RHeRDYHShRcUjF6oyqE8cM7uy8142XixmRKWQXLLdggCZR9pWJA13vSmC-WvXFRQTNUau7rJf6c-ubLVPSbpfzG42Srw-o1ktQ-7tcBGWNWJZcq7G5y8mRj-CJtsl6AyoX1aZ5x1iazOLzZxIMBJzQ7ZHGUv_zxQhIgWw5DaE8ayG2uVQno2fW6UT7-pqBS61UvaukEgHe9HWLvbuYgwPyfkXTzHI2fVo8DGQwc_3h2VBQPhOvHVPec7j3Z5l7hB04H0xYJRxrA"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter">
          Plan your dream escape today.
        </h2>
        <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
          Join the exclusive circle of travelers who refuse to compromise on
          logistics. Start your journey with STMS.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="px-10 py-5 text-primary text-lg font-extrabold rounded-2xl shadow-2xl hover:scale-105 transition-transform border-none hover:text-primary">
            Create Itinerary
          </Button>
          <Button
            variant="outline"
            className="px-10 py-5 border-2 border-white/30 text-white text-lg font-extrabold rounded-2xl hover:bg-white/10 transition-colors"
          >
            Speak to Concierge
          </Button>
        </div>
      </div>
    </section>
  );
}
