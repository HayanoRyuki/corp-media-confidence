import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "コラム",
  description: "AI活用、業務効率化、マーケティングに関する専門知識やノウハウをお届けします",
};

// サンプルデータ（将来的にCMSから取得）
const columns = [
  {
    slug: "ai-implementation-guide",
    title: "AI導入を成功させるための5つのステップ",
    date: "2026-01-28",
    category: "AI活用",
    author: "早野 龍輝",
    thumbnail: "/images/column-1.jpg",
  },
  {
    slug: "marketing-automation-best-practices",
    title: "マーケティングオートメーション導入のベストプラクティス",
    date: "2026-01-20",
    category: "マーケティング",
    author: "早野 龍輝",
    thumbnail: "/images/column-2.jpg",
  },
  {
    slug: "customer-support-efficiency",
    title: "カスタマーサポートの効率化とAI活用事例",
    date: "2026-01-12",
    category: "業務効率化",
    author: "早野 龍輝",
    thumbnail: "/images/column-3.jpg",
  },
];

export default function ColumnListPage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide">
          <p className="text-primary-light font-medium mb-2">COLUMN</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">コラム</h1>
          <p className="text-white/80 mt-4">
            AI活用、業務効率化に関する専門知識やノウハウをお届けします
          </p>
        </div>
      </section>

      {/* コラム一覧 */}
      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {columns.map((item) => (
              <Link
                key={item.slug}
                href={`/column/${item.slug}`}
                className="group block bg-white border border-gray-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-200" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <time className="text-xs text-text-light">{item.date}</time>
                  </div>
                  <h2 className="font-bold text-text group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-text-light mt-3">{item.author}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
