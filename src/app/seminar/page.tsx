import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "セミナー・イベント",
  description: "AI活用、業務効率化に関するウェビナー・セミナー情報。オンラインで参加可能です。",
};

// サンプルデータ（将来的にCMSから取得）
const seminars = [
  {
    slug: "ai-basics-webinar-202601",
    title: "【オンライン】AI基盤導入の基礎知識セミナー",
    eventDate: "2026-01-15",
    eventType: "ウェビナー",
    status: "終了",
  },
  {
    slug: "marketing-ai-workshop-202601",
    title: "【ハンズオン】マーケティングAI活用ワークショップ",
    eventDate: "2026-01-22",
    eventType: "ウェビナー",
    status: "終了",
  },
  {
    slug: "cs-ai-case-study-202601",
    title: "カスタマーサポートAI導入事例紹介セミナー",
    eventDate: "2026-01-29",
    eventType: "ウェビナー",
    status: "終了",
  },
];

const statusColors: Record<string, string> = {
  "募集中": "bg-green-100 text-green-800",
  "満席": "bg-red-100 text-red-800",
  "終了": "bg-gray-100 text-gray-800",
  "アーカイブ公開中": "bg-blue-100 text-blue-800",
};

export default function SeminarListPage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide">
          <p className="text-primary-light font-medium mb-2">SEMINAR</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">セミナー・イベント</h1>
          <p className="text-white/80 mt-4">
            AI活用、業務効率化に関するウェビナー・セミナーを開催しています
          </p>
        </div>
      </section>

      {/* セミナー一覧 */}
      <section className="section">
        <div className="container-wide">
          <div className="space-y-6">
            {seminars.map((item) => (
              <div
                key={item.slug}
                className="block bg-white border border-gray-border rounded-lg p-6"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`text-xs px-3 py-1 rounded-full ${statusColors[item.status]}`}>
                    {item.status}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {item.eventType}
                  </span>
                  <time className="text-sm text-text-light">{item.eventDate}</time>
                </div>
                <h2 className="text-lg font-bold text-text">
                  {item.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
