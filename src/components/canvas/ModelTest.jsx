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

// THREE.3DMLoader를 사용할 때 ObjectType_Brep에 대한 에러가 발생한다면, 해당 3D 모델에서 B-rep 유형의 오브젝트가 메쉬 지오메트리와 연관되어 있지 않은 것으로 추정됩니다. 이 문제를 해결하려면 다음 단계를 수행할 수 있습니다:

// 3D 모델 파일을 열어서 B-rep 오브젝트를 찾습니다. 일반적으로 이러한 유형의 오브젝트는 3D 모델에서 높은 수준의 세부 정보를 제공합니다.

// B-rep 오브젝트가 메쉬 지오메트리와 연관되어 있지 않은 경우, 해당 오브젝트에 메쉬 지오메트리를 연결해야 합니다. 이를 수행하는 가장 쉬운 방법은 다른 3D 모델 파일에서 가져온 메쉬 지오메트리를 적용하는 것입니다.

// B-rep 오브젝트에 메쉬 지오메트리를 적용하는 과정은 일반적으로 3D 모델마다 다릅니다. 따라서 이 문제를 해결하는 데 필요한 구체적인 단계는 3D 모델마다 다를 수 있습니다. 이를 해결하기 위해 해당 3D 모델의 사용자 매뉴얼 또는 문서를 참조하시면 도움이 될 것입니다.

// 만약 B-rep 오브젝트가 렌더링이 필요하지 않은 경우, THREE.3DMLoader의 setResourcePath() 메서드를 사용하여 해당 오브젝트를 무시하도록 설정할 수 있습니다. 이렇게 하면 해당 오브젝트를 렌더링하지 않아도 되므로 오류가 발생하지 않습니다.

// 위의 단계를 수행하여 문제를 해결할 수 있습니다.

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
