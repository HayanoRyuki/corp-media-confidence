import type { Metadata } from "next";
import Link from "next/link";
import { Monitor, Cpu, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "事業内容",
  description: "メディア・コンフィデンスの事業内容。無料ツール提供、AIシステム基盤開発、大型開発・PMO支援の3つの事業を展開しています。",
};

const services = [
  {
    icon: <Monitor className="w-12 h-12 text-primary" />,
    title: "無料ツール「MCメディアプラットフォーム」の提供",
    description: "AIを活用したコンテンツ制作・管理ツールを無料で提供。記事作成、SNS投稿、メルマガ配信など、マーケティング業務を効率化します。",
    features: [
      "AIによるコンテンツ自動生成",
      "複数チャネルへの一括配信",
      "効果測定・分析ダッシュボード",
      "チーム利用・権限管理",
    ],
    cta: {
      label: "無料で始める",
      href: "/trial",
    },
  },
  {
    icon: <Cpu className="w-12 h-12 text-primary" />,
    title: "AIシステム基盤の開発・提供",
    description: "企業の業務に深く根付くAIシステム基盤を開発・提供。7部署×3方向の21種類のプロダクトで、あらゆる業務課題に対応します。",
    features: [
      "マーケティング、営業、CS、採用など7部署対応",
      "社外向け・顧客向け・社内向けの3方向",
      "AWS基盤による高いセキュリティ",
      "導入から運用まで一貫サポート",
    ],
    cta: {
      label: "プロダクト一覧を見る",
      href: "/product-list",
    },
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "大型開発・PMO支援",
    description: "AI・DXプロジェクトの企画から実行まで、PMO（プロジェクトマネジメントオフィス）として支援。大規模開発の成功をリードします。",
    features: [
      "プロジェクト計画策定・進行管理",
      "ベンダーマネジメント・品質管理",
      "ステークホルダー調整",
      "リスク管理・課題解決支援",
    ],
    cta: {
      label: "お問い合わせ",
      href: "/contact",
    },
  },
];

export default function ServicePage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide text-center">
          <p className="text-primary-light font-medium mb-2">SERVICE</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">事業内容</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            AIを「試行」から「仕組み」へ。
            <br />
            3つの事業で、企業のAI活用を本気で変えていきます。
          </p>
        </div>
      </section>

      {/* サービス一覧 */}
      <section className="section">
        <div className="container-wide">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* コンテンツ */}
                <div className="flex-1">
                  <div className="mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold text-text mb-4">
                    {service.title}
                  </h2>
                  <p className="text-text-light mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-text-light">
                        <span className="text-primary mt-0.5">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.cta.href} className="btn-primary">
                    {service.cta.label}
                  </Link>
                </div>

                {/* ビジュアル（プレースホルダー） */}
                <div className="flex-1 w-full">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl aspect-video flex items-center justify-center">
                    <span className="text-6xl opacity-50">{service.icon}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container-wide text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            貴社の課題に合わせて、最適なサービス・プロダクトをご提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              お問い合わせ
            </Link>
            <Link href="/request" className="btn-outline border-white text-white hover:bg-white hover:text-secondary">
              資料請求
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
