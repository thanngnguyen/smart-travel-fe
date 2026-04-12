import { NextResponse } from 'next/server';

const tours = [
  {
    id: 'maldivian-solitude',
    title: 'The Maldivian Solitude',
    location: 'Baa Atoll, Maldives',
    price: 3450,
    duration: '7 Days',
    rating: 4.9,
    description:
      'A private island journey with underwater dining, wellness experiences, and VIP transfer services.',
    features: ['Private Villa', 'Concierge Service', 'Wellness Retreat'],
    image:
      'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'japanese-zen-escape',
    title: 'Japanese Zen Escape',
    location: 'Kyoto, Japan',
    price: 2890,
    duration: '6 Days',
    rating: 4.8,
    description:
      'An immersive cultural retreat with private tea ceremonies, temple visits, and luxury ryokan stays.',
    features: ['Private Ceremony', 'Cultural Guide', 'Seasonal Dining'],
    image:
      'https://images.unsplash.com/photo-1493976040371-2ed141d63dd0?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'alpine-expedition',
    title: 'Alpine Expedition',
    location: 'Swiss Alps',
    price: 5200,
    duration: '10 Days',
    rating: 4.9,
    description:
      'A premium expedition through alpine peaks with private guides, luxury lodges, and curated dining.',
    features: ['Guided Trek', 'Luxury Lodging', 'Concierge Support'],
    image:
      'https://images.unsplash.com/photo-1508261307180-3d5e6f3dbf4a?auto=format&fit=crop&w=900&q=80',
  },
];

export async function GET() {
  return NextResponse.json({ tours });
}
