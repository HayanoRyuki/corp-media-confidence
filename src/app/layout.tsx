import type { Metadata } from "next";
import Script from "next/script";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
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
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
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
        {/* HubSpot Tracking Code */}
        <Script
          id="hs-script-loader"
          strategy="afterInteractive"
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
