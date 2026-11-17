import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Asset } from "@/components/ui/asset";
import type { ReactNode } from "react";
import "@/styles/checkout.css";

export function CheckoutShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="purchase-breadcrumb">
        <div className="shell">
          <nav aria-label="Sahifa yo‘li">
            <Link href="/">
              <Asset name="01916.svg" /> Bosh sahifa
            </Link>
            <span>/</span>
            <Link href="/#courses">Kurslar</Link>
            <span>/</span>
            <span>Revit MEP: O‘ViK (QMQ 2.04.05-97)</span>
            <span>/</span>
            <span aria-current="page">Sotib olish</span>
          </nav>
          <p>
            <span>● SYS_LOD: 350-400</span>
            <b>|</b> VER: REVIT 2027
          </p>
        </div>
      </div>
      <main id="main-content" className="purchase-main">
        {children}
      </main>
      <Footer />
    </>
  );
}
