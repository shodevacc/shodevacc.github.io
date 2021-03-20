import React from "react"
import Gohome from "../components/Gohome"
import { graphql } from "gatsby"
import * as styles from "../style/internships.module.css"
import { GatsbyImage } from "gatsby-plugin-image";
import SEO from "../components/seo"

function internships({ data }) {
  var filteredData = {}

  data.InternImage.edges.forEach(edge => {
    filteredData[edge.node.name] = edge.node.childImageSharp.gatsbyImageData
  })

  return (
    <div>
      <SEO title="Shoaib Alyaan Internships" />
      <Gohome />
      <div className={styles.MainContainer}>
        <div className={styles.header}>
          <h2 className={`${styles.headText}`}>Internships</h2>
        </div>

        <div
          style={{ backgroundColor: "#393e41" }}
          className={styles.ContentContainer}
        >
          <div className={styles.cardContainer}>
            <div className={styles.cardImg}>
              <div className={styles.Img}>
                <GatsbyImage image={filteredData.NIMHANS} />
              </div>
            </div>

            <div className={styles.cardInfo}>
              <h2 style={{ color: "#e94f37", textAlign: "center" }}>
                NIMHANS (July-August 2019).
              </h2>
              <p className={styles.info}>
                The National Institute of Mental Health and Neuro Sciences
                (NIMHANS) is a multidisciplinary institute for patient care and
                academic pursuit in the field of mental health and
                neurosciences. Here I received training and performed various
                tasks relating to biomedical equipment calibration , asset
                management and risk mitigation.
              </p>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.cardImg}>
              <div className={styles.Img}>
                <GatsbyImage image={filteredData.Li2} />
              </div>
            </div>

            <div className={styles.cardInfo}>
              <h2 style={{ color: "#e94f37", textAlign: "center" }}>
                Li2 Technologies (January-March 2020).
              </h2>
              <p className={styles.info}>
                Li2 is a venture committed to empowering education through
                experiential learning solutions for schools and colleges. Li2 is
                the national leader in applied training on Robotics, Embedded
                Systems and Mobile Computing for students, Engineering graduates
                and professionals. Here I worked on the development of a
                community project called Self Balancing cycle with location
                tracking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const query = graphql`{
  InternImage: allFile(filter: {relativeDirectory: {eq: "internship"}}) {
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
export default internships
