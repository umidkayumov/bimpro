import { Asset } from "../ui/asset";
import { Reveal } from "../ui/reveal";

export function CallToAction() {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <Reveal className="shell">
        <p className="section-tag">BIMPRO ACADEMY // PROFESSIONAL KARYERA</p>
        <h2 id="cta-title">
          BIM mutaxassisiga aylaning va
          <br /> O‘zbekistonning eng yirik
          <br /> loyihalarida ishlang
        </h2>
        <p>
          Bugunoq zamonaviy BIM standartlariga o‘ting. Nazariyani ortda qoldirib,
          <br /> professional loyihalash tezligi va yuqori daromad sari qadam tashlang.
        </p>
        <div className="cta-actions">
          <a className="button button-white" href="#courses">
            Kursga yozilish <Asset name="5ba84.svg" />
          </a>
          <a className="button button-glass" href="tel:+998888843232">
            <Asset name="31e1f.svg" /> +998 88 884-32-32
          </a>
        </div>
        <ul>
          {[
            "Rasmiy Sertifikat beriladi",
            "Shaxsiy Mentor ko‘magi",
            "Ishga joylashish bo‘yicha portfolio tayyorlash",
          ].map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
