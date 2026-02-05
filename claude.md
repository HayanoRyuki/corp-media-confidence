# Claude メモ

## コミット・プッシュ用コマンド

⚠️ **注意: gitコマンドはCoworkではなくローカルターミナルで実行すること**
（Coworkから実行するとロックファイルが残りやすい）

### 基本コマンド（ローカルターミナルで実行）
```bash
cd ~/Local\ Sites/media-confidence/corporate && git add -A && git commit -m "変更内容を簡潔に" && git push
```

### プロジェクトパス
```
/Users/hayanoryuki12/Local Sites/media-confidence/corporate
```

### よく使うコミットメッセージ例
```bash
# 機能追加
git commit -m "Add: 新機能の説明"

# 修正
git commit -m "Fix: バグ修正の説明"

# 更新
git commit -m "Update: 更新内容の説明"

# SEO関連
git commit -m "Add sitemap.ts and robots.ts for SEO"

# GTM関連
git commit -m "Update GTM settings"

# コンテンツ追加
git commit -m "Add: 新しいニュース記事"
```

---

## デプロイ手順

1. コミット・プッシュ後、ローカルターミナルで実行：
```bash
git push origin main
```

2. Vercel連携により自動デプロイ（数分で反映）

### リンク
- GitHub: https://github.com/HayanoRyuki/corp-media-confidence
- Vercel: https://vercel.com/hayano-ryukis-projects/corp-media-confidence/deployments

---

## トラブルシューティング

### git lockエラーが出た場合
```
fatal: cannot lock ref 'HEAD': Unable to create '.../.git/HEAD.lock': File exists.
```
このエラーが出たら、lockファイルを削除：
```bash
rm /Users/hayanoryuki12/Local\ Sites/media-confidence/corporate/.git/HEAD.lock
```

---

## 2026-02-01 作業履歴

### GTM設定
- コンテナ: GTM-M9GXZXKR
- GA4測定ID: G-8GQVXP8CE0
- タグ: Googleタグ（Initialization - All Pages）

### SEO設定
- `src/app/sitemap.ts` 作成
- `src/app/robots.ts` 作成
- Search Console: URLプレフィックスで登録済み
