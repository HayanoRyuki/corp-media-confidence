"use client";

import { useState } from "react";

const resources = [
  { id: "overview", name: "管理付きAIシステム基盤 概要資料" },
  { id: "case-studies", name: "業務に組み込まれるAI基盤 活用事例集" },
  { id: "checklist", name: "AI基盤導入・運用 検討チェックリスト" },
];

export function RequestForm() {
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
        <h2 className="text-2xl font-bold text-text mb-2">資料をお送りしました</h2>
        <p className="text-text-light">
          ご入力いただいたメールアドレスに資料をお送りしました。<br />
          届かない場合はお手数ですがお問い合わせください。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 資料選択 */}
      <div>
        <label className="block text-sm font-medium text-text mb-3">
          ご希望の資料 <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {resources.map((resource) => (
            <label key={resource.id} className="flex items-center gap-3 p-4 border border-gray-border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="checkbox"
                name="resources"
                value={resource.id}
                className="w-4 h-4 text-primary"
              />
              <span className="text-text">{resource.name}</span>
            </label>
          ))}
        </div>
      </div>

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

      {/* 部署・役職 */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="department" className="block text-sm font-medium text-text mb-2">
            部署
          </label>
          <input
            type="text"
            id="department"
            name="department"
            className="w-full px-4 py-3 border border-gray-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="マーケティング部"
          />
        </div>
        <div>
          <label htmlFor="position" className="block text-sm font-medium text-text mb-2">
            役職
          </label>
          <input
            type="text"
            id="position"
            name="position"
            className="w-full px-4 py-3 border border-gray-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="マネージャー"
          />
        </div>
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
        {isSubmitting ? "送信中..." : "資料をダウンロードする"}
      </button>
    </form>
  );
}
