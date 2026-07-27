import { siteConfig } from "./site";

export const legalConfig = {
  legalEntity: siteConfig.legalName,
  serviceNames: ["NeutronGate", "NGND", "CareLingual", "NDSM", "CRMタスクチェッカー"],
  termsServiceText:
    "本規約は、NEXSPACEが提供または提供準備中の「NeutronGate」「NGND」「CareLingual」「NDSM」「CRMタスクチェッカー」および関連サービス（以下「本サービス」）の利用条件を定めるものです。",
  establishedTermsDate: "2025年12月23日",
  privacyUpdatedDate: "2026年6月23日",
} as const;
