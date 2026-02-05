import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, directions, getProductBySlug } from "@/data/products";
import { CTASection } from "@/components/sections/CTASection";
import ProductTabs from "./ProductTabs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

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
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // 全タブの提供内容を集約
  const allDeliverables = product.tabs.flatMap((tab) => tab.deliverables);
  // 全タブのFAQを集約
  const allFaq = product.tabs.flatMap((tab) => tab.faq);

  return (
    <>
      {/* パンくず */}
      <section className="bg-gray-bg py-4">
        <div className="container-wide">
          <nav className="text-sm text-text-light">
            <Link href="/" className="hover:text-primary">ホーム</Link>
            <span className="mx-2">/</span>
            <Link href="/product-list" className="hover:text-primary">プロダクト一覧</Link>
            <span className="mx-2">/</span>
            <span className="text-text">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* 2カラムメインコンテンツ */}
      <section className="section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* 左カラム: プロダクト情報 */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-6 md:p-8 text-white">
                {/* 部署タグ */}
                <div className="flex gap-2 mb-4">
                  <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full font-medium">
                    {product.departmentName}部門向け
                  </span>
                </div>

                <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.name}</h1>
                <p className="text-white/80 leading-relaxed mb-8">{product.summary}</p>

                {/* 提供内容 */}
                {allDeliverables.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-lg font-bold mb-4">提供内容</h2>
                    <div className="space-y-3">
                      {allDeliverables.slice(0, 6).map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="w-5 h-5 bg-white text-secondary rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
                          <div>
                            <p className="font-medium text-white text-sm">{item.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-white/10 backdrop-blur rounded-lg p-5">
                  <p className="text-sm text-white/80 mb-4">このプロダクトについて詳しく知りたい方は、お気軽にお問い合わせください。</p>
                  <Link
                    href={`/contact?product=${product.slug}`}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-secondary font-medium rounded-lg hover:bg-gray-100 transition-colors text-center"
                  >
                    このプロダクトについて問い合わせる
                  </Link>
                </div>
              </div>
            </div>

            {/* 右カラム: タブコンテンツ */}
            <div className="lg:col-span-3">
              <ProductTabs product={product} directions={directions} />
            </div>
          </div>
        </div>
      </section>

      {/* よくあるご質問（全幅） */}
      {allFaq.length > 0 && (
        <section className="section bg-gray-bg">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-text mb-8 text-center">よくあるご質問</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {allFaq.map((item, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-lg"
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

      {/* CTA */}
      <CTASection />
    </>
  );
}
