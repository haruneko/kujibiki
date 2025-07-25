# 🎰 くじ引きアプリ

React + TypeScript + Viteで作成されたシンプルで美しいくじ引きアプリです。

## ✨ 機能

- 🎲 確率ベースのくじ引き
- 🎨 モダンで美しいUI
- 📱 レスポンシブデザイン
- ⚡ 高速な開発環境
- 🚀 GitHub Pagesでの自動デプロイ

## 🎯 くじの内容

- **大当たり**: 10%
- **中当たり**: 20%
- **小当たり**: 30%
- **はずれ**: 40%

## 🚀 セットアップ

### 必要な環境

- Node.js 18以上
- npm

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## 🌐 デプロイ

このアプリはGitHub Actionsを使用して自動的にGitHub Pagesにデプロイされます。

### 手動デプロイ

```bash
npm run deploy
```

## 🛠️ 技術スタック

- **React 19** - UIライブラリ
- **TypeScript** - 型安全性
- **Vite** - 高速なビルドツール
- **GitHub Actions** - CI/CD
- **GitHub Pages** - ホスティング

## 📁 プロジェクト構造

```
kujibiki/
├── src/
│   ├── App.tsx          # メインアプリケーション
│   ├── App.css          # スタイル
│   └── main.tsx         # エントリーポイント
├── .github/workflows/   # GitHub Actions
├── public/              # 静的ファイル
└── package.json         # 依存関係
```

## 🎨 カスタマイズ

くじの内容や確率を変更するには、`src/App.tsx`の`items`配列を編集してください：

```typescript
const [items, setItems] = useState<LotteryItem[]>([
  { id: 1, name: "大当たり", probability: 0.1 },
  { id: 2, name: "中当たり", probability: 0.2 },
  // 新しい項目を追加
]);
```

## 備考

Cursor がほとんど書きました。
