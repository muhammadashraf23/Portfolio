/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable gzip/brotli compression
  compress: true,

  // Auto-convert images to AVIF/WebP and serve correct sizes
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 384, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 224, 256, 320],
  },

  // Tree-shake large packages to reduce JS bundle
  experimental: {
    optimizePackageImports: ["framer-motion", "react-icons"],
  },
};

export default nextConfig;
