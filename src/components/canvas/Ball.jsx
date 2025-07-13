import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import {
  Float,
  OrbitControls,
  Preload,
} from '@react-three/drei';
import * as THREE from 'three';

import CanvasLoader from '../Loader';

const BoxWithImage = ({ imgUrl }) => {
  const texture = useLoader(THREE.TextureLoader, imgUrl);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={1}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <BoxWithImage imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
