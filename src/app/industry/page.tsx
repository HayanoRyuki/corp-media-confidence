import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/data/industries";
import { CTASection } from "@/components/sections/CTASection";
import {
  BarChart3,
  GraduationCap,
  Monitor,
  Handshake,
  Scale,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "業種別ソリューション",
  description: "無形商材を扱うビジネスには、共通する課題があります。業種ごとに最適なプロダクトの組み合わせをご提案します。",
  openGraph: {
    title: "業種別ソリューション",
    description: "無形商材を扱うビジネスには、共通する課題があります。業種ごとに最適なプロダクトの組み合わせをご提案します。",
  },
};

const industryIcons: Record<string, React.ReactNode> = {
  consulting: <BarChart3 className="w-10 h-10 text-primary" />,
  training: <GraduationCap className="w-10 h-10 text-primary" />,
  saas: <Monitor className="w-10 h-10 text-primary" />,
  agency: <Handshake className="w-10 h-10 text-primary" />,
  professional: <Scale className="w-10 h-10 text-primary" />,
};

export default function IndustryListPage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide text-center">
          <p className="text-primary-light font-medium mb-2">INDUSTRIES</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">業種別ソリューション</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            無形商材を扱うビジネスには、共通する課題があります。
            <br />
            業種ごとに最適なプロダクトの組み合わせをご提案します。
          </p>
        </div>
      </section>

      {/* 業種一覧 */}
      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industry/${industry.slug}`}
                className="group block bg-white border border-gray-border rounded-lg p-8 hover:shadow-lg transition-all hover:border-primary"
              >
                <div className="mb-4">{industryIcons[industry.slug] || <Building2 className="w-10 h-10 text-primary" />}</div>
                <h2 className="text-xl font-bold text-text group-hover:text-primary transition-colors mb-2">
                  {industry.name}
                </h2>
                <p className="text-text-light mb-4">{industry.desc}</p>
                <span className="inline-flex items-center text-primary font-medium text-sm">
                  詳しく見る
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* どのプロダクトが最適かわからない方へ */}
      <section className="py-16 bg-gray-bg">
        <div className="container-wide text-center">
          <h2 className="text-2xl font-bold text-text mb-4">
            どのプロダクトが最適かわからない方へ
          </h2>
          <p className="text-text-light mb-8 max-w-2xl mx-auto">
            21種類のプロダクトから、御社の課題に最適な組み合わせをご提案します。
            まずはお気軽にご相談ください。
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              導入相談をする
            </Link>
            <Link href="/product-list" className="btn-outline">
              全プロダクトを見る
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
