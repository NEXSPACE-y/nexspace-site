import Link from "next/link";
import { lifecycleLabels, products } from "@/config/products";
import { siteConfig } from "@/config/site";

const product = products.find((item) => item.slug === "crmtaskchecker");

const features = [
  "対応を完了すると「次を予定 / 待機 / クローズ」の選択を必ず求める",
  "進行中の案件には常に次回対応が1つだけ残る",
  "期限を過ぎた対応と今日の対応を、開いた瞬間に表示",
  "顧客・案件ごとに、完了メモ付きの対応履歴が残る",
  "予定した時刻にローカル通知でお知らせ",
  "ホーム画面のウィジェットで件数と内容を確認",
  "延期しても記録が残り、当初の予定日時は書き換わらない",
];

const useCases = [
  { title: "見積りの追いかけ", body: "送ったまま止まっている案件を、次の連絡日ごと管理します。" },
  { title: "折り返し待ちの管理", body: "相手待ちの案件は「待機」に置き、動いたときに再開できます。" },
  { title: "就職活動", body: "企業ごとに、次の連絡・提出物・面接の予定を1件だけ持ちます。" },
  { title: "暮らしの用事", body: "学校や役所、業者とのやりとりが宙に浮くのを防ぎます。" },
];

const faqs = [
  {
    q: "対応を完了するだけで終われないのはなぜですか。",
    a: "「完了しただけの案件」が溜まることが、対応漏れの最大の原因だからです。本アプリは完了と同時に次の行き先を決めさせることで、次にやることが決まっていない案件が生まれない構造にしています。",
  },
  {
    q: "予定を先延ばしにできますか。",
    a: "できます。ただし延期した回数は履歴に残り、最初に設定した予定日時も書き換わりません。延期を禁じない代わりに、延期した事実は消えないようにしています。",
  },
  {
    q: "顧客の情報は外部に送信されますか。",
    a: "送信しません。顧客名・連絡先・メモ・案件名・対応内容は、すべて端末内にのみ保存されます。詳細はプライバシーポリシーをご確認ください。",
  },
  {
    q: "無料でどこまで使えますか。",
    a: "顧客10件までは、期間の制限なく無料でお使いいただけます。それ以上の顧客を登録する場合はProプランをご利用ください。登録済みの顧客・案件は、無料プランでもすべて閲覧・編集できます。",
  },
  {
    q: "サブスクリプションはどこで解約できますか。",
    a: "iPhoneの「設定」アプリ →（お名前）→「サブスクリプション」から解約できます。解約はApple側の手続きとなります。",
  },
];

export default function CrmTaskCheckerPage() {
  if (!product) return null;

  return (
    <div className="w-full py-12 md:py-20">
      <section className="mb-14 border-l-4 border-sky-500 pl-4 md:pl-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-sky-600 px-3 py-1 text-xs font-bold text-white">NEW</span>
          <p className="text-sm font-bold text-sky-700">{lifecycleLabels[product.lifecycle]}</p>
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">{product.name}</h1>
        <p className="mt-3 text-lg font-semibold text-slate-600">次にやることを、1件だけ残す。</p>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-500">{product.subtitle}</p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
          {product.description}
        </p>
        <p className="mt-4 text-sm font-bold text-slate-500">{product.priceLabel}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/legal/privacy/crmtaskchecker"
            className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-bold text-slate-900 transition-colors hover:border-sky-500 hover:text-sky-700"
          >
            プライバシーポリシー
          </Link>
          <Link href="/products" className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-bold text-slate-900 transition-colors hover:border-sky-500 hover:text-sky-700">
            製品一覧
          </Link>
        </div>
      </section>

      <section className="mb-16 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-slate-950">進行中の案件は、必ず「次回対応」を1つ持ちます</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
          対応を完了するとき、本アプリは次のいずれかを必ず選ばせます。
        </p>
        <ul className="mt-4 space-y-2 text-sm text-slate-700 md:text-base">
          <li>・次を予定する（案件は進行中のまま続きます）</li>
          <li>・待機にする（相手待ちなど。あとで再開できます）</li>
          <li>・クローズする（この案件は終わりです）</li>
        </ul>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
          いずれも選ばずに完了することはできません。そのため「次に何をするか決まっていない進行中の案件」が構造的に存在しなくなります。
        </p>
      </section>

      <section className="mb-16 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-950">Features</h2>
          <ul className="mt-4 space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
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
          <li>・iPhone（iOS 17.0 以降）</li>
          <li>・表示言語：日本語</li>
          <li>・インターネット接続なしでも、記録と通知は動作します</li>
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
