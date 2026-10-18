import React from "react"
import first from "../../images/cycle/first.jpg"
import second from "../../images/cycle/second.gif"
import third from "../../images/cycle/third.gif"
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../../style/projects/cycle.module.css"
import Page from '../../components/Layout/Page'

function Cycle() {
  return (
    <Page darkNav addPadd title="Self-Balancing Cycle with Location Tracking">
      <div className={styles.container}>
        <h2>Self-Balancing Cycle with Location Tracking</h2>
        <h3>Some Links</h3>
        <ul className="linkList">
          <li>
            <a href="https://link.springer.com/chapter/10.1007/978-981-16-2543-5_26" target="_blank" rel="noopener noreferrer">
              Paper Publication
            </a>
          </li>
          <li>
            <a href="https://insightmaker.com/insight/198271/Self-Balancing-Cycle" target="_blank" rel="noopener noreferrer">
              View Insight maker Simulation
            </a>

          </li>
          <li>
            <a href="/projects/BestProject.pdf" target="_blank" rel="noopener noreferrer">
              Best project Award
            </a>

          </li>
        </ul>
        <img className={styles.img} src={first} />

        <h3>
          Introduction
        </h3>
        <p>
          Bicycles are a common form of transportation, recreation, and a medium
          of exercise which have been used for years. Bicycles serve to provide
          physical therapy, as they are a low impact form of exercise that can
          train balance, strength, stamina and coordination. Though riding a
          bicycle is considered to be an artless task for many, it is an arduous
          endeavor for the differently abled. <br />A system that could provide
          balancing assistance to the rider without otherwise affecting the
          experience could provide great benefit to these groups of individuals.
          Such a system could be used both as a teaching tool, and as a
          physically therapeutic device.
        </p>
        <h3>
          Methodology
        </h3>
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
        <h3>
          Below is a fun representation of the system at work
          made using python
        </h3>
        <img
          style={{ height: "50vw", maxHeight: "500px" }}
          className={styles.img}
          src={third}
        />
        <h3>
          Why Location Tracking?
        </h3>
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
      </div>
    </Page>
  )
}

export default Cycle
