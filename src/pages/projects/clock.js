import React from "react";
import mp4 from "../../images/clock/clock.mp4";
import webm from "../../images/clock/clock.webm";
import Page from "../../components/Page";
import * as styles from "../../style/SOS.module.css";

function clock() {
  return (
    <Page title="Persistence of Vision Rotating Clock project">
      <div style={{ marginBottom: "8vw" }} className={styles.container}>
        <h2>Persistence of Vision Rotating Clock</h2>
        <div>
          <video
            style={{ float: "left", marginRight: "20px" }}
            width="230"
            height="400"
            autoPlay
            loop
            muted
          >
            <source src={webm} type="video/webm" />
            <source src={mp4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>
            This project works on the principle of Persistence of Vision. It
            works by casting an illusion of motion which is created because the
            brain interprets multiple blinking LEDs as one. When multiple LEDs
            light up in fast succeession, the brain combines them into a single,
            persistent image.
          </p>
          <p>
            This project was orignially made as a way to light up my room. The
            initial prototype was made using an old CD-Drive for the base and
            for its DC-motor. It houses a single row of 8 LEDs which are rotated
            and triggered by an optical sensor to light up and display a series
            of characters or numbers.
          </p>
          <p>
            An arduino mini micro-controller, programmed in C, is used to
            control the timing of the LEDs in order to form the desired
            character.
          </p>
          <p>
            This was later refined and submitted to the IEEE project competition
            as a means of advertisement for local buisnesses.
          </p>
        </div>
      </div>
    </Page>
  );
}

export default clock;
