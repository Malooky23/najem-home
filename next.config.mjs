// import createNextIntlPlugin from 'next-intl/plugin';

// /** @type {import('next').NextConfig} */
// const withNextIntl = createNextIntlPlugin();
// const nextConfig = {
//     // reactStrictMode: true,
//     // webpack(config) {
//     //   config.module.rules.push({
//     //     test: /\.svg$/i,
//     //     issuer: /\.[js|ts|jsx|tsx]$/, // <= This line is crucial
//     //     use: ['@svgr/webpack'],
//     //   });
  
//     //   return config;
//     // },
//   }
  
 
// export default withNextIntl(nextConfig);
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

export default withNextIntl(nextConfig);