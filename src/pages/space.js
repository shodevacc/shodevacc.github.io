import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import * as styles from "../style/THREE.module.css";
import * as THREE from "three";
import { useTransition, a } from "react-spring";

import Ship from "../THREE/components/SpaceShip";
import Controls from "../THREE/components/OrbitControls";
import Box from "../THREE/components/Box";

import Page from '../components/Layout/Page'

function Loading() {
  const [finished, set] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    THREE.DefaultLoadingManager.onLoad = () => set(true);
    THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) =>
      setWidth((itemsLoaded / itemsTotal) * 200);
  }, []);

  const props = useTransition(finished, null, {
    from: { opacity: 1, width: 0 },
    leave: { opacity: 0 },
    update: { width },
  });
  // console.log("LOAD",width)
  return props.map(
    ({ item: finished, key, props: { opacity, width } }) =>
      !finished && (
        <a.div className={styles.loading} key={key} style={{ opacity }}>
          <div className={styles.loadingBarContainer}>
            <a.div className={styles.loadingBar} style={{ width }} />
          </div>
        </a.div>
      )
  );
}

function space() {
  return (
    <Page title="ThreeJs Shoaib Alyaan">
      <div className={styles.space}>
        <h1 className={styles.spaceText}>To Infinity and Beyond!</h1>
        <Canvas
          camera={{
            position: [0, 0, 15],
          }}
          shadowMap
        >
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
    </Page>
  );
}

export default space;
