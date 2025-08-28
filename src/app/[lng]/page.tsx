import Navbar from "@/components/navbar/Navbar";
import LastWorks from "@/components/lastWorks/LastWorks";
import { Suspense } from "react";

type PageProps = {
  params: {
    lng: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { lng } = await params;
  return (
    <>
      {/* <h1>{t("title")}</h1>
      <Link href={`/${lng}/second-page`}>{t("second-page")}</Link> */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-col justify-center w-full h-screen">
          <div className="flex items-start justify-between p-2">
            <div className="text-2xl p-4">Alejandro Ontiveros</div>
            <Navbar lng={lng} />
          </div>
          <LastWorks lng={lng} />
        </div>
      </Suspense>
    </>
  );
}
