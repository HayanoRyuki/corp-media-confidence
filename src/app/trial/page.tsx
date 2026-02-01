import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "無料で始める",
  description: "メディアプラットフォームに無料登録して、AIプロダクトをすぐにお試しいただけます。",
};

const PLATFORM_URL = process.env.NEXT_PUBLIC_PLATFORM_URL || "https://platform.media-confidence.com";

const features = [
  {
    title: "すぐに使える",
    description: "登録後すぐにAIプロダクトをお試しいただけます。セットアップ不要で、すぐに業務効率化を体験できます。",
  },
  {
    title: "21種類のAIプロダクト",
    description: "7部署×3方向の21種類のAIプロダクトから、御社の課題に最適なものをお選びいただけます。",
  },
  {
    title: "専門家によるサポート",
    description: "導入から運用まで、AIの専門家がサポート。不明点はいつでもご相談いただけます。",
  },
];

export default function TrialPage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-pc.webp"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>

        <div className="container-wide text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            無料で始める
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            メディアプラットフォームに無料登録して、
            <br />
            AIプロダクトをすぐにお試しください。
          </p>
          <a
            href={PLATFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg py-4 px-12 inline-block"
          >
            無料登録はこちら
          </a>
        </div>
      </section>

      {/* 特徴 */}
      <section className="section">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-text text-center mb-12">
            メディアプラットフォームの特徴
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-text mb-3">{feature.title}</h3>
                <p className="text-text-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 利用の流れ */}
      <section className="section bg-gray-bg">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-text text-center mb-12">
            ご利用の流れ
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-text mb-2">無料登録</h3>
                  <p className="text-text-light">メールアドレスで簡単登録。クレジットカードは不要です。</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-text mb-2">プロダクト選択</h3>
                  <p className="text-text-light">21種類のAIプロダクトから、御社の課題に合ったものを選択します。</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-text mb-2">すぐに利用開始</h3>
                  <p className="text-text-light">セットアップ不要で、すぐにAIプロダクトをお試しいただけます。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-secondary text-white text-center">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            今すぐ無料で始めましょう
          </h2>
          <p className="text-white/80 mb-8">
            登録は1分で完了。クレジットカードは不要です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PLATFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg py-4 px-8"
            >
              無料登録はこちら
            </a>
            <Link
              href="/contact"
              className="btn-outline border-white text-white hover:bg-white hover:text-secondary"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
