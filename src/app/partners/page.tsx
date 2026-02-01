import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "パートナー",
  description: "株式会社メディア・コンフィデンスのパートナー企業一覧",
};

// サンプルデータ（将来的にCMSから取得）
const partners = [
  {
    name: "株式会社テックパートナー",
    category: "技術パートナー",
    description: "クラウドインフラの構築・運用を支援",
  },
  {
    name: "株式会社セールスアライアンス",
    category: "販売パートナー",
    description: "中小企業向けの販売代理",
  },
  {
    name: "株式会社コンサルティングワークス",
    category: "導入パートナー",
    description: "導入支援・トレーニングを提供",
  },
];

const categoryColors: Record<string, string> = {
  "技術パートナー": "bg-blue-100 text-blue-800",
  "販売パートナー": "bg-green-100 text-green-800",
  "導入パートナー": "bg-purple-100 text-purple-800",
};

export default function PartnersPage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide">
          <p className="text-primary-light font-medium mb-2">PARTNERS</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">パートナー</h1>
          <p className="text-white/80 mt-4">
            私たちのビジョンに共感し、共に価値を提供するパートナー企業です
          </p>
        </div>
      </section>

      {/* パートナー一覧 */}
      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="bg-white border border-gray-border rounded-lg p-6"
              >
                <span className={`text-xs px-2 py-1 rounded ${categoryColors[partner.category] || "bg-gray-100"}`}>
                  {partner.category}
                </span>
                <h2 className="font-bold text-text mt-4 mb-2">{partner.name}</h2>
                <p className="text-sm text-text-light">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* パートナー募集 */}
      <section className="py-16 bg-gray-bg">
        <div className="container-wide text-center">
          <h2 className="text-2xl font-bold text-text mb-4">
            パートナーシップのご相談
          </h2>
          <p className="text-text-light mb-8 max-w-2xl mx-auto">
            メディア・コンフィデンスでは、共にAI活用を推進するパートナー企業を募集しています。
            販売代理、導入支援、技術連携など、様々な形でのパートナーシップが可能です。
          </p>
          <Link href="/contact" className="btn-secondary">
            パートナーシップについて問い合わせる
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
