import React from 'react';

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-surface text-on-surface flex flex-col min-h-[100dvh] pb-20">
      {children}
    </div>
  );
}
