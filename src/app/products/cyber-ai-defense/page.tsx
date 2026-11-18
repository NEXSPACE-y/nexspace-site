import Image from "next/image";
import Link from "next/link";
import { lifecycleLabels, products } from "@/config/products";

const product = products.find((item) => item.slug === "cyber-ai-defense");

const coreCapabilities = [
  {
    title: "完全ローカル非言語AI 2段連携エンジン",
    body: "処理AI（教師なし Isolation Forest）がプロセス・TCP/UDP接続・静的構造から異常度スコアをリアルタイム算出し、判定AI（Jev型 MLP＋決定論的キルチェーン相関）が3段階リスク判定および7種類のマルウェアファミリー分類を実行します。",
  },
  {
    title: "境界・拡張子に頼らない深層フォレンジック",
    body: "通信トポロジ監視に加え、PE32/PE64/ELFバイナリ構造検査（拡張子偽装 T1036、中空実行セクション T1027.002、WX/パッカー）、大容量ファイルの先頭＋末尾オーバーレイ走査、難読化・シェルコード断片検出を行います。",
  },
  {
    title: "自律防御・隔離金庫・SHA-256 監査証跡",
    body: "悪性検知時に関連非重要プロセスをOS重要領域保護ルール付きで停止し、隔離金庫（Quarantine Vault）へ自動退避（誤検知時はワンクリック復元）。全操作を直前レコードのSHA-256ハッシュで連結する排他ロック付き監査ログに記録します。",
  },
  {
    title: "プライバシー保護学習 ＆ 自動精度ロールバック",
    body: "ユーザー名・ホーム経路・秘密鍵・パスワード管理・ロックファイルを学習対象から完全除外。日次バッチ学習時に評価精度が閾値（85.0%）を下回った場合は直前の安定モデルへ自動ロールバックします。",
  },
  {
    title: "脆弱性・ツールチェーン監査 ＆ PC健康診断",
    body: "Rust / TypeScript 開発・運用環境の静的脆弱性監査と S〜D グレードの総合セキュリティ診断、ワンクリック改善提案、企業提出用監査レポート（Markdown / JSON）出力を提供します。",
  },
];

const challengeResults = [
  {
    level: "Level 0",
    scenario: "シャドウコピー削除＋暗号化脅迫テキスト",
    family: "ランサムウェア型 (100.0%)",
    score: "100 / 100",
    mitre: "T1490, T1486",
  },
  {
    level: "Level 1",
    scenario: "LSASSメモリダンプ＋ブラウザ/ウォレット窃取",
    family: "情報窃取・スパイウェア型 (93.1%)",
    score: "100 / 100",
    mitre: "T1003, T1555",
  },
  {
    level: "Level 2",
    scenario: "難読化スクリプト＋NOP断片＋AMSI/Defender無力化",
    family: "ダウンローダー・ドロッパー型 (100.0%)",
    score: "100 / 100",
    mitre: "T1105, T1059.001, T1562, T1027",
  },
  {
    level: "Level 3",
    scenario: ".pdf拡張子偽装＋WXパッカー・中空セクション付きPE64",
    family: "トロイ・バックドア型 (99.6%)",
    score: "100 / 100",
    mitre: "T1036, T1027.002, T1055, T1071",
  },
  {
    level: "Level 4",
    scenario: "大容量末尾オーバーレイ隠蔽 横展開ワーム",
    family: "ワーム・横展開型 (98.0%)",
    score: "100 / 100",
    mitre: "T1021, T1570, T1071",
  },
];

const screenshots = [
  {
    src: "/img/cyber-ai-defense/01-overview.png",
    title: "概要ダッシュボード",
    caption: "常時監視ステータス、AI脅威判定、隔離件数、環境セキュリティ診断スコア（S〜D）、SHA-256監査証明を一画面で把握。",
  },
  {
    src: "/img/cyber-ai-defense/02-monitor.png",
    title: "監視・2段AI即時判定（Isolation Forest × Jev型MLP）",
    caption: "プロセス・ネットワーク接続のリアルタイム観測と、学習精度閾値ガード・自動ロールバック設定。",
  },
  {
    src: "/img/cyber-ai-defense/03-forensics.png",
    title: "深層マルウェア解析・照合",
    caption: "PE/ELF構造・エントロピー・MITRE ATT&CK指標・7種別マルウェアファミリー判定とClamAV/YARA連携検査。",
  },
  {
    src: "/img/cyber-ai-defense/04-advisor.png",
    title: "脆弱性・環境改善アドバイザ",
    caption: "言語/依存パッケージ脆弱性・ソースコード監査・利用環境の優先度付きセキュリティ改善提案。",
  },
];

