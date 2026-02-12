import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "導入実績",
  description: "AIシステム基盤の導入事例をご紹介。各業界でのAI活用の成功事例をご覧ください。",
  openGraph: {
    title: "導入実績",
    description: "AIシステム基盤の導入事例をご紹介。各業界でのAI活用の成功事例をご覧ください。",
  },
};

// サンプルデータ（将来的にCMSから取得）
const caseStudies = [
  {
    slug: "consulting-company-a",
    title: "提案資料作成時間を50%削減",
    clientName: "大手コンサルティング会社A社",
    industry: "コンサルティング",
    products: ["営業ナレッジAI", "コンテンツ発信AI"],
  },
  {
    slug: "training-company-b",
    title: "Eラーニングコンテンツの制作効率が3倍に",
    clientName: "研修会社B社",
    industry: "研修・教育",
    products: ["Eラーニング・資格発行AI", "動画セミナー発信AI"],
  },
  {
    slug: "saas-company-c",
    title: "カスタマーサポートの問い合わせ対応を自動化",
    clientName: "SaaS企業C社",
    industry: "SaaS",
    products: ["カスタマーサポートAI", "ヘルプサイトAI"],
  },
];

export default function CaseStudiesListPage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide">
          <p className="text-primary-light font-medium mb-2">CASE STUDIES</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">導入実績</h1>
          <p className="text-white/80 mt-4">
            AIシステム基盤の導入事例をご紹介します
          </p>
        </div>
      </section>

      {/* 導入実績一覧 */}
      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((item) => (
              <Link
                key={item.slug}
                href={`/case-studies/${item.slug}`}
                className="group block bg-white border border-gray-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-4xl">📊</span>
                </div>
                <div className="p-6">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {item.industry}
                  </span>
                  <h2 className="font-bold text-text group-hover:text-primary transition-colors mt-3 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-text-light mb-3">{item.clientName}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.products.map((product, i) => (
                      <span key={i} className="text-xs text-primary">
                        {product}{i < item.products.length - 1 && " / "}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
