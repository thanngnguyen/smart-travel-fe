import { NextResponse } from 'next/server';

let bookings = [
  {
    id: 'STMS-84291-A',
    customer: 'Julian Alexander Vance',
    status: 'CONFIRMED',
    tourId: 'maldivian-solitude',
    guests: 2,
    total: 2842,
    departure: '2025-09-12',
  },
  {
    id: 'STMS-882910',
    customer: 'Elena Rodriguez',
    status: 'PAID',
    tourId: 'alpine-expedition',
    guests: 12,
    total: 4850,
    departure: '2025-12-12',
  },
];

export async function GET() {
  return NextResponse.json({ bookings });
}

export async function POST(request: Request) {
  const data = await request.json();

  const nextBooking = {
    id: `STMS-${Math.floor(Math.random() * 900000 + 100000)}`,
    status: 'PENDING',
    createdAt: new Date().toISOString(),
    ...data,
  };

  bookings = [nextBooking, ...bookings];

  return NextResponse.json({ booking: nextBooking }, { status: 201 });
}
