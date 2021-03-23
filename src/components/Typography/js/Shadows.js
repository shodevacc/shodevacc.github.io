import React from "react";
import * as styles from "../styles/shadows.module.css";

function Shadows({ children }) {
  const text = children.split('')
  return (
    <div style={{background:'white'}} className="TextContainer">
      <p className={styles.shadowText}>
        {text.map((character, index) => {
          return <span key={index}>{character}</span>;
        })}
      </p>
    </div>
  );
}

export default Shadows;
