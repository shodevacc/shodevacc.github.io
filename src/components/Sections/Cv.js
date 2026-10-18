import React from "react"
import Section from "../Section"
import * as styles from "../../style/cv.module.css"

function cv({ resume }) {
  return (
    <Section title="Resume" contentContainerStyle={{ backgroundColor: "#393e41" }}>
      <div className={styles.card}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={resume}
        >
          <h2>View Resume</h2>
        </a>
      </div>
    </Section>
  )
}

export default cv
