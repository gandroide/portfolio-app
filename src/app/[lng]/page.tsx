import Link from "next/link";
import { useTranslation } from "../i18n";

type PageProps = {
  params: {
    lng: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}/second-page`}>{t("second-page")}</Link>
    </>
  );
}
