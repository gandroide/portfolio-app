import Link from "next/link";
import { useTranslation } from "../i18n";
import Navbar from "@/components/navbar/Navbar";
import LastWorks from "@/components/lastWorks/LastWorks";
import { redirect } from "next/navigation";

type PageProps = {
  params: {
    lng: string;
  };
};

export default function Home() {
}