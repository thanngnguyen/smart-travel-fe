"use client";
import React, { useState } from "react";
import Icon from "@/components/ui/Icon";

const tours = [
  {
    id: "glacier-express",
    title: "Glacier Express Peak Summit Tour",
    location: "Swiss Alps",
    price: "$3,450",
    rating: 4.9,
    duration: "6 Days",
    status: "Premium Choice",
    type: "Real-time Available",
    description: "Experience the majesty of the Matterhorn with private guides and alpine luxury.",
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db5115e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "berner-alps",
    title: "Bernese Oberland Alpine Trek",
    location: "Bernese Oberland, Switzerland",
    price: "$2,100",
    rating: 4.7,
    duration: "5 Days",
    status: "Premium Choice",
    type: "Moderate",
    description: "A classic Swiss trek through valleys, lakes, and alpine peaks.",
    image:
      "https://images.unsplash.com/photo-1516569424537-0b50e23f4d0a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "interlaken-adventure",
    title: "Interlaken Adventure & Skydiving",
    location: "Interlaken, Switzerland",
    price: "$1,890",
    rating: 5.0,
    duration: "6 Days",
    status: "Instant Book",
    type: "Extreme",
    description: "Adrenaline-fueled mountain activities with expert guides.",
    image:
      "https://images.unsplash.com/photo-1501769214405-5e8ddf72690e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "alpine-drive",
    title: "Grand Alpine Drive Experience",
    location: "Swiss Alps",
    price: "$5,200",
    rating: 4.8,
    duration: "10 Days",
    status: "Waitlist Only",
    type: "Luxury",
    description: "Curated self-drive tour in high-performance vehicles.",
    image:
      "https://images.unsplash.com/photo-1512467778489-9c5b1fcbf0ce?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gourmet-gastronomy",
    title: "Gourmet Swiss Gastronomy Tour",
    location: "Swiss Alps",
    price: "$2,800",
    rating: 4.6,
    duration: "7 Days",
    status: "Real-time Available",
    type: "Leisurely",
    description: "A culinary journey featuring Michelin-starred alpine dining.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
];

const filterOptions = ["1-5 Days", "6-10 Days", "11-15 Days", "15+ Days"];
const difficulties = ["Leisurely", "Moderate", "Challenging"];

export default function ToursListingPage() {
  const [selectedDuration, setSelectedDuration] = useState("6-10 Days");
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const toggleDifficulty = (value: string) => {
    setSelectedDifficulties((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    );
  };

  const filteredTours = tours.filter((tour) => {
    const query = search.toLowerCase();
    const matchesSearch =
      tour.title.toLowerCase().includes(query) ;
      tour.location.toLowerCase().includes(query);
    const matchesDuration =
      selectedDuration === "15+ Days"
        ? Number(tour.duration.split(" ")[0]) >= 15
        : tour.duration.includes(selectedDuration.split(" ")[0]);
    const matchesDifficulty =
      selectedDifficulties.length === 0 ;
      selectedDifficulties.some((difficulty) =>
        tour.type.toLowerCase().includes(difficulty.toLowerCase())
      );
    return matchesSearch ; matchesDuration ; matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 py-10">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Expeditions in the Alps
            </h1>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              Showing {filteredTours.length} results found for your criteria.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 transition">
              Top picks
            </button>
            <button className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition">
              Concierge Chat
            </button>
          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-[280px_1.7fr]">
          <aside className="xl:sticky xl:top-8 xl:self-start">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Refine Search</p>
              <div className="mt-7 space-y-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                    Destination
                  </label>
                  <input
                    value="Swiss Alps"
                    readOnly
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                    Dates
                  </label>
                  <input
                    value="Oct 12 – Oct 26"
                    readOnly
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                    Budget
                  </label>
                  <input
                    value="$2,000 – $6,000"
                    readOnly
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                  />
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-sm">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Need a tailored plan?</p>
                  <p className="mt-4 text-sm text-slate-200">Let our AI Concierge build the perfect itinerary based on your preferences.</p>
                  <button className="mt-6 w-full rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:bg-slate-100 transition">
                    Ask Concierge
                  </button>
                </div>
              </div>
            </div>
          </aside>

          <main className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid gap-4 lg:grid-cols-[1fr_0.4fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Refine List</p>
                  <h2 className="mt-3 text-2xl font-black text-slate-950">Premium alpine adventures</h2>
                </div>
                <div className="relative">
                  <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search tours, location, or type"
                    className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm text-slate-700 shadow-sm outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.68fr_0.94fr]">
              <div className="space-y-6">
                <div className="grid gap-6 xl:grid-cols-[1.25fr_1fr]">
                  <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                    <div className="relative h-96 overflow-hidden">
                      <img
                        src={tours[0].image}
                        alt={tours[0].title}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                      <div className="absolute left-6 top-6 rounded-full bg-slate-950/90 px-3 py-2 text-[11px] uppercase tracking-[0.25em] text-white">
                        {tours[0].status}
                      </div>
                      <div className="absolute right-6 top-6 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-slate-900">
                        {tours[0].rating.toFixed(1)}
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-xs uppercase tracking-[0.35em] text-slate-200">{tours[0].duration} • {tours[0].location}</p>
                        <h2 className="mt-3 text-4xl font-black text-white">{tours[0].title}</h2>
                      </div>
                    </div>
                    <div className="space-y-4 p-6">
                      <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-slate-500">
                        <span className="rounded-full bg-slate-100 px-3 py-2">{tours[0].type}</span>
                        <span className="rounded-full bg-slate-100 px-3 py-2">{tours[0].status}</span>
                      </div>
                      <p className="text-sm text-slate-600">{tours[0].description}</p>
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <span className="text-lg font-bold text-slate-950">{tours[0].price}</span>
                        <button className="rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white hover:bg-slate-800 transition">
                          View Details
                        </button>
                      </div>
                    </div>
                  </article>

                  <div className="space-y-6">
                    {tours.slice(1, 4).map((tour) => (
                      <article key={tour.id} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                        <div className="relative h-52 overflow-hidden">
                          <img
                            src={tour.image}
                            alt={tour.title}
                            className="h-full w-full object-cover transition duration-500 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-2 text-[11px] uppercase tracking-[0.25em] text-slate-900">
                            {tour.status}
                          </div>
                          <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-slate-900">
                            {tour.rating.toFixed(1)}
                          </div>
                        </div>
                        <div className="space-y-4 p-6">
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <h3 className="text-xl font-bold text-slate-950">{tour.title}</h3>
                              <p className="mt-1 text-sm text-slate-500">{tour.location}</p>
                            </div>
                            <span className="rounded-full bg-slate-100 px-3 py-2 text-[11px] uppercase tracking-[0.25em] text-slate-500">
                              {tour.duration}
                            </span>
                          </div>
                          <p className="text-sm text-slate-600">{tour.description}</p>
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-lg font-bold text-slate-950">{tour.price}</span>
                            <button className="rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800 transition">
                              {tour.status === 'Waitlist Only' ? 'Join Waitlist' : 'View Details'}
                            </button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-950 text-white text-2xl">
                    <Icon name="star" className="text-2xl" />
                  </div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">No perfect match?</p>
                  <h2 className="mt-4 text-2xl font-black text-slate-950">Generate a custom tour</h2>
                  <p className="mt-4 text-sm text-slate-600">Our concierge can create a tailored itinerary based on your travel style.</p>
                  <button className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-sm font-bold text-white hover:bg-slate-800 transition">
                    Generate Custom Tour
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