export default function CyberAiDefensePage() {
  if (!product) return null;
  const repoHref = product.storeUrl ?? "https://github.com/NEXSPACE-y/-AI-Public";

  return (
    <div className="w-full py-12 md:py-20">
      <section className="mb-14 border-l-4 border-sky-500 pl-4 md:pl-6">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-bold text-sky-700">{lifecycleLabels[product.lifecycle]}</p>
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">{product.name}</h1>
        <p className="mt-3 text-lg font-semibold text-slate-600">
          クラウドにも会話型LLMにも頼らず、完全ローカルで検知・判定・自律隔離する。
        </p>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-500">{product.subtitle}</p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
          {product.description}
        </p>
        <p className="mt-4 text-sm font-bold text-slate-500">
          技術基盤: Rust ネイティブバックエンド + Tauri v2 + React / TypeScript + ローカル非言語AI ｜ 初回対応OS: Windows 11 / 10（実機E2E検証済み）
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={repoHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-sky-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-sky-700"
          >
            GitHub Public Showcaseを見る
          </a>
          <Link
            href="/consultation?product=cyber-ai-defense"
            className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-slate-800"
          >
            法人導入・OEM相談
          </Link>
          <Link
            href="/products"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-bold text-slate-900 transition-colors hover:border-sky-500 hover:text-sky-700"
          >
            製品一覧
          </Link>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-950">システム設計・主要機能</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {coreCapabilities.map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-950">アプリケーション画面（Windows 実機稼働）</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {screenshots.map((shot) => (
            <figure key={shot.src} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="relative aspect-[1366/720] w-full bg-slate-100">
                <Image src={shot.src} alt={shot.title} fill className="object-cover" />
              </div>
              <figcaption className="p-5">
                <p className="font-bold text-slate-950">{shot.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{shot.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-950">実機検証サマリ（自律隔離チャレンジ Level 0〜4）</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
          Rust全ライブラリ単体テスト（216 passed / 0 failed）およびTypeScript本番ビルド検証に加え、実機3秒周期フォルダ監視に対する5段階の非実行擬似脅威検体すべてで自動検知・7分類特定・隔離金庫退避・OS/アプリ通知発行を実証しています。
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase text-slate-600">
              <tr>
                <th className="px-4 py-3 font-bold">段階</th>
                <th className="px-4 py-3 font-bold">テストシナリオ（無害ダミー）</th>
                <th className="px-4 py-3 font-bold">予測マルウェア種別</th>
                <th className="px-4 py-3 font-bold">リスクスコア</th>
                <th className="px-4 py-3 font-bold">検出 MITRE ATT&amp;CK</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {challengeResults.map((row) => (
                <tr key={row.level}>
                  <td className="px-4 py-3 font-mono font-bold text-slate-950">{row.level}</td>
                  <td className="px-4 py-3">{row.scenario}</td>
                  <td className="px-4 py-3 font-semibold text-sky-700">{row.family}</td>
                  <td className="px-4 py-3 font-mono font-bold">{row.score}</td>
                  <td className="px-4 py-3 font-mono text-xs">{row.mitre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <article className="rounded-lg border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-950">公開パッケージ・バイナリ検証情報</h2>
          <dl className="mt-4 space-y-3 text-sm text-slate-700">
            <div>
              <dt className="text-xs font-bold uppercase text-slate-500">配布ファイル</dt>
              <dd className="mt-1 font-mono text-xs">releases/自律型サイバーAI防御システム.exe（5,953,536 bytes / 約5.68 MB）</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase text-slate-500">SHA-256</dt>
              <dd className="mt-1 break-all font-mono text-xs text-slate-900">
                7E4953F018F04D7E7C9F5DCA8F8AFA50B719B425B4F6A9DFB6F79651D0F47350
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase text-slate-500">公開ドキュメント・証跡</dt>
              <dd className="mt-1 text-xs leading-relaxed text-slate-600">
                アーキテクチャ＆セキュリティ白書（ARCHITECTURE_OVERVIEW.md）、単体テスト・E2E隔離証跡JSON、サニタイズ済みセキュリティ監査レポートサンプルを公開リポジトリに同梱。
              </dd>
            </div>
          </dl>
        </article>

        <article className="rounded-lg border border-slate-200 bg-slate-50 p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-950">知的財産保護・評価利用ポリシー</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            攻撃者によるホワイトボックス解析（閾値逆算・回避ペイロード生成）を防止するため、中核AIロジック・フォレンジック・自律隔離制御のソースコードは非公開（クローズドソース）としています。公開バイナリはCISO/CTO・情報システム部門・研究者による検証環境での評価目的にご利用いただけます。
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            法人環境への導入、OEM連携、機能カスタマイズ、NDAベースの監査については導入相談よりお問い合わせください。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={repoHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-sky-600 px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-sky-700"
            >
              GitHub リポジトリへ
            </a>
            <Link
              href="/consultation?product=cyber-ai-defense"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-900 transition-colors hover:border-sky-500 hover:text-sky-700"
            >
              法人・OEM相談
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
