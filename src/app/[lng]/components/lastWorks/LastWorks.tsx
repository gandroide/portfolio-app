"use client";
import React, { FC, use, useState } from "react";
import { useTranslation } from "../../../i18n";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const galleryImages = [
  {
    src: "../../../../public/bw-portrait.png",
    alt: "Retrato en blanco y negro",
    title: "Serie Retratos",
  },
  {
    src: "../../../../public/minimalist-landscape.png",
    alt: "Paisaje minimalista",
    title: "Paisajes Urbanos",
  },
  {
    src: "../../../../public/architecture-and-shadows.png",
    alt: "Arquitectura y sombras",
    title: "Arquitectura",
  },
  {
    src: "../../../../public/street-photography.png",
    alt: "Fotografía callejera",
    title: "Documental",
  },
  {
    src: "../../../../public/conceptual-art.png",
    alt: "Arte conceptual",
    title: "Arte Conceptual",
  },
  {
    src: "../../../../public/nature-black-and-white.png",
    alt: "Naturaleza en blanco y negro",
    title: "Naturaleza",
  },
];

type LastWorksProps = {
  lng: string;
};

const LastWorks: FC<LastWorksProps> = ({ lng }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = use(useTranslation(lng));

  return (
    <section className="flex-1 flex flex-col items-center px-4 text-center">
      <h1 className="text-5xl py-8 font-bold">{t("title")}</h1>
      <p className="text-neutral-400">
        Una seccion de mis fotografias mas recientes, explorando la relacion
        entre el cuerpo y la roca, la memoria y el territorio.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className="group cursor-pointer outline-none focus:ring-2 focus:ring-blue-500"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onFocus={() => setHoveredIndex(index)}
            onBlur={() => setHoveredIndex(null)}
            aria-label={image.title}
            tabIndex={0}
          >
            <AspectRatio ratio={4 / 5} className="overflow-hidden">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  hoveredIndex === index ? "scale-105" : "scale-100"
                }`}
              />
            </AspectRatio>
            <div className="mt-4">
              <h3 className="font-serif text-lg font-medium">{image.title}</h3>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default LastWorks;
