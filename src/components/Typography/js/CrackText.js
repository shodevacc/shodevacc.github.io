import React from "react";
import * as styles from "../styles/crackText.module.css";

function Crack({ children }) {
  return (
    <div className="TextContainer">
      <p className={styles.cracktext}>
        <span aria-hidden="true">{children}</span>
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </p>
    </div>
  );
}

export default Crack;
