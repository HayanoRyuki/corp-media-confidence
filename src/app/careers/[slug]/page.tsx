import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// 業務委託ポジションデータ
const careersData: Record<string, {
  title: string;
  employmentType: string;
  location: string;
  workStyle: string;
  compensation: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  preferred: string[];
  benefits: string[];
}> = {
  "project-manager": {
    title: "プロジェクトマネージャー",
    employmentType: "業務委託",
    location: "フルリモート",
    workStyle: "週2日程度（月32〜40時間目安）",
    compensation: "時給 4,000円〜6,000円（経験・スキルにより決定）",
    overview: `メディア・コンフィデンスでは、AIシステム基盤の導入・運用プロジェクトをリードいただける
プロジェクトマネージャーを募集しています。

クライアント企業のAI活用を「試行」から「仕組み」に変えるため、
要件定義から導入支援、運用定着までをトータルでマネジメントしていただきます。

週2日程度の稼働で、フルリモートでの勤務が可能です。
副業・複業としてご参画いただける方も歓迎します。`,
    responsibilities: [
      "クライアントとの要件定義・ヒアリング",
      "プロジェクト計画の策定・進行管理",
      "社内エンジニア・デザイナーとの連携",
      "クライアントへの定例報告・提案",
      "導入後の運用支援・改善提案",
    ],
    requirements: [
      "IT/Webプロジェクトのマネジメント経験（3年以上）",
      "クライアントワーク経験",
      "複数ステークホルダーとの調整・折衝経験",
      "ドキュメント作成能力（提案書、要件定義書など）",
    ],
    preferred: [
      "AI/機械学習プロジェクトの経験",
      "SaaS/BtoB領域での経験",
      "AWS等クラウドサービスの基礎知識",
      "スタートアップでの勤務経験",
    ],
    benefits: [
      "フルリモート勤務",
      "稼働時間・曜日は柔軟に調整可能",
      "最新のAI技術に携われる",
      "少数精鋭チームでの裁量ある仕事",
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const career = careersData[slug];
  if (!career) return { title: "採用情報" };

  return {
    title: `${career.title} | 採用情報`,
    description: `${career.title}の募集要項。${career.employmentType}・${career.location}・${career.workStyle}`,
  };
}

export async function generateStaticParams() {
  return Object.keys(careersData).map((slug) => ({ slug }));
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const career = careersData[slug];

  if (!career) {
    notFound();
  }

  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-sm bg-white/20 text-white px-3 py-1 rounded">
              {career.employmentType}
            </span>
            <span className="text-sm text-white/80">{career.location}</span>
            <span className="text-sm text-white/80">{career.workStyle}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{career.title}</h1>
        </div>
      </section>

      {/* 募集内容 */}
      <section className="section">
        <div className="container-narrow">
          {/* 概要 */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-text mb-4">募集概要</h2>
            <p className="text-text-light whitespace-pre-line leading-relaxed">
              {career.overview}
            </p>
          </div>

          {/* 業務内容 */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-text mb-4">業務内容</h2>
            <ul className="space-y-2">
              {career.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-text-light">
                  <span className="text-primary mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 必須要件 */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-text mb-4">必須要件</h2>
            <ul className="space-y-2">
              {career.requirements.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-text-light">
                  <span className="text-primary mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 歓迎要件 */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-text mb-4">歓迎要件</h2>
            <ul className="space-y-2">
              {career.preferred.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-text-light">
                  <span className="text-primary mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 条件 */}
          <div className="mb-12 bg-gray-bg rounded-lg p-6">
            <h2 className="text-xl font-bold text-text mb-4">募集条件</h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm text-text-light">雇用形態</dt>
                <dd className="font-medium text-text">{career.employmentType}</dd>
              </div>
              <div>
                <dt className="text-sm text-text-light">勤務地</dt>
                <dd className="font-medium text-text">{career.location}</dd>
              </div>
              <div>
                <dt className="text-sm text-text-light">稼働時間</dt>
                <dd className="font-medium text-text">{career.workStyle}</dd>
              </div>
              <div>
                <dt className="text-sm text-text-light">報酬</dt>
                <dd className="font-medium text-text">{career.compensation}</dd>
              </div>
            </dl>
          </div>

          {/* メリット */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-text mb-4">この仕事の魅力</h2>
            <ul className="space-y-2">
              {career.benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-text-light">
                  <span className="text-green-500 mt-1">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 応募ボタン */}
          <div className="text-center pt-8 border-t border-gray-border">
            <p className="text-text-light mb-6">
              ご興味をお持ちいただけましたら、お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                応募・お問い合わせ
              </Link>
              <Link href="/careers" className="btn-outline">
                一覧に戻る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
