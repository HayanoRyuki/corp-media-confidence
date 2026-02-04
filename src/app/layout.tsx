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
  title: {
    default: "株式会社メディア・コンフィデンス",
    template: "%s | 株式会社メディア・コンフィデンス",
  },
  description:
    "7部署×3方向で選べる21種類のAIプロダクト。業種別の導入パターンもあります。まずは、御社に合う使い方を探してみませんか。",
  keywords: ["AI", "業務効率化", "マーケティング", "営業支援", "カスタマーサポート"],
  authors: [{ name: "株式会社メディア・コンフィデンス" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "株式会社メディア・コンフィデンス",
  },
  twitter: {
    card: "summary_large_image",
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
        {/* クリティカルCSS - 初期表示に必要な最小限のスタイル */}
        <style dangerouslySetInnerHTML={{ __html: `
          *,*::before,*::after{box-sizing:border-box}
          body{margin:0;font-family:"Noto Sans JP",system-ui,sans-serif;line-height:1.75;color:#1f2933;background:#fff;display:flex;flex-direction:column;min-height:100vh}
          .container-wide{max-width:80rem;margin:0 auto;padding:0 1rem}
          header{position:sticky;top:0;z-index:50;background:#fff;border-bottom:1px solid #e5e7eb}
          header nav{display:flex;align-items:center;justify-content:space-between;padding:1rem 0}
          .btn-primary{display:inline-flex;align-items:center;justify-content:center;padding:.75rem 2rem;background:#E67635;color:#fff;font-weight:500;border-radius:.5rem;text-decoration:none}
          .btn-outline{display:inline-flex;align-items:center;justify-content:center;padding:.75rem 2rem;border:2px solid #2B4C7E;color:#2B4C7E;font-weight:500;border-radius:.5rem;text-decoration:none}
          main{flex:1}
          section{position:relative}
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
