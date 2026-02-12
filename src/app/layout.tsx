import type { Metadata } from "next";
import Script from "next/script";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],  // 500を削除してダウンロードサイズ削減
  display: "swap",
  preload: false,  // 日本語フォントはプリロードせず非同期読み込み
  adjustFontFallback: true,  // システムフォントでCLS軽減
});

const GTM_ID = "GTM-M9GXZXKR";
const HUBSPOT_ID = "21612534";

export const metadata: Metadata = {
  metadataBase: new URL("https://media-confidence.com"),
  title: {
    default: "株式会社メディア・コンフィデンス",
    template: "%s | 株式会社メディア・コンフィデンス",
  },
  description:
    "7部署×3方向で選べる21種類のAIプロダクト。業種別の導入パターンもあります。まずは、御社に合う使い方を探してみませんか。",
  keywords: ["AI", "業務効率化", "マーケティング", "営業支援", "カスタマーサポート"],
  authors: [{ name: "株式会社メディア・コンフィデンス" }],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://media-confidence.com",
    siteName: "株式会社メディア・コンフィデンス",
    title: "株式会社メディア・コンフィデンス",
    description:
      "7部署×3方向で選べる21種類のAIプロダクト。業種別の導入パターンもあります。まずは、御社に合う使い方を探してみませんか。",
    images: [
      {
        url: "https://media-confidence.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "株式会社メディア・コンフィデンス",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社メディア・コンフィデンス",
    description:
      "7部署×3方向で選べる21種類のAIプロダクト。業種別の導入パターンもあります。まずは、御社に合う使い方を探してみませんか。",
    images: ["https://media-confidence.com/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* ヒーロー画像のプリロード（LCP改善） */}
        <link
          rel="preload"
          href="/images/hero-pc.webp"
          as="image"
          type="image/webp"
        />
        {/* クリティカルCSS - 初期表示に必要な最小限のスタイル（Tailwindと競合しないよう最小限に） */}
        <style dangerouslySetInnerHTML={{ __html: `
          *,*::before,*::after{box-sizing:border-box}
          body{margin:0}
        `}} />
        {/* Google Tag Manager - 初期表示後に読み込み */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        {/* HubSpot Tracking Code - 初期表示後に読み込み */}
        <Script
          id="hs-script-loader"
          strategy="lazyOnload"
          src={`//js-na2.hs-scripts.com/${HUBSPOT_ID}.js`}
        />
      </head>
      <body className={`${notoSansJP.className} flex flex-col min-h-screen`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
