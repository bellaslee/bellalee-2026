'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { PhotoEntry } from '../photos.content';

type PhotoStackProps = {
  photos: PhotoEntry[];
};

gsap.registerPlugin(ScrollTrigger);

export function PhotoStack({ photos }: PhotoStackProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reduceMotion.matches) {
      return;
    }

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        if (!card) {
          return;
        }

        gsap.set(card, {
          y: index === 0 ? 0 : 72,
          transformOrigin: 'center top',
          willChange: 'transform, opacity',
        });

        if (index === 0) {
          return;
        }

        ScrollTrigger.create({
          trigger: card,
          start: 'top bottom-=12%',
          end: 'top top+=14%',
          scrub: true,
          animation: gsap.to(card, {
            y: 0,
            ease: 'none',
          }),
        });
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative py-10 sm:py-14"
      style={{
        minHeight: `calc(100svh + ${Math.max(photos.length - 1, 0)} * 34svh)`,
      }}
    >
      {photos.map((photo, index) => (
        <article
          key={photo.title}
          ref={(element) => {
            cardRefs.current[index] = element;
          }}
          className={`sticky mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white/82 backdrop-blur-[2px] ${
            index === 0 ? 'mt-0' : 'mt-[26svh]'
          }`}
          style={{
            top: 'clamp(4.5rem, 7vw, 6rem)',
            zIndex: index + 1,
          }}
        >
          <div className="relative bg-[var(--surface)]">
            <div className="relative aspect-[16/9] overflow-hidden">
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(248,247,243,0)_0%,rgba(33,53,72,0.08)_56%,rgba(33,53,72,0.26)_100%)]"
                aria-hidden="true"
              />
              <Image
                src={photo.src}
                alt={photo.caption}
                width={photo.width}
                height={photo.height}
                className="h-full w-full object-cover"
                priority={index === 0}
                sizes="(min-width: 1280px) 1024px, (min-width: 768px) 88vw, 94vw"
              />
            </div>

            <div className="border-t border-[color:var(--border)] bg-[rgba(248,247,243,0.95)] px-4 py-4 sm:px-6 sm:py-5">
              <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--secondary)] sm:text-xs">
                    {photo.date}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl leading-none text-[var(--foreground)] sm:text-4xl">
                    {photo.title}
                  </h2>
                </div>
                <p className="max-w-md text-sm leading-6 text-[var(--foreground-muted)] sm:text-right sm:leading-7">
                  {photo.caption}
                </p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
