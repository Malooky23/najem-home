import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
      },
    
      typescript: {
        ignoreBuildErrors: true,
      },
    
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[js|ts|jsx|tsx]$/, // This is critical!
      use: ['@svgr/webpack'],
    });
    

    return config;
  },
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default withNextIntl(nextConfig);