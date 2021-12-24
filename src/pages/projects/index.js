import React from "react";
import Page from "../../components/Page";
import { graphql, Link } from "gatsby";
import * as styles from "../../style/internships.module.css";
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
        <Link className={styles.link} to={`${link}`}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

function projects({ data }) {
  var filteredData = {};

  data.InternImage.edges.forEach((edge) => {
    filteredData[edge.node.name] = edge.node.childImageSharp.gatsbyImageData;
  });

  return (
    <Page title="Shoaib Alyaan Academic Projects">
      <div className={styles.MainContainer}>
        <div className={styles.header}>
          <h2 className={`${styles.headText}`}>Academic-Projects</h2>
        </div>

        <div
          style={{ backgroundColor: "#393e41" }}
          className={styles.ContentContainer}
        >
          <Card
            title="Self Balancing Cycle with Location Tracking"
            img={filteredData.cycle}
            info="Alternate mode of transportation for differently abled
                individuals which provides assistive riding features by using a
                motorized flywheel to balance the vehicle with location tracking."
            link="Cycle"
          />
          <Card
            title="Smart Helmet"
            img={filteredData.Helmet}
            info="A smart helmet with Accident Detection features to notify authroities
              in case of an accident, to decrease time for initial response. Machine-Learning is also
              applied to study the physiological state of the wearer of the helmet."
            link="helmet"
          />
          <Card
            title="AGRI-CANE"
            img={filteredData.sugarcane}
            info=" An application for farmers to monitor real time data about the
            NPK(Nitrogen, Phosphorous, Potassium) and pH values of soil.
            Image Processing is utilised to also detect whether the plant is
            infected with visable disease."
            link="agri"
          />
          <Card
            title="Amazon Shopping Assistant"
            img={filteredData.shopping}
            info="A Chrome Extension to modify the DOM stucture of the 
            amazon website, to optimise its usage by the visually impaired. 
            Powered by Deep Learning."
            link="shop"
          />
          <Card
            title=" GPS Location Tracker with SOS Broadcasting."
            img={filteredData.GPS}
            info="  Easy to use tracking device enabled with security features such
            as SOS broadcasting with tracking data stored in an online
            database which is accessible to its users."
            link="SOS"
          />
          <Card
            title="Persistence of Vision Rotating Display"
            img={filteredData.led}
            info="A Rotating Display that works on the principle of Persistence Of
            Vision."
            link="clock"
          />
        </div>
      </div>
    </Page>
  );
}

export const query = graphql`
  {
    InternImage: allFile(
      filter: { relativeDirectory: { eq: "AcademicProjects" } }
    ) {
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

export default projects;
