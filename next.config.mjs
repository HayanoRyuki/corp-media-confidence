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
  // 末尾スラッシュを自動リダイレクト
  trailingSlash: false,
  // リダイレクト（HubSpotからの移行用）
  async redirects() {
    return [
      // 旧URLから新URLへのリダイレクト
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
      // HubSpot時代のURL対応
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      // 旧プロダクトURL形式（部署-方向）から新形式へ
      {
        source: "/products/:dept(marketing|design|sales|cs|hr|education|planning)-customer",
        destination: "/products/:dept",
        permanent: true,
      },
      {
        source: "/products/:dept(marketing|design|sales|cs|hr|education|planning)-external",
        destination: "/products/:dept",
        permanent: true,
      },
      {
        source: "/products/:dept(marketing|design|sales|cs|hr|education|planning)-internal",
        destination: "/products/:dept",
        permanent: true,
      },
      // hsLang パラメータ付きURLの処理
      {
        source: "/:path*",
        has: [
          {
            type: "query",
            key: "hsLang",
          },
        ],
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
