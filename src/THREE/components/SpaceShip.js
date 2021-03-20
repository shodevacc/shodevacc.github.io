import React, { Suspense } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function SpaceShip() {
  const { nodes, materials } = useLoader(GLTFLoader, '/assets/spaceship/scene.gltf');
  return (
    // null
    <group
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -7, 0]}
      scale={[7, 7, 7]}
    >
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.planet001.geometry}
          material={materials.scene}
        />
         <mesh
          castShadow
          receiveShadow
          geometry={nodes.planet001_1.geometry}
          material={materials.scene}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.planet001_2.geometry}
          material={materials.scene}
        />
      </group>
    </group>
  );
}

export default SpaceShip;
