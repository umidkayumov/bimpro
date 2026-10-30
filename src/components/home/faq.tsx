"use client";

import { useState } from "react";
import { faqItems } from "@/lib/content";
import { Asset } from "../ui/asset";

export function Faq() {
  const [open, setOpen] = useState<ReadonlySet<number>>(
    () => new Set(faqItems.map((_, index) => index)),
  );
  function toggle(index: number) {
    setOpen((previous) => {
      const next = new Set(previous);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }
  return (
    <section className="faq-section shell" id="faq" aria-labelledby="faq-title">
      <div className="section-heading centered">
        <p className="eyebrow">SAVOLLAR VA JAVOBLAR // KONSULTATSIYA</p>
        <h2 id="faq-title">Ko‘p beriladigan texnik savollar</h2>
        <p>
          O‘quv jarayoni, dasturiy ta’minot, mezonlar va to‘lov shartlari haqida batafsil ma‘lumot.
        </p>
      </div>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <article className="faq-item" key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={open.has(index)}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                onClick={() => toggle(index)}
              >
                <span>
                  <i />
                  {item.question}
                </span>
                <span className={`faq-chevron ${open.has(index) ? "is-open" : ""}`}>
                  <Asset name="51f85.svg" />
                </span>
              </button>
            </h3>
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className="faq-answer"
              data-open={open.has(index)}
              inert={!open.has(index)}
            >
              <div>
                <p>{item.answer}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
