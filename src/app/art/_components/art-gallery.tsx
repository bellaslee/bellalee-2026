'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ArtEntry } from '../art.content';

type ArtGalleryProps = {
  art: ArtEntry[];
};

gsap.registerPlugin(ScrollTrigger);

export function ArtGallery({ art }: ArtGalleryProps) {
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
          opacity: 0,
          y: 40,
          willChange: 'transform, opacity',
        });

        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: index % 3 === 0 ? 0 : (index % 3) * 0.06,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=10%',
            once: true,
          },
        });
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="py-10 sm:py-14" aria-label="Artwork gallery">
      <ul className="grid list-none gap-6 p-0 sm:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {art.map((piece, index) => (
          <li key={piece.src} className="min-w-0">
            <article
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white/82 shadow-[0_28px_70px_rgba(33,53,72,0.06)] backdrop-blur-[2px]"
            >
              <figure className="bg-[var(--surface)]">
                <div className="relative">
                  <div
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(248,247,243,0)_0%,rgba(33,53,72,0.05)_100%)]"
                    aria-hidden="true"
                  />
                  <Image
                    src={piece.src}
                    alt={piece.alt ?? piece.description}
                    width={piece.width}
                    height={piece.height}
                    className="block h-auto w-full"
                    priority={index === 0}
                    sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 42vw, (min-width: 640px) 46vw, 92vw"
                  />
                </div>
                <figcaption className="border-t border-[color:var(--border)] bg-[rgba(248,247,243,0.95)] px-5 py-5 sm:px-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--secondary)] sm:text-xs">
                    {piece.date}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl leading-none text-[var(--foreground)] sm:text-[2rem]">
                    {piece.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                    {piece.description}
                  </p>
                </figcaption>
              </figure>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
