import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container-wide text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          21種類のAIプロダクトから、御社に合う形を。
        </h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          部署×目的で選べる21種類のAIプロダクトと、業種別の導入ガイドをご用意しています。
          <br />
          いきなり導入を検討する必要はありません。まずは、どんな使い方があるのか見てみてください。
        </p>
        <div className="flex justify-center">
          <Link
            href="/resources/overview"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-secondary font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            資料請求
          </Link>
        </div>
      </div>
    </section>
  );
}
