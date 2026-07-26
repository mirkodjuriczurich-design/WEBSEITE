import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/services", destination: "/leistungen", permanent: true },
      { source: "/services/private-label", destination: "/leistungen/private-label", permanent: true },
      { source: "/services/white-label", destination: "/leistungen/white-label", permanent: true },
      { source: "/services/full-service-rd", destination: "/leistungen/full-service-rd", permanent: true },
      { source: "/services/produktentwicklung", destination: "/leistungen/produktentwicklung", permanent: true },
      { source: "/services/regulatorik", destination: "/leistungen/regulatorik", permanent: true },
      { source: "/services/distribution", destination: "/leistungen/distribution", permanent: true },
    ];
  },
};

export default nextConfig;
