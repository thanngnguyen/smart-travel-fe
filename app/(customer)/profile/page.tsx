import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="bg-surface min-h-screen">
      <div className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 mt-10">
        {/*  Profile Hero Section  */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-8 flex flex-col justify-center">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4">
              Voyager Gold Member
            </span>
            <h1 className="text-5xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
              Welcome back,
              <br />
              Alexandra Sterling.
            </h1>
            <p className="text-on-surface-variant text-lg max-w-xl mb-8 leading-relaxed">
              Your journey through the Mediterranean is just 14 days away.
              We&apos;ve updated your digital itinerary with exclusive concierge
              recommendations.
            </p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-3xl font-bold shadow-lg scale-95 active:scale-90 transition-transform">
                Edit Profile
              </button>
              <button className="bg-white text-on-surface px-8 py-4 rounded-3xl font-bold shadow-sm border border-outline-variant/20 hover:bg-surface-container-low transition-all">
                Account Settings
              </button>
            </div>
          </div>
          <div className="md:col-span-4 relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl transform rotate-3">
              <img
                alt="Travel Lifestyle"
                className="w-full h-full object-cover"
                data-alt="traveler looking out over a Mediterranean coastal town at sunset with warm orange and purple sky"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuConJcrK0IvgDZetRgszI9zZLOl7UXpio0VHfzs8p6TrJSHvecJJEtXKkOy5NS7HNiSyjhIHBSQtXvzp7TQfd_2vgS_gzkNlBYd5jeVWPO43pqfLVRIjClDAj8pK1fBffC8OXQ7QiC2Lrmn9vrmH4hhr80euvRGn9kJErS1MmvZKBQ6ZcnwGLn4LZZc_WcYNEP7xbBqzJL4D2EKYtcu3xWUxuvs87ABQG4foX0gWMTNdZWbS_-go1XZVGC5epqKtK1u6WE13Ol9j_I"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] transform -rotate-3 border border-outline-variant/10">
              <p className="text-xs text-on-surface-variant font-medium mb-1">
                Total Distance Traveled
              </p>
              <p className="text-3xl font-black text-primary tracking-tighter">
                42,850 <span className="text-sm font-bold">KM</span>
              </p>
            </div>
          </div>
        </section>
        {/*  Bento Grid: Content Clusters  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/*  Active Trip Card  */}
          <div className="md:col-span-2 bg-surface-container-lowest rounded-3xl p-8 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8">
              <span className="bg-primary-container/10 text-primary px-4 py-1 rounded-full text-xs font-bold">
                Upcoming
              </span>
            </div>
            <h2 className="text-2xl font-extrabold mb-6">Upcoming Adventure</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden">
                <img
                  alt="Venice Tour"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="scenic view of Venice canals with gondolas at sunrise, soft lighting, vibrant architecture"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCioP6tC332zGePerO8FnI8xhQ7wb1YY02BF1sFXlxdsIEbkzOvorDj1_4bkE9Pgfh5fieI1EwZoJjiZaBkdUleFFzna9Hu47LuUj8rnDX4DUoFUNL3SHgDw_nCfxnJOaxmvTyo5Lbr-hVT_B-MhgReIlt6gn60BMncMrhwRIRrM8OoNs6MF-RBS20OEj-jS2bRaTia4KHw-Nz9oFmifwa2rmbItfnc90ykybrT3q6YExT2vpFAXHVBi6Q_tYdxO98GBI7ZLKHwxkQ"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-on-surface mb-2">
                  Grand Mediterranean Cruise &amp; Tour
                </h3>
                <div className="flex items-center gap-4 text-on-surface-variant text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <span
                      className="material-symbols-outlined text-base"
                      data-icon="calendar_today"
                    >
                      calendar_today
                    </span>{" "}
                    Oct 12 - Oct 26
                  </span>
                  <span className="flex items-center gap-1">
                    <span
                      className="material-symbols-outlined text-base"
                      data-icon="location_on"
                    >
                      location_on
                    </span>{" "}
                    Italy, Greece, Croatia
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-bold">
                    <span>Preparation Status</span>
                    <span>85%</span>
                  </div>
                  <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/10 flex justify-between items-center">
              <p className="text-sm text-on-surface-variant italic">
                Don&apos;t forget to upload your travel insurance docs.
              </p>
              <button className="text-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                Manage Itinerary{" "}
                <span
                  className="material-symbols-outlined"
                  data-icon="arrow_forward"
                >
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          {/*  Profile Quick Stats  */}
          <div className="bg-surface-container-low rounded-3xl p-8 flex flex-col justify-between border border-white/50">
            <h2 className="text-xl font-extrabold mb-6">Saved Tours</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                  <span
                    className="material-symbols-outlined"
                    data-icon="forest"
                  >
                    forest
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold">Swiss Alps Retreat</p>
                  <p className="text-xs text-on-surface-variant">
                    7 Days • $3,400
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                  <span
                    className="material-symbols-outlined"
                    data-icon="temple_buddhist"
                  >
                    temple_buddhist
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold">Kyoto Heritage Walk</p>
                  <p className="text-xs text-on-surface-variant">
                    5 Days • $1,850
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                  <span
                    className="material-symbols-outlined"
                    data-icon="nightlight_round"
                  >
                    nightlight_round
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold">Sahara Star Gazing</p>
                  <p className="text-xs text-on-surface-variant">
                    3 Days • $980
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-8 text-sm font-bold text-primary-container underline underline-offset-4">
              View All Saved (12)
            </button>
          </div>
          {/*  Past Bookings & Reviews  */}
          <div className="md:col-span-3 mt-8">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl font-extrabold text-on-surface tracking-tight">
                  Past Experiences
                </h2>
                <p className="text-on-surface-variant">
                  Relive your memories and help others by sharing your feedback.
                </p>
              </div>
              <div className="hidden md:flex gap-2">
                <button className="p-2 border border-outline-variant/20 rounded-full hover:bg-surface-container transition-colors">
                  <span
                    className="material-symbols-outlined"
                    data-icon="chevron_left"
                  >
                    chevron_left
                  </span>
                </button>
                <button className="p-2 border border-outline-variant/20 rounded-full hover:bg-surface-container transition-colors">
                  <span
                    className="material-symbols-outlined"
                    data-icon="chevron_right"
                  >
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/*  Past Card 1  */}
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-40 relative overflow-hidden">
                  <img
                    alt="India Tour"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-alt="Taj Mahal reflecting in the water during early morning with soft mist and golden light"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsRU0y52RPpZbXBe8rj2xPyJQmur0n6T8f3usetbPm89dISLGWH_x6VwxZKwehrpI1K9gP8P_Exnd4sDjPfTxXQyEPKu6600f-oaYZKiS-hw2rgHeU6WiqQi5dM3wUz0AdQbglJ_zx9RsIWBbXAH_Kic_FbNi0AfICYYr0kNzlu-cXHYa8EpGCsrytHpe0N3GGLfjg1Lyr9bXUuWKSmLUTYH0V8zIHoVJhFePN6ehIkEuiFeLQA6TQR57cl5YtSGeiaNuqHl_jvhQ"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                      Completed
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-on-surface-variant font-medium mb-1">
                    August 2023
                  </p>
                  <h4 className="font-bold text-on-surface mb-3 line-clamp-1">
                    Golden Triangle Expedition
                  </h4>
                  <button className="w-full py-2 bg-surface-container text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="rate_review"
                    >
                      rate_review
                    </span>{" "}
                    Write Review
                  </button>
                </div>
              </div>
              {/*  Past Card 2  */}
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-40 relative overflow-hidden">
                  <img
                    alt="Caribbean"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-alt="tropical beach with white sand and turquoise water under clear blue sky with palm trees"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuTa0UkpdXO2UOG6nYLuB0Zh2-ugw54qtJHxjtyxu28w42mgYVlXr3bFipU1hj4LdkNOJiso7yUVfPZUatiX6EbWC1gn4dMLIsHFOkJwzbQUHpR7cpZmByQ5mPaKjYQwCRzLYmpoWp7A3Ty-oaUdvo7YCmy3wHmaZYehdtmqXOZJLNkBBlA6RExhw62WViNYVvcVyW_tJW-wvpjnpjs1VASJpn8ZnzT9DnA6EqmS_qltbk14zI4RCAoWuHjw3YQ8tRx22CLZvDc7o"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                      Completed
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-on-surface-variant font-medium mb-1">
                    June 2023
                  </p>
                  <h4 className="font-bold text-on-surface mb-3 line-clamp-1">
                    Bahamas Luxury Sailing
                  </h4>
                  <div className="flex items-center gap-1 text-tertiary">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="star"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="star"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="star"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="star"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="star"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="text-[10px] text-on-surface-variant ml-1">
                      Reviewed
                    </span>
                  </div>
                </div>
              </div>
              {/*  Past Card 3  */}
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-40 relative overflow-hidden">
                  <img
                    alt="Moscow"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-alt="architectural detail of Saint Basil's Cathedral with colorful domes and clear winter sky"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6tAKqhEzxP8GbdawYnfkPcXBN1wssMekx-4HzcXNORmKQcU7vh9bw0rhr9s1xPWyFnp6Q5sgPsLlwfovOm6DtRc2y0zGLPl1Zx62xGHUnX3PXOKP4q0Y5GD9OEPpEhnkFd1trfzu_uTVuhmEfvxaj1FJaxlf4gKGkqJ3LP_431p7e7HcCu0DbpVErsZd4WEBhLSlvgLTi32uls4Zk41TSIMYbMgyCyJl0zfM9HuR4kQ54QBqKVLGxmf2TvdRF8pYBgimrcBzlvRQ"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                      Completed
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-on-surface-variant font-medium mb-1">
                    December 2022
                  </p>
                  <h4 className="font-bold text-on-surface mb-3 line-clamp-1">
                    Imperial Cities Train Tour
                  </h4>
                  <button className="w-full py-2 bg-surface-container text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="rate_review"
                    >
                      rate_review
                    </span>{" "}
                    Write Review
                  </button>
                </div>
              </div>
              {/*  Past Card 4  */}
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-40 relative overflow-hidden">
                  <img
                    alt="Safari"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-alt="majestic lion walking through tall golden grass in the African savanna at sunrise"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3VbtLfpcn2HeyVqKfN7nnXC_dFxyx7BSThYixl9uAWRQP-ZKEMC8k5AKyCGUATstvZF7F-3xMvDlKuS3ucO03fuwAEqyoX8e1E_USP_B9LM4UYpYa15ZkkxDta0FC4eu-xeayeRu-PmwJOxncOZMupBabm6Kj2i9fKiTkcw6pMww9t4X8qFBWnXxE3iTxsRw_WaXcYLswO3UoegAaCme3lcUeinOC7rS9oe8L7MlaxnQI4IhJUkKwYiLXGfJ3Q0eviTBSnf-1N20"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                      Completed
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-on-surface-variant font-medium mb-1">
                    October 2022
                  </p>
                  <h4 className="font-bold text-on-surface mb-3 line-clamp-1">
                    Kenia Wildlife Safari
                  </h4>
                  <div className="flex items-center gap-1 text-tertiary">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="star"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="star"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="star"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="star"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="star"
                    >
                      star
                    </span>
                    <span className="text-[10px] text-on-surface-variant ml-1">
                      Reviewed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
