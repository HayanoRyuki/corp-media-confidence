import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "資料一覧",
  description: "AIシステム基盤の概要資料、導入事例集、チェックリストなどをダウンロードいただけます",
  openGraph: {
    title: "資料一覧",
    description: "AIシステム基盤の概要資料、導入事例集、チェックリストなどをダウンロードいただけます",
  },
};

// 資料データ
const resources = [
  {
    slug: "overview",
    title: "管理付きAIシステム基盤 概要資料",
    description: "メディア・コンフィデンスが提供するAWS×AIを軸とした「管理付きAIシステム基盤」の全体像をまとめた資料です。",
    category: "製品/サービス紹介資料",
    image: "/images/resource_general.png",
  },
  {
    slug: "case-studies",
    title: "業務に組み込まれるAI基盤 活用事例集",
    description: "マーケティング、採用、CSなどの業務で、AIシステム基盤がどのように使われているかを紹介します。",
    category: "導入事例集",
    image: "/images/resource_casebook.png",
  },
  {
    slug: "checklist",
    title: "AI基盤導入・運用 検討チェックリスト",
    description: "AIを「試す」のではなく「使い続ける」ために、事前に整理しておきたい検討ポイントをまとめています。",
    category: "チェックリスト",
    image: "/images/resource_checklist.png",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide">
          <p className="text-primary-light font-medium mb-2">RESOURCES</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">資料一覧</h1>
          <p className="text-white/80 mt-4">
            AIシステム基盤の概要資料、導入事例集などをダウンロードいただけます
          </p>
        </div>
      </section>

      {/* 資料一覧 */}
      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((item) => (
              <div
                key={item.slug}
                className="bg-white border border-gray-border rounded-lg overflow-hidden"
              >
                <div className="aspect-video relative bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <h2 className="font-bold text-text mt-3 mb-2">{item.title}</h2>
                  <p className="text-sm text-text-light mb-4">{item.description}</p>
                  <Link
                    href={`/resources/${item.slug}`}
                    className="btn-secondary w-full text-center text-sm"
                  >
                    ダウンロード
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
