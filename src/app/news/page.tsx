import type { Metadata } from "next";
import Link from "next/link";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "ニュース",
  description: "株式会社メディア・コンフィデンスからのお知らせ、プレスリリース",
  openGraph: {
    title: "ニュース",
    description: "株式会社メディア・コンフィデンスからのお知らせ、プレスリリース",
  },
};

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
