import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FileText, Users, Video, Plus } from "lucide-react";
import { PlatformComingSoonButton } from "@/components/ui/PlatformComingSoonModal";

export const metadata: Metadata = {
  title: "無料トライアル | MCメディアプラットフォーム",
  description: "MCメディアプラットフォームは、CMS・社員肖像管理・セミナー配信管理を無料でご利用いただける法人向けツールです。",
};

const features = [
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: "CMS",
    description: "ブログ・お知らせ・コラムなど、Webサイトのコンテンツ管理を簡単に。AI支援で記事作成も効率化できます。",
    comingSoon: false,
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "社員肖像管理",
    description: "社員の写真・プロフィールを一元管理。採用サイトやチームページの更新がスムーズになります。",
    comingSoon: false,
  },
  {
    icon: <Video className="w-8 h-8 text-primary" />,
    title: "セミナー配信管理",
    description: "セミナー・ウェビナーの告知から申込管理、アーカイブ配信まで一括で管理できます。",
    comingSoon: false,
  },
  {
    icon: <Plus className="w-8 h-8 text-gray-400" />,
    title: "Coming Soon",
    description: "新機能を準備中です。ご期待ください。",
    comingSoon: true,
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
          <p className="text-primary-light font-medium mb-4">MC MEDIA PLATFORM</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            無料トライアル
          </h1>
          <p className="text-lg text-white/80 mb-4 max-w-2xl mx-auto">
            「さくっとAIシステムを試してみたい」そんな声をもとに、
            <br className="hidden md:block" />
            "試しやすい"業務範囲で無料ツールを提供しています。利用は原則無料。
          </p>
          <p className="text-xl text-white font-medium mb-8 max-w-2xl mx-auto">
            無料で使ってわかる、業務AIの価値。ぜひ、試してください。
          </p>
          <PlatformComingSoonButton className="btn-primary text-lg py-4 px-12 inline-block">
            無料で始める
          </PlatformComingSoonButton>
        </div>
      </section>

      {/* 機能紹介 */}
      <section className="section">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">FEATURES</p>
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
              現場に即役立つ機能を無料提供
            </h2>
            <p className="text-text-light">
              法人のメディア運営をトータルでサポートします。
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`bg-white border rounded-lg p-8 text-center transition-shadow ${
                  feature.comingSoon
                    ? "border-dashed border-gray-300 bg-gray-50"
                    : "border-gray-border hover:shadow-lg"
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  feature.comingSoon ? "bg-gray-100" : "bg-primary/10"
                }`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${
                  feature.comingSoon ? "text-gray-400" : "text-text"
                }`}>{feature.title}</h3>
                <p className={feature.comingSoon ? "text-gray-400" : "text-text-light"}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 無料利用の条件 */}
      <section className="section bg-gray-bg">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-text text-center mb-8">
            無料利用について
          </h2>
          <div className="bg-white rounded-lg p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-text-light">法人登録が必要です</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-text-light">基本機能は無料でご利用いただけます</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-text-light">一部の拡張機能・大容量利用は有料プランをご用意</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-text-light">クレジットカード登録不要で始められます</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 利用の流れ */}
      <section className="section">
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
                  <h3 className="font-bold text-text mb-2">法人登録</h3>
                  <p className="text-text-light">会社名・メールアドレスで簡単登録。審査後、すぐにご利用いただけます。</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-text mb-2">機能を選択</h3>
                  <p className="text-text-light">CMS・社員肖像管理・セミナー配信管理から、必要な機能を有効化します。</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-text mb-2">すぐに利用開始</h3>
                  <p className="text-text-light">直感的なUIで、すぐにコンテンツ管理を始められます。</p>
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
            法人登録は数分で完了。クレジットカードは不要です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PlatformComingSoonButton className="btn-primary text-lg py-4 px-8">
              無料で始める
            </PlatformComingSoonButton>
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
