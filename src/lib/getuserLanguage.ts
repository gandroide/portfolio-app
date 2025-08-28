import acceptLanguage from "accept-language";
import { headers } from "next/headers";

const fallbackLng = "en";
const languages = [fallbackLng, "es", "pt"];

acceptLanguage.languages(languages);

export async function getUserLanguage() {
  const headersList = await headers(); // 👈 usar await
  const langHeader = headersList.get("accept-language");
  return acceptLanguage.get(langHeader) || fallbackLng;
}
