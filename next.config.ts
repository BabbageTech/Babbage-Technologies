import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Allow access from your local network IP during development
  allowedDevOrigins: ['192.168.100.81', 'localhost', '*.local-ip.com'],

  // Linting is handled separately (or not at all, since eslint isn't a
  // dependency here) — don't let a missing/misconfigured eslint install
  // fail production builds. Re-enable once eslint is added back, if wanted.
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Optional: If you need to configure image domains for production
  // images: {
  //   domains: ['placehold.co', 'your-image-cdn.com'],
  // },
};

export default nextConfig;