import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HubSpotForm } from "@/components/ui/HubSpotForm";

export const metadata: Metadata = {
  title: "管理付きAIシステム基盤 概要資料",
  description: "メディア・コンフィデンスが提供するAWS×AIを軸とした「管理付きAIシステム基盤」の全体像をまとめた資料です。",
};

export default function OverviewResourcePage() {
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
            <span className="text-white">概要資料</span>
          </nav>
          <p className="text-primary-light font-medium mb-2">DOWNLOAD</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white">管理付きAIシステム基盤 概要資料</h1>
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
                  src="/images/resource_general.png"
                  alt="管理付きAIシステム基盤 概要資料"
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
                    メディア・コンフィデンスのサービス概要
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    7部署向けAIプロダクト一覧
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    導入フローと料金体系
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    よくあるご質問
                  </li>
                </ul>
              </div>
            </div>

            {/* フォーム */}
            <div className="bg-gray-bg rounded-lg p-8">
              <h2 className="text-xl font-bold text-text mb-6">無料ダウンロード</h2>
              <HubSpotForm
                portalId="21612534"
                formId="d38ca696-cd04-4ddf-a83c-8a6b4c6da841"
                region="na2"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
