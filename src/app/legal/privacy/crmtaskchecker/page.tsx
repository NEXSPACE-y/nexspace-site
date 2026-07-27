import Link from "next/link";
import { siteConfig } from "@/config/site";

const updatedAt = "2026年7月27日";

const sections = [
  {
    title: "1. 端末の中だけで扱う情報",
    content:
      "本アプリに登録された以下の情報は、すべて端末内にのみ保存されます。開発者を含め、第三者が閲覧することはできません。\n\n・顧客の名前、会社名、連絡先、メモ\n・案件の名称と状態\n・対応の内容、予定日時、完了メモ、完了日時\n\n外部サーバーへの同期やバックアップの機能は提供していません。端末のiCloudバックアップに含まれる場合、その取り扱いはAppleのポリシーに従います。",
  },
  {
    title: "2. 送信する情報",
    content:
      "リリース記念キャンペーンの期間中に限り、無料枠と価格を検討する目的で、以下の数値のみを開発者のサーバーへ送信します。送信は7日ごとに1回で、無料期間の終了をもって停止します。\n\n・匿名ID（本アプリが生成するUUID。氏名・メールアドレス・端末の識別子とは無関係です）\n・送信日時\n・顧客の登録件数（数値のみ）\n・対応の累計登録数（数値のみ）\n・対応の累計完了数（数値のみ）\n\n顧客名・会社名・連絡先・メモ・案件名・対応名は一切送信しません。広告識別子（IDFA）は取得せず、行動履歴の追跡（トラッキング）も行いません。広告・アクセス解析のSDKは組み込んでいません。",
  },
  {
    title: "3. 通知",
    content:
      "予定した日時にお知らせするため、端末内でローカル通知を予約します。通知の内容が外部に送信されることはありません。通知を許可しない場合も、本アプリを開けば同じ内容を確認できます。",
  },
  {
    title: "4. 購入について",
    content:
      "サブスクリプションの決済はApple（App Store）が処理します。クレジットカード番号などの決済情報を開発者が受け取ることはありません。",
  },
  {
    title: "5. 情報の削除",
    content:
      "本アプリを端末から削除すると、登録された情報はすべて削除されます。送信済みの数値の削除をご希望の場合は、下記のお問い合わせ窓口までご連絡ください。",
  },
  {
    title: "6. お問い合わせ窓口",
    content: `本アプリにおける個人情報の取扱いに関するお問い合わせは、${siteConfig.email} までご連絡ください。`,
  },
  {
    title: "7. 改定手続",
    content:
      "本ポリシーを変更する場合は、本ページに変更後の内容を掲載します。重要な変更がある場合は、アプリの更新情報等でお知らせいたします。",
  },
];

export default function CrmTaskCheckerPrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl py-12 md:py-20">
      <p className="mb-3 text-sm font-bold text-sky-700">CRMタスクチェッカー</p>
      <h1 className="mb-6 border-b border-slate-200 pb-4 text-3xl font-bold text-slate-950">
        プライバシーポリシー
      </h1>

      <p className="mb-10 text-sm leading-relaxed text-slate-700">
        本ポリシーは、iOSアプリ「CRMタスクチェッカー」における個人情報の取扱いについて定めるものです。
        {siteConfig.legalName}全体の方針については
        <Link href="/legal/privacy" className="mx-1 text-sky-700 underline underline-offset-4">
          プライバシーポリシー
        </Link>
        をご覧ください。本ポリシーと全体方針の内容が異なる場合は、本アプリに関しては本ポリシーが優先します。
      </p>

      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-3 text-lg font-bold text-slate-950">{section.title}</h2>
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700">{section.content}</p>
          </section>
        ))}
      </div>

      <p className="mt-16 text-xs text-slate-400">最終更新日：{updatedAt}</p>
      <p className="mt-2 text-xs text-slate-400">運営主体：{siteConfig.legalName}</p>
    </div>
  );
}
