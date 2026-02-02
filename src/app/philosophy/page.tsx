import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Philosophy | 企業理念",
  description: "株式会社メディア・コンフィデンスの企業理念。「善く創る、善く伝える。」出版制作から始まり、メディア、動画、そしてAIへ。扱う技術は変わっても、この姿勢は創業から一貫しています。",
};

const historyData = [
  {
    year: "2015年",
    title: "創業",
    description: "出版制作・編集会社として創業。代表の早野は大手出版社で4年間に36冊のビジネス書を手がけた編集者出身。「複雑な情報を整理し、わかりやすく届ける」という編集者のスキルを軸に事業をスタート。",
  },
  {
    year: "2016〜2018年",
    title: "オウンドメディア事業",
    description: "オウンドメディアの企画・制作・運用支援が成長。出版社で培った編集力を活かし、企業のコンテンツマーケティングを支援。",
  },
  {
    year: "2019〜2022年",
    title: "動画マーケティング・Eラーニング",
    description: "「これから5年は動画マーケティングが流行する」と読み、動画領域へ参入。モーショングラフィックス、動画広告、セミナー動画へと軸足をシフト。Eラーニングによる動画教育も展開。",
  },
  {
    year: "2023〜2025年5月",
    title: "BtoBウェブマーケティング支援",
    description: "BtoBを中心としたウェブマーケティング支援が事業の主軸に。",
  },
  {
    year: "2025年6月〜現在",
    title: "AIシステム基盤事業（第二創業）",
    description: "生成AIの急速な進化を受け、第二創業へ。プログラミング未経験ながら、生成AIを活用した学習・プロトタイプ開発を自社で実践。出版制作とAI開発に共通するプロジェクトマネジメント、コンセプトメイキングのスキルを活かし、AIシステム基盤事業への本格転換を決意。",
  },
];

export default function PhilosophyPage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide">
          <p className="text-primary-light font-medium mb-2">PHILOSOPHY</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">企業理念</h1>
        </div>
      </section>

      {/* 企業理念 */}
      <section className="section">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-8">
              善く創る、善く伝える。
            </h2>
            <p className="text-lg text-text-light leading-relaxed mb-6">
              私たちは、ものづくりと情報発信の両方に真摯に向き合います。
            </p>
            <p className="text-text-light leading-relaxed mb-4">
              「善く創る」とは、手を抜かず、使い続けられる仕組みを設計すること。
            </p>
            <p className="text-text-light leading-relaxed mb-6">
              「善く伝える」とは、複雑なものをシンプルに整理し、届けること。
            </p>
            <p className="text-text-light leading-relaxed">
              出版制作から始まり、メディア、動画、そしてAIへ。
              <br />
              扱う技術は変わっても、この姿勢は創業から一貫しています。
            </p>
          </div>
        </div>
      </section>

      {/* 大切にしている価値観 */}
      <section className="section bg-gray-bg">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-bold text-text text-center mb-12">
            大切にしている価値観
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* 静かなインフラ */}
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold text-text mb-4">静かなインフラ</h3>
              <p className="text-text-light leading-relaxed mb-4">
                電気や水道のように、普段は意識しないけれど当たり前のように動き続ける。
                AIも、そういう存在になれると信じています。
              </p>
              <p className="text-text-light leading-relaxed mb-4">
                派手な新機能を追いかけるより、<span className="font-bold text-text">ちゃんと動く、長く使える</span>こと。
                今日導入した仕組みが、明日も、来年も、変わらず機能し続けること。
              </p>
              <p className="text-text-light leading-relaxed">
                派手さはなくとも、着実に、確かに機能し続ける。
                それが私たちの目指す「静かなインフラ」です。
              </p>
            </div>

            {/* 自他共栄 */}
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold text-text mb-4">自他共栄</h3>
              <p className="text-text-light leading-relaxed mb-4">
                相手だけが得をするのでもなく、こちらだけが得をするのでもない。
                双方が成長し、双方に実績が残る関係。
              </p>
              <p className="text-text-light leading-relaxed mb-4">
                下請けではなく、パートナーとしての関係性を大切にしています。
              </p>
              <p className="text-text-light leading-relaxed">
                互いに成長できる仕事を、一緒にやっていきたい。
                それが11年の経験から辿り着いた、私たちの仕事の原則です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ヒストリー */}
      <section className="section">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-bold text-text text-center mb-12">
            ヒストリー
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {historyData.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="shrink-0 w-32">
                    <span className="text-primary font-bold">{item.year}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-text mb-2">{item.title}</h3>
                    <p className="text-text-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 一貫した姿勢 */}
      <section className="section bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              一貫した姿勢
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              出版制作から動画、そしてAIへ。
            </p>
            <p className="text-white font-bold text-lg leading-relaxed mb-6">
              扱う技術は変わっても、一貫しているのは
              <br />
              「複雑なものをシンプルに整理し、使い続けられる仕組みをつくる」
              <br />
              という姿勢。
            </p>
            <p className="text-gray-300 leading-relaxed">
              自分が夢中でつくったものを、人に届ける。
              <br />
              その原体験が、今も私たちの仕事の根底にあります。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
