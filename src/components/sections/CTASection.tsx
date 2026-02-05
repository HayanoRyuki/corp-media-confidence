import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container-wide text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          部署ごとに選べる、最適なAI運用基盤。
        </h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          業種別の導入パターンをもとに、ベストな使い方を探してみませんか。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/resources/overview"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
          >
            資料請求
          </Link>
          <Link
            href="/trial"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-secondary font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            無料で使ってみる
          </Link>
        </div>
      </div>
    </section>
  );
}
