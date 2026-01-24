"use client";

import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

const StarBackground = (props) => {
    const ref = useRef();

    // Manually generate star positions to avoid maath NaN issues
    // Increased range and count for full-screen immersive effect
    const [sphere] = useState(() => {
        const count = 6000;
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < positions.length; i++) {
            // Wider range (-10 to 10) to ensure stars are everywhere
            positions[i] = (Math.random() - 0.5) * 20;
        }
        return positions;
    });

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 25;
            ref.current.rotation.y -= delta / 30;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.012} // Adjusted size for immersive feel
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.7}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => {
    return (
        <div className="w-full h-full fixed inset-0 z-[-1] pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <Suspense fallback={null}>
                    <StarBackground />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarsCanvas;
