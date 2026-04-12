import React from 'react';
import Icon from '@/components/ui/Icon';

const FEATURED_TOURS = [
  {
    title: 'The Maldivian Solitude',
    subtitle: 'Private island experience with underwater dining and personalized wellness retreats.',
    image: 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&w=1200&q=80',
    badge: '2 Seats Left',
    price: '$4,120',
    rating: 4.9,
    CTA: 'Book Experience',
  },
  {
    title: 'Kyoto Serenity',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80',
    price: '$3,450',
    duration: '7 Days / 6 Nights',
    rating: 4.9,
  },
  {
    title: 'Swiss Alps Retreat',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=900&q=80',
    price: '$4,120',
    duration: '5 Days / 4 Nights',
    rating: 5.0,
  },
];

export default function CuratedEscapes() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 mb-3">Curated Escapes</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-on-surface">
              Hand-picked journeys selected by our AI concierge and travel experts.
            </h2>
          </div>
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700">
            View All Tours <Icon name="arrow_forward" />
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <article className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg shadow-slate-900/5">
            <img
              className="h-[420px] w-full object-cover"
              src={FEATURED_TOURS[0].image}
              alt={FEATURED_TOURS[0].title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute top-6 left-6 rounded-full bg-slate-950/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-100">
              {FEATURED_TOURS[0].badge}
            </div>
            <div className="absolute right-6 top-6 rounded-full bg-white/90 px-3 py-2 text-xs font-bold text-slate-900">
              {FEATURED_TOURS[0].rating.toFixed(1)}
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-4xl font-black text-white leading-tight">{FEATURED_TOURS[0].title}</h3>
              <p className="mt-3 max-w-xl text-sm text-slate-200">{FEATURED_TOURS[0].subtitle}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900">{FEATURED_TOURS[0].CTA}</span>
                <span className="rounded-full bg-slate-800/80 px-4 py-2 text-sm text-slate-100">{FEATURED_TOURS[0].price}</span>
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            {FEATURED_TOURS.slice(1).map((tour) => (
              <article key={tour.title} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
                <img className="h-56 w-full object-cover" src={tour.image} alt={tour.title} />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
                      <Icon name="star" filled className="text-xs" /> {tour.rating.toFixed(1)}
                    </span>
                    <span className="text-sm font-bold text-slate-900">{tour.price}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{tour.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{tour.duration}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
