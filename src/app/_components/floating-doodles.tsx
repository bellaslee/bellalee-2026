'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef, useSyncExternalStore } from 'react';
import gsap from 'gsap';

type DoodleDepth = 'back' | 'front';

type DoodleSceneItem = {
  id: string;
  src: string;
  anchorX: number;
  anchorY: number;
  size: number;
  depth: DoodleDepth;
  floatRadius: number;
  parallaxFactor: number;
  rotationRange: number;
  orbitPhase: number;
  orbitSpeed: number;
  lag: number;
  opacity: number;
};

type AnchorSlot = {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
};

type FloatingDoodlesProps = {
  assetCandidates: string[];
};

const DOODLE_COUNT = 7;
const MOBILE_BREAKPOINT = 768;

const ANCHOR_SLOTS: AnchorSlot[] = [
  { xMin: 0.03, xMax: 0.14, yMin: 0.08, yMax: 0.18 },
  { xMin: 0.82, xMax: 0.95, yMin: 0.1, yMax: 0.2 },
  { xMin: 0.07, xMax: 0.18, yMin: 0.26, yMax: 0.36 },
  { xMin: 0.8, xMax: 0.92, yMin: 0.3, yMax: 0.42 },
  { xMin: 0.12, xMax: 0.24, yMin: 0.48, yMax: 0.58 },
  { xMin: 0.75, xMax: 0.88, yMin: 0.5, yMax: 0.62 },
  { xMin: 0.05, xMax: 0.16, yMin: 0.66, yMax: 0.76 },
  { xMin: 0.84, xMax: 0.95, yMin: 0.68, yMax: 0.8 },
  { xMin: 0.18, xMax: 0.3, yMin: 0.82, yMax: 0.92 },
  { xMin: 0.7, xMax: 0.82, yMin: 0.82, yMax: 0.92 },
];

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function pickRandom<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle<T>(items: T[]) {
  const next = [...items];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    const current = next[index];

    next[index] = next[swapIndex];
    next[swapIndex] = current;
  }

  return next;
}

function createScene(
  pathKey: string,
  assetCandidates: string[],
): DoodleSceneItem[] {
  if (assetCandidates.length === 0) {
    return [];
  }

  const slots = shuffle(ANCHOR_SLOTS);
  const selectedSources =
    assetCandidates.length >= DOODLE_COUNT
      ? shuffle(assetCandidates).slice(0, DOODLE_COUNT)
      : Array.from({ length: DOODLE_COUNT }, () => pickRandom(assetCandidates));

  return Array.from({ length: DOODLE_COUNT }, (_, index) => {
    const slot = slots[index % slots.length];
    const depth: DoodleDepth = Math.random() < 0.35 ? 'front' : 'back';


    return {
      id: `${pathKey}-doodle-${index}-${Math.round(Math.random() * 1_000_000)}`,
      src: selectedSources[index],
      anchorX: randomBetween(slot.xMin, slot.xMax),
      anchorY: randomBetween(slot.yMin, slot.yMax),
      size: randomBetween(100, 180),
      depth,
      floatRadius: randomBetween(16, 34),
      parallaxFactor: randomBetween(0.16, 0.38),
      rotationRange: randomBetween(7, 18),
      orbitPhase: randomBetween(0, Math.PI * 2),
      orbitSpeed: randomBetween(0.35, 0.7),
      lag: randomBetween(0.08, 0.16),
      opacity:
        depth === 'front' ? randomBetween(0.7, 0.9) : randomBetween(0.5, 0.78),
    };
  });
}

export function FloatingDoodles({ assetCandidates }: FloatingDoodlesProps) {
  const pathname = usePathname();
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const scene = useMemo(
    () => (isMounted ? createScene(pathname, assetCandidates) : []),
    [assetCandidates, isMounted, pathname],
  );
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (!containerRef.current || scene.length === 0) {
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isMobile = () => window.innerWidth < MOBILE_BREAKPOINT;
    let currentScroll = window.scrollY;
    let targetScroll = currentScroll;
    let scrollVelocity = 0;

    const applyStaticLayout = () => {
      const mobile = isMobile();

      scene.forEach((item, index) => {
        const node = itemRefs.current[index];

        if (!node) {
          return;
        }

        const size = item.size * (mobile ? 0.68 : 1);
        const x = window.innerWidth * item.anchorX - size / 2;
        const y = window.innerHeight * item.anchorY - size / 2;

        gsap.set(node, {
          x,
          y,
          width: size,
          height: size,
          rotation: 0,
          opacity: item.opacity,
        });
      });
    };

    if (reduceMotion.matches) {
      applyStaticLayout();

      const handleResize = () => {
        applyStaticLayout();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }

    const cleanup = gsap.context(() => {
      const tick = () => {
        const mobile = isMobile();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const time = gsap.ticker.time;

        currentScroll += (targetScroll - currentScroll) * 0.12;
        scrollVelocity =
          scrollVelocity * 0.88 + (targetScroll - currentScroll) * 0.12;

        scene.forEach((item, index) => {
          const node = itemRefs.current[index];

          if (!node) {
            return;
          }

          const size = item.size * (mobile ? 0.68 : 1);
          const orbitRadius = item.floatRadius * (mobile ? 0.62 : 1);
          const parallax = item.parallaxFactor * (mobile ? 3 : 5);
          const orbitX =
            Math.cos(time * item.orbitSpeed + item.orbitPhase) * orbitRadius;
          const orbitY =
            Math.sin(time * (item.orbitSpeed * 0.9) + item.orbitPhase) *
            orbitRadius;
          const scrollShift = scrollVelocity * parallax * 0.25;
          const x =
            viewportWidth * item.anchorX -
            size / 2 +
            orbitX +
            scrollShift * 0.08;
          const y =
            viewportHeight * item.anchorY - size / 2 + orbitY - scrollShift;
          const rotation =
            Math.sin(time * (item.orbitSpeed * 0.7) + item.orbitPhase) *
              item.rotationRange *
              (mobile ? 0.7 : 1) +
            scrollVelocity * 0.08;

          gsap.to(node, {
            x,
            y,
            width: size,
            height: size,
            rotation,
            opacity: item.opacity,
            duration: item.lag,
            ease: 'power2.out',
            overwrite: true,
          });
        });
      };

      const handleScroll = () => {
        targetScroll = window.scrollY;
      };

      const handleResize = () => {
        tick();
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleResize);
      gsap.ticker.add(tick);
      tick();

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        gsap.ticker.remove(tick);
      };
    }, containerRef);

    return () => {
      cleanup.revert();
    };
  }, [scene]);

  if (scene.length === 0) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {scene.map((item, index) => (
        <div
          key={item.id}
          ref={(element) => {
            itemRefs.current[index] = element;
          }}
          className={`absolute will-change-transform ${
            item.depth === 'front' ? 'z-20' : 'z-0'
          }`}
          style={{ opacity: item.opacity }}
        >
          <Image
            src={item.src}
            alt=""
            fill
            sizes="180px"
            className="select-none object-contain"
          />
        </div>
      ))}
    </div>
  );
}
