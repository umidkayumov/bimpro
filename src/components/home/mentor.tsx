import Image from "next/image";
import { mentorBenefits } from "@/lib/content";
import { Asset } from "../ui/asset";
import { Reveal } from "../ui/reveal";

export function Mentor() {
  return (
    <section className="mentor-section" id="about" aria-labelledby="mentor-title">
      <Reveal className="shell mentor-grid">
        <div className="mentor-copy">
          <p className="section-tag dark-tag">
            <Asset name="a238a.svg" /> AMALIY TAJRIBA VA TRANSPARENTLIK
          </p>
          <h2 id="mentor-title">Darslar kim tomonidan o‘tiladi?</h2>
          <div className="mentor-person">
            <div className="mentor-avatar">FM</div>
            <div>
              <h3>Farrux Mahkamjonov</h3>
              <p>Bosh muhandis-loyihachi (OViK/VK) & BIM amaliyotchi mutaxassis</p>
            </div>
          </div>
          <p className="mentor-description">
            Internetdagi quruq nazariyachi va dars sotuvchi emas. Yirik loyiha institutlarida 6
            yildan ortiq bosh muhandis sifatida faoliyat yuritib kelayotgan, 20 dan ziyod sanoat va
            ko‘p funksiyali komplekslarning BIM loyihalarini Davlat Ekspertizasidan muvaffaqiyatli
            himoya qilgan amaliyotchi mutaxassis.
          </p>
          <ul className="mentor-benefits">
            {mentorBenefits.map((item) => (
              <li key={item.title}>
                <span className="mentor-benefit-icon">
                  <Asset name={item.icon} />
                </span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <aside className="project-archive">
          <div className="archive-image">
            <Image
              src="/figma/1aff7.png"
              alt="BIM muhandisining ish stoli: Revit loyihasi va muhandislik chizmalari"
              fill
              sizes="(max-width: 900px) 90vw, 39vw"
            />
            <span>PROJECT_ARCHIVE: UZ_TASHKENT_COMMERCIAL_CENTER</span>
          </div>
          <dl className="archive-stats">
            {[
              ["Ekspertizadan o‘tgan:", "20+ Obyekt"],
              ["O‘qitilgan mutaxassis:", "350+ Muhandis"],
              ["Shablon parametrlari:", "400+ Shared Param"],
              ["Kolliziya aniqligi:", "99.8% Aniq"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <p className="archive-compliance">
            <Asset name="ce3ea.svg" />
            <span>
              Barcha ta’lim dasturlari O‘zbekiston Qurilish vazirligi reglamentlariga muvofiq ishlab
              chiqilgan.
            </span>
          </p>
        </aside>
      </Reveal>
    </section>
  );
}
