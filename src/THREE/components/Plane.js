import React from "react";

function Plane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,-0.5,0]} receiveShadow>
      <planeBufferGeometry args={[100, 100]} />
      <meshPhysicalMaterial color="red" />
    </mesh>
  );
}

export default Plane;
