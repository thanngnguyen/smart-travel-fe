import React from "react";
import Icon from "./Icon";
import Button from "./Button";
import Link from "next/link";

export interface TourCardProps {
  id?: string;
  title: string;
  image: string;
  duration?: string;
  price?: string;
  rating?: number;
  featured?: boolean;
  seatsLeft?: number;
  description?: string;
  size?: "small" | "large";
}

export default function TourCard({
  id = "1",
  title,
  image,
  duration,
  price,
  rating = 5.0,
  featured = false,
  seatsLeft,
  description,
  size = "small",
}: TourCardProps) {
  if (size === "large") {
    return (
      <Link
        href={`/tours/${id}`}
        className="block md:col-span-8 group relative rounded-3xl overflow-hidden shadow-sm h-[600px] hover:shadow-xl transition-shadow duration-500"
      >
        <img
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          alt={title}
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {seatsLeft && (
          <div className="absolute top-6 right-6 bg-tertiary-container text-on-tertiary-container px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
            <Icon name="bolt" filled className="text-sm" />
            {seatsLeft} Seats Left
          </div>
        )}

        <div className="absolute bottom-8 left-8 right-8">
          <div className="flex items-center gap-2 mb-3">
            {featured && (
              <span className="bg-primary/20 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold border border-white/20">
                AI Recommended
              </span>
            )}
            <div className="flex gap-0.5 text-yellow-400">
              {[...Array(Math.floor(rating))].map((_, i) => (
                <Icon key={i} name="star" filled className="text-sm" />
              ))}
              {rating % 1 !== 0 && (
                <Icon name="star_half" filled className="text-sm" />
              )}
            </div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
          {description && (
            <p className="text-white/80 mb-6 max-w-md">{description}</p>
          )}
          <Button variant="white" size="lg">
            Book Experience
          </Button>
        </div>
      </Link>
    );
  }

  // Small variant
  return (
    <Link
      href={`/tours/${id}`}
      className="block flex-1 group relative rounded-3xl bg-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 min-h-[284px]"
    >
      <img
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-0"
        alt={title}
        src={image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

      <div className="absolute bottom-6 left-6 right-6 z-20">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-yellow-400 flex items-center gap-0.5 text-sm font-medium">
            <Icon name="star" filled className="text-xs" /> {rating.toFixed(1)}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <div className="flex justify-between items-center">
          {duration && (
            <span className="text-white/80 text-sm">{duration}</span>
          )}
          {price && <span className="text-white font-bold">{price}</span>}
        </div>
      </div>
    </Link>
  );
}
