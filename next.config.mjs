/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1600, 2000],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [55, 70],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: '**' }
    ]
  },
  allowedDevOrigins: ['localhost', '127.0.0.1', '192.168.*.*'],
};

export default nextConfig;
