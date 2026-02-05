import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products, directions } from "@/data/products";
import { CTASection } from "@/components/sections/CTASection";

const departmentImages: Record<string, string> = {
  marketing: "/images/genre1.jpg",
  design: "/images/genre2.jpg",
  sales: "/images/genre3.jpg",
  cs: "/images/genre8.jpg",
  hr: "/images/genre4.jpg",
  education: "/images/genre5.jpg",
  planning: "/images/genre6.jpg",
};

export const metadata: Metadata = {
  title: "プロダクト一覧",
  description: "7部門向けのAIプロダクト。御社の課題に最適なソリューションをお選びください。",
};

export default function ProductListPage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide text-center">
          <p className="text-primary-light font-medium mb-2">PRODUCTS</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">プロダクト一覧</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            メディア・コンフィデンスは、<span className="text-white font-medium">7つの部署領域</span>に特化した
            AI基盤プロダクトを提供しています。
            <br className="hidden md:block" />
            各プロダクトは社外向け・顧客向け・社内向けの3つの用途に対応しています。
          </p>
        </div>
      </section>

      {/* 方向性の説明 */}
      <section className="py-12 bg-gray-bg">
        <div className="container-wide">
          <h2 className="text-lg font-bold text-text mb-6 text-center">3つの方向性</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {directions.map((dir) => (
              <div key={dir.id} className="bg-white rounded-lg p-6">
                <p className="text-sm text-primary font-medium uppercase mb-1">{dir.nameEn}</p>
                <h3 className="text-lg font-bold text-text mb-2">{dir.name}</h3>
                <p className="text-sm text-text-light">{dir.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* プロダクト一覧 */}
      <section className="section">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-text mb-8 text-center">7部門向けプロダクト</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group bg-white border border-gray-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* 写真エリア */}
                <div className="aspect-[16/9] relative">
                  <Image
                    src={departmentImages[product.department] || "/images/genre1.jpg"}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 90vw, 450px"
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-xs text-white/80 font-medium mb-1">
                      {product.departmentName}
                    </p>
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  </div>
                </div>

                {/* テキストエリア */}
                <div className="p-5">
                  <p className="text-text-light text-sm mb-4 line-clamp-2">
                    {product.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tabs.map((tab) => (
                      <span
                        key={tab.direction}
                        className="text-xs bg-gray-bg text-text-light px-2 py-1 rounded"
                      >
                        {tab.tabName}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-primary font-medium group-hover:text-primary-dark flex items-center gap-1">
                    詳細を見る
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 導入フロー簡易説明 */}
      <section className="section bg-gray-bg">
        <div className="container-wide text-center">
          <h2 className="text-2xl font-bold text-text mb-4">どのプロダクトを選べばいいかわからない方へ</h2>
          <p className="text-text-light mb-8 max-w-2xl mx-auto">
            御社の課題や目的に合わせて最適なプロダクトをご提案します。
            まずはお気軽にご相談ください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/resources/overview" className="btn-primary">
              資料請求
            </Link>
            <Link href="/contact" className="btn-secondary">
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
