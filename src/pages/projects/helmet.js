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
        {/* <h4 style={{ margin: "0px 0px 50px", textAlign: "center" }}>
          Check it out on{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/veeprayas/MAIN"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Github
          </a>
        </h4> */}
        <h3 className="cinnabarH3">Why Smart Helmet?</h3>
        <p> Road-traffic accidents are a major cause of premature death and disability all over the world. Increasingly so in a country
          like India where motorcycles are an important mode of transportation.  Injury prevention efforts are, thus, vital to decrease the impact of such injuries</p>



        <h3 className="cinnabarH3">Proposed Solution</h3>
        <p>With Smart Helmet we propose a system for automated help initiation in case of an accident and
          a method to monitor the physiological state of the rider.
        </p>

        <ul>
          <li>The Pulse sensor is used to check if the helmet is worn</li>
          <li>A combination of values from impact sensor and HRV data (From Pulse sensor) is analysed using
            Machine-Learning to predict whether an accident has occured or not.
          </li>
          <li>
            In case of an accident, IoT communication Protocols are to be implemented to contact
            Hospitals and immediate reduce services to reduce time to first response.
          </li>
        </ul>

        <h4 className="cinnabarH3">Accident Detection:</h4>
        <ul>
          <li>
            A Peizo-Electric element is proposed to be used as an impact sensor.
          </li>
          <li>
            A Pulse sensor is used to monitor HRV (Heart Rate Variability). This is used to monitor changes in
            the sympathetic nervous system, namely flight/flight response.
          </li>
        </ul>
        <p>A combination of Impact sensor and HRV data is used to predict if whether an accident
          has occured.
        </p>

        <h4 className="cinnabarH3">Prediction and Analysis</h4>
        <ul>
          <li>
            HRV (Heart Rate Variability) data is used to monitor the physiological state of the rider
            <ul>
              <li>HRV data is used to infer details about the autonomic nervous system (ANS) as they relate to
                elevated activity and stressful states. ( For Accident Detection )</li>
              <li>Data can also be analysed to send reports about the health of the rider
                that can be infered through changes in ANS, such as stress levels while riding,
                excessive relaxation which could lead to "Lack Of Concentration".
              </li>
            </ul>
          </li>
          <li>
            Prediction of Sensor Data in case of faulty impact sensor
            <ul>
              <li>If impact sensors get damaged, we propose utilising HRV data to infer data about stress and fight or flight responses, and predict values for failing sensor.</li>
            </ul>
          </li>
        </ul>

        <h4 className="cinnabarH3">Progress</h4>
        <div className={styles.float}>
          <div>
            <GatsbyImage image={filteredData.impact} />
            <p className={styles.figName}>Fig: Probability of Impact on areas</p>
          </div>
          <div>
            
            <ul>
              <li>
                RHRV package is used with R programming language to study the HRV data and infer about the
                ANS.
              </li>
              <li>
                Creation of Impact Sensor: Work is being done to create an impact sensor utilising Peizo-Eletric Material.
                <ul>
                  A "Mesh" structure is trying to be explored by which impact can be detected
                  in the primary regions of impact on the helmet.
                </ul>
              </li>
            </ul>
          </div>
        </div>



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
