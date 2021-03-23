import React from "react";
import Section from "../Section";
import { Link } from "gatsby";
import * as styles from "../../style/frontend.module.css";
import Glitch from "../Typography/js/Glitch";

function Frontend() {
  return (
    <Section
      title="Design"
      contentContainerStyle={{ backgroundColor: "#393e41" }}
    >
      <div className={styles.container}>
        <div className={styles.row}>
          <Link className={styles.link} to="/typography">
            <div className={`${styles.card} ${styles.typographyCard}`}>
              <div className={styles.view}>
                <p style={{ margin: 0 }}>View</p>
              </div>
              <Glitch classNameContainer={styles.typography}>Typograhy</Glitch>
              <div className={styles.info}>
                <div className={styles.divider}></div>
                <p>
                  Some cool text designs I recreated using HTML,CSS and
                  Javascript.
                </p>
              </div>
            </div>
          </Link>
          <Link className={styles.link} to="/space">
            <div className={styles.card}>
              <div className={styles.view}>
                <p style={{ margin: 0 }}>View</p>
              </div>
              <h3>ThreeJS</h3>
              <div className={styles.info}>
                <div className={styles.divider}></div>
                <p>
                  I really like making 3D animations on the web, and this is
                  what I've made with it
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default Frontend;
