import React from "react";
import styles from "./Navbar.module.css";
function Navbar({ action, first }) {
  console.log("Randare navbar");

  return (
    <nav className={styles.nav}>
      <p className={styles.p}>Croco Fun</p>

      <div className={styles.buttons}>
        <button
          className={first ? styles.active : ""}
          onClick={() => {
            action(true);
          }}
        >
          Glume
        </button>

        <button
          className={first ? "" : styles.active}
          onClick={() => {
            action(false);
          }}
        >
          Activitati
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
