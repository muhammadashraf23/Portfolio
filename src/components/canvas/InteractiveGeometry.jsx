"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float, Edges } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function InteractiveGeometry() {
  const meshRef = useRef();
  const { viewport } = useThree();

  useFrame((state, delta) => {
    // Base rotation
    meshRef.current.rotation.y += 0.2 * delta;
    meshRef.current.rotation.x += 0.1 * delta;

    // Mouse interactive rotation mapping (tactile 2026 interaction)
    const targetX = (state.pointer.x * viewport.width) / 4;
    const targetY = (state.pointer.y * viewport.height) / 4;
    
    // Smooth damp towards the mouse
    meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05;
    meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.05;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1} floatingRange={[-0.5, 0.5]}>
      <mesh ref={meshRef} position={[0, -0.5, -2]} scale={1.8}>
        <icosahedronGeometry args={[1, 1]} />
        
        <MeshTransmissionMaterial
          backside
          backsideThickness={1}
          samples={4}
          thickness={5}
          chromaticAberration={0.06}
          anisotropy={0.2}
          distortion={0.5}
          distortionScale={0.3}
          temporalDistortion={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={1}
          roughness={0.05}
          ior={1.5}
        />
        
        {/* Stark white edges to catch light */}
        <Edges
          linewidth={1}
          threshold={15} 
          color="#ffffff" 
          opacity={0.3}
          transparent
        />
      </mesh>
    </Float>
  );
}
