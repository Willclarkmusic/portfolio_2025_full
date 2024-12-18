import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import { MotionConfig } from "framer-motion";

import "./App.css";
import CarShow from "./pages/CarShow";
import { ScrollManager } from "./components/ScrollManager";
import { Interface } from "./components/Interface";
import Menu from "./components/Menu";
import SceneRig from "./components/SceneRig";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(true);

  // useEffect(() => {
  //   setMenuOpened(false);
  // }, [section]);

  return (
    <>
      <MotionConfig
        transition={{
          type: "spring",
          mass: 5,
          stiffness: 50,
          damping: 50,
          restDelta: 0.0001,
        }}
      >
        <Canvas shadows fallback={<div>WebGL not supported!</div>}>
          <color args={[0, 0, 0]} attach="background" />

          <SceneRig />

          <ScrollControls pages={8} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />

            <Scroll>
              <CarShow section={section} />
            </Scroll>

            <Scroll html="true">
              <Interface />
            </Scroll>
            
          </ScrollControls>
        </Canvas>
      </MotionConfig>
      <Menu
        section={section}
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
    </>
  );
}

export default App;
