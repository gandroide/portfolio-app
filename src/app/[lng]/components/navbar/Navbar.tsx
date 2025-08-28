import React, { FC, use } from "react";
import styles from "./Navbar.module.css";
import { useTranslation } from "@/app/i18n";

type NavbarProps = {
  lng: string;
};

const Navbar: FC<NavbarProps> = ({ lng }) => {
  const { t } = use(useTranslation(lng));
  return (
    <div className={styles.navbar}>
      <div className="text-2xl ">Alejandro Ontiveros</div>
      <div>
        <a href={`/${lng}`} className={styles.btn}>
          {t("navbar.home")}
        </a>
        <a href={`/${lng}/books`} className={styles.btn}>
          {t("navbar.books")}
        </a>
        <a href={`/${lng}/about`} className={styles.btn}>
          {t("navbar.about")}
        </a>
        <a href={`/${lng}/contact`} className={styles.btn}>
          {t("navbar.contact")}
        </a>
        <button>language</button>
      </div>
    </div>
  );
};

export default Navbar;
