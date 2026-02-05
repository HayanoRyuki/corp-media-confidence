"use client";

import { useState } from "react";
import type { Product, TabContent } from "@/data/products";

type Direction = {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  desc: string;
};

type Props = {
  product: Product;
  directions: readonly Direction[];
};

export default function ProductTabs({ product, directions }: Props) {
  const [activeTab, setActiveTab] = useState<"external" | "customer" | "internal">("external");

  const currentTab = product.tabs.find((tab) => tab.direction === activeTab);

  if (!currentTab) return null;

  // タブの色を方向性ごとに設定
  const tabColors = {
    external: {
      active: "bg-primary text-white",
      inactive: "bg-primary/10 text-primary hover:bg-primary/20",
    },
    customer: {
      active: "bg-secondary text-white",
      inactive: "bg-secondary/10 text-secondary hover:bg-secondary/20",
    },
    internal: {
      active: "bg-emerald-600 text-white",
      inactive: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
    },
  };

  return (
    <>
      {/* タブナビゲーション */}
      <section className="bg-gray-bg py-6 sticky top-0 z-10">
        <div className="container-wide">
          <div className="grid grid-cols-3 gap-3">
            {product.tabs.map((tab) => {
              const direction = directions.find((d) => d.id === tab.direction);
              const isActive = activeTab === tab.direction;
              const colors = tabColors[tab.direction];
              return (
                <button
                  key={tab.direction}
                  onClick={() => setActiveTab(tab.direction)}
                  className={`py-4 px-4 rounded-lg font-medium transition-all text-center ${
                    isActive ? colors.active : colors.inactive
                  }`}
                >
                  <span className={`block text-xs mb-1 ${isActive ? "text-white/80" : ""}`}>
                    {direction?.name}
                  </span>
                  <span className="block text-sm md:text-base">{tab.tabName}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* タブコンテンツ */}
      <TabContent content={currentTab} />
    </>
  );
}

function TabContent({ content }: { content: TabContent }) {
  return (
    <>
      {/* リード文 */}
      <section className="section">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-text mb-6">{content.tabName}について</h2>
          <p className="text-text-light text-lg leading-relaxed max-w-4xl">
            {content.about}
          </p>
        </div>
      </section>

      {/* 対象・目的 */}
      <section className="section bg-gray-bg">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">
                  ✓
                </span>
                対象部署・担当者
              </h3>
              <p className="text-text-light">{content.targetDepartment}</p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">
                  ✓
                </span>
                導入目的
              </h3>
              <p className="text-text-light">{content.targetPurpose}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 応用・拡張例 */}
      {content.extensions.length > 0 && (
        <section className="section">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-text mb-8">応用・拡張例</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {content.extensions.map((ext, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 bg-gray-bg rounded-lg"
                >
                  <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-text">{ext}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 業界別の活用例 */}
      {content.industryExamples.length > 0 && (
        <section className="section bg-gray-bg">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-text mb-8">業界別の活用例</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {content.industryExamples.map((example, i) => (
                <div key={i} className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-text mb-3">{example.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{example.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 提供の流れ */}
      {content.flow.length > 0 && (
        <section className="section">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-text mb-8">提供の流れ</h2>
            <div className="relative">
              {/* 線（デスクトップ） */}
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-border" />

              <div className="grid md:grid-cols-3 gap-8">
                {content.flow.map((step, i) => (
                  <div key={i} className="relative">
                    <div className="flex md:flex-col items-start md:items-center gap-4 md:text-center">
                      <span className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-xl font-bold shrink-0 relative z-10">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-bold text-text mb-2">{step.title}</h3>
                        <p className="text-text-light text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 提供内容 */}
      {content.deliverables.length > 0 && (
        <section className="section bg-secondary text-white">
          <div className="container-wide">
            <h2 className="text-2xl font-bold mb-8">提供内容</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {content.deliverables.map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <h3 className="font-bold mb-3">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {content.faq.length > 0 && (
        <section className="section">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-text mb-8">よくあるご質問</h2>
            <div className="space-y-4 max-w-3xl">
              {content.faq.map((item, i) => (
                <details
                  key={i}
                  className="group bg-gray-bg rounded-lg"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-text">
                    <span className="flex items-center gap-3">
                      <span className="text-primary font-bold">Q.</span>
                      {item.question}
                    </span>
                    <span className="text-primary group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="flex gap-3 pt-4 border-t border-gray-border">
                      <span className="text-secondary font-bold">A.</span>
                      <p className="text-text-light">{item.answer}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
