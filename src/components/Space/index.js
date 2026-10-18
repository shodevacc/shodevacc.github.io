"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useTransition, animated as a } from "@react-spring/web";
import * as styles from "../../style/space.module.css";
import Ship from "./SpaceShip";
import Controls from "./OrbitControls";

function Loading() {
  const [finished, set] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    THREE.DefaultLoadingManager.onLoad = () => set(true);
    THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) =>
      setWidth((itemsLoaded / itemsTotal) * 200);
  }, []);

  const transitions = useTransition(finished, {
    from: { opacity: 1, width: 0 },
    leave: { opacity: 0 },
    update: { width },
  });
  return transitions(
    ({ opacity, width }, finished) =>
      !finished && (
        <a.div className={styles.loading} style={{ opacity }}>
          <div className={styles.loadingBarContainer}>
            <a.div className={styles.loadingBar} style={{ width }} />
          </div>
        </a.div>
      )
  );
}

function Space() {
  return (
    <div className={styles.space}>
      <h1 className={styles.spaceText}>To Infinity and Beyond!</h1>
      <Canvas camera={{ position: [0, 0, 15] }} shadows="percentage">
        <Suspense fallback={null}>
          <Ship />
        </Suspense>

        <Controls />
        <ambientLight intensity={0.3} />
        <pointLight intensity={0.7} position={[-10, -25, -10]} />
        <spotLight
          castShadow
          intensity={2.25}
          angle={0.2}
          penumbra={1}
          position={[25, 25, 25]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />
        <fog attach="fog" args={["#cc7b32", 16, 20]} />
      </Canvas>
      <Loading />
    </div>
  );
}

export default Space;
