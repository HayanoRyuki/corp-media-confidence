import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, departments, directions, ProductDetail } from "@/data/products";
import { CTASection } from "@/components/sections/CTASection";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.values(products).map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = Object.values(products).find((p) => p.slug === slug);

  if (!product) {
    return { title: "プロダクトが見つかりません" };
  }

  return {
    title: product.name,
    description: product.summary,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = Object.values(products).find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const department = departments.find((d) => d.id === product.department);
  const direction = directions.find((d) => d.id === product.direction);

  // 関連プロダクトを取得
  const relatedProductList = product.relatedProducts
    .map((slug) => Object.values(products).find((p) => p.slug === slug))
    .filter((p): p is ProductDetail => p !== undefined);

  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide">
          {/* パンくず */}
          <nav className="text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white">ホーム</Link>
            <span className="mx-2">/</span>
            <Link href="/product-list" className="hover:text-white">プロダクト一覧</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{product.name}</span>
          </nav>

          {/* タグ */}
          <div className="flex gap-2 mb-4">
            <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full">
              {department?.name}
            </span>
            <span className="text-xs bg-primary/80 text-white px-3 py-1 rounded-full">
              {direction?.name}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{product.name}</h1>
          <p className="text-xl text-white/80 max-w-3xl">{product.lead}</p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/resources/overview" className="btn-primary">
              資料請求
            </Link>
          </div>
        </div>
      </section>

      {/* このプロダクトについて */}
      <section className="section">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-text mb-6">このプロダクトについて</h2>
          <p className="text-text-light text-lg leading-relaxed max-w-4xl">
            {product.about}
          </p>
        </div>
      </section>

      {/* 対象・目的 */}
      <section className="section bg-gray-bg">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">
                  ✓
                </span>
                対象部署・担当者
              </h3>
              <p className="text-text-light">{product.targetDepartment}</p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">
                  ✓
                </span>
                導入目的
              </h3>
              <p className="text-text-light">{product.targetPurpose}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 応用・拡張例 */}
      {product.extensions.length > 0 && (
        <section className="section">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-text mb-8">応用・拡張例</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {product.extensions.map((ext, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 bg-gray-bg rounded-lg"
                >
                  <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-text">{ext}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 業界別の活用例 */}
      {product.industryExamples.length > 0 && (
        <section className="section bg-gray-bg">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-text mb-8">業界別の活用例</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {product.industryExamples.map((example, i) => (
                <div key={i} className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-text mb-3">{example.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{example.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 提供の流れ */}
      {product.flow.length > 0 && (
        <section className="section">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-text mb-8">提供の流れ</h2>
            <div className="relative">
              {/* 線（デスクトップ） */}
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-border" />

              <div className="grid md:grid-cols-3 gap-8">
                {product.flow.map((step, i) => (
                  <div key={i} className="relative">
                    <div className="flex md:flex-col items-start md:items-center gap-4 md:text-center">
                      <span className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-xl font-bold shrink-0 relative z-10">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-bold text-text mb-2">{step.title}</h3>
                        <p className="text-text-light text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 提供内容 */}
      {product.deliverables.length > 0 && (
        <section className="section bg-secondary text-white">
          <div className="container-wide">
            <h2 className="text-2xl font-bold mb-8">提供内容</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {product.deliverables.map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <h3 className="font-bold mb-3">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {product.faq.length > 0 && (
        <section className="section">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-text mb-8">よくあるご質問</h2>
            <div className="space-y-4 max-w-3xl">
              {product.faq.map((item, i) => (
                <details
                  key={i}
                  className="group bg-gray-bg rounded-lg"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-text">
                    <span className="flex items-center gap-3">
                      <span className="text-primary font-bold">Q.</span>
                      {item.question}
                    </span>
                    <span className="text-primary group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="flex gap-3 pt-4 border-t border-gray-border">
                      <span className="text-secondary font-bold">A.</span>
                      <p className="text-text-light">{item.answer}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 関連プロダクト */}
      {relatedProductList.length > 0 && (
        <section className="section bg-gray-bg">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-text mb-8">関連プロダクト</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProductList.map((rp) => {
                const rpDept = departments.find((d) => d.id === rp.department);
                const rpDir = directions.find((d) => d.id === rp.direction);
                return (
                  <Link
                    key={rp.slug}
                    href={`/products/${rp.slug}`}
                    className="block bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex gap-2 mb-3">
                      <span className="text-xs bg-gray-200 text-text-light px-2 py-1 rounded">
                        {rpDept?.name}
                      </span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {rpDir?.name}
                      </span>
                    </div>
                    <h3 className="font-bold text-text mb-2">{rp.name}</h3>
                    <p className="text-sm text-text-light line-clamp-2">{rp.summary}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection />
    </>
  );
}
