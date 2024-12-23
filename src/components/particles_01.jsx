import * as THREE from "three";
import { useRef, useReducer, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { BallCollider, Physics, RigidBody } from "@react-three/rapier";
import { easing } from "maath";
import { MeshTransmissionMaterial } from "@react-three/drei";

// const connectors = useMemo(() => shuffle(accent), [accent]);
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
        <BallLights key={i} {...props} mat={baubleMaterial} />
      ))}

      {baubles2.map((props, i) => (
        <BallLights key={i} {...props} mat={baubleMaterial2} />
      ))}
    </Physics>
  );
}
export default ParticleSystem01;

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();
  // const globalEnvMap = tre;
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
      position={[0, 0, 50]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
      <mesh castShadow receiveShadow scale={4} geometry={sphereGeometry}>
        <MeshTransmissionMaterial
          meshPhysicalMaterial={true}
          transmissionSampler={false}
          backside={false}
          samples={32}
          transmission={0.99}
          clearcoat={1}
          thickness={4}
          anisotropicBlur={0.1}
          distortion={0.3}
          distortionScale={0.1}
          temporalDistortion={1}
        />
      </mesh>
    </RigidBody>
  );
}

// Spheres //

const accents = ["#1B1833", "#441752", "#AB4459", "#F29F58"];

const shuffle = (accent = 0) => [
  { color: "#AB4459", roughness: 0.1, metalness: 0.5 },
  { color: "#AB4459", roughness: 0.1, metalness: 0.5 },
  { color: "#AB4459", roughness: 0.1, metalness: 0.5 },
  { color: "#AB4459", roughness: 0.1, metalness: 0.1 },
  { color: "#AB4459", roughness: 0.1, metalness: 0.1 },
  { color: "#AB4459", roughness: 0.1, metalness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: "#E26EE5", roughness: 0.1 },
  { color: "#AB4459", roughness: 0.3 },
  { color: "#AB4459", roughness: 0.3 },
  { color: "#AB4459", roughness: 0.1 },
  { color: "#AB4459", roughness: 0.2 },
  { color: "#AB4459", roughness: 0.1 },
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
  const pos = useMemo(() => position || [r(10), -100, r(10)], []);
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
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial {...props} />
        {children}
      </mesh>
    </RigidBody>
  );
}

THREE.ColorManagement.legacyMode = false;
const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const baubles = [...Array(50)].map(() => ({
  scale: [0.75, 0.85, 1, 1.15, 1.5][Math.floor(Math.random() * 5)],
}));

const baubles2 = [...Array(50)].map(() => ({
  scale: [0.75, 0.85, 1, 1.15, 1.7][Math.floor(Math.random() * 5)],
}));

const baubleMaterial = new THREE.MeshStandardMaterial({
  color: "#219B9D",
  emissive: "#219B9D",
  emissiveIntensity: 1,
  metalness: 0.8,
  roughness: 0.5,
});
const baubleMaterial2 = new THREE.MeshStandardMaterial({
  color: "#1B1833",
  emissive: "#1B1833",
  metalness: 0.8,
  roughness: 0.5,
});

function BallLights({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  mat = baubleMaterial,
  offset = -25,
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
      friction={0.1}
      position={[r(20), r(20) - offset, r(20) - 10]}
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
        material={mat}
      />
    </RigidBody>
  );
}
