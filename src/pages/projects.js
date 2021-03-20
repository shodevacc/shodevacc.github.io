import React from "react"
import Gohome from "../components/Gohome"
import { graphql, Link } from "gatsby"
import * as styles from "../style/internships.module.css"
import { GatsbyImage } from "gatsby-plugin-image";
import SEO from "../components/seo"

function projects({ data }) {
  var filteredData = {}

  data.InternImage.edges.forEach(edge => {
    filteredData[edge.node.name] = edge.node.childImageSharp.gatsbyImageData
  })

  return (
    <div>
      <SEO title="Shoaib Alyaan Academic Projects" />
      <Gohome />
      <div className={styles.MainContainer}>
        <div className={styles.header}>
          <h2 className={`${styles.headText}`}>Academic-Projects</h2>
        </div>

        <div
          style={{ backgroundColor: "#393e41" }}
          className={styles.ContentContainer}
        >
          <div className={styles.cardContainer}>
            <div className={styles.cardImg}>
              <div className={styles.Img}>
                <GatsbyImage image={filteredData.cycle} />
              </div>
            </div>

            <div className={styles.cardInfo}>
              <h2 style={{ color: "#e94f37", textAlign: "center" }}>
                Self Balancing Cycle with Location Tracking
              </h2>
              <p className={styles.info}>
                Alternate mode of transportation for differently abled
                individuals which provides assistive riding features by using a
                motorized flywheel to balance the vehicle and location tracking.
              </p>
              <Link className={styles.link} to="/Cycle">
                Learn More
              </Link>
            </div>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.cardImg}>
              <div className={styles.Img}>
                <GatsbyImage image={filteredData.sugarcane} />
              </div>
            </div>

            <div className={styles.cardInfo}>
              <h2 style={{ color: "#e94f37", textAlign: "center" }}>
                AGRI-CANE
              </h2>
              <p className={styles.info}>
                An application for farmers to monitor real time data about the
                NPK(Nitrogen, Phosphorous, Potassium) and pH values of soil.
                Image Processing is utilised to also detect whether the plant is
                infected with yellow leaf syndrome or red dot disease, which are
                two prominent diseases which attack sugarcane.
              </p>
              <Link className={styles.link} to="/agri">
                Learn More
              </Link>
            </div>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.cardImg}>
              <div className={styles.Img}>
                <GatsbyImage image={filteredData.GPS} />
              </div>
            </div>

            <div className={styles.cardInfo}>
              <h2 style={{ color: "#e94f37", textAlign: "center" }}>
                GPS Location Tracker with SOS Broadcasting.
              </h2>
              <p className={styles.info}>
                Easy to use tracking device enabled with security features such
                as SOS broadcasting with tracking data stored in an online
                database which is accessible to its users.
              </p>
              <Link className={styles.link} to="/SOS">
                Learn More
              </Link>
            </div>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.cardImg}>
              <div className={styles.Img}>
                <GatsbyImage image={filteredData.led} />
              </div>
            </div>

            <div className={styles.cardInfo}>
              <h2 style={{ color: "#e94f37", textAlign: "center" }}>
                Persistence of Vision Rotating Display
              </h2>
              <p className={styles.info}>
                A Rotating Display that works on the principle of Persistence Of
                Vision.
              </p>
              <Link className={styles.link} to="/clock">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const query = graphql`{
  InternImage: allFile(filter: {relativeDirectory: {eq: "AcademicProjects"}}) {
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

export default projects
