import React, { FC } from "react";
import styles from "./CurrentWork.module.css";

type CurrentWorkProps = {
  lng: string;
};

const CurrentWork: FC<CurrentWorkProps> = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className="w-1/2">CurrentWork</h1>
        <p className="text-neutral-400 w-1/2">
          Actualmente estoy trabajando en una serie documental sobre la
          arquitectura vernácula de pequeños pueblos. Este proyecto explora cómo
          las tradiciones constructivas locales reflejan la identidad cultural
          de cada comunidad. La serie se enfoca en capturar no solo las
          estructuras físicas, sino también la relación entre el espacio
          construido y la vida cotidiana de sus habitantes.
        </p>
      </div>
      <div className="w-1/2">images</div>
    </div>
  );
};

export default CurrentWork;
