import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    localPatterns: [
      {
        pathname: '/assets/**',
        search: '?v=whatsapp',
      },
      {
        pathname: '/assets/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
