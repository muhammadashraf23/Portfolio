"use client";

import { useState, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

const StarBackground = (props) => {
    const ref = useRef();

    // Use useMemo for better performance and stability
    const sphere = useMemo(() => {
        const count = 5000;
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < positions.length; i++) {
            const val = (Math.random() - 0.5) * 25;
            // Immediate check for NaN as a precaution
            positions[i] = isNaN(val) ? 0 : val;
        }
        return positions;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 30;
            ref.current.rotation.y -= delta / 35;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled={false}
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.012}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => {
    return (
        <div className="w-full h-full fixed inset-0 z-[-1] pointer-events-none select-none">
            <Canvas camera={{ position: [0, 0, 10] }} gl={{ antialias: false, powerPreference: "high-performance" }}>
                <Suspense fallback={null}>
                    <StarBackground />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarsCanvas;
