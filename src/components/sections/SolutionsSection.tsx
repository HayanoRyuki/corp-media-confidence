import Link from "next/link";
import Image from "next/image";
import { departments } from "@/data/products";

const departmentImages: Record<string, string> = {
  marketing: "/images/genre1.jpg",
  design: "/images/genre2.jpg",
  sales: "/images/genre3.jpg",
  cs: "/images/genre8.jpg",
  hr: "/images/genre4.jpg",
  education: "/images/genre5.jpg",
};

export function SolutionsSection() {
  return (
    <section className="section bg-white">
      <div className="container-wide">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">SOLUTIONS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
            部署や目的別に、最適なソリューションを提供。
          </h2>
        </div>

        {/* 部署カード */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.slice(0, 6).map((dept) => (
            <div
              key={dept.id}
              className="bg-white border border-gray-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={departmentImages[dept.id] || "/images/genre1.jpg"}
                  alt={dept.name}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 380px"
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-xs text-white/80 font-medium uppercase mb-1">
                    {dept.nameEn}
                  </p>
                  <h3 className="text-xl font-bold text-white">{dept.name}</h3>
                </div>
              </div>
              <div className="p-4">
              <p className="text-text-light text-sm mb-4">
                {getDepartmentDescription(dept.id)}
              </p>
              <div className="flex gap-2 justify-center">
                <Link
                  href={`/products/${dept.slug}-external`}
                  className="text-sm bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark transition-colors"
                >
                  社外向け
                </Link>
                <Link
                  href={`/products/${dept.slug}-customer`}
                  className="text-sm bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark transition-colors"
                >
                  顧客向け
                </Link>
                <Link
                  href={`/products/${dept.slug}-internal`}
                  className="text-sm bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark transition-colors"
                >
                  社内向け
                </Link>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* 全プロダクトを見るリンク */}
        <div className="text-center mt-10">
          <Link
            href="/product-list"
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
          >
            全21プロダクトを見る
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function getDepartmentDescription(deptId: string): string {
  const descriptions: Record<string, string> = {
    marketing: "「なんとなく」の施策から、データに基づく確信へ。集客・分析・改善をAIが支援。",
    design: "デザインの属人化を解消し、品質とスピードを両立。Webサイト・LP・バナー制作を効率化。",
    sales: "営業広報から商談支援まで。AIで戦略的な営業体制を構築。",
    cs: "FAQ、ヘルプ記事など一般公開のサポートコンテンツを自動生成・更新。",
    hr: "「選考のブレ」をなくし、理想の採用を仕組み化。広報からマッチ度評価まで。",
    education: "「教える」を仕組み化し、学びの質を最大化。研修・Eラーニングを効率化。",
    planning: "「バラバラな数字」を「経営の資産」へ。データ管理と意思決定を支援。",
  };
  return descriptions[deptId] || "";
}
