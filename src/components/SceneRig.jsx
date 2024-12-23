import React, { Suspense, useEffect, useState, useRef } from "react";
import {
  PerspectiveCamera,
  OrbitControls,
  Environment,
  Lightformer,
} from "@react-three/drei";
import { MobileParams } from "./ScrollManager";

function SceneRig() {
  // console.log(viewport.width, window.innerWidth);
  const { isTablet, isMobile, responsiveRatio, aspectRatio } = MobileParams();
  // console.log(MobileParams());
  // console.log(isTablet);
  return (
    <group>
      <PerspectiveCamera
        makeDefault
        fov={23}
        aspect={aspectRatio}
        position={[0, 0, 40]}
      />

      <OrbitControls
        enableDamping={true}
        autoRotate={true}
        autoRotateSpeed={-0.3}
        maxAzimuthAngle={3.9}
        minAzimuthAngle={3.1}
        maxPolarAngle={1.5}
        minPolarAngle={1.5}
        maxDistance={50}
        minDistance={50}
        enablePan={false}
        enableZoom={false}
        enableRotate={isMobile || isTablet ? false : true}
        rotation={1}
      />
      {/* <spotLight
        color={[1, 0.25, 0.2]}
        intensity={50}
        angle={10}
        penumbra={0.5}
        position={[-4, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.4, 1]}
        intensity={80}
        angle={10}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      /> */}

      <Environment resolution={256} ssgi={false}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          {/* <Lightformer
            form="circle"
            intensity={40}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          /> */}
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
          <Lightformer
            form="circle"
            color="#4060ff"
            intensity={10}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
            position={[10, 10, 0]}
            scale={10}
          />
        </group>
      </Environment>
    </group>
  );
}

export default SceneRig;
