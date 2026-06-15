import Link from "next/link";
import Image from "next/image";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center group" aria-label="Swiss Longevity Labs AG – zur Startseite">
      <Image
        src="/logo.png"
        alt="Swiss Longevity Labs AG"
        width={160}
        height={48}
        className="h-10 w-auto object-contain"
        style={inverse ? { filter: "brightness(0) invert(1)" } : undefined}
        priority
      />
    </Link>
  );
}
