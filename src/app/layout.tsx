import "./globals.css";
import { getDirection } from "@/lib/i18n";
import type { ReactNode } from "react";
import "../app/i18n/index";

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lng?: string };
}) {
  const lng = params?.lng || "en";
  const dir = getDirection(lng);

  return (
    <html lang={lng} dir={dir}>
      <body>{children}</body>
    </html>
  );
}
