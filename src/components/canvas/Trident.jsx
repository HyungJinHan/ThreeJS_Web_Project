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
      {/* <ambientLight intensity={0.3} /> */}
      {/* <spotLight
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

      <input
        type="button"
        value="초기화"
        onClick={() => {
          setBoatColor("default");
        }}
      />
      <br />
      <br />
      <input
        type="button"
        value="black"
        onClick={() => {
          setBoatColor("black");
        }}
      />
      <br />
      <br />
      <input
        type="button"
        value="blue"
        onClick={() => {
          setBoatColor("blue");
        }}
      />
      <br />
      <br />
      <input
        type="button"
        value="red"
        onClick={() => {
          setBoatColor("red");
        }}
      />
    </>
  );
}

export default Trident;
