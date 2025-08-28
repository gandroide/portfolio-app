// src/app/page.tsx
import { getUserLanguage } from "@/lib/getuserLanguage";
import { redirect } from "next/navigation";

export default function RootPage() {
  const lng = getUserLanguage();
  redirect(`/${lng}`);
}
