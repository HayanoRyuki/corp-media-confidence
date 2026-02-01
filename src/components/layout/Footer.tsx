import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  products: {
    title: "プロダクト",
    links: [
      { name: "プロダクト一覧", href: "/product-list" },
      { name: "業種別ソリューション", href: "/industry" },
    ],
  },
  company: {
    title: "会社情報",
    links: [
      { name: "会社概要", href: "/company" },
      { name: "チーム", href: "/team" },
      { name: "採用情報", href: "/careers" },
      { name: "お知らせ", href: "/news" },
    ],
  },
  resources: {
    title: "リソース",
    links: [
      { name: "導入実績", href: "/case-studies" },
      { name: "コラム", href: "/column" },
      { name: "セミナー", href: "/seminar" },
      { name: "資料一覧", href: "/resources" },
    ],
  },
  legal: {
    title: "法務",
    links: [
      { name: "利用規約", href: "/terms" },
      { name: "プライバシーポリシー", href: "/privacy" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container-wide py-12">
        {/* フッターリンク */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* コンタクト */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-white/20 pt-8">
          <div>
            <Image
              src="/images/logo-white.png"
              alt="Media-Confidence"
              width={200}
              height={40}
              className="h-8 w-auto mb-3"
            />
            <p className="font-bold text-lg">株式会社メディア・コンフィデンス</p>
            <p className="text-white/80 text-sm mt-1">
              〒150-0043 東京都渋谷区道玄坂1丁目10番8号 渋谷道玄坂東急ビル2F-C
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-secondary text-sm py-2 px-4">
              お問い合わせ
            </Link>
            <Link href="/request" className="btn-primary text-sm py-2 px-4">
              資料請求
            </Link>
          </div>
        </div>

        {/* コピーライト */}
        <div className="text-center text-white/60 text-sm mt-8">
          © {new Date().getFullYear()} Media-Confidence Inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
