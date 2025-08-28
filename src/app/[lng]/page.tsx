import Navbar from "@/app/[lng]/components/navbar/Navbar";
import LastWorks from "@/app/[lng]/components/lastWorks/LastWorks";
import { Suspense } from "react";
import CurrentWork from "./components/currentWork/CurrentWork";

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
        <Navbar lng={lng} />
        <div className="flex mt-32 flex-col w-full h-screen">
          {/* <LastWorks lng={lng} /> */}
          <CurrentWork lng={lng} />
        </div>
      </Suspense>
    </>
  );
}
