"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorTrail() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const isMobile = window.innerWidth < 768 || ("ontouchstart" in window);
        if (isMobile) return;

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("a") || target.closest("button")) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        document.body.style.cursor = "none";
        const style = document.createElement("style");
        style.id = "cursor-none-override";
        style.textContent = "*, *::before, *::after { cursor: none !important; }";
        document.head.appendChild(style);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
            document.body.style.cursor = "auto";
            const el = document.getElementById("cursor-none-override");
            if (el) el.remove();
        };
    }, []);

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
    };

    return (
        <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#0a0a0a]"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.4)" }}
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 0 : 1,
                    opacity: isHovering ? 0 : 1,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0 }}
            />
            <motion.div
                className="fixed top-0 left-0 rounded-full border-[1.5px]"
                animate={{
                    x: mousePosition.x - (isHovering ? 32 : 16),
                    y: mousePosition.y - (isHovering ? 32 : 16),
                    width: isHovering ? 64 : 32,
                    height: isHovering ? 64 : 32,
                    backgroundColor: isHovering ? "rgba(10,10,10,0.06)" : "transparent",
                    borderColor: isHovering ? "rgba(10,10,10,0.7)" : "rgba(10,10,10,0.5)",
                }}
                transition={spring}
                style={{
                    backdropFilter: isHovering ? "blur(2px)" : "none",
                }}
            />
        </div>
    );
}