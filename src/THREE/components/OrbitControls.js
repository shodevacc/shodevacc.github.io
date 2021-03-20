import React, { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useFrame, useThree, extend } from "react-three-fiber";

extend({ OrbitControls });

function OrbitControl() {
  const orbitRef = useRef();

  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });
  return (
    <orbitControls
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      enableDamping
      enablePan={false}
      dampingFactor={0.5}
      rotateSpeed={1}
      enableZoom={false}
      autoRotate
      ref={orbitRef}
      args={[camera, gl.domElement]}
    />
  );
}

export default OrbitControl;
