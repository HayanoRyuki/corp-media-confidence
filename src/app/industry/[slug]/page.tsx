import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import { products } from "@/data/products";
import { CTASection } from "@/components/sections/CTASection";
import { PlatformComingSoonButton } from "@/components/ui/PlatformComingSoonModal";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return { title: "業種が見つかりません" };
  }

  return {
    title: `${industry.name}向けソリューション`,
    description: `${industry.name}のお客様向けにおすすめのAIプロダクトをご紹介します。${industry.desc}`,
  };
}

const industryDetails: Record<string, { challenges: string[]; benefits: string[] }> = {
  consulting: {
    challenges: [
      "提案資料の作成に時間がかかる",
      "ナレッジが属人化している",
      "プロジェクト間の知見共有が不十分",
    ],
    benefits: [
      "提案資料作成時間を50%削減",
      "組織全体のナレッジを一元管理",
      "プロジェクト横断での知見活用",
    ],
  },
  training: {
    challenges: [
      "講座コンテンツの制作に手間がかかる",
      "受講者管理が煩雑",
      "効果測定が難しい",
    ],
    benefits: [
      "コンテンツ制作の効率化",
      "受講者の進捗を自動追跡",
      "データに基づく講座改善",
    ],
  },
  saas: {
    challenges: [
      "カスタマーサポートの負担増加",
      "ヘルプコンテンツの更新が追いつかない",
      "マーケティング施策の効果測定",
    ],
    benefits: [
      "問い合わせ対応の自動化",
      "FAQの自動生成・更新",
      "データドリブンなマーケティング",
    ],
  },
  agency: {
    challenges: [
      "案件ごとの対応品質にばらつき",
      "営業ナレッジが共有されていない",
      "クライアントへの提案力強化",
    ],
    benefits: [
      "対応品質の標準化",
      "成功事例の横展開",
      "AIを活用した提案力強化",
    ],
  },
  professional: {
    challenges: [
      "専門知識の文書化・共有が困難",
      "採用ブランディングの強化",
      "業務効率化の余地がある",
    ],
    benefits: [
      "専門知識のナレッジベース化",
      "採用コンテンツの継続的発信",
      "定型業務の自動化",
    ],
  },
};

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const recommendedProducts = industry.recommendedProducts
    .map((slug) => Object.values(products).find((p) => p.slug === slug))
    .filter(Boolean);

  const details = industryDetails[slug] || {
    challenges: [],
    benefits: [],
  };

  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide">
          {/* パンくず */}
          <nav className="text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white">ホーム</Link>
            <span className="mx-2">/</span>
            <Link href="/industry" className="hover:text-white">業種別ソリューション</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{industry.name}</span>
          </nav>

          <p className="text-primary-light font-medium mb-2">INDUSTRY</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {industry.name}向けソリューション
          </h1>
          <p className="text-xl text-white/80">{industry.desc}</p>

          {/* CTA */}
          <div className="flex gap-4 mt-8">
            <PlatformComingSoonButton className="btn-primary">
              無料で始める
            </PlatformComingSoonButton>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-secondary">
              導入相談
            </Link>
          </div>
        </div>
      </section>

      {/* 課題と効果 */}
      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {/* 課題 */}
            <div className="bg-gray-bg rounded-lg p-8">
              <h2 className="text-xl font-bold text-text mb-6">
                {industry.name}のよくある課題
              </h2>
              <ul className="space-y-4">
                {details.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </span>
                    <span className="text-text-light">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 効果 */}
            <div className="bg-primary/5 rounded-lg p-8">
              <h2 className="text-xl font-bold text-text mb-6">
                導入による効果
              </h2>
              <ul className="space-y-4">
                {details.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-text">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめプロダクト */}
      <section className="py-16 bg-gray-bg">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-text text-center mb-8">
            {industry.name}におすすめのプロダクト
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recommendedProducts.map((product) => (
              <Link
                key={product!.slug}
                href={`/products/${product!.slug}`}
                className="block bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-primary mb-2">{product!.name}</h3>
                <p className="text-sm text-text-light">{product!.summary}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/product-list" className="text-primary hover:text-primary-dark font-medium">
              全21プロダクトを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
