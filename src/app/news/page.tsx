import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ニュース",
  description: "株式会社メディア・コンフィデンスからのお知らせ、プレスリリース、メディア掲載情報",
};

// サンプルデータ（将来的にCMSから取得）
const news = [
  {
    slug: "2026-02-01-corporate-site-renewal",
    title: "コーポレートサイトをリニューアルしました",
    date: "2026-02-01",
    category: "お知らせ",
  },
  {
    slug: "2026-01-15-new-product-launch",
    title: "新プロダクト「マーケティング分析AI」をリリースしました",
    date: "2026-01-15",
    category: "プレスリリース",
  },
  {
    slug: "2026-01-10-media-coverage",
    title: "日経新聞にAI活用事例として掲載されました",
    date: "2026-01-10",
    category: "メディア掲載",
  },
];

export default function NewsListPage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide">
          <p className="text-primary-light font-medium mb-2">NEWS</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">ニュース</h1>
        </div>
      </section>

      {/* ニュース一覧 */}
      <section className="section">
        <div className="container-narrow">
          <div className="space-y-6">
            {news.map((item) => (
              <Link
                key={item.slug}
                href={`/news/${item.slug}`}
                className="block border-b border-gray-border pb-6 hover:opacity-80 transition-opacity"
              >
                <div className="flex items-center gap-4 mb-2">
                  <time className="text-sm text-text-light">{item.date}</time>
                  <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                <h2 className="text-lg font-medium text-text hover:text-primary transition-colors">
                  {item.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
