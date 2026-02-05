import Link from "next/link";
import Image from "next/image";
import { departments, products } from "@/data/products";

const departmentImages: Record<string, string> = {
  marketing: "/images/genre1.jpg",
  design: "/images/genre2.jpg",
  sales: "/images/genre3.jpg",
  cs: "/images/genre8.jpg",
  hr: "/images/genre4.jpg",
  education: "/images/genre5.jpg",
  planning: "/images/genre6.jpg",
};

export function SolutionsSection() {
  return (
    <section className="section bg-white">
      <div className="container-wide">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">SOLUTIONS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
            部署や目的別に、最適なソリューションを提供。
          </h2>
        </div>

        {/* プロダクトカード */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group bg-white border border-gray-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={departmentImages[product.department] || "/images/genre1.jpg"}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 380px"
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-xs text-white/80 font-medium uppercase mb-1">
                    {product.departmentName}
                  </p>
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-text-light text-sm mb-4 line-clamp-2">
                  {product.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.tabs.map((tab) => (
                    <span
                      key={tab.direction}
                      className="text-xs bg-gray-bg text-text-light px-2 py-1 rounded"
                    >
                      {tab.tabName}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 全プロダクトを見るリンク */}
        <div className="text-center mt-10">
          <Link
            href="/product-list"
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
          >
            全7プロダクトを見る
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
