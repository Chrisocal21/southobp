/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features if needed
  experimental: {
    // Add any experimental features here
  },
  
  // Image optimization configuration
  images: {
    // Add image domains if you plan to use external images
    domains: [],
    // Image formats to support
    formats: ['image/webp', 'image/avif'],
  },
  
  // Redirect configuration
  async redirects() {
    return [
      // Add any redirects here if needed
      // Example:
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ]
  },
  
  // Environment variables available to the browser
  env: {
    SITE_NAME: 'South O Annual Block Party',
    SITE_URL: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000',
  },
  
  // Webpack configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    // Add any custom webpack configuration here
    return config
  },
}

module.exports = nextConfig