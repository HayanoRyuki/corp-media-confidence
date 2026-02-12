import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "チーム",
  description: "株式会社メディア・コンフィデンスのチームメンバー紹介",
  openGraph: {
    title: "チーム",
    description: "株式会社メディア・コンフィデンスのチームメンバー紹介",
  },
};

// サンプルデータ（将来的にCMSから取得）
const members = [
  {
    name: "早野 龍輝",
    position: "代表取締役",
    bio: "2015年にメディア・コンフィデンスを創業。AIとテクノロジーを活用した業務効率化を推進。",
  },
  // 他のメンバーは追加時に
];

export default function TeamPage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide">
          <p className="text-primary-light font-medium mb-2">TEAM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">チーム</h1>
          <p className="text-white/80 mt-4">
            メディア・コンフィデンスを支えるメンバー
          </p>
        </div>
      </section>

      {/* メンバー一覧 */}
      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, i) => (
              <div
                key={i}
                className="bg-white border border-gray-border rounded-lg overflow-hidden"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary mb-1">{member.position}</p>
                  <h2 className="text-xl font-bold text-text mb-3">{member.name}</h2>
                  <p className="text-sm text-text-light">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
