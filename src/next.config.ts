
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true,
  },
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
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  webpack(config) {
    // Reverted: Removing raw-loader configuration to fix build errors.
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/components',
        destination: '/components/button',
      },
      // Keep the `/:locale` pattern for shared URLs
      {
        source: '/:locale(en|he|es)',
        destination: '/',
      },
      {
        source: '/:locale(en|he|es)/components/:slug*',
        destination: '/components/:slug*',
      }
    ];
  }
};

export default nextConfig;
