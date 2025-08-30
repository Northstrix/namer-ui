import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // No global SSR disable option. To enforce CSR on pages/components, use 'use client' directive.
  // See: https://nextjs.org/docs/messages/invalid-next-config

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  webpack(config) {
    // No additional raw-loader config required.
    return config;
  },

  async rewrites() {
    return [
      {
        source: '/components',
        destination: '/components/button',
      },
      {
        source: '/:locale(en|he|es)',
        destination: '/',
      },
      {
        source: '/:locale(en|he|es)/components',
        destination: '/components/button',
      },
      {
        source: '/:locale(en|he|es)/components/:slug*',
        destination: '/components/:slug*',
      },
      {
        source: '/:slug*',
        destination: '/:slug*',
      },
    ];
  },
};

export default nextConfig;
