import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href="/" className={styles.btn}>
        Inicio
      </a>
      <a href="/books" className={styles.btn}>
        Libros
      </a>
      <a href="about" className={styles.btn}>
        Sobre mi
      </a>
      <a href="contact" className={styles.btn}>
        Contacto
      </a>
    </div>
  );
};

export default Navbar;
