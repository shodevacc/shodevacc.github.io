import React, { useState, useEffect } from "react"
import Nav from "../Nav"
import HelloText from "../HelloText"
import TypeText from "../TypeText"
import * as styles from "../../style/landing.module.css"
import Social from '../Social'

function Landing() {
  // 1: left 2:center 3:right
  const [pos, setPos] = useState(2)
  const [trigger, setTrigger] = useState({ left: false, right: false }) //Trigger for the typing animation
  useEffect(() => {
    const handleScroll = () => {
      //   console.log(window.scrollY)
      if (window.scrollY > 30) {
        setPos(1)
        !trigger.left && setTrigger(state => ({ ...state, left: true }))
      } else {
        setPos(2)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  const technologies = [
    "React",
    "Gatsbyjs",
    "Nginx",
    "Docker",
    "Keras",
    "Numpy",
    "Scikit-Learn",
    "Web3Js",
    "Flask",
    "Tensorflow",
    "Strapi"
  ]
  const languages = [
    "Verilog",
    "Javascript",
    "Python",
    "C",
    "C++",
    "Java",
    "HTML",
    "Assembly Level Programming(ARM)",
    "CSS",
    "R",
    "Solidity"
  ]
  return (
    <React.Fragment>
    
      {/* Main Container */}
      <div className={styles.mainContainer}>
        <Social />
        <div
          style={
            pos == 1
              ? { transform: "translate3d(0,0,0)" }
              : pos == 2
                ? { transform: "translate3d(-100vw,0,0)" }
                : { transform: "translate3d(-200vw,0,0)" }
          }
          className={styles.contentContainer}
        >
          <div className={styles.contentLeft}>
            <div className={styles.contentText}>
              <TypeText
                style={{
                  transform: "translate(-5%,0)",
                }}
                trigger={trigger.left}
              >
                I'm Shoaib.
              </TypeText>
              <p className={styles.data}>
                Undergraduate in <b>Electronics and Instrumentation Engineering </b>
                from <b>Ramaiah Institute of Technology</b>, Bangalore, 2020 batch. I'm
                most passionate about innovating and building
                within the field of <b>software engineering.</b>
              </p>
              <h3>Languages:</h3>
              <ul className={styles.skillsContainer}>
                {languages.map((skill, index) => {
                  return <li key={index}>{skill}</li>
                })}
              </ul>
              <h3>Software:</h3>
              <ul className={styles.skillsContainer}>
                {technologies.map((skill, index) => {
                  return <li key={index}>{skill}</li>
                })}
              </ul>
            </div>
          </div>
          <div className={styles.contentCenter}>
            <div className={styles.centerText}>
              <HelloText />
            </div>
          </div>
          <div className={styles.contentRight}>
            <div style={{ margin: 0 }} className={styles.contentText}>
              <TypeText trigger={trigger.right}>Like what you see?</TypeText>
              <p
                style={{ transform: "translate(0,0)", textAlign: "center" }}
                className={styles.data}
              >
                Lets Get in Touch and talk
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Landing
