import React, { FC } from "react";
import styles from "./Navbar.module.css";

type NavbarProps = {
  lng: string;
};

const Navbar: FC<NavbarProps> = ({ lng }) => {
  return (
    <div className={styles.navbar}>
      <a href={`/${lng}`} className={styles.btn}>
        Inicio
      </a>
      <a href={`/${lng}/books`} className={styles.btn}>
        Libros
      </a>
      <a href={`/${lng}/about`} className={styles.btn}>
        Sobre mi
      </a>
      <a href={`/${lng}/contact`} className={styles.btn}>
        Contacto
      </a>
    </div>
  );
};

export default Navbar;
