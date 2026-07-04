"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import type { Mesh } from "three";

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

function DistortedCore({ reducedMotion }: { reducedMotion: boolean }) {
  const meshRef = useRef<Mesh>(null);
  const { viewport } = useThree();
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    if (!reducedMotion) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.05;
    }

    const targetTiltX = pointer.current.y * 0.25;
    const targetTiltY = pointer.current.x * 0.25;
    meshRef.current.rotation.x += (targetTiltX - meshRef.current.rotation.x) * 0.03;
    meshRef.current.rotation.z += (targetTiltY - meshRef.current.rotation.z) * 0.03;
  });

  const scale = Math.min(viewport.width, viewport.height) * 0.18;

  return (
    <Icosahedron ref={meshRef} args={[1, 4]} scale={scale}>
      <MeshDistortMaterial
        color="#8FA8FF"
        emissive="#3A4FCC"
        emissiveIntensity={0.4}
        roughness={0.15}
        metalness={0.6}
        distort={0.35}
        speed={reducedMotion ? 0 : 1.5}
      />
    </Icosahedron>
  );
}

export function HeroScene() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#DCE4FF" />
      <pointLight position={[-5, -3, -5]} intensity={0.5} color="#B388FF" />
      <DistortedCore reducedMotion={reducedMotion} />
    </Canvas>
  );
}
