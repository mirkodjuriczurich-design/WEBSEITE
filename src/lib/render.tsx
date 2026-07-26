import type { ReactNode } from "react";

const monoAmp = (
  <span style={{ fontFamily: "var(--font-spectral), Spectral, Georgia, serif", fontStyle: "italic" }}>&amp;</span>
);

export function amp(text: string): ReactNode {
  if (!text.includes("&")) return text;
  const parts = text.split("&");
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && monoAmp}
    </span>
  ));
}
