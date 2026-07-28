import Link from "next/link";
import { siteConfig } from "@/config/site";

const updatedAt = "2026年7月28日";

const sections = [
  {
    title: "1. 端末の中だけで扱う情報",
    content:
      "本アプリで作成した内容は、すべて端末内にのみ保存されます。開発者を含め、第三者が閲覧することはできません。\n\n・サイトの文章、見出し、色や余白などの設定\n・配置した画像\n・プロジェクトとして保存したファイル\n\nクラウドへの自動保存や同期は行いません。書き出したHTML・ZIP・プロジェクトファイルの保存先は、共有シートでお客様が選んだ場所です。端末のiCloudバックアップに含まれる場合、その取り扱いはAppleのポリシーに従います。",
  },
  {
    title: "2. AI機能で送信する情報",
    content:
      "AIで初期構成を作る、ページやブロックを改善するといった機能では、入力された指示文とページの構成情報が外部へ送信されます。送信先は、お使いのプランによって異なります。\n\n【ご自身のAnthropic APIキーを使う場合】\nAnthropic社のAPIへ直接送信されます。NEXSPACEのサーバーを経由しません。取り扱いはAnthropic社の規約に従います。\n\n【サブスクリプションプランの場合】\nNEXSPACE AI Relayを経由してAnthropic社のAPIへ送信されます。\n\nいずれの場合も、NEXSPACEがこれらの情報を自社のAIモデルの学習に使用することはありません。個人情報、機密情報、第三者の権利を侵害する情報は入力しないようご注意ください。",
  },
  {
    title: "3. NEXSPACE AI Relayに保存される情報",
    content:
      "サブスクリプションプランでAI機能を利用した場合、利用枠の管理と課金の正確性を保つため、以下の情報がNEXSPACEのサーバーに保存されます。\n\n・匿名ID（本アプリが生成する識別子。氏名・メールアドレス・端末の識別子とは無関係です）\n・プラン、利用月、操作の種別、使用したAIモデル名、トークン数、日時\n・AIが生成した結果\n\n生成結果を保存しているのは、通信の再送などで同じ要求が二度届いた場合に、同じ結果をお返しし、利用枠を二重に消費しないためです。入力された指示文は保存していません。\n\nご自身のAPIキーを使う場合は、Relayを経由しないため、これらの情報は保存されません。",
  },
  {
    title: "4. 取得しない情報",
    content:
      "広告識別子（IDFA）は取得せず、行動履歴の追跡（トラッキング）も行いません。広告・アクセス解析のSDKは組み込んでいません。位置情報、連絡先、写真ライブラリ全体へのアクセスも行いません（画像は、お客様が選んだものだけを読み込みます）。",
  },
  {
    title: "5. APIキーの取り扱い",
    content:
      "ご自身のAnthropic APIキーを設定した場合、キーは端末の資格情報マネージャー（Keychain）にのみ保存されます。NEXSPACEのサーバーへ送信することはありません。書き出したHTML・ZIP・プロジェクトファイルにも含まれません。",
  },
  {
    title: "6. 購入について",
    content:
      "サブスクリプションの決済はApple（App Store）が処理します。クレジットカード番号などの決済情報を開発者が受け取ることはありません。解約は、iPhoneの「設定」アプリ →（お名前）→「サブスクリプション」から行えます。",
  },
  {
    title: "7. 情報の削除",
    content: `本アプリを端末から削除すると、端末内に保存された内容はすべて削除されます。NEXSPACE AI Relayに保存された情報の削除をご希望の場合は、下記のお問い合わせ窓口までご連絡ください。匿名IDをお伝えいただくことで、該当する記録を特定できます。`,
  },
  {
    title: "8. お問い合わせ窓口",
    content: `本アプリにおける個人情報の取扱いに関するお問い合わせは、${siteConfig.email} までご連絡ください。`,
  },
  {
    title: "9. 改定手続",
    content:
      "本ポリシーを変更する場合は、本ページに変更後の内容を掲載します。重要な変更がある場合は、アプリの更新情報等でお知らせいたします。",
  },
];

export default function JibunSitePrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl py-12 md:py-20">
      <p className="mb-3 text-sm font-bold text-sky-700">じぶんサイト / JibunSite</p>
      <h1 className="mb-6 border-b border-slate-200 pb-4 text-3xl font-bold text-slate-950">
        プライバシーポリシー
      </h1>

      <p className="mb-10 text-sm leading-relaxed text-slate-700">
        本ポリシーは、iOSアプリ「じぶんサイト / JibunSite」における個人情報の取扱いについて定めるものです。
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
