"use client";
import React, { FC, use } from "react";
import { useTranslation } from "../../app/i18n";

type LastWorksProps = {
  lng: string;
};

const LastWorks: FC<LastWorksProps> = ({ lng }) => {
  const { t } = use(useTranslation(lng));

  return (
    <section className="flex-1 flex flex-col items-center px-4 text-center">
      <h1 className="text-5xl py-8 font-bold">{t("title")}</h1>
      <p className="text-neutral-400">
        Una seccion de mis fotografias mas recientes, explorando la relacion
        entre el cuerpo y la roca, la memoria y el territorio.
      </p>
    </section>
  );
};

export default LastWorks;
