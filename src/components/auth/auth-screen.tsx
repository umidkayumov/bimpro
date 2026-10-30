"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Asset } from "../ui/asset";
import { telegramUrl } from "@/lib/content";

const pillars = [
  {
    icon: "play_lesson",
    title: "Amaliy video darslar va real topshiriqlar",
    description:
      "Toshkentdagi 5 qavatli ma’muriy bino va muhandislik tarmoqlari bo‘yicha bosqichma-bosqich amaliyot.",
  },
  {
    icon: "rule_folder",
    title: "Tayyor O‘zbekiston QMQ/ShNK RTE shabloni",
    description:
      "400+ parametrli oilalar (families), avtomatlashtirilgan spetsifikatsiyalar va ekspertiza jadvallari.",
  },
  {
    icon: "forum",
    title: "Telegram yopiq jamiyat & Shaxsiy mentorlik",
    description:
      "Bosh BIM-muhandis Farrux Mahkamjonov bilan to‘g‘ridan-to‘g‘ri kod, klesh va model tahlili.",
  },
];

function Symbol({ children }: { children: string }) {
  return (
    <span className="material-symbol" aria-hidden="true">
      {children}
    </span>
  );
}

export function AuthScreen({ mode }: { mode: "register" | "sign-in" }) {
  const register = mode === "register";
  const [notice, setNotice] = useState<string | null>(null);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(
      "Hozircha SMS orqali kirish mavjud emas. Hisob ochish uchun administrator bilan bog‘laning.",
    );
  }
  function socialNotice(provider: string) {
    setNotice(`${provider} orqali kirish hozircha mavjud emas. Administrator bilan bog‘laning.`);
  }

  return (
    <main id="main-content" className="auth-screen">
      <aside className="auth-brand-panel">
        <div className="auth-brand-top">
          <Link href="/" aria-label="Bosh sahifaga qaytish">
            <Asset name="b8fff.svg" alt="BIMPro Academy" />
          </Link>
          <span className="auth-version">SYS_VER: 1.2.6</span>
        </div>
        <div className="auth-value">
          <p className="auth-tag">
            <i /> O‘ZBEKISTON QMQ / ShNK STANDARTLARIGA MOS PLATFORMA
          </p>
          <h1>
            BIM-loyihalash va
            <br /> muhandislik olamiga
            <br /> xush kelibsiz
          </h1>
          <p>
            Bitta akkount orqali barcha amaliy darslar, tayyor O‘zbekiston QMQ/ShNK RTE shablonlari
            va interaktiv LMS tizimidan to‘liq foydalaning.
          </p>
        </div>
        <div className="auth-pillars">
          {pillars.map((pillar) => (
            <article key={pillar.icon}>
              <div className="auth-pillar-icon">
                <Symbol>{pillar.icon}</Symbol>
              </div>
              <div>
                <h2>{pillar.title}</h2>
                <p>{pillar.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="auth-brand-bottom">
          <span>© 2026 BIMPro Academy · Toshkent sh., O‘zbekiston</span>
          <span>ISO 19650 COMPLIANT</span>
        </div>
      </aside>
      <section className="auth-form-panel" aria-labelledby="auth-title">
        <div className="auth-form-container">
          <nav className="auth-tabs" aria-label="Hisobga kirish">
            <Link href="/register" aria-current={register ? "page" : undefined}>
              <Symbol>person_add</Symbol> Ro‘yxatdan o‘tish
            </Link>
            <Link href="/sign-in" aria-current={!register ? "page" : undefined}>
              <Symbol>login</Symbol> Kirish
            </Link>
          </nav>
          <div className="auth-heading">
            <h2 id="auth-title">{register ? "Yangi hisob yaratish" : "Tizimga kirish"}</h2>
            <p>
              {register
                ? "Bepul darslarni ko‘rish va QMQ/ShNK RTE shablonlarni yuklash uchun profilingizni oching."
                : "BIM darslaringiz va yuklangan shablonlaringizga qaytish uchun tizimga kiring."}
            </p>
          </div>
          <div className="auth-social">
            <button
              type="button"
              className="button telegram-button"
              onClick={() => socialNotice("Telegram")}
            >
              <Asset name="7ffe1.svg" /> Telegram orqali tezkor kirish
            </button>
            <button
              type="button"
              className="button google-button"
              onClick={() => socialNotice("Google")}
            >
              <Asset name="d201a.svg" /> Google orqali davom etish
            </button>
          </div>
          <div className="auth-divider">
            <span>YOKI TELEFON RAQAMINGIZ ORQALI</span>
          </div>
          <form className="auth-form" onSubmit={submit}>
            {register && (
              <label>
                ISM VA FAMILIYA <span className="required-mark">*</span>
                <span className="auth-input-wrap">
                  <Symbol>badge</Symbol>
                  <input
                    name="name"
                    placeholder="Farrux Mahkamjonov"
                    autoComplete="name"
                    required
                    minLength={3}
                    maxLength={100}
                  />
                </span>
              </label>
            )}
            <label>
              TELEFON RAQAMINGIZ <span className="required-mark">*</span>
              <span className="phone-input">
                <span>
                  🇺🇿 <b>+998</b>
                </span>
                <input
                  type="tel"
                  name="phone"
                  inputMode="tel"
                  autoComplete="tel-national"
                  placeholder="(90) 123-45-67"
                  required
                  pattern={String.raw`(?:[\s\(\)\-]*\d){9}[\s\(\)\-]*`}
                  title="9 xonali telefon raqamingizni kiriting"
                />
              </span>
            </label>
            {register && (
              <label>
                MUHANDISLIK YO‘NALISHINGIZ <span className="required-mark">*</span>
                <span className="auth-input-wrap">
                  <Symbol>engineering</Symbol>
                  <select name="direction" defaultValue="mep" required>
                    <option value="mep">Revit MEP (O‘ViK - Isitish va Shamollatish)</option>
                    <option value="vk">Revit MEP: Suv ta‘minoti va Kanalizatsiya</option>
                    <option value="architecture">Revit Architecture (AR)</option>
                    <option value="structure">Revit Structure (KR)</option>
                    <option value="navisworks">Navisworks Manage</option>
                  </select>
                </span>
              </label>
            )}
            <div className="auth-terms">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">
                Men <Link href="/legal#terms">Foydalanish shartlari</Link> va{" "}
                <Link href="/legal#privacy">Maxfiylik siyosati</Link>ga to‘liq roziman.
              </label>
            </div>
            <button className="button button-primary" type="submit">
              {register ? "SMS kodini olish va Davom etish" : "SMS kodi bilan kirish"}
              <Symbol>arrow_forward</Symbol>
            </button>
          </form>
          {notice && (
            <div className="auth-notice" role="status">
              <p>{notice}</p>
              <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
                Administratorga yozish ↗
              </a>
            </div>
          )}
          <p className="auth-switch">
            {register ? "Profilingiz bormi?" : "Akkauntingiz yo‘qmi?"}{" "}
            <Link href={register ? "/sign-in" : "/register"}>
              {register ? "Tizimga kirish" : "Ro‘yxatdan o‘tish"} ›
            </Link>
          </p>
          {!register && (
            <p className="auth-protocol">
              <Asset name="2d828.svg" />
              <span>BIMPRO::AUTH_PROTOCOL // QMQ 2.01.05 & ShNK 1.04.44-24 STANDARD</span>
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
