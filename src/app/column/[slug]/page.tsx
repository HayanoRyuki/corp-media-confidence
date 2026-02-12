import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { columns, getColumnArticle, getAllColumnSlugs } from "@/data/columns";
import { CTASection } from "@/components/sections/CTASection";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllColumnSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getColumnArticle(slug);

  if (!article) {
    return { title: "記事が見つかりません" };
  }

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
    },
  };
}

// 簡易的なMarkdownパーサー
function parseMarkdown(content: string): string {
  return content
    // 見出し
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold text-text mt-8 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-text mt-10 mb-4">$1</h2>')
    // 太字
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // リスト
    .replace(/^- (.+)$/gm, '<li class="ml-4">$1</li>')
    // 連続するliをulで囲む
    .replace(/(<li class="ml-4">.+<\/li>\n?)+/g, '<ul class="list-disc list-inside space-y-2 my-4">$&</ul>')
    // 水平線
    .replace(/^---$/gm, '<hr class="my-8 border-gray-border" />')
    // 段落
    .replace(/^(?!<[hulo]|<hr)(.+)$/gm, '<p class="text-text-light leading-relaxed my-4">$1</p>')
    // 空行の処理
    .replace(/<p class="text-text-light leading-relaxed my-4"><\/p>/g, '');
}

export default async function ColumnDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getColumnArticle(slug);

  if (!article) {
    notFound();
  }

  const htmlContent = parseMarkdown(article.content);

  // 前後の記事を取得
  const currentIndex = columns.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex < columns.length - 1 ? columns[currentIndex + 1] : null;
  const nextArticle = currentIndex > 0 ? columns[currentIndex - 1] : null;

  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-narrow">
          {/* パンくず */}
          <nav className="text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white">ホーム</Link>
            <span className="mx-2">/</span>
            <Link href="/column" className="hover:text-white">コラム</Link>
            <span className="mx-2">/</span>
            <span className="text-white">記事</span>
          </nav>

          <div className="flex items-center gap-4 mb-4">
            <time className="text-sm text-white/60">{article.date}</time>
            <span className="text-sm text-white/60">
              {article.author}
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-white">{article.title}</h1>
        </div>
      </section>

      {/* 記事本文 */}
      <section className="section">
        <div className="container-narrow">
          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* 著者情報 */}
          <div className="mt-16 pt-8 border-t border-gray-border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary">
                  {article.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-bold text-text">{article.author}</p>
                <p className="text-sm text-text-light mt-1">
                  株式会社メディア・コンフィデンス 代表取締役
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 前後の記事 */}
      <section className="py-12 bg-gray-bg">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-6">
            {prevArticle && (
              <Link
                href={`/column/${prevArticle.slug}`}
                className="block bg-white rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <span className="text-sm text-text-light">← 前の記事</span>
                <p className="font-medium text-text mt-2">{prevArticle.title}</p>
              </Link>
            )}
            {nextArticle && (
              <Link
                href={`/column/${nextArticle.slug}`}
                className="block bg-white rounded-lg p-6 hover:shadow-md transition-shadow md:text-right"
              >
                <span className="text-sm text-text-light">次の記事 →</span>
                <p className="font-medium text-text mt-2">{nextArticle.title}</p>
              </Link>
            )}
          </div>

          <div className="text-center mt-8">
            <Link href="/column" className="btn-outline">
              コラム一覧に戻る
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
