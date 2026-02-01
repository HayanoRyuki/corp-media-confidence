"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { name: "事業内容", href: "/service" },
  { name: "プロダクト", href: "/product-list" },
  { name: "業種別", href: "/industry" },
  { name: "会社概要", href: "/company" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-border">
      <nav className="container-wide flex items-center justify-between py-4">
        {/* ロゴ */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="Media-Confidence"
            width={200}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* デスクトップナビゲーション */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-text hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA ボタン */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/resources/overview" className="btn-outline text-sm py-2 px-4">
            資料請求
          </Link>
          <Link href="/trial" className="btn-primary text-sm py-2 px-4">
            無料で始める
          </Link>
        </div>

        {/* モバイルメニューボタン */}
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">メニューを開く</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* モバイルメニュー */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-border">
          <div className="container-wide py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-text hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link href="/resources/overview" className="btn-outline w-full text-center block">
                資料請求
              </Link>
              <Link href="/trial" className="btn-primary w-full text-center block">
                無料で始める
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
