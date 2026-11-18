export type ProductLifecycle =
  | "public_showcase"
  | "store_available"
  | "flagship_preparing"
  | "final_tuning"
  | "development"
  | "consultation"
  | "internal"
  | "service_ended"
  | "hidden";

export type ProductCategory =
  | "new_release"
  | "store_app"
  // App Store で配布する iOS アプリ。store_app (Microsoft Store の Windows
  // アプリ) と混ぜると、入手先も対応プラットフォームも違うものが同じ棚に
  // 並んでしまう。審査でサポートURLを辿られたときにも紛らわしい。
  | "ios_app"
  | "flagship"
  | "business"
  | "medical_welfare"
  | "ops"
  | "technology"
  | "archive";

export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  lifecycle: ProductLifecycle;
  shortDescription: string;
  description: string;
  href: string;
  ctaLabel: string;
  ctaHref: string;
  showOnHome: boolean;
  showOnProducts: boolean;
  priority: number;
  isNew?: boolean;
  aliases?: string[];
  storeUrl?: string;
  priceLabel?: string;
  caution?: string;
};

export const products: Product[] = [
  {
    slug: "cyber-ai-defense",
    name: "自律型サイバーAI防御システム",
    subtitle: "Autonomous Cyber AI Defense System",
    category: "new_release",
    lifecycle: "public_showcase",
    shortDescription:
      "外部LLMやクラウドAPIに依存せず、完全ローカル完結でOS監視・脅威検知・2段AI判定・自律隔離・SHA-256監査記録・脆弱性診断を実行する次世代サイバー防御デスクトップシステム。",
    description:
      "自律型サイバーAI防御システムは、Rustネイティブバックエンドとローカル非言語AI（処理AI: Isolation Forest × 判定AI: Jev型MLP＋キルチェーン相関）により、クラウド非依存でリアルタイムOS監視・深層バイナリフォレンジック・自律隔離・改ざん検知付き監査証跡を実現するデスクトップ防御基盤です。",
    href: "/products/cyber-ai-defense",
    ctaLabel: "詳細・検証情報を見る",
    ctaHref: "/products/cyber-ai-defense",
    showOnHome: true,
    showOnProducts: true,
    priority: -1,
    aliases: ["自律型サイバーAI防御システム", "サイバーAI防御", "-AI-Public", "Autonomous Cyber AI Defense"],
    storeUrl: "https://github.com/NEXSPACE-y/-AI-Public",
    priceLabel: "Public Showcase 公開中 / 法人導入・OEM相談対応",
  },
  {
    slug: "aims-engine",
    name: "AIMS v0.2（aims-engine）",
    subtitle: "Autonomous Self-Healing & Maintenance Engine",
    category: "new_release",
    lifecycle: "public_showcase",
    shortDescription:
      "外部LLM・外部クレート依存ゼロのPure Rust単一バイナリ（約550KB）で、Webアプリと基幹SQLite DBを4段階エスカレーション推論・三権分立審査・360-DQHM自己再生で自律維持する保守エンジン。",
    description:
      "AIMS v0.2（aims-engine）は、専任開発者の不在後・長期放置環境・閉域網においてもミッションクリティカルなWebアプリケーションと基幹SQLiteデータベースを自律維持するために設計された、Pure Rust（stdのみ・外部クレート依存ゼロ・外部API非依存）の単一バイナリ型自律メンテナンス＆自己再生エンジンです。",
    href: "/products/aims-engine",
    ctaLabel: "詳細・仕様書情報を見る",
    ctaHref: "/products/aims-engine",
    showOnHome: true,
    showOnProducts: true,
    priority: 0,
    aliases: ["AIMS", "AIMS v0.2", "aims-engine", "congenial-engine", "完全自律メンテナンス", "自己再生エンジン"],
    storeUrl: "https://github.com/NEXSPACE-y/congenial-engine",
    priceLabel: "Public Showcase 公開中 / 法人導入・OEM相談対応",
  },
  {
    slug: "jibunsite",
    name: "じぶんサイト / JibunSite",
    subtitle: "Local Page Builder for Windows",
    category: "store_app",
    lifecycle: "store_available",
    shortDescription:
      "自然文AI補助・見本パーツ・ライブプレビューで、自分のHP/LPをローカルPC上で作成・編集・書き出しできるWindowsアプリ。",
    description:
      "じぶんサイト / JibunSiteは、個人・小規模事業者・クリエイター・店舗・教室などが、自分でHPやLPを作成・更新できるWindowsローカルデスクトップアプリです。AIでたたき台を作り、見本パーツ選択、写真配置、色調整、HTML/ZIP書き出しまでを支援します。",
    href: "/products/jibunsite",
    ctaLabel: "Microsoft Storeで入手",
    ctaHref: "https://apps.microsoft.com/detail/9MX9ZKTXSV7T?hl=ja-jp&gl=JP&ocid=pdpshare",
    showOnHome: true,
    showOnProducts: true,
    priority: 1,
    aliases: ["JibunSite", "じぶんサイト", "local-page-builder", "ページビルダー"],
    storeUrl: "https://apps.microsoft.com/detail/9MX9ZKTXSV7T?hl=ja-jp&gl=JP&ocid=pdpshare",
    priceLabel: "無料ダウンロード / アドオン・サブスクリプション対応",
  },
  {
    slug: "jibunsite-ios",
    name: "じぶんサイト / JibunSite（iOS）",
    subtitle: "Local Page Builder for iPhone / iPad",
    category: "ios_app",
    lifecycle: "final_tuning",
    shortDescription:
      "Windows版と同じ作り方を、iPhoneとiPadで。AIでたたき台を作り、指で並べ替えて、HTML一式やZIPとして書き出せます。",
    description:
      "じぶんサイト / JibunSite（iOS）は、Windows版と同じプロジェクト形式・同じブロック構成をiPhoneとiPadで扱えるようにしたものです。AIでたたき台を作り、パーツを並べ替え、写真と色を整えて、HTML一式またはZIPとして書き出せます。書き出したファイルは共有シートから「ファイル」やAirDrop、メールなど好きな出口へ渡せます。作成した内容は端末内にのみ保存され、クラウドへの自動保存やログインは行いません。",
    href: "/products/jibunsite-ios",
    ctaLabel: "概要を見る",
    ctaHref: "/products/jibunsite-ios",
    showOnHome: true,
    showOnProducts: true,
    priority: 2,
    aliases: ["JibunSite iOS", "じぶんサイト iOS", "じぶんサイト iPhone", "じぶんサイト iPad"],
    priceLabel: "無料 / サブスクリプション対応",
  },
  {
    slug: "denki-scope",
    name: "Denki Scope",
    subtitle: "PC Power Cost Monitor",
    category: "store_app",
    lifecycle: "store_available",
    shortDescription:
      "PCの消費電力と電気代をリアルタイムに見える化し、日次・月次の累計を保存するWindows常駐モニターアプリ。",
    description:
      "Denki Scopeは、PCの消費電力と電気代を可視化するWindows常駐型デスクトップアプリです。GPUは実測、CPU/その他は構成の自動検出からの推定で総消費電力と電気代を算出し、日次・月次の累計を永続化します。",
    href: "/products/denki-scope",
    ctaLabel: "Microsoft Storeで購入",
    ctaHref: "https://apps.microsoft.com/detail/9MXM7BKVT9M6?hl=ja-jp&gl=JP&ocid=pdpshare",
    showOnHome: true,
    showOnProducts: true,
    priority: 2,
    aliases: ["DenkiScope", "Denki Scope", "デンスコ", "電気スコープ"],
    storeUrl: "https://apps.microsoft.com/detail/9MXM7BKVT9M6?hl=ja-jp&gl=JP&ocid=pdpshare",
    priceLabel: "¥150",
  },
  {
    slug: "crmtaskchecker",
    name: "CRMタスクチェッカー",
    subtitle: "Customer Follow-up Task Manager for iOS",
    category: "ios_app",
    lifecycle: "final_tuning",
    shortDescription:
      "進行中の案件が必ず「次回対応」を1つ持つように強制する、顧客フォロー管理のiOSアプリ。",
    description:
      "CRMタスクチェッカーは、顧客への対応漏れを構造的に防ぐiOSアプリです。対応を完了するときに「次を予定する／待機にする／クローズする」のいずれかを必ず選ばせるため、次にやることが決まっていない案件が生まれません。個人事業主・フリーランス・小規模企業のほか、就職活動や暮らしの用事にも使えます。",
    href: "/products/crmtaskchecker",
    ctaLabel: "概要を見る",
    ctaHref: "/products/crmtaskchecker",
    showOnHome: true,
    showOnProducts: true,
    priority: 3,
    aliases: ["CRMタスクチェッカー", "CRMTaskChecker", "タスクチェッカー", "顧客フォロー", "対応漏れ"],
    priceLabel: "顧客10件まで無料 / Proプラン（自動更新サブスクリプション）",
  },
  {
    slug: "ngnd",
    name: "NGND",
    subtitle: "Next Generation Node Deployment",
    category: "business",
    lifecycle: "final_tuning",
    shortDescription:
      "ローカルサーバーの状態監視、運用管理、防御イベント確認を支援する管理システム。",
    description:
      "NGNDは、小規模事業者や施設向けに、ローカルサーバー運用を可視化・管理するためのシステムです。",
    href: "/products/ngnd",
    ctaLabel: "導入相談",
    ctaHref: "/consultation?product=ngnd",
    showOnHome: true,
    showOnProducts: true,
    priority: 20,
  },
  {
    slug: "carelingual",
    name: "CareLingual",
    subtitle: "Care / Welfare Communication Support",
    category: "medical_welfare",
    lifecycle: "final_tuning",
    shortDescription:
      "医療・介護・福祉施設向けの記録、相談、通知、情報整理を支援するシステム。",
    description:
      "CareLingualは、現場記録や申し送り、利用者情報整理を補助する施設向けプロダクトです。",
    href: "/products/carelingual",
    ctaLabel: "施設導入相談",
    ctaHref: "/consultation?product=carelingual",
    showOnHome: true,
    showOnProducts: true,
    priority: 30,
  },
  {
    slug: "ndsm",
    name: "NDSM",
    subtitle: "NEXSPACE Data Server Management",
    category: "ops",
    lifecycle: "development",
    shortDescription:
      "複数の自社サーバー情報を一元管理するためのローカル運用管理システム。",
    description:
      "NDSMは、NEXSPACE系サーバー群の管理・監視・接続情報整理を目的とした運用支援システムです。",
    href: "/products/ndsm",
    ctaLabel: "概要を見る",
    ctaHref: "/products/ndsm",
    showOnHome: true,
    showOnProducts: true,
    priority: 40,
  },
];

export const lifecycleLabels: Record<ProductLifecycle, string> = {
  public_showcase: "Public Showcase / 評価版バイナリ公開中",
  store_available: "Microsoft Storeで購入可能",
  flagship_preparing: "提供準備・商品化設計中",
  final_tuning: "販売用最終チューニング中",
  development: "開発・試作中",
  consultation: "相談受付中",
  internal: "内部基盤",
  service_ended: "サービス終了済み",
  hidden: "非表示",
};
