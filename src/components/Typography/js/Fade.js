import React from "react";
import * as styles from "../styles/fade.module.css";

function Fade({ children }) {
  const text = ["s", "h", "a", "d", "o", "w", "s"];
  return (
    <div style={{ background: "white" }} className="TextContainer">
      <svg className={styles.fadeText} viewBox="-500 -500 1000 1000">
        <filter id="fade-filter">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
            in="blur"
          ></feColorMatrix>
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
        <g>
          <text filter="url(#fade-filter)" textAnchor="middle" x="0" y="150">
            10
          </text>
          <text filter="url(#fade-filter)" textAnchor="middle" x="0" y="150">
            9
          </text>
        </g>
      </svg>
    </div>
  );
}

export default Fade;
