import Link from "next/link";
import { lifecycleLabels, products } from "@/config/products";

const product = products.find((item) => item.slug === "aims-engine");

const escalationStages = [
  {
    stage: "Stage 1",
    name: "LightMlp（12 → 16 → 4 / 無停止軽量修復）",
    summary:
      "12次元のリアルタイム観測特徴量（ヘルスチェック異常、5xx比率、DBエラー比率、SQLite WALサイズ比、期限切れログ、孤立一時ファイル、メモリ/ディスク圧迫率等）から瞬時に障害種別を分類し、サービス無停止で修復します。",
    actions: "NoOp / FlushWalCheckpoint / CleanExpiredLogsAndTemp / LightCombinedCleanup",
  },
  {
    stage: "Stage 2",
    name: "HighMlp（24 → 32 → 24 → 4 / 多層複合修復）",
    summary:
      "Stage 1で未解消時または複合障害時に自動昇格。エラー増減勾配、WAL増加率、領域別エラー分布、静的アセット欠損指数を含む24次元特徴量をLayerNorm＋GELU近似活性化で推論します。",
    actions: "RestartAppService / DatabaseOptimizeAndBackup / SyncStandaloneAssets / ServiceAndProxyRecovery",
  },
  {
    stage: "Stage 3",
    name: "DqhmCleanRebuild（360-DQHM 連想記憶によるクリーン再構築）",
    summary:
      "コード破損・設定破壊・ファイル改ざん時に昇格。正常稼働構造を360次元複素位相ベクトルとして黄金記憶（golden-dqhm.json）に保持し、O(1)位相共鳴類似度で破損層を特定。基幹DBを整合確認・退避保護した上でOSクリーンインストール方式で再構築します。",
    actions: "Golden Memory 位相共鳴照合 ＋ 基幹DB退避保護 ＋ 構造クリーン再展開 ＋ 追記型3層分離ログ",
  },
  {
    stage: "Stage 4",
    name: "SafeHaltWithReport（基幹DB保護・安全停止＆診断報告）",
    summary:
      "ハードウェア・物理ストレージ等の安全限界超過時は無理な修復を行わず、基幹データベースと黄金状態を保護して安全停止（終了コード 3）し、詳細診断レポート（safe-halt-report.json）を出力します。",
    actions: "SafeHaltWithReport（非LLM標準運用で完結 / 任意外部拡張スロット対応）",
  },
];

const safetyPillars = [
  {
    title: "三権分立の独立審査機構（IndependentJudge）",
    body: "修復を設計する推論AIと正当性を審査する判定器を完全分離。最上位窓口（Dispatcher）が判定基準JSON（aims-criteria）を別経路で共有し、実行前設計審査（禁止操作・認証/スキーマ等の保護パス変更の即時拒否）を行います。",
  },
  {
    title: "機械的 Post-phase Gate ＆ サーキットブレーカー",
    body: "処置ごとに SQLite PRAGMA integrity_check = ok、foreign_key_check 違反 0 件、主要業務テーブル行数非減少、保護対象 SHA-256 一致、/api/health HTTP 200 を機械検証。各段階最大2回試行・1日最大6回実行で暴走ループを遮断します。",
  },
  {
    title: "隔離自己修復機構（selfheal-vault）",
    body: "業務監視（5分周期）とは完全に独立した15分周期タイマーで動作。隔離保管庫にバイナリ・初期重み・判定基準・黄金記憶のSHA-256マニフェストを保持し、エンジン自身の破損時も基幹DBに触れず自動原状復帰します。",
  },
  {
    title: "長期放置・閉域網に耐えるゼロ依存単一バイナリ",
    body: "Cargo.toml の外部クレート依存 0（Pure Rust std のみ）・外部LLM API依存 0。数年単位の運用におけるAPI廃止・キー失効・従量課金暴走・サプライチェーン脆弱性リスクを構造的に排除しています。",
  },
];

const testEvidence = [
  "tests::test_healthy_no_op — 正常稼働時の即時 NoOp 終了検証",
  "tests::test_stage1_light_mlp_repair — Stage 1 軽量MLPによる無停止WAL/ログ修復検証",
  "tests::test_escalation_stage1_to_stage2_high_mlp — Stage 1 から Stage 2 HighMlp への自動昇格検証",
  "tests::test_escalation_to_stage3_dqhm_clean_reinstall — Stage 3 360-DQHM クリーン再構築と基幹DB保護検証",
  "tests::test_stage4_safe_halt_when_unrecoverable — 回復不能異常時の安全停止・診断レポート出力検証",
  "tests::test_judge_rejects_forbidden_action_and_protected_path — IndependentJudge による禁止操作・保護パス拒否検証",
  "tests::test_dqhm_recall_immutability_and_append_only_logs — 黄金記憶の想起不変性と3層追記ログ検証",
  "tests::test_isolated_self_healing — selfheal-vault によるエンジン自身の隔離自己修復検証",
  "tests::test_sha256_nist_vector — Pure Rust 実装 SHA-256 の NIST 標準テストベクタ適合検証",
];

