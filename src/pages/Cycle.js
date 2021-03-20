import React from "react"
import first from "../images/cycle/first.jpg"
import second from "../images/cycle/second.gif"
import third from "../images/cycle/third.gif"
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../style/cycle.module.css"
import SEO from "../components/seo"
import Gohome from "../components/Gohome"

function Cycle() {
  return (
    <div>
      <SEO title="Self-Balancing Cycle with Location Tracking" />
      <Gohome />
      <div className={styles.container}>
        <h2>Self-Balancing Cycle with Location Tracking</h2>
        <img className={styles.img} src={first} />
        <p>
          Bicycles are a common form of transportation, recreation, and a medium
          of exercise which have been used for years. Bicycles serve to provide
          physical therapy, as they are a low impact form of exercise that can
          train balance, strength, stamina and coordination. Though riding a
          bicycle is considered to be an artless task for many, it is an arduous
          endeavor for the differently abled. A system that could provide
          balancing assistance to the rider without otherwise affecting the
          experience could provide great benefit to these groups of individuals.
          Such a system could be used both as a teaching tool, and as a
          physically therapeutic device.
        </p>
        <p>
          This project brings the best efficient way in order to achieve this by
          using a reaction wheel that opposes the angular momentum of the fall
          by rotating at high speeds. An IMU sensor along with Kalman filtering
          is used to measure the tilt angle of the cycle as it falls, and the
          required direction and RPM of the wheel is calculated with a micro
          controller
        </p>
        <p>
          Running a Simulation of the system gets us the expected response of
          the system as shown below
        </p>
        <img className={styles.img} src={second} />
        <p>
          Below is a more visually accurate representation of the system at work
          made using python
        </p>
        <img
          style={{ height: "50vw", maxHeight: "500px" }}
          className={styles.img}
          src={third}
        />
        <p>
          Along with this, the bicycle also offers a location tracking
          capability wherein the location of the cycle can be tracked by the
          guardian. The device uses a GPS (Global Positioning System) module,
          which detects the latitude and longitude of a location. The
          micro-controller processes this information and sends it to the GSM
          (Global System for Mobile) module. The GSM system then sends the
          information to the guardian’s mobile phone. This location is then
          continuously transmitted to a server and can be accessed by a guardian
          through a website.
        </p>
        <p>
          This project was co-created by
          <a
            style={{ color: "blue" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://reubenojacob.github.io/index.html"
          >
            Reuben Jacob
          </a>
        </p>
      </div>
    </div>
  )
}

export default Cycle
