import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="container-narrow text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-text mb-4">
          ページが見つかりません
        </h2>
        <p className="text-text-light mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="btn-primary">
            トップページへ
          </Link>
          <Link href="/contact" className="btn-outline">
            お問い合わせ
          </Link>
        </div>
      </div>
    </section>
  );
}
