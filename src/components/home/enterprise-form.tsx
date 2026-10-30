"use client";

import { useState, type FormEvent } from "react";
import { Asset } from "../ui/asset";

export function EnterpriseForm() {
  const [draft, setDraft] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function prepareRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      "Korporativ ta’lim va audit uchun so‘rov",
      `Mas’ul shaxs: ${form.get("name")}`,
      `Kompaniya: ${form.get("company")}`,
      `Muhandislar soni: ${form.get("teamSize")}`,
      `Telefon: ${form.get("phone")}`,
      `Yo‘nalishlar: ${form.getAll("needs").join(", ") || "Konsultatsiya"}`,
    ].join("\n");
    setDraft(body);
    setCopied(false);
  }

  async function copyRequest() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <form
      className="enterprise-form"
      onSubmit={prepareRequest}
      onChange={() => {
        setDraft(null);
        setCopied(false);
      }}
    >
      <h3>Korporativ taklif va audit buyurtmasi</h3>
      <p>
        Jamoangiz hajmi va ehtiyojlariga moslashtirilgan o‘quv rejasi hamda tijoriy taklif taqdim
        etamiz.
      </p>
      <label>
        MAS‘UL SHAXS (F.I.O.)
        <input
          name="name"
          autoComplete="name"
          placeholder="Masalan: Aziz Rahimov"
          required
          minLength={3}
          maxLength={100}
        />
      </label>
      <label>
        KOMPANIYA YOKI LOYIHA INSTITUTI NOMI
        <input
          name="company"
          autoComplete="organization"
          placeholder="Masalan: Kommunal LITI / O‘zshaharsozlik LITI"
          required
          maxLength={150}
        />
      </label>
      <div className="form-row">
        <label>
          MUHANDISLAR SONI
          <select name="teamSize" defaultValue="1–5">
            <option value="1–5">1 – 5 nafar mutaxassis</option>
            <option value="6–15">6 – 15 nafar mutaxassis</option>
            <option value="16–30">16 – 30 nafar mutaxassis</option>
            <option value="30+">30 dan ortiq mutaxassis</option>
          </select>
        </label>
        <label>
          TELEFON RAQAM
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="+998 90 123-45-67"
            required
            pattern={String.raw`(?:\+?998[\s\(\)\-]*)?(?:\d[\s\(\)\-]*){9}`}
            title="Telefon raqamingizni kiriting, masalan +998 90 123-45-67"
          />
        </label>
      </div>
      <fieldset>
        <legend>ASOSIY EHTIYOJ YO‘NALISHI</legend>
        <div className="checkbox-grid">
          {["Revit MEP (OViK/VK)", "AR & KR Konstruksiya", "Navisworks Clash", "Audit tizimi"].map(
            (item, index) => (
              <label key={item}>
                <input type="checkbox" name="needs" value={item} defaultChecked={index === 0} />
                <span>{item}</span>
              </label>
            ),
          )}
        </div>
      </fieldset>
      <button className="button button-primary" type="submit">
        Maxsus taklif va taqdimot olish <Asset name="d3302.svg" />
      </button>
      {draft && (
        <div className="form-result" role="status">
          <strong>So‘rovingiz tayyor.</strong>
          <p>
            Yuborish uchun email ilovangizda xatni tasdiqlang yoki matnni nusxalab administratorga
            yuboring.
          </p>
          <a
            className="button button-primary"
            href={`mailto:info@bimpro.uz?subject=${encodeURIComponent("Korporativ ta’lim va audit so‘rovi")}&body=${encodeURIComponent(draft)}`}
          >
            Email orqali yuborish
          </a>
          <button className="button button-outline" type="button" onClick={copyRequest}>
            {copied ? "Nusxalandi ✓" : "So‘rovni nusxalash"}
          </button>
        </div>
      )}
      <p className="form-privacy">
        <Asset name="e5674.svg" /> Kompaniya ma‘lumotlari qat’iy maxfiy saqlanadi
      </p>
    </form>
  );
}
