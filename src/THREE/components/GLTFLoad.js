import React from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function GLTFLoad({ url }) {
  const gltf = useLoader(GLTFLoader, url);
  console.log("GLTF",gltf)
  return <primitive object={gltf.scene} />;
}

export default GLTFLoad;
