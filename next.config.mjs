/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [75, 85],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: '**' }
    ]
  },
  allowedDevOrigins: ['localhost', '127.0.0.1', '192.168.*.*'],
};

export default nextConfig;
