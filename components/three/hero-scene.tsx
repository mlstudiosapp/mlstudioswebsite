"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Center, Float, Sparkles, Text3D } from "@react-three/drei";
import { suspend } from "suspend-react";
import type { Group } from "three";

const interBold = import("@pmndrs/assets/fonts/inter_bold.json.js");

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const listener = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  return reduced;
}

function usePointer() {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return pointer;
}

function BrandMark({ reducedMotion }: { reducedMotion: boolean }) {
  const font = (suspend(interBold) as { default: string }).default;
  const groupRef = useRef<Group>(null);
  const { viewport } = useThree();
  const pointer = usePointer();

  useFrame(() => {
    if (!groupRef.current) return;
    const targetX = pointer.current.y * -0.22;
    const targetY = pointer.current.x * 0.35;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.04;
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.04;
  });

  const scale = Math.min(1.05, (viewport.width * 0.88) / 5.6);

  return (
    <group position={[0, 0.55, 0]}>
      <Float
        speed={reducedMotion ? 0 : 1.4}
        rotationIntensity={reducedMotion ? 0 : 0.12}
        floatIntensity={reducedMotion ? 0 : 0.5}
      >
        <group ref={groupRef} scale={scale}>
          <Center position={[0, 0.74, 0]}>
            <Text3D
              font={font}
              size={1}
              height={0.3}
              bevelEnabled
              bevelSize={0.024}
              bevelThickness={0.045}
              curveSegments={10}
              letterSpacing={0.06}
            >
              ML
              <meshStandardMaterial
                color="#AFC1FF"
                metalness={0.85}
                roughness={0.18}
                emissive="#2A3BAA"
                emissiveIntensity={0.28}
              />
            </Text3D>
          </Center>
          <Center position={[0, -0.52, 0]}>
            <Text3D
              font={font}
              size={1}
              height={0.3}
              bevelEnabled
              bevelSize={0.024}
              bevelThickness={0.045}
              curveSegments={10}
              letterSpacing={0.06}
            >
              STUDIOS
              <meshStandardMaterial
                color="#AFC1FF"
                metalness={0.85}
                roughness={0.18}
                emissive="#2A3BAA"
                emissiveIntensity={0.28}
              />
            </Text3D>
          </Center>
        </group>
      </Float>
    </group>
  );
}

function Accents({ reducedMotion }: { reducedMotion: boolean }) {
  const { viewport } = useThree();

  if (viewport.width < 4.2) return null;

  const floatProps = {
    speed: reducedMotion ? 0 : 1.8,
    rotationIntensity: reducedMotion ? 0 : 0.6,
    floatIntensity: reducedMotion ? 0 : 0.8,
  };

  return (
    <>
      <Float {...floatProps}>
        <mesh position={[-3.2, 1.7, -1.2]}>
          <icosahedronGeometry args={[0.34, 0]} />
          <meshStandardMaterial color="#3DDC84" metalness={0.7} roughness={0.25} emissive="#1E8F52" emissiveIntensity={0.2} />
        </mesh>
      </Float>
      <Float {...floatProps}>
        <mesh position={[3.3, -0.9, -0.8]}>
          <torusGeometry args={[0.3, 0.11, 16, 44]} />
          <meshStandardMaterial color="#F5C46B" metalness={0.7} roughness={0.25} emissive="#8a6a2a" emissiveIntensity={0.2} />
        </mesh>
      </Float>
      <Float {...floatProps}>
        <mesh position={[2.9, 1.9, -1.6]}>
          <octahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial color="#B388FF" metalness={0.7} roughness={0.25} emissive="#5b3a99" emissiveIntensity={0.2} />
        </mesh>
      </Float>
      <Float {...floatProps}>
        <mesh position={[-3.0, -1.3, -1.0]}>
          <tetrahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial color="#6C8CFF" metalness={0.7} roughness={0.25} emissive="#3A4FCC" emissiveIntensity={0.2} />
        </mesh>
      </Float>
    </>
  );
}

export function HeroScene() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 7], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 6]} intensity={1.5} color="#DCE4FF" />
      <pointLight position={[-5, -2, -4]} intensity={0.7} color="#B388FF" />
      <pointLight position={[0, -3, 5]} intensity={0.5} color="#6C8CFF" />
      <Suspense fallback={null}>
        <BrandMark reducedMotion={reducedMotion} />
      </Suspense>
      <Accents reducedMotion={reducedMotion} />
      <Sparkles count={80} scale={[11, 6.5, 4]} size={2.2} speed={reducedMotion ? 0 : 0.35} color="#8FA8FF" opacity={0.55} />
    </Canvas>
  );
}
