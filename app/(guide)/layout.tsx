import React from 'react';

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      {children}
    </div>
  );
}
