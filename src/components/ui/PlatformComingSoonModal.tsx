"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function PlatformComingSoonButton({ children, className }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {children}
      </button>

      {/* モーダル */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-black/50" />

          {/* モーダル本体 */}
          <div
            className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 閉じるボタン */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            {/* コンテンツ */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-text mb-4">
                開発中です
              </h3>
              <p className="text-text-light mb-6">
                MCメディアプラットフォームは現在、開発中です。
                <br />
                ご興味をお持ちの方はお問い合わせください。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  お問い合わせ
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="btn-outline"
                >
                  閉じる
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
