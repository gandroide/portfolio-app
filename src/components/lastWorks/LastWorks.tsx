"use client";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";

type LastWorksProps = {
  lng: string;
};

const LastWorks: FC<LastWorksProps> = ({ lng }) => {
  const { t } = useTranslation(lng);
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
