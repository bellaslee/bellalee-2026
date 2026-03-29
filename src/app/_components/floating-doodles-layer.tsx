'use client';

import dynamic from 'next/dynamic';

const FloatingDoodles = dynamic(
  () => import('./floating-doodles').then((module) => module.FloatingDoodles),
  { ssr: false },
);

export function FloatingDoodlesLayer() {
  return <FloatingDoodles />;
}
