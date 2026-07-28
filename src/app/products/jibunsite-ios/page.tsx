import Link from "next/link";
import { lifecycleLabels, products } from "@/config/products";
import { siteConfig } from "@/config/site";

const product = products.find((item) => item.slug === "jibunsite-ios");

const features = [
  "作りたいものを文章で伝えると、AIがページのたたき台を組み立てる",
  "約40種のブロックから選んで追加し、指で並べ替え・表示切替",
  "PC / タブレット / スマホの見え方をその場で確認",
  "写真、文章、配色、余白を端末上で編集",
  "HTML一式またはZIPとして書き出し、共有シートで好きな出口へ",
  "プロジェクトとして保存し、あとから開いて編集を再開",
  "Windows版と同じプロジェクト形式。作りかけを行き来できる",
];

const useCases = [
  { title: "移動中に下書き", body: "思いついた構成をその場で形にし、細部は後から詰められます。" },
  { title: "店頭・現場から更新", body: "PCを開かずに、営業時間やお知らせを直せます。" },
  { title: "写真を撮ってすぐ配置", body: "撮った写真をそのまま選んで、ページに載せられます。" },
  { title: "iPadでじっくり", body: "画面が広いぶん、構成を見渡しながら組み立てられます。" },
];

const faqs = [
  {
    q: "Windows版で作ったサイトを、iPhoneで開けますか。",
    a: "開けます。プロジェクト形式は共通です。Windows版で保存したファイルを「ファイル」アプリ等に置いておけば、iOS版の「開く」から読み込めます。逆方向も同じです。",
  },
  {
    q: "作った内容はどこに保存されますか。",
    a: "端末内にのみ保存されます。クラウドへの自動保存やログインは行いません。書き出したHTML・ZIP・プロジェクトファイルの保存先は、共有シートでお客様が選んだ場所です。",
  },
  {
    q: "AIには何が送信されますか。",
    a: "AI機能を使ったときに限り、入力した指示文とページの構成情報が送信されます。ご自身のAnthropic APIキーを使う場合はAnthropic社へ直接送信され、サブスクリプションの場合はNEXSPACE AI Relayを経由します。写真そのものは送信しません。詳細はプライバシーポリシーをご確認ください。",
  },
  {
    q: "AIを使わずに使えますか。",
    a: "使えます。ブロックを自分で追加して組み立てる使い方だけでも、書き出しまで完結します。AIはたたき台作りと改善提案を補助するものです。",
  },
  {
    q: "書き出したサイトはそのまま公開できますか。",
    a: "書き出されるのはブラウザで開ける静的HTML一式です。公開するには、お手持ちのレンタルサーバーやホスティングサービスへアップロードしてください。本アプリは公開ホスティングを提供しません。",
  },
  {
    q: "サブスクリプションはどこで解約できますか。",
    a: "iPhone / iPadの「設定」アプリ →（お名前）→「サブスクリプション」から解約できます。解約はApple側の手続きとなります。",
  },
];

export default function JibunSiteIosPage() {
  if (!product) return null;

  return (
    <div className="w-full py-12 md:py-20">
      <section className="mb-14 border-l-4 border-slate-800 pl-4 md:pl-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-white">NEW</span>
          <p className="text-sm font-bold text-slate-700">{lifecycleLabels[product.lifecycle]}</p>
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">{product.name}</h1>
        <p className="mt-3 text-lg font-semibold text-slate-600">PCを開かなくても、直せる。</p>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-500">{product.subtitle}</p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
          {product.description}
        </p>
        <p className="mt-4 text-sm font-bold text-slate-500">{product.priceLabel}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/legal/privacy/jibunsite"
            className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-bold text-slate-900 transition-colors hover:border-slate-800"
          >
            プライバシーポリシー
          </Link>
          <Link
            href="/products/jibunsite"
            className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-bold text-slate-900 transition-colors hover:border-slate-800"
          >
            Windows版
          </Link>
          <Link
            href="/products"
            className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-bold text-slate-900 transition-colors hover:border-slate-800"
          >
            製品一覧
          </Link>
        </div>
      </section>

      <section className="mb-16 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-slate-950">同じサイトを、PCでも手元でも</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
          プロジェクト形式はWindows版と共通です。PCで骨組みを作って外出先で文言を直す、現場で撮った写真を載せてから机で仕上げる、といった行き来ができます。
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
          作った内容は端末内にのみ保存されます。書き出したファイルの行き先は、共有シートでお客様が選びます。「ファイル」アプリでも、AirDropでも、メール添付でも構いません。
        </p>
      </section>

      <section className="mb-16 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-950">Features</h2>
          <ul className="mt-4 space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-800" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-950">Use Cases</h2>
          <div className="mt-4 space-y-4">
            {useCases.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 p-4">
                <p className="text-sm font-bold text-slate-950">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-950">動作環境</h2>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
          <li>・iPhone / iPad（iOS 15.0 以降）</li>
          <li>・表示言語：日本語ほか</li>
          <li>・編集と書き出しはインターネット接続なしで動作します（AI機能のみ接続が必要です）</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-950">よくあるご質問</h2>
        <div className="mt-6 space-y-8">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <p className="text-sm font-bold text-slate-950 md:text-base">{faq.q}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-slate-950">サポート・お問い合わせ</h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-700">
          不具合のご報告、ご要望、その他のお問い合わせは、下記までご連絡ください。内容を確認のうえ、順次ご返信いたします。
        </p>
        <dl className="mt-6 space-y-3 text-sm text-slate-700">
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <dt className="w-32 shrink-0 font-bold text-slate-950">メール</dt>
            <dd>
              <a href={`mailto:${siteConfig.email}`} className="text-sky-700 underline underline-offset-4">
                {siteConfig.email}
              </a>
            </dd>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <dt className="w-32 shrink-0 font-bold text-slate-950">お問い合わせ</dt>
            <dd>
              <Link href="/contact" className="text-sky-700 underline underline-offset-4">
                お問い合わせフォーム
              </Link>
            </dd>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <dt className="w-32 shrink-0 font-bold text-slate-950">提供者</dt>
            <dd>{siteConfig.legalName}</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
