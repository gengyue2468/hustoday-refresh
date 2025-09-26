/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',  // 确保指向根目录的public
  register: true,
  skipWaiting: true,
  disable: false,  // 强制生成sw.js
  swSrc: 'src/sw.js',  // 可选：如果有自定义sw，指定其路径
  swDest: 'public/sw.js'  // 明确指定sw.js的输出路径
});

const nextConfig = withPWA({
  reactStrictMode: true,
  // 告诉Next.js页面在src目录下
  pageExtensions: ['js', 'jsx'],
  distDir: '.next'  // 确保输出目录正确
});

module.exports = nextConfig;

