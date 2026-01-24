"use client";

import { useEffect, useState, useRef } from "react";

export default function CursorTrail() {
    const [particles, setParticles] = useState([]);
    const nextId = useRef(0);

    // theme colors
    const COLORS = [
        "rgba(168, 85, 247, 0.6)", // Purple
        "rgba(0, 212, 255, 0.5)",   // Cyan
        "rgba(112, 66, 248, 0.4)", // Deep Purple
    ];

    useEffect(() => {
        // Disable trail on mobile/touch devices for better performance
        const isMobile = window.innerWidth < 768 || ('ontouchstart' in window);
        if (isMobile) return;

        const handleMouseMove = (e) => {
            const newParticle = {
                id: nextId.current++,
                x: e.clientX,
                y: e.clientY,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                createdAt: Date.now(),
            };

            setParticles((prev) => [...prev.slice(-30), newParticle]);
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Periodically clean up old particles
        const interval = setInterval(() => {
            setParticles((prev) =>
                prev.filter((p) => Date.now() - p.createdAt < 2000)
            );
        }, 100);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {particles.map((particle) => (
                <Particle key={particle.id} particle={particle} />
            ))}
        </div>
    );
}

function Particle({ particle }) {
    const [active, setActive] = useState(false);

    useEffect(() => {
        // Trigger animation slightly after mount
        const timer = setTimeout(() => setActive(true), 10);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="absolute rounded-full pointer-events-none"
            style={{
                left: particle.x,
                top: particle.y,
                width: active ? '60px' : '10px',
                height: active ? '60px' : '10px',
                opacity: active ? 0 : 0.8,
                transform: `translate(-50%, -50%) ${active ? 'scale(1.5)' : 'scale(1)'}`,
                background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
                boxShadow: `0 0 20px ${particle.color}`,
                transition: "all 1.5s cubic-bezier(0.1, 0.1, 0.2, 1)",
                willChange: "transform, opacity, width, height",
            }}
        />
    );
}
