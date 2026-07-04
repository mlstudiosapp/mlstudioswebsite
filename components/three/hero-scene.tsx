"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Center,
  Environment,
  Float,
  Lightformer,
  Sparkles,
  Text3D,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
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

  // Fit to the smaller of the two available dimensions so the wordmark
  // never outgrows its bounded-height stage, regardless of aspect ratio.
  const scale = Math.min(viewport.width * 0.8, viewport.height * 1.35) / 5.8;

  return (
    <group position={[0, 0, 0]}>
      <Float
        speed={reducedMotion ? 0 : 1.4}
        rotationIntensity={reducedMotion ? 0 : 0.1}
        floatIntensity={reducedMotion ? 0 : 0.4}
      >
        <group ref={groupRef} scale={scale}>
          <Center position={[0, 0.95, 0]}>
            <Text3D
              font={font}
              size={1}
              height={0.32}
              bevelEnabled
              bevelSize={0.026}
              bevelThickness={0.05}
              curveSegments={12}
              letterSpacing={0.06}
            >
              ML
              <meshStandardMaterial
                color="#C7D3FF"
                metalness={0.92}
                roughness={0.08}
                emissive="#2A3BAA"
                emissiveIntensity={0.18}
              />
            </Text3D>
          </Center>
          <Center position={[0, -0.75, 0]}>
            <Text3D
              font={font}
              size={1}
              height={0.32}
              bevelEnabled
              bevelSize={0.026}
              bevelThickness={0.05}
              curveSegments={12}
              letterSpacing={0.06}
            >
              STUDIOS
              <meshStandardMaterial
                color="#C7D3FF"
                metalness={0.92}
                roughness={0.08}
                emissive="#2A3BAA"
                emissiveIntensity={0.18}
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
        <mesh position={[-3.2, 1.6, -1.4]}>
          <icosahedronGeometry args={[0.32, 0]} />
          <meshStandardMaterial color="#3DDC84" metalness={0.75} roughness={0.15} emissive="#1E8F52" emissiveIntensity={0.15} />
        </mesh>
      </Float>
      <Float {...floatProps}>
        <mesh position={[3.3, -1.0, -1.0]}>
          <torusGeometry args={[0.28, 0.1, 16, 44]} />
          <meshStandardMaterial color="#F5C46B" metalness={0.75} roughness={0.15} emissive="#8a6a2a" emissiveIntensity={0.15} />
        </mesh>
      </Float>
      <Float {...floatProps}>
        <mesh position={[2.9, 1.7, -1.8]}>
          <octahedronGeometry args={[0.28, 0]} />
          <meshStandardMaterial color="#B388FF" metalness={0.75} roughness={0.15} emissive="#5b3a99" emissiveIntensity={0.15} />
        </mesh>
      </Float>
      <Float {...floatProps}>
        <mesh position={[-3.0, -1.4, -1.2]}>
          <tetrahedronGeometry args={[0.28, 0]} />
          <meshStandardMaterial color="#6C8CFF" metalness={0.75} roughness={0.15} emissive="#3A4FCC" emissiveIntensity={0.15} />
        </mesh>
      </Float>
    </>
  );
}

function StudioEnvironment() {
  return (
    <Environment resolution={256}>
      <Lightformer
        form="rect"
        intensity={2.2}
        color="#DCE4FF"
        position={[0, 3, 4]}
        scale={[6, 3, 1]}
      />
      <Lightformer
        form="rect"
        intensity={1.4}
        color="#6C8CFF"
        position={[-5, 1, 2]}
        rotation={[0, Math.PI / 4, 0]}
        scale={[4, 2, 1]}
      />
      <Lightformer
        form="rect"
        intensity={1.4}
        color="#B388FF"
        position={[5, -1, 2]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[4, 2, 1]}
      />
      <Lightformer
        form="ring"
        intensity={1.1}
        color="#3DDC84"
        position={[0, -3, -3]}
        scale={[5, 5, 1]}
      />
    </Environment>
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
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 4, 6]} intensity={0.8} color="#DCE4FF" />
      <pointLight position={[-5, -2, -4]} intensity={0.4} color="#B388FF" />
      <Suspense fallback={null}>
        <BrandMark reducedMotion={reducedMotion} />
        <StudioEnvironment />
      </Suspense>
      <Accents reducedMotion={reducedMotion} />
      <Sparkles count={70} scale={[11, 6.5, 4]} size={2} speed={reducedMotion ? 0 : 0.3} color="#8FA8FF" opacity={0.45} />
      <EffectComposer enableNormalPass={false}>
        <Bloom
          luminanceThreshold={0.35}
          luminanceSmoothing={0.9}
          intensity={0.55}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}
