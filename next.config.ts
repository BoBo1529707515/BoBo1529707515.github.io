import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // GitHub Pages serves files only; both server and client renders must use
  // direct image URLs instead of the unavailable /_next/image endpoint.
  images: { unoptimized: true },
};

export default nextConfig;
