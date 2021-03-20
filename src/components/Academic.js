import React from "react"
import { Link } from "gatsby"
import * as styles from "../style/academic.module.css"
import Section from "./Section"

function Academic() {
  return (
    <Section
      title="Academic"
      contentContainerStyle={{ backgroundColor: "#393e41" }}
    >
      <div className={styles.container}>
          <Link className={styles.item} to="/internships">
          <h2>Internships</h2>
          </Link>
          <Link className={styles.item} to="/projects">
          <h2>Projects</h2>
          </Link>
       
      </div>
    </Section>
  )
}

export default Academic
