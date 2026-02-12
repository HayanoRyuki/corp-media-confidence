import type { Metadata } from "next";
import { RequestForm } from "@/components/ui/RequestForm";

export const metadata: Metadata = {
  title: "資料請求",
  description: "株式会社メディア・コンフィデンスの資料請求ページ。AIシステム基盤の概要資料、導入事例集などをダウンロードいただけます。",
  openGraph: {
    title: "資料請求",
    description: "株式会社メディア・コンフィデンスの資料請求ページ。AIシステム基盤の概要資料、導入事例集などをダウンロードいただけます。",
  },
};

export default function RequestPage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide">
          <p className="text-primary-light font-medium mb-2">REQUEST</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">資料請求</h1>
          <p className="text-white/80 mt-4">
            AIシステム基盤の概要資料、導入事例集などをダウンロードいただけます。
          </p>
        </div>
      </section>

      {/* フォーム */}
      <section className="section">
        <div className="container-narrow">
          <RequestForm />
        </div>
      </section>
    </>
  );
}
