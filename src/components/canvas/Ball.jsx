import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Decal, OrbitControls, Float, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      {/* 흰색 광원 */}
      <directionalLight position={[0, 0, 0.05]} />

      {/* 보라색 광원, 밝기가 흰광원에 비해 어두움 */}
      {/* <spotLight color={[1, 0.25, 0.7]} intensity={1.5} angle={0.6} penumbra={0.5} position={[5, 5, 0]} castShadow shadow-bias={-0.0001} /> */}
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        {/* <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading /> */}
        <meshPhysicalMaterial roughness={0.2} metalness={0.8} transmission={1} ior={2.33} flatShading polygonOffset polygonOffsetFactor={-5} />

        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} map={decal} flatShading />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always"
      gl={{ preserveDrawingBuffer: true }}
      // 특정한 최적화 수행을 막지만 WebGL이 캔버스를 지우지 않도록 하는 작업
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
