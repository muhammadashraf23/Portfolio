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
            dpr={[1, 2]}
        >
            <Suspense fallback={null}>
                {/* Single focal 3D element */}
                <EnergyRing />

                {/* Subtle ambient lighting */}
                <ambientLight intensity={0.3} />
                <pointLight position={[10, 10, 10]} intensity={0.5} />

                {/* Environment for realistic reflections */}
                <Environment preset="night" />
            </Suspense>
        </Canvas>
    );
};

export default Scene;
