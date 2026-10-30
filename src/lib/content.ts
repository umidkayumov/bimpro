export type CourseCategory = "mep" | "architecture" | "coordination" | "free";

export interface Course {
  id: string;
  title: string;
  titleLines: readonly [string, string];
  description: string;
  category: CourseCategory;
  image: string;
  standard: string;
  level: string;
  duration: string;
  price: number;
  features: readonly string[];
}

const courseDefinitions: readonly Omit<Course, "title">[] = [
  {
    id: "MEP-OVIK-301",
    titleLines: ["Revit MEP: OViK (Isitish,", "Shamollatish, Konditsionerlash)"],
    description:
      "Havo kanallari va quvurlar tarmog‘ini 3D modellashtirish, aerodinamika, avtomatik hisoblar.",
    category: "mep",
    image: "a1aa3.png",
    standard: "ShNK 2.04.05-97",
    level: "Professional",
    duration: "8 hafta (32 soat)",
    price: 3200000,
    features: [
      "Tayyor milliy OViK RTE shabloni",
      "Aerodinamik va gidravlik hisoblar",
      "Ekspertiza formatidagi spetsifikatsiyalar",
    ],
  },
  {
    id: "ARC-MOD-202",
    titleLines: ["Revit Architecture (AR):", "Arxitektura va Dizayn"],
    description:
      "Ko‘p qavatli bino arxitekturasini noldan chiqarish, devor va fasad konstruksiyalari, fasadlar, kesimlar va tugunlar.",
    category: "architecture",
    image: "c045c.png",
    standard: "QMQ 2.08.01-19",
    level: "Boshlang‘ich / O‘rta",
    duration: "6 hafta (24 soat)",
    price: 2800000,
    features: [
      "O‘zbekiston QMQ bo‘yicha AR shablon",
      "Fasadlar, qavat planlari va tugunlar",
      "Aniq qurilish materiallari sarfi",
    ],
  },
  {
    id: "STR-REBAR-401",
    titleLines: ["Revit Structure (KR): Temir-beton", "va Metall"],
    description:
      "Monolit karkas va metall konstruksiyalarni 3D armaturalash, poydevorlar, egilish vedomostlari va detallar.",
    category: "architecture",
    image: "3b294.png",
    standard: "QMQ 2.03.01-96",
    level: "O‘rta / Yuqori",
    duration: "8 hafta (32 soat)",
    price: 3400000,
    features: [
      "Avtomatlashgan armatura spetsifikatsiyasi",
      "Karkas tugunlari detallashuvi (LOD 350)",
      "LIRA-SAPR / SCAD integratsiyasi prinsiplari",
    ],
  },
  {
    id: "NAV-CLASH-501",
    titleLines: ["Navisworks Manage: Kolliziyalar", "va 4D rejalashtirish"],
    description:
      "Turli bo‘limlar (AR, KR, OViK, VK, EO) o‘rtasidagi geometrik to‘qnashuvlarni qurilishdan oldin aniqlash.",
    category: "coordination",
    image: "a70ab.png",
    standard: "CLASH MATRIX",
    level: "BIM koordinator",
    duration: "4 hafta (16 soat)",
    price: 2400000,
    features: [
      "Clash Detective matritsasini sozlash",
      "Qurilishdagi xatolarni 95% bartaraf etish",
      "HTML / PDF formatda rasmiy audit hisoboti",
    ],
  },
  {
    id: "MEP-PLUMB-302",
    titleLines: ["Revit MEP: VK (Suv ta‘minoti va", "Kanalizatsiya)"],
    description:
      "Ichki suv ta‘minoti va oqova suv tarmoqlarini nishabliklar bilan loyihalash, aksonometrik sxemalar.",
    category: "mep",
    image: "465f3.png",
    standard: "QMQ 2.04.01-98",
    level: "Professional",
    duration: "6 hafta (24 soat)",
    price: 2900000,
    features: [
      "Gidravlik hisob-kitoblar integratsiyasi",
      "Standart aksonometrik sxemalar generatsiyasi",
      "O‘zbekiston mezonidagi quvurlar katalogi",
    ],
  },
  {
    id: "BIM-BEP-100",
    titleLines: ["BIM Asoslari va QMQ/ShNK", "Talablari (Ekspress Kirish)"],
    description:
      "BIM tizimiga to‘g‘ri kirish: BEP (BIM Execution Plan), koordinat tizimlari, shablon strukturasi va Davlat Ekspertizasi.",
    category: "free",
    image: "bf899.png",
    standard: "OCHIQ KURS",
    level: "Barcha uchun",
    duration: "2 hafta",
    price: 0,
    features: [
      "BIM koordinatsiya va LOD darajalari tahlili",
      "O‘zbekiston bazaviy RTE shabloni sovg‘a",
      "Elektron ekspertiza talablari qo‘llanmasi",
    ],
  },
];

export const courses: readonly Course[] = courseDefinitions.map((course) => ({
  ...course,
  title: course.titleLines.join(" "),
}));

export const filters = [
  { id: "all", label: "Barchasi (6)" },
  { id: "mep", label: "MEP / OViK / VK" },
  { id: "architecture", label: "Konstruksiya & AR" },
  { id: "free", label: "Bepul darslar" },
] as const;
export type CourseFilter = (typeof filters)[number]["id"];

