"use client";

import Link from "next/link";
import { useState } from "react";
import { Asset } from "./ui/asset";

const navigation = [
  ["/#courses", "Kurslar"],
  ["/#about", "Biz Haqimizda"],
  ["/#enterprise", "Korporativ Ta’lim"],
  ["/#standards", "QMQ Standartlari"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link href="/" aria-label="BIMPro Academy — bosh sahifa" className="logo">
          <Asset name="3d491.svg" alt="BIMPro Academy" />
        </Link>
        <nav aria-label="Asosiy navigatsiya" className="desktop-navigation">
          {navigation.map(([href, label]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="button button-outline" href="/register">
            Ro’yhatdan o’tish
          </Link>
          <Link className="button button-primary" href="/sign-in">
            Tizimga kirish
          </Link>
        </div>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" aria-label="Mobil navigatsiya" className="mobile-navigation">
          {navigation.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/register" onClick={() => setOpen(false)}>
            Ro’yhatdan o’tish
          </Link>
          <Link href="/sign-in" className="button button-primary" onClick={() => setOpen(false)}>
            Tizimga kirish
          </Link>
        </nav>
      )}
    </header>
  );
}
