import React from "react";
import * as styles from "../../style/internships.module.css";
import { graphql, Link } from "gatsby";
import Page from '../../components/Layout/Page'

const Card = ({ title, info, link }) => {
  return(
    <div className={styles.cardContainer}>
    <div className={styles.cardInfo}>
      <h2 style={{ color: "#e94f37", textAlign: "center" }}>{title}</h2>
      <p className={styles.info}>{info}</p>
      <Link className={styles.link} to={`/animations/${link}`}>
        Learn More
      </Link>
    </div>
  </div>
  )

};

function animations() {
  return (
    <Page darkNav title="Shoaib Alyaan Animation">
      <div className={styles.MainContainer}>
        <div className={styles.header}>
          <h2 className={`${styles.headText}`}>Animations</h2>
        </div>

        <div
          style={{ backgroundColor: "#393e41" }}
          className={styles.ContentContainer}
        >
          <Card
            title="Rapid Image Layers"
            info="Rapid Image layer intro animation"
            link="imagelayer"
          />
        </div>
      </div>
    </Page>
  );
}

export default animations;
