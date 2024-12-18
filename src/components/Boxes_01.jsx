import React, { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

function Box({ color }) {
  const box = useRef();
  const [xRotSpeed] = useState(() => Math.random() * 2);
  const [yRotSpeed] = useState(() => Math.random() * 2);
  const [scale] = useState(() => Math.pow(Math.random(), 4.0) * 0.5 + 0.05);
  const [position, setPosition] = useState(getInitialPosition());

  function getInitialPosition() {
    let v = new Vector3(
      (Math.random() * 2 - 1) * 15,
      Math.random() * 2.5 + 0.1,
      (Math.random() * 2 - 1) * 15
    );
    // if (v.x < 0) v.x -= 1.75;
    // if (v.x > 0) v.x += 1.75;

    return v;
  }

  function resetPostition() {
    let v = new Vector3(
      (Math.random() * 2 - 1) * 3,
      Math.random() * 2.5 + 0.1,
      (Math.random() * 2 - 1) * 15
    );
    if (v.x < 0) v.x -= 1.75;
    if (v.x > 0) v.x += 1.75;
    return v;
  }

  useFrame(
    (state, delta) => {
      box.current.position.set(position.x, position.y, position.z);
      box.current.rotation.x += delta * xRotSpeed;
      box.current.rotation.y += delta * yRotSpeed;
    },
    [xRotSpeed, yRotSpeed, position]
  );

  return (
    // Geometry and Mat here
    <mesh ref={box} rotation-x={Math.PI * 0.5} scale={scale} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        envMapIntensity={0.15}
        emissive={color}
        emissiveIntensity={0.8}
        metalness={0.7}
        roughness={0}
      />
    </mesh>
  );
}

export default function Boxes() {
  const [arr] = useState(() => {
    let a = [];
    for (let i = 0; i < 1000; i++) a.push(0);
    return a;
  });
  return (
    <>
      {arr.map((e, i) => (
        <Box key={i} color={i % 2 === 0 ? [0.4, 0, 1] : [0, 1, 0.5]} />
      ))}
    </>
  );
}
