interface AvatarProps {
  name: string;
  variant?: number;
  className?: string;
}

const palettes = [
  { bg: "#F0EFEA", fg: "#3D3B36" },
  { bg: "#E8E2D8", fg: "#0B2545" },
  { bg: "#1A1916", fg: "#FAFAF7" },
  { bg: "#0B2545", fg: "#FAFAF7" },
];

function initials(name: string) {
  return name
    .replace(/[^\p{L}\s]/gu, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function PortraitAvatar({ name, variant = 0, className }: AvatarProps) {
  const palette = palettes[variant % palettes.length];
  const init = initials(name);

  return (
    <div
      aria-hidden
      className={`relative w-full aspect-square overflow-hidden ${className ?? ""}`}
      style={{ background: palette.bg }}
    >
      <div
        className="absolute top-3 left-3 h-6 w-6"
        style={{ background: "var(--color-swiss-red)" }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <span
          className="font-[var(--font-display)] tracking-[-0.02em] leading-none"
          style={{ color: palette.fg, fontSize: "clamp(2rem, 6vw, 3.25rem)" }}
        >
          {init}
        </span>
      </div>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none mix-blend-multiply"
        style={{
          background:
            "radial-gradient(60% 80% at 30% 25%, rgba(255,255,255,0.18) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
