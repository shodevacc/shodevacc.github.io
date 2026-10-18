"use client";

import React, { useState } from "react";
import { useTrail, useSpring, useChain, useSpringRef, animated as a } from "@react-spring/web";
import * as styles from "../../style/animations/imagelayer.module.css";

const images = [1, 2, 3, 4].map((n) => `/images/animations/imagelayer/image${n}.jpg`);

function ImageLayer() {
  const [enter, setEnter] = useState(false);
  const trailRef = useSpringRef();
  const springRef = useSpringRef();
  const trail = useTrail(images.length, {
    ref: trailRef,
    from: { x: 100 },
    to: { x: enter ? 0 : 100 },
  });
  const props = useSpring({
    ref: springRef,
    from: { x: 0, visibility: `hidden` },
    to: { x: enter ? 100 : 0, visibility: enter ? `visible` : `hidden` },
  });
  useChain(enter ? [trailRef, springRef] : [springRef, trailRef]);

  return (
    <div className={styles.container}>
      <a.div
        style={{
          display: !enter ? `none` : `block`,
          position: `absolute`,
          top: `50%`,
          left: `50%`,
          transform: `translate(-50%,-50%)`,
          visibility: props.visibility,
        }}
      >
        WELCOME
      </a.div>
      <div
        style={{
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
          transform: props.x.to((x) => `translate3d(0,${x}%,0)`),
        }}
      >
        {trail.map(({ x }, index) => (
          <a.div
            key={index}
            style={{
              overflow: `hidden`,
              position: `absolute`,
              height: `100vh`,
              width: `100vw`,
              transform: x.to((x) => `translate3d(0,${x}%,0)`),
            }}
          >
            <a.img
              alt=""
              style={{
                height: `100%`,
                width: `100%`,
                transform: x.to((x) => `translate3d(0,-${x}%,0)`),
              }}
              src={images[index]}
            />
          </a.div>
        ))}
      </a.div>
    </div>
  );
}

export default ImageLayer;
