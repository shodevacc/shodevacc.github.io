import React from "react";
import * as styles from "../styles/crackText.module.css";

function Crack({ children,classNameContainer,trigger }) {
  console.log(classNameContainer)
  return (
    <div  className={classNameContainer?classNameContainer:"TextContainer"}>
      <p className={trigger?(trigger&&styles.cracktext):styles.cracktext}>
        <span aria-hidden="true">{children}</span>
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </p>
    </div>
  );
}

export default Crack;
