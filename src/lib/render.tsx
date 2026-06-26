import type { ReactNode } from "react";

const monoAmp = (
  <span style={{ fontFamily: "var(--font-mono), monospace", fontStyle: "normal" }}>&amp;</span>
);

export function amp(text: string): ReactNode {
  const parts = text.split(" & ");
  if (parts.length === 1) return text;
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && <> {monoAmp} </>}
    </span>
  ));
}
