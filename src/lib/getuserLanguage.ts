import acceptLanguage from "accept-language";
import { headers } from "next/headers";

const fallbackLng = "en";
const languages = [fallbackLng, "es", "pt"];

acceptLanguage.languages(languages);

export function getUserLanguage() {
  const headersList = headers();
  const langHeader = headersList.get("accept-language");
  return acceptLanguage.get(langHeader) || fallbackLng;
}
