// src/app/page.tsx
import { getUserLanguage } from "@/lib/getuserLanguage";
import { redirect } from "next/navigation";

export default async function RootPage() {
const lang = await getUserLanguage();

  redirect(`/${lang}`);
}
