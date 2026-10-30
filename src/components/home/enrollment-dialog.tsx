"use client";

import { useEffect, useRef } from "react";
import { formatPrice, telegramUrl, type Course } from "@/lib/content";
import { Asset } from "../ui/asset";

export function EnrollmentDialog({ course, onClose }: { course: Course; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    dialog?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = overflow;
      previousFocus?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="enrollment-dialog"
      aria-labelledby="enrollment-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="dialog-content">
        <button type="button" className="dialog-close" aria-label="Yopish" onClick={onClose}>
          ×
        </button>
        <p className="eyebrow blue">KURSGA YOZILISH // {course.id}</p>
        <h2 id="enrollment-title">{course.title}</h2>
        <p>
          {course.duration} · {course.level}
        </p>
        <ul className="course-features">
          {course.features.map((feature) => (
            <li key={feature}>
              <Asset name="7e354.svg" />
              {feature}
            </li>
          ))}
        </ul>
        <strong className="course-price">{formatPrice(course.price)}</strong>
        <p>Kursga yozilish va to‘lov shartlari haqida administrator bilan bog‘laning.</p>
        <a
          className="button button-primary"
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram orqali bog‘lanish <Asset name="611c7.svg" />
        </a>
        <a className="button button-outline" href="tel:+998976651625">
          +998 97 665 16 25
        </a>
      </div>
    </dialog>
  );
}
