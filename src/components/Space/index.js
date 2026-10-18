"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useTransition, animated as a } from "@react-spring/web";
import * as styles from "../../style/space.module.css";
import Ship from "./SpaceShip";
import Controls from "./OrbitControls";

// Overlay with a progress bar, hidden once the ship has rendered.
// (Relying on the loader's onLoad alone left it stuck when the model was
// already cached, since nothing loads and onLoad never fires.)
function Loading({ finished }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) =>
      setWidth((itemsLoaded / itemsTotal) * 200);
    return () => {
      THREE.DefaultLoadingManager.onProgress = undefined;
    };
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
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={styles.space}>
      <h1 className={styles.spaceText}>To Infinity and Beyond!</h1>
      <Canvas camera={{ position: [0, 0, 15] }} shadows="percentage">
        <Suspense fallback={null}>
          <Ship onLoaded={() => setLoaded(true)} />
        </Suspense>

        <Controls />
        {/* three.js now uses physically based lights; these values (× π, no
            distance falloff) match how the scene looked with the old ones */}
        <ambientLight intensity={0.3 * Math.PI} />
        <pointLight intensity={0.7 * Math.PI} decay={0} position={[-10, -25, -10]} />
        <spotLight
          castShadow
          intensity={2.25 * Math.PI}
          decay={0}
          angle={0.2}
          penumbra={1}
          position={[25, 25, 25]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />
        <fog attach="fog" args={["#cc7b32", 16, 20]} />
      </Canvas>
      <Loading finished={loaded} />
    </div>
  );
}

export default Space;
