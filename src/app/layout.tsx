import "./globals.css";
import { getDirection } from "@/lib/i18n";
import type { ReactNode } from "react";
import "../app/i18n/index";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
});

export default function RootLayout({
  children,
  params,
}: {
  readonly children: ReactNode;
  readonly params: { readonly lng?: string };
}) {
  const lng = params?.lng || "en";
  const dir = getDirection(lng);

  return (
    <html
      lang={lng}
      dir={dir}
      className={`${playfair.variable} ${sourceSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
