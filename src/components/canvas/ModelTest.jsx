import React, { Suspense } from "react";
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
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={0.5} position={[100, 50, 100]} />
      <pointLight intensity={0.5} position={[100, -50, -150]} />
      <spotLight
        position={[-100, 50, 150]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadowMapSize={1024}
      />
      <primitive
        object={model}
        scale={0.05}
        position={[0, -5, 2]}
        rotation={[-1.56, 0, 0]}
      />
    </mesh>
  );
}

function ModelTest() {
  return (
    <Canvas
      frameloop="demand"
      // shadows
      camera={{ position: [50, 3, 5], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={1}
          rotateSpeed={0.5}
        />
        <Model url="/IJNnagato.3dm" />
      </Suspense>
    </Canvas>
  );
}

export default ModelTest;
