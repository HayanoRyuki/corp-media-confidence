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
      active: "bg-primary text-white border-primary",
      inactive: "bg-white text-primary border-primary/30 hover:border-primary/50",
    },
    customer: {
      active: "bg-secondary text-white border-secondary",
      inactive: "bg-white text-secondary border-secondary/30 hover:border-secondary/50",
    },
    internal: {
      active: "bg-emerald-600 text-white border-emerald-600",
      inactive: "bg-white text-emerald-700 border-emerald-300 hover:border-emerald-400",
    },
  };

  return (
    <div>
      {/* タブナビゲーション */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {product.tabs.map((tab) => {
          const direction = directions.find((d) => d.id === tab.direction);
          const isActive = activeTab === tab.direction;
          const colors = tabColors[tab.direction];
          return (
            <button
              key={tab.direction}
              onClick={() => setActiveTab(tab.direction)}
              className={`py-3 px-3 rounded-lg font-medium transition-all text-center border-2 ${
                isActive ? colors.active : colors.inactive
              }`}
            >
              <span className={`block text-xs mb-0.5 ${isActive ? "text-white/80" : ""}`}>
                {direction?.name}
              </span>
              <span className="block text-sm">{tab.tabName}</span>
            </button>
          );
        })}
      </div>

      {/* タブコンテンツ */}
      <TabContentView content={currentTab} />
    </div>
  );
}

function TabContentView({ content }: { content: TabContent }) {
  return (
    <div className="space-y-8">
      {/* リード文 */}
      <div>
        <h2 className="text-xl font-bold text-text mb-4">{content.tabName}について</h2>
        <p className="text-text-light leading-relaxed">
          {content.about}
        </p>
      </div>

      {/* 対象・目的 */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-gray-bg rounded-lg p-5">
          <h3 className="text-sm font-bold text-text mb-2 flex items-center gap-2">
            <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs">
              ✓
            </span>
            対象部署・担当者
          </h3>
          <p className="text-text-light text-sm">{content.targetDepartment}</p>
        </div>
        <div className="bg-gray-bg rounded-lg p-5">
          <h3 className="text-sm font-bold text-text mb-2 flex items-center gap-2">
            <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs">
              ✓
            </span>
            導入目的
          </h3>
          <p className="text-text-light text-sm">{content.targetPurpose}</p>
        </div>
      </div>

      {/* 応用・拡張例 */}
      {content.extensions.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-text mb-4">応用・拡張例</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {content.extensions.map((ext, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-gray-bg rounded-lg"
              >
                <span className="w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                  {i + 1}
                </span>
                <p className="text-text text-sm">{ext}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 業界別の活用例 */}
      {content.industryExamples.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-text mb-4">業界別の活用例</h3>
          <div className="space-y-3">
            {content.industryExamples.map((example, i) => (
              <div key={i} className="bg-gray-bg rounded-lg p-4">
                <h4 className="font-bold text-text text-sm mb-2">{example.title}</h4>
                <p className="text-text-light text-sm leading-relaxed">{example.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 提供の流れ */}
      {content.flow.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-text mb-4">提供の流れ</h3>
          <div className="space-y-4">
            {content.flow.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-bold text-text mb-1">{step.title}</h4>
                  <p className="text-text-light text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 提供内容詳細 */}
      {content.deliverables.length > 0 && (
        <div className="bg-secondary rounded-lg p-6 text-white">
          <h3 className="text-lg font-bold mb-4">提供内容詳細</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {content.deliverables.map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h4 className="font-bold mb-2 text-sm">{item.title}</h4>
                <p className="text-white/80 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
