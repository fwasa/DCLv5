/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for deployment
  images: {
    unoptimized: true // Required for static export
  },
  trailingSlash: true, // Ensures proper URL structure - Vercel will use 301 redirects
  skipTrailingSlashRedirect: false // Allow Vercel to handle trailing slash redirects
};

module.exports = nextConfig;
