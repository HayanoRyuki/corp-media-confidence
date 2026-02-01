import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "採用情報",
  description: "株式会社メディア・コンフィデンスの採用情報。業務委託メンバーを募集しています。",
};

// 業務委託ポジション
const careers = [
  {
    slug: "project-manager",
    title: "プロジェクトマネージャー",
    employmentType: "業務委託",
    location: "フルリモート",
    workStyle: "週2日〜",
    status: "募集中",
  },
];

export default function CareersListPage() {
  const PLATFORM_URL = process.env.NEXT_PUBLIC_PLATFORM_URL || "https://platform.media-confidence.com";

  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide">
          <p className="text-primary-light font-medium mb-2">CAREERS</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">採用情報</h1>
          <p className="text-white/80 mt-4">
            私たちと一緒に、AIで業務を変革しませんか。
          </p>
        </div>
      </section>

      {/* メッセージ */}
      <section className="py-16 bg-gray-bg">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-text mb-6">
            AIを「試行」から「仕組み」へ
          </h2>
          <p className="text-text-light leading-relaxed">
            メディア・コンフィデンスは、AIを一時的な試行で終わらせないために、
            業務や事業の中に深く根を張り、使い続けられる仕組みを提供しています。
            私たちと一緒に、企業のAI活用を本気で変えていきませんか。
          </p>
        </div>
      </section>

      {/* 募集一覧 */}
      <section className="section">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-text mb-8">募集中のポジション</h2>
          <div className="space-y-4">
            {careers.filter(c => c.status === "募集中").map((item) => (
              <Link
                key={item.slug}
                href={`/careers/${item.slug}`}
                className="block bg-white border border-gray-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all"
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {item.employmentType}
                  </span>
                  <span className="text-xs text-text-light">
                    {item.location}
                  </span>
                  <span className="text-xs text-text-light">
                    {item.workStyle}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-text">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container-wide text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            カジュアル面談も受け付けています
          </h2>
          <p className="text-white/80 mb-8">
            ポジションに関係なく、まずはお話ししませんか。
          </p>
          <Link href="/contact" className="btn-primary">
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  );
}
