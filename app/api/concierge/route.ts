import { NextResponse } from 'next/server';

const conciergeData = {
  prompt:
    'I need a private luxury itinerary for a Kyoto stay between Nov 12-18 with a preference for cultural experiences and quiet dining.',
  suggestions: [
    {
      id: 'zen-tea-ceremony',
      title: 'Zen Tea Ceremony',
      summary: 'Private ceremony with a local tea master in a traditional Kyoto teahouse.',
      recommendation: true,
    },
    {
      id: 'private-temple-tour',
      title: 'Private Temple Tour',
      summary: 'Guided after-hours visit to a historic temple with personalized cultural commentary.',
      recommendation: true,
    },
  ],
  insights: [
    {
      title: 'Peak Season Alert',
      message: 'Nov 12-18 coincides with peak autumn foliage. Private experiences are limited, book within 48 hours.',
    },
  ],
};

export async function GET() {
  return NextResponse.json(conciergeData);
}