export default function AimsEnginePage() {
  if (!product) return null;
  const repoHref = product.storeUrl ?? "https://github.com/NEXSPACE-y/congenial-engine";

  return (
    <div className="w-full py-12 md:py-20">
      <section className="mb-14 border-l-4 border-sky-500 pl-4 md:pl-6">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-bold text-sky-700">{lifecycleLabels[product.lifecycle]}</p>
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">{product.name}</h1>
        <p className="mt-3 text-lg font-semibold text-slate-600">
          外部LLMにも外部クレートにも依存せず、単一バイナリで業務システムを自律保守・自己再生する。
        </p>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-500">{product.subtitle}</p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
          {product.description}
        </p>
        <p className="mt-4 text-sm font-bold text-slate-500">
          技術基盤: Pure Rust（stdのみ・外部クレート依存 0）単一バイナリ（約550 KB） ｜ 外部LLM / 外部API依存 0 ｜ 仕様識別子: AIMS-SPEC-002
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
            href="/consultation?product=aims-engine"
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
        <h2 className="text-2xl font-bold text-slate-950">4段階自律エスカレーション構造</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
          異常検知時、無停止の軽量処置から 360-DQHM 連想記憶を用いた OS クリーンインストール方式の構造再構築まで、各段階最大 2 回試行で段階的に昇格します。
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {escalationStages.map((item) => (
            <article key={item.stage} className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-sky-700">{item.stage}</p>
              <h3 className="mt-2 text-lg font-bold text-slate-950">{item.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.summary}</p>
              <p className="mt-4 border-t border-slate-100 pt-3 font-mono text-xs text-slate-500">
                Action: {item.actions}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-950">三権分立の安全審査 ＆ 隔離自己修復アーキテクチャ</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {safetyPillars.map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-950">汎用 CLI インタフェース</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
          特定の業務テーブル名やURLをハードコードせず、外部パラメータと判定基準JSON（aims-criteria.json）によって任意のWebアプリケーション・エッジサーバー・閉域網システムへ適用できます。
        </p>
        <div className="mt-5 overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 p-5 font-mono text-xs leading-relaxed text-slate-200">
          <pre>{`# 正常稼働状態の黄金構造記憶 (360-DQHM) と隔離自己修復 Vault を初期化
aims-engine init-golden --app-root /opt/app --data-dir /var/lib/app --criteria /opt/app/config/aims-criteria.json

# 現在のヘルス状態・DB整合性・360-DQHM類似度・実行履歴をJSON表示
aims-engine status

# 定期監視および段階エスカレーション自律修復を実行 (5分周期タイマー推奨)
aims-engine check-and-heal

# エンジン自身のバイナリ・重み・基準・記憶を隔離VaultとSHA-256照合し自己修復 (15分周期タイマー推奨)
aims-engine self-heal`}</pre>
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <article className="rounded-lg border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-950">検証実績・リリースバイナリ情報</h2>
          <dl className="mt-4 space-y-3 text-sm text-slate-700">
            <div>
              <dt className="text-xs font-bold uppercase text-slate-500">配布ファイル / サイズ</dt>
              <dd className="mt-1 font-mono text-xs">releases/aims-engine.exe（562,688 bytes / Windows x86_64 MSVC）</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase text-slate-500">SHA-256</dt>
              <dd className="mt-1 break-all font-mono text-xs text-slate-900">
                964b1a93d2112cc1346cbe1d281f4fb74fc8145174990206426355908d740331
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase text-slate-500">外部クレート依存 / ビルド保護</dt>
              <dd className="mt-1 text-xs leading-relaxed text-slate-600">
                外部クレート依存数 0（Pure Rust stdのみ） / strip=symbols, LTO有効, COFFシンボル 0
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase text-slate-500">単体・結合テスト（9 / 9 Passed）</dt>
              <dd className="mt-2">
                <ul className="space-y-1 font-mono text-[11px] text-slate-600">
                  {testEvidence.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </article>

        <article className="rounded-lg border border-slate-200 bg-slate-50 p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-950">OEM 提供・エンタープライズ導入ポリシー</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            360-DQHM 位相共鳴照合、段階昇格ニューラル分類器、三権分立型独立判定機構、および隔離自己修復機構のRustソースコードは知的財産保護のため非公開（クローズドソース）としています。公開リポジトリではSHA-256検証済みバイナリ・公開仕様書（AIMS_SPEC_v0.2_PUBLIC.md）・検証証跡を評価目的で確認いただけます。
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Linux（systemd連携・本番サーバー）向けカスタムビルド、対象業務システムごとの判定基準JSON設計、エッジサーバー・閉域網システムへのOEM組み込みライセンスについては導入相談よりお問い合わせください。
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
              href="/technology/360-dqhm"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-900 transition-colors hover:border-sky-500 hover:text-sky-700"
            >
              関連技術: 360-DQHM
            </Link>
            <Link
              href="/consultation?product=aims-engine"
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
