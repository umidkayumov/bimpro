import Image from "next/image";
import { Asset } from "../ui/asset";

const metrics = [
  ["6+ Yil", "Amaliy loyiha staji"],
  ["QMQ & RTE", "To‘liq mos shablonlar"],
  ["100% Amaliy", "Haqiqiy obyekt asosida"],
  ["Ekspertiza", "Davlat tekshiruvi tajribasi"],
];

export function Hero() {
  return (
    <>
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="engineering-badge">
            <i />
            <strong>QMQ 2.01.05-19 & ISO 19650</strong>
            <span className="badge-divider">|</span>
            <span>O‘ZBEKISTON ME’YORLARIGA MOS BIM TA‘LIM</span>
          </div>
          <h1 id="hero-title">
            BIM-loyihalash va
            <br className="desktop-break" /> muhandislik tizimlarini
            <br className="desktop-break" /> <em>amalda</em> o‘rganing
          </h1>
          <p className="hero-description">
            Revit MEP (OViK, VK), AR, KR va Navisworks bo‘yicha chuqurlashtirilgan amaliy kurslar.
            Quruq nazariyasiz — real O‘zbekiston obyektlari, tayyor milliy RTE shablonlar va Davlat
            Ekspertizasidan o‘tish tajribasi.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#courses">
              Kurslarni ko‘rish <Asset name="1dcbd.svg" />
            </a>
            <a className="button button-soft" href="#lesson">
              <Asset name="54f1e.svg" /> Bepul sinov darsi
            </a>
          </div>
          <dl className="trust-metrics">
            {metrics.map(([value, label]) => (
              <div key={value}>
                <dt>
                  <i />
                  {value}
                </dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="hero-visual">
          <Image
            src="/figma/bim-viewport.png"
            alt="Revit BIM modeli: havo kanallari, ShNK nazorati va muvaffaqiyatli audit ko‘rsatilgan muhandislik interfeysi"
            width={564}
            height={542}
            preload
            sizes="(max-width: 767px) 92vw, (max-width: 1200px) 44vw, 564px"
          />
        </div>
      </section>
      <div className="standards-rail" id="standards">
        <div className="shell standards-inner">
          <span className="standards-label">
            <Asset name="1f5ca.svg" /> STANDARTLAR & DASTURLAR:
          </span>
          <ul>
            {[
              "Autodesk Revit",
              "Navisworks Manage",
              "Dynamo Scripting",
              "Davlat Ekspertizasi",
              "O‘zbekiston QMQ / ShNK",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
