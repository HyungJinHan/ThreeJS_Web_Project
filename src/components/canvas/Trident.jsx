import React, { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Rhino3dmLoader } from "three-stdlib";
import CanvasLoader from "../Loader";

function Model({ url, ...props }) {
  const model = useLoader(Rhino3dmLoader, url, (loader) =>
    loader.setLibraryPath("https://cdn.jsdelivr.net/npm/rhino3dm@8.0.0/")
  );

  return (
    <mesh>
      <hemisphereLight
        intensity={0.15}
        position={[50, 10, 180]}
        groundColor="white"
      />
      <pointLight intensity={0.8} position={[-100, 10, -150]} />
      <pointLight intensity={0.8} position={[100, 10, -150]} />
      <pointLight intensity={0.8} position={[200, 15, 150]} />
      {/* <ambientLight intensity={0.3} />
      <spotLight
        position={[-100, 10, 150]}
        angle={0.12}
        penumbra={1}
        intensity={0.7}
        castShadow
        shadowMapSize={1024}
      />
      <spotLight
        position={[100, 10, 150]}
        angle={0.12}
        penumbra={1}
        intensity={0.7}
        castShadow
        shadowMapSize={1024}
      /> */}
      <primitive
        object={model}
        scale={0.02}
        position={[0, -20, 2]}
        rotation={[-1.56, 0, 0]}
      />
    </mesh>
  );
}

function Trident() {
  const [boatColor, setBoatColor] = useState("default");
  const [borderDefault, setBorderDefault] = useState("3px solid white");
  const [borderBlack, setBorderBlack] = useState("none");
  const [borderBlue, setBorderBlue] = useState("none");
  const [borderRed, setBorderRed] = useState("none");
  const [borderYellow, setBorderYellow] = useState("none");

  return (
    <>
      <Canvas
        frameloop="demand"
        // shadows
        camera={{ position: [200, 3, 5], fov: 20 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={true}
            // maxPolarAngle={Math.PI / 2}
            // minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={1}
            rotateSpeed={0.3}
          />
          <Model url={`/trident_${boatColor}.3dm`} />
        </Suspense>
      </Canvas>
      <div
        style={{
          border: borderDefault,
          width: "20px",
          height: "20px",
          borderRadius: "100%",
          cursor: "pointer",
          backgroundColor: "#707070",
          display: "inline-block",
        }}
        onClick={() => {
          setBoatColor("default");
          setBorderDefault("3px solid white");
          setBorderBlack("none");
          setBorderBlue("none");
          setBorderRed("none");
          setBorderYellow("none");
        }}
      />
      &nbsp;&nbsp;
      <div
        style={{
          border: borderBlack,
          width: "20px",
          height: "20px",
          borderRadius: "100%",
          cursor: "pointer",
          backgroundColor: "#121212",
          display: "inline-block",
        }}
        onClick={() => {
          setBoatColor("black");
          setBorderBlack("3px solid white");
          setBorderDefault("none");
          setBorderBlue("none");
          setBorderRed("none");
          setBorderYellow("none");
        }}
      />
      &nbsp;&nbsp;
      <div
        style={{
          border: borderBlue,
          width: "20px",
          height: "20px",
          borderRadius: "100%",
          cursor: "pointer",
          backgroundColor: "#2A3E77",
          display: "inline-block",
        }}
        onClick={() => {
          setBoatColor("blue");
          setBorderBlue("3px solid white");
          setBorderDefault("none");
          setBorderBlack("none");
          setBorderRed("none");
          setBorderYellow("none");
        }}
      />
      &nbsp;&nbsp;
      <div
        style={{
          border: borderRed,
          width: "20px",
          height: "20px",
          borderRadius: "100%",
          cursor: "pointer",
          backgroundColor: "#972723",
          display: "inline-block",
        }}
        onClick={() => {
          setBoatColor("red");
          setBorderRed("3px solid white");
          setBorderDefault("none");
          setBorderBlack("none");
          setBorderBlue("none");
          setBorderYellow("none");
        }}
      />
      &nbsp;&nbsp;
      <div
        style={{
          border: borderYellow,
          width: "20px",
          height: "20px",
          borderRadius: "100%",
          cursor: "pointer",
          backgroundColor: "#AC8B41",
          display: "inline-block",
        }}
        onClick={() => {
          setBoatColor("yellow");
          setBorderYellow("3px solid white");
          setBorderDefault("none");
          setBorderBlack("none");
          setBorderBlue("none");
          setBorderRed("none");
        }}
      />
    </>
  );
}

export default Trident;
