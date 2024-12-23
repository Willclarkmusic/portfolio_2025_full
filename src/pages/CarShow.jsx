import React from "react";
import { useScroll } from "@react-three/drei";

import { motion } from "framer-motion-3d";
import ParticleSystem01 from "../components/particles_01.jsx";
import { Effects } from "../components/Effects";
import Desk from "../components/Desk.jsx";
import CoffeePlant from "../components/CoffeePlant.jsx";
import { useFrame, useThree } from "@react-three/fiber";
import { Camping1 } from "../components/Camping1.jsx";
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
  N8AO,
  SMAA,
  TiltShift2,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { MobileParams } from "../components/ScrollManager";

function CarShow({ section }) {
  const { isTablet, isMobile, responsiveRatio } = MobileParams();
  const data = useScroll();

  useFrame(() => {
    const curSection = Math.floor(data.scroll.current * data.pages);
  });

  return (
    <>
      <ambientLight intensity={0.7} position={[0, 10, 0]} />

      <motion.group position={[0, isMobile ? 10 : 15, 0]}>
        <ParticleSystem01 section={section} />
      </motion.group>

      <group
        position={
          isMobile ? [2, -35, 5] : isTablet ? [5, -34, 10] : [0, -33.5, 10]
        }
        scale={[7, 7, 7]}
        rotation={[-0.05, 0, 0]}
      >
        <ambientLight />
        <Desk />
        <group
          position={[0.6, -0.4, 0]}
          scale={[0.15, 0.15, 0.15]}
          rotation={[0, 180, 0]}
        >
          <CoffeePlant />
        </group>
        1
      </group>

      <group
        position={[isMobile ? 2 : 0, isMobile ? -102 : -116, isMobile ? 0 : 0]}
        scale={isMobile ? [2.3, 2.3, 2.3] : [1.9, 1.9, 1.9]}
        rotation={[-0.1, 1.9, 0]}
      >
        <Camping1 />
      </group>

      {/* <Effects /> */}
      <EffectComposer multisampling={0}>
        <Bloom
          mipmapBlur
          levels={7}
          intensity={1}
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
        />
        <Noise opacity={0.01} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
        <N8AO
          halfRes
          aoRadius={32}
          intensity={2}
          aoSamples={6}
          denoiseSamples={8}
          denoiseRadius={12}
          distanceFalloff={12}
        />
        {/* <TiltShift2 /> */}
        <SMAA />
      </EffectComposer>
    </>
  );
}
export default CarShow;
