import Link from "next/link";

const PLATFORM_URL = process.env.NEXT_PUBLIC_PLATFORM_URL || "https://platform.media-confidence.com";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-bg to-white py-20 md:py-32">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          {/* メインコピー */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text leading-tight mb-6">
            その業務、AI基盤で
            <br />
            <span className="text-primary">「すぐ」</span>変えてみせます。
          </h1>

          {/* サブコピー */}
          <p className="text-lg md:text-xl text-text-light mb-8 leading-relaxed">
            7部署×3方向で選べる21種類のAIプロダクト。
            <br />
            業種別の導入パターンもあります。
            <br />
            まずは、御社に合う使い方を探してみませんか。
          </p>

          {/* CTA ボタン */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/product-list" className="btn-outline">
              プロダクトについて
            </Link>
            <a
              href={PLATFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              無料で始める
            </a>
          </div>
        </div>
      </div>

      {/* 背景装飾（オプション） */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
