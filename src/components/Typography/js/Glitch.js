import React from "react";
import * as styles from "../styles/glitchText.module.css";

function Glitch({ children,classNameContainer }) {
  return (
    <div className={classNameContainer?classNameContainer:"TextContainer"}>
      <p className={styles.glitchText}>
      <span>{children}</span>
        <span aria-hidden="true">{children}</span>
        <span aria-hidden="true">{children}</span>
      </p>
    </div>
  );
}

export default Glitch;
