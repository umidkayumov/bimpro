import Image from "next/image";
import { telegramUrl } from "@/lib/content";
import { Asset } from "../ui/asset";
import { Reveal } from "../ui/reveal";

export function LessonPreview() {
  return (
    <section className="lesson-section shell" id="lesson" aria-labelledby="lesson-title">
      <Reveal>
        <div className="section-heading centered">
          <p className="section-tag">
            <i /> TRANSPARENT TA‘LIM // REAL DARSDAN PARCHA
          </p>
          <h2 id="lesson-title">Dars sifati va metodologiyasi bilan tanishing</h2>
          <p>
            Kursni xarid qilishdan oldin amaliy dars strukturasi va o‘qituvchi mahoratini real video
            darslik namunasi orqali bevosita sinab ko‘ring.
          </p>
        </div>
        <div className="lesson-player">
          <div className="player-title">
            <span>
              <Asset name="e7824.svg" /> 1-Dars: Revit OViK Shablonini sozlash va havo tarmog‘i
              modellashtirish
            </span>
            <b>1080p FHD</b>
          </div>
          <div className="lesson-poster">
            <Image
              src="/figma/fdb79.png"
              alt="Bepul Revit OViK darsi: binodagi shamollatish tarmog‘i va havo kanallarini modellashtirish"
              fill
              sizes="(max-width: 950px) 92vw, 896px"
            />
            <a
              className="play-button"
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bepul video darsni Telegramda ochish"
            >
              <Asset name="611c7.svg" />
            </a>
            <div className="lesson-controls">
              <div className="player-caption">
                <span>08:30 / 28:45</span>
                <span>BO‘LIM: SHAMOLLATISH TRASSASINI 3D LOYIHALASH</span>
              </div>
              <div className="lesson-progress" aria-hidden="true">
                <span />
              </div>
              <div className="lesson-chapters">
                <span>00:00 • QMQ RTE sozlash</span>
                <span>08:30 • Trassani 3D chizish</span>
                <span>19:45 • Avto-spetsifikatsiya</span>
              </div>
            </div>
          </div>
          <div className="lesson-footer">
            <p>
              <Asset name="f380c.svg" /> Ushbu darsning amaliy RTE fayli Telegram kanalimizda bepul
              ochiq.
            </p>
            <a
              className="button button-primary"
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Asset name="14a62.svg" /> Telegramda darsni ko‘rish
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
