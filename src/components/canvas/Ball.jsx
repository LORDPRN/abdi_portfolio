import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  const decals = [
    { position: [0, 0, 1], rotation: [0, 0, 0] }, // Front face
    { position: [0, 0, -1], rotation: [0, Math.PI, 0] }, // Back face
    { position: [1, 0, 0], rotation: [0, -Math.PI / 2, 0] }, // Right face
    { position: [-1, 0, 0], rotation: [0, Math.PI / 2, 0] }, // Left face
    { position: [0, 1, 0], rotation: [-Math.PI / 2, 0, 0] }, // Top face
    { position: [0, -1, 0], rotation: [Math.PI / 2, 0, 0] }, // Bottom face
  ];

  return (
    <Float
      speed={3}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 0.05]} intensity={0.5} />
      <directionalLight position={[0, 0, -0.05]} intensity={0.5} />
      <directionalLight position={[0.05, 0, 0]} intensity={0.5} />
      <directionalLight position={[-0.05, 0, 0]} intensity={0.5} />
      <mesh castShadow receiveShadow scale={2.75}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.1}
          roughness={0.2}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading={false}
        />

        {decals.map((decalData, index) => (
          <Decal
            key={index}
            position={decalData.position}
            rotation={decalData.rotation}
            flatShading={false}
            map={decal}
            scale={0.8}
          />
        ))}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
