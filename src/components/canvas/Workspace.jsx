"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture, Float, RoundedBox, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

export default function Workspace() {
    const group = useRef();
    const { viewport } = useThree();

    // Load your specific images
    const monitorTexture = useTexture("/images/Gemini_Generated_Image_wwhn13wwhn13wwhn.png");
    monitorTexture.colorSpace = THREE.SRGBColorSpace;
    
    const frameTexture = useTexture("/images/image-wm.png");
    frameTexture.colorSpace = THREE.SRGBColorSpace;
    
    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime();
        
        // Gentle default floating
        group.current.position.y = (-0.5 + Math.sin(t / 1.5)) / 8;
        
        // Interactive mouse rotation tracking
        const targetX = (state.pointer.x * viewport.width) / 12;
        const targetY = (state.pointer.y * viewport.height) / 12;
        
        // Isometric default angle offset by -0.4 radians
        group.current.rotation.y += ((targetX - 0.4) - group.current.rotation.y) * 0.05;
        group.current.rotation.x += ((targetY * 0.5) - group.current.rotation.x) * 0.05;
    });

    return (
        <group scale={0.8} position={[0.5, -1.2, -1]}>
            {/* Ground Shadow */}
            <ContactShadows position={[0, -2.1, 0]} opacity={0.15} scale={30} blur={3.0} far={4.5} />
            
            <group ref={group}>
                <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
                    
                    {/* --- 1. The Desk --- */}
                    <group position={[0, -0.6, 0]}>
                        <RoundedBox args={[12, 0.3, 5]} radius={0.05} smoothness={1}>
                            <meshStandardMaterial color="#dedede" roughness={0.7} metalness={0.1} />
                        </RoundedBox>
                        {/* Desk Legs (Brutalist blocks) */}
                        <RoundedBox args={[0.5, 4, 4.5]} position={[-5, -2, 0]} radius={0.02}>
                            <meshStandardMaterial color="#cccccc" roughness={0.9} />
                        </RoundedBox>
                        <RoundedBox args={[0.5, 4, 4.5]} position={[5, -2, 0]} radius={0.02}>
                            <meshStandardMaterial color="#cccccc" roughness={0.9} />
                        </RoundedBox>
                    </group>

                    {/* --- 2. The Monitor --- */}
                    <group position={[0, 2.2, -1.5]} rotation={[-0.05, 0, 0]} scale={1.35}>
                        {/* Monitor Arm/Stand */}
                        <cylinderGeometry args={[0.2, 0.3, 2, 16]} />
                        <mesh position={[0, -1.2, -0.2]}>
                            <cylinderGeometry args={[0.15, 0.2, 1.5, 16]} />
                            <meshStandardMaterial color="#555" roughness={0.4} metalness={0.8} />
                        </mesh>
                        <mesh position={[0, -2, 0]}>
                            <boxGeometry args={[1.5, 0.1, 1.5]} />
                            <meshStandardMaterial color="#444" roughness={0.7} />
                        </mesh>

                        {/* Monitor Bezel */}
                        <RoundedBox args={[8.6, 3.8, 0.2]} radius={0.05} smoothness={1}>
                            <meshStandardMaterial color="#050505" roughness={0.8} metalness={0.1} />
                        </RoundedBox>

                        {/* Screen displaying image */}
                        <mesh position={[0, 0, 0.11]}>
                            <planeGeometry args={[8.4, 3.6]} />
                            <meshBasicMaterial map={monitorTexture} toneMapped={false} />
                        </mesh>
                    </group>

                    {/* --- 3. Keyboard & Desk Mat --- */}
                    {/* Desk Mat */}
                    <RoundedBox args={[5.5, 0.02, 2.2]} position={[0, -0.44, 0.8]} radius={0.1}>
                        <meshStandardMaterial color="#333" roughness={0.9} />
                    </RoundedBox>

                    <group position={[-0.5, -0.38, 0.8]} rotation={[0.05, 0, 0]}>
                        {/* Keyboard Base */}
                        <RoundedBox args={[3.2, 0.1, 1.2]} radius={0.02}>
                            <meshStandardMaterial color="#e0e0e0" metalness={0.5} roughness={0.4} />
                        </RoundedBox>
                        {/* Keycap area indentation */}
                        <RoundedBox args={[3.0, 0.11, 1.0]} position={[0, 0, 0]} radius={0.01}>
                            <meshStandardMaterial color="#1f1f1f" />
                        </RoundedBox>
                    </group>

                    {/* --- 4. Mouse --- */}
                    <group position={[1.8, -0.38, 0.8]}>
                        <mesh rotation={[0, -0.2, 0]}>
                            <capsuleGeometry args={[0.2, 0.3, 4, 8]} />
                            <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
                        </mesh>
                        {/* Scroll wheel */}
                        <mesh position={[0, 0.12, -0.15]} rotation={[Math.PI / 2, 0, 0]}>
                            <cylinderGeometry args={[0.04, 0.04, 0.08, 16]} />
                            <meshStandardMaterial color="#1a1a1a" />
                        </mesh>
                    </group>

                    {/* --- 5. CPU / PC Tower --- */}
                    <group position={[4.6, 1.2, -1.0]} rotation={[0, -0.1, 0]}>
                        {/* PC Case Main */}
                        <RoundedBox args={[2, 3.8, 3.5]} radius={0.05}>
                            <meshStandardMaterial color="#050505" roughness={0.8} metalness={0.1} />
                        </RoundedBox>
                    </group>

                    {/* --- 6. "Me" Picture Frame --- */}
                    <group position={[-3.5, 0.0, -1.0]} rotation={[0.1, 0.4, 0]}>
                        {/* Frame Stand */}
                        <mesh position={[0, 0.3, -0.3]} rotation={[1.2, 0, 0]}>
                            <cylinderGeometry args={[0.02, 0.02, 0.8, 8]} />
                            <meshStandardMaterial color="#888" />
                        </mesh>
                        {/* Frame Shell */}
                        <RoundedBox args={[1.5, 2.0, 0.1]} position={[0, 0.65, 0]} radius={0.02}>
                            <meshStandardMaterial color="#1a1a1a" />
                        </RoundedBox>
                        {/* Image inside frame */}
                        <mesh position={[0, 0.65, 0.051]}>
                            <planeGeometry args={[1.3, 1.8]} />
                            <meshBasicMaterial map={frameTexture} toneMapped={false} />
                        </mesh>
                        {/* Glass over image */}
                        <mesh position={[0, 0.65, 0.06]}>
                            <planeGeometry args={[1.3, 1.8]} />
                            <meshStandardMaterial transparent opacity={0.15} roughness={0.1} color="#ffffff" metalness={0.8} />
                        </mesh>
                    </group>

                </Float>
            </group>
        </group>
    );
}

useTexture.preload("/images/Gemini_Generated_Image_wwhn13wwhn13wwhn.png");
useTexture.preload("/images/image-wm.png");