export const mentorBenefits = [
  {
    icon: "c844b.svg",
    title: "Davlat Ekspertizasidan o‘tgan real obyektlar tajribasi",
    description:
      "Darslar mavhum kubik va soxta namunalar emas, Toshkent va viloyatlarda qurilgan real bino va inshootlar chizmalari asosida o‘tiladi.",
  },
  {
    icon: "49e6f.svg",
    title: "Tayyor milliy QMQ/ShNK RTE shablonlari",
    description:
      "Yillar davomida sayqallangan, O‘zbekiston davlat standartlariga 100% mos parametrik oilalar (Families), shtamplar va avtomatlashgan vedomostlar to‘liq beriladi.",
  },
  {
    icon: "0613d.svg",
    title: "Loyiha tezligini 3–5 baravarga oshirish",
    description:
      "Spetsifikatsiya va vedomostlarni qo‘lda sanash, kolliziyalarni chizmada qidirishga ketadigan vaqtni avtomatlashtirish hisobiga loyihalash muddatini qisqartirish usullari.",
  },
] as const;

export const enterpriseBenefits = [
  {
    icon: "253ad.svg",
    title: "Integratsiyalashgan ta‘lim",
    description:
      "AR, KR, OViK va VK bo‘limlari o‘rtasida yagona koordinata va umumiy model bilan ishlash protokoli joriy etiladi.",
  },
  {
    icon: "723e9.svg",
    title: "Kompaniya RTE Shablon va BEP",
    description:
      "Institut talablariga mos maxsus oilalar, ramkalar, shtamplar va BEP (BIM Execution Plan) standarti ishlab chiqiladi.",
  },
  {
    icon: "d764e.svg",
    title: "Davlat Ekspertizasi Auditi",
    description:
      "Haqiqiy davlat ekspertizasi mezonlari bo‘yicha xodimlarning yakuniy loyihalari sinovdan va tekshiruvdan o‘tkaziladi.",
  },
  {
    icon: "a92ea.svg",
    title: "Rahbariyat uchun monitoring",
    description:
      "Har bir muhandisning o‘zlashtirish darajasi, test ballari va loyihalash unumdorligi haqida to‘liq hisobot beriladi.",
  },
] as const;

export const faqItems = [
  {
    question: "Kurslar O‘zbekiston QMQ va ShNK standartlariga qay darajada moslashtirilgan?",
    answer:
      "Biz barcha darslarni O‘zbekiston Respublikasi Qurilish Vazirligi tomonidan tasdiqlangan amaldagi QMQ va ShNK (masalan, ShNK 2.04.05-97 OViK, QMQ 2.04.01-98 VK, QMQ 2.08.01-19 AR) me’yorlari asosida olib boramiz. Chizmalar, shtamplar, o‘lchamlar, aksonometrik jadvallar va spetsifikatsiyalar Davlat Ekspertizasi qabul qiladigan shaklda to‘liq avtomatlashtirilgan holda o‘rgatiladi.",
  },
  {
    question: "Kompyuterim qanday texnik parametrlarga (hardware) ega bo‘lishi lozim?",
    answer:
      "Revit 2022–2024 va Navisworks Manage dasturlari bilan qulay ishlash uchun minimal talablar: Intel Core i5/i7 (11-avlod va undan yuqori) yoki AMD Ryzen 5/7; Operativ xotira (RAM): minimal 16 GB (tavsiya etiladi: 32 GB); Videokarta: minimal 4–6 GB (NVIDIA GeForce RTX 3050/3060 yoki undan yuqori); SSD disk: dastur va loyihalar uchun kamida 256 GB bo‘sh joy.",
  },
  {
    question:
      "Ilgari faqat AutoCAD dasturida ishlaganman, Revitni noldan o‘rganish qiyin bo‘lmaydimi?",
    answer:
      "AutoCAD tajribangiz chizma mantiqini tushunishda katta plyus beradi! Darslarimiz aynan 2D chizish psixologiyasidan 3D parametrik axborotli modellashtirishga og‘riqsiz o‘tish metodologiyasi bilan tuzilgan. 2–3 haftadan so‘ng siz chizmalarni qo‘lda chizish o‘rniga to‘g‘ridan-to‘g‘ri modeldan avtomatik generatsiya qilish afzalligini to‘liq his qilasiz.",
  },
  {
    question:
      "Kursda beriladigan RTE shablonlar va oilalardan keyinchalik o‘z loyihalarimda foydalana olamanmi?",
    answer:
      "Ha, albatta! Sizga taqdim etiladigan barcha shablonlar, 400 dan ortiq QMQ parametrlari, quvur va havo kanallari armaturalari, fitinglar va GOST ramkalar sizda abadiy qoladi. Siz ulardan mustaqil ish faoliyatingizda yoki kompaniyangizdagi real tijoriy loyihalarda cheklovlarsiz foydalanishingiz mumkin.",
  },
  {
    question:
      "To‘lovni bo‘lib to‘lash yoki yuridik shaxs (korporativ hisob raqam) orqali amalga oshirish mumkinmi?",
    answer:
      "Ha, jismoniy shaxslar uchun kurs to‘lovini 2 bosqichga bo‘lib to‘lash imkoniyati mavjud (kurs boshida va 4-haftada). Shuningdek, loyiha institutlari va korxonalar uchun barcha qonuniy shartnomalar, hisob-faktura (shartnoma asosida pul o‘tkazish) va yopish hujjatlari to‘liq rasmiylashtirib beriladi.",
  },
] as const;

export const telegramUrl = "https://t.me/BimPro_Academy";
export function formatPrice(price: number): string {
  return price === 0 ? "BEPUL//OPEN" : `${new Intl.NumberFormat("en-US").format(price)} UZS`;
}
