import React from "react";
import {
  OrbitControls,
  Environment,
  Lightformer,
  useScroll,
} from "@react-three/drei";

import { motion } from "framer-motion-3d";
import ParticleSystem01 from "../components/particles_01.jsx";
import { Effects } from "../components/Effects";
import Desk from "../components/Desk.jsx";
import CoffeePlant from "../components/CoffeePlant.jsx";
import { useFrame, useThree } from "@react-three/fiber";
import { Camping1 } from "../components/Camping1.jsx";

function CarShow(props) {
  const { section } = props;
  const { viewport } = useThree();
  const data = useScroll();

  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 12;

  useFrame(() => {
    const curSection = Math.floor(data.scroll.current * data.pages);
  });

  return (
    <>
      {/* <ambientLight intensity={0.7} position={[0, 10, 0]} /> */}

      <motion.group position={[0, isMobile ? 10 : 15, 0]}>
        <ParticleSystem01 section={section} />
      </motion.group>

      <group
        position={[isMobile ? 2 : 0, isMobile ? -49 : -36.5, isMobile ? 5 : 10]}
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
        position={[
          isMobile ? 2 : 0,
          isMobile ? -120 : -128.5,
          isMobile ? 0 : 0,
        ]}
        scale={[2, 2, 2]}
        rotation={[-0.05, 2.3, 0]}
      >
        <ambientLight />
        <Camping1 />
      </group>

      <Effects />
    </>
  );
}
export default CarShow;
