"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Asset } from "@/components/ui/asset";
import { checkoutOffer, paymentMethods, formatUZS, type PaymentMethod } from "@/lib/checkout";
import { OrderSummary } from "./order-summary";

export function CheckoutForm() {
  const [method, setMethod] = useState<PaymentMethod>("click");
  const [promo, setPromo] = useState<string>(checkoutOffer.promo);
  const [discount, setDiscount] = useState<number>(checkoutOffer.discount);
  const [promoStatus, setPromoStatus] = useState(
    "BIMPRO2026 kodi faollashtirildi: -900 000 UZS maxsus chegirma hisoblandi!",
  );
  const [paymentStatus, setPaymentStatus] = useState("");
  const selected = paymentMethods.find((item) => item.id === method)!;
  const total = checkoutOffer.originalPrice - discount;

  function applyPromo() {
    const valid = promo.trim().toUpperCase() === checkoutOffer.promo;
    setDiscount(valid ? checkoutOffer.discount : 0);
    setPromoStatus(
      valid
        ? "BIMPRO2026 kodi faollashtirildi: -900 000 UZS maxsus chegirma hisoblandi!"
        : "Promokod topilmadi. Narx chegirmasiz hisoblandi.",
    );
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPaymentStatus(
      "To‘lov xizmati hozircha ulanmagan. Mablag‘ yechilmadi. Kursga yozilish uchun +998 97 665 16 25 raqamiga murojaat qiling.",
    );
  }

  return (
    <>
      <div className="purchase-progress shell">
        <ol aria-label="Sotib olish bosqichlari">
          <li>
            <b>1</b> Ma’lumotlar
          </li>
          <li aria-current="step">
            <b>2</b> To‘lov usuli
          </li>
          <li>
            <b>3</b> LMS Kirish
          </li>
        </ol>
      </div>
      <div className="purchase-grid shell">
        <form onSubmit={submit} className="purchase-form">
          <section className="purchase-block customer-block" aria-labelledby="customer-title">
            <div className="purchase-block-heading">
              <span className="step-number">01</span>
              <div>
                <h1 id="customer-title">Xaridor ma’lumotlari</h1>
                <p>Akkountingizga darslar avtomatik biriktiriladi</p>
              </div>
              <span className="purchase-tag teal">
                <Asset name="ec81c.svg" /> Muhandis Profil
              </span>
            </div>
            <div className="customer-fields">
              <label>
                <span>ISM VA FAMILIYA</span>
                <div className="purchase-input">
                  <Asset name="e3a37.svg" />
                  <input
                    name="name"
                    autoComplete="name"
                    placeholder="Ism va familiyangiz"
                    required
                    maxLength={120}
                  />
                </div>
              </label>
              <label>
                <span>TELEFON RAQAMI (SMS TASDIQLASH)</span>
                <div className="purchase-input">
                  <span aria-hidden="true">🇺🇿</span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="+998 (90) 123-45-67"
                    pattern={String.raw`(?:\+?998[\s\(\)\-]*)?(?:\d[\s\(\)\-]*){9}`}
                    required
                    title="9 xonali raqam yoki +998 bilan to‘liq raqam kiriting"
                  />
                </div>
              </label>
              <label className="customer-email">
                <span>E-POCHTA (CHEK VA ELEKTRON HISOB-FAKTURA UCHUN)</span>
                <div className="purchase-input">
                  <Asset name="61dbb.svg" />
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="siz@example.com"
                    required
                    maxLength={254}
                  />
                </div>
              </label>
            </div>
            <div className="purchase-direction">
              <i />
              <span>Loyihalash yo‘nalishi:</span>
              <strong>MEP-OViK-PRO // Revit MEP HVAC 2024</strong>
            </div>
          </section>
          <section className="purchase-block payment-block" aria-labelledby="payment-title">
            <div className="purchase-block-heading">
              <span className="step-number">02</span>
              <div>
                <h2 id="payment-title">To‘lov usulini tanlang</h2>
                <p>O‘zbekistonning rasmiy, litsenziyalangan to‘lov tizimlari</p>
              </div>
              <span className="purchase-tag">0% Komissiya</span>
            </div>
            <fieldset className="payment-options">
              <legend className="visually-hidden">To‘lov usuli</legend>
              {paymentMethods.map((item) => (
                <label
                  key={item.id}
                  className={`payment-option ${item.id} ${method === item.id ? "is-selected" : ""}`}
                >
                  <input
                    type="radio"
                    name="payment-method"
                    value={item.id}
                    checked={method === item.id}
                    onChange={() => {
                      setMethod(item.id);
                      setPaymentStatus("");
                    }}
                  />
                  <div className="payment-option-top">
                    <span className="payment-mark">{item.mark}</span>
                    <span className="payment-name">
                      <strong>{item.name}</strong>
                      <small>{item.subtitle}</small>
                    </span>
                    <span className="payment-radio" aria-hidden="true">
                      {method === item.id && <Asset name="c7a53.svg" />}
                    </span>
                  </div>
                  <div className="payment-option-bottom">
                    <span>
                      {item.id === "click" && <Asset name="3012c.svg" />}
                      {item.benefit}
                    </span>
                    <small>{item.detail}</small>
                  </div>
                </label>
              ))}
            </fieldset>
            <div className="payment-explanation" aria-live="polite">
              <Asset name="56ef6.svg" />
              <div>
                <p>
                  <strong>{selected.name}</strong> orqali to‘lov. To‘lov xizmati ulangach, xavfsiz
                  to‘lov shlyuzida davom etasiz.
                </p>
                {method === "click" && (
                  <small>
                    <Asset name="67ff7.svg" /> Ushbu summa uchun keshbek:{" "}
                    {formatUZS(Math.round(total * 0.02))} UZS.
                  </small>
                )}
                {method === "installments" && (
                  <small>Muddat va oylik to‘lov miqdorini administrator bilan aniqlang.</small>
                )}
              </div>
            </div>
            <div className="promo-area">
              <div className="promo-label">
                <label htmlFor="promo">Promokod yoki vaucher</label>
                {discount > 0 && <span className="purchase-tag teal">FAOL CHEGIRMA</span>}
              </div>
              <div className="promo-controls">
                <div className="purchase-input">
                  <Asset name="4ac8d.svg" />
                  <input
                    id="promo"
                    value={promo}
                    onChange={(event) => setPromo(event.target.value)}
                    maxLength={40}
                    spellCheck={false}
                    autoCapitalize="characters"
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        applyPromo();
                      }
                    }}
                  />
                </div>
                <button type="button" onClick={applyPromo}>
                  Qo‘llash
                </button>
              </div>
              <p className={`promo-status ${discount ? "teal" : ""}`} role="status">
                <Asset name="77fcb.svg" />
                {promoStatus}
              </p>
            </div>
          </section>
          <div className="purchase-submit">
            <label className="purchase-consent">
              <input name="terms" type="checkbox" required />
              <span>
                Men <Link href="/legal#offer">Ommaviy oferta</Link> shartlari va{" "}
                <Link href="/legal#refund">Mablag‘ni qaytarish siyosati</Link> bilan tanishdim hamda
                rozilik bildiraman.
              </span>
            </label>
            <button className="button button-primary purchase-pay" type="submit">
              <Asset name="b621d.svg" />
              {formatUZS(total)} UZS To‘lash ({selected.name} orqali)
              <Asset name="77060.svg" />
            </button>
            <p className="payment-status" role="status">
              {paymentStatus}
            </p>
            <p className="purchase-encryption">
              <Asset name="af87b.svg" /> To‘lov xizmati ulanishi kutilmoqda. Bu sahifada mablag‘
              yechilmaydi.
            </p>
            <div className="purchase-assurance">
              <span>
                <Asset name="64026.svg" /> PCI-DSS Level 1
              </span>
              <span>
                <Asset name="8350c.svg" /> Markaziy Bank Litsenziyasi
              </span>
              <span>
                <Asset name="df7bc.svg" /> 14 Kunlik Kafolat
              </span>
            </div>
          </div>
        </form>
        <OrderSummary discount={discount} />
      </div>
    </>
  );
}
