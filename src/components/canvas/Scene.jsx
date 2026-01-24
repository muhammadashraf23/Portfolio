"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import EnergyRing from "./EnergyRing";
import { Environment } from "@react-three/drei";

const Scene = () => {
    return (
        <Canvas
            className="w-full h-full"
            camera={{ position: [0, 0, 15], fov: 45 }}
            gl={{
                antialias: false,
                powerPreference: "high-performance",
                alpha: true,
                stencil: false,
                depth: true
            }}
            dpr={[1, 1.5]} // Optimize for performance on high-DPI screens
        >
            <Suspense fallback={null}>
                {/* Single focal 3D element */}
                <EnergyRing />

                {/* Subtle ambient lighting */}
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={0.6} color="#7042f8" />

                <Environment preset="night" />
            </Suspense>
        </Canvas>
    );
};

export default Scene;
