import React from "react"
import Section from "../Section"
import * as styles from "../../style/cv.module.css"

function cv() {
  return (
    <Section title="Resume" contentContainerStyle={{ backgroundColor: "#393e41" }}>
      <div className={styles.card}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1FEopjd_Zh70N4bZbaVgfnQiJflEmlOa0/view?usp=sharing"
        >
          <h2>View Resume</h2>
        </a>
      </div>
    </Section>
  )
}

export default cv
