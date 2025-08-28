// import Link from "next/link";
// import { useTranslation } from "../i18n";
import Navbar from "@/components/navbar/Navbar";
import LastWorks from "@/components/lastWorks/LastWorks";

type PageProps = {
  params: {
    lng: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { lng } = await params;
  // const { t } = await useTranslation(lng);
  return (
    <>
      {/* <h1>{t("title")}</h1>
      <Link href={`/${lng}/second-page`}>{t("second-page")}</Link> */}
      <div className="flex flex-col justify-center w-full h-screen">
        <div className="flex items-start justify-between p-2">
          <div className="text-2xl p-4">Alejandro Ontiveros</div>
          <Navbar />
        </div>
        <LastWorks lng={lng} />
      </div>
    </>
  );
}
