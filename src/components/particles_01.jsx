import * as THREE from "three";
import { useRef, useReducer, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { BallCollider, Physics, RigidBody } from "@react-three/rapier";
import { easing } from "maath";

function ParticleSystem01(props) {
  const { section } = props;
  const [accent, click] = useReducer((state) => ++state % accents.length, 0);
  const connectors = useMemo(() => shuffle(accent), [accent]);
  return (
    <Physics /*debug*/ timeStep="vary" gravity={[0, 5, 0]}>
      <Pointer />
      {connectors.map((props, i) => (
        <Sphere key={i} {...props} />
      ))}

      {baubles.map((props, i) => (
        <BallLights key={i} {...props} />
      ))}
    </Physics>
  );
}
export default ParticleSystem01;

const accents = ["#92DCE5", "#ffcc00", "#20ffa0", "#4060ff"];
const shuffle = (accent = 0) => [
  { color: "#444", roughness: 0.1, metalness: 0.5 },
  { color: "#444", roughness: 0.1, metalness: 0.5 },
  { color: "#444", roughness: 0.1, metalness: 0.5 },
  { color: "white", roughness: 0.1, metalness: 0.1 },
  { color: "white", roughness: 0.1, metalness: 0.1 },
  { color: "white", roughness: 0.1, metalness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: "#444", roughness: 0.1 },
  { color: "#444", roughness: 0.3 },
  { color: "#444", roughness: 0.3 },
  { color: "white", roughness: 0.1 },
  { color: "white", roughness: 0.2 },
  { color: "white", roughness: 0.1 },
  {
    color: accents[accent],
    roughness: 0.1,
    accent: true,
    transparent: true,
  },
  {
    color: accents[accent],
    roughness: 0.3,
    accent: true,
    transparent: true,
  },
  {
    color: accents[accent],
    roughness: 0.1,
    accent: true,
    transparent: true,
  },
];

function Sphere({
  position,
  children,
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  accent,
  color = "white",
  ...props
}) {
  const api = useRef();
  const ref = useRef();
  const pos = useMemo(() => position || [r(10), -200, r(10)], []);
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current?.applyImpulse(
      vec.copy(api.current.translation()).negate().multiplyScalar(0.2)
    );
    easing.dampC(ref.current.material.color, color, 0.2, delta);
  });
  return (
    <RigidBody
      linearDamping={2}
      angularDamping={1}
      friction={0.1}
      position={pos}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[1]} />
      <mesh ref={ref} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial {...props} />
        {children}
      </mesh>
    </RigidBody>
  );
}

THREE.ColorManagement.legacyMode = false;
const baubleMaterial = new THREE.MeshLambertMaterial({
  color: "#c0a0a0",
  emissive: "blue",
});
const capMaterial = new THREE.MeshStandardMaterial({
  metalness: 0.75,
  roughness: 0.15,
  color: "#8a492f",
  emissive: "#600000",
  envMapIntensity: 20,
});
const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);
const baubles = [...Array(100)].map(() => ({
  scale: [0.75, 0.75, 1, 1, 1.25][Math.floor(Math.random() * 5)],
}));

function BallLights({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
}) {
  const api = useRef();
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current.applyImpulse(
      vec
        .copy(api.current.translation())
        .normalize()
        .multiply({
          x: -50 * delta * scale,
          y: -150 * delta * scale,
          z: -50 * delta * scale,
        })
    );
  });
  return (
    <RigidBody
      linearDamping={1}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
      dispose={null}
    >
      <BallCollider args={[scale]} />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={baubleMaterial}
      />
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();
  useFrame(({ pointer, viewport }) => {
    vec.lerp(
      {
        x: (pointer.x * viewport.width) / -2,
        y: (pointer.y * viewport.height) / 2,
        z: 0,
      },
      0.2
    );
    ref.current?.setNextKinematicTranslation(vec);
  });
  return (
    <RigidBody
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
      <mesh castShadow receiveShadow scale={1} geometry={sphereGeometry} />
    </RigidBody>
  );
}
