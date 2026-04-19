"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Workspace from "./Workspace";
import { Environment } from "@react-three/drei";

const Scene = () => {
    return (
        <Canvas
            className="w-full h-full absolute inset-0 z-0"
            camera={{ position: [0, 0, 15], fov: 45 }}
            gl={{
                antialias: false,
                powerPreference: "high-performance",
                alpha: true,
                stencil: false,
                depth: true
            }}
            dpr={[1, 1.5]}
        >
            <ambientLight intensity={0.4} />
            <directionalLight position={[0, 0, 1]} intensity={0.5} color="#ffffff" />
            <directionalLight position={[5, 5, -5]} intensity={1.5} color="#ffffff" />
            <directionalLight position={[-5, -5, -5]} intensity={1.5} color="#ffffff" />
            <Suspense fallback={null}>
                <Workspace />
                <Environment preset="studio" />
            </Suspense>
        </Canvas>
    );
};

export default Scene;
