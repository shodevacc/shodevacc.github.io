import React from "react";
import * as styles from "../styles/dashText.module.css";

function DashText({ children }) {
  return (
    <div className="TextContainer">
      <svg className={styles.dashSVG} viewBox="0 0 960 300">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="80%">
            {children}
          </text>
        </symbol>

        <g className="g-ants">
          <use href="#s-text" className={styles.textCopy}></use>
          <use href="#s-text" className={styles.textCopy}></use>
          <use href="#s-text" className={styles.textCopy}></use>
          <use href="#s-text" className={styles.textCopy}></use>
          <use href="#s-text" className={styles.textCopy}></use>
        </g>
      </svg>
    </div>
  );
}

export default DashText;
