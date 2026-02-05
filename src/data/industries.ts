// 業種データ（HubSpotのsite-structure.jsonから移行）
// 新プロダクト構造: 7プロダクト（部署別）、各プロダクトに3タブ（社外向け・顧客向け・社内向け）
export const industries = [
  {
    slug: "consulting",
    name: "コンサルティング会社",
    desc: "戦略コンサル、業務コンサル、専門コンサル",
    recommendedProducts: ["marketing", "sales", "education"],
  },
  {
    slug: "training",
    name: "研修・教育会社",
    desc: "企業研修、スクール運営、eラーニング",
    recommendedProducts: ["education", "cs", "marketing"],
  },
  {
    slug: "saas",
    name: "SaaS企業",
    desc: "B2B SaaS、サブスクリプションサービス",
    recommendedProducts: ["cs", "marketing", "design"],
  },
  {
    slug: "agency",
    name: "代理店・エージェンシー",
    desc: "広告代理店、人材紹介、保険代理店",
    recommendedProducts: ["sales", "marketing", "design"],
  },
  {
    slug: "professional",
    name: "士業・専門サービス",
    desc: "会計事務所、法律事務所、設計事務所",
    recommendedProducts: ["marketing", "hr", "planning"],
  },
] as const;

// 型定義
export type Industry = (typeof industries)[number];

// ヘルパー関数
export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
