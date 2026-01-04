/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for deployment
  images: {
    unoptimized: true // Required for static export
  },
  trailingSlash: true // Ensures proper URL structure
};

module.exports = nextConfig;
