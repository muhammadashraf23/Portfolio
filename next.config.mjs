/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable gzip/brotli compression
  compress: true,

  // Auto-convert images to AVIF/WebP and serve correct sizes
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  // Tree-shake framer-motion to only include used exports (reduces JS bundle)
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;

