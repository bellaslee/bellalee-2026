'use client';

import Image from 'next/image';
import LightGallery from 'lightgallery/react';
import type { ArtEntry } from '@/content/art';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import lgZoom from 'lightgallery/plugins/zoom';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type ArtGalleryProps = {
  art: ArtEntry[];
};

type MasonryItem = {
  piece: ArtEntry;
  index: number;
};

gsap.registerPlugin(ScrollTrigger);

const SM_BREAKPOINT = 640;
const XL_BREAKPOINT = 1280;

function getColumnCount(width: number) {
  if (width >= XL_BREAKPOINT) {
    return 3;
  }

  if (width >= SM_BREAKPOINT) {
    return 2;
  }

  return 1;
}

function estimateCardHeight(piece: ArtEntry) {
  return piece.height / piece.width;
}

function buildColumns(art: ArtEntry[], columnCount: number) {
  const columns: MasonryItem[][] = Array.from({ length: columnCount }, () => []);
  const columnHeights = Array.from({ length: columnCount }, () => 0);

  art.forEach((piece, index) => {
    let targetColumn = 0;

    for (let columnIndex = 1; columnIndex < columnCount; columnIndex += 1) {
      if (columnHeights[columnIndex] < columnHeights[targetColumn]) {
        targetColumn = columnIndex;
      }
    }

    columns[targetColumn].push({ piece, index });
    columnHeights[targetColumn] += estimateCardHeight(piece);
  });

  return columns;
}

export function ArtGallery({ art }: ArtGalleryProps) {
  const [columnCount, setColumnCount] = useState(1);
  const sectionRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const updateColumnCount = () => {
      setColumnCount(getColumnCount(window.innerWidth));
    };

    updateColumnCount();
    window.addEventListener('resize', updateColumnCount);

    return () => {
      window.removeEventListener('resize', updateColumnCount);
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reduceMotion.matches) {
      return;
    }

    const ctx = gsap.context(() => {
      itemRefs.current.forEach((item, index) => {
        if (!item) {
          return;
        }

        gsap.set(item, {
          autoAlpha: 0,
          y: 32,
          willChange: 'transform, opacity',
        });

        gsap.to(item, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.04,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom-=10%',
            once: true,
          },
          clearProps: 'willChange',
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [columnCount, art]);

  const columns = buildColumns(art, columnCount);

  return (
    <section ref={sectionRef} className="py-10 sm:py-14" aria-label="Artwork gallery">
      <LightGallery
        plugins={[lgZoom]}
        selector="a"
        licenseKey="0000-0000-000-0000"
        download={false}
        counter={false}
        closeOnTap
        swipeToClose
        speed={500}
      >
        <div
          className="grid gap-6 sm:gap-8"
          style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
        >
          {columns.map((column, columnIndex) => (
            <ul
              key={`column-${columnIndex}`}
              className="list-none space-y-6 p-0 sm:space-y-8"
            >
              {column.map(({ piece, index }) => (
                <li
                  key={piece.src}
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  className="min-w-0"
                >
                  <a
                    href={piece.src}
                    data-src={piece.src}
                    data-lg-size={`${piece.width}-${piece.height}`}
                    className="block cursor-pointer"
                    aria-label={`Expand ${piece.title}`}
                  >
                    <Image
                      src={piece.src}
                      alt={piece.description}
                      width={piece.width}
                      height={piece.height}
                      className="block h-auto w-full"
                      priority={index === 0}
                      sizes="(min-width: 1280px) 30vw, (min-width: 640px) 46vw, 92vw"
                    />
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </LightGallery>
    </section>
  );
}
