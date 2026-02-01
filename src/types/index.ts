// コンテンツタイプの型定義

// 方向性
export type DirectionSlug = "external" | "customer" | "internal";

// 部署
export type DepartmentSlug =
  | "marketing"
  | "design"
  | "sales"
  | "cs"
  | "hr"
  | "education"
  | "planning";

// プロダクト（AI基盤）- 投稿タイプ
export interface Product {
  // 基本情報
  name: string;
  slug: string;
  rank: number;
  department: string;
  direction: string;
  summary: string;
  featured: boolean;

  // 詳細コンテンツ
  lead: string;
  about: string;

  // 対象部署・目的
  targetDepartment: string;
  targetPurpose: string;

  // 応用例・拡張例
  extensions: string[];

  // 業界別の例
  industryExamples: {
    title: string;
    description: string;
  }[];

  // 提供の流れ
  flow: {
    title: string;
    description: string;
  }[];

  // 提供内容
  deliverables: {
    title: string;
    description: string;
  }[];

  // FAQ
  faq: {
    question: string;
    answer: string;
  }[];

  // 関連プロダクト
  relatedProducts: string[];
}

// ニュース
export interface News {
  title: string;
  slug: string;
  date: string;
  category: "press-release" | "announcement" | "media";
  content: string;
  thumbnail?: string;
}

// コラム
export interface Column {
  title: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  content: string;
  thumbnail: string;
  relatedProducts?: string[];
}

// セミナー
export interface Seminar {
  title: string;
  slug: string;
  eventDate: string;
  eventType: "webinar" | "offline" | "hybrid";
  status: "open" | "full" | "ended" | "archived";
  description: string;
  content: string;
  thumbnail: string;
  speakers: string[];
  registrationUrl?: string;
  archiveUrl?: string;
}

// パートナー
export interface Partner {
  name: string;
  slug: string;
  logo: string;
  category: "implementation" | "technology" | "sales";
  description: string;
  url: string;
  order: number;
}

// メンバー
export interface Member {
  name: string;
  slug: string;
  position: string;
  photo: string;
  bio: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
  };
  order: number;
}

// 採用情報
export interface Career {
  title: string;
  slug: string;
  employmentType: "fulltime" | "contract" | "intern";
  department: string;
  location: string;
  status: "open" | "closed";
  description: string;
  requirements: string;
  preferredSkills?: string;
  benefits: string;
  salary?: string;
  applicationUrl: string;
  publishedAt: string;
}

// 導入実績
export interface CaseStudy {
  title: string;
  slug: string;
  clientName: string;
  clientLogo?: string;
  industry: string;
  companySize: string;
  products: string[];
  challenge: string;
  solution: string;
  results: string;
  testimonial?: string;
  thumbnail: string;
  publishedAt: string;
}
