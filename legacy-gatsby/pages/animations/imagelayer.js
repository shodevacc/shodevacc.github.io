import React, { useState, useRef } from "react";
import Page from '../../components/Layout/Page'
import * as styles from "../../style/animations/imagelayer.module.css";
import { graphql } from "gatsby";
import img1 from "../../images/animations/imagelayer/image1.jpg";
import img2 from "../../images/animations/imagelayer/image2.jpg";
import img3 from "../../images/animations/imagelayer/image3.jpg";
import img4 from "../../images/animations/imagelayer/image4.jpg";
// import BackgroundImage from "gatsby-background-image";
import { useTrail, a, useChain, useSpring } from "react-spring";

function Imagelayer({ data }) {
  console.log(data.imageLayer.edges[0].node.childImageSharp.gatsbyImageData);
  const [enter, setEnter] = useState(false);
  const [hide, setHide] = useState(false);
  const images = [img1, img2, img3, img4];
  const trailRef = useRef();
  const springRef = useRef();
  const trail = useTrail(images.length, {
    ref: trailRef,
    // config: { mass: 1, tension: 170, friction: 200 },
    x: enter ? 0 : 100,
    from: { x: 100 },
  });
  const props = useSpring({
    ref: springRef,
    // config: { mass: 1, tension: 170, friction: 200 },
    x: enter ? 100 : 0,
    visibility:enter ?`visible`:`hidden`,
    from: { x: 0,visibility:`hidden` },
  });
  useChain(enter ? [trailRef, springRef] : [springRef, trailRef]);
  // if(hide){
  //   console.log("DONE")
  // }
  return (
    <Page darkNav title="imagelayer">
      <div className={styles.container}>
        <a.div
          style={{
            display: !enter ? `none` : `block`,
            position: `absolute`,
            top: `50%`,
            left: `50%`,
            transform: `translate(-50%,-50%)`,
            visibility:props.visibility
          }}
        >
          WELCOME
        </a.div>
        <div
          style={{
            // height:`100px`,
            // width:`100px`,
            display: enter ? `none` : `block`,
            position: `absolute`,
            top: `50%`,
            left: `50%`,
            transform: `translate(-50%,-50%)`,
            background: `hotpink`,
            borderRadius: `50%`,
            padding: `50px`,
            cursor: `pointer`,
            fontSize: `16px`,
            color: `white`,
            fontWeight: `bold`,
            zIndex: `5`,
          }}
          onClick={() => setEnter(true)}
        >
          Enter
        </div>
        <a.div
          style={{
            height: `100%`,
            width: `100%`,
            transform: props.x.interpolate((x) => `translate3d(0,${x}%,0)`),
          }}
        >
          {trail.map(({ x }, index) => {
            return (
              <a.div
                key={index}
                style={{
                  overflow: `hidden`,
                  position: `absolute`,
                  height: `100vh`,
                  width: `100vw`,
                  transform: x.interpolate((x) => `translate3d(0,${x}%,0)`),
                }}
              >
                <a.img
                  style={{
                    height: `100%`,
                    width: `100%`,
                    transform: x.interpolate((x) => `translate3d(0,-${x}%,0)`),
                  }}
                  src={images[index]}
                />
              </a.div>
            );
          })}
        </a.div>
      </div>
    </Page>
  );
}
export const query = graphql`
  {
    imageLayer: allFile(
      filter: { relativeDirectory: { eq: "animations/imagelayer" } }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  }
`;
export default Imagelayer;
