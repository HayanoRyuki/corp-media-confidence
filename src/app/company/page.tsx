import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "会社概要",
  description: "株式会社メディア・コンフィデンスの会社概要。AIを一時的な「試行」で終わらせないために、業務や事業の中に深く根を張り、使い続けられる「仕組み」を提供しています。",
  openGraph: {
    title: "会社概要",
    description: "株式会社メディア・コンフィデンスの会社概要。AIを一時的な「試行」で終わらせないために、業務や事業の中に深く根を張り、使い続けられる「仕組み」を提供しています。",
  },
};

const companyInfo = {
  name: "株式会社メディア・コンフィデンス",
  nameEn: "Media-Confidence Inc.",
  address: "〒150-0043 東京都渋谷区道玄坂1丁目10番8号 渋谷道玄坂東急ビル2F-C",
  established: "2015年9月14日",
  representative: "代表取締役 早野 龍輝",
  business: [
    "AIシステム基盤の設計・開発・提供",
    "クラウド（AWS）を用いた業務システム開発",
    "Webサービス・プロダクトの企画・運用",
  ],
  bank: "みずほ銀行 銀座中央支店",
};

export default function CompanyPage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide">
          <p className="text-primary-light font-medium mb-2">COMPANY</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">会社概要</h1>
        </div>
      </section>

      {/* 会社情報 */}
      <section className="section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 左: 理念 */}
            <div>
              <h2 className="text-2xl font-bold text-text mb-6">私たちについて</h2>
              <p className="text-text-light leading-relaxed mb-6">
                メディア・コンフィデンスは、AIを一時的な「試行」で終わらせないために、
                業務や事業の中に深く根を張り、使い続けられる「仕組み」を提供しています。
              </p>
              <p className="text-text-light leading-relaxed mb-6">
                私たちが提供する基盤は、すべて実証済みのコードを中心に自社設計されています。
                理想論ではなく、実際に現場で「動くこと」を前提とした、確かな土台をお約束します。
              </p>

              <h3 className="text-xl font-bold text-text mt-10 mb-4">事業の背景</h3>
              <p className="text-text-light leading-relaxed mb-4">
                AIを業務に活用したいというニーズが広まる一方で、多くの現場では
                「導入はしたが、使いこなせていない」「属人化して運用が止まってしまった」
                という課題に直面しています。
              </p>
              <p className="text-text-light leading-relaxed">
                私たちは、AIの性能そのもの以上に、それを支える「運用と改善のサイクル」こそが
                ビジネスの成果を決めると考えています。複雑なものをシンプルに整理し、
                誰もが迷わず使い続けられる状態へ。それが、私たちがAIシステム基盤にこだわり続ける理由です。
              </p>
            </div>

            {/* 右: 会社情報テーブル */}
            <div>
              <div className="bg-gray-bg rounded-lg p-8">
                <h2 className="text-xl font-bold text-text mb-6">会社情報</h2>
                <dl className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="text-text-light text-sm w-32 shrink-0">会社名</dt>
                    <dd className="text-text font-medium">
                      {companyInfo.name}
                      <br />
                      <span className="text-sm text-text-light">{companyInfo.nameEn}</span>
                    </dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="text-text-light text-sm w-32 shrink-0">所在地</dt>
                    <dd className="text-text">{companyInfo.address}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="text-text-light text-sm w-32 shrink-0">設立</dt>
                    <dd className="text-text">{companyInfo.established}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="text-text-light text-sm w-32 shrink-0">代表者</dt>
                    <dd className="text-text">{companyInfo.representative}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="text-text-light text-sm w-32 shrink-0">事業内容</dt>
                    <dd className="text-text">
                      <ul className="space-y-1">
                        {companyInfo.business.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="text-text-light text-sm w-32 shrink-0">取引銀行</dt>
                    <dd className="text-text">{companyInfo.bank}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
