import { enterpriseBenefits } from "@/lib/content";
import { Asset } from "../ui/asset";
import { Reveal } from "../ui/reveal";
import { EnterpriseForm } from "./enterprise-form";

export function Enterprise() {
  return (
    <section className="enterprise-section" id="enterprise" aria-labelledby="enterprise-title">
      <Reveal className="shell enterprise-grid">
        <div className="enterprise-copy">
          <p className="section-tag">
            <Asset name="cee54.svg" /> B2B // LOYIHA INSTITUTLARI VA QURILISH KOMPANIYALARI
          </p>
          <h2 id="enterprise-title">Muhandislik jamoangizni BIM tizimiga professional o‘tkazing</h2>
          <p className="enterprise-description">
            Loyiha xatolarini (kolliziyalarni) keskin kamaytiring, kompaniyangiz uchun QMQ
            standartlariga mos yagona korporativ RTE shablonini shakllantiring va chizma chiqarish
            muddatlarini 40% ga qisqartiring.
          </p>
          <div className="enterprise-benefits">
            {enterpriseBenefits.map((item) => (
              <article key={item.title}>
                <div className="benefit-icon">
                  <Asset name={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
        <EnterpriseForm />
      </Reveal>
    </section>
  );
}
