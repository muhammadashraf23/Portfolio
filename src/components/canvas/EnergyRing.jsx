"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

// Create static particle distributions to avoid heavy recalculation on every mount
const spherePositions = random.inSphere(new Float32Array(3000), { radius: 2 });
const corePositions = random.inSphere(new Float32Array(1000), { radius: 0.5 });

const EnergyRing = (props) => {
    const ref = useRef();

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]} {...props}>
            <Points ref={ref} positions={spherePositions} stride={3} frustumCulled={false} >
                <PointMaterial
                    transparent
                    color="#7042f8"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={2} // Additive blending for glow
                />
            </Points>
            {/* Inner bright core */}
            <Points positions={corePositions} stride={3} frustumCulled={false} >
                <PointMaterial
                    transparent
                    color="#00d4ff"
                    size={0.01}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={2}
                />
            </Points>
        </group>
    );
};

export default EnergyRing;
