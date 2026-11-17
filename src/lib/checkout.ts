export const checkoutOffer = {
  title: "Revit MEP: Isitish, shamollatish va ventilyatsiya (O‘ViK) tizimlarini loyihalash",
  originalPrice: 3_800_000,
  discount: 900_000,
  promo: "BIMPRO2026",
  bonuses: [
    [
      "Revit MEP Shablon (BIMPro RTE 2024)",
      "400+ parametrik oilalar (RFA) va GOST spetsifikatsiyalari",
    ],
    [
      "ShNK Hisoblash Kalkulyatorlari (.xlsx)",
      "Gidravlik va aerodinamik yo‘qotishlarni avtomat hisoblash",
    ],
    [
      "Yopiq Telegram Jamiyat & Shaxsiy Mentorlik",
      "Farrux Mahkamjonov bilan to‘g‘ridan-to‘g‘ri savol-javob",
    ],
    ["Davlat Ekspertizasiga mos Sertifikat", "QR-kod bilan tekshiriladigan rasmiy sertifikat"],
  ],
} as const;

export const paymentMethods = [
  {
    id: "click",
    name: "Click.uz",
    mark: "CLICK",
    subtitle: "Click Up",
    benefit: "+2% Keshbek",
    detail: "1-klikda to‘lov",
  },
  {
    id: "payme",
    name: "Payme",
    mark: "P",
    subtitle: "Uzcard va Humo",
    benefit: "Tezkor to‘lov",
    detail: "Chek beriladi",
  },
  {
    id: "uzum",
    name: "Uzum bank",
    mark: "UZUM",
    subtitle: "Uzum balansi va karta",
    benefit: "Uzum Bank",
    detail: "0% komissiya",
  },
  {
    id: "installments",
    name: "Bo‘lib to‘lash",
    mark: "NASIYA",
    subtitle: "Muddatli to‘lov",
    benefit: "Shartlarni aniqlash",
    detail: "Alif Nasiya",
  },
] as const;

export type PaymentMethod = (typeof paymentMethods)[number]["id"];

export function formatUZS(value: number): string {
  return new Intl.NumberFormat("fr-FR").format(value).replaceAll("\u202f", " ");
}
