import Image from 'next/image';

type ProjectCoverImageVariant = 'hero' | 'card';

type ProjectCoverImageProps = {
  src: string;
  alt: string;
  variant: ProjectCoverImageVariant;
  priority?: boolean;
  /** Listing-card thumbnails: hide from assistive tech (link + heading carry the label). */
  decorative?: boolean;
};

export function ProjectCoverImage({
  src,
  alt,
  variant,
  priority = false,
  decorative = false,
}: ProjectCoverImageProps) {
  if (variant === 'hero') {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1280px) 100vw, min(1280px, 100vw)"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative size-full min-h-52 overflow-hidden bg-[var(--surface)] md:min-h-0">
      <Image
        src={src}
        alt={decorative ? '' : alt}
        fill
        sizes="(max-width: 1280px) 100vw, 1280px"
        className="object-cover"
        aria-hidden={decorative ? true : undefined}
      />
    </div>
  );
}
