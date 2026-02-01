import type { Metadata } from "next";
import Link from "next/link";
import { products, departments, directions } from "@/data/products";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "プロダクト一覧",
  description: "7部署×3方向で選べる21種類のAIプロダクト。御社の課題に最適なソリューションをお選びください。",
};

export default function ProductListPage() {
  // プロダクトをマトリクス形式で整理
  const matrix = departments.map((dept) => ({
    department: dept,
    products: directions.map((dir) => {
      const key = `${dept.id}-${dir.id}`;
      return Object.values(products).find(
        (p) => p.department === dept.id && p.direction === dir.id
      );
    }),
  }));

  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide text-center">
          <p className="text-primary-light font-medium mb-2">PRODUCTS</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">プロダクト一覧</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            メディア・コンフィデンスは、<span className="text-white font-medium">3つの方向性</span>と
            <span className="text-white font-medium">7つの部署領域</span>を掛け合わせた
            21種類のAI基盤プロダクトを提供しています。
          </p>
        </div>
      </section>

      {/* 方向性の説明 */}
      <section className="py-12 bg-gray-bg">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6">
            {directions.map((dir) => (
              <div key={dir.id} className="bg-white rounded-lg p-6">
                <p className="text-sm text-primary font-medium uppercase mb-1">{dir.nameEn}</p>
                <h3 className="text-lg font-bold text-text mb-2">{dir.name}</h3>
                <p className="text-sm text-text-light">{dir.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* プロダクトマトリクス */}
      <section className="section">
        <div className="container-wide">
          {/* デスクトップ: テーブル表示 */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-gray-bg border border-gray-border"></th>
                  {directions.map((dir) => (
                    <th key={dir.id} className="p-4 text-center bg-gray-bg border border-gray-border">
                      <span className="text-sm text-primary font-medium uppercase">{dir.nameEn}</span>
                      <br />
                      <span className="font-bold text-text">{dir.name}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix.map((row) => (
                  <tr key={row.department.id}>
                    <td className="p-4 bg-gray-bg border border-gray-border">
                      <span className="text-sm text-primary font-medium uppercase">{row.department.nameEn}</span>
                      <br />
                      <span className="font-bold text-text">{row.department.name}</span>
                    </td>
                    {row.products.map((product, i) => (
                      <td key={i} className="p-4 border border-gray-border">
                        {product ? (
                          <Link
                            href={`/products/${product.slug}`}
                            className="block hover:bg-gray-50 -m-4 p-4 transition-colors"
                          >
                            <span className="font-medium text-primary hover:text-primary-dark">
                              {product.name}
                            </span>
                            <p className="text-sm text-text-light mt-1 line-clamp-2">
                              {product.summary}
                            </p>
                          </Link>
                        ) : (
                          <span className="text-text-light">-</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* モバイル: カード表示 */}
          <div className="lg:hidden space-y-8">
            {matrix.map((row) => (
              <div key={row.department.id}>
                <h3 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                  <span className="text-sm text-primary uppercase">{row.department.nameEn}</span>
                  <span>{row.department.name}</span>
                </h3>
                <div className="grid gap-4">
                  {row.products.filter(Boolean).map((product) => (
                    <Link
                      key={product!.slug}
                      href={`/products/${product!.slug}`}
                      className="block bg-white border border-gray-border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                          {directions.find((d) => d.id === product!.direction)?.name}
                        </span>
                      </div>
                      <h4 className="font-medium text-primary">{product!.name}</h4>
                      <p className="text-sm text-text-light mt-1">{product!.summary}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
