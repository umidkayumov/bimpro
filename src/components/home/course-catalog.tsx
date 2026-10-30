"use client";

import Image from "next/image";
import { useState } from "react";
import { courses, filters, formatPrice, type CourseFilter } from "@/lib/content";
import { Asset } from "../ui/asset";
import { EnrollmentDialog } from "./enrollment-dialog";

export function CourseCatalog() {
  const [filter, setFilter] = useState<CourseFilter>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const visible = courses.filter((course) => filter === "all" || course.category === filter);
  const selected = courses.find((course) => course.id === selectedId);
  return (
    <section className="catalog shell section-space" id="courses" aria-labelledby="courses-title">
      <div className="catalog-heading">
        <div className="catalog-intro">
          <p className="eyebrow blue">KURS KATALOGI // 2027 O‘QUV DASTURI</p>
          <h2 id="courses-title">
            Muhandislik yo‘nalishlari bo‘yicha
            <br /> professional kurslar
          </h2>
          <p>
            Har bir kurs O‘zbekiston milliy mezonlariga moslashtirilgan real obyektlar bazasida,
            qat’iy standartlar asosida o‘qitiladi.
          </p>
        </div>
        <div className="course-filters" role="group" aria-label="Kurs yo‘nalishi">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={filter === item.id}
              className={item.id === "free" ? "free-filter" : ""}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <p className="visually-hidden" aria-live="polite">
        {visible.length} ta kurs ko‘rsatilmoqda
      </p>
      <div className="course-grid" key={filter}>
        {visible.map((course) => (
          <article
            className={`course-card ${course.price === 0 ? "course-free" : ""}`}
            key={course.id}
          >
            <div className="course-image">
              <Image
                src={`/figma/${course.image}`}
                alt={`${course.title} — dasturdagi amaliy loyiha`}
                fill
                sizes="(max-width: 639px) 92vw, (max-width: 1000px) 46vw, 32vw"
              />
              <span className="course-code">
                <i />
                {course.id}
              </span>
              <span className={`course-standard ${course.category}`}>{course.standard}</span>
            </div>
            <div className="course-body">
              <div className="course-meta">
                <span>DARAJASI: {course.level}</span>
                <span>{course.duration}</span>
              </div>
              <h3 aria-label={course.title}>
                {course.titleLines.map((line, index) => (
                  <span key={line}>
                    {line}
                    {index === 0 ? " " : null}
                  </span>
                ))}
              </h3>
              <p className="course-description">{course.description}</p>
              <ul className="course-features">
                {course.features.map((feature) => (
                  <li key={feature}>
                    <Asset name="7e354.svg" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="course-footer">
                <div>
                  <span className="price-label">NARXI</span>
                  <strong className="course-price">{formatPrice(course.price)}</strong>
                </div>
                {course.price === 0 ? (
                  <a href="#lesson" className="button button-primary button-small">
                    Darsni boshlash <Asset name="611c7.svg" />
                  </a>
                ) : (
                  <button
                    type="button"
                    className="button button-soft button-small"
                    onClick={() => setSelectedId(course.id)}
                  >
                    Yozilish <Asset name="97115.svg" />
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      {selected && <EnrollmentDialog course={selected} onClose={() => setSelectedId(null)} />}
    </section>
  );
}
