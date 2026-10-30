import Link from "next/link";
import { telegramUrl } from "@/lib/content";
import { Asset } from "./ui/asset";

export function Footer() {
  return (
    <footer className="site-footer shell">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <Asset name="3d491.svg" alt="BIMPro Academy" />
          </Link>
          <p>
            O‘zbekistonda professional BIM texnologiyalari, QMQ/ShNK me’yorlari asosida loyihalash
            va xalqaro ISO 19650 axborot modellashtirish tizimini joriy qiluvchi muhandislik
            akademiyasi.
          </p>
          <span className="footer-standard">
            <i /> QMQ 2.01.05-19 & ISO 19650 INTEGRATED
          </span>
        </div>
        <div>
          <h2>YO‘NALISHLAR</h2>
          <Link href="/#courses">Kurslar</Link>
          <Link href="/#enterprise">Korporativ Ta’lim</Link>
          <a href="mailto:info@bimpro.uz?subject=Vakansiyalar">Bo‘sh ish o‘rinlari</a>
        </div>
        <div>
          <h2>BOG‘LANISH</h2>
          <a className="footer-contact" href="tel:+998976651625">
            <Asset name="544f5.svg" /> +998 97 665 16 25
          </a>
          <a className="footer-contact" href="mailto:info@bimpro.uz">
            <Asset name="fcd90.svg" /> info@bimpro.uz
          </a>
          <p className="footer-contact">
            <Asset name="38812.svg" /> Toshkent shahri, O‘zbekiston
          </p>
        </div>
        <div>
          <h2>IJTIMOIY TARMOQLAR</h2>
          <p>Muhandislik xulosalari va darsliklar:</p>
          <div className="social-links">
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
              <b>TG</b> @BimPro_Academy
            </a>
            <span aria-disabled="true" title="Rasmiy havola tez orada qo‘shiladi">
              <b>YT</b> YouTube
            </span>
            <span aria-disabled="true" title="Rasmiy havola tez orada qo‘shiladi">
              <b>IN</b> LinkedIn
            </span>
            <span aria-disabled="true" title="Rasmiy havola tez orada qo‘shiladi">
              <b>IG</b> Instagram
            </span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2027 bimpro.uz — BIMPro Academy. Barcha huquqlar himoyalangan.</p>
        <div>
          <span>SYS_VER: 2.4.0</span>
          <Link href="/legal#privacy">Maxfiylik siyosati</Link>
          <Link href="/legal#terms">Foydalanish shartlari</Link>
          <Link href="/legal#offer">Ommaviy offerta</Link>
        </div>
      </div>
    </footer>
  );
}
