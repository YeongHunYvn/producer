import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // GitHub Pages 배포를 위한 설정
  output: 'export',
  basePath: isProd ? '/producer' : '',
  assetPrefix: isProd ? '/producer/' : '',
  images: {
    unoptimized: true, // GitHub Pages는 이미지 최적화를 지원하지 않음
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "i1.sndcdn.com" }, // SoundCloud 이미지
    ],
  },
  turbopack: {
    // Prevent root inference warnings when multiple lockfiles exist
    root: __dirname,
  },
};

export default nextConfig;
