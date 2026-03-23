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
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
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
          opacity: index === 0 ? 1 : 0.76,
          scale: index === 0 ? 1 : 0.985,
          yPercent: index === 0 ? 0 : 16,
          transformOrigin: 'center center',
          willChange: 'transform, opacity',
        });
      });

      sectionRefs.current.forEach((section, index) => {
        if (!section || index === 0) {
          return;
        }

        const previousCard = cardRefs.current[index - 1];
        const currentCard = cardRefs.current[index];

        if (!previousCard || !currentCard) {
          return;
        }

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top bottom-=12%',
            end: 'top center+=6%',
            scrub: true,
          },
        });

        timeline.to(
          previousCard,
          {
            scale: 0.94,
            yPercent: -4,
            opacity: 0.72,
            ease: 'none',
          },
          0,
        );

        timeline.to(
          currentCard,
          {
            scale: 1,
            yPercent: 0,
            opacity: 1,
            ease: 'none',
          },
          0,
        );
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="py-10 sm:py-14">
      {photos.map((photo, index) => (
        <section
          key={photo.title}
          ref={(element) => {
            sectionRefs.current[index] = element;
          }}
          className={`relative pb-10 sm:pb-12 md:pb-0 ${
            index === 0
              ? 'min-h-[108svh]'
              : 'min-h-[108svh] md:-mt-[30svh] md:min-h-[120svh]'
          }`}
        >
          <article
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
            className="sticky top-20 mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white/78 shadow-[0_28px_80px_rgba(33,53,72,0.12)] backdrop-blur-[2px] sm:top-24"
            style={{
              zIndex: photos.length + index,
              top: `clamp(5rem, 7vw, ${5.5 + index * 2.5}rem)`,
            }}
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-[var(--surface)]">
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(248,247,243,0)_0%,rgba(33,53,72,0.12)_48%,rgba(33,53,72,0.62)_100%)]"
                aria-hidden="true"
              />
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="h-full w-full object-cover"
                priority={index === 0}
                sizes="(min-width: 1280px) 1024px, (min-width: 768px) 88vw, 94vw"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <div className="grid gap-3 rounded-[1.5rem] border border-white/20 bg-[rgba(33,53,72,0.28)] p-4 text-white backdrop-blur-md sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:p-5">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/72 sm:text-xs">
                      {photo.date}
                    </p>
                    <h2 className="mt-2 font-serif text-2xl leading-none text-white sm:text-4xl">
                      {photo.title}
                    </h2>
                  </div>
                  <p className="max-w-md text-sm leading-6 text-white/84 sm:text-right sm:leading-7">
                    {photo.locationOrCaption}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>
      ))}
    </div>
  );
}
