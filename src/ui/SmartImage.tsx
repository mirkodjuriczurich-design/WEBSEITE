import Image from "next/image";

interface Props {
  src?: string;
  alt: string;
  aspect?: "square" | "video" | "portrait" | "landscape";
  priority?: boolean;
  placeholderLabel?: string;
  className?: string;
  redMarker?: boolean;
}

const aspectMap: Record<NonNullable<Props["aspect"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/9]",
};

/**
 * SmartImage renders next/image when src is given, or an editorial placeholder
 * (off-white stone tile with optional Swiss-red corner marker + caption) so
 * the layout stays stable across the placeholder → real-photo swap.
 */
export function SmartImage({
  src,
  alt,
  aspect = "landscape",
  priority,
  placeholderLabel = "Editorial · Phase 3",
  className,
  redMarker = true,
}: Props) {
  const aspectClass = aspectMap[aspect];

  if (src) {
    return (
      <div className={`relative w-full overflow-hidden ${aspectClass} ${className ?? ""}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={`relative w-full overflow-hidden border border-[var(--color-stone-200)] ${aspectClass} ${className ?? ""}`}
      style={{ background: "var(--color-stone-100)" }}
    >
      {redMarker && (
        <div
          className="absolute top-5 left-5 h-9 w-9"
          style={{ background: "var(--color-swiss-red)" }}
        />
      )}
      <div className="absolute inset-0 grid place-items-center px-4">
        <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-stone-400)] text-center">
          {placeholderLabel}
        </span>
      </div>
    </div>
  );
}
