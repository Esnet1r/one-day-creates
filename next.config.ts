import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        // Cap source images at 1920px wide — no need to serve larger
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        formats: ["image/webp"],
        minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    },
};

export default nextConfig;
