import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
