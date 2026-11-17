"use client";

import { useState } from "react";
import Link from "next/link";
import { Asset } from "@/components/ui/asset";

const products = [
  [
    "Revit MEP: Isitish, shamollatish (O‘ViK) kursi",
    "10 ta amaliy modul, 48 soatlik darslar, umrbod kirish huquqi.",
  ],
  [
    "BIMPro Revit MEP Kompleks Shablon (.RTE 2024)",
    "400+ parametrik oilalar, ShNK 2.04.05-18 talablariga mos (Yuklab olishga tayyor).",
  ],
  [
    "Yopiq Telegram Hamjamiyat & Shaxsiy Mentorlik",
    "Farrux Mahkamjonov bilan to‘g‘ridan-to‘g‘ri kuratorlik va uy vazifalari tahlili.",
  ],
] as const;

/** Static design preview. A real receipt must be rendered from a verified server-side payment. */
export function SuccessPreview() {
  const [status, setStatus] = useState("");
  function unavailable(kind: string) {
    setStatus(
      `${kind} hozircha mavjud emas. Bu namuna buyurtma; haqiqiy to‘lov va litsenziya yaratilmagan.`,
    );
  }
  return (
    <div className="success-page">
      <p className="success-preview-notice">
        <strong>Namuna buyurtma.</strong> Quyidagi ma’lumotlar Figma maketidan olingan. To‘lov
        amalga oshirilmagan.
      </p>
      <article className="success-card" aria-labelledby="success-title">
        <header className="success-header">
          <div className="success-shield">
            <Asset name="4624c.svg" />
            <span>PREVIEW</span>
          </div>
          <h1 id="success-title">Tabriklaymiz, Farrux! To‘lov muvaffaqiyatli yakunlandi 🎉</h1>
          <p>
            Sizning buyurtmangiz tasdiqlandi va barcha professional materiallar hamda litsenziya
            <br className="success-desktop-break" /> shaxsiy kabinetingizda faollashtirildi.
          </p>
          <dl className="success-receipt">
            <div>
              <dt>BUYURTMA RAQAMI</dt>
              <dd>#BIM-8821-UZ</dd>
            </div>
            <div>
              <dt>TRANZAKSIYA ID</dt>
              <dd>CLICK_SUCCESS_20261016</dd>
            </div>
            <div>
              <dt>JAMI TO‘LOV</dt>
              <dd className="blue">
                2,900,000 UZS <span>To‘liq</span>
              </dd>
            </div>
            <div>
              <dt>SANA VA VAQT</dt>
              <dd>16-Oktabr, 2026 • 15:42</dd>
            </div>
          </dl>
        </header>
        <div className="success-columns">
          <section className="success-products">
            <div className="success-section-heading">
              <h2>
                <Asset name="6759c.svg" /> O‘quv paketi tarkibi
              </h2>
              <span className="purchase-tag">4 TA AKTIV</span>
            </div>
            <ul>
              {products.map(([title, description]) => (
                <li key={title}>
                  <span className="product-check">
                    <Asset name="1bec0.svg" />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="receipt-download">
              <button type="button" onClick={() => unavailable("PDF chek")}>
                To‘lov kvitansiyasini yuklab olish (PDF chek) <Asset name="5ba02.svg" />
              </button>
              <span>#BIM-CHK-8821</span>
            </div>
          </section>
          <section className="success-security">
            <div className="success-section-heading">
              <h2>
                <Asset name="4a500.svg" /> Qurilma xavfsizligi biriktirildi
              </h2>
            </div>
            <span className="device-policy">1 STUDENT = 1 DEVICE</span>
            <p>
              BIMPro Academy intellektual mulk himoyasi siyosatiga ko‘ra sizning litsenziyangiz
              ushbu ishchi stansiyaga muvaffaqiyatli bog‘landi:
            </p>
            <dl className="device-details">
              <div>
                <dt>Qurilma:</dt>
                <dd>ASUS ROG Strix G16 (Win 11)</dd>
              </div>
              <div>
                <dt>HWID Imzo:</dt>
                <dd className="blue">MAC-8821-UZB-2026-X86</dd>
              </div>
              <div>
                <dt>IP Manzil:</dt>
                <dd>213.230.70.*** (Toshkent)</dd>
              </div>
              <div>
                <dt>Litsenziya holati:</dt>
                <dd>
                  <span>FAOL (LOD 350 PRO)</span>
                </dd>
              </div>
            </dl>
            <div className="device-warning">
              <Asset name="809ec.svg" />
              <p>
                <strong>Himoya eslatmasi:</strong> Darslar va shablonlar faqat ushbu noutbukda
                ochiladi. Dinamik steganografik suv belgisi faollashtirildi.
              </p>
            </div>
          </section>
        </div>
        <div className="success-actions">
          <Link href="/sign-in" className="button button-primary">
            <Asset name="7d542.svg" /> LMS Portalga o‘tish va 1-darsni boshlash
          </Link>
          <button
            className="button button-outline"
            type="button"
            onClick={() => unavailable("RTE shablon")}
          >
            <Asset name="d20df.svg" /> RTE Shablonni yuklab olish (145 MB)
          </button>
        </div>
        <div className="success-telegram">
          <span className="success-telegram-icon">
            <Asset name="abdfc.svg" />
          </span>
          <p>
            <strong>Telegram xavfsizlik botimizga (@BIMProSecurityBot) xush kelibsiz!</strong>{" "}
            Barcha kirish ma’lumotlari, dars jadvali va kvitansiya Telegram hisobingizga yuborildi.
          </p>
          <button type="button" onClick={() => unavailable("Telegram bot ulanishi")}>
            Botni ochish <Asset name="26f0d.svg" />
          </button>
        </div>
      </article>
      <p className="success-status" role="status">
        {status}
      </p>
    </div>
  );
}
