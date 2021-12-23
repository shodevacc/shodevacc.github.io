import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../../style/SOS.module.css"
import Page from "../../components/Page"

function SOS({ data }) {
  var filteredData = {}

  data.SOS.edges.forEach(edge => {
    filteredData[edge.node.name] = edge.node.childImageSharp.gatsbyImageData
  })
  // console.log(filteredData)
  return (
    <Page title="Shoaib Alyaan GPS location tracker with SOS Broadcasting">
      <div className={styles.container}>
        <h2>GPS location tracker with SOS Broadcasting</h2>
        <GatsbyImage image={filteredData.Design} className={styles.img} />
        <GatsbyImage image={filteredData.Location} className={styles.img} />
        <p>
          Easy to use safety device with location tracking and SOS broadcasting
          features. With a small footprint and a single button interface this
          device is meant for women and children. It can also be hung around pet
          collars and used for Alzheimer’s patients.
        </p>
        <p>
          When triggered, the device uses a GPS module to trace the location of
          the area. This data is processed by a microcontroller which then uses
          a GSM module to send a SMS alert to a set of preset guardian numbers.
          The location data once triggered is continuously backed up on an
          online database which can be accessed by the guardians through a login
          ID and password. The device has two operational modes, continuous
          broadcasting and an SOS mode.
        </p>
        <p>
          A particular function of this device is the implementation of
          community security. When a device is triggered the database compares
          the location of the user to the home and last known location of other
          such users and sends them SMS alerts of a community member in danger.
        </p>
        <p>
          The device is equipped with a vibrational motor and a buzzer to alert
          the user of an incoming text message. A piezo electric sensor is also
          attached to the shell of the device in order to alert the guardian if
          the device has been broken.
        </p>
        
      </div>
    </Page>
  );
}

export const query = graphql`{
  SOS: allFile(filter: {relativeDirectory: {eq: "SOS"}}) {
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

export default SOS
