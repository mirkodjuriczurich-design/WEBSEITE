import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href?: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

const base =
  "inline-flex items-center gap-2 px-6 py-3 text-[15px] font-medium leading-none transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-swiss-red)] text-[var(--color-paper)] rounded-[4px] hover:bg-[var(--color-swiss-red-hover)] hover:-translate-y-[1px]",
  secondary:
    "border border-[var(--color-ink)] text-[var(--color-ink)] rounded-[4px] hover:bg-[var(--color-stone-100)]",
  ghost:
    "text-[var(--color-swiss-red)] px-0 py-2 hover:underline underline-offset-4 decoration-1",
};

export function Button({
  href,
  variant = "primary",
  children,
  className,
  arrow = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const content = (
    <>
      {arrow && variant === "primary" && <span aria-hidden>▸</span>}
      <span>{children}</span>
      {arrow && variant !== "primary" && <ArrowRight size={16} strokeWidth={1.5} aria-hidden />}
    </>
  );

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
