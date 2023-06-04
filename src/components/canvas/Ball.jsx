import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from '../Loader';

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
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />

        {decals.map((decalData, index) => (
          <Decal
            key={index}
            position={decalData.position}
            rotation={decalData.rotation}
            flatShading
            map={decal}
          />
        ))}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false}/>
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
