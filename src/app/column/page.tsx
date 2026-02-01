import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "コラム",
  description: "AI活用、業務効率化、マーケティングに関する専門知識やノウハウをお届けします",
};

export default function ColumnListPage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide">
          <p className="text-primary-light font-medium mb-2">COLUMN</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">コラム</h1>
          <p className="text-white/80 mt-4">
            AI活用、業務効率化に関する専門知識やノウハウをお届けします
          </p>
        </div>
      </section>

      {/* 準備中 */}
      <section className="section">
        <div className="container-wide">
          <div className="text-center py-16">
            <p className="text-text-light text-lg">準備中</p>
          </div>
        </div>
      </section>
    </>
  );
}
