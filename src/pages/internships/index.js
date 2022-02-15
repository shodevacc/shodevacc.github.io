import React from "react";
// import Page from "../../components/Page";
import { graphql } from "gatsby";
import * as styles from "../../style/internships.module.css";
import Page from '../../components/Layout/Page'
import { GatsbyImage } from "gatsby-plugin-image";

const Card = ({ title, info, link, img }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImg}>
        <div className={styles.Img}>
          <GatsbyImage image={img} />
        </div>
      </div>

      <div className={styles.cardInfo}>
        <h2 style={{ color: "#e94f37", textAlign: "center" }}>{title}</h2>
        <p className={styles.info}>{info}</p>
      </div>
    </div>
  );
};

function internships({ data }) {
  var filteredData = {};

  data.InternImage.edges.forEach((edge) => {
    filteredData[edge.node.name] = edge.node.childImageSharp.gatsbyImageData;
  });

  return (
    <Page darkNav title="Shoaib Alyaan Internships">
      <div className={styles.MainContainer}>
        <div className={styles.header}>
          <h2 className={`${styles.headText}`}>Internships</h2>
        </div>

        <div
          style={{ backgroundColor: "#393e41" }}
          className={styles.ContentContainer}
        >
          <Card
            title="NIMHANS (July-August 2019)."
            img={filteredData.NIMHANS}
            info="  The National Institute of Mental Health and Neuro Sciences
            (NIMHANS) is a multidisciplinary institute for patient care and
            academic pursuit in the field of mental health and
            neurosciences. Here I received training and performed various
            tasks relating to biomedical equipment calibration , asset
            management and risk mitigation."
          />
          <Card
            title=" Li2 Technologies (January-March 2020)."
            img={filteredData.Li2}
            info=" Li2 is a venture committed to empowering education through
            experiential learning solutions for schools and colleges. Li2 is
            the national leader in applied training on Robotics, Embedded
            Systems and Mobile Computing for students, Engineering graduates
            and professionals. Here I worked on the development of a
            community project called Self Balancing cycle with location
            tracking."
          />
        </div>
      </div>
    </Page>
  );
}

export const query = graphql`
  {
    InternImage: allFile(filter: { relativeDirectory: { eq: "internship" } }) {
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
`;
export default internships;
