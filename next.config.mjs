/** @type {import('next').NextConfig} */
const nextConfig = {
  // 画像最適化設定
  images: {
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
