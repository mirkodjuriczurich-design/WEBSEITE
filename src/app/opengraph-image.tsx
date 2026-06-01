import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = "Swiss Longevity Labs AG";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#FAFAF7",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Top bar: Swiss-red mark + brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 80,
              height: 80,
              background: "#E30613",
              color: "#FAFAF7",
              fontSize: 44,
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              letterSpacing: -2,
              fontFamily: "Georgia, serif",
            }}
          >
            LL
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span
              style={{
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: "0.25em",
                color: "#E30613",
                textTransform: "uppercase",
                fontFamily: "sans-serif",
              }}
            >
              Swiss
            </span>
            <span
              style={{
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: "0.25em",
                color: "#0B0B0B",
                textTransform: "uppercase",
                fontFamily: "sans-serif",
              }}
            >
              Longevity Labs <span style={{ color: "#E30613" }}>AG</span>
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "flex-end",
            marginTop: 60,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
            <span
              style={{
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "0.18em",
                color: "#3D3B36",
                textTransform: "uppercase",
                marginBottom: 28,
                fontFamily: "sans-serif",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <span style={{ width: 12, height: 12, background: "#E30613" }} />
              Schweizer Full-Solution-Partner für Longevity
            </span>
            <span
              style={{
                fontSize: 72,
                lineHeight: 1.05,
                letterSpacing: -1.5,
                color: "#0B0B0B",
                fontFamily: "Georgia, serif",
              }}
            >
              {site.positioning}
            </span>
          </div>
        </div>

        {/* Bottom strip: cert bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            paddingTop: 24,
            borderTop: "1px solid #E5E3DC",
            color: "#A8A6A0",
            fontSize: 18,
            fontFamily: "Menlo, monospace",
          }}
        >
          <span>Swissmedic</span>
          <span>·</span>
          <span>GMP</span>
          <span>·</span>
          <span>ISO 22000</span>
          <span>·</span>
          <span>ISO 13485</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
