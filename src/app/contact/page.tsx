import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "株式会社メディア・コンフィデンスへのお問い合わせはこちらから。サービスに関するご質問、導入のご相談など、お気軽にお問い合わせください。",
  openGraph: {
    title: "お問い合わせ",
    description: "株式会社メディア・コンフィデンスへのお問い合わせはこちらから。サービスに関するご質問、導入のご相談など、お気軽にお問い合わせください。",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-wide">
          <p className="text-primary-light font-medium mb-2">CONTACT</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">お問い合わせ</h1>
          <p className="text-white/80 mt-4">
            サービスに関するご質問、導入のご相談など、お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* フォーム */}
      <section className="section">
        <div className="container-narrow">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
