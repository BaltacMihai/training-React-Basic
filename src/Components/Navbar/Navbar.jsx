import React from "react";
import styles from "./Navbar.module.css";
function Navbar({ action, first }) {
  console.log("Randare navbar");

  return (
    <nav className={styles.nav}>
      <p className={styles.p}>Croco Fun</p>

      <div className={styles.buttons}>
        {/* Sure! This is a JavaScript ternary operator. It's a shorthand way of writing an if...else statement. 

  Here's the basic syntax of a ternary operator:

    condition ? value if true : value if false

    
    The condition is the expression that is evaluated to either true or false. If the condition is true, 
    the first value (after the ?) is returned. If the condition is false, the second value (after the :) is returned.
   */}
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
