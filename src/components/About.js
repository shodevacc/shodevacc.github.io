import React, { useEffect } from "react"
import Section from "./Section"
import { view, scrollAnimate } from "./animation"
import * as styles from '../style/about.module.css'
import Stars from './Stars'

function About() {
  useEffect(() => {
    const handleScroll = () => {
      scrollAnimate({
        cname: "AboutAnimate",
        styleClass: styles.Slide,
      })
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <Section style={{ backgroundColor: "rgb(57, 62, 65)" }}>
      <div className={styles.container}>
        <Stars/>
        <section style={{ color: "#e94f37" }}>
          <h2 className={`${styles.titleLeft} AboutAnimate`}>
            I have always enjoyed two activities,
          </h2>
          <h2 id="WTFB" className={`${styles.titleLeft} AboutAnimate`}>
            <b>Problem-Solving</b> and <b>Creative Design</b>.
          </h2>
          <div className={styles.Row}>
            <p className={`${styles.col} AboutAnimate`}>
              <b>
                WHY DO I LIKE COMPUTER SCIENCE? <br />
                <br />
              </b>
              It offers me both of the qualities that stimulate my brain. Namely
              tackling problems and creative expression.
              <br />
              <br />
              Firstly, there are plenty of problems to solve in this
              technology-driven era. <br />
              <br />
              Secondly, using creativity to package them in an elegant user
              interface when required.
            </p>
            <p className={`${styles.col} AboutAnimate`}>
              <b>
                WHAT PROBLEMS?
                <br />
                <br />
              </b>
              I want to create
              <b> POWERFUL</b> solutions to Real-world problems that can impact
              our society and leave a positive change.
              <br />
              <br />I also like to make things that people can use to increase
              <b> Productivity</b> and <b>Profit.</b>
              <br />
              <br />
              These will be the primary goals of my work.
            </p>
          </div>
          <div className={styles.Row}>
            <p className={`${styles.col} AboutAnimate`}>
              <b style={{ textAlign: "left", textTransform: "uppercase" }}>
                What are my research interests?
                <br />
                <br />
              </b>
              Software Development, Embedded Systems, Control Systems, and
              Web-Development are topics I&#x27;ve dealt with extensively.{" "}
              <br />
              <br />
              My future research interests include Deep-Learning applied to
              Computer Vision, Machine-Learning, and Human-Computer Interaction.
              <br />
              <br />
              Look at some of my
              <b> Computer Vision</b> Google Co-Lab Notebooks{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/drive/folders/1hBQ2rfc41hY3QR5x4iWzfAS9PCIuItGh?usp=sharing"
              >
                <b className={styles.link}>HERE.</b>
              </a>
            </p>
            <div
              style={{ fontSize: "16px" }}
              className={`${styles.col} AboutAnimate`}
            >
              <b style={{ textAlign: "left", textTransform: "uppercase" }}>
                Make A Positive Impact.
                <br />
                <br />
              </b>
              In the words of a wise man.
              <figure>
                <blockquote>
                  With great power comes great responsibility.
                  <br />
                  <br />
                  —Uncle Ben.
                  <br />
                </blockquote>
              </figure>
              These are words that inspired me as a child, and they still
              resonate with me to this day. Hence, I would love to apply my
              skillset for the prosperity of humanity.
              <br />
            </div>
          </div>
        </section>
      </div>
    </Section>
  )
}

export default About
