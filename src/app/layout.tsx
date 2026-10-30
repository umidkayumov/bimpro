import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource/material-symbols-outlined/400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BIMPro Academy — BIM-loyihalashni amalda o‘rganing",
    template: "%s | BIMPro Academy",
  },
  description:
    "Revit MEP, Architecture, Structure va Navisworks bo‘yicha amaliy kurslar. O‘zbekiston QMQ/ShNK me’yorlariga mos shablonlar va real loyihalar.",
  applicationName: "BIMPro Academy",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          Asosiy mazmunga o‘tish
        </a>
        {children}
      </body>
    </html>
  );
}
