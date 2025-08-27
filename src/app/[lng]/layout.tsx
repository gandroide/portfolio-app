import { getDirection } from "@/lib/i18n";
import type { ReactNode } from "react";

// Define supportedLngs here if not exported from i18n
const supportedLngs = ["en", "es", "pt"]; // Add your supported languages

// Genera rutas estáticas para cada idioma
export async function generateStaticParams() {
  return supportedLngs.map((lng) => ({ lng }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;

  // fallback estable si no viene lng
  const lang = lng || "en";
  const dir = getDirection(lang);

  return (
    <html lang={lang} dir={dir}>
      <body>{children}</body>
    </html>
  );
}
