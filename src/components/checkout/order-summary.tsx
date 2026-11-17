import { Asset } from "@/components/ui/asset";
import { checkoutOffer, formatUZS } from "@/lib/checkout";

export function OrderSummary({ discount }: { discount: number }) {
  return (
    <aside className="order-summary" aria-labelledby="order-title">
      <div className="order-heading">
        <div>
          <h2 id="order-title">Buyurtma tarkibi</h2>
          <p>PAKET: BIMPRO MASTER PRO</p>
        </div>
        <span className="purchase-tag">QMQ 2024 / ShNK</span>
      </div>
      <div className="order-course">
        <div className="order-blueprint" aria-hidden="true">
          <Asset name="70e45.svg" />
        </div>
        <div className="order-course-code">
          <span>[REVIT-MEP-HVAC-2024]</span>
          <span>LOD 350 / O‘ViK</span>
        </div>
        <h3>{checkoutOffer.title}</h3>
        <p>
          O‘zbekiston qurilish me’yorlariga (ShNK 2.01.05) to‘liq moslashtirilgan mukammal amaliy
          video-kurs.
        </p>
        <div className="order-course-tags">
          <span>10 ta amaliy modul</span>
          <span>Umrbod kirish</span>
          <span>Revit 2022-2025</span>
        </div>
      </div>
      <p className="purchase-label bonuses-label">PAKET ICHIGA KIRITILGAN BEPUL BONUSLAR:</p>
      <ul className="order-bonuses">
        {checkoutOffer.bonuses.map(([title, description], index) => (
          <li key={title}>
            <Asset name="22405.svg" />
            <div>
              <div className="bonus-title">
                <h3>{title}</h3>
                <span>BEPUL</span>
              </div>
              <p>{description}</p>
              {index === 0 && <s>Asl narxi: 1 500 000 UZS</s>}
            </div>
          </li>
        ))}
      </ul>
      <dl className="order-totals">
        <div>
          <dt>Kursning asl narxi:</dt>
          <dd>
            <s>{formatUZS(checkoutOffer.originalPrice)} UZS</s>
          </dd>
        </div>
        <div className="teal">
          <dt>
            <Asset name="68255.svg" /> Maxsus chegirma{discount ? ` (${checkoutOffer.promo})` : ""}:
          </dt>
          <dd>-{formatUZS(discount)} UZS</dd>
        </div>
        <div>
          <dt>Shablonlar va kalkulyatorlar:</dt>
          <dd className="teal">0 UZS (Qo‘shilgan)</dd>
        </div>
        <div>
          <dt>To‘lov komissiyasi (0%):</dt>
          <dd>0 UZS</dd>
        </div>
      </dl>
      <div className="order-total" aria-live="polite">
        <span className="purchase-label">JAMI TO‘LOV MIQDORI:</span>
        <div>
          <strong>{formatUZS(checkoutOffer.originalPrice - discount)}</strong>
          <b>UZS</b>
        </div>
        <p>Yakuniy narx to‘lovni tasdiqlashdan oldin tekshiriladi.</p>
      </div>
      <div className="purchase-guarantee">
        <div className="guarantee-icon">
          <Asset name="8d486.svg" />
        </div>
        <div>
          <h3>14 kunlik 100% pulni qaytarish kafolati</h3>
          <p>
            Agar kurs va shablonlar sifati sizni qanoatlantirmasa, dars boshlanganidan so‘ng 14 kun
            ichida to‘lovingiz so‘zsiz to‘liq qaytariladi.
          </p>
        </div>
      </div>
      <a className="purchase-support" href="tel:+998976651625">
        <Asset name="f9095.svg" />
        <span>
          <strong>Savollaringiz bormi?</strong>
          <small>Muhandis-maslahatchi yordami</small>
        </span>
        <b>+998 97 665 16 25</b>
      </a>
    </aside>
  );
}
