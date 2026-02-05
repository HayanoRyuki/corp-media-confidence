import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* 背景画像 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-pc.webp"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-secondary/70" />
      </div>

      <div className="container-wide">
        <div className="max-w-3xl">
          {/* メインコピー */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            その業務、AI基盤で
            <br />
            <span className="text-primary-light">「すぐ」</span>変えてみせます。
          </h1>

          {/* サブコピー */}
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            部署ごとに選べる最適なAI運用基盤を提供。
            <br />
            業種別の導入パターンをもとに、ベストな使い方を探してみませんか。
          </p>

          {/* CTA ボタン */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/trial" className="btn-primary text-lg py-4 px-8">
              無料で始める
            </Link>
            <Link href="/product-list" className="btn-outline border-white text-white hover:bg-white hover:text-secondary">
              プロダクトについて
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
