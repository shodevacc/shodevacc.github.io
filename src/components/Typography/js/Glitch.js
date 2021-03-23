import React from "react";
import * as styles from "../styles/glitchText.module.css";

function Glitch({ children }) {
  return (
    <div className="TextContainer">
      <p className={styles.glitchText}>
      <span>{children}</span>
        <span aria-hidden="true">{children}</span>
        <span aria-hidden="true">{children}</span>
      </p>
    </div>
  );
}

export default Glitch;
