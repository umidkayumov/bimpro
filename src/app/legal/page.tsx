import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = { title: "Huquqiy ma‘lumotlar" };
export default function LegalPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="legal-page shell">
        <p className="eyebrow blue">BIMPRO ACADEMY</p>
        <h1>Huquqiy ma‘lumotlar</h1>
        <section id="privacy">
          <h2>Maxfiylik siyosati</h2>
          <p>
            Rasmiy maxfiylik siyosatini olish uchun{" "}
            <a href="mailto:info@bimpro.uz">info@bimpro.uz</a> bilan bog‘laning.
          </p>
          <p>
            Ushbu sahifadagi korporativ so‘rov shakli ma’lumotlaringizni brauzeringizda tayyorlaydi.
            Email ilovangizda yuborishni tasdiqlamaguningizcha so‘rov jo‘natilmaydi.
          </p>
        </section>
        <section id="terms">
          <h2>Foydalanish shartlari</h2>
          <p>
            Ro‘yxatdan o‘tish va kursdan foydalanishdan oldin akademiyaning rasmiy foydalanish
            shartlarini administrator orqali oling.
          </p>
        </section>
        <section id="offer">
          <h2>Ommaviy offerta</h2>
          <p>
            Kurs bo‘yicha amaldagi narxlar, xizmat shartlari va rasmiy shartnomani olish uchun{" "}
            <a href="tel:+998976651625">+998 97 665 16 25</a> raqamiga murojaat qiling.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
