"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// MAIN MODEL COMPONENT WITH ANIMATIONS
function CarModel() {
  const { scene } = useGLTF("/models/jesko.glb");

  const modelRef = useRef();

  useFrame((state, delta) => {
    if (!modelRef.current) return;

    // Smooth auto-rotate on fixed axis
    modelRef.current.rotation.y += delta * 0.2;

    // Fixed position - moved far right
    modelRef.current.position.set(16.1, -0.5, 0);

    // Fixed scale
    modelRef.current.scale.set(0.8, 0.8, 0.8);
  });

  return <primitive ref={modelRef} object={scene} />;
}

// CAMERA ANIMATION
function AnimatedCamera() {
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Subtle camera orbit around the car - focused on far right
    const smoothPos = new THREE.Vector3(
      9 + Math.sin(t * 0.25) * 0.7,
      2.8 + Math.sin(t * 0.15) * 0.2,
      9 + Math.cos(t * 0.25) * 0.7
    );

    state.camera.position.lerp(smoothPos, 0.03);
    // Look at the car's actual position
    state.camera.lookAt(12.1, 0, 0);
  });

  return null;
}

export default function CarScene() {
  return (
    <Canvas
      camera={{ position: [9, 2.8, 9], fov: 55 }}
      className="w-full h-full"
      style={{ minHeight: '100%' }}
    >
      <color attach="background" args={["#000"]} />

      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[14, 5, 6]} intensity={1.2} />
      <directionalLight position={[5, 3, 4]} intensity={0.4} />
      <pointLight position={[10.1, 3, 2]} intensity={0.6} color="#4a9eff" />

      {/* Camera animation */}
      <AnimatedCamera />

      {/* Model */}
      <CarModel />

      {/* Realistic reflections */}
      <Environment preset="sunset" />

      {/* Controls */}
      <OrbitControls
        enableZoom={true}
        autoRotate={false}
        enablePan={false}
        minDistance={7}
        maxDistance={20}
        target={[10.1, 0, 0]}
      />
    </Canvas>
  );
}

useGLTF.preload("/models/jesko.glb");
