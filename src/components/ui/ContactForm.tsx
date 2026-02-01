"use client";

import { useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: フォーム送信処理（Formspree等と連携）
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-text mb-2">送信完了</h2>
        <p className="text-text-light">
          お問い合わせありがとうございます。<br />
          担当者より2営業日以内にご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 会社名 */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-text mb-2">
          会社名 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          className="w-full px-4 py-3 border border-gray-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="株式会社メディア・コンフィデンス"
        />
      </div>

      {/* 氏名 */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border border-gray-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="山田 太郎"
        />
      </div>

      {/* メール */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="example@company.com"
        />
      </div>

      {/* 電話番号 */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
          電話番号
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 border border-gray-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="03-1234-5678"
        />
      </div>

      {/* お問い合わせ種別 */}
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-text mb-2">
          お問い合わせ種別 <span className="text-red-500">*</span>
        </label>
        <select
          id="type"
          name="type"
          required
          className="w-full px-4 py-3 border border-gray-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">選択してください</option>
          <option value="service">サービスについて</option>
          <option value="consultation">導入のご相談</option>
          <option value="partnership">パートナーシップ</option>
          <option value="other">その他</option>
        </select>
      </div>

      {/* お問い合わせ内容 */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
          お問い合わせ内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full px-4 py-3 border border-gray-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          placeholder="お問い合わせ内容をご記入ください"
        />
      </div>

      {/* プライバシーポリシー同意 */}
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          required
          className="mt-1"
        />
        <label htmlFor="privacy" className="text-sm text-text-light">
          <a href="/privacy" className="text-primary hover:underline">プライバシーポリシー</a>に同意する
        </label>
      </div>

      {/* 送信ボタン */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}
