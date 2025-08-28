import { NextResponse } from "next/server";
import acceptLanguage from "accept-language";

const fallbackLng = "en";
const languages = [fallbackLng, "es", "pt"];

acceptLanguage.languages(languages);

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], 
};

export function middleware(req) {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;

  if (pathname === "/") {
    const detectedLng =
      acceptLanguage.get(req.headers.get("accept-language")) || fallbackLng;

    const url = nextUrl.clone();
    url.pathname = `/${detectedLng}`;
    return NextResponse.redirect(url);
  }

  const hasLng = languages.some((lng) => pathname.startsWith(`/${lng}`));
  if (!hasLng) {
    const detectedLng =
      acceptLanguage.get(req.headers.get("accept-language")) || fallbackLng;

    const url = nextUrl.clone();
    url.pathname = `/${detectedLng}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
