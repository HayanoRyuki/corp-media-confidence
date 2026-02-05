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

          {/* 部署タグ */}
          <div className="flex gap-2 mb-4">
            <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full">
              {product.departmentName}部門向け
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{product.name}</h1>
          <p className="text-xl text-white/80 max-w-3xl">{product.summary}</p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/resources/overview" className="btn-primary">
              資料請求
            </Link>
          </div>
        </div>
      </section>

      {/* タブコンテンツ */}
      <ProductTabs product={product} directions={directions} />

      {/* CTA */}
      <CTASection />
    </>
  );
}
