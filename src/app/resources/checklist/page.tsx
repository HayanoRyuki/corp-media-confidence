import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HubSpotForm } from "@/components/ui/HubSpotForm";

export const metadata: Metadata = {
  title: "AI基盤導入・運用 検討チェックリスト",
  description: "AIを「試す」のではなく「使い続ける」ために、事前に整理しておきたい検討ポイントをまとめています。",
  openGraph: {
    title: "AI基盤導入・運用 検討チェックリスト",
    description: "AIを「試す」のではなく「使い続ける」ために、事前に整理しておきたい検討ポイントをまとめています。",
  },
};

export default function ChecklistResourcePage() {
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
            <span className="text-white">チェックリスト</span>
          </nav>
          <p className="text-primary-light font-medium mb-2">DOWNLOAD</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white">AI基盤導入・運用 検討チェックリスト</h1>
        </div>
      </section>

      {/* コンテンツ */}
      <section className="section pb-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* 資料表紙 */}
            <div>
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/resource_checklist.png"
                  alt="AI基盤導入・運用 検討チェックリスト"
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
                    AI導入前に確認すべきポイント
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    社内体制の整備チェック項目
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    運用フェーズの注意点
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    成功企業の共通パターン
                  </li>
                </ul>
              </div>
            </div>

            {/* フォーム */}
            <div className="bg-gray-bg rounded-lg p-8">
              <h2 className="text-xl font-bold text-text mb-6">無料ダウンロード</h2>
              <HubSpotForm
                portalId="21612534"
                formId="4ded420d-8582-4e6f-b669-2c7ef50d9298"
                region="na2"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
