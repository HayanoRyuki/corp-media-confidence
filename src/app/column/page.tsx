import type { Metadata } from "next";
import Link from "next/link";
import { columns } from "@/data/columns";

export const metadata: Metadata = {
  title: "コラム",
  description: "AI活用、業務効率化、マーケティングに関する専門知識やノウハウをお届けします",
};

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
        <div className="container-narrow">
          <div className="space-y-8">
            {columns.map((article) => (
              <Link
                key={article.slug}
                href={`/column/${article.slug}`}
                className="block border-b border-gray-border pb-8 hover:opacity-80 transition-opacity"
              >
                <div className="flex items-center gap-4 mb-3">
                  <time className="text-sm text-text-light">{article.date}</time>
                  <span className="text-sm text-text-light">
                    {article.author}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-text hover:text-primary transition-colors mb-3">
                  {article.title}
                </h2>
                <p className="text-text-light leading-relaxed">
                  {article.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
