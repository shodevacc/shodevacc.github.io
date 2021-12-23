import React from "react"
import Page from "../../components/Page"
import { graphql } from "gatsby"
import * as styles from "../../style/projects/agri.module.css"
import { GatsbyImage } from "gatsby-plugin-image";

function agri({ data }) {
  var filteredData = {}

  data.agri.edges.forEach(edge => {
    filteredData[edge.node.name] = edge.node.childImageSharp.gatsbyImageData
  })

  return (
    <Page title="Smart Helmet project">
      <div className={styles.container}>
        <h2>Smart Helmet</h2>
        <h4 style={{ margin: "0px 0px 50px", textAlign: "center" }}>
          Check it out on{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/veeprayas/MAIN"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Github
          </a>
        </h4>
        <h3 className="cinnabarH3">Why Smart Helmet?</h3>
        <ul>
          <li>
            Road-traffic accidents are a major cause of premature death and disability all over the world. Increasingly so in a country
            like India where motorcycles are an important mode of transportation
          </li>
          <li>
            Injury prevention efforts are, thus, vital to decrease the impact of such injuries
          </li>
        </ul>

        <h3 className="cinnabarH3">Proposed Solution</h3>
        <p>With Smart Helmet we propose a system for automated help initiation in case of an accident and
          a method to monitor the psycological state of the rider.
        </p>
        <ul>
          <li>
            A combination of peizo-electric sensor and pulse sensor is used to detect if an accident has occured.
          </li>
          <li>
            Immediate action is taken to contact nearby hospital and emergency services utilizing communication protocols in case of an accident.
          </li>
          <li>
            HRV (Heart Rate Variability) data is used to monitor the psycological state of the rider
            <ul>
              <li>HRV data is used to infer details about the autonomic nervous system (ANS), particularly the sympathetic nervous system (SNS), as they relate to
                elevated activity and stressful states. This is done using a Pulse Sensor to measure the Inter Beat Interval to find the Heart Rate and then the Heart Rate Variability. </li>
            </ul>
          </li>
        </ul>

        <h3 className="cinnabarH3">Methodology</h3>
        <div className={styles.float}>
          <div>
            <GatsbyImage image={filteredData.impact} />
            <p className={styles.figName}>Fig: Probability of Impact on areas</p>
          </div>
          <div>
            <ul>
              <li>
                Placements of Peizo-Electric Impact Sensors are to be made based on likelihood of
                impact area.
              </li>
            </ul>
          </div>
        </div>

        <h4 className="cinnabarH3">Prediction and Analysis</h4>
        <p>Machine-Leanring techniques are Proposed for</p>
        <ul>
          <li>Classification of whether an accident has occured utilising
            Heart Rate, HRV, and Impact Data.
          </li>
          <li>Prediction of Sensor Data in case of Damaged Sensors
          </li>
          <li>CONTINUOS MONITORING OF THE RIDER’S HEALTH CONDITION THROUGH HRV ANALYSIS AND PSYCHOLOGICAL BEHAVIOURS CAN STUDIED WHICH WILL BE SENT TO RIDER PERIODICALLY
          </li>
        </ul>
      </div>
    </Page>
  );
}

export const query = graphql`{
  agri: allFile(filter: {relativeDirectory: {eq: "helmet"}}) {
    edges {
      node {
        name
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}
`

export default agri
