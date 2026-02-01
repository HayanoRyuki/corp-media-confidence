import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HubSpotForm } from "@/components/ui/HubSpotForm";

export const metadata: Metadata = {
  title: "業務に組み込まれるAI基盤 活用事例集",
  description: "マーケティング、採用、CSなどの業務で、AIシステム基盤がどのように使われているかを紹介します。",
};

export default function CaseStudiesResourcePage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide">
          <nav className="text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white">ホーム</Link>
            <span className="mx-2">/</span>
            <Link href="/resources" className="hover:text-white">資料一覧</Link>
            <span className="mx-2">/</span>
            <span className="text-white">活用事例集</span>
          </nav>
          <p className="text-primary-light font-medium mb-2">DOWNLOAD</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white">業務に組み込まれるAI基盤 活用事例集</h1>
        </div>
      </section>

      {/* コンテンツ */}
      <section className="section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* 資料表紙 */}
            <div>
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/resource_casebook.png"
                  alt="業務に組み込まれるAI基盤 活用事例集"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-lg font-bold text-text mb-3">この資料でわかること</h2>
                <ul className="space-y-2 text-text-light">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    マーケティング部門での活用事例
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    営業・CS部門での活用事例
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    採用・教育部門での活用事例
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    導入効果の数値実績
                  </li>
                </ul>
              </div>
            </div>

            {/* フォーム */}
            <div className="bg-gray-bg rounded-lg p-8">
              <h2 className="text-xl font-bold text-text mb-6">無料ダウンロード</h2>
              <HubSpotForm
                portalId="21612534"
                formId="af339631-3271-4275-9722-89244b3731c9"
                region="na2"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
