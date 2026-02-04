/** @type {import('next').NextConfig} */
const nextConfig = {
  // パフォーマンス最適化
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",  // 本番でconsole削除
  },
  // 画像最適化設定
  images: {
    formats: ["image/avif", "image/webp"],  // AVIF優先（より高圧縮）
    deviceSizes: [640, 750, 828, 1080, 1200],  // モバイル向けに最適化
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.hubspot.com",
      },
      {
        protocol: "https",
        hostname: "**.hubspotusercontent.com",
      },
    ],
  },
  // ヘッダー最適化（キャッシュ設定）
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",  // 1年キャッシュ
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  // リダイレクト（HubSpotからの移行用）
  async redirects() {
    return [
      // 旧URLから新URLへのリダイレクト例
      {
        source: "/product/:slug",
        destination: "/products/:slug",
        permanent: true,
      },
      {
        source: "/product",
        destination: "/product-list",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/product-list",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
