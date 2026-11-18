import { siteConfig } from "./site";

export const legalConfig = {
  legalEntity: siteConfig.legalName,
  serviceNames: ["自律型サイバーAI防御システム", "AIMS v0.2（aims-engine）", "じぶんサイト / JibunSite", "Denki Scope", "CRMタスクチェッカー", "NGND", "CareLingual", "NDSM"],
  termsServiceText:
    "本規約は、NEXSPACEが提供または提供準備中の「自律型サイバーAI防御システム」「AIMS v0.2（aims-engine）」「じぶんサイト / JibunSite」「Denki Scope」「CRMタスクチェッカー」「NGND」「CareLingual」「NDSM」および関連サービス（以下「本サービス」）の利用条件を定めるものです。",
  establishedTermsDate: "2025年12月23日",
  privacyUpdatedDate: "2026年6月23日",
} as const;
