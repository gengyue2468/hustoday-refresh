const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching: [
    {
      source: ({ request }) => request.destination === 'script' || 
                                request.destination === 'style' || 
                                request.destination === 'image',
      destination: 'staticResource',
      options: {
        cacheName: 'static-resources',
        expiration: {
          maxEntries: 30, // 最多缓存30个资源
          maxAgeSeconds: 30 * 24 * 60 * 60, // 缓存30天
        },
      },
    },
    {
      source: ({ request }) => request.url.includes('/api/'),
      destination: 'api',
      options: {
        cacheName: 'api-data',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 60, // 缓存1小时
        },
      },
    },
  ],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);

